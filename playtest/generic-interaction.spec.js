const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const targetPath = process.env.PLAYTEST_PATH || '/visual_test/index.html';
const evidenceDir = path.join(__dirname, 'evidence');

function safeName(value) {
  return value.replace(/[^a-z0-9_-]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase() || 'target';
}

async function saveShot(page, file) {
  await page.screenshot({ path: path.join(evidenceDir, file), fullPage: false });
}

test('generic iPhone eyes and hands smoke', async ({ page }) => {
  fs.mkdirSync(evidenceDir, { recursive: true });
  const base = process.env.PLAYTEST_BASE_URL || 'http://127.0.0.1:4173';
  const url = new URL(targetPath, base).toString();
  const label = safeName(targetPath);

  const consoleMessages = [];
  const pageErrors = [];
  page.on('console', msg => consoleMessages.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => pageErrors.push(String(err)));

  await page.goto(url, { waitUntil: 'networkidle' });
  await expect(page.locator('body')).toBeVisible();

  await saveShot(page, `${label}-00-left.png`);

  const dimensions = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    scrollWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    scrollHeight: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
  }));

  const maxX = Math.max(0, dimensions.scrollWidth - dimensions.viewportWidth);
  if (maxX > 0) {
    await page.evaluate(x => window.scrollTo({ left: x, top: 0, behavior: 'instant' }), Math.round(maxX / 2));
    await page.waitForTimeout(150);
    await saveShot(page, `${label}-01-middle.png`);

    await page.evaluate(x => window.scrollTo({ left: x, top: 0, behavior: 'instant' }), maxX);
    await page.waitForTimeout(150);
    await saveShot(page, `${label}-02-right.png`);

    await page.evaluate(() => window.scrollTo({ left: 0, top: 0, behavior: 'instant' }));
    await page.waitForTimeout(100);
  }

  const explicitTargets = page.locator('[data-playtest-primary], [data-playtest-action]');
  const fallbackTargets = page.locator('button:visible, a:visible, [role="button"]:visible');
  const targets = (await explicitTargets.count()) > 0 ? explicitTargets : fallbackTargets;
  const count = Math.min(await targets.count(), Number(process.env.PLAYTEST_MAX_ACTIONS || 5));

  console.log(`TARGET ${url}`);
  console.log(`VIEWPORT ${dimensions.viewportWidth}x${dimensions.viewportHeight}`);
  console.log(`DOCUMENT ${dimensions.scrollWidth}x${dimensions.scrollHeight}`);
  console.log(`INTERACTIVE_TARGETS ${count}`);

  for (let i = 0; i < count; i += 1) {
    const target = targets.nth(i);
    if (!(await target.isVisible()) || !(await target.isEnabled())) continue;

    const text = ((await target.innerText().catch(() => '')) || (await target.getAttribute('aria-label')) || `action-${i + 1}`).trim();
    console.log(`ACTION ${i + 1}: ${text}`);

    await target.scrollIntoViewIfNeeded();
    await target.tap().catch(async () => target.click());
    await page.waitForTimeout(250);
    await saveShot(page, `${label}-${String(i + 3).padStart(2, '0')}-after.png`);
  }

  await page.screenshot({ path: path.join(evidenceDir, `${label}-full.png`), fullPage: true });

  const state = await page.evaluate(() => {
    if (typeof window.__CHAPPY_PLAYTEST_STATE__ === 'function') return window.__CHAPPY_PLAYTEST_STATE__();
    if (window.__CHAPPY_PLAYTEST_STATE__ !== undefined) return window.__CHAPPY_PLAYTEST_STATE__;
    return null;
  });

  const report = {
    target: url,
    dimensions,
    horizontalScrollMax: maxX,
    interactiveTargets: count,
    finalUrl: page.url(),
    state,
    consoleMessages,
    pageErrors
  };
  fs.writeFileSync(path.join(evidenceDir, `${label}-report.json`), JSON.stringify(report, null, 2));

  expect(pageErrors, `page errors: ${pageErrors.join('\n')}`).toEqual([]);
});
