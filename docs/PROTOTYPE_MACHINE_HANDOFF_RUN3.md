# Dual Prototype Machine Director Handoff — Run 3

Date: 2026-08-29 JST
Status: `MACHINE_RUN3_TOKI_LONGPLAY_MITIGATION_PENDING_CI`

## Source of truth re-read

Re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both current integrated prototype `play.html` files, recent commits, and the completed Playtest & QA Run 3 evidence.

Latest `main` remains sole source of truth. SIGNAL / FORGE / VAULT were not changed.

## New completed QA evidence

Generic Autonomous Playtest run `33209730905` changed the blocker diagnosis.

- Generic iPhone interaction smoke: PASS.
- ノクターン・アクアリウム: 50G coordinate-touch repeated-play test: PASS.
- 刻ノ一閃: long-play test failed because the WebKit target itself crashed while QA was sampling the LEVER bounding box. This was not the previous `locator.tap()` actionability/stability timeout.

Therefore the current maximum shared delivery risk is not control-deck geometry. It is 刻ノ一閃 long-play WebKit resource stability.

## Machine decision

Do not add systems while one prototype can crash during repeated play. Preserve Nocturne as the currently stable 50G comparison baseline and reduce Toki runtime allocation pressure without changing its game rhythm, control geometry, Visual Run 3 residue, or STOP-to-slash timing.

The Toki Sound Run 3 wrapper was allocating and filling a fresh Web Audio `AudioBuffer` for every blade-noise transient. Nocturne does not have that per-event allocation pattern and completed 50G. This does not prove audio allocation was the crash cause, but it is a concrete low-risk pressure source worth removing first.

## Main change

Commit `d89ce30` — `Reduce Toki long-play Web Audio allocation pressure`

`prototypes/toki-no-issen/play.html` now:

- builds one short noise buffer once when the AudioContext is created;
- reuses that buffer for LEVER/STOP blade transients instead of allocating/filling a new AudioBuffer on every event;
- explicitly disconnects short-lived oscillator/gain/filter/source nodes when they end;
- preserves the existing STOP1/STOP2/STOP3 slash timing and resolve timing;
- preserves the fixed physical control deck and 46px information rail.

Nocturne code was intentionally left unchanged because the same new WebKit QA completed 50G successfully.

## Verification state

Fresh Generic Autonomous Playtest run `33210821022` is running against `d89ce30`. Do not claim Toki 30G PASS until that run completes.

Nocturne currently has automated 50G WebKit evidence from the immediately preceding run, but subjective reel focus, real-device Safari audio, Bluetooth latency, visual attraction and fatigue remain human/device verification items.

`REALITY_UNVERIFIED` / real-device `AUDIO_UNVERIFIED` / Human Gate 2 remain in effect.

## Next Game & Reel Director handoff

1. Re-read the fresh CI result first.
2. If Toki long-play passes, keep the stability correction and improve only the felt `BET → LEVER → STOP1 → STOP2 → STOP3 → resolve → NEXT BET` cadence; do not add complex payout systems.
3. If Toki still crashes, treat runtime/resource stability as the blocker before content work. Inspect the failure timing/evidence and reduce repeated-play load in the exact subsystem implicated rather than weakening QA.
4. Keep Nocturne's 50G-stable build intact unless a concrete regression is found.
5. Preserve the machines' separate identities: sword-machine rhythm for Toki; aquarium observation/reel-memory coupling for Nocturne.

SIGNAL / FORGE / VAULT remain untouched.
