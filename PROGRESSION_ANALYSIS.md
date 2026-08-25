# Progression & Content Analysis

Updated: 2026-08-25 22:36 JST
Director: Progression & Content Analysis Director
Target: current `main` ECHO DRIFT playable after depth-sensitive anomaly tuning

## Finding P-001 — Permanent layer records play but does not change future play

- Status: FAIL
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `meta.banked`, `meta.runs`, and `meta.found` persist, but `startRun()` still always starts Energy 10 / threat 6 and route generation does not read persistent progression. No spend, unlock, equip, protocol, or other path changes a later run from banked salvage or discoveries.
- Recommended Action: Keep meta progression blocked until the current route/return economy is healthier. If that gate passes, evaluate one compact mutually exclusive persistent choice that biases later decisions rather than granting linear power.

The latest Executive balance pass improves the shape of a single run, not the second timescale. `banked` is still a saved score with no future decision consequence.

## Finding P-002 — The six-discovery layer can be exhausted after exactly six anomaly choices

- Status: FAIL
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Every generated route independently has an 18% anomaly chance. With three visible offers, the probability that at least one anomaly is available on a decision is `1 - 0.82^3 ≈ 44.9%`. `discoverMaybe()` selects only from relics not yet in `meta.found`, so there are no duplicates before completion. Every anomaly route chosen while relics remain grants one new permanent discovery. Completion therefore requires exactly six anomaly selections. If a player prioritizes anomaly whenever one appears, six anomaly-available decision screens occur after about `6 / 0.4486 ≈ 13.4` decisions on average; collapse does not undo discovery because it is saved before the collapse check.
- Recommended Action: Do not expand the relic list to disguise the short runway. Treat the current six as prototype markers and resolve discovery's function before creating content volume.

The new depth-sensitive anomaly payout does **not** lengthen this collection runway. Discovery probability and no-duplicate behavior are unchanged.

## Finding P-003 — Discovery still bypasses extraction tension

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: An anomaly choice can call `discoverMaybe()` and immediately `saveMeta()`. A collapse later in the same `chooseRoute()` call zeroes haul but does not remove the discovery. Salvage says “return safely to keep value”; discovery says “contact alone permanently keeps value.”
- Recommended Action: Executive should explicitly classify discoveries as either knowledge/signals retained on contact or physical cargo requiring extraction. Do not change the mechanic from this Director alone.

The latest design direction increasingly frames anomalies as visible signal opportunities. That makes a **knowledge-on-contact** interpretation more coherent than before, but this remains a design recommendation, not an approved semantic change.

## Finding P-004 — Within-run progression is stronger; run-to-run strategic state still resets

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Depth now changes not only threat and extraction multiplier but also anomaly payout through `anomalyBonusAt(depth) = 2 + floor(depth/2) + max(0, depth-2)*2`. The visible anomaly bonus is therefore depth 1→2, 2→3, 3→6, 4→9, 5→11, 6→14 before route/base bonuses. This creates a clearer within-run escalation: later visible anomaly offers can become qualitatively more tempting. Calm recovery and live resonance chains also remain state-dependent. Every new run still resets all strategic variables and ignores persistent state.
- Recommended Action: Preserve this richer single-run arc while Systems verifies the new balance. If route identity survives, a later protocol/loadout experiment can bias these existing state-dependent hooks instead of adding a parallel game.

The progression opportunity is better now because there are actual conditional levers to bias later. It is still blocked until the core stops converging on a dominant route/return rhythm.

## Finding P-005 — Collected discoveries are not persistently inspectable as discoveries

- Status: FAIL
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `meta.found` stores discovery names, but the persistent UI renders only `found.length / relics.length`. Names appear only in the transient run log and there is no archive view showing what was discovered or why it matters.
- Recommended Action: Do not add lore volume. Once discovery semantics are resolved, expose the few existing discoveries in a compact persistent archive and attach consequence/meaning before expanding quantity.

A six-item prototype is enough to test curiosity only if the player can later remember and inspect what was found.

## Finding P-006 — Anomaly now carries both immediate and permanent value, creating a cross-timescale dominance risk

