# One Brain State

Updated: 2026-08-25 JST
Status: FIRST_PLAYABLE_HUMAN_FEEDBACK_RECEIVED / CORE_PROMISE_UNPROVEN

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

## Human feedback — 2026-08-25
First direct human playtest signal:
- Game mechanics, controls, and immediate purpose were understood.
- Major weakness: almost no backbone/story/world context, making the experience harder to emotionally interpret or care about.
- Human explicitly questioned whether the current form can sustain long-term play.

Interpretation:
- Goal clarity: preliminary PASS.
- Basic control/causality: preliminary PASS.
- Narrative/world motivation: FAIL / missing.
- Long-term replay confidence: FAIL / unproven.
- Tactical interest, build desire, and experiment desire still require stronger evidence; do not mark PASS merely because the mechanics were understood.

This feedback is product-level evidence. Do not answer it by adding exposition alone. The next design must connect story/world progression to play, collection, discovery, and repeated runs so narrative context itself becomes part of the replay loop.

## Verification status
- GitHub write integrity: VERIFIED — files are present on latest main after writes.
- Source-level logic review: PARTIAL.
- JavaScript parser/runtime execution: UNVERIFIED in initial Turn.
- iPhone Safari layout/input: human was able to play and understand mechanics; detailed compatibility remains UNVERIFIED.
- GitHub Pages publication: human reached the playable, but repository-side publication configuration is not independently recorded yet.
- Human fun/replay evaluation: STARTED; current long-term replay signal is negative/uncertain.

## Highest priority next actions
1. Re-read README.md and latest main before changing anything.
2. Treat the first human feedback as a meaningful warning, not a request for cosmetic lore.
3. Redesign EMBERLORE's product spine around an integrated mystery/progression structure: repeated expeditions must reveal why the world resets, what Echoes/relics are, who/what the player is, and what larger objective is being advanced.
4. Make persistent Archive discoveries carry story fragments, relationships, locations, or world-state revelations rather than being a checklist only.
5. Expand run structure only where it creates meaningful discovery, build variation, strategic mastery, or narrative progress.
6. Define a credible medium/long-term retention ladder before bulk content production (first hour, first week, collection completion, mastery goals).
7. Re-test whether the revised game creates voluntary replay desire. If not, reconsider the selected core rather than accumulating content.

## Human test questions
Record answers without softening negative feedback:
- Did you know what to do?
- Did you understand why HP/shield/burn changed?
- Did enemy intent change your decisions?
- Did relic choices create a build you cared about?
- After the run, did you want to play again voluntarily?
- Did you want to try a different charm/relic combination?
- Did you care what the next expedition would reveal about the world or protagonist?

## Concurrency note
No Scheduled Task fleet was created in the initial Turn. If one is created later, follow README One Brain timing: five equivalent Turns around :00/:12/:24/:36/:48, each starting by re-reading README and latest main and avoiding destructive conflict.
