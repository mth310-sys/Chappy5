# Nocturne Playtest & QA Director Handoff — Product Run 3

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / QA_FIXES_COMMITTED / FRESH_WEBKIT_PENDING`

Latest `main`, README, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, `docs/NOCTURNE_PRODUCTIZATION_MASTER_20260830.md`, current Nocturne product code and Run 3 Machine/Game-Reel/Visual/Sound handoffs were re-read before QA.

## Fresh evidence found

Pre-QA `Generic Autonomous Playtest` run `33306986885` failed on Nocturne before product integrated QA could run. Generic iPhone interaction passed, but the old Nocturne 50G repeated-play case reported technical audio state `not-started` after the first real gesture. The root QA mismatch was that it opened `play.html`, which has no audio owner, while asserting top-page audio activation.

After correcting that path, fresh run `33307522204` proved the nested Nocturne sound-wrapper path could execute the full 50G loop past the prior first-gesture audio assertion. It then failed only because the old 90s test timeout expired at the post-loop stress-tap geometry read. No WebKit crash or audio-state assertion failure was reported before timeout. Downstream product integrated QA was skipped, so this is still not a Product QA PASS.

## Concrete main fixes

- `811b1a3` — `play-sound.html` exposes technical `data-audio-tech` state (`not-started`, actual AudioContext state, `unsupported`, `create-failed`, `resume-failed`). QA-only instrumentation; no player-facing explanatory prose. Actual button `pointerdown` remains the activation gesture.
- `dd7b4fb` — repeated Nocturne QA now opens `play-sound.html`, traverses its nested machine shell and checks the AudioContext owner instead of the wrong flat page. Toki behavior/path unchanged.
- `2f11cdc` — product integrated QA updated from stale `data-product-run=4` expectation to current Run 5 and records/validates the pachislot Game Event spine through 36G deterministic QA play.
- `5af9ba4` — extends the nested sound-wrapper 50G stress budget to 180s. The previous 90s failure was test-budget exhaustion after 50G, not a demonstrated machine crash.

## Product QA coverage now required

At 390px WebKit/iPhone emulation:

- all six STOP orders across 36G product play;
- 50G repeated Nocturne sound-wrapper smoke in shared dual QA;
- idle STOP, rapid/mistaken taps, BET during spin, reload;
- BET / LEVER / three STOP touch targets >=44px and stable geometry;
- no horizontal overflow;
- bounded DOM growth and crash/pageerror signals;
- hidden legacy observation/exploration UI;
- canonical pachislot event path: `bet → lever → stop/reel-role → chance-up/develop → resolve → bonus-hit → bonus-open/result/end → at-open/result/end → normal-return`;
- deterministic QA-only BONUS and AT reachability/return without promoting prototype values to verified product specs.

## Human shared text rule — MUST CONTINUE

Remove/minimize tutorial, debug and system-explanation prose. Do **not** remove normal pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET枚数`, `残りG`, `+G`, continuation/end, CZ/AT names and result displays. These are wanted pachislot performance tools. QA flags text that explains systems/states, not these machine-natural result/presentation labels.

No exploration/menu gameplay or first-STOP stage selection may return. Persistent stage/world tone remains background presentation behind normal reel play.

## Verification state

A new `Generic Autonomous Playtest` is triggered by `5af9ba4`; its final result was not yet available when this handoff was updated. Therefore **no fresh WebKit/Product QA PASS is claimed yet**. `REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED / HUMAN_UNVERIFIED` remain regardless of automated outcome. Human evaluation is still required for whether Nocturne is actually fun as pachislot and whether image/sound/light produce satisfying hit moments.

## Next Machine Director

First read the newest CI result. If it fails, treat the exact WebKit defect as blocker before adding content. If it passes, do not interpret that as fun/Reality PASS: use the now-verifiable event spine to judge the user's main product concern — the machine must stop being merely beautiful and become interesting as pachislot, with meaningful anticipation, stop-by-stop expectation and satisfying hit/BONUS/AT presentation.

SIGNAL / FORGE / VAULT were not modified.