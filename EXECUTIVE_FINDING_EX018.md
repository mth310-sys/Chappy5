# EX-018 — Corrected RNG evidence supersedes high-chain promotion; evaluator adequacy becomes the next gate

- **Director:** Executive Game Director
- **Status:** STRATEGY_CLEARANCE_BLOCKED / EVALUATOR_ADEQUACY_GATE
- **Severity (1-5):** 4
- **Confidence:** HIGH for corrected benchmark facts / MEDIUM-HIGH for next-step design inference
- **Verification Type:** OBSERVED + SIMULATED
- **Last updated:** 2026-08-26

## Executive Integration

The pre-TQ-018 EX-017 result is superseded. After per-Run RNG isolation, the visible-signal causal exit plus high-chain `+5` cap no longer makes a contextual policy beat fixed resonance. Under the corrected deterministic probe, fixed resonance remains ahead:

- production high-chain: fixed resonance `12.095225` vs best recorded contextual `11.856475` (`-0.238750`)
- taper after first `+5`: fixed resonance `11.905175` vs contextual `11.733650` (`-0.171525`)
- cap after first `+5`: fixed resonance `11.732800` vs contextual `11.635775` (`-0.097025`)

GitHub Actions `ECHO DRIFT Regression` run `32927965054` completed successfully after the RNG correction. TQ-018 is therefore promoted to PASS. The old EX-017 `+0.70%` contextual advantage must not be used for promotion.

The corrected result still contains useful structural evidence: limiting mature-chain compounding consistently narrows fixed-resonance dominance, so mature-chain growth is a contributor, but not the whole cause. Further cap/taper micro-tuning is now rejected as low-value simulator fitting.

## Cross-Director Synthesis

### Game Systems
`GS-015` correctly withdraws the high-chain candidate from clearance and recommends isolating the remaining advantage, especially the opportunity cost of preserving an active chain versus switching to calm/deep. Severity remains 4.

### Technical & Quality
`TQ-018` demonstrated that benchmark methodology can reverse an Executive balance conclusion. The per-Run RNG isolation is now CI-verified and must remain an invariant. Production was not changed.

### Player Experience
`PX-015` correctly closes the high-chain reward-feel branch for the current candidate. Human time should not be spent evaluating a candidate that lacks Systems clearance. Existing hidden chain-exit legibility concerns remain relevant if visible-signal causality returns in a later cleared candidate.

### Progression & Content
Persistent progression remains blocked. The useful future progression vocabulary remains decision semantics—signal preservation, risk horizon, extraction timing—not resonance multipliers or high-chain ceiling increases.

### Human feedback
No new `HUMAN_VERIFIED` fun evidence exists. `HUMAN_CANDIDATE_01` remains frozen.

## New Executive Finding

Before changing another production rule, the studio must verify that the contextual policy used to judge structural candidates is aligned with the actual optimization objective.

The existing `one-step`, `future-aware`, and `chain-aware` route policies use hand-tuned heuristic weights. They are useful probes, but a fixed strategy beating them does not by itself prove that the game structurally rewards fixed play. A contextual evaluator that is poorly aligned with secured `bank/Run` can underperform even when meaningful switching opportunities exist.

Therefore Executive added one narrow non-production diagnostic to `tests/high-chain-probe.mjs`: `bank-ev`. This policy chooses the offered route with the highest exact one-step expected secured-bank value using the same threat, gain, anomaly and extraction objective already used by the probe. It does not change production rules, reward curves, save data, UI or the frozen playable.

This diagnostic is intentionally limited. It is not claimed to be optimal play and it does not fully price multi-step chain continuation. Its purpose is to answer a narrower question: **does a route policy directly aligned to the measured bank objective materially change the conclusion before the studio invents another structural rule?**

Commit: `03b8744ea5e928424ce57e099f82deedef6c0c47` (`Add objective-aligned bank EV policy to chain probe`).

At the time of this finding, `ECHO DRIFT Regression` run `32930271501` is still in progress. No numerical result from `bank-ev` is promoted until CI completes successfully.

## Current Priority — ONE GOAL

**Determine whether fixed-resonance dominance survives an objective-aligned contextual route policy under the corrected per-Run RNG benchmark.**

Decision rule:

1. If `bank-ev` remains materially below fixed resonance across the corrected probe, evaluator mismatch becomes a weaker explanation and the next structural investigation may target active-chain switching opportunity cost.
2. If `bank-ev` materially closes or reverses the gap, do not alter production balance yet; first improve the contextual evaluator so future candidate judgments are not based on heuristic-policy weakness.
3. Do not resume slope sweeps, cap-value sweeps, or other fine numerical searches.
4. Do not modify `game.js` or promote a new human candidate until this gate is resolved.

## Production Decision

- `game.js`: unchanged.
- `HUMAN_CANDIDATE_01`: unchanged.
- visible-signal causal exit: simulation candidate only, not production.
- high-chain cap/taper: not cleared.
- persistent progression: blocked.
- human-fun claim: unauthorized / `UNVERIFIED`.

## Recommended Action

On the next Executive integration, read the completed CI output for run `32930271501`. If successful, compare `bank-ev` against fixed calm/deep/resonance under all three high-chain modes, with special attention to the corrected cap branch. Update the dashboard from evidence, not from the superseded EX-017 aggregate.