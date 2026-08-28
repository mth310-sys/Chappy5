const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const cases = [
  { name: 'toki', path: '/prototypes/toki-no-issen/play.html', rounds: 30 },
  { name: 'nocturne', path: '/prototypes/nocturne-aquarium/play.html', rounds: 50 },
];

const evidenceDir = path.join(__dirname, 'evidence');
fs.mkdirSync(evidenceDir, { recursive: true });

async function inner(page) {
  const frame = page.frameLocator('#game');
  await expect(frame.locator('body')).toBeVisible();
  // Integrated shells enhance the iframe control deck on their load handler.
  // Do not race that handoff: a 42px base BET can exist for a few ms before
  // the submission shell applies its >=46px touch geometry.
  await expect.poll(async () => {
    const bet = frame.locator('#bet');
    const box = await bet.boundingBox().catch(() => null);
    return box ? box.height : 0;
  }, { timeout: 1800, message: 'integrated touch deck must reach >=44px before play' }).toBeGreaterThanOrEqual(44);
  return frame;
}

async function assertTouchLayout(page, frame, label) {
  const viewport = page.viewportSize();
  expect(viewport && viewport.width).toBeTruthy();
  for (const selector of ['#bet', '#lever', '.stop']) {
    const items = frame.locator(selector);
    const count = await items.count();
    expect(count, `${label} ${selector} count`).toBeGreaterThan(0);
    for (let i = 0; i < count; i += 1) {
      const box = await items.nth(i).boundingBox();
      expect(box, `${label} ${selector}[${i}] box`).toBeTruthy();
      expect(box.height, `${label} ${selector}[${i}] touch height`).toBeGreaterThanOrEqual(44);
      expect(box.x, `${label} ${selector}[${i}] left clipping`).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width, `${label} ${selector}[${i}] right clipping`).toBeLessThanOrEqual(viewport.width + 1);
    }
  }
}

async function controlSnapshot(frame) {
  return frame.locator('body').evaluate(() => {
    const snap = el => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { disabled: !!el.disabled, x:+r.x.toFixed(1), y:+r.y.toFixed(1), width:+r.width.toFixed(1), height:+r.height.toFixed(1), text:(el.textContent||'').trim() };
    };
    return {
      scrollY: window.scrollY,
      domNodes: document.querySelectorAll('*').length,
      activeAnimations: document.getAnimations ? document.getAnimations().filter(a => a.playState === 'running').length : null,
      machineClass: document.querySelector('.machine')?.className || '',
      bet: snap(document.querySelector('#bet')),
      lever: snap(document.querySelector('#lever')),
      stops: [...document.querySelectorAll('.stop')].map(snap),
      message: document.querySelector('#msg')?.textContent || '',
      log: document.querySelector('#log')?.textContent || '',
    };
  });
}

async function topAudioState(page) {
  return page.locator('body').evaluate(body => body.dataset.audioTech || 'not-started');
}

function writeCheckpoint(name, payload) {
  const safe = name.replace(/[^a-z0-9_-]/gi, '_');
  fs.writeFileSync(path.join(evidenceDir, `dual-${safe}-checkpoint.json`), JSON.stringify(payload, null, 2));
}

async function checkpoint(page, frame, name, round, phase, extra = {}) {
  const state = await controlSnapshot(frame);
  const audioTech = await topAudioState(page).catch(() => 'page-unavailable');
  const payload = { name, round, phase, audioTech, state, ...extra };
  writeCheckpoint(name, payload);
  return payload;
}

async function saveFailureEvidence(page, frame, label, error, history) {
  const safe = label.replace(/[^a-z0-9_-]/gi, '_');
  let current = null;
  let audioTech = 'page-unavailable';
  try { current = await controlSnapshot(frame); } catch (_) {}
  try { audioTech = await topAudioState(page); } catch (_) {}
  fs.writeFileSync(path.join(evidenceDir, `dual-${safe}-failure.json`), JSON.stringify({ label, error:String(error?.stack||error), viewport:page.viewportSize(), audioTech, current, history }, null, 2));
  await page.screenshot({ path:path.join(evidenceDir, `dual-${safe}-failure.png`), fullPage:true }).catch(()=>{});
}

async function fingerTap(page, locator, label) {
  await expect(locator, `${label} enabled`).toBeEnabled({ timeout: 1800 });
  const a = await locator.boundingBox();
  await page.waitForTimeout(34);
  const b = await locator.boundingBox();
  expect(a && b, `${label} geometry exists`).toBeTruthy();
  const drift = Math.max(Math.abs(a.x-b.x), Math.abs(a.y-b.y), Math.abs(a.width-b.width), Math.abs(a.height-b.height));
  expect(drift, `${label} control geometry drift`).toBeLessThanOrEqual(0.75);
  await page.touchscreen.tap(b.x + b.width/2, b.y + b.height/2);
}

