# Nocturne Machine Director Handoff — Product Run 1

Date: 2026-08-30
Status: `MACHINE_RUN1_IMPLEMENTED / DOWNSTREAM_VERIFICATION_REQUIRED`

## Main decision
Largest current bottleneck was not missing effects; it was that the new productization layer had Visual state, BONUS state and input reactions coupled only through local timers/classes. Game/Reel, Sound and QA had no stable shared event spine to integrate against.

## Concrete main change
Commit `5da2e07` updates `prototypes/nocturne-aquarium/play-stage-v2.html`.

- Added a single `nocturne:game-event` CustomEvent spine emitted from the actual nested game document.
- Events now include: `runtime-ready`, `bet`, `stage-shift`, `lever`, `stop`, `develop`, `resolve`, `miss`, `bonus-hit`, `bonus-open`, `bonus-game`, `bonus-end`.
- Event detail carries current game/stage/omen/BONUS/round state so downstream lines can react to the same cause instead of inventing separate timers.
- Added `roundState` / `lastGameEvent` datasets for QA observability without adding player-facing explanation text.
- Fixed STOP visual cleanup to capture the STOP ordinal/class at input time. The previous timeout referenced mutable `stopsThisGame`, which could remove the wrong class after rapid sequential STOPs.
- Existing pachislot loop and minimal text direction remain intact. SIGNAL/FORGE/VAULT untouched.

## Next: Game & Reel Director
Use this event spine rather than adding another detached wrapper system. Highest-value next step is to make `lever/stop/resolve` derive from actual reel/result evidence instead of deterministic `gameNo % 16` presentation tuning. Keep any temporary probability/tuning explicitly prototype-only. Preserve normal multi-game stage residence and do not restore first-STOP stage selection.

Sound should later subscribe to the same event spine for anticipation/develop/hit/BONUS transitions. Visual should consume the same events where practical. QA can observe `machine.dataset.roundState` and `lastGameEvent`.

No PASS claim. Current state remains `PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED`. Human Gate 2 remains closed.
