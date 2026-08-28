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

## Visual & Mechanism handoff — 2026-08-29 Run 1

### 刻ノ一閃
- Rebuilt the outer cabinet silhouette away from a rounded black box: faceted shoulders, asymmetric-looking metallic edge treatment, violet internal spines and a separate blade bridge now create a dedicated sword-machine profile.
- LCD is now recessed inside a metallic screen frame, with glass reflection, moon/mist/pagoda depth layers and a stronger distinction between display light and cabinet material.
- Physical-reel presentation gained a darker recessed reel deck, center-payline glazing, cylindrical highlight/shadow treatment and selected-reel lift/glow.
- STOP1 / STOP2 / STOP3 now fire three different slash trajectories (`cut1`, `cut2`, `cut3`) from the same STOP event; third-stop resolution then drives the larger crossing flash and blade-bridge response.
- Opening cue remains compact in the LCD rather than becoming a detached HUD; successful first read is shown at the corresponding physical reel.
- Responsive rules preserve the three STOP targets and reel prominence around 390px width.

Next Sound focus: give the three slash trajectories distinct but related transient identities, with the third STOP and final resolve clearly separated in time. Avoid constant sword noise during normal spin.

### ノクターン・アクアリウム
- Rebuilt the silhouette as an aquarium instrument rather than a recolored cabinet: faceted tank body, side transparent cylinders, reflective tank frame and lower observation-log structure are visually distinct from 刻ノ一閃.
- LCD/tank now has separate water-surface, far glow, blurred back-city, near-city, light, particle, jellyfish and glass layers to create actual depth ordering.
- `広場 / 塔 / 記録庫` are rendered inside the aquarium world as three soft observation zones. The first STOP lights the corresponding world zone and the associated physical reel together.
- DEPTH advancement now changes CSS depth variables that physically displace city layers and strengthen deep glow, rather than only hue-shifting the scene.
- Reel window gained recessed glazing and cylindrical shading so reels remain a physical foreground object against the tank.
- Side tubes retain continuous low-intensity bubbles, but important memory events use the central memory body and scene shift instead of turning the whole cabinet into a flashing HUD.
- Responsive rules keep tank/reels/controls legible near 390px width.

Next Sound focus: preserve the quiet aquarium baseline. First STOP should sound like selecting a physical observation channel; strong memory connection and DEPTH advancement need separate identities. Do not cover the reel-stop sounds with ambient effects.

### Verification state

- JavaScript syntax for both rewritten standalone HTML prototypes was checked locally before commit.
- Headless Chromium screenshot capture in the available container timed out, so rendered appearance is still `VISUAL_UNVERIFIED` until browser/QA inspection.
- `REALITY_UNVERIFIED` and `PLAYTEST_UNVERIFIED` remain in effect pending the downstream browser pass.
- SIGNAL / FORGE / VAULT were not changed.