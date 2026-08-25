# One Brain State

Updated: 2026-08-25 JST
Status: GENERATION_2_5_EVALUATION_BUILD_FROZEN / HUMAN_RETEST_REQUIRED

## Authority
- README.md is the top-level instruction and must never be modified.
- Latest `main` is the sole source of truth.
- Do not use repository history, deleted material, old prototypes, other repositories, or chat history as product evidence.

## Binding human direction
- Overall product direction: roguelite × growth × collection × short sessions, smartphone browser, real long-term game rather than a tech demo.
- Diablo is a reference axis for the loot-hunt/action-RPG pleasure loop, not an instruction to clone IP/content/assets.
- Human explicitly delegated subsequent product decisions to One Brain and asked it to reread README and act autonomously.

## Human evidence so far
Generation 1 (three-button turn combat): understandable but boring and cheap/underwhelming. FAIL.
Generation 2 (real-time micro-ARPG arena + packs + active skills + build-changing loot): human verdict **“ゲームらしくなった。何かが足りない”**.

Interpretation:
- Real-time action/loot direction materially improved perceived game-ness.
- Fun/replay is still NOT PASS.
- One Brain diagnosis: Gen 2 had combat and loot but still behaved like an arena prototype. Missing product layers were adventure/exploration context and persistent ownership of a character/haul.

## Generation 2.5 evaluation build
The current public evaluation hypothesis adds the smallest adventure/extraction layer without bulk content.

### Camp / ownership
- Ember Camp home.
- Persistent Firekeeper loadout: Weapon / Armor / Relic.
- Persistent Vault and loadout switching.

### Expedition route
- Stage 1: Broken Gallery Hunt vs Sealed Cache.
- Stage 2: Ash Shrine vs Warden Pit Elite.
- Stage 3: Tyrant Gate boss.

### Two-layer loot
- Temporary run powers: explosion, chain, trail, frenzy, wide cleave, leech, orbit, power, speed.
- Persistent extracted gear: Cinder Edge, Storm Fang, Warden Plate, Runner Hide, Ember Eye, Grave Star.

### Extraction distinction
- Boss clear: full run Echoes + one persistent gear choice.
- Death: partial run Echoes only.
- Existing Vault gear remains safe.

## Evaluation-safety hotfix — 2026-08-25
Source review found a concrete test-contamination risk: pressing `NEW EXPEDITION` after a result could call the original `beginExpedition` while the prior `player` object still existed. That could carry temporary run items, HP, cooldowns/effects, or other player state into what should be a fresh run.

A minimal `hotfix.js` is now loaded after `game.js` and replaces the Start/New Expedition button handlers with a clean-run wrapper that clears temporary player/combat state before invoking the existing expedition start flow.

This hotfix intentionally does NOT add content, balance changes, new mechanics, presentation changes, or product hypotheses. It exists only to keep human evaluation valid.

## Files
- `README.md` — untouched authority.
- `GAME_PLAN.md` — Gen 2.5 product thesis and validation gate.
- `index.html` — evaluation UI and now loads `hotfix.js` after `game.js`.
- `styles.css` — current presentation.
- `game.js` — Gen 2.5 gameplay.
- `hotfix.js` — clean-run reset guard for Start/New Expedition.

## Verification status
- README re-read before latest action: VERIFIED.
- Latest STATE/main reviewed before latest action: VERIFIED.
- Concrete carry-over risk found by source review: VERIFIED from current `game.js` behavior (`beginExpedition` itself did not clear `player`).
- Hotfix file creation: VERIFIED by GitHub write response.
- index loading hotfix after game: VERIFIED by GitHub write response.
- JavaScript runtime smoke test: UNVERIFIED from connector environment.
- iPhone Safari touch/runtime after hotfix: UNVERIFIED.
- Public Pages propagation: UNVERIFIED.
- Human evaluation of Gen 2.5: NOT YET TESTED.

## Evaluation freeze
Do not add new gameplay/content/presentation changes before human replay unless a concrete runtime blocker or data-corruption issue is discovered. README explicitly says not to keep changing an evaluation target unnecessarily while human confirmation is required.

Independent safe work is limited to blocker fixes, source verification, persistence safety, and evaluation integrity.

## Human validation gate
Evaluate without coaching:
- Is combat still at least as good as Gen 2?
- Did choosing a route create curiosity/tension?
- Did Cache vs Hunt and Shrine vs Elite feel meaningfully different?
- Did extraction make boss victory more valuable?
- Did keeping/equipping a named item create ownership?
- Did Camp feel like returning to the player’s character rather than restarting a prototype?
- Most importantly: after returning to Camp, did the player want to descend again, and why?

Voluntary replay remains the decisive product gate.

## Next Turn
1. Re-read README and latest main.
2. If human reports a runtime blocker, fix it first without broadening the build.
3. Record human verdict exactly and do not soften negative feedback.
4. If replay desire improves, deepen the strongest source of desire.
5. If route choices feel like menus rather than adventure, evaluate true connected-room spatial exploration.
6. If persistent gear is not exciting, redesign gear identity/chase before adding inventory volume.
7. If combat itself loses appeal, do not hide that with meta systems.

## Concurrency note
No Scheduled Task fleet has been created. If created later, use README One Brain timing: five equivalent Turns around :00/:12/:24/:36/:48, each beginning from latest main and avoiding destructive conflicts.
