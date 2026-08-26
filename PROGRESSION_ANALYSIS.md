# Progression & Content Analysis

Updated: 2026-08-26 11:37 JST
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

## Finding P-015 — Extraction horizon remains a viable progression dimension, but prior slope-window evidence is withdrawn

- Status: BLOCKED_BY_STRATEGIC_CLEARANCE
- Severity(1-5): 4
- Confidence: HIGH for extraction-horizon differentiation; MEDIUM for eventual progression design
- Verification Type: OBSERVED + SIMULATED + DESIGN ANALYSIS
- Evidence: State-conditioned extraction remains positive progression evidence: production policies voluntarily return at materially different mean Threat levels (fixed calm **17.01**, fixed resonance **22.23**, fixed deep **26.95**, future-aware **27.44**, one-step **28.69**). However, the earlier slope-1.25 mixed-policy lead is no longer valid progression evidence. Technical found a fixed route-order tie bias in the strategy harness; after neutral seeded route ordering, Systems GS-014 found fixed resonance still leads at slope 1.25 (**11.0568** vs future-aware **11.036875**), while slope 1 eventually moves the fixed optimum to calm. Systems therefore rejected resonance-slope-only tuning as a robust clearance path. Executive EX-016 then tested a structural candidate at production slope 2: replacing hidden non-resonance 50% chain loss with visible-signal causality (same A/B/C preserves, different A/B/C breaks), while preserving common RNG consumption. Under corrected CI-verified comparison, fixed resonance remains **12.106575 bank/Run**, but the best tested contextual chain-aware policy rises to **12.029350**, leaving about **0.64%** gap. These are SIMULATED outcomes, not human-play evidence.
- Recommended Action: Keep persistent progression unimplemented. Preserve extraction horizon as the first post-clearance progression axis, but remove the old assumption that a global resonance coefficient can create a stable mixed-strategy foundation. Wait for Executive/Systems to clear a structural core rule. The first tiny meta prototype must create different pursuit/cash-out intentions while remaining viable under the cleared production rules; do not encode a temporary tuning coefficient into permanent progression.

### What the corrected strategic evidence changes for progression

The corrected benchmark invalidates the previous idea that a narrow slope window was enough to unlock progression design. That is useful: permanent progression should not be built on a simulator-sensitive coefficient crossing.

The stronger evidence is structural. Extraction behavior already differs by strategy, and EX-016 shows that making visible signal state causally relevant can improve contextual play without globally weakening early resonance rewards. Progression should therefore continue to target stable state variables—Threat exposure, extraction horizon, chain preservation, anomaly pursuit, haul at risk, and potentially signal commitments—rather than named-route EV or a resonance coefficient.

## Finding P-016 — Visible signal causality could become a compact progression vocabulary without content inflation

- Status: DESIGN_DIRECTION_CANDIDATE / NOT_CLEARED
- Severity(1-5): 3
- Confidence: MEDIUM-HIGH
- Verification Type: OBSERVED + SIMULATED + DESIGN ANALYSIS
- Evidence: A/B/C already exists on every route, so no new enemy/item/stage vocabulary is required. In production the letters are mechanically inert for calm/deep and chain survival is a hidden 50% roll. EX-016's non-production candidate makes those existing signals causal: same signal preserves the active chain and a different signal breaks it. With common RNG preserved, contextual policies improve while fixed-route values remain unchanged; chain-aware reaches **12.029350 bank/Run** versus production fixed resonance **12.106575**. The candidate is not strategically cleared and has no HUMAN_VERIFIED evidence. If Executive later clears this structure, signal state becomes a reusable decision hook that can support small mutually exclusive commitments without permanent calm/deep/resonance affinity.
- Recommended Action: Do not implement meta progression yet. If visible-signal causality reaches production clearance, evaluate it as part of the first two-choice progression prototype: commitments may alter how the player values preserving, converting, or abandoning an existing signal chain, but must not simply add flat chain power or force one route. Require both commitments to change extraction horizon or pursuit priority as well as signal handling. Reject any version that only makes one letter permanently superior or adds collectible signal variants as quantity padding.

### Why this matters for game lifespan

A compact long-term system needs a small vocabulary that can produce many meaningful situations. Threat, haul, chain and A/B/C already coexist inside each run. If signal becomes genuinely causal, a future persistent commitment can change how the same three route offers are read without needing dozens of items or stages. That is a better longevity direction than adding content volume, but it remains contingent on core strategic clearance and later human confirmation that the signal tradeoff is understandable and enjoyable.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS_WITH_STRATEGIC_WATCH | MEDIUM-HIGH | OBSERVED + SIMULATED | Depth/threat/haul/energy change within a run; extraction behavior differs by strategy. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Banked salvage has no marginal consequence; six discoveries have no durable payoff. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| persistent_specialization_clearance | BLOCKED_STRUCTURAL_TESTING | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Corrected benchmark rejects slope-only clearance; EX-016 visible-signal structure narrows fixed-resonance gap but does not clear it. |
| extraction_horizon_as_progression_axis | SUPPORTED_DIRECTION | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | State-conditioned policies voluntarily return at materially different mean Threat levels (17.01–28.69). |
| signal_state_as_progression_vocabulary | CANDIDATE_NOT_CLEARED | MEDIUM-HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Existing A/B/C could become causal reusable state without adding content volume; production still uses hidden 50% non-resonance chain loss. |
| progression_vocabulary_direction | DESIGN_GATE | MEDIUM-HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Prefer state-oriented commitments combining pursuit, extraction horizon and chain/signal handling; do not bind permanent progression to route names or resonance tuning. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no deliberate targeting exists. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; identities/meaning have no durable presentation. |
| narrative_revelation_structure | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Six discovery identities have no prerequisites, causality, or escalation. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the cumulative total. |
| reward_semantics | DESIGN_RISK | HIGH | OBSERVED + DESIGN ANALYSIS | Lifetime cumulative recovery should not silently become spendable balance. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Core supports distinct risk horizons and a promising structural signal candidate, but durable strategy and human replay desire remain unverified. |

## Executive handoff

`HUMAN_CANDIDATE_01` remains unchanged. **No gameplay change was made in this pass.**

1. Withdraw the prior slope-1.25 mixed-window claim from progression planning; corrected neutral ordering removed that clearance evidence.
2. Keep persistent progression blocked while Executive tests EX-016's next high-chain-only structural candidate.
3. Extraction horizon remains the strongest observed axis for the first tiny persistent-choice prototype after clearance.
4. Visible A/B/C signal causality is now a second promising progression vocabulary because it can change decisions without new content volume, but it is not production-approved.
5. Keep calm/deep/resonance permanent affinities blocked; permanent progression should survive later numeric retuning.
6. Reject progression candidates that only raise expected bank, add flat chain power, or lock the player into one named route/signal.
7. Prefer a tiny mutually exclusive prototype that changes both pursuit/cash-out intention and how existing chain/signal state is valued.
8. Do not turn `banked` into a linear stat shop; resolve lifetime-versus-spendable semantics only when a proven progression prototype requires it.
9. Do not add discovery quantity. If discovery becomes a long-term pillar, require pursuit agency and either causal investigation or a tiny authored revelation chain first.
10. Discovery semantics still require an Executive decision: knowledge retained on contact versus cargo requiring extraction.

Queued post-clearance design question:

**Can two tiny mutually exclusive commitments produce recognizably different risk horizons and signal/chain priorities—without flat power, route lock-in, signal lock-in, or new content volume—while both remain strategically viable under the finally cleared core rules?**
