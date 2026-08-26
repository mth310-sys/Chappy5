# Progression & Content Analysis

Updated: 2026-08-26 14:35 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` (gameplay preserved; strategic clearance still blocked)

## Existing findings P-001 through P-014

Prior findings remain active. Key conclusions:

- **P-001 — FAIL / Severity 4 / HIGH / OBSERVED:** persistent bank/runs/discoveries record play but do not change later play.
- **P-002 — FAIL / Severity 4 / HIGH / OBSERVED + SIMULATED:** six anomaly selections complete all six discoveries because duplicates are prevented. Do not extend runway by adding names.
- **P-003 — WARNING / Severity 3 / HIGH / OBSERVED:** discoveries persist on contact even if that route collapses; eventual semantics must be retained knowledge versus extractable cargo.
- **P-004 — WARNING / Severity 3 / HIGH / OBSERVED + SIMULATED:** within-run progression is state-dependent; run-to-run strategic state resets.
- **P-005 — FAIL / Severity 3 / HIGH / OBSERVED:** discovered identities are not persistently inspectable; UI exposes only a count.
- **P-006 — WARNING / Severity 3 / HIGH / OBSERVED + SIMULATED:** collector behavior can raise anomaly selection and collapse risk, then that motive disappears after completion.
- **P-007 — FAIL / Severity 3 / HIGH / OBSERVED:** discovery identity is random from unseen entries and cannot be deliberately pursued through route, signal, depth, resonance, threat, or history.
- **P-008 — FAIL / Severity 3 / HIGH / OBSERVED:** additional banked salvage has no marginal meaning after extraction. Do not add a conventional stat shop merely to create a sink.
- **P-009 — DESIGN_GATE / Severity 4 / HIGH / OBSERVED + DESIGN ANALYSIS:** progression must change decisions rather than only power, have opportunity cost, reuse existing hooks, create a next-run intention, and remain testable with minimal content.
- **P-010 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** a few one-time unlocks only postpone the salvage dead end; prefer a small finite vocabulary plus repeatable mutually exclusive commitment.
- **P-011 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** `banked` is presented as lifetime cumulative recovery; future spending/staking cannot silently subtract from it.
- **P-012 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** six disconnected discoveries arrive as a random permutation and cannot currently carry an authored clue→revelation arc.
- **P-013 — BLOCKED_DESIGN_GATE / Severity 4 / HIGH / OBSERVED + SIMULATED + DESIGN ANALYSIS:** route-specializing progression is unsafe while route value remains unresolved.
- **P-014 — DESIGN_DIRECTION_GATE / Severity 4 / MEDIUM-HIGH / OBSERVED + SIMULATED + DESIGN ANALYSIS:** if strategic clearance is later restored, prefer state-oriented commitments over permanent named-route affinities.

## P-015 — Extraction horizon remains a viable progression dimension

- **Status:** BLOCKED_BY_STRATEGIC_CLEARANCE
- **Severity:** 4
- **Confidence:** HIGH for extraction-horizon differentiation; MEDIUM for eventual progression design
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** State-conditioned policies voluntarily return at materially different mean Threat levels: fixed calm **17.01**, fixed resonance **22.23**, fixed deep **26.95**, future-aware **27.44**, one-step **28.69**. Earlier slope-window evidence is withdrawn after corrected benchmark ordering and later RNG fixes.
- **Recommended Action:** Keep extraction horizon as a post-clearance progression axis, but do not encode a temporary resonance coefficient into permanent progression.

## P-016 — Visible A/B/C causality remains a compact progression vocabulary candidate

- **Status:** DESIGN_DIRECTION_CANDIDATE / NOT_CLEARED
- **Severity:** 3
- **Confidence:** MEDIUM-HIGH
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** A/B/C already exists on every route. Production still uses hidden 50% non-resonance chain loss; Executive is now testing whether same-signal preserve / different-signal break materially reduces the confirmed switching penalty under common-RNG branching.
- **Recommended Action:** Do not implement meta progression yet. If visible-signal causality clears the core, use it only as a decision vocabulary; do not make one signal permanently superior or inflate content with collectible variants.

## P-017 — Cap-specific progression premise superseded

- **Status:** SUPERSEDED_BY_P018
- **Severity:** 2
- **Confidence:** HIGH
- **Verification Type:** OBSERVED + SIMULATED
- **Evidence:** The pre-TQ-018 `+5` cap lead did not survive per-Run RNG isolation. Corrected probes kept fixed resonance ahead. The cap is therefore not a cleared future balance invariant and must not anchor progression design.
- **Recommended Action:** Do not use EX-017's old +0.70% lead as promotion evidence. High-chain reward growth remains unsafe as a progression shortcut while active-chain renewal is unresolved.

## P-018 — Active-chain preservation cannot be subsidized by progression

- **Status:** BLOCKED_DESIGN_GATE / ACTIVE_CHAIN_SWITCH_COST_CONFIRMED
- **Severity:** 4
- **Confidence:** HIGH for short-horizon switching-cost evidence / MEDIUM-HIGH for progression-design consequence
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** GS-016 sampled **105,401** active-chain states: calm/deep is locally better by one-step secured-bank EV in **52.76%**, but a minimal next-resonance option term flips **21.30%** of those states back toward resonance. EX-019 directly branched **104,736** active-chain states under shared exogenous RNG. Calm/deep is locally ahead in **52.52%**, yet at 2 decisions switch wins **28.84%** vs resonance **37.06%** with mean `switch - resonance = -0.9701`; at 3 decisions switch wins **26.17%** vs resonance **35.56%** with mean **-1.2477**. These are `SIMULATED`, not human-play results.
- **Recommended Action:** Until the core creates genuinely viable chain-sacrifice states, reject persistent chain-loss reduction, auto-match, chain insurance, resonance-only multipliers, larger continuation payouts, or any upgrade whose main value is avoiding the cost of leaving resonance.

## P-019 — Build diversity must survive trajectory-level comparison

- **Status:** BLOCKED_DESIGN_GATE / TRAJECTORY_VIABILITY_REQUIRED
- **Severity:** 4
- **Confidence:** HIGH for local-vs-short-horizon divergence / MEDIUM-HIGH for progression-design consequence
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** EX-019 shows that a route can look better on the current decision yet become inferior across the next 2–3 decisions because accumulated chain state changes the trajectory. Therefore immediate route diversity does not prove durable build diversity.
- **Recommended Action:** After strategic clearance, every progression prototype must demonstrate at least two viable multi-decision trajectories including pursuit, chain sacrifice/preservation and extraction timing. Reject builds that differ only on the first screen or one-step EV but converge to one solved routine.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS_WITH_STRATEGIC_WATCH | MEDIUM-HIGH | OBSERVED + SIMULATED | Depth/threat/haul/energy change within a run; extraction behavior differs by strategy. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Banked salvage has no marginal consequence; six discoveries have no durable payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| persistent_specialization_clearance | BLOCKED_ACTIVE_CHAIN_GATE | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | EX-019 confirms short-horizon renewal pressure after an active chain exists. |
| trajectory_viability_requirement | REQUIRED | HIGH | SIMULATED + DESIGN ANALYSIS | Local calm/deep advantage frequently reverses over 2–3 decisions; future builds must be validated as trajectories. |
| extraction_horizon_as_progression_axis | SUPPORTED_DIRECTION | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | State-conditioned policies voluntarily return at materially different mean Threat levels (17.01–28.69). |
| signal_state_as_progression_vocabulary | CANDIDATE_NOT_CLEARED | MEDIUM-HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Existing A/B/C can potentially make sacrifice legible without adding content volume; causal branch A/B test is pending. |
| chain_preservation_power_as_progression_axis | BLOCKED | HIGH | SIMULATED + DESIGN ANALYSIS | Current renewal/insurance value already suppresses switching over 2–3 decisions. |
| progression_vocabulary_direction | DESIGN_GATE | MEDIUM-HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Prefer state-oriented commitments combining pursuit, sacrifice and extraction horizon; do not bind permanent progression to route names or simulator-sensitive tuning. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no deliberate targeting exists. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; identities/meaning have no durable presentation. |
| narrative_revelation_structure | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Six discovery identities have no prerequisites, causality, or escalation. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the cumulative total. |
| reward_semantics | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Lifetime cumulative recovery should not silently become spendable balance. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Core contains a potentially durable preserve-vs-sacrifice tension, but current renewal pressure and human replay desire remain unresolved. |

## Executive handoff

`HUMAN_CANDIDATE_01` remains unchanged. **No gameplay change was made in this pass.**

1. Keep persistent progression blocked while Executive compares production hidden-50 chain exit against visible-signal causality under the same common-RNG 2–3 decision branch probe.
2. Treat P-017's old cap promotion premise as superseded; do not restore it as progression evidence.
3. Keep calm/deep/resonance permanent affinities, chain insurance, break-rate reduction, auto-match, resonance multipliers and high-chain power growth blocked.
4. Extraction horizon remains the strongest observed long-term decision axis.
5. Visible A/B/C remains the strongest compact vocabulary candidate because it can potentially make sacrifice state causal and legible without content inflation.
6. Require trajectory-level viability for future builds: two persistent commitments must remain defensible across several decisions and extraction timing, not only differ in immediate route choice.
7. Prefer effects that create a meaningful alternative objective **after** sacrificing accumulated state rather than refunding the sacrifice.
8. Do not turn `banked` into a linear stat shop merely to create a sink.
9. Do not add discovery quantity. If discovery becomes a long-term pillar, require pursuit agency and either causal investigation or a tiny authored revelation chain first.
10. Discovery semantics still require an Executive decision: knowledge retained on contact versus cargo requiring extraction.

Queued post-clearance design question:

**Can two tiny mutually exclusive commitments produce recognizably different multi-decision risk trajectories—different pursuit, sacrifice and extraction intentions—without flat power, route lock-in, signal lock-in, chain insurance or new content volume, while both remain strategically viable under the finally cleared core rules?**