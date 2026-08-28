const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const cases = [
  { name: 'toki', path: '/prototypes/toki-no-issen/play.html' },
  { name: 'nocturne', path: '/prototypes/nocturne-aquarium/play.html' },
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
    const one = selector => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        disabled: !!el.disabled,
        x: Math.round(r.x * 10) / 10,
        y: Math.round(r.y * 10) / 10,
        width: Math.round(r.width * 10) / 10,
        height: Math.round(r.height * 10) / 10,
        text: (el.textContent || '').trim(),
      };
    };
    return {
      scrollY: window.scrollY,
      bet: one('#bet'),
      lever: one('#lever'),
      stops: [...document.querySelectorAll('.stop')].map((_, i) => one(`.stop:nth-of-type(${i + 2})`)),
      message: document.querySelector('#msg')?.textContent || '',
      log: document.querySelector('#log')?.textContent || '',
    };
  });
}

async function saveFailureEvidence(page, frame, label, error, history) {
  const safe = label.replace(/[^a-z0-9_-]/gi, '_');
  let current = null;
  try { current = await controlSnapshot(frame); } catch (_) {}
  const report = {
    label,
    error: String(error && (error.stack || error.message || error)),
    viewport: page.viewportSize(),
    current,
    history,
  };
  fs.writeFileSync(path.join(evidenceDir, `dual-${safe}-failure.json`), JSON.stringify(report, null, 2));
  await page.screenshot({ path: path.join(evidenceDir, `dual-${safe}-failure.png`), fullPage: true }).catch(() => {});
}

async function playRound(frame, preferredOrder) {
  const bet = frame.locator('#bet');
  const lever = frame.locator('#lever');
  const stops = frame.locator('.stop');

  if (await bet.isEnabled()) await bet.tap();
  await expect(lever).toBeEnabled({ timeout: 1500 });
  await lever.tap();

  for (const preferred of preferredOrder) {
    let target = stops.nth(preferred);
    if (!(await target.isEnabled())) {
      let found = false;
      for (let i = 0; i < await stops.count(); i += 1) {
        if (await stops.nth(i).isEnabled()) {
          target = stops.nth(i);
          found = true;
          break;
        }
      }
      expect(found, 'at least one STOP must be enabled while resolving').toBeTruthy();
    }
    await target.tap();
    await pageWait(frame, 55);
  }

  await expect.poll(async () => (await bet.isEnabled()) || (await lever.isEnabled()), {
    timeout: 1800,
    message: 'machine must return to a playable post-resolution state',
  }).toBeTruthy();
}

async function pageWait(frame, ms) {
  await frame.locator('body').evaluate((_, delay) => new Promise(resolve => setTimeout(resolve, delay)), ms);
}

for (const c of cases) {
  test(`${c.name}: iPhone repeated-play, touch, reload smoke`, async ({ page }) => {
    const errors = [];
    const history = [];
    page.on('pageerror', error => errors.push(String(error)));

    await page.goto(`http://127.0.0.1:4173${c.path}`, { waitUntil: 'networkidle' });
    let frame = await inner(page);
    await assertTouchLayout(page, frame, c.name);

    const orders = [
      [0, 1, 2], [1, 2, 0], [2, 0, 1], [0, 2, 1],
      [1, 0, 2], [2, 1, 0], [0, 1, 2], [2, 0, 1],
    ];
    for (let round = 0; round < orders.length; round += 1) {
      history.push({ round, phase: 'before', state: await controlSnapshot(frame) });
      try {
        await playRound(frame, orders[round]);
      } catch (error) {
        await saveFailureEvidence(page, frame, `${c.name}-round-${round + 1}`, error, history);
        throw error;
      }
      history.push({ round, phase: 'after', state: await controlSnapshot(frame) });
    }

    const stops = frame.locator('.stop');
    for (let i = 0; i < 3; i += 1) {
      await stops.nth(i).tap({ force: true }).catch(() => {});
    }
    expect(errors, `${c.name} page errors after stress taps`).toEqual([]);

    await page.reload({ waitUntil: 'networkidle' });
    frame = await inner(page);
    await assertTouchLayout(page, frame, `${c.name}-reload`);
    try {
      await playRound(frame, [1, 0, 2]);
    } catch (error) {
      await saveFailureEvidence(page, frame, `${c.name}-reload`, error, history);
      throw error;
    }
    expect(errors, `${c.name} page errors after reload`).toEqual([]);
  });
}
