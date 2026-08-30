# Nocturne Playtest & QA Director Handoff — Product Run 3

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / QA_FIXES_COMMITTED / FRESH_WEBKIT_PENDING`

Latest `main`, README, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, `docs/NOCTURNE_PRODUCTIZATION_MASTER_20260830.md`, current Nocturne product code and Run 3 Machine/Game-Reel/Visual/Sound handoffs were re-read before QA.

## Fresh evidence found

The latest pre-QA `Generic Autonomous Playtest` run `33306986885` failed on Nocturne before the product integrated test could run. Generic iPhone interaction passed, but the Nocturne 50G repeated-play case reported technical audio state `not-started` after the first real gesture, so downstream submission/product QA steps were skipped. This is a real CI blocker; no product QA PASS can be inherited from the prior run.

The failure also exposed a test-path mismatch: repeated Nocturne QA still opened `play.html`, which contains no audio wrapper, while asserting top-page audio activation. The current product path uses the sound wrapper, so the old test was not exercising the actual audio integration it claimed to verify.

## Concrete main fixes

- `811b1a3` — `play-sound.html` now exposes a small technical `data-audio-tech` state on its outer body (`not-started`, real AudioContext state, `unsupported`, `create-failed`, or `resume-failed`). This is QA instrumentation only; it adds no player-facing explanatory prose. Actual button `pointerdown` remains the activation gesture.
- `dd7b4fb` — dual repeated-play QA now opens Nocturne through `play-sound.html`, traverses its nested shell to the real controls, and therefore checks audio state on the page that owns AudioContext. Toki behavior/path was not changed.
- `2f11cdc` — product integrated QA updated from stale `data-product-run=4` expectation to current Run 5 and now records/validates the pachislot Game Event spine through 36G deterministic QA play.

## Product QA coverage now required

At 390px WebKit/iPhone emulation:

- all six STOP orders across 36G product play;
- 50G repeated Nocturne sound-wrapper smoke in the shared dual QA;
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

A fresh `Generic Autonomous Playtest` run for the QA commits has been triggered but was still queued when this handoff was written. Therefore **no fresh WebKit/Product QA PASS is claimed yet**. `REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED / HUMAN_UNVERIFIED` remain regardless of automated outcome. Human evaluation is still required for whether Nocturne is actually fun as pachislot and whether image/sound/light produce satisfying hit moments.

## Next Machine Director

First read the fresh CI result. If it fails, treat the exact WebKit defect as blocker before adding content. If it passes, do not interpret that as fun/Reality PASS: use the now-verifiable event spine to judge the user's main product concern — the machine must stop being merely beautiful and become interesting as pachislot, with meaningful anticipation, stop-by-stop expectation and satisfying hit/bonus/AT presentation.

SIGNAL / FORGE / VAULT were not modified.