# Nocturne Game & Reel Director Handoff — Product Run 3

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / CANONICAL_CORE_RESULT_COUPLED`

Latest main, README, workflow, Reality standard, dual-track status, productization master, Machine Run 3 handoff and current Nocturne product code were re-read before work.

## Concrete main change

`6629e04` updates `prototypes/nocturne-aquarium/play-stage-v2.html` so the product state loop consumes the cleaned pachislot core's `nocturne:core-result` as the canonical third-stop reel result instead of independently inventing a second final-result model.

- Core stopped symbols, provisional role and provisional payout now enter one evidence object.
- The same canonical evidence drives `resolve`, anticipation carry, miss, BONUS hit, BONUS result and AT result events.
- STOP1/STOP2 still use partial stopped-symbol evidence for immediate chance-up/development beats; STOP3 switches to the core result when the stopped-symbol set matches.
- `core-result` is also exposed as a Game Event so Visual/Light/Audio can punctuate actual reel payout/result evidence rather than unrelated timers.
- Runtime identifies the model as `canonical-core-reel-carry-prototype`.
- QA deterministic evidence remains explicitly marked `QA_OVERRIDE` and never masquerades as product probability/spec evidence.

This closes the Machine Run 3 issue where the cleaned core and product wrapper had two parallel final-result models. The first STOP still does not select a stage; persistent stage tone remains background presentation only.

## Human shared text rule

Remove/minimize tutorial, debug and system-explanation prose. Do **not** remove normal pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET 枚`, remaining games, `+G`, continuation/end, CZ/AT names and result displays. These are wanted pachislot performance tools and should be synchronized to reel/Game Events.

## Provisional specification warning

Current payouts, BONUS length, AT length, charge thresholds and evidence strengths are prototype-only tuning. They are not verified regulatory/product probabilities or final payout specifications.

## Next Visual & Mechanism Director

Use `core-result` / `resolve` payout and role data to add machine-natural result punctuation where useful (`GET`, `WIN`, etc.) without explanatory prose. Keep reel result visually causal: STOP3 -> stopped symbols -> result/light/LCD/mechanism. Do not reintroduce exploration controls or first-stop stage selection.

## Verification

No PASS is claimed. The new canonical coupling requires downstream WebKit/product-loop verification. `PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED / HUMAN_UNVERIFIED` remain.

SIGNAL / FORGE / VAULT were not modified.
