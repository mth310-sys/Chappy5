# Technical References

Last updated: 2026-08-25 19:25 JST

README.md permits other 遊創舎 repositories to be consulted read-only for technical reference. No other repository was modified.

## mth310-sys/yusosha-usage-test

Observed reusable patterns:

- `test_phaser_minimal/index.html`: Phaser 3.90.0 via jsDelivr, fixed logical width 390, `Phaser.Scale.FIT`, `CENTER_HORIZONTALLY`, `touch-action: none`, pointer input. This is directly relevant to an iPhone-first browser game shell.
- repository root: `package.json`, `playwright.config.js`, `.github/` and multiple browser-test projects show an established path for browser regression testing.
- general project organization separates CSS/JS and test targets when complexity grows.

Adoption decision:

- **ADOPT** the proven 390px mobile viewport assumptions, Phaser 3.90.0 CDN pattern, pointer-first input and future Playwright regression path.
- **DO NOT COPY** existing game-specific code, themes, characters, slot mechanics or proprietary game data.
- First playable remains a single `index.html` intentionally so the product hypothesis can be tested before introducing structure that may be discarded. Split modules only when product code growth justifies it.

## mth310-sys/yusosha-design-lab / mth310-sys/yusosha-slot

Repositories were identified as available technical assets, but detailed copying was not required for the first playable. They remain eligible for later read-only inspection when a concrete need arises (responsive UI composition, visual effects, asset handling, etc.). Avoid research for research's sake.

## Verification state

- Repository/file existence and the cited Phaser/mobile patterns: `OBSERVED`
- Suitability of the adopted pattern for Chappy5 on real iPhone Safari: `UNVERIFIED` until human/device test
