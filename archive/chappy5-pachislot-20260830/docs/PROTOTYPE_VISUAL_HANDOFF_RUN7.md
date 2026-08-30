# Prototype Visual & Mechanism Director Handoff — Run 7

Date: 2026-08-29 JST
Status: ACTIVE_DUAL_PROTOTYPE_COMPARISON
Delivery target: 2026-08-29 12:00 JST

## Source of truth re-read
Latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both prototype directories / public shells, and Game & Reel Run 7 were re-read before changes.

SIGNAL / FORGE / VAULT were not changed.

## Game & Reel Run 7 consumed
Run 7 adds two bounded repeat-play cues without changing payout/probability/reel control:
- 刻ノ一閃: `data-next-stance` / recent three-cut-chain memory.
- ノクターン・アクアリウム: least-visited observation layer / repeated-layer and repeated-evidence detection.

The Visual decision is to express these cues through existing machine surfaces instead of adding another detached instruction panel.

## 刻ノ一閃 — Visual Run 7
Updated `prototypes/toki-no-issen/game-reel-run7.js`.

The current public Toki shell already imports this module through `audio-timeline.js`, so this Visual response is integrated into the public build.

- `read`: quiet blade-bridge readiness; no extra flash layer.
- `free`: both spines remain balanced and the screen frame receives a restrained violet/gold readiness reflection.
- `change-first`: asymmetric spine balance and a warmer blade reflection suggest changing the opening side without moving the operation deck.
- `break-chain`: both spines and the blade bridge tighten with a stronger rose-gold reflection, visually marking the need to break a repeated three-cut cadence.
- Uses opacity / box-shadow only; no new permanent animation, blur stack, perspective stack or `mix-blend-mode` path was added.
- Existing 390px touch geometry and Machine Run 7 iframe bootstrap are untouched.

Intent: after the third STOP, the machine should retain a small physical after-state that makes the next BET feel like a continuation of the duel rather than a hard reset.

## ノクターン・アクアリウム — Visual Run 7
Updated `prototypes/nocturne-aquarium/game-reel-run7.js` and exposed the bridge from `audio-routing.js`.

New optional bridge:
- `installNocturneRun7VisualBridge(doc)`
- `applyNocturneRun7VisualState(doc, snapshot)`

It maps the Game/Reel long-play snapshot onto the existing aquarium world:
- the least-visited layer softly raises the matching existing circular world port;
- repeated-layer / repeated-evidence states strengthen the existing glass-rib path rather than displaying another HUD;
- balanced observation intentionally flattens all three port suggestions and returns emphasis to reel reading;
- only opacity / shadow / scale are used, with a 390px guard and no new continuous animation.

Important integration boundary: the current public Nocturne `play.html` still uses the proven inline 50G-stable shell and does not import `audio-routing.js`. Therefore these Run 7 world-response functions are main-ready but are NOT claimed as active in the public Nocturne shell yet. Do not trade the known 50G baseline for a rushed module-shell conversion immediately before delivery.

## Next Sound & Experience focus
### 刻ノ一閃
Do not add a separate sound for `next-stance`. The retained cabinet reflection is a visual continuation of the just-finished three-cut exchange. Keep BET/LEVER as the next actual sound cause.

### ノクターン・アクアリウム
If integrating `audio-routing.js` before submission, connect the Run 7 observation snapshot at the same point that the current shell finishes three-reel evidence resolution. Do not sonify the suggested world port continuously. A quiet world-port visual suggestion must remain semantically silent until the player chooses a STOP.

## Verification state
The changes are deliberately low-compositor-risk, but fresh automated Browser/QA results are required before claiming a new Browser PASS. Human Gate 2 remains closed. Real iPhone attraction, physical depth, fatigue and `REALITY_PRESENCE` remain human verification items.
