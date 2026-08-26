# TQ-017 — Fixed route order biased mixed-strategy tie resolution

- Status: PASS
- Severity: 4
- Confidence: HIGH
- Verification Type: OBSERVED
- Director: Technical & Quality Analysis Director
- Target: latest `main` deterministic strategy-evaluation harness

## Evidence

`tests/strategy-benchmark.mjs` previously generated every offer in the fixed array order `calm -> deep -> res`. Both `oneStepChoice()` and `futureChoice()` update the selected route only when a candidate score is strictly greater than the current best. Therefore exact score ties were always resolved in favor of the earliest tone in the fixed array, giving `calm` deterministic tie priority.

Production `game.js` does not present route tones in a fixed order: `generateRoutes()` randomizes the three route templates before rendering them. The benchmark's fixed ordering was therefore not a neutral implementation detail for mixed policies. It could bias a policy whenever two or more route evaluations tied, while fixed-tone policies were unaffected.

Commit `d099206a53c0efe70dfb40cbd7d07b2e45ec2f97` changes only the non-production benchmark. Each simulated offer now receives a deterministic seeded Fisher-Yates permutation of the three tones before policy evaluation, removing the hard-coded calm-first tie priority while preserving reproducibility. `game.js`, playable balance, save data and UI are unchanged.

The corrected `ECHO DRIFT Regression` run `32920556201` completed with conclusion `success` on commit `d099206a53c0efe70dfb40cbd7d07b2e45ec2f97`. This confirms the corrected aggregation and neutralized offer ordering execute successfully in CI. Subsequent Systems/Executive reruns using the corrected harness showed that the previously reported narrow slope-1.25 mixed-policy lead did not survive the neutral ordering, which is consistent with this finding's original risk assessment and demonstrates that the guard materially improved decision quality.

A first edit of the test-only change had introduced an aggregation reference error; that failed run was not used as evidence and was immediately superseded by the corrected commit above.

## Recommended Action

Keep the seeded offer permutation as part of the deterministic benchmark. Treat strategy margins smaller than ordinary benchmark-order/seed sensitivity as insufficient for production clearance unless they remain stable across the existing seed set and relevant structural variants.

No production route-order or gameplay change is justified by this finding. TQ-017 is closed as CI-verified.