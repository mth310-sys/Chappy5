# One Brain State

Updated: 2026-08-25 JST
Status: GENERATION_2_ACTION_LOOT_SLICE_IMPLEMENTED / HUMAN_FUN_TEST_REQUIRED

## Authority
- README.md is the top-level instruction and must never be modified.
- Latest `main` is the sole source of truth.
- Do not use repository history, deleted material, old prototypes, other repositories, or chat history as product evidence.

## Human product direction
The human gave a binding direction after the comparable-game research: **use Diablo as a reference direction**.

Interpretation:
- Do not clone Diablo IP, content, art, names, maps, classes, assets, or exact systems.
- Do extract the action-RPG loot-hunt pleasure loop: kill groups → exciting drop → inspect/equip → build visibly changes → overpower harder enemies → chase stronger/more interesting drops → boss → repeat.
- Keep the project feasible as an original iPhone-browser game and retain the short-session requirement.

## Previous generation verdict
Generation 1 (telegraphed three-button turn combat + relic draft) remains a failed product hypothesis.
Human feedback:
- mechanics and controls were understandable;
- story became roughly understandable after revision;
- actual fun: FAIL;
- presentation/product feel: FAIL (`boring` and `cheap / underwhelming`);
- replay desire: no positive evidence.

Do not return to incremental expansion of that core without new evidence.

## Research synthesis
Adjacent-game research and Diablo-specific research produced these product rules:
- combat must be fun before loot is considered;
- multiple simultaneous enemies and movement create stronger immediate pressure/spectacle than isolated arithmetic duels;
- loot should create recognizable chase and anticipation rather than mostly tiny percentage upgrades;
- signature item effects should visibly change behavior/rules;
- rare drops must remain legible and meaningful rather than becoming unreadable affix spam;
- the short run still needs escalation: pack → stronger pack → pressure/elite → boss → payout;
- presentation feedback matters: hit response, projectiles, particles, death bursts, loot beams, boss presentation, and full-screen world focus.

## Selected replacement core
**Generation 2 = real-time micro-ARPG loot hunt.**

The immediate emotional sequence to validate is:
**kill → drop → inspect → transform → overpower → chase**.

This direction was selected over a compact tactical grid and passive/auto-combat expedition because it better tests the human's Diablo reference while addressing the previous build's lack of excitement and perceived production value.

## Generation 2 playable now on latest main
Files:
- `index.html` — full-screen action-game shell and overlays.
- `styles.css` — dark-fantasy full-screen HUD, skills, loot cards, result and codex presentation.
- `game.js` — canvas real-time combat, enemies, loot effects and persistence.
- `GAME_PLAN.md` — replacement-core decision, Diablo-reference interpretation, scope and validation criteria.
- `README.md` — untouched top-level authority.

Implemented slice:
- full-screen top-down Canvas arena.
- drag/touch one-thumb movement.
- automatic nearest-target basic attack so movement remains the primary mobile gesture.
- active CLEAVE skill with area damage and cooldown.
- active DASH with movement/invulnerability window.
- multiple enemies simultaneously.
- three regular enemy behaviors/types: crawler, brute, ranged spitter.
- four-chamber escalation with final Ash Tyrant boss.
- boss health presentation.
- enemy/player hit particles, floating damage text, death bursts, shockwaves and lightweight vibration feedback where supported.
- in-combat Echo drops with visible loot beam/pulse.
- between-wave three-item loot choice.
- nine initial items across common/rare/legendary presentation.
- signature build effects: enemy death explosion, chained basic attacks, dash fire trail, low-life attack-speed frenzy, expanded/faster cleave, heal-on-kill, orbiting damage projectiles, raw attack boost, movement-speed boost.
- persistent Echoes, run/clear count, best wave and discovered-item codex in a separate generation-2 localStorage key.

## Important implementation intent
The item system deliberately avoids a large affix spreadsheet in this slice. Each item is meant to be readable quickly and produce an obvious next-fight change. This is testing whether a small browser game can capture loot excitement before scaling item count.

## Verification status
- README re-read before work: VERIFIED.
- Latest-main state and prior human feedback re-read before work: VERIFIED.
- GAME_PLAN.md replacement-core decision written: VERIFIED.
- index/styles/game writes to latest main: VERIFIED by GitHub write responses.
- game.js latest-main source fetch after write: VERIFIED; generation-2 source is present on main.
- JavaScript execution/runtime smoke test: UNVERIFIED from current connector environment.
- iPhone Safari touch feel/performance: UNVERIFIED.
- public Pages propagation of this exact generation-2 build: UNVERIFIED.
- human fun/product-feel evaluation: NOT YET TESTED.

Do not call generation 2 successful until human gameplay provides positive evidence.

## Highest priority next actions
1. Re-read README.md and latest main at every Turn.
2. Human-play generation 2 on iPhone before expanding content.
3. First test basic feel: is dragging/movement responsive and does automatic combat read clearly?
4. Test whether clearing a pack is materially more fun than generation 1.
5. Test whether loot creates curiosity and whether signature effects are visibly obvious in the following chamber.
6. Test whether at least one build produces a satisfying power-spike/chain-reaction moment (especially Emberbrand, Stormglass, Grave Orbit, Wide Cleave).
7. Test perceived quality: does this now feel like a game rather than a debug UI?
8. If runtime/touch blockers exist, fix them before content work.
9. If combat is promising but loot is weak, redesign itemization before increasing dungeon size.
10. If combat itself is still boring, do not try to save it with more items/story; reconsider the core again.

## Human validation questions
- Is moving and killing enemies fun before thinking about rewards?
- Did fighting a group feel materially better than the previous one-enemy loop?
- Did a drop/loot screen make you curious about what you could get?
- Did equipping an item obviously change the next fight?
- Did you get a moment where you felt noticeably overpowered or created a satisfying chain reaction?
- Does the game look and feel materially less cheap than generation 1?
- After the boss or death, did you voluntarily want to run again?
- If yes, was the reason combat, better loot, build experimentation, collection/story, or something else?

## Concurrency note
No Scheduled Task fleet has been created. If one is created later, follow README One Brain timing: five equivalent Turns around :00/:12/:24/:36/:48, each starting by re-reading README and latest main and avoiding destructive conflict.
