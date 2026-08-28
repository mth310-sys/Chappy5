# Dual Prototype Game & Reel Director Handoff — Run 4

Date: 2026-08-29 JST
Status: `GAME_REEL_RUN4_TOKI_TIMER_REMOVAL_PENDING_CI`

## Source of truth

Re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both prototype `index.html` / integrated `play.html` code paths, recent commits, and `docs/PROTOTYPE_MACHINE_HANDOFF_RUN3.md` before changing code.

Latest `main` remains sole source of truth. SIGNAL / FORGE / VAULT were not changed.

## Fresh Machine/QA evidence

Machine Run 3 mitigation alone did **not** clear the Toki long-play blocker. Generic Autonomous Playtest `33210821022` against `d89ce30` had generic iPhone smoke PASS, Nocturne 50G PASS, and Toki WebKit target crash.

Game & Reel commit `c45744f` then removed duplicate embedded audio and per-tick DOM node rebuilding. Fresh run `33211773571` showed:

- generic iPhone interaction smoke: PASS;
- ノクターン・アクアリウム 50G repeated coordinate-touch play: PASS again;
- 刻ノ一閃: still FAIL, now captured as `dual-toki-round-7-failure.json`;
- the artifact has `current: null` at failure, so the iframe/browser target disappeared rather than reporting a normal disabled-state snapshot. Treat this as WebKit target instability, not a control-deck geometry defect;
- do not weaken the QA test to obtain green status.

## 刻ノ一閃 — integrated stability + STOP meaning

### Commit `c45744f` — `Harden Toki reel loop and surface cut semantics`

The previous Machine pass removed one outer-wrapper AudioBuffer allocation source, but the inner `index.html` still created its own Web Audio voice for every BET/LEVER/STOP/resolve while the integrated `play.html` also generated its Sound Director timeline. The inner reel renderer also replaced three `.sym` DOM nodes on every ~78 ms spin tick for each active reel.

The integrated build therefore:

1. lets `play.html` own the sound timeline and suppresses the inner prototype fallback `tone()` only while embedded; standalone `index.html` retains its fallback audio;
2. replaces embedded final-symbol rendering with a low-allocation renderer that reuses the three existing symbol nodes per reel;
3. surfaces the already-existing temporary symbol semantics at each STOP as a short reading cue:
   - `刀` = 強斬
   - `七` = 七印 / third STOP `決め七`
   - `蒼` = second STOP `二太刀冴え`
   - `桜` = first STOP `初太刀冴え`
   - `鐘` = 立直し
4. preserves `BET → LEVER → SPIN → STOP1 → STOP2 → STOP3 → resolve → NEXT BET`, the first-read chain (`連閃`), Visual Run 3 slash residue and Sound Run 3 STOP-to-slash timing.

### Commit `9d0ba0e` — `Move Toki reel spin off JavaScript timers`

Because `c45744f` still crashed WebKit at round 7, the integrated build now removes the remaining ~78 ms JavaScript spin timer from the embedded Toki play path. While a reel is spinning, motion is represented by a lightweight compositor/CSS transform animation; the actual prototype strip result is selected and rendered only when that reel is STOPped.

This preserves the gameplay contract:

- all three STOP buttons still stop independently and in the chosen order;
- each STOP still commits a real center symbol from the same current prototype-only strip arrays;
- first-stop enemy read, stopped-symbol quality semantics, reward tuning and resolution logic remain unchanged;
- the visual cadence remains `LEVER → moving reels → STOP1 → STOP2 → STOP3`, but continuous JavaScript DOM work during the spin is removed;
- the STOP meaning callback now captures its own stop number before the delayed visual read, so rapid subsequent input cannot relabel the previous STOP with a later-step semantic.

These labels and all current strip composition, quality values, rewards and chain feedback remain **prototype-only temporary tuning**. They do not create new payout rules or production probabilities.

### Visual Director continuation for 刻ノ一閃

Do not turn the short symbol readings into another HUD panel. Use them only as direction for physical/reel-linked presentation:

- `初太刀冴え` should feel like the first cut found a clean line;
- `二太刀冴え` should visually bridge STOP1 to STOP3 rather than compete with the final cut;
- `決め七` / `強斬` may sharpen the existing slash residue or blade-boundary response, but should not add a new full-screen effect system;
- preserve the compositor-based spinning implementation unless new QA proves it problematic; do not restore high-frequency JS reel redraws just for visual activity;
- keep the fixed control deck and 46 px information rail geometry untouched;
- if the fresh WebKit run against `9d0ba0e` still loses the target, stability remains the blocker before visual expansion.

## ノクターン・アクアリウム — stable comparison baseline retained

Nocturne was deliberately left code-identical in this Game & Reel run because the current integrated build now has repeated fresh 50G WebKit evidence. Its reel game already ties:

`first STOP → 広場/塔/記録庫 selection → three stopped center symbols → memory classification → strong-memory set → DEPTH world change`

and the wrapper retains cross-game `3-layer survey` progress plus reel-symbol echo feedback.

Changing this known-stable path without a concrete defect would add delivery risk. The next improvement should therefore be experiential/visual rather than new game math: make the observed place, physical reel chosen first, three stopped symbols, and resulting memory/world response read as one causal event.

All existing memory strengths, credit return, DEPTH thresholds and the starting 180 credit are prototype-only temporary tuning.

### Visual Director continuation for ノクターン

- keep the reels visually in the foreground even when the aquarium display is attractive;
- first STOP should make the chosen physical reel and matching `広場 / 塔 / 記録庫` world zone feel optically connected;
- when a pair echo or strong memory resolves, reflect the exact stopped-symbol evidence in the water/world reaction rather than making the LCD fire independently;
- do not replace the current survey optics with a generic progress bar;
- preserve the 50G-stable interaction/control geometry unless QA shows a regression.

## Verification state

A fresh automated run is required against `9d0ba0e` before claiming Toki 30G PASS. Until then:

- 刻ノ一閃 long-play: `PLAYTEST_UNVERIFIED` / pending CI after timer removal;
- ノクターン 50G automated repeated play: latest completed evidence PASS;
- real iPhone Safari feel/audio, fatigue and `REALITY_PRESENCE`: still Human/device verification items;
- Human Gate 2 remains closed.

SIGNAL / FORGE / VAULT remain untouched.
