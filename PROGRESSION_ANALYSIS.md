# Progression & Content Analysis

Updated: 2026-08-26 16:36 JST
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

## P-016 — Simple A/B/C chain-exit causality is not a cleared progression vocabulary

- **Status:** CANDIDATE_REJECTED_IN_CURRENT_FORM / BROADER_LEGIBILITY_REQUIREMENT_REMAINS
- **Severity:** 3
- **Confidence:** HIGH for rejection of the tested rule / MEDIUM for broader future vocabulary value
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** The tested `same signal = preserve / mismatch = break` rule made the active-chain sacrifice more legible but slightly worsened switching outcomes versus production. Across **104,736** active-chain states, switch-win rate fell **0.2425pt** at 2 decisions and **0.2406pt** at 3 decisions; mean `switch - resonance` secured bank worsened by **0.09143** and **0.10800** respectively.
- **Recommended Action:** Do not build persistent signal affinities, signal collections or permanent A/B/C upgrades around this rejected rule. Preserve only the higher-level requirement that future chain sacrifice/preservation must become predictable before tapping if that structure survives core clearance.

## P-017 — Cap-specific progression premise superseded

- **Status:** SUPERSEDED_BY_P018
- **Severity:** 2
- **Confidence:** HIGH
- **Verification Type:** OBSERVED + SIMULATED
- **Evidence:** The pre-TQ-018 `+5` cap lead did not survive per-Run RNG isolation. Corrected probes kept fixed resonance ahead.
- **Recommended Action:** Do not use EX-017's old +0.70% lead as promotion evidence. High-chain reward growth remains unsafe as a progression shortcut while active-chain switching is unresolved.

## P-018 — Active-chain preservation cannot be subsidized by progression

- **Status:** BLOCKED_DESIGN_GATE / ACTIVE_CHAIN_SWITCH_COST_CONFIRMED
- **Severity:** 4
- **Confidence:** HIGH for short-horizon switching-cost evidence / MEDIUM-HIGH for progression-design consequence
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** GS-016 sampled **105,401** active-chain states: calm/deep is locally better by one-step secured-bank EV in **52.76%**, but a minimal next-resonance option term flips **21.30%** of those states back toward resonance. EX-019 directly branched **104,736** active-chain states under shared exogenous RNG. Calm/deep is locally ahead in **52.52%**, yet at 2 decisions switch wins **28.84%** vs resonance **37.06%** with mean `switch - resonance = -0.9701`; at 3 decisions switch wins **26.17%** vs resonance **35.56%** with mean **-1.2477**. EX-020 then removed calm/deep chain loss entirely: the mean switch penalty improved by roughly **0.2791** at 2 decisions and **0.2907** at 3 decisions, but remained materially negative.
- **Recommended Action:** Until the core creates genuinely viable chain-sacrifice states, reject persistent chain-loss reduction, auto-match, chain insurance, resonance-only multipliers, larger continuation payouts, or any upgrade whose main value is avoiding the cost of leaving resonance.

## P-019 — Build diversity must survive trajectory-level comparison

- **Status:** BLOCKED_DESIGN_GATE / TRAJECTORY_VIABILITY_REQUIRED
- **Severity:** 4
- **Confidence:** HIGH for local-vs-short-horizon divergence / MEDIUM-HIGH for progression-design consequence
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** EX-019 shows that a route can look better on the current decision yet become inferior across the next 2–3 decisions because accumulated chain state changes the trajectory. Therefore immediate route diversity does not prove durable build diversity.
- **Recommended Action:** After strategic clearance, every progression prototype must demonstrate at least two viable multi-decision trajectories including pursuit, chain sacrifice/preservation and extraction timing. Reject builds that differ only on the first screen or one-step EV but converge to one solved routine.

## P-020 — Generic renewal/survival is no longer the leading progression gate

- **Status:** SUPERSEDED_BY_P021 / GENERIC_CHAIN_SUBSIDY_STILL_BLOCKED
- **Severity:** 3
- **Confidence:** HIGH for causal reprioritization
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** EX-020 showed chain loss explains only a minority of switching penalty. GS-017 then directly tested mismatch renewal and found it is not the dominant remaining source: in **69,669** mismatch states, calm/deep switching is already favored on average (`switch - resonance = +0.58843` at 2 decisions and `+0.26474` at 3). Disabling mismatch renewal did not improve the aggregate switching gap. Therefore the earlier working assumption that guaranteed renewal/restart was the leading unresolved structure is withdrawn.
- **Recommended Action:** Keep chain insurance, break resistance, auto-match and generic survival subsidies blocked, but stop designing progression around solving mismatch renewal. The active core gate has moved to matching continuation.

## P-021 — First matching continuation must clear before signal-linked progression exists

