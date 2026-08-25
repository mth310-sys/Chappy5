# Progression & Content Analysis

Updated: 2026-08-26 06:35 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` (gameplay preserved; strategic clearance blocked by EX-012)

## Existing findings P-001 through P-013

Prior findings remain active. Key current conclusions:

- **P-001 — FAIL / Severity 4 / HIGH / OBSERVED:** persistent bank/runs/discoveries record play but do not change later play.
- **P-002 — FAIL / Severity 4 / HIGH / OBSERVED + SIMULATED:** six anomaly selections complete all six discoveries because duplicates are prevented. Do not extend runway by adding names.
- **P-003 — WARNING / Severity 3 / HIGH / OBSERVED:** discoveries persist on contact even if that route collapses; eventual semantics must be retained knowledge versus extractable cargo.
- **P-004 — WARNING / Severity 3 / HIGH / OBSERVED + SIMULATED:** within-run progression is state-dependent; run-to-run strategic state resets. Production anomaly bonuses at depths 1–6 are **2 / 3 / 5 / 8 / 10 / 13**.
- **P-005 — FAIL / Severity 3 / HIGH / OBSERVED:** discovered identities are not persistently inspectable; UI exposes only a count.
- **P-006 — WARNING / Severity 3 / HIGH / OBSERVED + SIMULATED:** collector behavior can raise anomaly selection from about 37.4% to 50.1% and collapse from about 53.3% to 59.7%, then that motive disappears after completion.
- **P-007 — FAIL / Severity 3 / HIGH / OBSERVED:** discovery identity is random from unseen entries and cannot be deliberately pursued through route, signal, depth, resonance, threat, or history.
- **P-008 — FAIL / Severity 3 / HIGH / OBSERVED:** additional banked salvage has no marginal meaning after extraction. Do not add a conventional stat shop merely to create a sink.
- **P-009 — DESIGN_GATE / Severity 4 / HIGH / OBSERVED + DESIGN ANALYSIS:** any progression prototype must change decisions rather than only power, have opportunity cost, reuse existing hooks, preserve the verified core, create a next-run intention, and be testable with minimal content.
- **P-010 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** a few one-time unlocks only postpone the salvage dead end. Prefer a small finite vocabulary plus repeatable mutually exclusive commitment over endless tiers/items.
- **P-011 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** `banked` is presented as lifetime 「累計回収」; future spending/staking cannot safely subtract from it without changing its meaning.
- **P-012 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** six disconnected discoveries arrive as a random permutation, so they cannot currently carry an authored clue→revelation arc.
- **P-013 — BLOCKED_DESIGN_GATE / Severity 4 / HIGH / OBSERVED + SIMULATED + DESIGN ANALYSIS:** route-specializing progression is unsafe while future-aware route value remains unresolved.

## Finding P-014 — The first viable progression vocabulary should be state-oriented, not route-oriented

- Status: DESIGN_DIRECTION_GATE
- Severity(1-5): 4
- Confidence: MEDIUM-HIGH
- Verification Type: OBSERVED + SIMULATED + DESIGN ANALYSIS
- Evidence: EX-012 strengthens P-013 rather than clearing it. Production equations give established resonance a structural efficiency advantage, and fixed-resonance simulations remain ahead of the old one-step adaptive policy. However, Executive's exploratory slower resonance-growth candidate (`1 + chainLen` continuation rather than `1 + chainLen*2`) produced a more mixed future-aware policy: roughly 40% resonance, 36–38% deep and 22–23% calm, with sampled mixed-policy bank/run above sampled fixed resonance. This candidate is explicitly SIMULATED and not approved for production. The important Progression implication is not the exact numbers; it is that route identity is currently a moving balance target. A persistent unlock labelled “resonance build”, “deep build” or “calm build” would couple long-term progression directly to whichever route coefficient happens to win the next balance pass. That makes progression brittle and risks converting ordinary tuning changes into invalidating players' permanent choices.
- Recommended Action: Keep all route-specializing persistent progression blocked. If Systems later restores strategic clearance, the **first** progression prototype should prefer existing *state questions* that can remain meaningful across route tuning—e.g. how a run treats high Threat, whether the player commits to preserving a signal chain versus cashing out, or whether an anomaly is pursued versus safely extracted—rather than permanent bonuses to a named route. Use at most a tiny mutually exclusive set and test whether each option changes the player's next-run intention without making one route numerically mandatory. Only after that survives strategy simulation and human play should route-flavored progression be reconsidered.

### Why this is new beyond P-013

P-013 says “do not build route specialization until the core is cleared.” P-014 identifies the safer **shape after clearance**: progression should attach to durable decision states, not directly to a route label whose long-horizon value is still sensitive to reward-slope tuning. This reduces the chance that future balance work invalidates permanent progression and gives the game a better path to replay depth without content inflation.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS_WITH_STRATEGIC_WATCH | MEDIUM-HIGH | OBSERVED + SIMULATED | Depth/threat/haul/energy change within a run, but long-horizon resonance pressure remains unresolved. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Banked salvage has no marginal consequence; six discoveries have no durable payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| persistent_specialization_clearance | BLOCKED | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | EX-012 keeps route specialization blocked. |
| progression_vocabulary_direction | DESIGN_GATE | MEDIUM-HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Prefer durable state-oriented commitments over named-route affinities after clearance. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no deliberate targeting exists. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; identities/meaning have no durable presentation. |
| narrative_revelation_structure | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Six discovery identities have no prerequisites, causality, or escalation. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the cumulative total. |
| reward_semantics | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Lifetime cumulative recovery should not silently become spendable balance. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Short-session feel may still be strong, but durable strategy remains strategically blocked and human feel remains unverified. |

## Executive handoff

`HUMAN_CANDIDATE_01` remains unchanged. **No gameplay change was made in this pass.**

1. Respect EX-012: future-aware core strategy clearance precedes persistent progression.
2. Do not encode calm/deep/resonance as permanent affinities while resonance reward slope is still an active balance lever.
3. If Systems validates a narrow anti-dominance intervention, reopen P-009 using a tiny **state-oriented** commitment vocabulary before considering route-branded builds.
4. Human testing may verify short-session hesitation, collapse feel and immediate replay desire, but positive short-session feedback is not proof of durable build diversity.
5. Do not turn `banked` into a linear stat shop; resolve lifetime-versus-spendable semantics only when a proven progression prototype actually requires it.
6. Do not add discovery quantity. If discovery becomes a long-term pillar, require pursuit agency and either causal investigation or a tiny authored revelation chain first.
7. Discovery semantics still require an Executive decision: knowledge retained on contact versus cargo requiring extraction.

Queued post-clearance design question:

**Can a tiny mutually exclusive set of state-oriented commitments make the player enter the next run with a different intention while remaining useful even if calm/deep/resonance coefficients are retuned?**
