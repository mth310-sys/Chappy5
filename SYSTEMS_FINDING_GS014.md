# SYSTEMS FINDING GS-014 — Neutral offer ordering removes the apparent mixed-strategy slope window

- Director: Game Systems Analysis Director
- Status: BLOCKED_STRATEGY_CLEARANCE / SLOPE_ONLY_TUNING_NOT_SUPPORTED
- Severity: 4
- Confidence: HIGH for measured benchmark result; MEDIUM-HIGH for design conclusion
- Verification Type: OBSERVED + SIMULATED

## Finding

The corrected deterministic strategy benchmark now neutralizes the previous fixed `calm -> deep -> res` offer-order tie bias by applying a seeded Fisher-Yates permutation before mixed-policy evaluation. The corrected CI run completed successfully.

Under this corrected benchmark, the previously promising resonance slope `1.25` no longer produces a future-aware lead. Across every tested resonance slope (`2 / 1.75 / 1.5 / 1.25 / 1`), one of the fixed-tone policies remains ahead of the tested future-aware policy.

This materially changes the Systems conclusion: **resonance slope alone is not currently supported as the production tuning lever for restoring mixed strategic superiority.** The earlier narrow slope-1.25 window was sensitive to benchmark tie ordering and must not be used as production-clearance evidence.

## Evidence

Corrected GitHub Actions `ECHO DRIFT Regression` run `32920556201` completed successfully. Deterministic state regression, strategy parity guard, and deterministic strategy benchmark all passed.

State-conditioned extraction results after neutral offer ordering:

- slope `2` production: fixed resonance `12.106575` > future-aware `11.918575` > one-step `10.936775` > fixed calm `10.753175` > fixed deep `8.954900`
- slope `1.75`: future-aware `11.746925` > fixed resonance `11.722550` > one-step `10.922675` > fixed calm `10.753175`
- slope `1.5`: fixed resonance `11.383925` > future-aware `11.242475` > fixed calm `10.753175` > one-step `10.673650`
- slope `1.25`: fixed resonance `11.056800` > future-aware `11.036875` > fixed calm `10.753175` > one-step `10.630150`
- slope `1`: fixed calm `10.753175` > future-aware `10.738350` > fixed resonance `10.725875` > one-step `10.583675`

The slope-1.25 ordering is the key reversal. Before neutralized offer ordering, future-aware had appeared ahead by about `0.0192 bank/run`. After the benchmark correction, fixed resonance leads future-aware by about `0.0199 bank/run` instead.

Slope `1.75` does show future-aware above fixed resonance by about `0.0244 bank/run`, but that is not strategic clearance because the measured margin is extremely small and the same future-aware policy loses again at slopes `1.5` and `1.25`. The response is non-monotonic at the scale of these tiny margins, so selecting `1.75` from this sweep would amount to tuning to benchmark noise/sensitivity rather than demonstrating a robust mixed-strategy region.

At slope `1`, the system crosses into a different fixed-policy attractor: fixed calm `10.753175` narrowly exceeds future-aware `10.738350`. Thus simply weakening resonance eventually transfers the fixed-policy advantage to calm rather than reliably making contextual mixed play dominant.

All values above are SIMULATED benchmark results, not HUMAN_VERIFIED player performance.

## Interpretation

The useful conclusion is no longer “find the right resonance slope.” The sweep now indicates that the strategic degeneracy is structurally shared across more than one reward coefficient:

1. strong resonance compounding makes fixed resonance competitive or dominant;
2. weakening that compounding far enough eventually exposes fixed calm as the next attractor;
3. the tested future-aware approximation can come very close, but no tested slope gives a robust margin over all fixed policies after benchmark-order bias is removed.

This means continuing to micro-sweep resonance slope alone would risk overfitting the simulator rather than improving the game. A production coefficient change is not justified from the current evidence.

The mixed policy's route mix also changes substantially with slope, confirming that it is responding contextually rather than merely replaying one fixed route. However, contextual use by itself is insufficient if a simple fixed policy still matches or exceeds its long-run return.

## Recommended Action

Do not change production resonance slope and do not continue fine-grained slope-only searching as the next Systems priority.

The next narrow structural test should preserve the current deterministic/state-conditioned harness and isolate **one additional mechanism that specifically prices staying in or abandoning a resonance chain**, rather than globally scaling all resonance continuation rewards. Candidate tests should be non-production and limited to one mechanism at a time, for example:

- make the current hidden 50% chain loss on non-resonance choices deterministic from visible signal continuity, or
- cap/diminish only higher chain-length marginal bonuses while preserving the early-chain payoff.

The acceptance criterion should be stronger than a tiny bank/run crossover: across the fixed seeds, the same contextual policy should beat fixed calm and fixed resonance with a repeatable margin while still using all three route types in meaningful state-dependent proportions. If no narrow mechanism achieves that, escalate the structural route/reward interaction to Executive rather than tuning more coefficients.

No production gameplay values, UI, save data, or playable candidate were changed in this Systems run.