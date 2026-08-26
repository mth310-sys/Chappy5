# Progression & Content Analysis

Updated: 2026-08-26 18:38 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` (production gameplay preserved; pair-cashout is non-production only)

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
- **Evidence:** State-conditioned policies voluntarily return at materially different mean Threat levels. This remains a meaningful decision axis independent of adding content quantity.
- **Recommended Action:** Keep extraction horizon as a post-clearance progression axis, but do not encode temporary resonance coefficients into permanent progression.

## P-016 — Simple A/B/C chain-exit causality is not a cleared progression vocabulary

- **Status:** CANDIDATE_REJECTED_IN_CURRENT_FORM / BROADER_LEGIBILITY_REQUIREMENT_REMAINS
- **Severity:** 3
- **Confidence:** HIGH for rejection of the tested rule / MEDIUM for broader future vocabulary value
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** The tested `same signal = preserve / mismatch = break` rule made sacrifice more legible but slightly worsened switching outcomes across 104,736 active-chain states.
- **Recommended Action:** Do not build persistent signal affinities, collections or upgrades around this rejected rule.

## P-017 — Cap-specific progression premise superseded

- **Status:** SUPERSEDED_BY_P018
- **Severity:** 2
- **Confidence:** HIGH
- **Verification Type:** OBSERVED + SIMULATED
- **Evidence:** The pre-TQ-018 high-chain cap lead did not survive per-Run RNG isolation.
- **Recommended Action:** Do not use the old cap lead as promotion evidence.

## P-018 — Active-chain preservation cannot be subsidized by progression

- **Status:** BLOCKED_DESIGN_GATE / ACTIVE_CHAIN_SWITCH_COST_CONFIRMED
- **Severity:** 4
- **Confidence:** HIGH for short-horizon evidence / MEDIUM-HIGH for progression consequence
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** Direct common-RNG branch probes confirmed that locally attractive calm/deep choices can become inferior across the next 2–3 decisions. Removing chain loss entirely improved but did not clear the switching penalty.
- **Recommended Action:** Reject persistent chain-loss reduction, auto-match, chain insurance, resonance-only multipliers, larger continuation payouts, or upgrades whose main value is avoiding the cost of leaving resonance.

## P-019 — Build diversity must survive trajectory-level comparison

- **Status:** DESIGN_GATE / TRAJECTORY_VIABILITY_REQUIRED
- **Severity:** 4
- **Confidence:** HIGH
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** Immediate route diversity does not prove durable build diversity; accumulated state can reverse a locally attractive choice over 2–3 decisions.
- **Recommended Action:** Every progression prototype must demonstrate at least two viable multi-decision trajectories including pursuit, state sacrifice/preservation and extraction timing.

## P-020 — Generic renewal/survival is no longer the leading progression gate

- **Status:** SUPERSEDED_BY_P021 / GENERIC_CHAIN_SUBSIDY_STILL_BLOCKED
- **Severity:** 3
- **Confidence:** HIGH
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** Mismatch states already favor switching on average and disabling mismatch renewal did not close the aggregate gap.
- **Recommended Action:** Keep generic survival subsidies blocked, but do not design progression around solving mismatch renewal.

## P-021 — First matching continuation was the primary production boundary

- **Status:** CAUSAL_BOUNDARY_CONFIRMED / STRUCTURAL_ALTERNATIVE_NOW_ROBUSTNESS_SUPPORTED
- **Severity:** 4
- **Confidence:** HIGH for production defect and pair-cashout simulation; MEDIUM for production suitability
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** Production matching `chainLen=1` states were severely resonance-favored. Follow-up diagnostics separated the first-match reward from maturity carry: removing the first-match +5 closed most of the gap, and additionally preventing automatic `chainLen=2` carry nearly removed the remaining 3-decision lock-in. The later `pairCashout` structural candidate preserves the +5 reward beat but closes the pair instead of carrying maturity.
- **Recommended Action:** Treat reward-beat/state-escalation separation as a protected core design boundary if Executive promotes the candidate. Do not turn either half into a progression stat.

## P-022 — Reward beat and strategic state escalation must remain separate

- **Status:** DESIGN_CONSTRAINT_CANDIDATE / PAIR_CASHOUT_ROBUSTNESS_SUPPORTED
- **Severity:** 4
- **Confidence:** HIGH for measured separation / MEDIUM-HIGH for progression consequence
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** The first matching continuation currently bundles immediate +5 gratification with automatic future-state escalation. The structural `pairCashout` candidate preserves +5 while ending the pair, directly separating those functions.
- **Recommended Action:** If pair-cashout is promoted, do not later rejoin the two through progression such as `pair reward + chain carry`, `match bonus + maturity level`, affinity-driven repeat matching, or permanent pair multipliers. Progression should change what the player does after a completed pair, not make completed pairs snowball again.

## P-023 — Pair-cashout survives held-out trajectory robustness and creates a safer progression vocabulary

- **Status:** SUPPORTED_DIRECTION / AWAITING_EXECUTIVE_PROMOTION_AND_HUMAN_VERIFICATION
- **Severity:** 4
- **Confidence:** HIGH for simulated robustness; MEDIUM for long-term progression suitability
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** Latest main `efe5292c...` added a held-out cohort and Regression run `32952608078` completed successfully. On held-out seeds 505/606/707/808, `pairCashout` future-aware averages **11.202675 bank/Run** versus fixed resonance **11.145000**, so contextual play remains ahead by **+0.057675 (~+0.52%)**. Future-aware beats fixed resonance on **2/4 held-out seeds** (707, 808) and loses narrowly on 505/606; combined with the original cohort it wins **5/8 seeds**, so this is not seed-unanimous but the aggregate direction survives unseen seeds. The held-out future-aware route mix remains materially mixed at **calm 9.70% / deep 42.47% / resonance 47.83%**, while fixed calm/deep remain lower at **10.8314 / 8.8785**. Production remains fixed-resonance dominated, so this is candidate evidence only. No HUMAN_VERIFIED evidence exists.
- **Recommended Action:** Progression should not implement anything before Executive decides whether pair-cashout becomes a Controlled Playable. If promoted, use the pair completion as a possible future decision junction: what to pursue next, whether to voluntarily transform/sacrifice accumulated state, and when to extract. Do not restore long-chain snowballing, signal affinity, pair frequency boosts, or flat power. Human verification must first establish that pair completion feels like a completed reward beat rather than arbitrary chain destruction.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS_WITH_STRATEGIC_WATCH | MEDIUM-HIGH | OBSERVED + SIMULATED | Depth/threat/haul/energy change within a run; pair-cashout now has held-out strategic support but is not production. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Banked salvage has no marginal consequence; six discoveries have no durable payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| persistent_specialization_clearance | BLOCKED_PENDING_EXECUTIVE_PAIR_CASHOUT_DECISION | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Pair-cashout survives held-out aggregate testing, but it is not production-cleared or human-verified. |
| trajectory_viability_requirement | REQUIRED | HIGH | SIMULATED + DESIGN ANALYSIS | Future builds must remain viable across multiple decisions and extraction timing. |
| extraction_horizon_as_progression_axis | SUPPORTED_DIRECTION | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Extraction timing remains a differentiated decision axis. |
| pair_completion_as_progression_vocabulary | SUPPORTED_DIRECTION_PENDING_HUMAN | MEDIUM-HIGH | SIMULATED + DESIGN ANALYSIS | Pair-cashout preserves a reward beat while removing automatic maturity snowball; held-out aggregate remains mixed-policy positive. |
| chain_survival_power_as_progression_axis | BLOCKED | HIGH | SIMULATED + DESIGN ANALYSIS | Survival subsidies do not solve the core and risk restoring solved routines. |
| signal_affinity_as_progression_axis | BLOCKED | HIGH | SIMULATED + DESIGN ANALYSIS | Signal-linked preservation rule was rejected; affinity would reopen matching lock-in. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no deliberate targeting exists. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; identities/meaning have no durable presentation. |
| narrative_revelation_structure | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Six discovery identities have no prerequisites, causality, or escalation. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the cumulative total. |
| reward_semantics | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Lifetime cumulative recovery should not silently become spendable balance. |
| replay_depth | WARNING_WITH_SUPPORTED_CANDIDATE | MEDIUM-HIGH | SIMULATED | Pair-cashout survives held-out aggregate strategy testing, but human replay desire is unverified and long-term progression is still absent. |

## Executive handoff

`HUMAN_CANDIDATE_01` and production gameplay remain unchanged in this Progression pass.

1. The held-out pair-cashout result is a genuine update: aggregate contextual advantage survives unseen seeds (**+0.057675 bank/Run, ~+0.52%**) with a mixed route profile, though only 2/4 held-out seeds individually favor future-aware and 5/8 seeds favor it across both cohorts.
2. Progression does **not** interpret this as production clearance or HUMAN_VERIFIED fun. Executive should decide Controlled Playable promotion.
3. If promoted, protect the separation between immediate pair reward and persistent strategic state. Do not reintroduce long-chain carry through meta upgrades.
4. Keep permanent route affinity, signal affinity, match-frequency boosts, chain insurance, break-rate reduction, resonance multipliers, pair multipliers and flat stat power blocked.
5. Extraction horizon remains the strongest observed long-term decision axis that is not itself the balance defect.
6. Pair completion creates a more promising future progression junction than long-chain growth: after a completed pair, commitments could alter pursuit, voluntary transform/sacrifice, or extraction intent without increasing content volume.
7. P-019 remains mandatory: any eventual two-build prototype must produce two defensible multi-decision trajectories, not merely different first taps.
8. Mid/long-term progression remains FAIL. Do not let a strategically healthier core candidate hide the fact that bank, discoveries, collection agency and authored revelation are still shallow.
9. Do not add discovery quantity. If discovery becomes a pillar, require pursuit agency and a small causal revelation structure.
10. Human validation for pair-cashout should precede progression implementation; specifically, verify that pair ending reads as completion/reward rather than involuntary loss.

Queued post-clearance design question:

**If pair completion becomes the core cadence, can two tiny mutually exclusive commitments change what the player does immediately after completing a pair—and when they extract—without increasing pair power, preserving chain maturity, adding route lock-in, or adding content volume?**