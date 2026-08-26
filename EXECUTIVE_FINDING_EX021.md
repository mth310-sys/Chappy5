# EX-021 — First matching continuation is the primary remaining resonance boundary

- **Status:** `STRATEGY_CLEARANCE_BLOCKED / FIRST_MATCH_CONTINUATION_PRIMARY_BOUNDARY`
- **Severity:** 4
- **Confidence:** HIGH for measured concentration / MEDIUM-HIGH for design interpretation
- **Verification Type:** `OBSERVED + SIMULATED` (`HUMAN_VERIFIED`: no)

## Executive integration

Latest `main` and the full `README.md` were re-read before this decision. Production `game.js` and `HUMAN_CANDIDATE_01` remain frozen.

Since EX-020, the Director evidence changed the causal picture:

- **Systems GS-017:** guaranteed renewal on a mismatching resonance offer is not the dominant source of resonance stickiness. In 69,669 mismatch states, switching to calm/deep is already favored on average over 2–3 decisions.
- **Player Experience PX-014:** the UX concern should therefore move from generic chain insurance toward matching continuation, where visible alternatives risk becoming practically non-choices.
- **Progression P-020:** chain-survival/insurance upgrades remain blocked; they would strengthen a minority contributor while the core match-continuation problem is unresolved.
- **Technical TQ-020:** decision-driving probes are covered by production parity guards. TQ-019 route permutation semantics and real iPhone/Safari lifecycle remain unresolved.
- No new `HUMAN_VERIFIED` feedback exists.

## New verified simulation boundary

Systems had already split matching resonance states by chain maturity, but the nested metrics were not visible in CI logs. Executive added reporting-only instrumentation (`tests/resonance-renewal-report.mjs`) and changed only the workflow invocation so the existing deterministic probe prints its nested metrics without changing simulation semantics.

`ECHO DRIFT Regression` run `32943253035` completed successfully. State regression, parity guard and every strategy/decision probe passed.

Across the same **104,736** production-sampled active-chain states:

- mismatch: **69,669** (66.52%)
- matching resonance signal: **35,067** (33.48%)
  - `chainLen=1`: **26,470** (75.49% of matching states)
  - `chainLen>=2`: **8,597** (24.51%)

### Production branch result by signal/maturity

| State | Horizon | Switch wins | Resonance wins | Mean `switch - resonance` secured bank |
|---|---:|---:|---:|---:|
| mismatch | 2 | 38.45% | 26.07% | **+0.58843** |
| mismatch | 3 | 33.15% | 27.02% | **+0.26474** |
| match, all | 2 | 9.73% | 58.88% | **-4.06647** |
| match, all | 3 | 12.30% | 52.51% | **-4.25257** |
| match, `chainLen=1` | 2 | 8.90% | 59.36% | **-3.67102** |
| match, `chainLen=1` | 3 | 11.93% | 51.34% | **-3.89082** |
| match, `chainLen>=2` | 2 | 12.29% | 57.43% | **-5.28405** |
| match, `chainLen>=2` | 3 | 13.42% | 56.10% | **-5.36641** |

These are `SIMULATED`, not human-play results.

## What this resolves

The earlier working explanation that resonance stickiness mainly comes from **mismatch renewal/restart** is rejected as a primary explanation. Mismatch states already contain meaningful switching trajectories.

The stronger result is that **the very first matching continuation is already heavily dominant**. Mature chains amplify the secured-bank penalty from roughly `-3.67/-3.89` at `chainLen=1` to roughly `-5.28/-5.37` at `chainLen>=2`, but mature-chain compounding cannot be the root cause because `chainLen=1` match states are both the large majority of match states and already severely biased toward resonance continuation.

This also explains why previous high-chain cap/taper diagnostics reduced but did not remove fixed-resonance dominance: they acted on an amplifier while leaving the first matching continuation boundary intact.

## Executive decision

Do **not** change production yet and do **not** promote `HUMAN_CANDIDATE_02`.

Do not return to slope tuning, high-chain caps, mismatch-renewal tuning, or the rejected same-signal/mismatch chain-exit rule.

### Single current priority

**Isolate the causal value of the first matching continuation reward at `chainLen=1`.**

The next non-production common-RNG diagnostic should start only from active-chain `chainLen=1` states whose offered resonance signal matches the active chain, and compare production against a control where **only the first matching continuation bonus is neutralized**, while chain retention, route base reward, Energy, Threat, anomaly behavior, extraction policy and exogenous randomness remain production-identical.

The output gate should remain the same 2–3 decision branch comparison: switch/resonance win rates and mean secured-bank difference.

- If neutralizing only that first continuation bonus materially closes the approximately `-3.67/-3.89` gap, the immediate continuation reward is the primary balance lever.
- If a large gap remains, stop reward tuning and isolate the value of retaining the accumulated chain state through extraction/risk interaction.

## Cross-Director implications

- **Systems:** strategic clearance remains blocked; the causal target is now first matching continuation, not generic renewal or mature-chain-only compounding.
- **PX:** a matching offer can already collapse practical choice at `chainLen=1`; future legibility work must not assume only mature chains create lock-in.
- **Progression:** permanent signal affinity, first-match bonuses, chain insurance, match-frequency boosts and resonance-specific multipliers remain blocked until the core clears.
- **Technical:** reporting instrumentation is non-production and CI-verified. TQ-019 and physical iPhone/Safari verification remain open.

## Safety / scope

- Production gameplay: unchanged.
- UI/save format: unchanged.
- `HUMAN_CANDIDATE_01`: unchanged.
- No human-fun claim.
- No large refactor.
