# Player Experience Analysis

Updated: 2026-08-25 23:10 JST
Target: latest `main` ECHO DRIFT
Director: Player Experience Analysis Director

This document records predicted player experience from code/UI inspection and current Director evidence. It does **not** claim human play. Unless explicitly backed by a human report, subjective experience findings remain `SIMULATED`.

## Finding PX-01 — Immediate route consequence is directly readable

- Status: PASS
- Severity(1-5): 1
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: Every route displays `選択後脅威 N%`, calculated by the same `projectedThreat()` used for the subsequent collapse roll. Anomaly, depth escalation, route risk and calm recovery are composed into the number the player compares. The extraction action also exposes the exact currently bankable amount through `回収して帰還 +N` using the same `projectedBank()` formula as extraction.
- Recommended Action: Preserve direct risk and safe-payoff values. Do not reintroduce mental arithmetic through tutorial prose.

## Finding PX-02 — The three route identities are now likely to be experienced, not merely described

- Status: IMPROVED / WATCH
- Severity(1-5): 2
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Systems' latest 100k-run probe against current `game.js` reports deep ≈58.7%, resonance ≈29.0%, calm ≈12.3%, versus the prior deep-heavy ≈83.0% state. Chain-matching resonance choices rose to ≈7.2% of all selections. Calm has a real high-threat recovery job and resonance has a visible nonlinear continuation reward. This materially reduces the earlier mismatch between the UI promise of three play styles and the predicted optimized experience.
- Recommended Action: Do not chase equal 33/33/33 usage. Preserve distinct jobs and verify in human play whether players can describe why they chose calm, deep or resonance without reading explanatory copy.

## Finding PX-03 — Failure frequency has become the highest subjective-risk question

- Status: WARNING
- Severity(1-5): 4
- Confidence: MEDIUM-HIGH
- Verification Type: SIMULATED
- Evidence: Systems reproduced collapse at ≈53.3% over 100k runs and ≈53.2% over a separate 200k run, with voluntary extraction ≈40.9% and forced extraction ≈5.8%. Exact danger is visible before a choice, so failures are not hidden-probability surprises. However, losing the entire current haul in slightly more than half of simulated runs may still feel punishing if route feedback and ownership of the decision are too weak.
- Recommended Action: Do not globally lower collapse from Player Experience alone. This is now a high-value human question: after a collapse, does the player feel `I pushed too far` and want another attempt, or `the game erased my time` and disengage? If the latter occurs, inspect feedback, pacing and loss framing before assuming the probability itself is the only cause.

## Finding PX-04 — The decision is numerically clear but may feel clinical

- Status: WARNING
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: OBSERVED + SIMULATED
- Evidence: Route cards expose EN cost, base gain, anomaly bonus, resonance continuation bonus, calm recovery and exact post-choice collapse percentage. This is strong decision transparency, but the dominant moment-to-moment interaction is still reading several numbers and tapping a card. The central radar only changes its threat text/percentage; route selection, resonance success, anomaly contact, discovery, extraction and collapse are otherwise expressed mainly through text/log updates.
- Recommended Action: Once Executive considers the current risk/reward structure stable enough for a candidate build, prefer a small reaction on the existing radar for route resolution, anomaly, resonance, extraction and collapse rather than adding another UI system. Treat this as a feedback hypothesis, not proof that animation will make the game fun.

## Finding PX-05 — iPhone decision visibility remains unverified and information density has increased

- Status: WARNING
- Severity(1-5): 3
- Confidence: MEDIUM
- Verification Type: OBSERVED + SIMULATED
- Evidence: Portrait layout, `viewport-fit=cover`, safe-area padding, `100dvh`, full-width route buttons and large actions are appropriate for iPhone. At the same time each route can now contain role text plus EN, base gain, anomaly bonus, resonance bonus or calm recovery, while `選択後脅威` occupies a second grid column. HUD values sit above a 205px radar and extraction sits below all three routes. A `max-height:700px` rule shrinks the radar to 150px, but static code cannot prove that Threat/Haul, all choices and extraction payoff remain comfortably comparable on an actual iPhone viewport.
- Recommended Action: At the frozen human-test build, verify thumb reach, whether any route line becomes cramped, and whether the player repeatedly scrolls between HUD/routes/extraction to make one decision. Do not redesign from static inspection alone.

