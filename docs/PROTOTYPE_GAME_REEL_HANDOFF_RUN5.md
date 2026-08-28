# Dual Prototype Game & Reel Director Handoff — Run 5

Date: 2026-08-29 JST
Status: `GAME_REEL_RUN5_IMPLEMENTED_PENDING_FRESH_CI`

## Source of truth

This run re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated prototype code paths, recent commits, and `docs/PROTOTYPE_MACHINE_HANDOFF_RUN4.md` before changing code.

Latest `main` is the sole source of truth. SIGNAL / FORGE / VAULT were not changed.

## Fresh Machine evidence

Machine Run 4 commit `6ad19f3` removed the WebKit-hot presentation paths from the integrated Toki wrapper without weakening the repeated-play test.

Fresh Generic Autonomous Playtest run `33215654307` against `6ad19f3` completed successfully. This clears the immediate Toki WebKit-target crash blocker enough to resume small gameplay/reel readability changes, but the lean rendering envelope must remain intact. Do not restore high-frequency JavaScript reel redraws or the removed compositor-heavy effect stack without new evidence.

Nocturne remains the stable 50G comparison baseline from the preceding QA/Machine cycle.

## 刻ノ一閃 — STOP result ownership + repeated-order variation

Commit `ab9e6db` updates `prototypes/toki-no-issen/play.html` without changing payout math, strip composition, reward values, or the lean Machine Run 4 render path.

### Change

Each STOP now captures the center symbol from the physical reel that was actually stopped and immediately binds it to the stop number and reel identity in the existing 42 px tempo rail.

The existing prototype-only symbol vocabulary is restored as readable reel evidence:

- `刀` → `強斬`
- `七` → `七印`; third STOP becomes `決め七`
- `蒼` → second STOP becomes `二太刀冴え`
- `桜` → first STOP becomes `初太刀冴え`
- `鐘` → `立直し`

The rail can therefore read a game as, for example, `左:桜 初太刀冴え → 中:蒼 二太刀冴え → 右:七 決め七`, instead of only showing `左→中→右`.

STOP number is captured at pointer input time before the deferred symbol read, preventing a rapid later STOP from relabelling the previous reel result.

### 10–30G anti-routine cue

The wrapper remembers only the immediately preceding completed STOP order. If the exact same order is completed repeatedly, after the third consecutive use the post-result rail changes from a neutral `前局の三太刀を読む` cue to `型替え候補：第一停止を変える`.

This is **prototype-only interaction guidance**. It does not alter winning probability, payout, symbol selection, internal reward, or any hidden state. It exists only to invite the player to vary the first action before the 10–30G loop becomes automatic.

## ノクターン・アクアリウム — world survey now points back to a physical reel

Commit `ec9436c` updates `prototypes/nocturne-aquarium/play.html` while preserving all current temporary memory strengths, DEPTH thresholds, credits, sound hierarchy, aquarium visuals, and survey math.

### Change

The existing `広場 / 塔 / 記録庫` survey already maps directly to first STOP `左 / 中 / 右`. The integrated rail now exposes that causal rule before the game instead of making the player infer it repeatedly:

- `広場＝左第一停止`
- `塔＝中第一停止`
- `記録庫＝右第一停止`

BET and LEVER show the next unobserved location together with the physical reel action that reaches it. This gives the next game a reel-based reason to exist even during a long normal-play stretch.

### STOP evidence preserved through MEMORY

Each delayed center-symbol read is now written into the STOP slot that caused it rather than appended blindly. The rail carries explicit physical evidence such as `左:貝・中:鍵・右:月` through:

`first STOP / observed place → stopped reel evidence → pair echo or three-type sample → MEMORY / DEPTH response`.

The final MEMORY display includes the stopped reel evidence, so the aquarium/LCD event does not replace the reels as the source of meaning.

STOP number is frozen at input time, preventing rapid STOP input from causing the 45 ms deferred read to inherit a later sequence number.

All memory/DEPTH values remain **prototype-only temporary tuning**. No new payout system or production probability was added.

## Visual Director continuation

### 刻ノ一閃

- Keep Machine Run 4's lean WebKit-safe render envelope. The new symbol semantics should not become a larger HUD.
- Use the exact stopped reel/symbol evidence as the source for subtle blade-boundary response: first-stop `桜`, second-stop `蒼`, third-stop `七`, and `刀` should feel different through the existing sword/cut language, not through additional full-screen layers.
- The repeated-order `型替え候補` is deliberately quiet. Do not turn it into a flashing instruction or payout implication.
- Preserve the fixed control deck and tempo-rail geometry around 390 px width.

### ノクターン・アクアリウム

- Make `広場＝左`, `塔＝中`, `記録庫＝右` perceptible through the existing optical links and observation windows, not generic arrows or a tutorial overlay.
- Keep stopped-symbol evidence visually in the reel/foreground layer while MEMORY and DEPTH responses happen deeper in the tank.
- When a pair echo or strong memory fires, the water/world reaction should appear to originate from the exact stopped evidence now named in the rail.
- Do not disturb the interaction geometry that has repeatedly survived 50G WebKit tests.

## Verification state

The prior Machine baseline is now green at `6ad19f3`, but both Run 5 code commits require a fresh Generic Autonomous Playtest before this run claims browser PASS.

- 刻ノ一閃: gameplay/reel Run 5 implemented, fresh 30G CI pending.
- ノクターン・アクアリウム: gameplay/reel Run 5 implemented, fresh 50G CI pending.
- Real iPhone Safari feel/audio, fatigue, and `REALITY_PRESENCE` remain Human/device verification items.
- Human Gate 2 remains closed.

SIGNAL / FORGE / VAULT remain untouched.
