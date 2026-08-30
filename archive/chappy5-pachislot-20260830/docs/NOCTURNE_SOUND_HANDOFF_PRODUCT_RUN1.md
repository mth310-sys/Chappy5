# Nocturne Sound & Experience Director Handoff — Product Run 1

Date: 2026-08-30
Status: `AUDIO_PRODUCT_RUN1_IMPLEMENTED / QA_AND_HUMAN_LISTEN_REQUIRED`

## Implemented
- Reworked `prototypes/nocturne-aquarium/play-sound.html` from generic STOP3 memory sound into the product Game Event spine.
- Preserved real-button `pointerdown` AudioContext boot/resume for iPhone Safari user activation.
- Rebuilt reusable PCM bank once at first gesture; runtime uses short BufferSource/Gain nodes and disconnects on end.
- BET / LEVER / STOP1 / STOP2 / STOP3 retain physical machine response.
- `lever` presentation tiers now add trace/rise/omen layers from the same `nocturne:game-event` used by Visual.
- `develop` deliberately ducks the master briefly before a rising underwater/glass tension cue.
- `resolve` strength follows reel-evidence score instead of playing the same memory tail every third STOP.
- `bonus-hit` creates a short near-silence then delayed release hit.
- `bonus-open` starts a reusable 76 BPM Nocturne aquatic BGM loop based on the previously human-audible BGM-demo direction.
- `bonus-end` fades/stops the BGM and returns to normal ambience.
- `stage-shift` uses a small low-pitched trace rather than spoken/text explanation.

## Audio grammar
Normal: very low 43 Hz submerged bed + dry physical controls.
Whisper: small glass trace.
Rise: upward water/mechanism tone.
Omen: short attenuation + stronger submerged warning.
Develop: tension is created by loss of level first, then a rising cue.
STOP: physical hit remains readable above presentation layers.
Win: near-silence -> release hit -> BONUS BGM.
BONUS: melodic aquatic loop, intentionally distinct from normal ambience.

## Stability
- No continuous JS scheduler or high-frequency timer added.
- BGM is one looping AudioBufferSource, not per-note node creation.
- Temporary one-shot nodes disconnect on `ended`.
- Existing visibility suspend behavior retained.
- SIGNAL / FORGE / VAULT untouched.

## Verification
Static implementation only in this Sound run. The earlier BGM-demo direction was human-confirmed audible, but this newly integrated product audio path has NOT yet been listened to in-browser after integration.

Status remains `AUDIO_FINAL_UNVERIFIED / PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED`.

## Next QA focus
Confirm on iPhone-width/browser path that first real BET/LEVER gesture starts audio; STOP1/2/3 remain distinct; omen/develop ducking does not mute controls; bonus-hit has a perceptible silence/release; BONUS BGM starts once, does not stack across games, stops on bonus-end, survives normal rapid taps without AudioContext/node accumulation or JS errors.
