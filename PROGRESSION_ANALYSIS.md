# Progression & Content Analysis

Updated: 2026-08-26 00:36 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT `HUMAN_CANDIDATE_01` (gameplay frozen for focused human test)

## Finding P-001 — Permanent layer records play but does not change future play

- Status: FAIL
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `meta.banked`, `meta.runs`, and `meta.found` persist, but `startRun()` always starts Energy 10 / threat 6 and route generation does not read persistent progression. No spend, unlock, equip, protocol, or other path changes a later run from banked salvage or discoveries.
- Recommended Action: Keep meta progression blocked while `HUMAN_CANDIDATE_01` is frozen. If the core passes human feel testing, evaluate one compact mutually exclusive persistent choice that biases later decisions rather than granting linear power.

The latest Systems evidence makes the single-run layer healthy enough to freeze, but does not change the second-timescale failure. `banked` remains a saved score with no future decision consequence.

## Finding P-002 — The six-discovery layer can be exhausted after exactly six anomaly choices

- Status: FAIL
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Every generated route independently has an 18% anomaly chance. With three visible offers, the probability that at least one anomaly is available on a decision is `1 - 0.82^3 ≈ 44.9%`. `discoverMaybe()` selects only from relics not yet in `meta.found`, so there are no duplicates before completion. Every anomaly route chosen while relics remain grants one new permanent discovery. Completion therefore requires exactly six anomaly selections. If a player prioritizes anomaly whenever one appears, six anomaly-available decision screens occur after about `6 / 0.4486 ≈ 13.4` decisions on average; collapse does not undo discovery because it is saved before the collapse check.
- Recommended Action: Do not expand the relic list to disguise the short runway. Treat the current six as prototype markers and resolve discovery's function before creating content volume.

## Finding P-003 — Discovery still bypasses extraction tension

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: An anomaly choice can call `discoverMaybe()` and immediately `saveMeta()`. A collapse later in the same `chooseRoute()` call zeroes haul but does not remove the discovery. Salvage says “return safely to keep value”; discovery says “contact alone permanently keeps value.”
- Recommended Action: Executive should explicitly classify discoveries as either knowledge/signals retained on contact or physical cargo requiring extraction. Do not change the mechanic while the human candidate is frozen.

A knowledge-on-contact interpretation is coherent with the signal/anomaly framing, but remains a design recommendation rather than approved semantics.

## Finding P-004 — Within-run progression is now meaningfully state-dependent; run-to-run strategic state still resets

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Depth changes threat, extraction multiplier and anomaly payout through production `anomalyBonusAt(depth) = 2 + floor(depth/2) + max(0, depth-2)*2`, yielding **2 / 3 / 5 / 8 / 10 / 13** at depths 1–6. Calm recovery and resonance chains are state-dependent. Systems' latest state-conditioned probe also found route roles vary by state rather than merely by aggregate share. Every new run still resets all strategic variables and ignores persistent state.
- Recommended Action: Preserve the current single-run arc through the human test. If it passes, reuse these existing state-dependent hooks for horizontal progression rather than adding a parallel subsystem.

## Finding P-005 — Collected discoveries are not persistently inspectable as discoveries

- Status: FAIL
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `meta.found` stores discovery names, but the persistent UI renders only `found.length / relics.length`. Names appear only in the transient run log and there is no archive view showing what was discovered or why it matters.
- Recommended Action: Do not add lore volume during the candidate freeze. Once discovery semantics are resolved, expose the few existing discoveries in a compact persistent archive and attach consequence/meaning before expanding quantity.

## Finding P-006 — Discovery progress can distort early anomaly choices, then disappear abruptly

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Mechanical optimal play is identical before and after discovery completion because `meta.found` is not read by gameplay calculations. However, Systems measured a collector policy that prioritizes visible anomalies: anomaly selections rise from ≈37.4% to ≈50.1%, mean bank falls from ≈10.99 to ≈9.93 per run, and collapse rises from ≈53.3% to ≈59.7%. Once all six discoveries are collected, that extra motive disappears.
- Recommended Action: Do not nerf anomalies merely because collectors take more risk. First decide whether discoveries are knowledge/lore or strategic progression. If they remain knowledge-on-contact, make that meaning legible and give completion a durable world/collection payoff. If they become progression, connect them to future decisions rather than adding more names.

## Finding P-007 — Discovery is a completion timer, not yet a collection strategy

