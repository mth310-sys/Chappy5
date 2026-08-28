# Chappy5 Dual Prototype Status

Status: `HUMAN_MACHINE_APPROVED_FOR_PROTOTYPE_COMPARISON`

Human directive received 2026-08-29 JST: build browser prototypes for both **刻ノ一閃** and **ノクターン・アクアリウム**, with delivery target 2026-08-29 12:00 JST.

This is an explicit Human Gate transition for a **bounded two-prototype comparison**, not approval of either machine as the final production machine.

## Current shared goal

Produce two high-quality iPhone/Safari browser playables that translate the approved flyer directions into interactive pachislot prototypes.

### 刻ノ一閃
Primary question: can `LEVER → REEL SPIN → STOP1 → STOP2 → STOP3 → sword-action resolution` feel immediate, physical and worth repeating?

Required first build:
- dedicated cabinet silhouette
- large LCD + physical-style 3 reels
- 3 STOP interaction
- STOP-linked sword-action choreography
- reel/light/sound synchrony
- touch-first iPhone layout

### ノクターン・アクアリウム
Primary question: can a browser pachislot feel like a deep physical aquarium cabinet while preserving actual reel play?

Required first build:
- dedicated aquarium cabinet silhouette
- layered LCD/reel/glass/depth presentation
- 3 reels + normal repeated play
- small memory/world-change events
- ambient light and audio behavior
- touch-first iPhone layout

## Constraints

- Latest `main` remains sole source of truth.
- This does not alter SIGNAL / FORGE / VAULT.
- No third-party IP/assets.
- Generated flyer numbers are not game specifications.
- Prototype logic may use explicit temporary tuning values, but they must remain prototype-only and easy to replace.
- Human Gate 2 remains closed. Neither machine may be called complete without `HUMAN_MACHINE_VERIFIED`.

## Delivery target

2026-08-29 12:00 JST.

Until delivery, prioritize playable quality over documentation volume.

## Game & Reel handoff — 2026-08-29 early build

### 刻ノ一閃
Game/Reel pass now makes all three STOPs matter instead of resolving from an unrelated random win flag.

- LEVER reveals one of three enemy opening cues: first STOP should be left / middle / right.
- The first stopped reel therefore has an explicit reading decision. Correct reading adds technique quality and marks the reel visually.
- The center symbol actually stopped on each reel is retained and used in final resolution.
- Temporary prototype symbol semantics: `刀` is a strong cut, `七` is stronger as the third cut and as a pair, `蒼` favors the second cut, `桜` favors the first cut, `鐘` is a small stabilizer.
- Resolution combines stop order + three center symbols into technique quality. Reel patterns such as multiple `七` or a `刀` now alter reward/feedback.
- The intent is not to finalize reel control or payout math yet; the current values are explicitly temporary tuning for testing the repeated three-STOP rhythm.

Next Visual focus: make the opening cue and successful read legible without becoming UI-heavy; visually distinguish the three successive cuts while keeping the physical reel window dominant.

### ノクターン・アクアリウム
Game/Reel pass removes the previous independent 42% memory lottery and ties discovery to reel play.

- The first stopped reel selects an observation layer: left=`広場`, middle=`塔`, right=`記録庫`.
- All three center symbols are retained and interpreted at resolution.
- `鍵` in the tower, `月` in the archive, multiple `灯` in the plaza, paired `七`, etc. produce different memory classes.
- The same reel symbols can therefore mean something different depending on which reel the player chose to stop first.
- Three distinct strong memory classes connect and advance DEPTH, after which the set resets for another discovery cycle.
- Starting prototype credit was raised to 180 so a roughly 50G normal-play observation is possible without the temporary credit economy ending the test prematurely.

Next Visual focus: show `広場 / 塔 / 記録庫` selection as part of the aquarium world rather than a detached HUD, and make DEPTH changes alter perceived world depth rather than only hue.

### Shared caution

No final payout/spec claims should be inferred from these temporary values. Human Gate 2 remains closed.