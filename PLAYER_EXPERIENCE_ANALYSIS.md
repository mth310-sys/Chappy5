# Player Experience Analysis

Updated: 2026-08-26 01:09 JST
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
- Evidence: Systems' latest state-conditioned 200k probe shows route roles changing with visible state rather than merely producing a healthier aggregate split. At Threat 0-24, deep leads at ≈59.7%; at Threat 25-49, calm becomes the leading route at ≈51.1%. With no active chain resonance is ≈23.7%, while with an active chain resonance rises to ≈49.3% and becomes the leading choice. By depth, deep falls from ≈71.9% at depth0 to ≈19.5% at depth4 while calm rises from ≈6.2% to ≈44.1%. This supports the intended experienced jobs: early cash acceleration, danger recovery, and chain continuation.
- Recommended Action: Do not chase equal 33/33/33 usage and do not rebalance before focused human play without a newly demonstrated exploit. Human verification should ask whether players can feel why a route became attractive without solving the formulas explicitly.

## Finding PX-03 — Failure frequency is now the highest subjective-risk question

- Status: WAITING_FOR_HUMAN_CANDIDATE
- Severity(1-5): 4
- Confidence: MEDIUM-HIGH
- Verification Type: SIMULATED
- Evidence: Systems reproduced collapse at ≈53.3% over 100k runs and ≈53.2% over a separate 200k run, with voluntary extraction ≈40.9% and forced extraction ≈5.8%. Exact danger is visible before a choice, and the latest state-conditioned probe found no universal route exploit that justifies another immediate global balance patch. Losing the entire current haul in slightly more than half of simulated runs may still feel either like self-authored greed or like wasted time; code and simulation cannot decide which.
- Recommended Action: Freeze global risk/reward for the first focused human candidate unless Executive has contrary evidence. After collapse, record whether the player feels `I pushed too far` and wants another attempt or `the game erased my time` and disengages. If negative, inspect feedback/pacing/loss framing before assuming probability alone is the cause.

## Finding PX-04 — The decision is numerically clear but may feel clinical

- Status: WARNING
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: OBSERVED + SIMULATED
- Evidence: Route cards expose EN cost, base gain, anomaly bonus, resonance continuation bonus, calm recovery and exact post-choice collapse percentage. This is strong decision transparency, but the dominant moment-to-moment interaction remains reading numbers and tapping a card. The central radar continuously sweeps but its gameplay response is mainly threat text/percentage; route resolution, resonance success, anomaly contact, discovery, extraction and collapse are otherwise expressed mainly through text/log changes.
- Recommended Action: Do **not** add feedback animation immediately before the first human candidate; doing so would move the target just as Systems has declared the risk/reward structure healthy enough to freeze. First learn whether the present interaction already creates tension. If human feedback says choices are clear but emotionally flat, the highest-leverage next PX experiment is a small reaction on the existing radar for route resolution/anomaly/resonance/extraction/collapse rather than another UI system.

## Finding PX-05 — iPhone decision visibility remains unverified and information density has increased

- Status: WARNING
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: OBSERVED + SIMULATED
- Evidence: Portrait layout, `viewport-fit=cover`, safe-area padding, `100dvh`, full-width route buttons and large actions are appropriate for iPhone. Each route can contain role text plus EN, base gain, anomaly bonus, resonance bonus or calm recovery, while `選択後脅威` occupies a second grid column. HUD values sit above a 205px radar and extraction sits below all three routes. A `max-height:700px` rule shrinks the radar to 150px, but static code cannot prove that Threat/Haul, all choices and extraction payoff remain comfortably comparable on an actual iPhone viewport.
- Recommended Action: At the frozen human-test build, observe whether the player repeatedly scrolls between HUD/routes/extraction to make one decision, whether any route line becomes cramped, and whether thumb reach interferes. Do not redesign from static inspection alone.