## Finding PX-06 — Collection can create a misleading early-game motivation spike

- Status: WARNING
- Severity(1-5): 3
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Discoveries do not affect gameplay calculations, but an anomaly immediately grants one of the six unseen discoveries and the discovery survives collapse. Systems' collector-policy probe raised anomaly choice from ≈37.4% to ≈50.1%, reduced mean bank from ≈10.99 to ≈9.93 and increased collapse from ≈53.3% to ≈59.7%. Once all six are found, this extra motive disappears because `meta.found` has no mechanical use.
- Recommended Action: Do not add more relic names to prolong the spike. Executive/Progression should decide whether discoveries are knowledge/lore or strategic progression. Player Experience should later verify whether finding one feels meaningful enough to justify the extra risk and whether completion causes a noticeable motivation drop.

## Finding PX-07 — Replay purpose beyond the push-your-luck loop remains mechanically weak

- Status: WARNING
- Severity(1-5): 4
- Confidence: HIGH
- Verification Type: OBSERVED + SIMULATED
- Evidence: Immediate play is increasingly self-explanatory and route variety has improved, but persistent `累計回収`, `潜航回数`, and `発見記録` still do not change a future run. The current replay proposition is therefore primarily `try the risk/reward loop again`, not yet growth, mastery unlock, collection strategy or world progression.
- Recommended Action: Do not manufacture purpose with lore/onboarding copy. After the core feel is human-checked, Progression/Executive should make at least one persistent result alter a future decision before claiming long-term replay motivation.

## Finding PX-08 — The build is approaching the point where human feel becomes more valuable than another PX-only prediction

- Status: READY-SOON
- Severity(1-5): 2
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: The earlier AI-detectable deep dominance has materially improved from ≈83% to ≈58.7%, exact risk/payoff display is internally consistent, and current remaining Player Experience uncertainties are increasingly subjective: whether >50% collapse feels earned, whether route resolution feels satisfying rather than clinical, and whether the improved choice distribution actually creates hesitation. Systems still plans state-conditioned robustness checks, so freezing the build should remain an Executive decision.
- Recommended Action: When Executive freezes a candidate build, limit human verification to three feel questions plus one usability observation: (1) did continue-versus-extract create genuine hesitation more than once, (2) after collapse did failure feel earned enough to want another attempt, (3) after a successful or failed run did the player immediately want another run? Separately record whether iPhone scrolling/thumb reach interfered with comparing choices. Record all answers as `HUMAN_VERIFIED`, including negative results.

## Current Player Experience summary

- clarity: PASS — immediate route risk and current extraction payoff are directly comparable.
- route_identity: IMPROVED/WATCH — current simulation now predicts meaningful calm/resonance use instead of near-decorative alternatives.
- control_friction: UNKNOWN/WARNING — geometry is promising; real iPhone/Safari behavior remains unverified.
- information_load: WATCH — decision transparency is high, but route-card density and vertical attention travel may now be the usability cost.
- tempo: WARNING — mechanical turns are short; event feedback remains predominantly numerical/textual.
- feedback_quality: WARNING — strong atmospheric surface, weak action-specific sensory response.
- predicted_failure_feel: WARNING / SIMULATED — exact risk supports perceived fairness, but ≈53% simulated collapse needs human judgment.
- predicted_replay_motivation: WARNING / SIMULATED — core replay variety improved; persistent reasons to return remain weak.
- predicted_dropoff_risk: WARNING / SIMULATED — likely after repeated total-haul losses if they feel emotionally flat/unearned, or after the six discoveries stop providing novelty.

No `HUMAN_VERIFIED` Player Experience finding exists yet.