- **Status:** BLOCKED_DESIGN_GATE / FIRST_MATCH_CONTINUATION_PRIMARY_BOUNDARY
- **Severity:** 4
- **Confidence:** HIGH for measured concentration / MEDIUM-HIGH for progression-design consequence
- **Verification Type:** OBSERVED + SIMULATED + DESIGN ANALYSIS
- **Evidence:** EX-021 split **35,067** matching-resonance active-chain states by maturity. `chainLen=1` accounts for **26,470 (75.49%)** of matching states and is already strongly locked toward resonance: at 2 decisions switch wins **8.90%** vs resonance **59.36%**, with mean `switch - resonance = -3.67102`; at 3 decisions the mean gap is **-3.89082**. Mature `chainLen>=2` states are even more resonance-favored (`-5.28405 / -5.36641`), but they are an amplifier rather than the root because the very first matching continuation is already severely biased. These are `SIMULATED`, not human-play results.
- **Recommended Action:** Do not create permanent signal affinity, match-frequency boosts, first-match bonuses, resonance-specific multipliers, chain-start upgrades or progression that rewards repeatedly forcing the same matching continuation. Wait for Executive's diagnostic that neutralizes only the first matching continuation bonus. If that bonus is causal, treat its cleared production value as a protected core boundary rather than a progression stat. If a large gap remains, progression must wait for the next state-value diagnosis instead of compensating with meta power.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS_WITH_STRATEGIC_WATCH | MEDIUM-HIGH | OBSERVED + SIMULATED | Depth/threat/haul/energy change within a run; extraction behavior differs by strategy. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Banked salvage has no marginal consequence; six discoveries have no durable payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| persistent_specialization_clearance | BLOCKED_FIRST_MATCH_GATE | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Mismatch switching is already viable; the first matching continuation is the primary unresolved resonance boundary. |
| trajectory_viability_requirement | REQUIRED | HIGH | SIMULATED + DESIGN ANALYSIS | Local calm/deep advantage can reverse over 2–3 decisions; future builds must be validated as trajectories. |
| extraction_horizon_as_progression_axis | SUPPORTED_DIRECTION | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | State-conditioned policies voluntarily return at materially different mean Threat levels (17.01–28.69). |
| signal_state_as_progression_vocabulary | BLOCKED_FIRST_MATCH_GATE | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | The rejected preserve/break mapping is not a foundation, and matching continuation is currently too dominant to safely attach persistent signal specialization. |
| chain_survival_power_as_progression_axis | BLOCKED | HIGH | SIMULATED + DESIGN ANALYSIS | Removing chain loss entirely closes only ~23–29% of the mean switching penalty. |
| mismatch_renewal_as_progression_axis | REJECTED_AS_PRIMARY | HIGH | SIMULATED + DESIGN ANALYSIS | Mismatch states already favor switching on average; disabling renewal did not close the aggregate gap. |
| first_match_continuation_as_progression_axis | BLOCKED_CORE_BOUNDARY | HIGH | SIMULATED + DESIGN ANALYSIS | `chainLen=1` matching states already show roughly -3.67/-3.89 secured-bank switching gaps over 2–3 decisions. |
| progression_vocabulary_direction | DESIGN_GATE | MEDIUM-HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Prefer state-oriented commitments combining pursuit, voluntary sacrifice/transform and extraction horizon; do not bind permanent progression to route names, signal matching, or simulator-sensitive tuning before clearance. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no deliberate targeting exists. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; identities/meaning have no durable presentation. |
| narrative_revelation_structure | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Six discovery identities have no prerequisites, causality, or escalation. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the cumulative total. |
| reward_semantics | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Lifetime cumulative recovery should not silently become spendable balance. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Mismatch states show real switching potential, but matching continuation can collapse choice before mature chains and human replay desire remains unverified. |

## Executive handoff

`HUMAN_CANDIDATE_01` remains unchanged. **No gameplay change was made in this pass.**

1. Keep persistent progression blocked while Executive isolates the first matching continuation bonus at `chainLen=1`.
2. Withdraw mismatch renewal/restart as the leading progression dependency; GS-017/EX-021 show mismatch states already contain viable switching trajectories.
3. Keep permanent calm/deep/resonance affinities, signal affinity, match-frequency boosts, first-match bonuses, chain insurance, break-rate reduction, auto-match, resonance multipliers and high-chain power growth blocked.
4. Extraction horizon remains the strongest observed long-term decision axis that is not itself the current balance defect.
5. Preserve the trajectory-level viability gate: future commitments must remain defensible across several decisions and extraction timing, not only differ in immediate route choice.
6. Do not use progression to compensate for the first-match continuation imbalance. Clear the core first; then protect the cleared boundary from meta upgrades that would reopen a solved routine.
7. The durable progression direction remains voluntary sacrifice/transform versus preservation, but it should be coupled to extraction horizon or pursuit objectives rather than signal-match power.
8. Do not turn `banked` into a linear stat shop merely to create a sink.
9. Do not add discovery quantity. If discovery becomes a long-term pillar, require pursuit agency and either causal investigation or a tiny authored revelation chain first.
10. Discovery semantics still require an Executive decision: knowledge retained on contact versus cargo requiring extraction.

Queued post-clearance design question:

**Can two tiny mutually exclusive commitments create different but viable multi-decision trajectories by changing what the player gains from voluntarily transforming or abandoning accumulated state—and when they extract—without flat power, route lock-in, signal-match amplification, chain insurance or new content volume?**