- Status: WATCH
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: OBSERVED + SIMULATED
- Evidence: The latest Executive change deliberately makes visible anomalies increasingly valuable with depth, while every first-six anomaly choice also guarantees one new permanent discovery regardless of later collapse. Therefore the same route can offer (a) stronger immediate haul, (b) a depth-sensitive reason to continue, and (c) guaranteed meta collection progress. This aligns short- and long-term incentives around anomaly selection. The code confirms all three rewards are attached to the same anomaly flag; whether this becomes behaviorally dominant is not yet measured under the exact new rules.
- Recommended Action: Ask Systems to report anomaly selection rate and conditional choice rate while discoveries remain incomplete versus after all six are collected. Do not nerf anomalies pre-emptively. If incomplete collection substantially changes optimal route choice, separate “interesting opportunity” from “mandatory collection progress” before expanding progression.

This is the most important new progression risk created by the latest balance pass. A system that is healthy after collection completion may feel strategically different during the first six discoveries.

## Progression summary

| Metric | Status | Confidence | Verification | Current evidence |
|---|---|---|---|---|
| short_term_progression | PASS | HIGH | OBSERVED | Depth/threat/haul/energy plus calm recovery, resonance chaining and rapidly scaling visible anomaly opportunities create changing within-run state. |
| mid_term_progression | FAIL | HIGH | OBSERVED | Persistent bank/runs/discoveries still do not alter later decisions. |
| long_term_goal_strength | FAIL | HIGH | OBSERVED | Six-discovery checklist has no mechanical/world payoff and stored identities are not persistently inspectable. |
| meaningful_build_diversity | FAIL | HIGH | OBSERVED | No persistent strategic choice/loadout/protocol exists. |
| discovery_exposure | WARNING | HIGH | OBSERVED + SIMULATED | A visible anomaly is offered on about 44.9% of 3-route decisions under the independent 18% rolls. |
| content_exhaustion_risk | FAIL | HIGH | OBSERVED + SIMULATED | Exactly six chosen anomalies complete all six discoveries; depth-sensitive payout does not extend that runway. |
| world_discovery_payoff | FAIL | HIGH | OBSERVED | Only a persistent count is visible; collected names/meaning have no durable archive presentation. |
| cross_timescale_anomaly_bias | WATCH | MEDIUM | OBSERVED + SIMULATED | Anomaly now combines immediate depth-scaled payout with guaranteed early meta collection progress; exact behavioral dominance needs measurement. |
| replay_depth | WARNING | MEDIUM | SIMULATED | Single-run state diversity is improving, but there is still no second-timescale strategy and the new exact balance has not yet completed the next Systems verification pass. |

## Executive handoff

Do **not** make a major progression change from this Director pass. The current Executive priority remains correct: validate the depth-sensitive route/return economy before meta progression.

The latest balance pass changes the progression handoff in one important way:

1. If Systems confirms that deeper anomaly opportunities improve route diversity without becoming mandatory, the game now has stronger state-dependent hooks for a later protocol/loadout layer.
2. If anomalies dominate while `meta.found.length < 6` but behave normally after collection completion, the early meta layer is distorting the core and must be separated or redefined before content expansion.
3. The current six discoveries still complete after exactly six anomaly choices. Do not add more merely to prolong collection.
4. A knowledge-on-contact interpretation is increasingly coherent with the “signal” theme and current save semantics, but Executive must approve that meaning before archive/UI/content work.
5. `banked` should not receive a shop or linear-stat sink until a persistent choice can demonstrably create different play rather than stronger play.

Queued measurement for Systems:

**Compare anomaly-choice frequency and route distribution with discoveries incomplete versus already complete under the current exact main rules. Does guaranteed discovery progress materially distort the first several runs?**

Queued later design question, still blocked:

**After the core economy is validated, what single mutually exclusive persistent protocol can bias calm/deep/resonance priorities enough to make the next dive play differently without becoming a linear power grind?**

No gameplay change was made by Progression in this pass. The new evidence is best used as a measurement request for the next Systems cycle rather than as justification for an unintegrated progression mechanic.
