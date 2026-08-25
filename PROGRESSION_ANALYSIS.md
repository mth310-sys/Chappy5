# Progression & Content Analysis

Updated: 2026-08-25 19:38 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT first playable

## Finding P-001 — Permanent layer records play but does not change future play

- director: Progression & Content Analysis Director
- status: FAIL
- severity: 4
- confidence: HIGH
- verification: OBSERVED
- finding: `meta.banked`, `meta.runs`, and `meta.found` persist between runs, but none of them changes the rules, starting state, route offers, extraction decision, or available strategy of a later run. The permanent layer is currently a record/archive rather than progression.
- evidence: `game.js` loads and displays `banked/runs/found`; `startRun()` always starts with the same Energy/threat state and `routeTemplates` is unchanged by meta state. No spend/unlock/equip path consumes banked salvage.
- impact: Repetition can improve player knowledge of the same loop, but the current build has no mechanical mid-term growth or strategic unlock reason to return. This directly conflicts with the flagship requirement for growth/collection/discovery to support long-term play.
- recommended_action: Executive should eventually add one compact progression mechanism that creates a new pre-run or in-run decision rather than a passive stat increase. Do not solve this by adding more relic names or raw numerical upgrades. Candidate shape for Executive evaluation: recovered discoveries unlock mutually exclusive expedition protocols/loadouts that alter how the three route types are valued.
- human_verification_needed: NO for the structural absence; YES later for whether the chosen progression creates replay desire.
- last_updated: 2026-08-25 19:38 JST

## Finding P-002 — Discovery collection is finite and currently shallow

- director: Progression & Content Analysis Director
- status: WARNING
- severity: 3
- confidence: HIGH
- verification: OBSERVED
- finding: There are six named discoveries. An anomaly immediately adds one random locked discovery to persistent `meta.found`; discovery does not currently reveal mechanics, alter decisions, or require successful extraction.
- evidence: `relics` contains six entries. `generateRoutes()` independently marks offered routes anomalous at 18%; choosing an anomaly calls `discoverMaybe()`, which immediately writes the found relic to localStorage before the run outcome is known. The only use of `meta.found` is the discovery counter and exclusion of already-found names.
- impact: Discovery presently behaves as a short finite checklist. Because discoveries survive even a later collapse, the collection layer is largely detached from the central push-your-luck extraction tension. Adding more names would only delay exhaustion without deepening play.
- recommended_action: Do not expand the relic list yet. Executive should decide whether discoveries are intended to be (a) knowledge/archive rewards that safely persist on contact, or (b) recovered artifacts that must be extracted. Either is valid, but the choice should deliberately reinforce the core loop. If they remain safe-on-contact, each important discovery should eventually reveal useful world knowledge or unlock a meaningful option rather than merely incrementing a counter.
- human_verification_needed: NO for current behavior; later YES for perceived discovery value.
- last_updated: 2026-08-25 19:38 JST

## Finding P-003 — Within-run progression exists, but run-to-run strategic state resets completely

- director: Progression & Content Analysis Director
- status: WARNING
- severity: 3
- confidence: HIGH
- verification: OBSERVED
- finding: A run does escalate: depth raises threat, extraction bonus grows with depth, haul accumulates, Energy depletes, and resonance chains can grow. This gives short-term progression. However, every new run resets all strategic variables and offers the same three route identities with no meta-driven variation.
- evidence: `chooseRoute()` increases depth and threat and can extend resonance; `extract()` scales bank by depth. `startRun()` resets Energy 10, depth 0, haul 0, threat 6, chain null and does not read persistent progression.
- impact: The first playable has a valid short-session arc, but repeated runs currently depend almost entirely on procedural rolls and player self-improvement. Without a meaningful second timescale, replay depth is likely to flatten after the core route/extraction puzzle is learned.
- recommended_action: Preserve the current run arc while the core loop is being proven. After Systems/Player Experience evidence supports the core, prioritize a small second-timescale decision layer before producing regions, enemies, story fragments, or larger content inventories.
- human_verification_needed: YES — after the core is structurally stable, verify whether ending a run creates desire for another before adding progression as compensation for a weak core.
- last_updated: 2026-08-25 19:38 JST

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS | HIGH | OBSERVED | Depth/threat/haul/energy/resonance/extraction bonus change within a run. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank and discoveries do not alter later decisions. |
| long_term_goal_strength | WARNING | HIGH | OBSERVED | Six-discovery checklist exists, but no mechanical/world payoff yet. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No loadout, protocol, equipment, or persistent build choice exists. |
| discovery_rate | UNKNOWN | MEDIUM | SIMULATED | 18% anomaly offers can expose discoveries, but actual acquisition pace depends on player route choice and run length. |
| content_exhaustion_risk | WARNING | HIGH | OBSERVED | Only six discoveries and no post-collection layer; quantity expansion is not recommended yet. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Core has repeatable risk decisions, but no second-timescale strategic variation is present. |

## Executive handoff

Do **not** make a major progression change from this Director pass. The current Executive priority to prove the core decision loop remains compatible with this analysis. The highest-value progression design question to queue is:

**What single persistent choice can make a later dive play differently without turning banked salvage into a linear power grind?**

A promising hypothesis is mutually exclusive expedition protocols/loadouts unlocked by meaningful discoveries, but this is a recommendation for Executive evaluation, not an approved direction.
