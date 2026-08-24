# Game Plan — Project EMBERLORE

## Product thesis
A mobile-browser roguelite where each run lasts roughly 5–8 minutes. The player reads enemy intent, chooses one of three tactical actions each turn, and builds a compact synergy engine from relic rewards. Repeated expeditions do not exist only for numerical progression: enemies, dangerous routes, relic collection, and boss clears recover persistent memory fragments that gradually explain the ruined world, the player's identity as a repeatedly reconstructed **Firekeeper**, and the hidden EMBER PROTOCOL.

The desired long-term pull has three connected motives:
1. **Mastery** — survive deeper encounters and build stronger combinations.
2. **Collection / growth** — recover relics, Echoes, vows, entities, and Archive records.
3. **Discovery** — find out what happened on the night of collapse and whether the Firekeeper caused it.

Story must be earned through play and discovery, not delivered primarily as exposition.

## Hypotheses compared

### A. Auto-battler expedition
- Strength: low input friction, easy mobile use.
- Risk: early prototype can feel passive and outcome attribution is weak.

### B. Telegraph turn combat + relic drafting — SELECTED, STILL UNDER TEST
- Strength: every tap has an understandable consequence; enemy intent enables real decisions; relic drafting creates build variation; compact encounters fit phone sessions.
- Risk: shallow enemy patterns could become solved quickly.
- Human signal after first playable: mechanics/controls were understood, but narrative/world motivation and confidence in long-term replay were weak.
- Response: do not merely add lore text. Bind persistent world discovery to the same actions used for combat, routes, collection, and repeated runs.

### C. Real-time swarm survival
- Strength: immediate action and strong spectacle.
- Risk: touch controls, performance, content burden, and run length make the first fun test less focused.

## World spine — current hypothesis
The world suffered a collapse centered on a vast memory vault. The player is a **Firekeeper**, reconstructed from ash whenever an expedition fails. They no longer remember why this cycle exists.

Echoes are fragments of damaged time/memory that survive failed expeditions. Relics are objects used during the collapse and contain partial testimony. Hostile entities are not generic monsters: their behavior and recognition of the Firekeeper are evidence. The deepest guardian recognizes the player as someone with previous authority over the vault.

The first mystery arc asks:
- Why can the Firekeeper return after death?
- Why do vault defenses recognize the Firekeeper as a returning authority?
- Who sealed the population inside during the collapse?
- What is EMBER PROTOCOL?
- Did the Firekeeper try to save the world, or help destroy it?

Do not resolve these questions through a single static prologue. Progressively reveal them through persistent discoveries.

## Core loop
1. Return to the Ember and see the current unresolved mystery/objective.
2. Choose an unlocked starting vow/charm.
3. Enter the ash and fight an entity whose next intent is visible.
4. Combat or first contact can recover entity evidence.
5. Win and draft 1 of 3 relics; relic collection also acts as testimony about the collapse.
6. Choose routes; safer routes protect the current run, dangerous corrupted memories offer higher informational and Echo rewards.
7. Reach the run boss and recover deeper authentication/memory evidence.
8. Bank Echoes, relic/entity records, and recovered memory fragments into the Archive even if the run fails.
9. Use the Archive to connect discoveries and expose the next unresolved objective.
10. Re-enter with a different build/path both to improve mastery and to recover evidence not yet found.

## Current playable scope
The revised first slice now contains:
- 4 encounters including a boss.
- enemy intents and readable combat log.
- 3 player actions.
- 8 relics with cross-synergies.
- route choice before the boss.
- persistent Archive and Echoes via localStorage.
- 3 starting charms/vows, two unlockable.
- 10 persistent memory fragments tied to actual play conditions.
- entity signals and relic testimony that contribute world information.
- a dynamic current mystery/objective on the home screen.
- Archive memory-thread progress and locked unknown records.
- run result callout when new memory was recovered.
- no external assets or libraries.

## Retention ladder hypothesis
This is a target to validate, not a claim of achieved retention.

### First 10 minutes
- understand combat and enemy intent.
- obtain first relic synergy.
- learn that enemies recognize or contain information about the player/world.
- see at least one unanswered mystery worth following.

### First hour
- try alternate vow/build direction.
- choose both safe and dangerous routes.
- recover a majority, but not all, of the current memory thread.
- clear the first guardian and discover the EMBER PROTOCOL hook.

### Multi-session
- pursue missing relic testimony and memory fragments.
- master multiple build archetypes rather than only raising raw stats.
- eventually enter additional depths/regions that answer old mysteries while opening new ones.

No additional regions should be bulk-produced until the revised first slice shows improved voluntary replay desire.

## Fun hypotheses to validate with humans
Rate separately after playing:
1. Goal clarity — do I know what to do?
2. Causality — do I understand why damage/shield changed?
3. Tactical interest — did enemy intent make me change my choice?
4. Build desire — did relic choices make me imagine a build?
5. Replay desire — do I want another run without being told to?
6. Experiment desire — do I want to try another charm/relic combination?
7. Discovery desire — do I care what the next expedition will reveal?
8. World integration — did discoveries feel earned by play rather than like unrelated story text?

A clear game that is not fun is a FAIL. A story that is interesting but disconnected from gameplay is also a FAIL.

## Near-term expansion only if revised core shows promise
- more enemy archetypes with intent chains that reinforce world identity.
- route map with genuinely different evidence/risk opportunities.
- relic sets and rarity that support distinct build identities.
- first additional depth only after human replay/discovery desire improves.
- collection milestones that unlock side-grade mechanics, not only stat inflation.
- lightweight audiovisual identity and procedural effects.
- local balancing/behavior telemetry if it materially helps tuning.
