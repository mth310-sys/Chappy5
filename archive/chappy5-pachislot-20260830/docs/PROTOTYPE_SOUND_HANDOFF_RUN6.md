# Prototype Sound & Experience Director Handoff — Run 6

Date: 2026-08-29 JST
Status: ACTIVE_DUAL_PROTOTYPE_COMPARISON

## Source of truth re-read

Re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both current integrated prototype shells, Sound Run 5 modules, Visual & Mechanism Run 6 handoff/code and latest commit history before changing code.

SIGNAL / FORGE / VAULT were not changed.

## Sound bottleneck selected

Submission quality now benefits more from tighter causal timing and explicit audio responsibility than from adding sounds.

- 刻ノ一閃 already has the Run 5 timeline live in the published shell. Visual Run 6 adds cadence-driven blade/frame reactions, so Sound must keep those reactions attached to the same three STOP events without creating a sound for every visual token.
- ノクターン has a stable inline public-shell audio path, while `audio-routing.js` remains the pending modular boundary. Visual Run 6 added a reel-to-world bridge, so the safe next integration needs one explicit event vocabulary that preserves quiet normal play and protects physical reel STOP audibility.

## 刻ノ一閃 — tighter live STOP3 causality

Updated the live-imported `prototypes/toki-no-issen/audio-timeline.js`.

Changes:

- spin-bed attack/release shortened to 38ms / 48ms and gain reduced slightly to `0.0042` so the mechanical floor is present but does not mask STOP transients;
- STOP mechanical impact remains immediate;
- slash offset tightened from 12ms to 10ms;
- third-blade tail tightened from 38ms to 34ms;
- result timing tightened from 90/130ms to 74/112ms so iPhone touch -> STOP3 -> resolve reads as one cause while retaining a deliberate semantic gap;
- semantic STOP3 silence is now documented as 40ms and remains separate from `body.dataset.audioTech` technical mute state;
- three cut timbre profiles are defined for future use without adding simultaneous voices.

The published shell already imports this module, so the timing changes are live. No third-party samples/assets were introduced.

## ノクターン・アクアリウム — explicit semantic event profile

Updated `prototypes/nocturne-aquarium/audio-routing.js`.

Added `NOCTURNE_AUDIO_EVENTS` for BET, LEVER, physical STOP, observation-channel selection, survey completion, MEMORY and DEPTH. The profile deliberately separates:

- operation/mechanism: dry, short, physically readable;
- observation: channel identity after the first STOP;
- memory: longer but sparse discovery response;
- depth: longest event, using spacing/duration rather than brute-force loudness;
- environment: unchanged 43Hz low-level floor.

Also exposed `nocturneObservationProfile()` and `nocturneMemoryProfile()` and re-exported the Visual Run 6 bridge functions from the same module boundary. This gives the next safe public-shell integration one place to connect physical reel evidence -> world port -> observation/memory sound.

Important: current published Nocturne `play.html` still uses its stable inline Web Audio implementation and does not import `audio-routing.js`. Therefore the new profile is concrete main code but is **not claimed live** in the public shell in this run. Do not destabilize the known 50G baseline merely to claim modularity before QA.

## Safari / Bluetooth policy retained

- AudioContext starts/resumes only from user interaction paths.
- `audioTech` remains the technical-state signal; semantic quiet is not represented as mute.
- No timing compensation is applied for unknown Bluetooth output latency. Game/visual timing remains authoritative.
- Visibility suspension remains a technical state, not a game event.

## Next Playtest & QA Director

1. Re-run the existing 30G Toki / 50G Nocturne WebKit suite against latest main.
2. For Toki, specifically watch STOP3 -> result cadence after the 74/112ms tightening; reject if rapid taps create double result sound or if next BET arrives before the release feels complete.
3. Confirm `audioTech` reaches `running` after a real user gesture and does not remain `not-started` / `resume-failed` in the submission-readiness path.
4. Preserve Nocturne's current public-shell stability. Record that Run 6 routing remains pending integration rather than treating semantic silence as an audio failure.
5. Human hardware listening remains required for actual iPhone speaker/Bluetooth feel; automated PASS cannot certify that.

No REALITY/AUDIO Human PASS is declared from code inspection alone. Human Gate 2 remains closed.
