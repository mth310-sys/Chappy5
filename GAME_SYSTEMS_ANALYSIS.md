# Game Systems Analysis

Target: latest `main` ECHO DRIFT core loop as of 2026-08-26.

## Finding GS-001 — shallow-deep dominance has materially improved, but run depth is still narrow

- `director`: Game Systems Analysis Director
- `status`: WATCH
- `severity`: 3
- `confidence`: HIGH
- `verification`: SIMULATED
- `finding`: The latest Executive tuning (deep base gain reduced to `3-6`, anomaly reward increasing with depth) materially weakens the previous shallow-deep dominant strategy. The adaptive economy is now much more distributed across route types, and average run depth is higher, but most endings still cluster around depth 2-4.
- `evidence`: Prior 100k-run Monte Carlo reproduced current `game.js` directly and produced mean permanent bank ≈10.99/run, mean ending depth ≈2.85, collapse ≈53.3%, with route share deep ≈58.7%, resonance ≈29.0%, calm ≈12.3%. The previous measured state was depth ≈2.62 and deep ≈83.0%.
- `impact`: The central three-route decision is substantially less likely to collapse into “pick deep almost every time”. However, the run still usually resolves before deep multi-step states become common, so the continue/extract decision may still feel compressed.
- `recommended_action`: Preserve this tuning through human-play candidate evaluation unless a new exploit is demonstrated. The remaining depth compression is now less urgent than verifying whether the present push-your-luck failure profile feels fair.
- `human_verification_needed`: YES.
- `last_updated`: 2026-08-26

## Finding GS-002 — route identities are state-dependent rather than merely aggregate diversity

- `director`: Game Systems Analysis Director
- `status`: PASS_WITH_WATCH
- `severity`: 2
- `confidence`: MEDIUM-HIGH
- `verification`: SIMULATED
- `finding`: A new state-conditioned probe supports the intended route identities. Deep dominates early/low-threat states, calm becomes rational as threat and depth rise, and resonance becomes the leading choice when a chain is already active. The improved aggregate split is therefore not just random mixing hiding another universal route.
- `evidence`: A separate 200k-run visible-state one-step value probe, using current `game.js` rules and comparing expected immediate secured value against extraction, recorded selected-route shares by pre-choice state. At threat 0-24: calm 11.0%, deep 59.7%, resonance 29.2% (572,149 selections). At threat 25-49: calm 51.1%, deep 17.3%, resonance 31.6% (33,528). By pre-choice depth: depth0 calm/deep/res = 6.2/71.9/21.8%; depth1 = 8.9/61.4/29.7%; depth2 = 18.0/47.5/34.5%; depth3 = 28.6/33.7/37.7%; depth4 = 44.1/19.5/36.3%. With no active chain, resonance was 23.7%; with an active chain it became 49.3%, ahead of deep 35.3% and calm 15.4%. Only 377 selections reached depth5 in this probe, so depth5 percentages are not treated as strong evidence.
- `impact`: Each route now has an identifiable strategic job: deep is the early cash accelerator, calm is a recovery/late-depth stabilizer, and resonance gains strategic weight when prior choices create a chain opportunity. This is the first state-level evidence that the three-route design is functioning as intended rather than merely achieving a healthier global percentage split.
- `recommended_action`: Do not flatten usage toward 33/33/33 and do not buff calm/resonance globally. Preserve the conditional identities. Human testing should verify that players can perceive these jobs without needing to solve the math explicitly.
- `human_verification_needed`: YES for perceived identity and decision feel.
- `last_updated`: 2026-08-26

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
- `last_updated`: 2026-08-26

## Finding GS-004 — collapse frequency is now primarily a human-feel question

- `director`: Game Systems Analysis Director
- `status`: WAITING_FOR_HUMAN_CANDIDATE
- `severity`: 3
- `confidence`: MEDIUM-HIGH
- `verification`: SIMULATED
- `finding`: The current adaptive policy collapses in slightly more than half of runs. State-conditioned analysis no longer reveals a universal route exploit that would justify another immediate balance patch, so whether this failure frequency is motivating push-your-luck or frustrating loss is increasingly a human-experience question.
- `evidence`: Prior 100k-run adaptive probe collapse ≈53.3%; independent 200k repeat ≈53.2%, voluntary extraction ≈40.9%, forced extraction ≈5.8%. Endings clustered depth1 ≈11.2%, depth2 ≈21.1%, depth3 ≈41.2%, depth4 ≈24.1%, depth5 ≈2.4%. The new state-conditioned probe shows conditional route jobs rather than a single route dominating all states.
- `impact`: Further global collapse reduction before human play could erase the tension that currently creates meaningful extraction decisions. Conversely, human players may still judge the loss rate too punitive.
- `recommended_action`: Systems recommends freezing global risk/reward for the first focused human-play candidate. Ask whether collapse feels earned and whether a failed run creates immediate replay desire. Change collapse only from HUMAN_VERIFIED evidence or a newly demonstrated structural exploit.
- `human_verification_needed`: YES.
- `last_updated`: 2026-08-26

## Finding GS-005 — discovery completion does not change mechanical optimal play, but collector behavior can distort it

- `director`: Game Systems Analysis Director
- `status`: WATCH
- `severity`: 3
- `confidence`: HIGH
- `verification`: OBSERVED + SIMULATED
- `finding`: Whether the six discoveries are incomplete or complete has no mechanical effect on route value in current code: discoveries change only `meta.found`, not haul, energy, threat, route generation or future unlocks. Therefore a mechanically optimizing policy is identical before and after collection completion. However, a player who values new discoveries can rationally prioritize visible anomalies, creating a different and riskier early-game policy.
- `evidence`: `discoverMaybe()` only appends an unseen relic to `meta.found` and saves meta. No gameplay calculation reads `meta.found`. In a prior 100k-run collector probe that prioritized a visible anomaly whenever offered, anomaly selections rose to ≈50.1% of choices versus ≈37.4% under the resource-adaptive policy; mean bank fell to ≈9.93/run and collapse rose to ≈59.7%.
- `impact`: The six-item collection can temporarily bend the core decision loop without providing mechanical progression, then abruptly stop mattering once complete. This remains a progression-design issue rather than a reason to disturb the now-healthier route balance.
- `recommended_action`: Executive should decide the intended meaning of discoveries before expanding their count. If they are knowledge/lore, make their value legible without pretending they are strategic progression. If intended as progression, connect them to meaningful future decisions rather than simply adding more relic names.
- `human_verification_needed`: NO for the mechanical disconnect; YES later for collection motivation.
- `last_updated`: 2026-08-26

## Current systems conclusion

The state-level robustness check is healthy enough that Systems does **not** recommend another core balance patch before focused human play. The current design now shows conditional route identities: deep is strongest early, calm becomes important at threat >=25 and deeper states, and an active resonance chain materially changes resonance choice value. This reduces concern that the improved aggregate 58.7/29.0/12.3 split merely hid a new fixed solution.

The main unresolved systems question is now experiential rather than computational: **does a simulated collapse rate around 53% feel like fair, self-authored greed or like wasted time?** Preserve the current risk/reward candidate long enough for HUMAN_VERIFIED evidence. Separately, discovery remains mechanically disconnected and should not be expanded by adding names alone.