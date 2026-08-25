# Game Systems Analysis

Target: latest `main` ECHO DRIFT core loop as of 2026-08-25.

## Finding GS-001 — adaptive play still converges on shallow extraction

- `director`: Game Systems Analysis Director
- `status`: WARNING
- `severity`: 4
- `confidence`: HIGH
- `verification`: SIMULATED
- `finding`: The latest calm recovery, resonance-chain reward and exact projected-threat display improve route identity and information, but they do not materially move the economic center of gravity deeper. A visible-state one-step adaptive policy still tends to bank after only a few choices.
- `evidence`: A fresh 100k-run Monte Carlo probe reproduced current `game.js`, including calm `-8` recovery at pre-choice threat >=25, resonance match reward `1 + newChainLen*2`, visible anomaly, rolled cost/gain and projected threat. The policy extracted whenever current bank was at least the best visible one-step survival-adjusted post-route bank. Result: mean permanent bank ≈10.84/run, mean ending depth ≈2.62, collapse ≈47.9%. The previous probe was ≈10.60 bank/run and depth ≈2.60, so the tuning improved yield slightly but did not meaningfully deepen the recurring push-your-luck decision.
- `impact`: A player optimizing loosely can still learn an early banking rhythm and experience only one or two meaningful continue/extract decisions per run.
- `recommended_action`: Executive should test a small number of depth-conditional reward shapes before further live tuning. The target is not simply “deeper is better”; it is that different visible states produce rational extraction at meaningfully different depths. Re-test fixed-stop and adaptive policies to avoid replacing shallow farming with universal deep diving.
- `human_verification_needed`: YES, after structural tuning.
- `last_updated`: 2026-08-25 after calm/resonance tuning

## Finding GS-002 — route-role tuning helps resonance, but deep remains dominant

- `director`: Game Systems Analysis Director
- `status`: WARNING
- `severity`: 4
- `confidence`: HIGH
- `verification`: SIMULATED
- `finding`: Conditional route identities now exist in code, but the adaptive economy remains strongly deep-dominant. Resonance participation improved modestly; calm remains rare because the run usually ends before its threat>=25 recovery condition creates enough value.
- `evidence`: In the same fresh 100k-run probe, selected-route share was approximately deep 83.0%, resonance 13.7%, calm 3.3%. The previous probe was deep 85.1%, resonance 11.7%, calm 3.2%. Chain-matching resonance choices rose from about 1.6% of all steps to about 3.7%, showing the conditional chain reward is affecting decisions, but deep still controls more than four-fifths of choices.
- `impact`: The signature resonance mechanic is less decorative than before but still secondary, while calm's intended recovery job is often irrelevant because shallow extraction prevents dangerous states from developing.
- `recommended_action`: Do not flat-buff calm or resonance again. Their low usage is partly downstream of GS-001. First test reward curves that make later states worth reaching; then re-measure whether calm recovery and resonance continuation naturally become relevant. If not, revise their conditional jobs rather than raw payout.
- `human_verification_needed`: NO for dominance; YES later for perceived route identity.
- `last_updated`: 2026-08-25 after route-role tuning

## Finding GS-003 — exact next-step danger is now directly visible

- `director`: Game Systems Analysis Director
- `status`: PASS
- `severity`: 1
- `confidence`: HIGH
- `verification`: OBSERVED
- `finding`: The previous risk-information problem has been resolved structurally. Each route now displays `選択後脅威 N%`, calculated by the same `projectedThreat()` function used by collapse resolution.
- `evidence`: `render()` calls `projectedThreat(r,nextDepth)` for each route, and `chooseRoute()` assigns `run.threat=projectedThreat(r,run.depth)` immediately before the collapse roll. Anomaly and calm recovery are included by that shared function.
- `impact`: Players can compare the immediate survival risk of all three visible choices without mentally reconstructing hidden arithmetic. Remaining uncertainty comes from future offers and random collapse, not a mismatch between displayed and applied probability.
- `recommended_action`: Preserve the single shared threat calculation. Human play should later verify whether exact probability display feels strategic rather than overly clinical, but no systems fix is currently required.
- `human_verification_needed`: YES for feel only.
- `last_updated`: 2026-08-25

## Finding GS-004 — calm is now a true high-threat stabilizer, but its opportunity window is scarce

- `director`: Game Systems Analysis Director
- `status`: WATCH
- `severity`: 2
- `confidence`: HIGH
- `verification`: OBSERVED + SIMULATED
- `finding`: The earlier arithmetic defect in calm's role is fixed: when pre-choice threat is at least 25, calm receives an additional -8 recovery and can reduce absolute threat at substantially greater depths. However, adaptive runs still end around depth 2.62, so relatively few decisions reach the state where this job matters.
- `evidence`: Current non-anomaly high-threat calm delta is `-3 + newDepth*1.4 - 8`, i.e. `newDepth*1.4 - 11`; it still reduces threat through depth 7. This is a genuine stabilizer rather than merely the least-dangerous route. Yet calm remains ≈3.3% of adaptive selections in the fresh probe.
- `impact`: The route design is now internally coherent, but the surrounding stop-rule economy suppresses the circumstances that would showcase it.
- `recommended_action`: Keep the calm rule unchanged for now. Address GS-001 first, then re-measure calm usage specifically in threat>=25 states before deciding whether calm itself needs more tuning.
- `human_verification_needed`: YES later for whether recovery creates a satisfying rescue decision.
- `last_updated`: 2026-08-25

## Current systems conclusion

The latest Executive changes are directionally successful but insufficient on the central problem. Exact risk presentation is now a systems PASS, calm has a real recovery identity, and resonance matching influences optimization more often. The remaining bottleneck is the **shallow stop-rule economy**: because rational runs still end around depth 2.6, the game rarely reaches the states where calm recovery and multi-step resonance can create richer decisions.

The highest-value next systems work is therefore not another route buff and not a new mechanic. It is candidate simulation of a small number of **depth-conditional reward curves/opportunities** designed to make later states sometimes worth reaching without making maximum-depth play universally optimal. No live game-code balance change was made in this Director pass because that alters the core risk/reward curve and requires Executive integration under README rules.