# Progression & Content Analysis

Updated: 2026-08-25 20:33 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT playable after anomaly pre-reveal change

## Finding P-001 — Permanent layer records play but does not change future play

- Status: FAIL
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `meta.banked`, `meta.runs`, and `meta.found` persist, but `startRun()` still always starts Energy 10 / threat 6 and route generation does not read persistent progression. No spend, unlock, equip, protocol, or other path changes a later run from banked salvage or discoveries.
- Recommended Action: After the core push-your-luck decision is proven, Executive should evaluate one compact persistent choice that changes how a later dive is played rather than granting linear power. Do not add raw stat upgrades or content quantity merely to create progression.

The recent anomaly pre-reveal improves the **within-run** decision layer, but does not change this finding. The flagship requirement still lacks a meaningful second timescale.

## Finding P-002 — Pre-revealed anomalies make the six-discovery checklist easier to deliberately consume

- Status: WARNING
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Every generated route independently has an 18% anomaly chance. With three visible offers, the probability that at least one anomaly is available on a decision is `1 - 0.82^3 ≈ 44.9%`; expected anomaly offers are `3 × 0.18 = 0.54` per decision. The current UI marks anomaly routes before choice (`⚠`, bonus salvage, threat +7), so a collection-motivated player can now intentionally prioritize them. `discoverMaybe()` still permanently records one of only six relics immediately on choosing an anomaly, before collapse/extraction outcome.
- Recommended Action: Do not expand the relic list. Executive should explicitly decide the semantic role of discoveries before progression implementation: safe-on-contact **knowledge** can persist through collapse, while recoverable **artifacts** should probably connect to successful extraction. The current behavior is internally closer to knowledge, despite presentation as recovered discoveries.

Impact: The pre-reveal change is valuable for the core because anomalies become informed risk/reward decisions, but it also increases content-exhaustion pressure. A player who wants collection can seek visible anomalies rather than encountering discoveries incidentally. Six names therefore should not be treated as long-lived content.

## Finding P-003 — Discovery currently competes with extraction tension instead of completing it

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Choosing an anomaly can call `discoverMaybe()` and immediately `saveMeta()`. A collapse later in the same `chooseRoute()` call sets haul to zero but does not remove the newly found discovery. Thus the salvage layer says “return safely to keep what you found,” while the discovery layer says “contact is enough; extraction is irrelevant.”
- Recommended Action: Do not change this mechanically from the Progression Director alone. Queue a deliberate Executive choice. If discoveries are knowledge/signals, presentation should make that distinction clear and future unlocks can logically occur on contact. If discoveries are physical relics, acquisition should be staged in-run and banked on extraction. Either model can work; ambiguity is the problem.

## Finding P-004 — Within-run progression has gained situational variation; run-to-run strategic state still resets

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Depth raises threat and extraction bonus; Energy falls; haul grows; resonance can chain; and visible anomalies now create depth-sensitive high-value opportunities because `anomalyBonusAt(nextDepth)` increases with depth. However, every new run resets strategic variables and offers the same route identities independent of persistent state.
- Recommended Action: Preserve the improved run arc while Systems validates whether fixed-depth extraction has actually been weakened. Only after that evidence should a second-timescale mechanic be integrated.

This is a meaningful improvement from the previous pass: anomaly pre-reveal makes two runs at the same depth less strategically identical because the player can react to a visible exceptional opportunity. It improves replay variation **inside** the existing loop without adding content volume.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS | HIGH | OBSERVED | Depth/threat/haul/energy/resonance/extraction bonus change; visible anomalies add situational opportunity. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank and discoveries still do not alter later decisions. |
| long_term_goal_strength | WARNING | HIGH | OBSERVED | Six-discovery checklist exists but has no mechanical/world payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| discovery_exposure | WARNING | HIGH | OBSERVED + SIMULATED | A visible anomaly is offered on about 44.9% of 3-route decisions under the current independent 18% roll. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Only six discoveries; visible anomalies can now be deliberately pursued and are saved on contact. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Situational anomaly offers improve within-run variation, but there is still no second-timescale strategy. |

## Executive handoff

Do **not** make a major progression change from this Director pass. The current Executive priority—prove that continuation/extraction is a genuinely situational decision—remains correct.

New progression-relevant consequence of the anomaly change: **the core got richer, but the six-item collection layer became easier to intentionally exhaust.** Do not answer that by adding more relic names.

The queued design question remains:

**What single persistent choice can make a later dive play differently without turning banked salvage into a linear power grind?**

A promising hypothesis remains mutually exclusive expedition protocols/loadouts unlocked by meaningful discoveries. Before approving that direction, Executive should first decide whether a “discovery” is knowledge retained on contact or cargo that must survive extraction, because that semantic choice determines how progression should connect to the core loop.
