# Prototype Sound & Experience Handoff — Run 2

Status: `AUDIO_RUN2_IMPLEMENTED_UNVERIFIED`

Source of truth checked before work: latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, current integrated prototype wrappers, and Visual & Mechanism Run 2 commits `636ebf9`, `044584a`, `ef27ff4`.

## Purpose

This pass does not add music or increase sound density. It separates physical operation, thematic transient, and result-release timing so that the machine feels causal on iPhone Safari. Existing generated Web Audio remains original; no third-party sound assets are used.

## 刻ノ一閃

Candidate entry: `prototypes/toki-no-issen/play-sound2.html`

- Keeps the current integrated Visual/Mechanism build by nesting `play.html`; no Visual Run 2 work is discarded.
- Adds a second-pass event mix with separate `mechanical`, `blade`, and `result` buses under one master.
- BET and LEVER remain short physical cues.
- Each STOP first produces a mechanical reel-stop transient, then a blade transient a few milliseconds later. This is intentional: the hand should feel that the reel stopped and the sword action was caused by it, rather than hearing one undifferentiated effect.
- STOP1/2/3 rise in spectral weight without adding constant sword ambience. STOP3 receives the strongest blade tail.
- Resolution is delayed roughly 105 ms after the result text mutation, preserving a small STOP3 -> outcome release gap. `会心`, normal `斬`, and `紙一重` have separate result identities.
- Uses `AudioContext({latencyHint:'interactive'})` when supported and only creates/resumes audio from a real pointer interaction.

QA focus: listen for double-triggering because this candidate intentionally layers over the existing integrated wrapper. If the combined layer is too dense, the next integration should replace the old Sound Run 1 block rather than stack both. Confirm STOP3 remains readable before result sound.

## ノクターン・アクアリウム

Candidate entry: `prototypes/nocturne-aquarium/play-sound2.html`

- Keeps current tank/sonar/observation Visual Run 2 intact by nesting `play.html`.
- Adds separate `ambience`, `machine`, `observe`, and `memoryBus` buses.
- Baseline ambience is deliberately extremely low: a 43 Hz filtered bed only after user interaction. It is not gameplay-significant audio.
- BET/LEVER/reel STOP are on the machine bus so physical reel operation remains audible over the aquarium bed.
- First STOP uses an observation-channel pair whose pitch depends on `広場 / 塔 / 記録庫`; subsequent STOPs return to short mechanical collection ticks.
- Strong memory, NEW MEMORY, and DEPTH advancement use progressively longer harmonic identities on a separate memory bus. DEPTH is intentionally distinct from ordinary discovery.
- No automatic resume on visibility return. After Safari suspends audio, the next real pointer interaction calls `resume()` before generating event sound. This keeps technical mute distinct from intentional quiet.

QA focus: verify the low bed is not perceived as speaker hum on iPhone; verify STOP sounds remain clearer than ambience; verify first STOP channel identity is audible but not musical/UI-like; verify memory/DEPTH does not mask the next BET.

## Integration caution

These are candidate wrappers so the current Visual Run 2 integrated files are not destructively rewritten during this pass. After browser QA, Machine/Sound may fold the preferred event mix into canonical `play.html`. Until that happens, do not call either candidate `AUDIO_VERIFIED`.

Bluetooth latency cannot be corrected reliably by game code and must not be used as the master timing reference. Visual/reel state remains authoritative; audio is scheduled from the same pointer/result events with short internal offsets only.

SIGNAL / FORGE / VAULT were not changed. Human Gate 2 remains closed.