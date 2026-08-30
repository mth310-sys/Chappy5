# Nocturne Visual & Mechanism Director Handoff — Product Run 4

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / PACHISLOT_VISUAL_CADENCE_AUTHORED / INTEGRATION_PENDING`

Latest `main`, README, `PACHISLOT_PRODUCTION_WORKFLOW`, `REALITY_PRESENTATION_STANDARD`, `NOCTURNE_PRODUCTIZATION_MASTER_20260830`, current Nocturne product code, Visual Product Run 3 handoff, and Game & Reel Product Run 4 handoff were re-read before work.

## Human shared text rule — MUST CONTINUE

Remove/minimize tutorial, debug and system-explanation prose. Do **not** remove ordinary pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET枚数`, `残りG`, `+G`, continuation/end, CZ/AT names and result displays. These are wanted pachislot performance elements, not explanatory UI.

## Concrete main change

- `ab2fdac` adds `prototypes/nocturne-aquarium/visual-product-run4.js`.
- Run 4 authors a new event-driven LCD/cabinet cadence for the Game & Reel Run 4 event spine: `reel-nudge → anticipation-carry / strong-omen → chance-up → develop → judgment → win/miss → BONUS count → AT count/continue/end`.
- Quiet normal play remains visually quiet. Weak reel nudges affect the reel glass/waterline briefly; carried anticipation reveals more submerged-city depth; strong omen brings in the circular optical motif; development advances a distant underwater silhouette; judgment closes the scene around the physical reel window; hit releases the side tanks/lower mechanism and machine-natural result typography.
- BONUS/AT authoring includes compact `残り nG / TOTAL n枚`, `GET n枚`, `+nG`, `WIN`, `BONUS`, and `OCEAN RECORD` presentation. These are pachislot result/information elements, not tutorial prose.
- Added effects are bounded event-time class/style transitions. No requestAnimationFrame loop, high-frequency DOM mutation, new blend-mode stack, or large blur/filter chain was added.

## Integration state

`visual-product-run4.js` is committed on main but is **not yet wired into `play-stage-v2.html` in this run**. Do not claim Run 4 visible in the canonical product page until that script include is added and fresh WebKit QA verifies it. This is intentionally recorded rather than making a false PASS claim.

Next Director should preserve the Run 4 event distinctions. If integrating before Sound work, load `visual-product-run4.js` after `visual-product-run3.js`; then Sound should punctuate the same nudge/carry/omen/chance/develop/judgment/win/BONUS/AT beats rather than flattening them into one generic intensity.

## Verification

No Visual / Reality / Playtest / Human PASS is claimed. `VISUAL_UNVERIFIED / REALITY_UNVERIFIED / PLAYTEST_UNVERIFIED / HUMAN_UNVERIFIED` remain until canonical integration and real WebKit/iPhone visual evidence exist.

SIGNAL / FORGE / VAULT were not modified.
