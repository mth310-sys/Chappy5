# Game Systems Analysis

Target: latest `main` ECHO DRIFT core loop as of 2026-08-25.

## Finding GS-001 — shallow-deep dominance has materially improved, but run depth is still narrow

- `director`: Game Systems Analysis Director
- `status`: WATCH
- `severity`: 3
- `confidence`: HIGH
- `verification`: SIMULATED
- `finding`: The latest Executive tuning (deep base gain reduced to `3-6`, anomaly reward increasing with depth) materially weakens the previous shallow-deep dominant strategy. The adaptive economy is now much more distributed across route types, and average run depth is higher, but most endings still cluster around depth 2-4.
- `evidence`: A fresh 100k-run Monte Carlo probe reproduced current `game.js` directly: deep gain `3-6`, calm recovery `-8` at pre-choice threat >=25, resonance match reward `1 + newChainLen*2`, anomaly bonus from `anomalyBonusAt()`, rolled cost/gain, visible anomaly and exact projected threat. A visible-state one-step adaptive policy produced mean permanent bank ≈10.99/run, mean ending depth ≈2.85, collapse ≈53.3%, with route share deep ≈58.7%, resonance ≈29.0%, calm ≈12.3%. The previous measured state was depth ≈2.62 and deep ≈83.0%.
- `impact`: The central three-route decision is now substantially less likely to collapse into “pick deep almost every time”. However, the run still usually resolves before deep multi-step states become common, so the continue/extract decision may still feel compressed.
- `recommended_action`: Do not immediately add another reward system. Preserve this tuning for at least one more systems pass and measure depth-conditioned route choice and extraction behavior. The next target is broader state-dependent decision variety, not simply a higher mean depth.
- `human_verification_needed`: YES, after AI-side stability checks.
- `last_updated`: 2026-08-25 after deep/anomaly tuning

## Finding GS-002 — route identities now affect optimization meaningfully

- `director`: Game Systems Analysis Director
- `status`: WATCH
- `severity`: 2
- `confidence`: HIGH
- `verification`: OBSERVED + SIMULATED
- `finding`: Calm and resonance are no longer marginal in the adaptive probe. Their conditional jobs now appear often enough to matter to strategy, while deep remains the largest but no longer overwhelming share.
- `evidence`: In the fresh 100k-run probe, selected-route share was deep ≈58.7%, resonance ≈29.0%, calm ≈12.3%. Chain-matching resonance choices were ≈7.2% of all selections, up from the prior ≈3.7%. Current code also gives calm real negative threat delta at high threat through substantial depth and gives resonance a nonlinear continuation payout when signal matches.
- `impact`: The three route labels are now closer to three actual strategic jobs rather than one dominant payout route plus two decorative alternatives.
- `recommended_action`: Avoid flat buffs. Next measure route share by threat band, depth and chain state. A healthy result is not equal 33/33/33 usage; it is that each route becomes rational in identifiable states.
- `human_verification_needed`: YES later for perceived route identity.
- `last_updated`: 2026-08-25

## Finding GS-003 — exact next-step danger remains structurally correct

- `director`: Game Systems Analysis Director
- `status`: PASS
- `severity`: 1
- `confidence`: HIGH
- `verification`: OBSERVED
- `finding`: Each route displays `選択後脅威 N%`, calculated by the same `projectedThreat()` function used immediately before collapse resolution.
- `evidence`: `render()` calls `projectedThreat(r,nextDepth)` and `chooseRoute()` assigns `run.threat=projectedThreat(r,run.depth)` before the collapse roll. Anomaly and calm recovery are included in that shared calculation.
- `impact`: Immediate risk comparison is transparent and internally consistent.
- `recommended_action`: Preserve the single shared threat calculation. Human play should later verify whether exact probability display feels strategic rather than clinical.
- `human_verification_needed`: YES for feel only.
- `last_updated`: 2026-08-25

## Finding GS-004 — collapse frequency is now the main systems risk to watch

- `director`: Game Systems Analysis Director
- `status`: WATCH
- `severity`: 3
- `confidence`: MEDIUM-HIGH
- `verification`: SIMULATED
- `finding`: The new depth-value tuning improves route diversity partly by making more risky opportunities worth taking, but the same adaptive policy now collapses in slightly more than half of runs.
- `evidence`: Fresh 100k-run adaptive probe collapse rate ≈53.3%. A separate 200k-run repeat produced ≈53.2% collapse, ≈40.9% voluntary extraction and ≈5.8% forced extraction. Endings clustered around depth 1 ≈11.2%, depth 2 ≈21.1%, depth 3 ≈41.2%, depth 4 ≈24.1%, depth 5 ≈2.4%.
- `impact`: This may be an acceptable push-your-luck profile, but if collapse repeatedly erases runs before the player feels ownership over decisions, frustration could outweigh the improved strategic variety. This is not confirmable as “too punishing” without human play.
- `recommended_action`: Do not lower collapse globally yet. First compare collapse by player policy and state, then hand the current playable to human testing once no major AI-detectable exploit remains. Human verification should specifically test whether failure feels earned and whether a >50% simulated collapse profile still produces immediate replay desire.
- `human_verification_needed`: YES.
- `last_updated`: 2026-08-25

## Finding GS-005 — discovery completion does not change mechanical optimal play, but collector behavior can distort it

- `director`: Game Systems Analysis Director
- `status`: WATCH
- `severity`: 3
- `confidence`: HIGH
- `verification`: OBSERVED + SIMULATED
- `finding`: Whether the six discoveries are incomplete or complete has no mechanical effect on route value in current code: discoveries change only `meta.found`, not haul, energy, threat, route generation or future unlocks. Therefore a mechanically optimizing policy is identical before and after collection completion. However, a player who values new discoveries can rationally prioritize visible anomalies, creating a different and riskier early-game policy.
- `evidence`: `discoverMaybe()` only appends an unseen relic to `meta.found` and saves meta. No gameplay calculation reads `meta.found`. In a 100k-run collector probe that prioritized a visible anomaly whenever offered, anomaly selections rose to ≈50.1% of choices versus ≈37.4% under the resource-adaptive policy; mean bank fell to ≈9.93/run and collapse rose to ≈59.7%.
- `impact`: The six-item collection can temporarily bend the core decision loop without providing mechanical progression, then abruptly stop mattering once complete. This supports Progression's concern that the collection layer may be short-lived and disconnected from the long-term game.
- `recommended_action`: Executive should decide the intended meaning of discoveries before expanding their count. If they are knowledge/lore, make their value legible without pretending they are strategic progression. If they are intended as progression, connect them to meaningful future decisions rather than simply adding more relic names.
- `human_verification_needed`: NO for the mechanical disconnect; YES later for collection motivation.
- `last_updated`: 2026-08-25

## Current systems conclusion

The latest tuning is a **material systems improvement**. The previous deep-heavy state (≈83% deep, mean depth ≈2.62) is no longer reproduced by current `game.js`; the fresh probe is ≈58.7% deep / 29.0% resonance / 12.3% calm with mean depth ≈2.85. This is strong evidence that the three route jobs are beginning to function as real decisions rather than decorative alternatives.

The next highest-value systems work is not another immediate balance patch. It is to verify that the improvement is robust across threat bands, depths, chain states and player policies, while watching two risks: **collapse now exceeds half of simulated runs**, and **the discovery layer can temporarily distort anomaly choice without changing long-term mechanics**. No live game-code balance change was made in this Director pass because the current tuning should be measured before another core risk/reward change.