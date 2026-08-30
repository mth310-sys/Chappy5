# Nocturne Playtest & QA Director Handoff — Product Run 1

Date: 2026-08-30
Status: `PRODUCT_QA_IN_PROGRESS`

## Latest main inspected
QA began after Sound handoff `aa7ca286`, with integrated audio implementation `858994f`, Visual/Mechanism `73ac2ae`, and current `play-stage-v2.html` product runtime.

## QA implementation
Added `playtest/nocturne-product-qa.spec.js` and wired it into `.github/workflows/generic-playtest.yml`.

Coverage added specifically for the product shell rather than the older `play.html` prototype:
- nested same-origin product shell reachability
- iPhone 390-class WebKit project
- 36G continuous play
- all six STOP orders
- idle STOP misuse
- BET touch during spin
- reload and post-reload play
- >=44px BET/LEVER/STOP touch targets
- horizontal overflow
- 34ms control-geometry drift <=0.75px
- JS page errors and WebKit crash events
- DOM growth <= baseline +20
- animation count observation
- product Game Event spine presence
- observation of develop / BONUS / BONUS-return reachability without falsely requiring temporary reel randomness to hit within 36G

## Important QA observation from static inspection
The old dual-prototype QA still targets `/prototypes/nocturne-aquarium/play.html`; it does not validate the new product shell. This run closes that coverage gap with the dedicated product test.

The product runtime currently uses reel-evidence-dependent BONUS eligibility. Therefore a 36G stochastic run cannot honestly guarantee BONUS reachability. A future Game/Machine run should add a test-only deterministic event/reel-evidence injection path or deterministic seeded outcome mode so CI can assert `develop → resolve → bonus-hit → bonus-open → bonus-end` exhaustively without changing public play behavior.

## CI
Workflow run `33302529429` was triggered by commit `a65d08d` and was still `in_progress` when this handoff was written. No PASS is claimed until that run completes and the product QA step is inspected.

## Verification status
`PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED` remains.
Human audio/visual/reality acceptance remains required.

## Next Machine Director
1. Read final status/logs for workflow run `33302529429`.
2. Fix any failing product QA before feature expansion.
3. Add deterministic QA-only state/outcome control for full BONUS lifecycle reachability.
4. Preserve stationary touch geometry and low-churn WebKit architecture.
5. SIGNAL / FORGE / VAULT remain untouched.
