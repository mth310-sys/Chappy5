# Prototype Machine Director Handoff — Run 7

Date: 2026-08-29 JST
Status: ACTIVE_DUAL_PROTOTYPE_COMPARISON
Delivery target: 2026-08-29 12:00 JST

## Source of truth re-read
Latest main, README, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both current prototype shells/base code, latest commit history, and Playtest & QA Run 6 evidence were re-read before this change.

SIGNAL / FORGE / VAULT were not changed.

## Maximum bottleneck this run
The latest Generic Autonomous Playtest on QA commit `90aae88` still failed Toki before round 1. WebKit waited 1800ms for the integrated BET target to reach >=44px and measured 42px throughout. Nocturne completed its 50G repeated-play case in the same run.

The important finding is that this is not a longer CSS timing delay. Toki's base `index.html` still defines `.bet{height:42px}`, while `play.html` applies the submission-safe >=46px geometry inside an iframe `load` handler. Because `play.html` is an ES-module shell, a fast WebKit/local iframe can finish before the module body registers that `load` handler. If that happens, the entire integrated enhancement pass is skipped, including the >=46px BET override, cadence rail and related integrated behavior.

## Concrete main change
Commit `e158d712` adds a bounded bootstrap guard in `prototypes/toki-no-issen/audio-timeline.js`, which is already the first imported module of the public Toki shell.

- After module evaluation, wait 60ms.
- If `#game` is already fully loaded but the integration marker `.toki-tempo` is absent, redispatch the iframe `load` event once.
- If normal iframe loading already ran the integrated handler, `.toki-tempo` exists and no duplicate pass occurs.

This fixes the integration boundary instead of weakening the >=44px QA rule. It also protects the actual Toki submission shell from silently booting as the unintegrated 42px base build.

## Dual-prototype decision
### 刻ノ一閃
Do not add systems until the fresh WebKit run proves the integration bootstrap is stable. The current submission value remains the causal `LEVER → SPIN → STOP1/2/3 → slash → semantic gap → resolution` timeline, fixed touch deck and lightweight compositor path.

### ノクターン・アクアリウム
Current public shell and base code were re-read. Its aquarium silhouette, layered tank/reels, observation ports and reel-to-world path remain distinct from Toki. Latest repeated-play evidence still gives Nocturne 50G PASS, so no destabilizing Machine-level change was made this run.

## Verification state
A fresh Generic Autonomous Playtest and Pages deployment were triggered by `e158d712` and are pending at handoff time. Do not claim Toki 30G/submission-readiness PASS until that run completes.

Human Gate 2 remains closed. Real iPhone attraction, STOP feel, speaker/Bluetooth audio and `REALITY_PRESENCE` still require human verification.

## Next Game & Reel Director
1. Re-read latest main and check the workflow triggered by `e158d712` first.
2. If both 30G Toki and 50G Nocturne plus submission-readiness pass, preserve the integration bootstrap and spend the next pass only on repeated-play cadence/meaning, not architecture.
3. If Toki still reports 42px, stop feature work and move the >=46px geometry into the base Toki `index.html` as the next source-of-truth correction.
4. Preserve Nocturne's proven 50G baseline unless evidence identifies a regression.

No completion claim is made; both remain delivery candidates under active comparison.