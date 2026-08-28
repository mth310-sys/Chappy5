const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const cases = [
  {
    name: 'toki',
    path: '/prototypes/toki-no-issen/play.html',
    shell: 'prototypes/toki-no-issen/play.html',
    profile: 'prototypes/toki-no-issen/audio-timeline.js',
  },
  {
    name: 'nocturne',
    path: '/prototypes/nocturne-aquarium/play.html',
    shell: 'prototypes/nocturne-aquarium/play.html',
    profile: 'prototypes/nocturne-aquarium/audio-routing.js',
  },
];

const evidenceDir = path.join(__dirname, 'evidence');
fs.mkdirSync(evidenceDir, { recursive: true });

function writeEvidence(name, payload) {
  fs.writeFileSync(
    path.join(evidenceDir, `submission-${name}.json`),
    JSON.stringify(payload, null, 2),
  );
}

for (const c of cases) {
  test(`${c.name}: submission viewport, controls, audio boot and profile evidence`, async ({ page }) => {
    test.setTimeout(30000);
    await page.goto(`http://127.0.0.1:4173${c.path}`, { waitUntil: 'networkidle' });

    const frame = page.frameLocator('#game');
    await expect(frame.locator('body')).toBeVisible();

    const outer = await page.evaluate(() => ({
      width: innerWidth,
      height: innerHeight,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      audioTech: document.body.dataset.audioTech || 'not-started',
    }));

    expect(outer.width, 'iPhone project should remain around 390px wide').toBeLessThanOrEqual(430);
    expect(outer.scrollWidth, 'integrated shell must not horizontally overflow').toBeLessThanOrEqual(outer.width + 1);

    const innerLayout = await frame.locator('body').evaluate(() => {
      const rect = el => {
        const r = el.getBoundingClientRect();
        return { x:r.x, y:r.y, width:r.width, height:r.height, bottom:r.bottom, right:r.right, disabled:!!el.disabled };
      };
      return {
        width: innerWidth,
        height: innerHeight,
        scrollWidth: document.documentElement.scrollWidth,
        scrollHeight: document.documentElement.scrollHeight,
        bet: rect(document.querySelector('#bet')),
        lever: rect(document.querySelector('#lever')),
        stops: [...document.querySelectorAll('.stop')].map(rect),
      };
    });

    expect(innerLayout.scrollWidth, 'prototype must not horizontally overflow').toBeLessThanOrEqual(innerLayout.width + 1);
    for (const [label, control] of [
      ['BET', innerLayout.bet],
      ['LEVER', innerLayout.lever],
      ...innerLayout.stops.map((s, i) => [`STOP${i+1}`, s]),
    ]) {
      expect(control.height, `${label} touch height`).toBeGreaterThanOrEqual(44);
      expect(control.x, `${label} left edge`).toBeGreaterThanOrEqual(0);
      expect(control.right, `${label} right edge`).toBeLessThanOrEqual(innerLayout.width + 1);
      expect(control.y, `${label} top edge`).toBeGreaterThanOrEqual(0);
      expect(control.bottom, `${label} must be visible without vertical page scrolling`).toBeLessThanOrEqual(innerLayout.height + 1);
    }

    const bet = frame.locator('#bet');
    const lever = frame.locator('#lever');
    if (await bet.isEnabled()) await bet.tap({ force: true });
    if (await lever.isEnabled()) await lever.tap({ force: true });
    await page.waitForTimeout(80);

    const audioAfterGesture = await page.locator('body').evaluate(body => body.dataset.audioTech || 'not-started');
    expect(audioAfterGesture, 'real user gesture must attempt Web Audio startup').not.toBe('not-started');
    expect(audioAfterGesture, 'Safari-style audio resume must not fail').not.toBe('resume-failed');

    const shellText = fs.readFileSync(path.join(process.cwd(), c.shell), 'utf8');
    const profileText = fs.readFileSync(path.join(process.cwd(), c.profile), 'utf8');
    const profileName = path.basename(c.profile);
    const profileIntegrated = shellText.includes(profileName);

    writeEvidence(c.name, {
      path: c.path,
      viewport: outer,
      innerLayout,
      audioAfterGesture,
      audioProfile: {
        file: c.profile,
        exists: profileText.length > 0,
        integratedIntoPublishedShell: profileIntegrated,
        note: profileIntegrated
          ? 'Sound Run 5 profile is referenced by the deployed integrated shell.'
          : 'Sound Run 5 profile exists on main but is not referenced by the deployed integrated shell; do not claim its new routing/timeline is audible yet.',
      },
    });

    // Sound Run 5 explicitly left these profiles integration-pending. Record this as submission evidence
    // without breaking otherwise-playable prototypes; Machine/Sound must close it before claiming the
    // new profile behavior is part of the submitted build.
    expect(profileText.length, 'audio profile source must exist').toBeGreaterThan(0);
  });
}
