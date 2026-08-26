# GS-018 — First matching continuation reward is a primary causal driver, but +3 remains too sticky

- **Status:** `STRATEGY_CLEARANCE_BLOCKED / FIRST_MATCH_REWARD_CAUSAL_BUT_PLUS3_INSUFFICIENT`
- **Severity:** 4
- **Confidence:** HIGH for measured causal direction / MEDIUM-HIGH for design interpretation
- **Verification Type:** `OBSERVED + SIMULATED` (`HUMAN_VERIFIED`: no)

## Evidence

`tests/first-match-continuation-probe.mjs` isolates the exact boundary identified by EX-021:

- active chain exists,
- `chainLen === 1`,
- the offered resonance signal matches the active chain,
- forced resonance continuation is compared with the best calm/deep switch over 2- and 3-decision common-RNG horizons.

The probe samples **26,470** production-equivalent matching `chainLen=1` states, the same subset previously exposed by the resonance-maturity analysis.

A dedicated parity guard checks the probe's production path against current `game.js`. GitHub Actions run `32945940623` completed successfully with state regression, strategy parity, first-match parity, and all existing decision probes passing.

### Production baseline

| Horizon | Switch wins | Resonance wins | Mean `switch - resonance` bank |
|---|---:|---:|---:|
| 2 decisions | 8.90% | 59.36% | **-3.67102** |
| 3 decisions | 11.93% | 51.34% | **-3.89082** |

### Zero-bonus causal bound

The first diagnostic suppresses only the immediate `+5` reward on the first matching continuation. ChainLen still advances from 1 to 2, the chain signal remains intact, and all later production rewards/mechanics are unchanged.

| Horizon | Switch-win delta | Resonance-win delta | Mean-bank delta | Derived diagnostic mean |
|---|---:|---:|---:|---:|
| 2 decisions | **+27.3291 pt** | **-33.6947 pt** | **+3.79490** | **+0.12388** |
| 3 decisions | **+17.6011 pt** | **-23.7061 pt** | **+3.41054** | **-0.48028** |

Derived zero-bonus win rates are approximately:

- 2 decisions: switch **36.23%**, resonance **25.66%**.
- 3 decisions: switch **29.53%**, resonance **27.64%**.

Removing only the first immediate reward therefore more than closes the 2-decision mean gap and reduces the 3-decision disadvantage by about **87.7%**. This confirms that the first matching reward is a major causal source of the production lock-in.

### One coarse +3 candidate

To avoid another dense coefficient sweep, only one non-zero candidate was tested: reduce the first matching continuation reward from `+5` to `+3`, with all later continuation rewards and all other production mechanics unchanged.

Relative to production, `+3` produced:

| Horizon | Switch-win delta | Resonance-win delta | Mean-bank delta |
|---|---:|---:|---:|
| 2 decisions | **+5.3230 pt** | **-10.2456 pt** | **+1.53411** |
| 3 decisions | **+3.5172 pt** | **-7.5179 pt** | **+1.38334** |

Derived `+3` candidate results:

| Horizon | Switch wins | Resonance wins | Mean `switch - resonance` bank |
|---|---:|---:|---:|
| 2 decisions | **14.22%** | **49.11%** | **-2.13691** |
| 3 decisions | **15.45%** | **43.82%** | **-2.50748** |

So `+3` meaningfully weakens the lock-in but still leaves a large resonance advantage over both horizons. It is **not** a strategy-clear candidate.

A simple reward-scale check explains why this boundary is structurally large. Before anomaly effects:

- resonance base gain averages about **3**,
- production first matching continuation adds **+5**, so it averages about **8** immediate haul,
- the coarse `+3` candidate still averages about **6** immediate haul,
- fixed deep averages about **4.5** base haul.

The first matching step therefore remains strongly front-loaded even after the coarse reduction.

## Interpretation

The first transition from `chainLen=1` to a matching continuation is now confirmed as a **primary causal boundary**, not merely a correlated symptom. This also explains why high-chain caps/tapers failed: they preserved the first `+5` entirely.

However, the `+3` result shows that solving the game by repeatedly shaving this coefficient is not justified. The first reward explains a large portion of the lock-in, but even after a meaningful reduction there is substantial residual value from the resulting chain state and future continuation opportunities.

The zero-bonus diagnostic is an intentional causal bound, not a production proposal. It may overcorrect the first 2-decision comparison and could damage the reward feeling of a successful match. Likewise, `+3` should not be promoted merely because it is better than `+5`.

## Recommended Action

**Stop first-match reward coefficient tuning here. Do not test +2/+1 or resume fine-grained slope searches.** That would risk fitting production to simulator crossover points rather than improving the game.

Next Systems work should isolate the residual **post-first-match chain maturity / future-option value** with one narrow common-RNG diagnostic. Recommended comparison under the same zero immediate first-match reward:

1. normal result: matching continuation advances the chain state from `chainLen=1` to `chainLen=2`;
2. diagnostic result: the same first match preserves the signal but normalizes the carried state back to `chainLen=1` after the step.

All immediate haul, Threat, EN, anomaly, extraction, collapse, route generation and external RNG should remain identical. This directly measures how much of the remaining 3-decision `-0.48028` comes from carrying the more mature chain state into future decisions.

- If that residual largely collapses, Executive should treat **first-match reward + resulting maturity-state value** as a combined structural boundary rather than searching for a magic numeric bonus.
- If the residual remains, stop reward-side investigation and decompose extraction/policy state value instead.

Any eventual production candidate or Controlled Playable remains an Executive decision.

## Safety / scope

- Production `game.js`: unchanged.
- `HUMAN_CANDIDATE_01`: unchanged.
- No UI/save-format changes.
- No human-fun claim.
- All results are `SIMULATED`, not `HUMAN_VERIFIED`.
- The probe has a dedicated production-parity guard and CI-success evidence.
