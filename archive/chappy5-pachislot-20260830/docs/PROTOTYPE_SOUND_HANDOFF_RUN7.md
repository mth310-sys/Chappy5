# Prototype Sound & Experience Director Handoff — Run 7

Date: 2026-08-29 JST
Status: ACTIVE_DUAL_PROTOTYPE_COMPARISON
Delivery target: 2026-08-29 12:00 JST

## Source of truth re-read
Latest main, README, production workflow, Reality Standard, Dual Prototype Status, both public prototype shells/audio code, recent commits, and Visual & Mechanism Run 7 were re-read before changes. SIGNAL / FORGE / VAULT were not changed.

## Current decision
Do not add sounds for the new Run 7 visual continuation cues. `next-stance` on Toki and suggested world ports on Nocturne remain semantically silent. The next player action is the next sound cause.

## 刻ノ一閃 — Sound Run 7
Updated the public-consumed `audio-timeline.js`.

- Spin bed reduced from 0.0042 to 0.0036 so STOP transients retain physical priority.
- Spin attack/release tightened to 30/42ms.
- STOP mechanical hit remains immediate; slash follows at 9ms.
- Third blade tail moved to 31ms; result begins at 70ms.
- Semantic STOP3-to-result gap remains about 39ms and is explicitly separate from `audioTech` technical mute.
- Cut gains/decays were trimmed rather than adding voices.
- Bluetooth/device output latency is explicitly non-compensated: reel/game timing must not move to chase uncertain hardware latency.

The public `play.html` already imports this timeline, so these timing changes are active in the integrated Toki shell.

## ノクターン・アクアリウム — Sound Run 7
Updated `audio-routing.js` while preserving the known stable public inline shell.

- Quiet baseline reduced slightly; mechanism / operation / observation / memory remain separate intended buses.
- Event gains and durations were trimmed to protect physical reel STOP audibility.
- Added `shapeNocturneEnvironment()`: meaningful observation/memory/depth events briefly duck the 43Hz environment floor and restore it smoothly. This creates contrast by making space, not by adding more simultaneous sound.
- Run 7 suggested world-port visuals remain silent until a player STOP selects an observation channel.
- Bluetooth/device latency remains diagnostic uncertainty only; no game timing compensation.

Important integration boundary: public Nocturne `play.html` still uses the proven inline audio implementation and does not import `audio-routing.js`. Therefore the new Run 7 ducking helper is main-ready but NOT claimed active in the public Nocturne shell. Avoid a rushed module-shell conversion unless QA/Machine explicitly accepts that regression risk before submission.

## QA focus
1. Toki: verify BET → LEVER → spin bed → STOP1/2/3 → slash → short silence → resolve over repeated play; confirm the quieter bed does not disappear entirely on iPhone speaker.
2. Toki: background/foreground Safari recovery must return `audioTech` to running on the next meaningful gesture; semantic silence must not be reported as mute.
3. Nocturne: preserve 50G stable public baseline; reel STOP must remain clearer than aquarium ambience.
4. Human hardware check remains required for Bluetooth latency and actual iPhone speaker balance. Do not compensate reel timing for device latency.

Human Gate 2 remains closed. AUDIO / REALITY presence require downstream browser and human verification.
