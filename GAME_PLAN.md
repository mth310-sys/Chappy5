# Game Plan — Project EMBERLORE

## Product thesis
EMBERLORE is an original **mobile-browser action roguelite / micro-ARPG** built around short expeditions with long-term ownership. The target is not a tiny arena survival demo. A session should create an adventure arc: prepare in a persistent refuge, descend into a compact dungeon, explore uncertain rooms, kill packs, find equipment, make route decisions, defeat an elite/boss, extract persistent gains, improve the Firekeeper, then choose where to descend next.

The emotional engine remains inspired by the useful mechanism behind Diablo-style loot hunting, without copying Diablo IP/content/assets/systems:
**enter danger → explore → kill → drop → inspect → transform build → push deeper → boss/extract → keep meaningful gains → prepare → chase again**.

## Human evidence
Generation 1 (three-button telegraphed turn combat) was understandable but boring and cheap-feeling. It is a failed hypothesis.

Generation 2 replaced it with real-time movement, packs, active skills, loot and build-changing effects. Human feedback after playing Gen 2: **“ゲームらしくなった。何かが足りない”** (it feels more like a game; something is missing).

Interpretation:
- The move to real-time action materially improved product feel. Preserve this direction unless stronger evidence contradicts it.
- Do NOT mark fun/replay as PASS yet.
- The missing layer is most plausibly ownership + adventure context: the current build is still a sequence of spawned combat chambers with loot cards, not a place the player explores or a character they build across expeditions.
- The next test should therefore add an adventure/extraction layer rather than simply multiplying enemy/item counts.

## Current selected direction — Generation 2.5 Adventure Layer
### Pillar 1: moment-to-moment action
- one-thumb drag movement.
- automatic basic attack to reduce mobile input burden.
- active combat skills for timing/positioning.
- enemy packs, elites and bosses.
- strong hit/death/loot feedback.

### Pillar 2: compact dungeon exploration
Replace the pure chamber sequence with a small room graph per expedition. A run should contain uncertainty and choice.
Room/node types for the next slice:
- Hunt — normal pack and loot opportunity.
- Elite — dangerous named enemy, guaranteed higher-quality reward.
- Cache — treasure with less combat but a route/opportunity cost.
- Shrine — choose a temporary blessing/cost.
- Boss — final gate.

The player sees only nearby/available destinations, chooses a route, and builds a small mental map. The purpose is not procedural complexity for its own sake; it is to create “what is over there?” and “do I risk the elite?” moments.

### Pillar 3: persistent Firekeeper ownership
A run must no longer evaporate completely at the result screen.
Introduce a small persistent loadout:
- Weapon slot.
- Armor slot.
- Relic slot.

During a run, temporary powers can be abundant. At successful extraction/boss clear, one meaningful piece can be kept in the persistent Vault. At camp the player chooses the starting loadout for the next expedition. Death still banks some Echoes/discovery but should not make extraction meaningless.

This is intentionally small. Do not build an inventory-management spreadsheet before proving that keeping/equipping a named item creates attachment and replay desire.

### Pillar 4: camp as decision space
Camp is not just a title menu. It should show:
- the Firekeeper / current power identity.
- equipped persistent weapon/armor/relic.
- Echoes and best depth.
- next available descent/region target.
- a compact Vault of kept equipment.
- one or two meaningful upgrade/side-grade choices, not dozens of passive +1 nodes.

The desired feeling is “this is my character and my haul,” not “start prototype again.”

### Pillar 5: world progression
Keep the Firekeeper / ash / vault mystery, but attach it to places and accomplishments. A new depth/biome should be a gameplay destination, not a paragraph unlock. The first slice can use one ruined-vault biome with named rooms; future regions only unlock after the adventure loop proves replay value.

## Loot philosophy
Two layers:
1. **Run powers** — dramatic effects that can stack quickly and make the current expedition explode in power (chain, death explosion, orbit, fire trail, wide cleave, etc.).
2. **Persistent gear** — fewer, named pieces with clear identity that influence the next run from the start.

Avoid unreadable affix spam. A rare item should be exciting because the player can immediately imagine what it enables.

## Next playable test
Build the smallest coherent adventure rather than a content dump:
1. Camp shows Firekeeper and 3 persistent equipment slots.
2. DESCEND opens a compact route map.
3. Player chooses between two first destinations (e.g. Hunt vs Cache).
4. Combat room uses the proven Gen-2 real-time controls.
5. Route reconverges through a Shrine/Elite decision.
6. Boss gate ends the expedition.
7. Successful clear lets player keep one named persistent gear drop.
8. Return to camp visibly equips/stores that haul.
9. Next run begins with that gear's effect active or clearly represented.

## Validation criteria
Do not ask only whether it works. Human evaluation after this slice must distinguish:
- Is combat still at least as good as Gen 2?
- Did choosing where to go create curiosity or tension?
- Did any treasure/cache/elite destination feel worth seeking?
- Did keeping an item after the run create ownership?
- Did camp feel like returning to *your* character rather than a menu?
- Did the player have a concrete reason to start another expedition?
- What did they want next: better gear, a harder route, a new place, build experiment, story answer, or nothing?

A positive “game-like” impression is progress, not success. Replay desire remains the decisive gate.

## Scope discipline
Do not build a Diablo-sized ARPG. Do not solve missing depth by adding hundreds of items or rooms. Prove a compact loop where combat, exploration, loot and persistent ownership reinforce each other. Expand content only after that loop creates voluntary replay desire.
