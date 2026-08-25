# Progression & Content Analysis

Updated: 2026-08-25 21:35 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT playable after conditional calm/resonance route identities

## Finding P-001 — Permanent layer records play but does not change future play

- Status: FAIL
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `meta.banked`, `meta.runs`, and `meta.found` persist, but `startRun()` still always starts Energy 10 / threat 6 and route generation does not read persistent progression. No spend, unlock, equip, protocol, or other path changes a later run from banked salvage or discoveries.
- Recommended Action: After the core push-your-luck decision is proven, Executive should evaluate one compact persistent choice that changes how a later dive is played rather than granting linear power. Do not add raw stat upgrades or content quantity merely to create progression.

The new conditional calm recovery and resonance-chain reward improve **within-run** route identity, but they do not change this finding. The flagship requirement still lacks a meaningful second timescale.

## Finding P-002 — The six-discovery layer can be exhausted after exactly six anomaly choices

- Status: FAIL
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Every generated route independently has an 18% anomaly chance. With three visible offers, the probability that at least one anomaly is available on a decision is `1 - 0.82^3 ≈ 44.9%`. More importantly, `discoverMaybe()` selects only from relics not yet in `meta.found`, so there are **no duplicate discoveries before completion**. Every anomaly route chosen while relics remain therefore grants one new permanent discovery. Completion requires exactly six anomaly selections, not a long coupon-collection process. If a player always takes an anomaly whenever one is offered, six anomaly-available decisions occur after about `6 / 0.4486 ≈ 13.4` decision screens on average; collapse does not undo progress because discovery is saved before the collapse check.
- Recommended Action: Do not expand the relic list to conceal this short runway. Treat the current six as prototype evidence and decide what function discovery serves in the long-term loop before producing content.

This is stronger than the previous “content exhaustion risk” wording: under current code, the collection layer is structurally designed to finish quickly for any player who targets visible anomalies.

## Finding P-003 — Discovery currently competes with extraction tension instead of completing it

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Choosing an anomaly can call `discoverMaybe()` and immediately `saveMeta()`. A collapse later in the same `chooseRoute()` call sets haul to zero but does not remove the newly found discovery. Thus the salvage layer says “return safely to keep what you found,” while the discovery layer says “contact is enough; extraction is irrelevant.”
- Recommended Action: Do not change this mechanically from the Progression Director alone. Queue a deliberate Executive choice. If discoveries are knowledge/signals, presentation should make that distinction clear and future unlocks can logically occur on contact. If discoveries are physical relics, acquisition should be staged in-run and banked on extraction. Either model can work; ambiguity is the problem.

The new route-identity tuning increases the importance of state-dependent in-run decisions, which makes this semantic split more visible: the core asks the player to manage risk for salvage, but discovery currently bypasses that risk-management contract entirely.

## Finding P-004 — Within-run progression is becoming state-dependent; run-to-run strategic state still resets

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Depth raises threat and extraction bonus; Energy falls; haul grows; visible anomalies create depth-sensitive opportunities; calm now has conditional threat recovery at high threat; resonance gains materially more value when a live signal chain can be continued. These are meaningful changes in the value of actions across a single run. However, every new run resets strategic variables and offers the same route identities independent of persistent state.
- Recommended Action: Preserve this state-dependent run arc while Systems validates the new balance. If route identity becomes credible, the first meta-progression experiment should alter starting constraints or route priorities in a mutually exclusive way rather than simply increasing stats.

This pass increases confidence that the design has a possible foundation for later “protocol/loadout” progression: calm, deep, and resonance now have distinct conditional hooks that a persistent choice could bias without requiring new content families. That is a **design opportunity**, not approval to implement it yet.

## Finding P-005 — Collected discoveries are not persistently inspectable as discoveries

- Status: FAIL
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `meta.found` stores the six discovery names, but the persistent archive UI renders only `found.length / relics.length`. A discovery name appears in the transient run log when found; a later run replaces the active run/log, and there is no persistent archive view that shows which signals were discovered or what they mean. The long-term layer therefore preserves data without giving the player a durable sense of world knowledge, collection identity, or remembered discovery.
- Recommended Action: Do not add lore volume yet. Once Executive resolves whether discoveries are knowledge or extracted artifacts, provide a compact persistent way to inspect the few discoveries that already exist and attach consequence/meaning to them. Avoid increasing vertical UI burden until the iPhone layout is verified.

This matters independently of quantity: even a six-item prototype can test curiosity and completion if the player can remember and inspect what was found. A count alone cannot test that hypothesis well.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS | HIGH | OBSERVED | Depth/threat/haul/energy plus conditional calm, resonance chaining, anomaly opportunities and extraction multiplier create changing within-run state. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries still do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Six-discovery checklist has no mechanical/world payoff and stored identities are not persistently inspectable. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| discovery_exposure | WARNING | HIGH | OBSERVED + SIMULATED | A visible anomaly is offered on about 44.9% of 3-route decisions under the current independent 18% roll. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | No duplicates: exactly six chosen anomalies complete all six discoveries; targeted completion needs about 13.4 decision screens on average under the offer probability, ignoring route-selection tradeoffs. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; collected names/meaning have no durable archive presentation. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Conditional route identities create better within-run differentiation, but there is still no second-timescale strategy and new balance has not yet been re-simulated. |

## Executive handoff

Do **not** make a major progression change from this Director pass. The current Executive priority—validate the new conditional calm/resonance/deep identities and the continuation/extraction decision—remains correct.

Progression now has a clearer dependency on that result:

1. If the three route identities become genuinely situational, a later persistent **protocol/loadout** can plausibly bias the player toward a style without inventing a second game.
2. If the route economy still collapses to one dominant choice, meta progression would merely formalize the dominant strategy and should remain blocked.
3. Before any discovery-based unlock is approved, Executive must decide whether discoveries are **knowledge retained on contact** or **cargo requiring extraction**.
4. The current six discoveries should be treated as prototype markers, not content volume: they complete after exactly six anomaly selections and are not persistently inspectable by name.

Queued design question:

**After the core route economy is validated, what single mutually exclusive persistent choice can bias calm/deep/resonance priorities enough to make the next dive play differently without becoming a linear power grind?**

No gameplay change was made by Progression this pass because changing discovery semantics or adding meta progression would alter a major progression structure before the Executive/System evidence gate is satisfied.
