# One Brain State

Updated: 2026-08-25 JST
Status: FIRST_PLAYABLE_IMPLEMENTED / HUMAN_FUN_TEST_PENDING

## Authority
- README.md is the top-level instruction and must never be modified.
- Latest `main` is the sole source of truth.
- Do not use repository history, deleted material, old prototypes, other repositories, or chat history as product evidence.

## Current product
Working title: **EMBERLORE**
Direction: roguelite × growth × collection × short sessions.
Selected core: telegraphed turn combat + three tactical actions + relic drafting + persistent collection/unlocks.

Why this was selected and what alternatives were rejected are recorded in `GAME_PLAN.md`.

## Current playable files
- `index.html` — fixed entry shell for the playable.
- `styles.css` — mobile-first UI.
- `game.js` — current gameplay and persistence.
- `GAME_PLAN.md` — product thesis and human validation criteria.

## Implemented in first slice
- 4-room run including a boss.
- Visible enemy next intent.
- STRIKE / GUARD / FOCUS decisions.
- shield, focus, burn, healing interactions.
- 8 relics with several build synergies.
- 3-choice relic drafting after wins.
- one risk/reward route decision.
- localStorage persistence.
- Archive of discovered relics/enemies.
- Echo currency.
- 3 starting charms, with 2 unlockable using Echoes.
- win/loss result and run history counters.

## Verification status
- GitHub write integrity: VERIFIED — files are present on latest main after writes.
- Source-level logic review: PARTIAL — progression flow was reviewed during implementation.
- JavaScript parser/runtime execution: UNVERIFIED in this Turn.
- iPhone Safari layout/input: UNVERIFIED.
- GitHub Pages publication: UNKNOWN; do not claim a public URL until observed.
- Human fun/replay evaluation: NOT STARTED.

## Highest priority next actions
1. Re-read README.md and latest main before changing anything.
2. Perform an executable smoke test of the current playable if the environment permits; fix blockers before adding content.
3. Confirm a stable public play entry only from observed configuration/result, never by guessing a URL.
4. Freeze the tested version and request/record human play feedback against the six criteria in GAME_PLAN.md.
5. Treat clarity and fun separately. If tactical interest or replay desire FAIL strongly, redesign the core instead of piling on content.
6. Only after the core shows promise, deepen enemies/routes/relic synergies and long-term collection.

## Human test questions
Record answers without softening negative feedback:
- Did you know what to do?
- Did you understand why HP/shield/burn changed?
- Did enemy intent change your decisions?
- Did relic choices create a build you cared about?
- After the run, did you want to play again voluntarily?
- Did you want to try a different charm/relic combination?

## Concurrency note
No Scheduled Task fleet was created in this Turn. If one is created later, follow README One Brain timing: five equivalent Turns around :00/:12/:24/:36/:48, each starting by re-reading README and latest main and avoiding destructive conflict.
