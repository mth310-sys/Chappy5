# Generic AI Interaction Test Harness

This directory is shared infrastructure, not a game implementation.

## Purpose

Give Chappy5 an automated "hand" in addition to Visual QA's "eyes".
Playwright WebKit runs with an iPhone 12 device profile and can tap/click visible controls, capture before/after screenshots, collect console/page errors, and record optional game state.

## Default smoke mode

`generic-interaction.spec.js` loads `PLAYTEST_PATH` (default `/visual_test/index.html`).
It prefers elements marked with `data-playtest-primary` or `data-playtest-action`; otherwise it falls back to visible buttons/links/role=button controls.

## Optional state hook

A game may expose either:

- `window.__CHAPPY_PLAYTEST_STATE__ = {...}`
- `window.__CHAPPY_PLAYTEST_STATE__ = () => ({...})`

The generic harness records that state in its JSON report. This hook is optional and must not change normal gameplay.

## Game-specific scenarios

The generic smoke test verifies that the browser can see and operate the current build. For meaningful gameplay verification, Directors should add focused scenario specs for the selected game's real rules (success, failure, retry, save/reload, alternate strategies, drag/swipe, etc.). Do not confuse automated completion with human fun.

## Workflow

`.github/workflows/generic-playtest.yml` can be run manually with a repository path and is also triggered when this shared harness changes. Evidence is stored as a short-lived GitHub Actions artifact.
