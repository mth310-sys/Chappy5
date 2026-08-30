# Prototype Game & Reel Director Handoff — Run 7

Date: 2026-08-29 JST
Status: ACTIVE_DUAL_PROTOTYPE_COMPARISON
Delivery target: 2026-08-29 12:00 JST

## Source of truth re-read
Latest `main`, README, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both prototype shells and current Game/Reel code, recent commits, and Machine Director Run 7 were re-read before changes.

SIGNAL / FORGE / VAULT were not changed.

## Machine result consumed
Machine Run 7 fixed the Toki integrated iframe bootstrap. Generic Autonomous Playtest run 33222331135 completed successfully on commit `e158d712`, so the previous 42px/unintegrated-shell blocker is no longer the reason to stop Game/Reel work.

## 刻ノ一閃 — Run 7
Added `prototypes/toki-no-issen/game-reel-run7.js` and wired it through the already-public `audio-timeline.js` import chain.

Goal: improve the 10–30G repeat loop without adding payout systems.

- Keeps a bounded recent history of first-stop choices and resolved three-symbol chain types.
- After STOP3, derives a prototype-only next-stance reason: break a repeated chain, change a repeated first stop, recognize a three-origin circuit, or simply read the next first-cut result.
- Exposes `data-last-chain` and `data-next-stance` on the machine for the next Visual pass.
- Adds the next-stance reason to the existing tempo rail when available; no new detached HUD is created.
- Does not alter reel selection, result logic, probability, payout or reward math.

Next Visual focus: express `change-first / break-chain / free / read` through existing blade-spine balance and retained afterglow. Do not add a second instruction panel. Preserve Machine Run 7 bootstrap and fixed touch geometry.

## ノクターン・アクアリウム — Run 7
Added `prototypes/nocturne-aquarium/game-reel-run7.js` and exposed it from `audio-routing.js`.

Goal: keep ~50G observation play from collapsing into one habitual first STOP.

- Tracks only bounded layer visit history plus recent resolved evidence labels.
- Returns the least-visited observation layer and a quiet reason to revisit it.
- Detects three repeated observations of the same layer or same evidence class and recommends changing depth/layer.
- When visits are balanced, explicitly returns control to reel reading instead of forcing rotation through locations.
- Does not alter payout, probability, reel control, MEMORY class thresholds or DEPTH thresholds.

Important integration boundary: Nocturne's public `play.html` still uses its proven inline 50G-stable shell and does not import `audio-routing.js`. Therefore Run 7's new observation-memory helper is main-ready for the next integration pass but is NOT claimed as visible in the current public shell yet. Do not destabilize the 50G baseline merely to expose text.

Next Visual focus: prepare a low-cost world response for `nextLayer` using the existing three circular observation windows / glass path, not a HUD. Integration should remain optional until QA confirms no regression.

## Verification state
Toki's pre-Run-7 Machine fix has automated WebKit success. Fresh workflows triggered by these Run 7 commits must complete before claiming Run 7 Browser PASS. Human Gate 2 remains closed. Real iPhone attraction, fatigue, STOP feel, audio hardware and REALITY_PRESENCE remain human verification items.

All new numeric/history windows are prototype-only tuning aids and are not final game specifications.
