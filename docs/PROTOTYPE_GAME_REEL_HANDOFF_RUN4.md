# Dual Prototype Game & Reel Director Handoff — Run 4

Date: 2026-08-29 JST
Status: `GAME_REEL_RUN4_TOKI_STABILITY_FIX_PENDING_CI`

## Source of truth

Re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both prototype `index.html` / integrated `play.html` code paths, recent commits, and `docs/PROTOTYPE_MACHINE_HANDOFF_RUN3.md` before changing code.

Latest `main` remains sole source of truth. SIGNAL / FORGE / VAULT were not changed.

## Fresh Machine/QA result

The Machine Run 3 mitigation did **not** clear the Toki long-play blocker.

Generic Autonomous Playtest run `33210821022` against `d89ce30` completed with:

- generic iPhone interaction smoke: PASS;
- ノクターン・アクアリウム 50G repeated coordinate-touch play: PASS;
- 刻ノ一閃 30G repeated play: FAIL because the WebKit target itself crashed while QA was taking the second geometry sample for a STOP control.

This is still a browser-target crash, not a control-deck drift/actionability failure. Do not weaken the QA test to obtain a green result.

## 刻ノ一閃 — integrated stability + STOP meaning

Commit `c45744f` — `Harden Toki reel loop and surface cut semantics`

The previous Machine pass removed one outer-wrapper AudioBuffer allocation source, but the inner `index.html` still created its own Web Audio voice for every BET/LEVER/STOP/resolve while the integrated `play.html` also generated its Sound Director timeline. The inner reel renderer also replaced three `.sym` DOM nodes on every ~78 ms spin tick for each active reel.

The integrated build now:

1. lets `play.html` own the sound timeline and suppresses the inner prototype fallback `tone()` only while embedded; standalone `index.html` retains its fallback audio;
2. replaces the embedded `render()` with an equivalent low-allocation renderer that reuses the three existing symbol nodes per reel instead of rebuilding their innerHTML each tick;
3. preserves the same prototype-only reel strips, random offsets, 78 ms spin cadence, STOP order logic, symbol semantics, reward tuning and control geometry;
4. surfaces the already-existing temporary symbol semantics at each STOP as a short reading cue:
   - `刀` = 強斬
   - `七` = 七印 / third STOP `決め七`
   - `蒼` = second STOP `二太刀冴え`
   - `桜` = first STOP `初太刀冴え`
   - `鐘` = 立直し
5. preserves `BET → LEVER → SPIN → STOP1 → STOP2 → STOP3 → resolve → NEXT BET`, the first-read chain (`連閃`), Visual Run 3 slash residue and Sound Run 3 STOP-to-slash timing.

These labels do **not** create new payout rules. All current strip composition, quality values, rewards and chain feedback remain prototype-only temporary tuning and must not be interpreted as production specifications.

### Visual Director continuation for 刻ノ一閃

Do not turn the new short symbol readings into another HUD panel. Use them only as direction for physical/reel-linked presentation:

- `初太刀冴え` should feel like the first cut found a clean line;
- `二太刀冴え` should visually bridge STOP1 to STOP3 rather than compete with the final cut;
- `決め七` / `強斬` may sharpen the existing slash residue or blade-boundary response, but should not add a new full-screen effect system;
- keep the fixed control deck and 46 px information rail geometry untouched;
- if the fresh WebKit run still crashes, stability remains the blocker before visual expansion.

## ノクターン・アクアリウム — stable comparison baseline retained

Nocturne was deliberately left code-identical in this Game & Reel run because the current integrated build has fresh 50G WebKit repeated-play evidence. Its reel game already ties:

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

A fresh automated run is required against `c45744f` before claiming Toki 30G PASS. Until then:

- 刻ノ一閃 long-play: `PLAYTEST_UNVERIFIED` / pending CI;
- ノクターン 50G automated repeated play: latest completed evidence PASS;
- real iPhone Safari feel/audio, fatigue and `REALITY_PRESENCE`: still Human/device verification items;
- Human Gate 2 remains closed.

SIGNAL / FORGE / VAULT remain untouched.
