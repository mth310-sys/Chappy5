# Prototype Game & Reel Director Handoff — Run 9

Date: 2026-08-29 JST
Status: SUBMISSION_FREEZE_ACCEPTED / GAME_REEL_SPEC_LOCKED
Delivery target: 2026-08-29 12:00 JST

Latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated `play.html` shells, the current Game/Reel helper modules, recent commits, and Machine Director Run 9 were re-read before this pass. SIGNAL / FORGE / VAULT were not changed.

## Source-of-truth and decision

Machine Director Run 9 (`37933023f7882556e5be39ea11599b5c5ed504e0`) places both prototypes in submission freeze after successful automated iPhone interaction, repeated-play QA, submission-readiness QA, and Pages deployment evidence.

Therefore this Game & Reel pass intentionally makes **no executable prototype change**. At this point a new cadence rule, reward branch, reel rule, audio timing change, DOM insertion, or control change would create more submission risk than value unless a concrete regression is found.

This document is the required Run 9 **specification delta**: it locks what the current game/reel code means for submission and constrains the next Visual Director to presentation-only verification rather than gameplay expansion.

Human Gate 2 remains closed.

---

## 刻ノ一閃 — submission Game/Reel lock

### Locked interaction rhythm

`BET → LEVER → SPIN → STOP1 → STOP2 → STOP3 → sword-action resolution → NEXT BET`

The important product behavior is not payout complexity; it is that each physical STOP is part of one three-cut action.

### Locked STOP semantics

The integrated shell already captures the center symbol of the physical reel stopped at each STOP and labels its role in the three-cut sequence.

Prototype-only semantics remain:

- `刀` → strong cut
- `七` → stronger as the third cut / finisher context
- `蒼` → favors the second cut
- `桜` → favors the first cut
- `鐘` → reset / stabilization character

These are **prototype feel semantics**, not final payout or reel-control claims.

### Locked repeat-play variation

`prototypes/toki-no-issen/game-reel-run7.js` remains the current bounded repeat-play layer.

It may classify the recent sequence as:

- `read` — keep reading the next first cut
- `change-first` — repeated first-stop start; suggest changing the opening reel
- `break-chain` — repeated cut-chain; suggest breaking the pattern
- `free` — all three starts have circulated; return priority to reel reading
- `flowing` — recent cut-chain variety is already high; avoid over-directing the player

The helper explicitly does **not** change reel selection, probability, payout, reward, or result logic. This separation must remain intact through submission.

### Submission feel target

For 10–30G repeated play, the player should feel:

1. LEVER starts a fresh duel beat.
2. STOP1 establishes the opening cut.
3. STOP2 adds or changes the line.
4. STOP3 closes the three-cut phrase.
5. Resolution gives a short release.
6. NEXT BET arrives quickly enough that the previous three cuts are still mentally readable.

Do not add another meter, state panel, or reward system before submission.

---

## ノクターン・アクアリウム — submission Game/Reel lock

### Locked interaction rhythm

`BET → LEVER → SPIN → first STOP selects observation layer → STOP2/STOP3 collect reel evidence → MEMORY / DEPTH world response → NEXT BET`

The first STOP is the bridge between physical reels and the aquarium world:

- left first STOP → `広場`
- middle first STOP → `塔`
- right first STOP → `記録庫`

The reel window must therefore remain a gameplay instrument, not decoration beneath the LCD.

### Locked evidence principle

The same stopped symbol may carry different evidence meaning depending on the selected observation layer. The existing prototype uses this relationship to connect reel results to world discovery.

This is prototype-only interpretation. Do not infer final payout, probability, or finalized DEPTH math from it.

### Locked long-play variation model

`prototypes/nocturne-aquarium/game-reel-run7.js` remains the bounded 30–50G observation/evidence model.

It tracks:

- visits to each observation layer
- distinct reel-evidence signatures collected per layer
- recent observation layers
- recent evidence chains

It can return quiet guidance states such as:

- `seek` / `seek-evidence` — visit an under-observed or evidence-poor layer
- `shift-layer` — same layer repeated too often
- `shift-evidence` — same evidence chain repeated too often
- `balanced` — coverage is balanced; return priority to the actual reel outcome

This helper does **not** change payout, probability, reel control, or DEPTH thresholds.

### Submission feel target

For roughly 50G normal play, the intended loop is:

1. aquarium presentation attracts attention,
2. LEVER returns the player to the physical reels,
3. first STOP deliberately chooses where to observe,
4. STOP2/STOP3 complete the physical evidence,
5. MEMORY / DEPTH responds to that evidence,
6. world change creates a reason to play another reel game rather than merely watch the screen.

Do not replace this with automatic LCD progression or passive timed discoveries before submission.

---

## Next Visual & Mechanism Director handoff

Submission freeze is active. Do not modify executable gameplay merely to create a new Run number.

For final Visual verification, preserve these two different identities:

### 刻ノ一閃

- STOP1 / STOP2 / STOP3 must remain visually distinguishable as a three-cut phrase.
- Physical reels must remain dominant enough that the slash presentation reads as a consequence of stopping them.
- Existing `data-next-stance` presentation may be polished only if a concrete rendering defect is found; do not add layout height or continuous heavy effects.
- Do not retime the locked third-STOP / resolution cadence without regression evidence.

### ノクターン・アクアリウム

- first STOP → `広場 / 塔 / 記録庫` must remain visible inside the aquarium world rather than as a detached HUD.
- STOP2/STOP3 must still feel required to complete observation evidence.
- MEMORY / DEPTH response may deepen the world, but must not obscure or visually demote the reel window.
- The optional Run 8 observation-memory helper should not be forced into the stable public shell immediately before submission unless a concrete defect requires it and fresh QA can be completed.

## Final constraint

No complex payout system, finalized probability claim, new reel-control rule, or speculative numeric tuning should be added before the 12:00 submission verification.

Current objective is to preserve the tested integrated builds and demonstrate the intended Game/Reel identities cleanly.

SIGNAL / FORGE / VAULT remain untouched.
