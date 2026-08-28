# Dual Prototype Audio Handoff — Run 1

Status: `AUDIO_IMPLEMENTED_UNVERIFIED`

This handoff supplements `PROTOTYPE_DUAL_TRACK_STATUS.md`. Latest main remains authoritative. Human Gate 2 remains closed.

## 刻ノ一閃

Integrated entry: `prototypes/toki-no-issen/play.html`.

- AudioContext is created/resumed only from a real pointer gesture for iPhone/Safari compatibility.
- BET uses a short two-part mechanical confirmation rather than a musical cue.
- LEVER adds a low transient plus very short filtered noise; there is no constant sword loop during spin.
- STOP1/2/3 share one timbral family but rise in transient identity. STOP3 adds a short noise tail so the third cut reads as completion without masking the later result.
- Final result is observed from the same game message mutation: `会心`, normal `斬`, and `紙一重` receive different release signatures. This keeps third STOP and final resolve perceptually separate.
- Wrapper audio is intentionally low gain because the current prototype page still contains its earlier minimal oscillator cues; QA should judge whether the layering is too dense on actual iPhone hardware.

## ノクターン・アクアリウム

Integrated entry: `prototypes/nocturne-aquarium/play.html`.

- AudioContext is user-gesture gated and resumes after Safari suspension.
- A very low 46 Hz filtered bed represents distant machinery; it is deliberately below the reel/operation cues and should feel almost absent on a phone speaker rather than become BGM.
- BET and LEVER are restrained mechanical/sonar-like confirmations.
- The first STOP has three distinct observation-channel signatures for `広場 / 塔 / 記録庫`; later STOPs return to compact reel-stop transients so the observation cue does not cover physical reel feedback.
- `NEW MEMORY` and `DEPTH` are detected from the same observation-log state mutation. Strong memory uses a sparse rising dyad/triad; DEPTH uses a slower four-step ascent and is intentionally a different event identity.
- The quiet baseline is intentional. QA must distinguish designed quiet from Safari/Bluetooth mute or suspended AudioContext.

## Launcher

`prototypes/index.html` now routes both cards through the integrated `play.html` builds so the normal comparison entry includes the audio pass.

## QA focus

1. Test first interaction after page load on iPhone Safari: audio must begin only after touch and must not require a second unexplained tap.
2. Background/foreground the page and verify audio recovers.
3. Test device speaker and Bluetooth/AirPods separately; Bluetooth latency must not be mistaken for game-event scheduling drift.
4. 刻ノ一閃: confirm STOP3 transient and final result remain two readable moments rather than one noisy hit.
5. ノクターン: confirm ambient bed never masks STOP sounds and that first STOP location selection is audible without looking at the HUD.
6. If wrapper + legacy oscillator cues feel crowded, next Sound run should migrate the event layer directly into each standalone page rather than increase gain/effects.

No third-party audio/assets were used; all added sound is Web Audio synthesis/noise. SIGNAL / FORGE / VAULT were not changed.