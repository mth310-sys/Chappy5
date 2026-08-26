# GS-018 — First matching continuation bonus is a primary causal driver of resonance stickiness

- **Status:** `STRATEGY_CLEARANCE_BLOCKED / FIRST_MATCH_BONUS_CAUSAL_DRIVER_CONFIRMED`
- **Severity:** 4
- **Confidence:** HIGH for measured causal direction / MEDIUM-HIGH for design interpretation
- **Verification Type:** `OBSERVED + SIMULATED` (`HUMAN_VERIFIED`: no)

## Evidence

A new deterministic non-production probe, `tests/first-match-continuation-probe.mjs`, isolates the exact boundary identified by EX-021:

- active chain exists,
- `chainLen === 1`,
- the offered resonance signal matches the active chain,
- compare forced resonance continuation against the best calm/deep switch over 2- and 3-decision common-RNG horizons.

The diagnostic changes **one thing only on the first forced resonance step**:

1. `production` — the first matching continuation increments chainLen from 1 to 2 and receives the normal `+5` continuation bonus.
2. `noFirstMatchBonus` — the same continuation still increments chainLen from 1 to 2 and preserves the chain, but that first `+5` reward is suppressed. All later resonance rewards and all other production rules remain unchanged.

A dedicated parity guard verifies the probe's production path against current `game.js`. GitHub Actions run `32945639682` completed successfully with state regression, strategy parity, first-match parity, all existing strategy probes, and the new first-match probe passing.

The probe sampled **26,470** production-equivalent chainLen=1 matching states, exactly matching the previously measured EX-021 maturity subset.

### Production baseline for chainLen=1 matching states

| Horizon | Switch wins | Resonance wins | Mean `switch - resonance` bank |
|---|---:|---:|---:|
| 2 decisions | 8.90% | 59.36% | **-3.67102** |
| 3 decisions | 11.93% | 51.34% | **-3.89082** |

### Effect of suppressing only the first `+5`

| Horizon | Switch-win delta | Resonance-win delta | Mean-bank delta | Derived diagnostic mean |
|---|---:|---:|---:|---:|
| 2 decisions | **+27.3291 pt** | **-33.6947 pt** | **+3.79490** | **+0.12388** |
| 3 decisions | **+17.6011 pt** | **-23.7061 pt** | **+3.41054** | **-0.48028** |

Derived diagnostic win rates are approximately:

- 2 decisions: switch **36.23%**, resonance **25.66%**.
- 3 decisions: switch **29.53%**, resonance **27.64%**.

So removing only the first matching continuation reward more than closes the 2-decision mean gap and reduces the 3-decision mean disadvantage by about **87.7%**. The remaining 3-decision resonance advantage is small relative to production and is consistent with residual chain-state/future continuation value rather than the full production lock-in.

A simple reward-scale calculation explains why this boundary is structurally large. Before anomaly effects:

- resonance base gain averages about **3**,
- the first matching continuation adds **+5**,
- therefore that matching resonance step averages about **8** immediate haul before anomaly,
- fixed deep averages about **4.5** base haul before anomaly.

The first matching resonance step therefore receives a very large immediate premium before any future chain option value is counted.

## Interpretation

This materially strengthens EX-021. The dominant pressure does **not** require a mature chain, and previous diagnostics already showed mismatch renewal is not the primary cause. The first transition from `chainLen=1` to a matching continuation is itself enough to turn a normally contestable three-route decision into a strongly resonance-favored short trajectory.

The result also explains why high-chain caps/tapers did not solve the global fixed-resonance problem: they left this first `+5` untouched.

This does **not** prove that the production bonus should be removed entirely. The `+0` diagnostic is deliberately extreme and may overcorrect the 2-decision boundary or reduce the reward feeling of the first successful match. It proves that the **magnitude of the first matching continuation reward is a real primary tuning boundary**.

## Recommended Action

Do not change production yet and do not resume global resonance-slope micro-tuning.

Next Systems step should test **one coarse, narrow first-match candidate**, not a dense parameter sweep. Recommended diagnostic candidate: reduce only the first matching continuation bonus from **+5 to +3**, while leaving chain creation, later continuation rewards, Threat, EN, anomalies, extraction, chain-break semantics, route generation, and RNG unchanged.

Why +3 is a useful single candidate rather than a micro-sweep:

- it preserves a clear first-match reward event,
- matched resonance would still average about 6 immediate haul before anomaly versus deep's 4.5,
- it moves meaningfully away from the confirmed +5 lock-in boundary without deleting the mechanic,
- it avoids fitting production to tiny simulator rank differences.

Evaluate that one candidate first with the same 26,470-state common-RNG branch probe. Only if it materially restores switch viability should it be promoted into the full deterministic strategy benchmark and held-out seed robustness check. Executive should decide whether any successful candidate becomes a Controlled Playable.

If +3 still leaves a large 2-3 step lock-in, stop reward micro-tuning and investigate the residual chain-state/extraction value. If +3 overcorrects toward trivial switching, the result still bounds the viable design region without requiring a dense search.

## Safety / scope

- Production `game.js`: unchanged.
- `HUMAN_CANDIDATE_01`: unchanged.
- No UI/save-format changes.
- No human-fun claim.
- Result is `SIMULATED`, not `HUMAN_VERIFIED`.
- New probe has a dedicated production-parity guard and CI-success evidence.
