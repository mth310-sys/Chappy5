# Nocturne Game & Reel Director Handoff — Product Run 4

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / PACHISLOT_EXPECTATION_REWARD_LOOP_DEEPENED / FRESH_QA_PENDING`

Latest `main`, README, production workflow, Reality standard, Productization Master direction, current Nocturne product path and Machine Product Run 4 handoff were re-read before this run.

## Concrete main update

- `ef63b5a` — rewrote the product-loop controller in `prototypes/nocturne-aquarium/play-stage-v2.html` around a clearer pachislot expectation/reward grammar while keeping the canonical core reel result authoritative.
- BET → LEVER → SPIN → STOP×3 remains the only basic operation. First STOP never selects a stage; stage tone remains background-only and changes after multiple games.
- Normal play now distinguishes quiet games, weak reel nudges, carried anticipation, lever tiers, STOP1/STOP2 chance-up, development, third-STOP judgment, miss/carry and hit.
- Strong reel evidence remains the basis for hit eligibility. Prototype-only carry thresholds are explicit internally and are not presented as verified machine specs.
- Added machine-natural presentation events/text: `CHANCE`, `WIN`, `BONUS`, `GET n枚`, `TOTAL n枚`, `+1G`, plus BONUS/AT remaining/total events for Visual/Sound to author against.
- BONUS now accumulates prototype charge and payout total over repeated reel games. Its result can open the prototype `OCEAN RECORD` AT direction; AT tracks remaining games, payout total, +1G continuation from strong reel evidence, end total, then returns to normal play.
- Added/clarified shared Game Events including `reel-nudge`, `anticipation-carry`, `strong-omen`, `judgment`, `win`, `bonus-count`, `at-count`, and `payout` so reel evidence can drive LCD/light/audio rather than exist as decoration.

## Human shared text rule — MUST CONTINUE

Remove/minimize tutorial, debug and system-explanation prose. Do **not** remove normal pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET枚数`, `残りG`, `+G`, continuation/end, CZ/AT names and result displays. These are wanted pachislot performance tools.

No exploration/menu gameplay or first-STOP stage selection may return. Persistent world/stage changes must remain behind ordinary pachislot play.

## Next Director

Visual & Mechanism should consume the new `reel-nudge → chance-up → develop → judgment → win/miss → BONUS/AT count/continue/end` event path and make the differences legible through aquarium LCD, cabinet light, side tanks, reel-window depth and lower clock mechanism. Do not replace the event distinctions with explanatory prose.

## Verification state

Fresh WebKit/product QA for `ef63b5a` was not complete when this handoff was written. Therefore no new Product QA / Reality / Audio / Human PASS is claimed. `REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED / HUMAN_UNVERIFIED` remain.

SIGNAL / FORGE / VAULT were not modified.
