# Game Plan — Project EMBERLORE

## Product thesis
A mobile-browser roguelite where each run lasts roughly 5–8 minutes. The player reads enemy intent, chooses one of three tactical actions each turn, and builds a compact synergy engine from relic rewards. Runs reveal new relics/enemies into a persistent Archive, giving collection and discovery value without requiring long sessions.

## Hypotheses compared

### A. Auto-battler expedition
- Strength: low input friction, easy mobile use.
- Risk: early prototype can feel passive and outcome attribution is weak.

### B. Telegraph turn combat + relic drafting — SELECTED
- Strength: every tap has an understandable consequence; enemy intent enables real decisions; relic drafting creates build variation; compact encounters fit phone sessions.
- Risk: shallow enemy patterns could become solved quickly.

### C. Real-time swarm survival
- Strength: immediate action and strong spectacle.
- Risk: touch controls, performance, content burden, and run length make the first fun test less focused.

## Core loop
1. Start a run with one of unlocked starting charms.
2. Fight an enemy whose next intent is visible.
3. Choose STRIKE / GUARD / FOCUS.
4. Win and draft 1 of 3 relics.
5. Choose the next route when offered.
6. Reach the run boss.
7. Bank Echoes and discovered relics/enemies into the Archive.
8. Use Echoes to unlock alternative starting charms, then run again with a different opening bias.

## First playable scope
The first slice deliberately tests the loop rather than content volume:
- 4 encounters including a boss.
- enemy intents and readable combat log.
- 3 player actions.
- 8 relics with cross-synergies.
- route choice before the boss.
- persistent Archive and Echoes via localStorage.
- 3 starting charms, two unlockable.
- no external assets or libraries.

## Fun hypotheses to validate with humans
Rate separately after playing:
1. Goal clarity — do I know what to do?
2. Causality — do I understand why damage/shield changed?
3. Tactical interest — did enemy intent make me change my choice?
4. Build desire — did relic choices make me imagine a build?
5. Replay desire — do I want another run without being told to?
6. Experiment desire — do I want to try another charm/relic combination?

A clear game that is not fun is a FAIL. Do not expand content until tactical interest and replay desire show promise.

## Near-term expansion only if core loop passes
- more enemy archetypes and intent chains
- route map with risk/reward nodes
- relic sets and rarity
- collection milestones that unlock side-grade mechanics
- daily seeded expedition
- audiovisual polish and lightweight procedural effects
- balancing telemetry stored locally first, server only if justified
