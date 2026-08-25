# Progression & Content Analysis

Updated: 2026-08-26 08:35 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` (gameplay preserved; strategic clearance blocked by EX-014)

## Existing findings P-001 through P-014

Prior findings remain active except where EX-014 changes the strength of their evidence. Key conclusions:

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
- **P-013 — BLOCKED_DESIGN_GATE / Severity 4 / HIGH / OBSERVED + SIMULATED + DESIGN ANALYSIS:** route-specializing progression is unsafe while route value and extraction timing remain jointly unresolved.
- **P-014 — DESIGN_DIRECTION_GATE / Severity 4 / MEDIUM-HIGH / OBSERVED + SIMULATED + DESIGN ANALYSIS:** if strategic clearance is later restored, prefer state-oriented commitments over permanent named-route affinities. EX-014 removes the earlier numerical support for the `*1` candidate but strengthens the architectural reason not to bind progression to current route coefficients.

## Finding P-015 — Extraction timing is itself a progression axis and must be resolved before designing persistent commitments

- Status: BLOCKED_DESIGN_GATE
- Severity(1-5): 4
- Confidence: HIGH for the structural dependency; MEDIUM for eventual progression design
- Verification Type: OBSERVED + SIMULATED + DESIGN ANALYSIS
- Evidence: EX-014 reproduces the strategy benchmark in CI and contradicts the earlier exploratory clearance direction. More importantly for progression, the benchmark currently fixes extraction to a common rule (`return only when threat >= 55`) even though ECHO DRIFT's core loop includes a separate continue-versus-return decision. Calm primarily purchases survival, so a fixed extraction threshold can materially change the apparent value of every route. This means a future persistent commitment such as “preserve chains”, “push high Threat”, “secure anomalies”, or any route affinity cannot yet be evaluated only by route-selection mix: its value may come from changing **when the player chooses to bank a run**. A meta choice that appears diverse under one extraction rule could collapse to one dominant commitment once extraction is optimized, or vice versa.
- Recommended Action: Keep persistent progression unimplemented until the deterministic benchmark treats extraction timing as a first-class decision. When Systems/Executive clear the joint route+extraction model, evaluate the first tiny progression prototype against two requirements simultaneously: (1) it changes route decisions in some states, and (2) it changes or preserves a meaningful extraction decision rather than merely increasing expected bank. Prefer commitments that create different risk horizons—e.g. a reason to cash out earlier versus deliberately stay exposed—without directly granting flat power. Reject any candidate whose optimal behavior is simply “always take the same route and return at the same threshold.”

### Why this advances P-013/P-014

P-013 blocked route specialization because route values were unresolved. P-014 proposed durable state-oriented vocabulary. EX-014 now shows that **return timing is one of those durable states, not a secondary accounting step**. Therefore the eventual progression prototype should be judged as a joint route/extraction behavior modifier. This is a stronger and more testable design gate than asking whether three route percentages look balanced.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS_WITH_STRATEGIC_WATCH | MEDIUM-HIGH | OBSERVED + SIMULATED | Depth/threat/haul/energy change within a run, but route value cannot yet be separated from extraction timing. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Banked salvage has no marginal consequence; six discoveries have no durable payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| persistent_specialization_clearance | BLOCKED | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | EX-014 requires joint route+extraction clearance before progression. |
| progression_vocabulary_direction | DESIGN_GATE | MEDIUM-HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Prefer state-oriented commitments, now explicitly including extraction horizon. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no deliberate targeting exists. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; identities/meaning have no durable presentation. |
| narrative_revelation_structure | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Six discovery identities have no prerequisites, causality, or escalation. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the cumulative total. |
| reward_semantics | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Lifetime cumulative recovery should not silently become spendable balance. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Short-session feel may still be strong, but durable strategy remains blocked and human feel remains unverified. |

## Executive handoff

`HUMAN_CANDIDATE_01` remains unchanged. **No gameplay change was made in this pass.**

1. Respect EX-014: joint route + extraction strategy clearance precedes persistent progression.
2. Do not use the earlier `*1` exploratory numbers as progression evidence; the reproducible benchmark supersedes them.
3. Keep calm/deep/resonance permanent affinities blocked.
4. After joint clearance, judge any tiny state-oriented commitment by whether it produces a different route **and/or extraction horizon**, not by route-share symmetry.
5. Do not turn `banked` into a linear stat shop; resolve lifetime-versus-spendable semantics only when a proven progression prototype requires it.
6. Do not add discovery quantity. If discovery becomes a long-term pillar, require pursuit agency and either causal investigation or a tiny authored revelation chain first.
7. Discovery semantics still require an Executive decision: knowledge retained on contact versus cargo requiring extraction.

Queued post-clearance design question:

**Can a tiny mutually exclusive commitment make the player enter the next run with a different risk horizon—changing what they pursue and when they are willing to return—without making one route or one extraction threshold permanently correct?**
