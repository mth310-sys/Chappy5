# One Brain State

Updated: 2026-08-25 JST
Status: NARRATIVE_LOOP_REVISION_IMPLEMENTED / HUMAN_RETEST_REQUIRED

## Authority
- README.md is the top-level instruction and must never be modified.
- Latest `main` is the sole source of truth.
- Do not use repository history, deleted material, old prototypes, other repositories, or chat history as product evidence.

## Current product
Working title: **EMBERLORE**
Direction: roguelite × growth × collection × short sessions.
Selected core remains under test: telegraphed turn combat + three tactical actions + relic drafting + persistent collection/unlocks.

The first human test established that mechanics/controls were understandable but the product lacked a meaningful backbone and did not yet inspire confidence in long-term replay. This is treated as a product-level failure signal, not a cosmetic writing request.

## Product spine after revision
EMBERLORE is now framed as repeated expeditions into a ruined memory vault. The player is a repeatedly reconstructed **Firekeeper** who has forgotten why the cycle exists. Echoes are damaged fragments of time/memory that survive failed runs. Relics and hostile entities act as evidence about the night of collapse. The deepest guardian recognizes the Firekeeper as a previous authority.

Long-term pull is explicitly designed around three connected motives:
1. Mastery — better tactical decisions and build construction.
2. Collection/growth — relics, Echoes, vows, entities, Archive completion.
3. Discovery — uncover what happened, what EMBER PROTOCOL is, and whether the Firekeeper helped cause the collapse.

## Current playable files
- `index.html` — mobile-first playable shell with current mystery/objective presentation.
- `styles.css` — combat plus story/progression/archive presentation.
- `game.js` — combat, persistence, relics, Echoes, memory progression, Archive logic.
- `GAME_PLAN.md` — current product thesis, world spine, retention ladder, validation criteria.

## Implemented gameplay
Existing systems retained:
- 4-depth run including a boss.
- visible enemy next intent.
- STRIKE / GUARD / FOCUS decisions.
- shield, focus, burn, healing interactions.
- 8 relics with build synergies.
- 3-choice relic drafting after wins.
- safe/risk route decision.
- localStorage persistence.
- Echo currency.
- 3 starting vows/charms, with 2 unlockable.

New integrated discovery systems:
- 10 persistent Memory Thread fragments.
- memory unlocks tied to actual play conditions: first entity contacts, dangerous route selection, relic collection thresholds, boss contact, first clear.
- dynamic home-screen CURRENT THREAD objective changes as evidence is recovered.
- entity-specific signals that reveal world information on contact.
- every relic now contains testimony/lore in the Archive, so collection contributes to the mystery rather than only stats.
- corrupted/dangerous route explicitly trades safety for information and Echo reward.
- result screen highlights newly recovered memory.
- Archive now shows active mystery, Memory Thread completion, locked unknown fragments, relic testimony, and entity records.
- the first-clear hook reveals `EMBER PROTOCOL / AUTHOR: YOU`, linking the protagonist directly to the collapse mystery without fully resolving it.
- old localStorage saves are normalized so missing `memories` and array fields do not immediately break the revised build.

## Human feedback — 2026-08-25
Direct first-playtest signal before this revision:
- Game mechanics, controls, and immediate purpose were understood.
- Major weakness: almost no backbone/story/world context, making the experience harder to emotionally interpret or care about.
- Human explicitly questioned whether the current form can sustain long-term play.

Interpretation remains:
- Goal clarity: preliminary PASS.
- Basic control/causality: preliminary PASS.
- Narrative/world motivation: previous build FAIL / missing.
- Long-term replay confidence: previous build FAIL / unproven.
- Tactical interest, build desire, experiment desire: still UNPROVEN.

The new build is a hypothesis-level response to that feedback. It must not be marked successful until humans replay it.

## Verification status
- Latest-main file presence after revision: VERIFIED. `index.html`, `styles.css`, `game.js`, `GAME_PLAN.md`, `STATE.md`, and untouched `README.md` are present.
- README integrity: VERIFIED by latest-main directory state; README SHA remained unchanged during this Turn.
- Source write integrity: VERIFIED by GitHub responses and latest-main directory listing.
- JavaScript parser/runtime execution after revision: UNVERIFIED from current environment.
- Detailed iPhone Safari compatibility after revision: UNVERIFIED.
- Human gameplay of revised memory system: NOT YET TESTED.
- Public deployment propagation of this exact revision: NOT independently observed in this Turn.

## Highest priority next actions
1. Re-read README.md and latest main before changing anything.
2. Human-play the revised build before adding large amounts of content.
3. Specifically test whether discovery now creates voluntary desire for another expedition; do not accept mere understanding as success.
4. Ask whether the player cared about the next Memory Thread, noticed that dangerous exploration reveals information, and felt Archive collection had meaning.
5. If story interest improves but combat remains repetitive, deepen tactical enemy patterns/build identities rather than adding more prose.
6. If replay/discovery desire remains weak, reconsider the selected core instead of manufacturing a large story/content backlog.
7. Only if revised core shows promise, design a first additional depth/region where world revelation and new mechanics arrive together.

## Revised human test questions
Record answers without softening negative feedback:
- Did you still know what to do without reading lots of explanation?
- Did enemy intent make your combat decisions change?
- Did relic choices create a build you cared about?
- Did you understand why the Firekeeper keeps returning?
- Did any enemy/relic/memory discovery make you curious about the collapse?
- Did the dangerous route feel like a meaningful choice between survival and discovery?
- Did you open Archive because you wanted to know more, rather than because you were instructed to?
- After finishing or dying, did you voluntarily want another expedition?
- What specifically did you want from the next run: stronger build, missing collection, next story answer, or nothing?

## Concurrency note
No Scheduled Task fleet has been created. If one is created later, follow README One Brain timing: five equivalent Turns around :00/:12/:24/:36/:48, each starting by re-reading README and latest main and avoiding destructive conflict.
