# Nocturne Machine Director Handoff — Product Run 5

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / RUN4_FULL_CADENCE_INTEGRATED / DETERMINISTIC_QA_IN_PROGRESS`

Latest `main` (`b2b55ed5ffb7a864f6bbafd14f1b61ae12b0a3dc` at review start), README, production workflow, Reality standard, dual-track status, Productization Master, current canonical Nocturne product code, and Product Run 4 Machine/Game/Visual/Sound handoffs were re-read before this decision. Latest main remains sole truth.

## What is now integrated

The canonical `prototypes/nocturne-aquarium/play-stage-v2.html` now loads both `visual-product-run4.js` and `sound-product-run4.js`. The Run 4 game spine therefore has authored consumers for `reel-nudge → anticipation-carry / strong-omen → chance-up → develop → judgment → win/miss → BONUS → OCEAN RECORD AT → end/normal-return` rather than visual/audio being detached demonstrations.

The current product controller preserves `BET → LEVER → SPIN → STOP×3` as the only basic operation. First STOP does not select a stage. Background stage tone persists across multiple games. Reel/core evidence feeds anticipation, development, judgment and hit eligibility.

## Largest current bottleneck

The largest blocker is now **proof and tuning of the complete payoff loop, not another feature layer**.

Run 4 added the first recognizable pachislot expectation/reward grammar and integrated Visual/Sound cadence, but the machine has not yet earned a product-quality claim that the full sequence is stable and satisfying across repeated play:

`quiet normal → reel/lever omen → carry → CHANCE UP → development → STOP3 judgment → miss/recovery or WIN → BONUS → BONUS result/GET/TOTAL → OCEAN RECORD AT → +G/remaining/total → end → normal return`.

The latest QA change `b2b55ed` makes BONUS→AT evidence deterministic through the canonical `nocturne:core-result` bridge. Its fresh Generic Autonomous Playtest run was still `in_progress` when this handoff was written. Do not build around a presumed PASS.

## Machine decision for the next cycle

1. **Do not add exploration, menus, another meta-system, or decorative lore UI.** The next value must come from pachislot timing and payoff.
2. Game & Reel should tune information gain at each STOP and distinguish weak/medium/strong reel evidence so STOP3 judgment is earned by the reels rather than a detached animation.
3. Preserve quiet games. Strong beats only work if normal play is allowed to breathe. Do not make every game `CHANCE`.
4. Visual should make development and judgment readable without tutorial prose, and make WIN/BONUS/AT entry substantially more releasing than anticipation. The finished-machine aquarium silhouette remains the visual benchmark.
5. Sound should preserve physical BET/LEVER/STOP sounds under presentation, use silence/dropout before judgment where useful, and reserve the largest release for actual hit/BONUS/AT transitions.
6. QA should prove at least one deterministic full lifecycle through canonical product wiring and continue repeated normal play/six STOP orders/iPhone geometry checks. Automated PASS does not equal Human/Reality/Audio PASS.

## Human shared text rule — MUST CONTINUE

Remove/minimize tutorial, debug and system-explanation prose such as “current state is …” or “choose with first STOP”. Do **not** remove normal pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL n枚`, `GET n枚`, `残り nG`, `+nG`, continuation/end, CZ/AT names and result displays. These are wanted pachislot performance tools and should be staged strongly when appropriate.

The target is not a textless art piece. It is a pachislot machine whose explanations are minimized while its pachislot information and payoff typography remain clear and exciting.

## Verification state

No new PASS is claimed in this Machine run. The fresh workflow for `b2b55ed` was still in progress at review time. `REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED / HUMAN_UNVERIFIED` remain. Browser automation can prove wiring/stability, but whether Nocturne is actually fun and whether its hit moments deliver sufficient release remains a Human Gate concern.

SIGNAL / FORGE / VAULT were not modified.