## Finding PX-06 — Collection can create a misleading early-game motivation spike

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Discoveries do not affect gameplay calculations, but an anomaly immediately grants one of the six unseen discoveries and the discovery survives collapse. Systems' collector-policy probe raised anomaly choice from ≈37.4% to ≈50.1%, reduced mean bank from ≈10.99 to ≈9.93 and increased collapse from ≈53.3% to ≈59.7%. Once all six are found, this extra motive disappears because `meta.found` has no mechanical use.
- Recommended Action: Do not add more relic names to prolong the spike. Executive/Progression should decide whether discoveries are knowledge/lore or strategic progression. Player Experience should later verify whether finding one feels meaningful enough to justify extra risk and whether completion causes a noticeable motivation drop.

## Finding PX-07 — Replay purpose beyond the push-your-luck loop remains mechanically weak

- Status: WARNING
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Immediate play is increasingly self-explanatory and route variety is now state-conditioned, but persistent `累計回収`, `潜航回数`, and `発見記録` still do not change a future run. The current replay proposition is therefore primarily `try the risk/reward loop again`, not yet growth, mastery unlock, collection strategy or world progression.
- Recommended Action: Do not manufacture purpose with lore/onboarding copy. After the core feel is human-checked, Progression/Executive should make at least one persistent result alter a future decision before claiming long-term replay motivation.

## Finding PX-08 — Focused human feel testing remains higher value than another PX-only prediction

- Status: READY_FOR_HUMAN_CANDIDATE
- Severity(1-5): 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: The earlier AI-detectable deep dominance materially improved, exact risk/payoff display is internally consistent except for the newly documented low-energy cost edge case, and Systems' state-conditioned robustness check supports distinct situational jobs rather than a hidden universal route. The remaining central Player Experience uncertainties are subjective: whether >50% collapse feels earned, whether continue-versus-extract creates genuine hesitation, and whether a run ending creates immediate replay desire. Further PX speculation cannot convert those into HUMAN_VERIFIED evidence.
- Recommended Action: Keep HUMAN_CANDIDATE_01 frozen. Limit the human test to three feel questions plus usability observations. Do not let the EN partial-payment edge case expand the test into a questionnaire; simply note it if encountered.

## Finding PX-09 — Final-energy partial payment can weaken perceived rule trust

- Status: WATCH
- Severity(1-5): 3
- Confidence: MEDIUM-HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: At low Energy the interface can promise a cost the game does not actually charge. Because the current design has deliberately improved transparency by showing exact collapse risk and exact extraction value, this inconsistency is more salient than it would be in a deliberately opaque game. A player who notices `EN-3` being accepted at 1 EN may read it as a welcome last-chance rule, but there is no UI language explaining that rule. Conversely, if they assume displayed costs are requirements, they may avoid a route that is actually selectable. The mechanic therefore creates both a hidden advantage and a comprehension ambiguity.
- Recommended Action: Do not alter the frozen candidate before human feel testing. Treat this as a post-candidate rule-clarity decision, not a cosmetic copy fix. Systems should first measure the economic effect; then Executive should choose the intended rule. Player Experience should ensure the eventual UI communicates that rule directly.

## New Player Experience conclusion

`HUMAN_CANDIDATE_01` remains suitable for focused human testing. The newly identified low-Energy partial-payment behavior is a real rule-transparency issue, but it is localized to the final-energy state and does not justify moving the frozen target before the core feel test. It should be observed if encountered and resolved immediately after the candidate according to the intended Systems rule.

This is **not** a claim that ECHO DRIFT is fun. There is still no `HUMAN_VERIFIED` Player Experience evidence.

### Focused human verification package

1. **Decision tension:** Did `continue` versus `extract +N` make you genuinely hesitate more than once?
2. **Failure ownership:** After a collapse, did it feel like a risk you knowingly pushed too far, enough that you wanted another attempt?
3. **Immediate replay desire:** At the end of a successful or failed run, did you want to start the next run immediately?

Usability observations, not extra fun questions: on the actual iPhone, note whether scrolling, cramped route text or thumb reach interferes with comparing Threat/Haul, the three routes and extraction. If a route advertises a larger EN cost than the remaining Energy, note whether its continued selectability is understood or surprising.

If the core feel questions fail, preserve the negative HUMAN_VERIFIED result and diagnose before expanding progression. If they pass, the next major Player Experience concerns become weak long-term replay purpose, emotionally clinical action feedback, and the low-Energy cost rule.
