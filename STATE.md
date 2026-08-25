# One Brain State

Updated: 2026-08-25 JST
Status: GENERATION_2_5_ADVENTURE_LAYER_IMPLEMENTED / HUMAN_RETEST_REQUIRED

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
- Real-time action/loot direction materially improved perceived game-ness. Preserve it for the next test.
- Do NOT call fun or replay PASS yet.
- One Brain diagnosis: Gen 2 had combat and loot but still behaved like an arena prototype. Missing product layers were adventure/exploration context and persistent ownership of a character/haul.

## Generation 2.5 decision
Add the smallest adventure/extraction layer capable of testing whether the player begins to feel:
- “where should I go?”
- “what will I find?”
- “is the elite worth the risk?”
- “this is my Firekeeper/loadout.”
- “I brought something valuable home.”
- “I want to descend again with it.”

Do not solve this by bulk content.

## Latest-main playable changes
### Camp / ownership
- Home is now framed as Ember Camp rather than a plain start menu.
- Persistent Firekeeper loadout with Weapon / Armor / Relic slots.
- Starter Rust Blade and Ash Wrap.
- Persistent Vault screen for kept gear and loadout switching.

### Expedition route
- DESCEND now opens a compact route map instead of immediately spawning chamber 1.
- Stage 1 choice: Broken Gallery Hunt vs Sealed Cache.
- Stage 2 choice: Ash Shrine vs Warden Pit Elite.
- Stage 3: Tyrant Gate boss.
- Route nodes communicate different reward/risk intentions.

### Room types
- Hunt: standard enemy pack and run-power reward.
- Cache: skips combat and grants an immediate run-power choice plus Echoes.
- Shrine: restores/increases HP and adds damage before boss route.
- Elite: named high-pressure encounter with additional enemies and better reward weighting.
- Boss: Ash Tyrant, extraction gate.

### Two-layer loot model
Run powers remain temporary dramatic build effects (explosion, chain, trail, frenzy, wide cleave, leech, orbit, power, speed).

Persistent gear is now separate and survives successful extraction:
- Cinder Edge — persistent weapon damage identity.
- Storm Fang — persistent chain weapon.
- Warden Plate — persistent max-HP armor.
- Runner Hide — persistent movement armor.
- Ember Eye — persistent kill-burst relic.
- Grave Star — persistent orbit relic.

After boss victory, one of up to three not-yet-owned persistent pieces is selected, added to the Vault, and auto-equipped. Camp then visibly reflects the haul. Vault gear can be switched between expeditions.

### Death/extraction distinction
- Boss clear banks full run Echoes and offers persistent extraction gear.
- Death banks only part of run Echoes.
- Existing Vault gear remains safe.
This is deliberately light extraction pressure; tune only after human evidence.

## Files
- `README.md` — untouched authority.
- `GAME_PLAN.md` — updated Gen 2.5 product thesis and validation gate.
- `index.html` — camp/loadout, route map, extraction and Vault overlays.
- `styles.css` — camp, loadout, route nodes, Vault/extraction presentation.
- `game.js` — route progression, room types, combat reuse, persistent gear/equipment/extraction.

## Verification status
- README re-read before this work: VERIFIED.
- Latest main STATE/GAME_PLAN/index/styles/game reviewed before changes: VERIFIED.
- GAME_PLAN write: VERIFIED by GitHub response.
- index/styles/game writes: VERIFIED by GitHub responses.
- STATE write: this commit records current state.
- JavaScript parser/runtime smoke test: UNVERIFIED from connector environment.
- iPhone Safari runtime/touch flow after Gen 2.5: UNVERIFIED.
- Public Pages propagation: UNVERIFIED.
- Human evaluation of Gen 2.5: NOT YET TESTED.

## Known implementation risks to inspect next
- Verify route progression after Cache/Hunt and Shrine/Elite on actual runtime.
- Verify death result cannot accidentally double-bank Echoes.
- Verify persistent gear migration works for existing Gen-2 localStorage.
- Verify boss extraction selection and Vault equip persist after reload.
- Verify buttons/route map fit iPhone viewport without awkward scrolling.
- The map is currently a node-choice representation, not free spatial dungeon walking. This is intentional for the smallest hypothesis test; only build free-room exploration if route/ownership adds replay desire or evidence specifically demands spatial exploration.

## Human validation gate
Ask the human to play without coaching and evaluate:
- Is combat still at least as good as Gen 2?
- Did choosing a route create curiosity/tension?
- Did Cache vs Hunt and Shrine vs Elite feel meaningfully different?
- Did extraction make boss victory more valuable?
- Did keeping/equipping a named item create ownership?
- Did Camp feel like returning to their character rather than restarting a prototype?
- Most importantly: after returning to Camp, did they want to descend again, and why?

Do not mark success because the systems are understandable or because there are more screens. Voluntary replay remains the decisive product gate.

## Next Turn
1. Re-read README and latest main.
2. If human runtime feedback reports a blocker, fix it first.
3. If Gen 2.5 is functional and replay desire improves, deepen the strongest source of desire rather than broadening everything.
4. If route choices feel like menus rather than adventure, evaluate a true connected-room dungeon with spatial discovery.
5. If persistent gear is not exciting, redesign gear identity/chase before adding inventory volume.
6. If combat loses appeal, do not hide that with meta systems.

## Concurrency note
No Scheduled Task fleet has been created. If created later, use README One Brain timing: five equivalent Turns around :00/:12/:24/:36/:48, each beginning from latest main and avoiding destructive conflicts.
