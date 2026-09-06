const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const targetPath = process.env.PLAYTEST_PATH || '/src/visual/furniture/island-linked-09.html';
const evidenceDir = path.join(__dirname, 'evidence');

function safeName(value) {
  return value.replace(/[^a-z0-9_-]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase() || 'target';
}

async function saveShot(page, file) {
  await page.screenshot({ path: path.join(evidenceDir, file), fullPage: false });
}

test('generic iPhone eyes and hands smoke', async ({ page }) => {
  test.setTimeout(60000);
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

  const scrollTarget = await page.evaluate(() => {
    const candidates = [...document.querySelectorAll('[data-playtest-scroll], .stage')];
    const internal = candidates.find(el => el.scrollWidth > el.clientWidth + 1);
    if (internal) {
      return {
        kind: 'element',
        selector: internal.hasAttribute('data-playtest-scroll') ? '[data-playtest-scroll]' : '.stage',
        maxX: internal.scrollWidth - internal.clientWidth
      };
    }
    return {
      kind: 'window',
      selector: null,
      maxX: Math.max(0, Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - window.innerWidth)
    };
  });

  async function scrollX(x) {
    if (scrollTarget.kind === 'element') {
      await page.locator(scrollTarget.selector).evaluate((el, value) => el.scrollTo({ left: value, top: el.scrollTop, behavior: 'instant' }), x);
    } else {
      await page.evaluate(value => window.scrollTo({ left: value, top: window.scrollY, behavior: 'instant' }), x);
    }
  }

  if (scrollTarget.maxX > 0) {
    await scrollX(Math.round(scrollTarget.maxX / 2));
    await page.waitForTimeout(150);
    await saveShot(page, `${label}-01-middle.png`);

    await scrollX(scrollTarget.maxX);
    await page.waitForTimeout(150);
    await saveShot(page, `${label}-02-right.png`);

    await scrollX(0);
    await page.waitForTimeout(100);
  }

  const explicitTargets = page.locator('[data-playtest-primary], [data-playtest-action]');
  const fallbackTargets = page.locator('button:visible, a:visible, [role="button"]:visible');
  const targets = (await explicitTargets.count()) > 0 ? explicitTargets : fallbackTargets;
  const count = Math.min(await targets.count(), Number(process.env.PLAYTEST_MAX_ACTIONS || 5));

  console.log(`TARGET ${url}`);
  console.log(`VIEWPORT ${dimensions.viewportWidth}x${dimensions.viewportHeight}`);
  console.log(`DOCUMENT ${dimensions.scrollWidth}x${dimensions.scrollHeight}`);
  console.log(`HORIZONTAL_SCROLL ${scrollTarget.kind} ${scrollTarget.maxX}`);
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
    horizontalScroll: scrollTarget,
    interactiveTargets: count,
    finalUrl: page.url(),
    state,
    consoleMessages,
    pageErrors
  };
  fs.writeFileSync(path.join(evidenceDir, `${label}-report.json`), JSON.stringify(report, null, 2));

  expect(pageErrors, `page errors: ${pageErrors.join('\n')}`).toEqual([]);
});
