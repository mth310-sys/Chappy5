# Game Systems Analysis

Target: latest `main` ECHO DRIFT core loop as of 2026-08-25.

## Finding GS-001 — voluntary extraction currently has a shallow expected-value optimum

- `director`: Game Systems Analysis Director
- `status`: WARNING
- `severity`: 4
- `confidence`: HIGH
- `verification`: SIMULATED
- `finding`: The core push-your-luck decision exists, but current threat growth and extraction bonus make planned shallow extraction substantially better in expected permanent haul than exhausting energy. This risks teaching a stable stop-depth rather than creating a recurring contextual "one more step or go home" decision.
- `evidence`: Independent Monte Carlo probes of the current `game.js` rules (50k trials per pure-route/stop-depth policy) found approximate best fixed stop depths of calm depth 5 = 7.8 bank/run, deep depth 3 = 10.1, resonance depth 4 = 8.6. By contrast, always continuing until forced extraction/collapse produced about calm 6.0, deep 7.9, resonance 6.8 bank/run (200k trials per policy). These are expected-value probes only, not human fun measurements. Current extraction multiplier rises only +4% per depth (cap +60%), while threat also gains `depth * 1.4` every step plus route/anomaly risk.
- `impact`: Once players infer a profitable shallow stopping rule, increasing depth can become mathematically irrational rather than temptingly dangerous. The game's central risk/reward question could collapse into repetition even though the UI still presents a choice.
- `recommended_action`: Executive should test a reward curve that makes deeper continuation situationally competitive rather than universally optimal. Prefer changing the shape of value-at-depth (for example milestone/conditional value or stronger late-run opportunity) over simply reducing danger. Re-simulate candidate curves before implementation. Do not tune solely to equalize expected values; variance, route identity, and human tension still require playtest.
- `human_verification_needed`: YES — after structural tuning, ask whether the player genuinely hesitates between extracting and taking one more route, and whether that hesitation occurs at varying depths rather than one learned threshold.
- `last_updated`: 2026-08-25

## Finding GS-002 — route identities are differentiated, but deep is still the strongest simple farming policy

- `director`: Game Systems Analysis Director
- `status`: WARNING
- `severity`: 3
- `confidence`: HIGH
- `verification`: SIMULATED
- `finding`: The prior route rebalance successfully prevents calm from being the obvious pure-route default, but `deep` remains the highest-return simple policy in both forced-continuation and fixed-stop probes. Resonance has a distinct chain mechanic, yet its payoff depends on repeated matching signals and is not currently strong enough to beat the simpler deep policy in expectation.
- `evidence`: Current source documents a 30k-run probe of calm ~6.0, deep ~8.0, resonance ~6.8 expected bank with survival ~29–33%. Independent 200k-run reproduction produced calm 5.98, deep 7.91, resonance 6.77. Fixed-stop probes likewise favored deep around depth 3 (~10.1) over resonance depth 4 (~8.6) and calm depth 5 (~7.8).
- `impact`: Players optimizing permanent haul may ignore the more distinctive resonance chain and repeatedly select deep, weakening meaningful route choice and making the unique system less relevant.
- `recommended_action`: Do not immediately buff resonance numerically in isolation. First evaluate policies that choose among the three visible offers based on current threat, energy, chain signal, anomaly and rolled cost/gain. If deep remains dominant under adaptive policies, adjust conditional incentives so resonance is strongest when preserving/advancing a live chain and calm is strongest in high-threat stabilization states.
- `human_verification_needed`: NO for dominance detection; YES later for whether the resulting route identities feel legible and satisfying.
- `last_updated`: 2026-08-25

## Finding GS-003 — displayed route risk is not the actual next-step collapse probability

- `director`: Game Systems Analysis Director
- `status`: WARNING
- `severity`: 3
- `confidence`: HIGH
- `verification`: OBSERVED
- `finding`: Each route card displays only the template risk modifier (`-3%`, `+3%`, `0%`). Actual threat before the collapse roll also receives `depth * 1.4`, and an anomaly secretly adds +7. Therefore a displayed calm `-3%` can still increase total threat at sufficient depth, while anomaly status is not shown before selection.
- `evidence`: In `chooseRoute`, anomaly adds 7 threat, then threat becomes `threat + r.risk + run.depth*1.4`, and collapse is rolled against that resulting value. `render()` shows only `r.risk` on each route card.
- `impact`: This is not merely a clarity issue: strategic decisions are made from incomplete/misleading risk information. Players cannot reliably compare safety versus reward, so outcomes may feel arbitrary rather than earned.
- `recommended_action`: Executive/Player Experience should decide how much uncertainty is intentional. At minimum, avoid presenting the template delta as though it were complete risk. A safe small option is to expose an estimated post-choice threat range or label the number explicitly as route modifier; anomaly uncertainty can remain hidden if intended.
- `human_verification_needed`: YES — confirm whether uncertainty feels suspenseful rather than unfair after the information model is clarified.
- `last_updated`: 2026-08-25

## Current systems conclusion

The core loop is structurally testable and already contains genuine state-dependent ingredients: energy, depth, haul-at-risk, threat, route rolls and resonance chain. The highest-value systems issue is not adding another mechanic. It is making the existing **continue vs extract** decision remain context-sensitive instead of converging on a learned shallow stop depth, while ensuring the distinctive resonance route can matter under adaptive play.

No game-code change was made in this Director pass because correcting GS-001/GS-002 would alter the core risk/reward curve and therefore belongs to Executive integration under README rules.