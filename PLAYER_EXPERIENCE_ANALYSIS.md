# Player Experience Analysis

Updated: 2026-08-26 15:09 JST
Target: latest `main` ECHO DRIFT / HUMAN_CANDIDATE_01
Director: Player Experience Analysis Director

This document records predicted player experience from code/UI inspection and current Director evidence. It does **not** claim human play. Unless explicitly backed by a human report, subjective experience findings remain `SIMULATED`.

## Finding PX-01 — Immediate route consequence is mostly directly readable

- Status: PASS_WITH_EDGE_CASE_WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Every route displays `選択後脅威 N%`, calculated by the same `projectedThreat()` used for the subsequent collapse roll. Extraction exposes the exact currently bankable amount through `回収して帰還 +N` using the same `projectedBank()` formula. However, the route card displays the rolled nominal `EN-N` cost while `chooseRoute()` actually charges `Math.min(run.energy, r.cost)`. At 1 EN, a displayed `EN-3` route therefore consumes only 1 EN while still granting its full gain/bonuses and then forces extraction if the player survives.
- Recommended Action: Preserve the frozen human candidate, but explicitly observe whether this low-energy edge case is noticed or feels like a lucky final push versus a misleading cost label. After the candidate, Executive/Systems should compare disabling unaffordable routes against formalizing partial-payment behavior. If partial payment remains, the displayed cost should reflect what will actually be charged.

## Finding PX-02 — The three route identities are now likely to be experienced, not merely described

- Status: PASS_WITH_HUMAN_WATCH
- Severity(1-5): 2
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: State-conditioned simulation shows route roles changing with visible state rather than merely producing a healthier aggregate split. Deep is strongest earlier, calm becomes more attractive as danger rises, and resonance becomes substantially more attractive with an active chain. Later active-chain branch evidence also shows that immediate route attractiveness and multi-step value can diverge, so the identities are not interchangeable skins.
- Recommended Action: Do not chase equal 33/33/33 usage. Human verification should ask whether players can feel why a route became attractive without solving the formulas explicitly.

## Finding PX-03 — Failure frequency is still a major subjective-risk question

- Status: WAITING_FOR_HUMAN_CANDIDATE
- Severity(1-5): 4
- Confidence: MEDIUM-HIGH
- Verification Type: SIMULATED
- Evidence: Current strategy simulations continue to produce substantial collapse rates, commonly around the high-40s to low-50s for stronger policies. Exact danger is visible before a choice. Losing the entire current haul this often may feel either like self-authored greed or like wasted time; code and simulation cannot decide which.
- Recommended Action: Freeze global risk/reward for the focused human candidate unless Executive has contrary structural evidence. After collapse, record whether the player feels `I pushed too far` and wants another attempt or `the game erased my time` and disengages.

## Finding PX-04 — The decision is numerically clear but may feel clinical

- Status: WARNING
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: OBSERVED + SIMULATED
- Evidence: Route cards expose EN cost, base gain, anomaly bonus, resonance continuation bonus, calm recovery and exact post-choice collapse percentage. This is strong decision transparency, but the dominant moment-to-moment interaction remains reading numbers and tapping a card. The central radar continuously sweeps but route resolution, resonance success, anomaly contact, discovery, extraction and collapse are otherwise expressed mainly through text/log changes.
- Recommended Action: Do not add feedback animation while the controlled human target is frozen. If human feedback says choices are clear but emotionally flat, the highest-leverage PX experiment is a small reaction on the existing radar for route resolution/anomaly/resonance/extraction/collapse rather than another UI system.

## Finding PX-05 — iPhone decision visibility remains unverified and information density has increased

- Status: WARNING
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: OBSERVED + SIMULATED
- Evidence: Portrait layout, `viewport-fit=cover`, safe-area padding, `100dvh`, full-width route buttons and large actions are appropriate for iPhone. Each route can contain role text plus EN, base gain, anomaly bonus, resonance bonus or calm recovery, while `選択後脅威` occupies a second grid column. Static code cannot prove that Threat/Haul, all choices and extraction payoff remain comfortably comparable on an actual iPhone viewport.
- Recommended Action: At the frozen human-test build, observe whether the player repeatedly scrolls between HUD/routes/extraction to make one decision, whether any route line becomes cramped, and whether thumb reach interferes. Do not redesign from static inspection alone.

## Finding PX-06 — Collection can create a misleading early-game motivation spike

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Discoveries survive collapse but currently do not change gameplay calculations. Once all discoveries are found, this extra motive disappears because the archive has no mechanical use.
- Recommended Action: Do not add more relic names to prolong the spike. Executive/Progression should decide whether discoveries are knowledge/lore or strategic progression. Player Experience should later verify whether finding one feels meaningful enough to justify extra risk and whether completion causes a noticeable motivation drop.

## Finding PX-07 — Replay purpose beyond the push-your-luck loop remains mechanically weak

- Status: WARNING
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Persistent `累計回収`, `潜航回数`, and `発見記録` still do not change a future run. The current replay proposition is therefore primarily `try the risk/reward loop again`, not yet growth, mastery unlock, collection strategy or world progression.
- Recommended Action: Do not manufacture purpose with lore/onboarding copy. After the core feel is human-checked and strategic clearance exists, Progression/Executive should make at least one persistent result alter a future decision before claiming long-term replay motivation.

