# Progression & Content Analysis

Updated: 2026-08-26 05:35 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` (gameplay frozen for focused human test; strategic clearance re-opened by Executive)

## Existing findings P-001 through P-011

The prior findings remain active and unchanged in substance. Their current conclusions are preserved below in compact form so this file remains the single Progression handoff rather than spawning additional analysis files.

- **P-001 — FAIL / Severity 4 / HIGH / OBSERVED:** permanent bank/runs/discoveries record play but do not change later play. Keep persistent gameplay blocked until the frozen core passes human testing and current strategic clearance is resolved.
- **P-002 — FAIL / Severity 4 / HIGH / OBSERVED + SIMULATED:** six anomaly selections complete all six discoveries because duplicates are prevented. Do not extend runway by adding names.
- **P-003 — WARNING / Severity 3 / HIGH / OBSERVED:** discoveries persist on contact even if the same route subsequently collapses. Executive must eventually classify them as retained knowledge versus extractable cargo.
- **P-004 — WARNING / Severity 3 / HIGH / OBSERVED + SIMULATED:** within-run progression is meaningfully state-dependent; run-to-run strategic state still resets. Production anomaly bonuses at depths 1–6 are **2 / 3 / 5 / 8 / 10 / 13**.
- **P-005 — FAIL / Severity 3 / HIGH / OBSERVED:** discovered identities are not persistently inspectable; UI exposes only a count.
- **P-006 — WARNING / Severity 3 / HIGH / OBSERVED + SIMULATED:** collector behavior can raise anomaly selection from about 37.4% to 50.1% and collapse from about 53.3% to 59.7%, then that motive disappears after completion.
- **P-007 — FAIL / Severity 3 / HIGH / OBSERVED:** discovery identity is uniformly random from unseen entries and cannot be deliberately pursued through route, signal, depth, resonance, threat, or history.
- **P-008 — FAIL / Severity 3 / HIGH / OBSERVED:** additional banked salvage has no marginal meaning after extraction. Do not add a conventional stat shop merely to create a sink.
- **P-009 — DESIGN_GATE / Severity 4 / HIGH / OBSERVED + DESIGN ANALYSIS:** any post-human-test progression prototype must change decisions rather than only power, have opportunity cost, reuse existing hooks, preserve the verified core, create a next-run intention, and be testable with minimal content.
- **P-010 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** a few one-time unlocks only postpone the salvage dead end. Prefer a small finite vocabulary plus repeatable mutually exclusive commitment over endless tiers/items.
- **P-011 — DESIGN_RISK / Severity 3 / HIGH / OBSERVED + DESIGN ANALYSIS:** `banked` is currently presented as lifetime 「累計回収」, so future spending/staking cannot safely subtract from it without changing its meaning. Separate lifetime achievement from spendable/committed value only if a proven progression prototype actually needs that distinction.

## Finding P-012 — Random discovery order cannot currently carry an authored world-revelation arc

- Status: DESIGN_RISK
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + DESIGN ANALYSIS
- Evidence: Production defines six evocative discovery identities (`GLASS TIDE`, `RED STATIC`, `NULL CHOIR`, `PALE ORBIT`, `IRON BLOOM`, `LAST SIGNAL`), but `discoverMaybe()` chooses uniformly from the remaining unseen names. Depth, signal A/B/C, route tone, resonance state, threat, prior discovery sequence, and run outcome do not influence which identity is revealed. Because duplicates are prevented, every player receives a random permutation of the same six names. There is no description, relationship, prerequisite, escalation, or follow-up attached to an identity, and persistent UI currently shows only the count. Therefore the discovery layer cannot presently deliver a designed sequence such as clue → implication → revelation; even a future archive that only exposes the six names would preserve random ordering without narrative causality.
- Recommended Action: Do **not** add lore paragraphs, more relic names, or a story screen during the frozen human candidate. If the core passes and discovery is chosen as a long-term world pillar, first choose one of two small structures: (A) **pursuit-driven world knowledge**, where existing depth/signal/route states determine which clue family can be found and players can intentionally investigate it; or (B) **authored revelation chain**, where a very small prerequisite graph makes later discoveries depend on earlier evidence. Either approach should reuse existing gameplay decisions and prove that a discovery changes the player's next intention before content volume is expanded. If discovery remains merely a collectible score, do not pretend it supplies narrative progression.

### Why this is distinct from P-005/P-007

P-005 is a presentation problem: discovered identities cannot be revisited. P-007 is an agency problem: the player cannot target a missing identity. P-012 is a **sequence/meaning problem**: even if an archive and targeting were added, a uniformly random permutation of disconnected labels still would not create a world arc. For a flagship game whose long-term appeal may include “続きが気になる”, discovery needs either causal pursuit or authored revelation—not simply persistence and quantity.

## Finding P-013 — Persistent specialization is unsafe while future-aware route value is unresolved

- Status: BLOCKED_DESIGN_GATE
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED + DESIGN ANALYSIS
- Evidence: Executive Finding EX-011 re-opened strategic clearance after Systems GS-010 showed that the previous one-step adaptive benchmark underprices resonance chain carryover. Under current production rules, the one-step adaptive policy measured about **10.95 bank/run with 53.48% collapse**, while a simple continue-with-resonance policy measured about **12.13 bank/run with 46.52% collapse**; Executive independently reproduced the same fixed-policy ordering and found a short-horizon rollout improved toward the resonance result. This does not prove fixed resonance is globally optimal, but it invalidates using the current calm/deep/resonance balance as a settled foundation for persistent specialization. P-009/P-010 previously identified a small mutually exclusive protocol vocabulary as the preferred shape of future progression. If such protocols are built now around the three route identities, a resonance-favoring protocol can amplify an already superior long-horizon policy, while calm/deep protocols can become knowingly inferior trap unlocks. Conversely, deliberately weakening resonance through progression would make meta choice responsible for repairing an unresolved core balance problem.
- Recommended Action: **Do not implement or tune route-specializing protocols, permanent route affinities, route-specific unlocks, or discovery rewards that privilege calm/deep/resonance until Systems completes the future-aware equal-footing strategy comparison requested by EX-011.** Human feel testing may continue, but positive short-session replay feedback is insufficient clearance for persistent build design. If future-aware adaptation materially outperforms fixed resonance while using multiple route states, P-009 can reopen with the existing finite/protocol direction. If resonance remains materially superior, resolve the core chain reward/persistence or cross-route signal causality first; progression must not be used to hide or institutionalize the imbalance.

### Why this changes the Progression plan

Before GS-010/EX-011, the main progression risk was adding linear power or content volume on top of an otherwise healthier three-route core. The new evidence creates a stricter prerequisite: **the strategic vocabulary itself may not yet be balanced over repeated play**. Horizontal progression is only genuinely horizontal if its persistent options are viable alternatives. A finite set of mutually exclusive protocols remains a promising form, but its content cannot safely be specified from route identity until future-aware strategy clearance is restored.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS_WITH_STRATEGIC_WATCH | MEDIUM-HIGH | OBSERVED + SIMULATED | Depth/threat/haul/energy create changing state, but GS-010/EX-011 show long-horizon resonance value is not yet correctly priced by the prior adaptive benchmark. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Banked salvage has no marginal consequence; six discoveries have no durable payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| persistent_specialization_clearance | BLOCKED | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | EX-011 requires future-aware strategy comparison before route-specializing progression can be considered safe. |
| discovery_exposure | WARNING | HIGH | OBSERVED + SIMULATED | A visible anomaly is offered on about 44.9% of 3-route decisions under independent 18% rolls. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no deliberate targeting exists. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; identities/meaning have no durable presentation. |
| narrative_revelation_structure | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Six discovery identities arrive as a random permutation with no prerequisites, causality, or escalation. |
| early_collector_distortion | WARNING | HIGH | OBSERVED + SIMULATED | Collector behavior can raise anomaly selection to ≈50.1% and collapse to ≈59.7%, then that motive vanishes after completion. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the displayed cumulative total; one-time tiny unlocks alone would merely delay the same dead end. |
| progression_runway_design | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | A finite protocol set needs repeatable commitment value, not endless content tiers, if banked salvage is to retain meaning. |
| reward_semantics | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | `banked` is currently a lifetime cumulative record; future spend/commit semantics would conflict unless explicitly separated or redefined. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Short-session feel may still be strong, but durable strategic diversity is re-opened and human feel remains unverified. |

## Executive handoff

`HUMAN_CANDIDATE_01` remains unchanged. **Do not change its gameplay from Progression.**

1. Respect EX-011: future-aware core strategy clearance now precedes any route-specializing persistent progression.
2. Human testing can still verify short-session hesitation, collapse feel and immediate replay desire, but must not be treated as proof of durable route/build diversity.
3. Persistent progression remains a major product problem only after the core is both human-feel viable and strategically understood well enough not to encode a false choice.
4. Do not turn `banked` into a linear stat shop; require P-009 and P-013 before any persistent protocol/loadout implementation.
5. Avoid an unlock-only dead end; if a tiny protocol set is later adopted, test repeatable mutually exclusive commitment before adding tiers/items.
6. Resolve P-011 before salvage spending/staking: preserve lifetime recovery separately or deliberately redefine the current cumulative semantics with migration.
7. If discovery becomes a long-term collection pillar, require pursuit agency before adding quantity.
8. If discovery is expected to create “続きが気になる”, resolve P-012 before writing lore volume: choose causal pursuit or a tiny authored revelation chain rather than a random permutation of disconnected labels.
9. Discovery semantics still need an Executive decision: knowledge retained on contact versus cargo requiring extraction.

Queued post-clearance design question:

**After future-aware Systems analysis establishes which route states are genuinely viable, can the same small set of signals, depths, route roles and anomalies support repeatable mutually exclusive intentions without turning one dominant route into the obvious permanent build?**

No gameplay change was made in this pass. The current human candidate remains comparable while strategic clearance is investigated.