- Status: FAIL
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `discoverMaybe()` chooses uniformly from remaining unseen relic names after an anomaly route is selected. Route tone, signal A/B/C, depth, resonance chain, threat, and player history do not influence *which* discovery appears. With duplicates prevented, the player cannot target a desired discovery, infer where a missing discovery lives, or change play to pursue a specific entry.
- Recommended Action: Do not solve this by adding more relic names or random rarity. If discovery becomes a long-term pillar, attach discovery identity to an existing meaningful choice/state so a player can deliberately pursue something. If discoveries remain lore-only, treat the six as authored world beats rather than presenting them as a deep collection system.

## Finding P-008 — Banked salvage has no marginal meaning after extraction

- Status: FAIL
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `meta.banked` only increases on successful extraction and is rendered as a cumulative number. No threshold, choice, unlock, branch, or world response reads it. Therefore banking 10 versus 1000 changes the displayed total but not what the player can attempt, pursue, understand, or choose next.
- Recommended Action: Do **not** add a conventional shop merely to give currency a sink. If the core passes human verification, test whether banked salvage can fund a **choice with opportunity cost**—for example selecting one of a few mutually exclusive dive protocols for the next expedition—so spending changes play instead of just increasing stats.

This is distinct from P-001: P-001 says persistent state does not affect future runs; P-008 identifies why the main reward itself currently cannot sustain a long-term goal. A larger number is not progression unless its marginal units eventually unlock a meaningful decision.

## Finding P-009 — Post-test progression needs an acceptance gate before implementation

- Status: DESIGN_GATE
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + DESIGN ANALYSIS
- Evidence: The current core now has three state-dependent route jobs, while persistent progression is absent. Adding linear Energy, lower Threat, higher gain, or permanent extraction multipliers would directly change the frozen risk/reward curve and can erase the newly established situational balance. Adding a separate currency/system would instead create parallel complexity without evidence it improves replay depth.
- Recommended Action: If and only if `HUMAN_CANDIDATE_01` passes the core human test, require the first progression prototype to satisfy all of these before Executive approves implementation:
  1. **Changes decisions, not only power** — at least two persistent options should make different calm/deep/resonance situations attractive.
  2. **Has opportunity cost** — choosing one option excludes or delays another; there is no obvious “buy everything” path in the prototype.
  3. **Uses existing hooks** — prefer threat recovery, anomaly pursuit, resonance-chain behavior, signal information, or extraction style over a parallel combat/stat system.
  4. **Does not invalidate Human Candidate 01** — avoid global permanent +Energy/+gain/-Threat that makes the verified risk/reward test obsolete.
  5. **Creates a next-run intention** — after returning, the player can state a concrete reason the next dive will be approached differently.
  6. **Is testable with minimal content** — prove the choice with a tiny option set before adding relics, tiers, currencies, enemies, or lore volume.

This gate is analysis only. It does not authorize a progression implementation or change the frozen human-test candidate.

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
| early_collector_distortion | WARNING | HIGH | OBSERVED + SIMULATED | Collector behavior can raise anomaly selection to ≈50.1% and collapse to ≈59.7%, then that motive vanishes after completion. |
| reward_marginal_value | FAIL | HIGH | OBSERVED | Additional banked salvage changes only the displayed cumulative total. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Single-run decision variety is structurally healthier, but there is no second-timescale strategy and human feel remains unverified. |

## Executive handoff

`HUMAN_CANDIDATE_01` is now frozen by Executive. **Do not change its gameplay from Progression.** The useful work while waiting is to make the post-pass progression decision safer, not to pre-build it.

1. Preserve the frozen single-run economy and human-test package.
2. Treat production anomaly rewards as **2 / 3 / 5 / 8 / 10 / 13** at depths 1–6.
3. Persistent progression remains the next major product problem **only if the core passes HUMAN_VERIFIED feel testing**.
4. Do not turn `banked` into a linear stat shop. Its first useful role should create opportunity cost and a different next-run intention.
5. Require the P-009 acceptance gate before implementing the first persistent protocol/loadout experiment.
6. If discovery becomes long-term collection, require pursuit agency before adding quantity.
7. Discovery semantics still need an Executive decision: knowledge retained on contact versus cargo requiring extraction.

Queued post-pass design question:

**What smallest mutually exclusive protocol choice can reuse the existing calm/deep/resonance/anomaly/signal hooks so that two players—or the same player on two runs—enter the next dive with genuinely different intentions, without becoming a linear power grind?**

No gameplay change was made in this pass. The frozen human candidate remains intact.