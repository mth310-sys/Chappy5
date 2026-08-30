# Dual Prototype Sound & Experience Director Handoff — Run 5

Date: 2026-08-29 JST
Status: `SOUND_RUN5_PROFILE_IMPLEMENTED_INTEGRATION_PENDING`

## Source of truth
This run re-read latest main, README, PACHISLOT_PRODUCTION_WORKFLOW, REALITY_PRESENTATION_STANDARD, PROTOTYPE_DUAL_TRACK_STATUS, both integrated play.html files, recent commits, and PROTOTYPE_VISUAL_HANDOFF_RUN5 before writing.

SIGNAL / FORGE / VAULT were not changed.

## Decision
Visual Run 5 strengthened the causal chain from physical STOP to cabinet/world response. Sound must not answer those new reflections/ports with extra independent effects. The bottleneck is now density and routing clarity: keep STOP causality immediate while reserving silence/space for result meaning.

## 刻ノ一閃
Added `prototypes/toki-no-issen/audio-timeline.js`.

The profile formalizes the existing low-latency sequence as one event timeline: BET mechanical confirmation -> LEVER -> very low spin-bed -> STOP mechanical transient -> +12ms slash -> third-cut tail -> deliberate short gap -> result at +90ms/+130ms.

The spin bed is deliberately very low gain and is intended to stop on third STOP. It exists to connect LEVER and the three STOPs, not to add musical density. `createTokiSpinBed()` reuses one oscillator/gain pair and exposes start/stop/dispose, avoiding per-frame or per-reel audio allocation.

The 52ms third-stop-to-resolve space is semantic silence. It must never be used to infer technical mute. Technical audio state remains `body.dataset.audioTech`.

## ノクターン・アクアリウム
Added `prototypes/nocturne-aquarium/audio-routing.js`.

The profile explicitly separates five routes: environment / mechanism / operation / observation / memory. This corrects the conceptual ambiguity in the current integrated shell where physical mechanism and operation transients still share one bus.

The 43Hz low-passed environment remains intentionally quiet. Observation stays above baseline but below MEMORY/DEPTH. The persistent Visual Run 5 observation ports do not receive a loop or idle sound; first STOP remains the meaningful audible selection event.

`isTechnicalMute()` reads `body.dataset.audioTech`, keeping Safari suspended/resume-failed states separate from a game-authored quiet moment.

## Integration caution
These modules are committed as executable prototype code profiles but are not yet imported by the existing integrated `play.html` shells in this run. Do not claim the new spin bed or five-bus Nocturne routing is audible in the deployed prototype yet. The next safe integration pass should wire these profiles without reintroducing Toki's previous WebKit compositor/runtime instability or duplicating the existing Web Audio graph.

## Safari / Bluetooth
AudioContext creation/resume must remain user-gesture initiated. Visibility suspension should continue to be marked as technical state and resume should be retried only from a later real interaction. Do not compensate Bluetooth output latency by delaying game/reel/visual STOP state; preserve input truth and treat hardware latency as an external uncertainty.

## Verification
No AUDIO PASS is claimed. Physical iPhone Safari listening remains HUMAN_UNVERIFIED / AUDIO_UNVERIFIED. The newly added modules require integration and downstream browser QA.

SIGNAL / FORGE / VAULT remain untouched.
