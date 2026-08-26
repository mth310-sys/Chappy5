# EXECUTIVE_FINDING_EX017 — High-chain cap is the leading structural candidate, but production clearance remains pending

## Status

`CANDIDATE_SUPPORTED / ROBUSTNESS_GATE_PENDING`

## Severity

**4**

## Confidence

- Benchmark execution and measured aggregate result: **HIGH**
- Design inference / production suitability: **MEDIUM-HIGH**
- Human feel: **UNVERIFIED**

## Verification Type

`OBSERVED + SIMULATED`

No result in this finding is `HUMAN_VERIFIED`.

## Evidence

Executive re-read the latest `main` and full `README.md`, then integrated the latest Director state:

- Systems `GS-015` narrowed the next test to high-chain-only diminishing return while preserving the first resonance continuation reward `+5`.
- PX rebased its reward-feel gate onto the same high-chain branch: preserve the first acceleration event; if a cap wins mechanically, align explanatory copy rather than restoring excess economic value.
- Technical has closed the route-order tie-bias issue and the production/strategy parity guard is active; real iPhone/Safari behavior remains unverified.
- Progression remains blocked until the core strategy is cleared; the visible A/B/C causal rule remains a useful future progression vocabulary, not yet a persistent system.

Executive added `tests/high-chain-probe.mjs` and CI execution without modifying production `game.js` or `HUMAN_CANDIDATE_01`.

GitHub Actions `ECHO DRIFT Regression` run `32926203552` completed successfully on head `5c159b48f0b101c0669a61ef8767dcdf78accbd9`:

- deterministic state regression: PASS
- strategy parity guard: PASS
- deterministic strategy benchmark: PASS
- high-chain structural probe: PASS

The probe uses visible-signal causal chain exit, state-conditioned extraction, seeds `101/202/303/404`, 10,000 Runs per seed, and preserves the first resonance continuation reward `+5`.

### Baseline — current high-chain growth `+5,+7,+9...`

- fixed calm: **10.753175 bank/Run**
- fixed deep: **8.954900**
- fixed resonance: **12.106575**
- one-step: **11.005725**
- future-aware: **12.003300**
- chain-aware: **12.029350**

Best contextual minus best fixed: **-0.077225 bank/Run**.

### Taper after first continuation — `+5,+6,+7...`

- fixed calm: **10.753175**
- fixed deep: **8.954900**
- fixed resonance: **11.885825**
- one-step: **10.964800**
- future-aware: **11.889375**
- chain-aware: **11.829450**

Best contextual minus best fixed: **+0.003550 bank/Run**.

This is effectively a near-tie at the current simulation resolution and is not a sufficient reason to change production.

### Cap after first continuation — `+5,+5,+5...`

- fixed calm: **10.753175**
- fixed deep: **8.954900**
- fixed resonance: **11.727750**
- one-step: **10.934250**
- future-aware: **11.809450**
- chain-aware: **11.716750**

Best contextual minus best fixed: **+0.081700 bank/Run**, approximately **+0.70%** over fixed resonance.

The future-aware policy remains genuinely mixed under the cap:

- calm: **9.35%**
- deep: **34.04%**
- resonance: **56.61%**

The cap therefore clears the first aggregate structural simulation gate: it preserves the first `+5`, leaves calm/deep fixed baselines unchanged, and makes a contextual mixed policy outperform all fixed route policies in this test set.

However, fixed resonance has lower collapse rate (**46.18%**) than future-aware (**51.50%**). The contextual policy earns more bank/Run by accepting a different risk profile, which is strategically interesting but still requires robustness and human-feel verification.

## Integrated contradiction resolution

The earlier global resonance-slope approach is still rejected. The cap is not equivalent to slope micro-tuning: it leaves the first continuation exactly unchanged and touches only the rare high-chain tail.

The taper branch is also rejected as a production candidate for now because its measured contextual lead is only `0.00355 bank/Run`; promoting that would repeat the earlier mistake of fitting production to tiny simulator rank changes.

The cap branch is materially stronger than the taper branch, but its `~0.70%` aggregate advantage is still not enough by itself to call the game strategically solved. The benchmark policies are approximations of player strategy, not proofs of optimal play.

## Recommended Action

**Current single highest priority:** validate the visible-signal + high-chain-cap candidate for stability across held-out deterministic seeds / per-seed results before touching production.

If the contextual lead survives that robustness gate without simply moving the fixed optimum elsewhere, Executive may create a new controlled playable candidate with exactly two mechanical changes:

1. active chain preservation/break becomes causally readable from A/B/C signal;
2. resonance continuation remains `+5` on the first repeat and is capped at `+5` on later repeats.

At that point, explanatory UI copy must be aligned so it does not falsely claim unbounded acceleration, and human verification should remain small: existing decision tension / collapse ownership / immediate replay questions plus observation of whether A/B/C chain preservation is predictable and whether the first `+5` still feels rewarding.

Until that robustness gate passes:

- do not modify production `game.js`;
- keep `HUMAN_CANDIDATE_01` frozen;
- do not resume slope sweeps or fine threshold searches;
- do not add progression/content volume;
- do not claim the cap is more fun.
