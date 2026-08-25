# Progression & Content Analysis

Updated: 2026-08-26 04:39 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` (gameplay frozen for focused human test)

## Existing findings P-001 through P-011

The prior findings remain active and unchanged in substance. Their current conclusions are preserved below in compact form so this file remains the single Progression handoff rather than spawning additional analysis files.

- **P-001 — FAIL / Severity 4 / HIGH / OBSERVED:** permanent bank/runs/discoveries record play but do not change later play. Keep persistent gameplay blocked until the frozen core passes human testing.
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

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS | HIGH | OBSERVED + SIMULATED | Depth/threat/haul/energy plus calm recovery, resonance chaining and depth-scaled anomalies create changing state; Systems found situational route jobs. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Banked salvage has no marginal consequence; six discoveries have no durable payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| discovery_exposure | WARNING | HIGH | OBSERVED + SIMULATED | A visible anomaly is offered on about 44.9% of 3-route decisions under independent 18% rolls. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no deliberate targeting exists. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; identities/meaning have no durable presentation. |
| narrative_revelation_structure | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Six discovery identities arrive as a random permutation with no prerequisites, causality, or escalation. |
| early_collector_distortion | WARNING | HIGH | OBSERVED + SIMULATED | Collector behavior can raise anomaly selection to ≈50.1% and collapse to ≈59.7%, then that motive vanishes after completion. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the displayed cumulative total; one-time tiny unlocks alone would merely delay the same dead end. |
| progression_runway_design | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | A finite protocol set needs repeatable commitment value, not endless content tiers, if banked salvage is to retain meaning. |
| reward_semantics | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | `banked` is currently a lifetime cumulative record; future spend/commit semantics would conflict unless explicitly separated or redefined. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Single-run decision variety is structurally healthier, but there is no second-timescale strategy and human feel remains unverified. |

## Executive handoff

`HUMAN_CANDIDATE_01` remains frozen by Executive. **Do not change its gameplay from Progression.**

1. Preserve the frozen single-run economy and human-test package.
2. Persistent progression remains the next major product problem only if the core passes `HUMAN_VERIFIED` feel testing.
3. Do not turn `banked` into a linear stat shop; require P-009 before any persistent protocol/loadout implementation.
4. Avoid an unlock-only dead end; if a tiny protocol set is adopted, test repeatable mutually exclusive commitment before adding tiers/items.
5. Resolve P-011 before salvage spending/staking: preserve lifetime recovery separately or deliberately redefine the current cumulative semantics with migration.
6. If discovery becomes a long-term collection pillar, require pursuit agency before adding quantity.
7. If discovery is expected to create “続きが気になる”, resolve P-012 before writing lore volume: choose causal pursuit or a tiny authored revelation chain rather than a random permutation of disconnected labels.
8. Discovery semantics still need an Executive decision: knowledge retained on contact versus cargo requiring extraction.

Queued post-pass design question:

**Can the same small set of existing signals, depths, route roles and anomalies support both a repeatable protocol intention and a discoverable world mystery, so that progression changes how the player investigates the signal sea rather than adding a separate upgrade game?**

No gameplay change was made in this pass. The frozen human candidate remains intact.