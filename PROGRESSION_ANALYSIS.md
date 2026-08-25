# Progression & Content Analysis

Updated: 2026-08-25 23:40 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT playable after depth-sensitive anomaly tuning

## Finding P-001 — Permanent layer records play but does not change future play

- Status: FAIL
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `meta.banked`, `meta.runs`, and `meta.found` persist, but `startRun()` still always starts Energy 10 / threat 6 and route generation does not read persistent progression. No spend, unlock, equip, protocol, or other path changes a later run from banked salvage or discoveries.
- Recommended Action: Keep meta progression blocked until the current route/return economy is robust enough for human feel testing. If that gate passes, evaluate one compact mutually exclusive persistent choice that biases later decisions rather than granting linear power.

The latest Executive balance pass improves the shape of a single run, not the second timescale. `banked` is still a saved score with no future decision consequence.

## Finding P-002 — The six-discovery layer can be exhausted after exactly six anomaly choices

- Status: FAIL
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Every generated route independently has an 18% anomaly chance. With three visible offers, the probability that at least one anomaly is available on a decision is `1 - 0.82^3 ≈ 44.9%`. `discoverMaybe()` selects only from relics not yet in `meta.found`, so there are no duplicates before completion. Every anomaly route chosen while relics remain grants one new permanent discovery. Completion therefore requires exactly six anomaly selections. If a player prioritizes anomaly whenever one appears, six anomaly-available decision screens occur after about `6 / 0.4486 ≈ 13.4` decisions on average; collapse does not undo discovery because it is saved before the collapse check.
- Recommended Action: Do not expand the relic list to disguise the short runway. Treat the current six as prototype markers and resolve discovery's function before creating content volume.

The depth-sensitive anomaly payout does **not** lengthen this collection runway. Discovery probability and no-duplicate behavior are unchanged.

## Finding P-003 — Discovery still bypasses extraction tension

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: An anomaly choice can call `discoverMaybe()` and immediately `saveMeta()`. A collapse later in the same `chooseRoute()` call zeroes haul but does not remove the discovery. Salvage says “return safely to keep value”; discovery says “contact alone permanently keeps value.”
- Recommended Action: Executive should explicitly classify discoveries as either knowledge/signals retained on contact or physical cargo requiring extraction. Do not change the mechanic from this Director alone.

The current signal/anomaly framing makes a **knowledge-on-contact** interpretation coherent, but this remains a design recommendation rather than an approved semantic change.

## Finding P-004 — Within-run progression is stronger; run-to-run strategic state still resets

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Depth changes threat, extraction multiplier and anomaly payout through production `anomalyBonusAt(depth) = 2 + floor(depth/2) + max(0, depth-2)*2`. The executable source of truth yields bonuses **2 / 3 / 5 / 8 / 10 / 13** for depths 1–6. This creates a clearer within-run escalation: later visible anomaly offers can become qualitatively more tempting. Calm recovery and live resonance chains also remain state-dependent. Every new run still resets all strategic variables and ignores persistent state.
- Recommended Action: Preserve this richer single-run arc while Systems completes state-conditioned robustness checks. If route identity survives, a later protocol/loadout experiment can bias these existing state-dependent hooks instead of adding a parallel game.

Technical regression now protects this exact anomaly curve, so future balance analysis should use `game.js` or executable probes rather than copied prose values.

## Finding P-005 — Collected discoveries are not persistently inspectable as discoveries

- Status: FAIL
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `meta.found` stores discovery names, but the persistent UI renders only `found.length / relics.length`. Names appear only in the transient run log and there is no archive view showing what was discovered or why it matters.
- Recommended Action: Do not add lore volume. Once discovery semantics are resolved, expose the few existing discoveries in a compact persistent archive and attach consequence/meaning before expanding quantity.

A six-item prototype is enough to test curiosity only if the player can later remember and inspect what was found.

