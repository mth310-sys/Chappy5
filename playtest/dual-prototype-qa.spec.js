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
      bet: snap(document.querySelector('#bet')),
      lever: snap(document.querySelector('#lever')),
      stops: [...document.querySelectorAll('.stop')].map(snap),
      message: document.querySelector('#msg')?.textContent || '',
      log: document.querySelector('#log')?.textContent || '',
    };
  });
}

async function saveFailureEvidence(page, frame, label, error, history) {
  const safe = label.replace(/[^a-z0-9_-]/gi, '_');
  let current = null;
  try { current = await controlSnapshot(frame); } catch (_) {}
  fs.writeFileSync(path.join(evidenceDir, `dual-${safe}-failure.json`), JSON.stringify({ label, error:String(error?.stack||error), viewport:page.viewportSize(), current, history }, null, 2));
  await page.screenshot({ path:path.join(evidenceDir, `dual-${safe}-failure.png`), fullPage:true }).catch(()=>{});
}

// Playwright locator.tap() waits for visual stability. These prototypes deliberately animate
// cabinet/reel presentation around STOP events, so that check can false-fail despite a stationary
// physical control deck. For iPhone QA we instead verify geometry ourselves and issue an actual
// touchscreen coordinate tap at the button center, matching a finger more closely.
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

async function playRound(page, frame, preferredOrder) {
  const bet = frame.locator('#bet');
  const lever = frame.locator('#lever');
  const stops = frame.locator('.stop');
  if (await bet.isEnabled()) await fingerTap(page, bet, 'BET');
  await fingerTap(page, lever, 'LEVER');

  // Wrong/early touch: disabled BET during spin must not corrupt state.
  await page.touchscreen.tap(69, 498).catch(()=>{});

  for (const preferred of preferredOrder) {
    let target = stops.nth(preferred);
    if (!(await target.isEnabled())) {
      let found = false;
      for (let i=0;i<await stops.count();i+=1) if (await stops.nth(i).isEnabled()) { target=stops.nth(i); found=true; break; }
      expect(found, 'at least one STOP must be enabled while resolving').toBeTruthy();
    }
    await fingerTap(page, target, `STOP ${preferred+1}`);
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
    const errors=[]; const history=[];
    page.on('pageerror', e=>errors.push(String(e)));
    await page.goto(`http://127.0.0.1:4173${c.path}`, { waitUntil:'networkidle' });
    let frame=await inner(page);
    await assertTouchLayout(page, frame, c.name);

    for (let round=0;round<c.rounds;round+=1) {
      if (round % 10 === 0) history.push({ round, phase:'before', state:await controlSnapshot(frame) });
      try { await playRound(page, frame, orderFor(round)); }
      catch (error) { await saveFailureEvidence(page, frame, `${c.name}-round-${round+1}`, error, history); throw error; }
      if (round % 10 === 9) history.push({ round, phase:'after', state:await controlSnapshot(frame) });
    }

    // Rapid stray STOP touches while idle must be harmless.
    const stops=frame.locator('.stop');
    for (let i=0;i<6;i+=1) {
      const box=await stops.nth(i%3).boundingBox();
      if (box) await page.touchscreen.tap(box.x+box.width/2, box.y+box.height/2);
    }
    expect(errors, `${c.name} page errors after stress taps`).toEqual([]);

    await page.reload({ waitUntil:'networkidle' });
    frame=await inner(page);
    await assertTouchLayout(page, frame, `${c.name}-reload`);
    try { await playRound(page, frame, [1,0,2]); }
    catch (error) { await saveFailureEvidence(page, frame, `${c.name}-reload`, error, history); throw error; }
    expect(errors, `${c.name} page errors after reload`).toEqual([]);
  });
}
