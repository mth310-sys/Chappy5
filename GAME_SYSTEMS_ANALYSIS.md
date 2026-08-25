# Game Systems Analysis

Target: latest `main` ECHO DRIFT core loop as of 2026-08-25.

## Finding GS-001 — adaptive play still converges on shallow extraction

- `director`: Game Systems Analysis Director
- `status`: WARNING
- `severity`: 4
- `confidence`: HIGH
- `verification`: SIMULATED
- `finding`: The newly visible anomaly opportunities make individual offers more contextual, but they do not yet solve the central stop-rule problem. A visible-state adaptive policy still tends to end runs very shallowly, so the push-your-luck loop remains at risk of becoming "take the best early deep offer, then bank" rather than a recurring one-more-step decision.
- `evidence`: A 200k-run Monte Carlo probe reproduced the current `game.js` rules and, on each step, generated the three visible offers exactly as the game does. The policy selected the offer with the best one-step survival-adjusted post-route bank value using visible energy, depth, haul, threat, chain, signal, rolled cost/gain and visible anomaly; before each step it extracted whenever current bank was at least the best visible one-step expected bank. Result: mean permanent bank ≈10.60/run, mean ending depth ≈2.60, collapse ≈47.5%. This improves on blindly continuing but remains concentrated in the shallow early game. Previous fixed-policy probes found deep depth 3 ≈10.1 bank/run, so adaptive information has not materially moved the economic center of gravity deeper.
- `impact`: The player can learn a short-session farming rhythm that is economically rational and bypasses much of the intended depth escalation. The central tension may occur only once or twice per run instead of repeatedly evolving with state.
- `recommended_action`: Executive should test candidate reward-curve changes before implementation. Prefer rewards/opportunities whose value rises conditionally with depth or accumulated risk, rather than a flat global multiplier increase. Re-simulate any candidate against both fixed-stop and adaptive policies so the fix does not merely create a new universal deep strategy.
- `human_verification_needed`: YES — after structural tuning, verify whether extraction hesitation occurs at varying depths and states rather than at a learned early threshold.
- `last_updated`: 2026-08-25 adaptive-policy probe

## Finding GS-002 — visible-offer optimization remains strongly deep-dominant

- `director`: Game Systems Analysis Director
- `status`: WARNING
- `severity`: 4
- `confidence`: HIGH
- `verification`: SIMULATED
- `finding`: Deep is not only the strongest simple pure-route policy; it also dominates an adaptive policy that can inspect all currently visible offer information. The distinctive resonance system is rarely selected and even more rarely produces a live-chain match under economically greedy play.
- `evidence`: In the same 200k-run adaptive probe, selected-route share was approximately deep 85.1%, resonance 11.7%, calm 3.2%. Visible anomalies were chosen on ≈26.5% of steps. Among resonance selections, only ≈13.6% matched the current live chain; chain-advancing resonance choices were only ≈1.6% of all steps. The run ended at mean depth ≈2.60, leaving little time for a multi-step chain mechanic to become economically relevant.
- `impact`: The game's most distinctive route mechanic can become decorative while the simplest high-gain route controls optimal play. If players optimize even loosely, meaningful route choice and build-like identity weaken.
- `recommended_action`: Do not solve this by a flat resonance buff. Give route identities state-dependent jobs: resonance should gain clear conditional value from preserving/advancing a live chain, calm should have meaningful value when threat is high, and deep should remain the burst-reward route with a real tradeoff. Executive should evaluate a small set of candidate conditional rules via simulation before changing live balance.
- `human_verification_needed`: NO for mathematical dominance; YES later for whether route identities are understandable and satisfying.
- `last_updated`: 2026-08-25 adaptive-policy probe

## Finding GS-003 — risk labeling improved; exact next-step danger remains inferential

- `director`: Game Systems Analysis Director
- `status`: WARNING
- `severity`: 2
- `confidence`: HIGH
- `verification`: OBSERVED
- `finding`: The prior misleading presentation has been partially corrected. Anomaly status and its +7 threat are now shown before selection, and the route number is explicitly labeled `脅威補正`, so it is no longer presented as the complete collapse probability. However, the player must still mentally combine current threat, anomaly +7, route modifier and the next-depth `depth * 1.4` increase to infer actual post-choice danger.
- `evidence`: `render()` now shows anomaly warning/bonus and `脅威補正`; `chooseRoute()` still resolves threat as current threat + anomaly 7 + route risk + new depth × 1.4 before the collapse roll.
- `impact`: The fairness problem is reduced substantially. Remaining uncertainty may be acceptable suspense, but it limits precise strategic comparison between three offers.
- `recommended_action`: Do not add explanation text reflexively. First determine whether exact post-choice threat is intended knowledge. If precise risk comparison is a design goal, compute and display projected threat directly; if uncertainty is intentional, keep the current modifier model and verify with human play whether it feels suspenseful rather than arbitrary.
- `human_verification_needed`: YES.
- `last_updated`: 2026-08-25 after anomaly/risk-label UI change

## Finding GS-004 — calm stops actually reducing threat after the second step

- `director`: Game Systems Analysis Director
- `status`: WARNING
- `severity`: 3
- `confidence`: HIGH
- `verification`: OBSERVED
- `finding`: Calm is described as the safety route, but its -3 route modifier only lowers total threat on depth 1 and barely lowers it on depth 2. From depth 3 onward, the mandatory depth escalation exceeds the -3 modifier, so a non-anomaly calm choice increases absolute threat despite being the safest relative option.
- `evidence`: Post-choice threat delta for a non-anomaly calm route is `-3 + newDepth * 1.4`: depth 1 = -1.6, depth 2 = -0.2, depth 3 = +1.2, depth 5 = +4.0. An anomaly adds another +7. Current hint says `低消費・低回収 / 崩壊を抑える`, which is true relatively versus other routes but not as an actual late-run stabilizer.
- `impact`: At exactly the high-threat states where a safety route should create a meaningful alternative to extraction, calm cannot recover danger; it only increases it more slowly. This helps explain why adaptive optimization almost never selects calm and why the run's strategic space narrows as depth rises.
- `recommended_action`: Executive should explicitly decide whether calm is meant to be a relative low-risk route or a true threat-management route. If the latter, test a conditional threat reduction or flatter depth interaction rather than simply increasing its reward. This is a core balance change and should be integrated by Executive, not applied unilaterally here.
- `human_verification_needed`: NO for the arithmetic; YES later for whether the resulting safety choice feels useful without becoming mandatory.
- `last_updated`: 2026-08-25

## Current systems conclusion

The anomaly-visibility change improved information quality and created more contextual offers, but the new simulation evidence shows that the economic structure is still strongly shallow/deep-biased. The highest-value next systems work is **not adding another mechanic**. It is testing a small number of conditional balance shapes that make (1) continuing deeper sometimes rational, (2) calm genuinely useful in dangerous states if that is its intended identity, and (3) resonance chains economically relevant often enough to influence route choice. Any candidate must be checked against adaptive as well as fixed policies to avoid replacing one dominant strategy with another.

No game-code balance change was made in this Director pass because GS-001/GS-002/GS-004 affect the core risk/reward curve and therefore require Executive integration under README rules.