## Finding P-006 — Discovery progress can distort early anomaly choices, then disappear abruptly

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Systems has now measured the earlier queued concern under current exact rules. Mechanical optimal play is identical before and after discovery completion because `meta.found` is not read by gameplay calculations. However, a collector policy that prioritizes visible anomalies raises anomaly selections from ≈37.4% to ≈50.1%, lowers mean bank from ≈10.99 to ≈9.93 per run, and raises collapse from ≈53.3% to ≈59.7%. Once all six discoveries are collected, that extra motive disappears because discoveries provide no further mechanical or world consequence.
- Recommended Action: Do not nerf anomalies merely because collectors take more risk. First decide whether discoveries are knowledge/lore or strategic progression. If they remain knowledge-on-contact, make that meaning legible and give completion a durable world/collection payoff. If they become progression, connect them to future decisions rather than simply adding more names.

This resolves the previous measurement request: the core mechanics do not change with completion, but player motivation can materially distort the first several runs.

## Finding P-007 — Discovery is a completion timer, not yet a collection strategy

- Status: FAIL
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `discoverMaybe()` chooses uniformly from the remaining unseen relic names after an anomaly route is selected. Route tone, signal A/B/C, depth, resonance chain, threat, and player history do not influence *which* discovery appears. Because duplicates are also prevented, the player cannot target a desired discovery, choose between collection branches, infer where a missing discovery lives, or change play to pursue a specific entry. The only collection decision is whether to take a visible anomaly; after six such successes the list is complete automatically.
- Recommended Action: Do not solve this by adding more relic names or random rarity. If discovery becomes a long-term pillar, attach future discovery identity to an existing meaningful choice/state (for example signal family, depth band, route behavior, or mutually exclusive protocol) so the player can intentionally pursue something. If discoveries remain lore-only, treat the six as authored world beats rather than presenting them as a deep collection system.

This distinction matters because a persistent archive alone would improve remembrance but **would not create collection gameplay**. Long-term collection needs pursuit agency, not just a longer checklist.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS | HIGH | OBSERVED | Depth/threat/haul/energy plus calm recovery, resonance chaining and depth-scaled visible anomaly opportunities create changing within-run state. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries still do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Six-discovery checklist has no mechanical/world payoff and stored identities are not persistently inspectable. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| discovery_exposure | WARNING | HIGH | OBSERVED + SIMULATED | A visible anomaly is offered on about 44.9% of 3-route decisions under the independent 18% rolls. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries. |
| collection_agency | FAIL | HIGH | OBSERVED | Discovery identity is random from unseen entries; no current state or deliberate route behavior can target a specific missing discovery. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; collected names/meaning have no durable archive presentation. |
| early_collector_distortion | WARNING | HIGH | OBSERVED + SIMULATED | Collector behavior can raise anomaly selection to ≈50.1% and collapse to ≈59.7%, then that motive vanishes after six discoveries. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Single-run decision variety improved materially, but there is still no second-timescale strategy and human feel remains unverified. |

## Executive handoff

Do **not** make a major progression change yet. Current Systems evidence shows the latest balance is materially healthier, but collapse is ≈53% and state-conditioned robustness still deserves one pass before freezing a human-test build.

1. Preserve the current single-run economy unless the next state-conditioned Systems probe exposes a concrete exploit.
2. Treat the production anomaly curve as **2 / 3 / 5 / 8 / 10 / 13** at depths 1–6.
3. Discovery completion does not alter mechanical optimal play, but collector motivation can distort early risk-taking and then vanish abruptly.
4. A knowledge-on-contact interpretation is coherent with current persistence, but Executive should explicitly approve semantics before archive/UI/content work.
5. `banked` should not receive a shop or linear-stat sink until a persistent choice can demonstrably create different play rather than stronger play.
6. If discovery is intended to become long-term collection, require **pursuit agency** before adding quantity: the player should eventually be able to infer and deliberately pursue a missing discovery through existing game state or strategic choices.

Queued later design question, still blocked until the core candidate is human-tested:

**What single mutually exclusive persistent protocol can bias calm/deep/resonance priorities enough to make the next dive play differently without becoming a linear power grind?**

No gameplay change was made in this pass. The new progression evidence is that the six discoveries are not merely short-lived; they currently behave as a six-event completion timer with no targetable collection strategy.