# Prototype Sound & Experience Director Handoff — Run 8

Date: 2026-08-29 JST
Status: SUBMISSION_STABILIZATION
Delivery target: 2026-08-29 12:00 JST

Latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both prototype directories/current integrated shells, recent commits, and `docs/PROTOTYPE_VISUAL_HANDOFF_RUN8.md` were re-read before changes. SIGNAL / FORGE / VAULT were not changed.

## Decision

Both prototypes remain submission candidates. Visual Run 8 explicitly asks Sound not to create new layers for the new stance/worldport states. This pass therefore avoids touching layout, reel timing, control geometry, cabinet effects, or the proven Toki public audio timeline. The only code change is a bounded Nocturne audio-policy refinement in the optional routing module; the published Nocturne shell remains architecture-locked for final QA.

## 刻ノ一閃

No public audio values were changed in this pass.

Current integrated `play.html` still imports `audio-timeline.js` and keeps one causal exchange:

`BET → LEVER / low spin bed → STOP mechanical transient → slash → STOP3 blade tail → semantic silence → resolve`.

Run 7 timing remains the submission baseline: STOP/slash separation is short, the spin bed stays below hand-driven events, and Bluetooth/device latency is never compensated by moving reel/game timing. Visual Run 8 stance afterglow receives no extra sound.

Reason for no retune: the current task is submission stabilization, and Visual Run 8 introduced no new game event requiring audio. Retiming without fresh human listening evidence would add risk rather than quality.

## ノクターン・アクアリウム

Updated `prototypes/nocturne-aquarium/audio-routing.js` to Run 8 policy.

- Added explicit semantic-silence vs technical-mute responsibility (`audioSemantic` vs `audioTech`).
- Locked the experience rule that physical STOP owns the mechanism bus even when the aquarium owns visual attention.
- Explicitly states that Visual Run 8 worldport/glass afterglow has no independent sound.
- Added a two-voice maximum event budget for observation / MEMORY / DEPTH planning.
- Added `nocturneEventPlan()` so strong discoveries become longer/spaced and use ambient ducking rather than a dense stack that masks reel STOP.
- Preserved `compensateOutputLatency: false` and added `preserveGameClock: true`; Bluetooth/device delay is diagnostic, never a reason to move reel timing.

Important: `audio-routing.js` is still not imported by the published Nocturne `play.html`. The public shell continues to use its proven inline Web Audio implementation. Do not claim the Run 8 two-voice planner is audibly active in the submission build unless a later integration explicitly imports it and passes QA.

## Next Playtest & QA Director

Treat both as submission candidates and prefer evidence over further feature work.

1. Re-read latest main and run the existing 390px / repeated-play / submission-readiness checks.
2. Toki: verify user gesture starts/resumes audio, STOP remains the clearest transient, STOP3 → slash → short silence → resolution remains readable across repeated games, and no new Visual Run 8 stance creates phantom audio.
3. Nocturne: verify the current published inline audio remains stable through 50G, reel STOP remains audible under ambience, MEMORY/DEPTH is distinguishable from normal play, and Safari resume does not leave `audioTech` in a failure/not-started state after a valid gesture.
4. Bluetooth feel remains HUMAN_UNVERIFIED unless tested on actual hardware. Do not compensate game timing based on assumed output latency.
5. If automated/browser evidence regresses, revert the newest presentation-only change before changing fixed controls or weakening QA.

Human Gate 2 remains closed. Automated stability is not `HUMAN_MACHINE_VERIFIED`.