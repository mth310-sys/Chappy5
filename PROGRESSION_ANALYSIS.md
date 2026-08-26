# Progression & Content Analysis

Updated: 2026-08-26 09:35 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` (gameplay preserved; strategic clearance blocked by EX-015)

## Existing findings P-001 through P-014

Prior findings remain active except where EX-015 changes the strength of their evidence. Key conclusions:

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
- **P-014 — DESIGN_DIRECTION_GATE / Severity 4 / MEDIUM-HIGH / OBSERVED + SIMULATED + DESIGN ANALYSIS:** if strategic clearance is later restored, prefer state-oriented commitments over permanent named-route affinities. EX-015 strengthens this direction because different route policies now demonstrably produce different extraction horizons.

## Finding P-015 — Extraction horizon is a viable progression dimension, but persistent commitments remain blocked by route dominance

- Status: BLOCKED_BY_STRATEGIC_CLEARANCE
- Severity(1-5): 4
- Confidence: HIGH for extraction-horizon differentiation; MEDIUM for eventual progression design
- Verification Type: OBSERVED + SIMULATED + DESIGN ANALYSIS
- Evidence: EX-015 resolves the main extraction-policy confound identified in EX-014 by binding a state-conditioned extraction decision to the route actually chosen by each policy. In the parity-guarded deterministic benchmark, mean voluntary return Threat is materially different by production policy: fixed calm **17.01**, fixed resonance **22.23**, fixed deep **26.95**, future-aware **27.44**, and one-step **28.69**. This is important progression evidence: the existing core can already support different **risk horizons** without adding content or a meta system. Therefore a future persistent commitment does not need to manufacture diversity solely by changing route percentages; it can meaningfully alter what states a player is willing to remain exposed to and when they secure a run. However, production fixed resonance still leads the encoded future-aware mixed policy by about **0.149 bank/run (~1.24%)**, while the reduced-compounding `*1` candidate shifts the best fixed route to calm. Persistent commitments built now could amplify whichever fixed route later proves dominant and turn a narrow balance issue into a durable meta trap.
- Recommended Action: Keep persistent progression unimplemented until Executive clears route-value dominance under the state-conditioned benchmark. Once cleared, use the observed extraction-horizon differentiation as a hard design criterion for the first tiny progression prototype: mutually exclusive commitments should create distinct next-run intentions by changing pursuit and/or cash-out behavior, not merely grant flat expected-value power. Require at least two viable commitments whose optimal voluntary-return distributions are meaningfully different while neither collapses to a permanently correct named route. Preserve the current cumulative `banked` semantics until such a prototype proves that a separate spendable/staked resource is actually needed.

### What EX-015 changes for progression

The previous P-015 treated extraction timing mainly as an unresolved dependency. EX-015 now provides positive evidence that it is also a **usable source of behavioral diversity**: different policies naturally cash out at different risk levels. This makes the state-oriented direction in P-014 more concrete and reduces the need to invent extra enemies, items, stages, or route-specific upgrade trees merely to create build identity.

The remaining blocker is narrower: route-value dominance itself. Progression should not compensate for or conceal that balance problem. Once Systems/Executive clear it, the first meta prototype can be judged against an observed core behavior rather than a speculative progression taxonomy.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS_WITH_STRATEGIC_WATCH | MEDIUM-HIGH | OBSERVED + SIMULATED | Depth/threat/haul/energy change within a run; extraction behavior now differs by strategy. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Banked salvage has no marginal consequence; six discoveries have no durable payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| persistent_specialization_clearance | BLOCKED | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Extraction confound is materially reduced, but EX-015 still has fixed-route dominance. |
| extraction_horizon_as_progression_axis | SUPPORTED_DIRECTION | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | State-conditioned policies voluntarily return at materially different mean Threat levels (17.01–28.69). |
| progression_vocabulary_direction | DESIGN_GATE | MEDIUM-HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Prefer state-oriented commitments including pursuit and extraction horizon. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no deliberate targeting exists. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; identities/meaning have no durable presentation. |
| narrative_revelation_structure | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Six discovery identities have no prerequisites, causality, or escalation. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the cumulative total. |
| reward_semantics | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Lifetime cumulative recovery should not silently become spendable balance. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Core supports distinct risk horizons, but durable strategy is absent and human replay desire remains unverified. |

## Executive handoff

`HUMAN_CANDIDATE_01` remains unchanged. **No gameplay change was made in this pass.**

1. Respect EX-015: route-value dominance under state-conditioned extraction must clear before persistent progression.
2. Treat distinct extraction horizons as positive evidence for a future state-oriented meta layer, not as permission to implement it yet.
3. Keep calm/deep/resonance permanent affinities blocked; neither production `*2` nor candidate `*1` is strategically cleared.
4. After clearance, reject progression candidates that only raise expected bank or simply lock the player into one named route.
5. Prefer a tiny mutually exclusive prototype that creates different pursuit/cash-out intentions using existing Threat, chain, anomaly, haul, and extraction hooks.
6. Do not turn `banked` into a linear stat shop; resolve lifetime-versus-spendable semantics only when a proven progression prototype requires it.
7. Do not add discovery quantity. If discovery becomes a long-term pillar, require pursuit agency and either causal investigation or a tiny authored revelation chain first.
8. Discovery semantics still require an Executive decision: knowledge retained on contact versus cargo requiring extraction.

Queued post-clearance design question:

**Can two tiny mutually exclusive commitments produce recognizably different risk horizons and pursuit priorities—without flat power, route lock-in, or new content volume—while both remain strategically viable?**