async function playRound(page, frame, preferredOrder, hooks = {}) {
  const bet = frame.locator('#bet');
  const lever = frame.locator('#lever');
  const stops = frame.locator('.stop');
  if (await bet.isEnabled()) {
    if (hooks.before) await hooks.before('bet');
    await fingerTap(page, bet, 'BET');
    if (hooks.after) await hooks.after('bet');
  }
  if (hooks.before) await hooks.before('lever');
  await fingerTap(page, lever, 'LEVER');
  if (hooks.after) await hooks.after('lever');
  await page.touchscreen.tap(69, 498).catch(()=>{});
  let stopSeq = 0;
  for (const preferred of preferredOrder) {
    let target = stops.nth(preferred);
    if (!(await target.isEnabled())) {
      let found = false;
      for (let i=0;i<await stops.count();i+=1) if (await stops.nth(i).isEnabled()) { target=stops.nth(i); found=true; break; }
      expect(found, 'at least one STOP must be enabled while resolving').toBeTruthy();
    }
    stopSeq += 1;
    if (hooks.before) await hooks.before(`stop${stopSeq}`);
    await fingerTap(page, target, `STOP ${preferred+1}`);
    if (hooks.after) await hooks.after(`stop${stopSeq}`);
    await page.waitForTimeout(28);
  }
  await expect.poll(async()=> (await bet.isEnabled()) || (await lever.isEnabled()), { timeout:1800, message:'machine must return to playable post-resolution state' }).toBeTruthy();
}

function orderFor(round) {
  const orders=[[0,1,2],[1,2,0],[2,0,1],[0,2,1],[1,0,2],[2,1,0]];
  return orders[round % orders.length];
}

for (const c of cases) {
  test(`${c.name}: iPhone ${c.rounds}G touch, repeat, misuse, reload smoke`, async ({ page }) => {
    test.setTimeout(90000);
    const errors=[]; const history=[]; const crashEvents=[];
    page.on('pageerror', e=>errors.push(String(e)));
    page.on('crash', () => {
      crashEvents.push({ at: Date.now(), reason: 'page-crash-event' });
      writeCheckpoint(c.name, { name:c.name, phase:'page-crash-event', crashEvents });
    });
    page.on('close', () => {
      if (!crashEvents.length) writeCheckpoint(c.name, { name:c.name, phase:'page-close-event' });
    });
    await page.goto(`http://127.0.0.1:4173${c.path}`, { waitUntil:'networkidle' });
    let frame=await inner(page);
    await assertTouchLayout(page, frame, c.name);
    const baseline = await checkpoint(page, frame, c.name, 0, 'loaded');
    const baselineNodes = baseline.state.domNodes;
    for (let round=0;round<c.rounds;round+=1) {
      if (round % 5 === 0) history.push(await checkpoint(page, frame, c.name, round, 'before-round'));
      try {
        await playRound(page, frame, orderFor(round), {
          before: phase => checkpoint(page, frame, c.name, round, `before-${phase}`),
          after: phase => checkpoint(page, frame, c.name, round, `after-${phase}`),
        });
      } catch (error) { await saveFailureEvidence(page, frame, `${c.name}-round-${round+1}`, error, history); throw error; }
      if (round === 0) {
        const audioTech = await topAudioState(page);
        expect(audioTech, `${c.name} technical audio state after first real gesture`).not.toBe('resume-failed');
        expect(audioTech, `${c.name} technical audio state after first real gesture`).not.toBe('not-started');
      }
      if (round % 5 === 4) {
        const snap = await checkpoint(page, frame, c.name, round, 'after-round');
        history.push(snap);
        expect(snap.state.domNodes, `${c.name} DOM node growth after repeated play`).toBeLessThanOrEqual(baselineNodes + 12);
      }
    }
    const stops=frame.locator('.stop');
    for (let i=0;i<6;i+=1) {
      const box=await stops.nth(i%3).boundingBox();
      if (box) await page.touchscreen.tap(box.x+box.width/2, box.y+box.height/2);
    }
    expect(errors, `${c.name} page errors after stress taps`).toEqual([]);
    expect(crashEvents, `${c.name} page crash events`).toEqual([]);
    await page.reload({ waitUntil:'networkidle' });
    frame=await inner(page);
    await assertTouchLayout(page, frame, `${c.name}-reload`);
    try { await playRound(page, frame, [1,0,2]); }
    catch (error) { await saveFailureEvidence(page, frame, `${c.name}-reload`, error, history); throw error; }
    expect(errors, `${c.name} page errors after reload`).toEqual([]);
    expect(crashEvents, `${c.name} page crash events after reload`).toEqual([]);
  });
}