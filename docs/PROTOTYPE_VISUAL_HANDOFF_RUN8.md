# Prototype Visual & Mechanism Director Handoff — Run 8

Date: 2026-08-29 JST
Status: SUBMISSION_STABILIZATION
Delivery target: 2026-08-29 12:00 JST

Latest `main`, `README.md`, production workflow, Reality Standard, Dual Prototype Status, both current Game/Reel helpers, and Game & Reel Run 8 handoff were re-read before changes. SIGNAL / FORGE / VAULT were not changed.

## Decision

Both machines are submission candidates. Do not add cabinet height, move the fixed control deck, restore compositor-heavy effects, or perform architecture rewrites before final QA. This visual pass uses only existing mechanism surfaces and transition-safe opacity/shadow changes.

## 刻ノ一閃

Updated `prototypes/toki-no-issen/game-reel-run7.js`.

- Preserved the existing black/violet/gold cabinet and blade/spine architecture.
- Made `read`, `flowing`, `free`, `change-first`, and `break-chain` feel mechanically distinct through the existing blade bridge, left/right spines and screen frame.
- `flowing` now balances both spines and soft blade afterglow, so varied reel play reads as an open stance rather than another warning state.
- `change-first` biases the existing left spine and gold blade reflection; `break-chain` tightens both spines and the screen-frame reflection.
- No new HUD, layout height, continuous animation, blur stack, perspective or blend mode was introduced.

Intent: after STOP3/resolution, the cabinet should retain a short visual posture that makes NEXT BET feel like the next sword exchange while preserving the stable WebKit submission geometry.

## ノクターン・アクアリウム

Updated `prototypes/nocturne-aquarium/game-reel-run7.js` optional visual bridge.

- Kept all guidance inside the existing three circular worldports, tank frame and glass-rib optical path.
- `seek` is quiet; `seek-evidence` strengthens the glass path; repeated-layer/evidence shift states increase glass/tank reflection without flashing the whole cabinet.
- `balanced` deliberately suppresses worldport dominance and returns attention to the physical reels.
- No explanatory panel, layout growth, new particle system, continuous animation or heavy compositor path was added.

Important: Game & Reel Run 8 and Machine Run 8 intentionally keep Nocturne's published shell architecture locked. This helper remains safe/optional and must not be described as visibly active in the public shell unless the downstream integration actually imports/applies it.

## Next Sound & Experience Director

Treat both as submission candidates. Do not add sound merely because new visual states exist.

- Toki: preserve the current BET/LEVER/SPIN/STOP/slash/resolve timeline; cabinet stance afterglow should remain a visual consequence, not receive a separate sound layer.
- Nocturne: keep ambient/mechanism/operation/memory separation. If the optional observation bridge is integrated later, the worldport/glass emphasis should reuse existing observation/memory causality rather than introduce another constant cue.
- If fresh WebKit/390px evidence regresses, revert the latest presentation-only change rather than moving controls or weakening QA.

Human Gate 2 remains closed; automated stability is not `HUMAN_MACHINE_VERIFIED`.