# Prototype Sound & Experience Director Handoff — Run 3

Status: `AUDIO_RUN3_IMPLEMENTED_UNVERIFIED`

Source of truth re-read before work: latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both current prototype wrappers, latest commits, and `docs/PROTOTYPE_VISUAL_HANDOFF_RUN3.md`.

## Run decision

Visual Run 3 added persistent blade residue to 刻ノ一閃 and three-lens survey memory to ノクターン. These are state memories, not reasons to add continuous sound. This pass therefore reduced event crowding and clarified audio hierarchy instead of adding constant layers.

## 刻ノ一閃

Canonical build changed: `prototypes/toki-no-issen/play.html`.

- Split generated audio into `mechBus`, `bladeBus`, and `resultBus` under the existing master gain.
- BET and LEVER remain restrained mechanical cues.
- Each STOP now begins with a short mechanical stop transient, followed about 12 ms later by the slash body. This keeps finger/reel response immediate while allowing the cut to read as a consequence of the stop.
- STOP2 keeps a small upper accent; STOP3 keeps a stronger tail without adding a separate sound for persistent 連閃 residue.
- Resolution sound is delayed about 105 ms from the result event so third-stop impact and sword-action release do not collapse into one transient.
- No third-party audio assets were introduced; all sound remains Web Audio synthesis/noise.

Next QA: judge STOP1/2/3 under repeated play, especially whether the 12 ms mechanical-to-slash separation is perceived as tighter rather than doubled, and whether STOP3 → result has enough release without feeling delayed on iPhone/Bluetooth.

## ノクターン・アクアリウム

Canonical build changed: `prototypes/nocturne-aquarium/play.html`.

- Split generated audio into `ambient`, `mechBus`, `observeBus`, and `memoryBus` under the existing master gain.
- The quiet deep baseline remains user-gesture-started and was slightly lowered in pitch/filter emphasis (43 Hz / 96 Hz low-pass) to stay behind reel interaction.
- BET/LEVER and the immediate STOP transient now live on the mechanical layer.
- Observation-channel pings and second/third-stop interpretation accents live on the observation layer.
- Three-layer survey completion gets only a restrained two-note observation accent. It is deliberately weaker than memory discovery and DEPTH advancement.
- Memory and DEPTH cues remain on the strongest semantic layer, preserving the hierarchy `normal observation < survey complete < memory < DEPTH`.
- No third-party audio assets were introduced; all sound remains Web Audio synthesis.

Next QA: verify that ordinary STOPs remain audible over the tank baseline, survey completion does not masquerade as a major memory hit, and the quiet baseline is still meaningfully audible on iPhone speaker without becoming a constant hum.

## Safari / technical mute semantics

Both wrappers continue to create/resume AudioContext only from an actual button pointer interaction. `visibilitychange` suspends audio when hidden; returning to the page does not falsely assume audio resumed, and the next real interaction re-enters `boot()` and attempts `resume()`.

Meaningful quiet is only designed while the AudioContext is running. A suspended/unsupported/failed context produces no generated sound and must be treated by QA as a technical audio state, not as intended game silence. Bluetooth latency is not compensated by moving game logic or Visual timing; hardware-route latency remains a human verification item.

## Verification state

- Both edited wrappers were re-fetched from latest `main` after write and the intended bus/timing changes are present.
- Browser ear-check and real iPhone/Safari/Bluetooth feel are still unverified.
- Keep `AUDIO_UNVERIFIED` / `REALITY_UNVERIFIED` until downstream browser/human inspection.
- SIGNAL / FORGE / VAULT were not changed.
- Human Gate 2 remains closed.

## Next Playtest & QA priority

1. Re-read latest main first.
2. Run BET → LEVER → STOP1/2/3 repeatedly on both machines and confirm no interaction regression.
3. 刻ノ一閃: focus on immediate STOP response, slash identity, and third-stop/result separation.
4. ノクターン: focus on reel-stop audibility against ambience and hierarchy between observation, survey complete, memory and DEPTH.
5. Exercise background/foreground return in Safari-equivalent flow. Treat a non-running AudioContext as technical mute, not intentional silence.
