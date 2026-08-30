# Nocturne Aquarium — Playtest & QA Handoff / Product Run 2

Date: 2026-08-30
Owner: Playtest & QA Director
Target: `prototypes/nocturne-aquarium/play-stage-v2.html`

## Source of truth reviewed

Latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/NOCTURNE_PRODUCTIZATION_MASTER_20260830.md`, current Nocturne product code, and current Machine/Game-Reel/Visual/Sound handoffs were reviewed before QA changes.

## Concrete QA changes

`playtest/nocturne-product-qa.spec.js` was upgraded for product run 4 and the deterministic `?qa=product-loop` route.

Coverage now includes:
- iPhone 390px viewport and horizontal overflow
- all six STOP orders across 36G continuous play
- idle STOP bursts, rapid/mistaken taps, BET during spin, reload
- width + height >= 44px touch-target checks for BET / LEVER / STOP
- control geometry stability
- JS errors and WebKit crash signals
- DOM and running-animation growth
- hidden legacy exploration/observation UI
- absence of explanatory/tutorial phrases that should not be required to understand play
- deterministic BONUS → AT → normal-return reachability checks through QA-only reel evidence

## Finding and fix

The strengthened WebKit iPhone test found a real control defect before deeper loop assertions ran:

- STOP rendered width at 390px: **35.328125px**
- required minimum: **44px**
- GitHub Actions run `33305073053`: Nocturne product integrated QA failed on this assertion while generic interaction, dual repeated-play, and submission-readiness steps passed.

Fix committed in `34cebe110cc4528cbf3fcb868f25aa6abdcd8e29`:
- Nocturne product control grid on <=390px now reserves `minmax(44px,1fr)` for all three STOP buttons.
- STOP width is explicitly clamped to at least 44px.
- outer BET/LEVER columns and gaps were tightened rather than allowing horizontal overflow.

A fresh WebKit iPhone workflow run (`33305296801`) was started by that fix. At handoff time it is still in progress, so **automated product QA is NOT claimed PASS yet**.

## Shared player-facing text rule — MUST remain shared by all Directors

Remove/minimize explanatory, tutorial, debug, or system-state prose. Do **not** remove ordinary pachislot presentation/information text. `CHANCE`, `BONUS`, `WIN`, `TOTAL / GET 枚数`, `残りG`, `+G`, continuation/end, CZ/AT names, and result displays are wanted when they function as actual pachislot presentation.

The test flags phrases that explain the system to the player; it does not treat normal pachislot result/presentation text as a defect.

## Current QA judgment

- Generic interaction evidence: passed on the first strengthened run.
- Dual repeated-play evidence: passed on the first strengthened run.
- Submission-readiness automated evidence: passed on the first strengthened run.
- Product integrated QA: first strengthened run failed on the newly discovered 35.33px STOP target; fix is on main; rerun pending.
- Reality PASS: **NOT claimed**.
- Audio PASS: **NOT claimed**.
- Human/fun PASS: **NOT claimed**.

## Machine Director handoff

Do not treat automated stability as proof that Nocturne is fun as pachislot. The current human concern remains the decisive product risk: it must develop recognizable normal → omen → reel/role response → anticipation → chance-up → development/judgment → hit/miss → BONUS/AT → continuation/return beats, with LCD / reels / light / sound carrying play and explanatory prose staying out of the way.

Next Machine review should first read the final result of workflow `33305296801`; if it fails, the failing product assertion is the next concrete bottleneck. Preserve SIGNAL / FORGE / VAULT and Toki separation.