## Finding PX-08 — Focused human feel testing remains higher value than another PX-only prediction

- Status: READY_FOR_HUMAN_CANDIDATE
- Severity(1-5): 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: The remaining central Player Experience uncertainties are subjective: whether frequent collapse feels earned, whether continue-versus-extract creates genuine hesitation, and whether a run ending creates immediate replay desire. Further PX speculation cannot convert those into HUMAN_VERIFIED evidence.
- Recommended Action: Keep HUMAN_CANDIDATE_01 frozen. Limit the human test to three feel questions plus usability observations.

## Finding PX-09 — Final-energy partial payment can weaken perceived rule trust

- Status: WATCH
- Severity(1-5): 3
- Confidence: MEDIUM-HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: At low Energy the interface can promise a cost the game does not actually charge. Because the current design exposes exact collapse risk and extraction value, this inconsistency is unusually salient.
- Recommended Action: Do not alter the frozen candidate before human feel testing. Treat this as a post-candidate rule-clarity decision.

## Finding PX-10 — Visible signal causality is clearer, but the tested rule makes switching slightly worse

- Status: STRUCTURAL_PX_CANDIDATE_NOT_CLEARED
- Severity(1-5): 4
- Confidence: HIGH for measured direction / MEDIUM-HIGH for experience interpretation
- Verification Type: OBSERVED + SIMULATED
- Evidence: Current production visibly labels every route A/B/C and exposes the active resonance as `A×N`, `B×N`, or `C×N`, yet calm/deep ignore that visible identity and use a hidden 50% chain-break roll. This remains a rule-legibility problem: with active `A×2`, calm/deep `A` can erase the chain while `B` can preserve it. The new direct common-RNG A/B probe successfully compared this production rule against the previously preferred `same signal preserves / different signal breaks` candidate across 104,736 active-chain states. Contrary to the PX hypothesis that visible causality might also make meaningful switching easier, the signal-causal candidate slightly **reduced** switching success: at horizon 2, switch-win rate changed by -0.2425 percentage points, resonance-win rate by +0.1423 points, and mean `switch - resonance` bank by -0.09143; at horizon 3, switch-win changed by -0.2406 points, resonance-win by +0.1967 points, and mean bank difference by -0.10800. The CI run containing regression, parity, strategy probes and this A/B comparison completed successfully. Therefore visible signal causality remains easier to explain to a player, but it is **not** supported as the structural fix for resonance stickiness and should not be promoted merely because it is more legible.
- Recommended Action: Keep production and HUMAN_CANDIDATE_01 unchanged. Executive/Systems should lower `same signal preserves / different signal breaks` as the primary balance candidate and continue isolating the chain-renewal source. PX should preserve the underlying requirement: whichever chain-exit rule is eventually selected must make the sacrifice predictable from the decision surface. Do not solve production's hidden 50% rule with extra prose alone if a cleaner causal rule can later be found that also passes Systems. If a future structural candidate clears Systems, human verification should test only two points: can the player predict chain survival before tapping, and does leaving resonance feel like an intentional sacrifice rather than an unexplained punishment?

## Finding PX-11 — Record reset understates its effect during a live dive

- Status: WATCH
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: `記録初期化` is permanently visible during an active dive. Its confirmation describes persistent archive values, but confirmation also removes the live-run save and abandons the current dive.
- Recommended Action: Preserve the frozen candidate. After the candidate, either disable/hide record reset while a dive is active, or change the confirmation to explicitly state that the current dive will also be abandoned.

## New Player Experience conclusion

The latest direct A/B evidence changes the PX recommendation: **visible A/B/C causality is still preferable as a comprehension property, but the specific `same signal preserves / different signal breaks` rule is no longer the preferred structural candidate.** It slightly worsened the measured calm/deep switching trajectory instead of relieving resonance stickiness. This is a useful negative result because it prevents a cleaner-looking UI rule from being mistaken for a game improvement.

`HUMAN_CANDIDATE_01` remains frozen and suitable for focused human testing. There is still no `HUMAN_VERIFIED` evidence that ECHO DRIFT is fun.

### Focused human verification package

1. **Decision tension:** Did `continue` versus `extract +N` make you genuinely hesitate more than once?
2. **Failure ownership:** After a collapse, did it feel like a risk you knowingly pushed too far, enough that you wanted another attempt?
3. **Immediate replay desire:** At the end of a successful or failed run, did you want to start the next run immediately?

Usability observations, not extra fun questions: on the actual iPhone, note whether scrolling, cramped route text or thumb reach interferes with comparing Threat/Haul, the three routes and extraction. If a route advertises a larger EN cost than the remaining Energy, note whether its continued selectability is understood or surprising. If resonance is active, note whether the player expects visible A/B/C identity to predict chain survival or notices unexplained chain disappearance. If `記録初期化` is used during a live dive, note whether abandoning the active dive was expected from the confirmation wording.

If the core feel questions fail, preserve the negative HUMAN_VERIFIED result and diagnose before expanding progression. If they pass, the next major Player Experience concerns remain weak long-term replay purpose, emotionally clinical action feedback, chain-exit legibility, the low-Energy cost rule, and destructive reset clarity.
