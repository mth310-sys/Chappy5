# TQ-017 — Fixed route order biased mixed-strategy tie resolution

- Status: FIXED_PENDING_CI
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Director: Technical & Quality Analysis Director
- Target: latest `main` deterministic strategy-evaluation harness

## Evidence

`tests/strategy-benchmark.mjs` previously generated every offer in the fixed array order `calm -> deep -> res`. Both `oneStepChoice()` and `futureChoice()` update the selected route only when a candidate score is strictly greater than the current best. Therefore exact score ties were always resolved in favor of the earliest tone in the fixed array, giving `calm` deterministic tie priority.

Production `game.js` does not present route tones in a fixed order: `generateRoutes()` randomizes the three route templates before rendering them. The benchmark's fixed ordering was therefore not a neutral implementation detail for mixed policies. It could bias a policy whenever two or more route evaluations tied, while fixed-tone policies were unaffected.

This matters now because the intermediate resonance-slope sweep is being used to judge very small strategic margins. At slope 1.25 the previously reported future-aware lead over fixed resonance was only about `0.0192 bank/run`; a deterministic tie-order preference is large enough in principle to contaminate a conclusion at that scale. This finding does **not** assert that the slope-1.25 result is false. It means the previous result should be treated as not strategically cleared until rerun with neutralized offer ordering.

Commit `d099206a53c0efe70dfb40cbd7d07b2e45ec2f97` changes only the non-production benchmark. Each simulated offer now receives a deterministic seeded Fisher-Yates permutation of the three tones before policy evaluation, removing the hard-coded calm-first tie priority while preserving reproducibility. `game.js`, playable balance, save data and UI are unchanged.

A first edit of this test-only change introduced an aggregation reference error and its CI run failed before producing usable strategy output; that edit was immediately corrected by `d099206a53c0efe70dfb40cbd7d07b2e45ec2f97`. The corrected `ECHO DRIFT Regression` run `32920556201` is still in progress at the time of this finding, so the repair is not yet promoted to PASS.

## Recommended Action

Do not use the pre-fix slope-1.25 margin as production-clearance evidence by itself. Wait for the corrected CI run, then compare the new fixed and mixed-policy outputs under the randomized offer order. If the mixed window survives with a material margin across the existing seeds, Systems/Executive can restore confidence in that candidate region. If the ordering change removes or reverses the lead, treat the earlier narrow result as benchmark-order sensitivity rather than a production balance result.

Keep this as a benchmark-quality correction only; no production route-order or gameplay change is justified by this finding.