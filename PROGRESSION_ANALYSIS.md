# Progression & Content Analysis

Updated: 2026-08-26 10:33 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` (gameplay preserved; strategic clearance still blocked)

## Existing findings P-001 through P-014

Prior findings remain active. Key conclusions:

- **P-001 — FAIL / Severity 4 / HIGH / OBSERVED:** persistent bank/runs/discoveries record play but do not change later play.
- **P-002 — FAIL / Severity 4 / HIGH / OBSERVED + SIMULATED:** six anomaly selections complete all six discoveries because duplicates are prevented. Do not extend runway by adding names.
- **P-003 — WARNING / Severity 3 / HIGH / OBSERVED:** discoveries persist on contact even if that route collapses; eventual semantics must be retained knowledge versus extractable cargo.
- **P-004 — WARNING / Severity 3 / HIGH / OBSERVED + SIMULATED:** within-run progression is state-dependent; run-to-run strategic state resets. Production anomaly bonuses at depths 1–6 are **2 / 3 / 5 / 8 / 10 / 13**.
- **P-005 — FAIL / Severity 3 / HIGH / OBSERVED:** discovered identities are not persistently inspectable; UI exposes only a count.
- **P-006 — WARNING / Severity 3 / HIGH / OBSERVED + SIMULATED:** collector behavior can raise anomaly selection and collapse risk, then that motive disappears after completion.
- **P-007 — FAIL / Severity 3 / HIGH / OBSERVED:** discovery identity is random from unseen entries and cannot be deliberately pursued through route, signal, depth, resonance, threat, or history.
- **P-008 — FAIL / Severity 3 / HIGH / OBSERVED:** additional banked salvage has no marginal meaning after extraction. Do not add a conventional stat shop merely to create a sink.
- **P-009 — DESIGN_GATE / Severity 4 / HIGH / OBSERVED + DESIGN ANALYSIS:** any progression prototype must change decisions rather than only power, have opportunity cost, reuse existing hooks, preserve the verified core, create a next-run intention, and be testable with minimal content.
- **P-010 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** a few one-time unlocks only postpone the salvage dead end. Prefer a small finite vocabulary plus repeatable mutually exclusive commitment over endless tiers/items.
- **P-011 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** `banked` is presented as lifetime 「累計回収」; future spending/staking cannot safely subtract from it without changing its meaning.
- **P-012 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** six disconnected discoveries arrive as a random permutation, so they cannot currently carry an authored clue→revelation arc.
- **P-013 — BLOCKED_DESIGN_GATE / Severity 4 / HIGH / OBSERVED + SIMULATED + DESIGN ANALYSIS:** route-specializing progression is unsafe while route value remains unresolved.
- **P-014 — DESIGN_DIRECTION_GATE / Severity 4 / MEDIUM-HIGH / OBSERVED + SIMULATED + DESIGN ANALYSIS:** if strategic clearance is later restored, prefer state-oriented commitments over permanent named-route affinities.

## Finding P-015 — Extraction horizon is a viable progression dimension, but persistent commitments remain blocked by route dominance

- Status: BLOCKED_BY_STRATEGIC_CLEARANCE
- Severity(1-5): 4
- Confidence: HIGH for extraction-horizon differentiation; MEDIUM for eventual progression design
- Verification Type: OBSERVED + SIMULATED + DESIGN ANALYSIS
- Evidence: State-conditioned extraction remains positive progression evidence: production policies voluntarily return at materially different mean Threat levels (fixed calm **17.01**, fixed resonance **22.23**, fixed deep **26.95**, future-aware **27.44**, one-step **28.69**). The newly CI-verified intermediate resonance-slope sweep does not clear the strategic blocker. At production slope **2**, fixed resonance scores **12.15845 bank/run** versus future-aware **12.009775**. At **1.75**, fixed resonance remains narrowly ahead (**11.721775** vs **11.67985**). At **1.5**, fixed resonance still leads (**11.39905** vs future-aware **11.177925**). At **1.25**, future-aware narrowly beats fixed resonance (**11.15145** vs **11.13225**) but also beats fixed calm (**10.840325**); this is the first tested point where the encoded mixed policy leads both major fixed competitors. At **1**, fixed calm becomes best (**10.840325**) over future-aware **10.777575** and fixed resonance **10.69925**. These are SIMULATED benchmark outcomes, not human play evidence. The narrow slope-1.25 window is therefore promising for strategic clearance, but progression must not treat it as production-approved until Systems/Executive establish robustness and choose whether to change the core.
- Recommended Action: Keep persistent progression unimplemented. Preserve extraction horizon as the first post-clearance progression axis, but update the gate: if Systems/Executive confirm a robust mixed-strategy window around slope 1.25 (or another core correction), progression can proceed without waiting for a perfect 33/33/33 route mix. Require the first tiny meta prototype to create different pursuit/cash-out intentions while remaining viable under the cleared production rules; do not encode the temporary tuning parameter itself into permanent progression.

### What the intermediate slope sweep changes for progression

The sweep narrows the blocker materially. It shows a transition from fixed-resonance dominance to a small mixed-policy lead before fixed-calm dominance appears. That means the core may have a usable strategic balance region without adding new enemies, items, stages, or a compensating meta system.

For progression, the important consequence is **not** “build around slope 1.25.” The consequence is that permanent progression should be designed against stable state variables—Threat exposure, extraction horizon, chain preservation, anomaly pursuit, haul at risk—rather than against whichever resonance coefficient Executive eventually approves. A meta layer tied directly to the tuning coefficient or named-route EV would be brittle and could become a trap after later balancing.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS_WITH_STRATEGIC_WATCH | MEDIUM-HIGH | OBSERVED + SIMULATED | Depth/threat/haul/energy change within a run; extraction behavior differs by strategy. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Banked salvage has no marginal consequence; six discoveries have no durable payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| persistent_specialization_clearance | BLOCKED_NARROWING | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | CI sweep finds a possible mixed-policy window at slope 1.25, but production remains slope 2 and Executive has not cleared a core change. |
| extraction_horizon_as_progression_axis | SUPPORTED_DIRECTION | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | State-conditioned policies voluntarily return at materially different mean Threat levels (17.01–28.69). |
| progression_vocabulary_direction | DESIGN_GATE | MEDIUM-HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Prefer state-oriented commitments including pursuit and extraction horizon; do not bind permanent progression to resonance tuning. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no deliberate targeting exists. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; identities/meaning have no durable presentation. |
| narrative_revelation_structure | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Six discovery identities have no prerequisites, causality, or escalation. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the cumulative total. |
| reward_semantics | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Lifetime cumulative recovery should not silently become spendable balance. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Core supports distinct risk horizons and now has a candidate mixed-strategy balance window, but durable strategy and human replay desire remain unverified. |

## Executive handoff

`HUMAN_CANDIDATE_01` remains unchanged. **No gameplay change was made in this pass.**

1. The CI-verified slope sweep materially narrows strategic uncertainty: slope 1.25 is the first tested point where future-aware beats fixed resonance and fixed calm, but only narrowly.
2. Do not interpret that candidate as progression clearance until Systems/Executive confirm robustness and approve a production core change.
3. Once cleared, extraction horizon remains the strongest observed axis for the first tiny persistent-choice prototype.
4. Keep calm/deep/resonance permanent affinities blocked; permanent progression should survive later numeric retuning.
5. Reject progression candidates that only raise expected bank or simply lock the player into one named route.
6. Prefer a tiny mutually exclusive prototype that creates different pursuit/cash-out intentions using existing Threat, chain, anomaly, haul, and extraction hooks.
7. Do not turn `banked` into a linear stat shop; resolve lifetime-versus-spendable semantics only when a proven progression prototype requires it.
8. Do not add discovery quantity. If discovery becomes a long-term pillar, require pursuit agency and either causal investigation or a tiny authored revelation chain first.
9. Discovery semantics still require an Executive decision: knowledge retained on contact versus cargo requiring extraction.

Queued post-clearance design question:

**Can two tiny mutually exclusive commitments produce recognizably different risk horizons and pursuit priorities—without flat power, route lock-in, or new content volume—while both remain strategically viable under the finally cleared core rules?**
