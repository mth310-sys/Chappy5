# Game Plan — Project EMBERLORE

## Product thesis
EMBERLORE is being redesigned as a **mobile-browser action roguelite with a condensed loot-hunt loop**. Runs should fit roughly 5–10 minutes, but each run must contain several reasons to continue: kill density and impact, meaningful loot drops, build-defining equipment, escalating enemy pressure, boss payoff, persistent collection, and world discovery.

The previous telegraphed three-button turn-combat slice is a documented failed hypothesis. Human tests found it understandable but boring and visually underwhelming. Do not continue expanding that interaction model.

## Human direction — binding product input
The human explicitly requested that **Diablo be used as a reference direction**. This does not mean cloning Diablo content, art, names, classes, maps, or assets. It means studying and extracting the product loop that makes an action-RPG loot hunt compelling:

**enter danger → kill a group → see drops → inspect a potentially exciting upgrade → equip/build around it → become visibly stronger → seek harder enemies and better drops → defeat a boss → return with persistent gains → go again**

Diablo is one reference axis, not a requirement to reproduce a large 3D ARPG. The target remains an original, feasible iPhone-browser game.

## External mechanism research synthesis
Comparable-game research established several principles to preserve:
- Loot must create anticipation and recognizable chase, not only tiny percentage upgrades.
- Item effects should often alter behavior/rules, not only increase raw numbers.
- Combat needs enough mechanical depth that loot improves an already-fun activity rather than compensating for a weak core.
- Power gain should be strongly visible in speed, area, chain reactions, crowd control, survivability, or skill behavior.
- Rare drops should feel rare and legible; flooding the player with unreadable modifiers damages excitement.
- Short sessions still need an escalation arc: trash packs → pressure → elite/event → boss → payout.

## Replacement-core comparison
### A. Compact tactical grid
Strengths: readable on mobile, strong decision density, easier deterministic balance.
Weaknesses: weaker match for the newly requested Diablo reference, lower immediate kill/loot spectacle, and risks retaining the cerebral feel that already failed emotionally.

### B. Real-time micro-ARPG loot hunt — SELECTED
Strengths: directly tests whether movement, crowd-clearing, drops, equipment and build transformation can create immediate fun and replay desire. Stronger audiovisual potential. Natural fit for short dungeon runs.
Risks: touch control feel, performance, enemy readability, and scope can become expensive. Therefore the first slice must stay intentionally compact.

### C. Passive/auto-combat loot expedition
Strengths: easy phone controls and content scaling.
Weaknesses: weak player authorship; risks becoming a numbers screen and reproducing the previous lack of moment-to-moment excitement.

## Second-generation vertical slice
The first replacement playable should test the new pleasure loop, not content volume.

### Combat
- real-time top-down arena/dungeon chamber.
- touch/drag movement designed for one thumb.
- basic attack automatically targets nearby enemies so mobile input can focus on positioning.
- two active skills with cooldowns: one area-clear skill and one mobility/impact skill.
- multiple enemies at once, not isolated duels.
- visible hit reactions, damage numbers, particles, screen response and death bursts.
- at least three regular enemy behaviors plus one boss.

### Loot
- enemies can drop visible loot orbs/beams during combat.
- drops have clear rarity hierarchy.
- only a few equipment slots in the first slice so decisions stay readable.
- items combine a small base-power increase with a **signature affix** that changes play.
- examples of desired signature effects: explosions on kill, chain hits, burning trails, low-life frenzy, dash shockwave, orbiting projectiles.
- between combat waves, player chooses/equips a new drop and sees the build change immediately.

### Run arc
1. Enter the ruined vault chamber.
2. Clear an enemy pack.
3. Collect a loot drop and make one equipment decision.
4. Clear a harder pack with the new effect visibly active.
5. Face an elite/high-pressure wave.
6. Obtain another meaningful item.
7. Fight a boss.
8. Bank Echoes/discoveries and return.

### Persistent layer
Keep only enough persistence to create another reason to play:
- runs / clears / best depth.
- discovered item codex.
- Echoes.
- a very small number of side-grade starting blessings unlocked with Echoes.
- world/memory discovery may remain, but it must not interrupt combat or carry the product on its own.

## Presentation target
The previous build was described as cheap/underwhelming. The replacement slice must feel more like a game than a debug UI even without external art assets.

Minimum presentation goals:
- full-screen combat arena as the visual center.
- player character silhouette/shape with facing and motion.
- enemy bodies rather than abstract menu symbols.
- animated projectiles/melee arcs.
- particles and impact flashes.
- loot beams/pulses and rarity treatment.
- boss health presentation.
- dark-fantasy environment treatment using procedural/CSS/canvas visuals.
- compact HUD; menus should not dominate the experience.

No claim of production quality is allowed until the human says the perceived quality improved.

## Validation criteria for generation 2
After human play, separately judge:
1. Is moving and killing enemies fun before considering loot?
2. Does an enemy pack create more excitement than the old one-enemy turn loop?
3. Does a drop produce curiosity before opening/equipping it?
4. Does equipping an item visibly change the next fight?
5. Is there at least one moment where the build produces a satisfying chain reaction or power spike?
6. Does the game look/feel materially less cheap than generation 1?
7. After the boss or death, does the player voluntarily want another run?
8. What is the primary reason to replay: combat, better loot, stronger build, collection/story, or none?

If combat itself remains boring, do not attempt to save the design by multiplying loot/content. If loot is boring but combat is promising, redesign itemization before expanding the dungeon.

## Scope discipline
Do not attempt a full Diablo-sized ARPG. The immediate goal is to prove a small original browser game can deliver the essential emotional sequence: **kill → drop → inspect → transform → overpower → chase**.
