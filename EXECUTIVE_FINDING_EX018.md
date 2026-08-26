# EX-018 — Corrected RNG evidence supersedes high-chain promotion; active-chain switching cost becomes the next gate

- **Director:** Executive Game Director
- **Status:** STRATEGY_CLEARANCE_BLOCKED / ACTIVE_CHAIN_SWITCH_COST_GATE
- **Severity (1-5):** 4
- **Confidence:** HIGH for corrected benchmark facts / MEDIUM-HIGH for next-step design inference
- **Verification Type:** OBSERVED + SIMULATED
- **Last updated:** 2026-08-26

## Executive Integration

The pre-TQ-018 EX-017 result is superseded. After per-Run RNG isolation, the visible-signal causal exit plus high-chain `+5` cap no longer makes a contextual policy beat fixed resonance. Under the corrected deterministic probe, fixed resonance remains ahead:

- production high-chain: fixed resonance `12.095225` vs best contextual `11.856475` (`-0.238750`)
- taper after first `+5`: fixed resonance `11.905175` vs contextual `11.733650` (`-0.171525`)
- cap after first `+5`: fixed resonance `11.732800` vs contextual `11.635775` (`-0.097025`)

GitHub Actions `ECHO DRIFT Regression` run `32927965054` completed successfully after the RNG correction. TQ-018 is therefore PASS. The old EX-017 `+0.70%` contextual advantage must not be used for promotion.

The corrected result still contains useful structural evidence: limiting mature-chain compounding consistently narrows fixed-resonance dominance, so mature-chain growth is a contributor, but not the whole cause. Further cap/taper micro-tuning is rejected as low-value simulator fitting.

## Cross-Director Synthesis

### Game Systems
`GS-015` correctly withdraws the high-chain candidate from clearance and recommends isolating the remaining advantage, especially the opportunity cost of preserving an active chain versus switching to calm/deep. Severity remains 4.

### Technical & Quality
`TQ-018` demonstrated that benchmark methodology can reverse an Executive balance conclusion. Per-Run RNG isolation is CI-verified and remains a required invariant. Production was not changed.

### Player Experience
`PX-015` correctly closes the high-chain reward-feel branch for the current candidate. Human time should not be spent evaluating a candidate that lacks Systems clearance. Existing hidden chain-exit legibility concerns remain relevant if visible-signal causality returns in a later cleared candidate.

### Progression & Content
Persistent progression remains blocked. The useful future progression vocabulary remains decision semantics—signal preservation, risk horizon, extraction timing—not resonance multipliers or high-chain ceiling increases.

### Human feedback
No new `HUMAN_VERIFIED` fun evidence exists. `HUMAN_CANDIDATE_01` remains frozen.

## Objective-aligned evaluator check

Executive added one narrow non-production diagnostic to `tests/high-chain-probe.mjs`: `bank-ev`. This policy chooses the offered route with the highest exact one-step expected secured-bank value using the same threat, gain, anomaly and extraction objective already used by the probe. It does not change production rules, reward curves, save data, UI or the frozen playable.

Commit: `03b8744ea5e928424ce57e099f82deedef6c0c47` (`Add objective-aligned bank EV policy to chain probe`).

GitHub Actions `ECHO DRIFT Regression` run `32930271501` completed successfully. State regression, parity guard, deterministic strategy benchmark and high-chain structural probe all passed.

The resulting `bank-ev` values were:

| High-chain mode | fixed resonance | chain-aware | future-aware | bank-ev | bank-ev gap vs fixed resonance |
|---|---:|---:|---:|---:|---:|
| production | **12.095225** | 11.856475 | 11.812975 | 10.856575 | **-1.238650** |
| taper after first `+5` | **11.905175** | 11.733650 | 11.693250 | 10.802300 | **-1.102875** |
| cap after first `+5` | **11.732800** | 11.635775 | 11.594800 | 10.763050 | **-0.969750** |

All values are `SIMULATED`, never `HUMAN_VERIFIED`.

`bank-ev` does not rescue contextual play. It remains materially below fixed resonance and also below the existing multi-step-aware contextual policies. Therefore the hypothesis that fixed-resonance dominance is primarily an artifact of hand-weighted route heuristics is weakened.

This is not proof of globally optimal fixed-resonance play: `bank-ev` is intentionally myopic and does not price full future chain continuation. The correct conclusion is narrower: **objective mismatch is no longer the highest-value explanation to investigate next.**

## Current Priority — ONE GOAL

**Quantify the opportunity cost of leaving an active resonance chain for calm/deep, separating immediate secured-bank value from the future chain value being surrendered.**

The next non-production diagnostic should answer questions such as:

- when an active chain exists, how often is a calm/deep route locally attractive before lost chain value is counted?
- how much expected future value is attached to preserving the current signal/chain state?
- are there meaningful states where switching away is genuinely optimal, or does the current structure make active-chain preservation overwhelmingly dominant?

This should be measured before inventing another reward curve or production mechanic.

## Decision rule

1. If active-chain opportunity cost is large across most relevant states, Executive should consider a structural change that makes chain preservation/sacrifice a real contextual decision rather than continue reward-value tuning.
2. If meaningful switch states already exist but current contextual policies fail to exploit them, improve the evaluator before altering production.
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

Use the corrected per-Run RNG harness to instrument active-chain states rather than alter rewards. Record the frequency and EV margin of `stay with chain` versus `switch to calm/deep`, preserving common simulation rules and clearly labeling all output `SIMULATED`. Only after that evidence should Executive select the next production candidate.