# GS-015 — High-chain-only diminishing returns is structurally narrower than slope tuning

- **Director:** Game Systems Analysis Director
- **Status:** CANDIDATE_FOR_DETERMINISTIC_PROBE
- **Severity (1-5):** 4
- **Confidence:** MEDIUM-HIGH
- **Verification Type:** OBSERVED + CALCULATED
- **Last updated:** 2026-08-26

## Finding

After GS-014 rejected global resonance-slope tuning and EX-016 showed that visible-signal chain exit narrows the fixed-resonance advantage without weakening the opening resonance payoff, the next balance probe should target only mature resonance chains rather than the entire resonance curve.

Current production resonance gives no continuation bonus when a new signal starts, then `+5` on the first successful continuation (`chainLen=2`, slope 2), `+7` at `chainLen=3`, `+9` at `chainLen=4`, and so on. A high-chain-only diminishing-return candidate can therefore preserve the first `+5` continuation exactly and change only rewards from `chainLen>=3`.

This is materially narrower than the rejected global slope sweep: it leaves chain creation and the first visible acceleration untouched, while selectively reducing the long-run compounding that most benefits a policy which keeps choosing resonance.

## Evidence

### OBSERVED

`tests/strategy-benchmark.mjs` mirrors the current production continuation formula as `1 + chainLen * slope`; production slope is 2. EX-016's structural probe keeps that production slope and changes only non-resonance chain exit from hidden 50% RNG to visible signal causality. Under the common-RNG comparison recorded by Executive, the signal-causal candidate improved contextual/chain-aware play but fixed resonance still led by about 0.64%.

GS-014 already showed that changing the slope globally is not robust: reducing the whole curve moves the optimum from fixed resonance toward fixed calm instead of producing a stable mixed-strategy region.

### CALCULATED

With independent A/B/C signals, once a resonance chain has started, reaching `chainLen=2` requires one same-signal continuation (probability 1/3 on the next resonance choice). Reaching `chainLen=3` requires two consecutive same-signal continuations (1/9), and `chainLen=4` requires three (1/27), before accounting for extraction, collapse, Energy exhaustion, or choosing another tone.

Therefore a rule that begins diminishing returns only at `chainLen>=3` acts on a much rarer tail than a global slope change. It is capable of reducing the compounding ceiling while preserving the common early-chain reward event that PX-015 identified as important to perceived acceleration.

This calculation does **not** establish that the candidate fixes the strategy balance. It only establishes that it is a more targeted intervention and explains why it should be tested before any broader reward reduction.

## Recommended Action

Add a non-production deterministic benchmark branch alongside the existing EX-016 visible-signal candidate, using the same seeds, Run count, neutral route ordering, state-conditioned extraction, and common RNG consumption.

Test only a very small set of mature-chain curves; do not resume fine-grained slope searching. Preferred first candidates:

1. **Tail slope 1:** preserve `+5` at `chainLen=2`, then grow by only +1 per additional same-signal continuation (`+6`, `+7`, ...).
2. **Tail cap:** preserve `+5` at `chainLen=2`, then cap subsequent continuation bonus at `+5`.

Compare production hidden-50%, visible-signal-only, and visible-signal + each high-chain candidate. Require fixed calm / fixed deep / fixed resonance / one-step / future-aware / chain-aware under identical conditions. A candidate is not cleared merely because mixed play wins by a tiny margin; it should remain directionally stable across all four seeds and should not simply replace fixed resonance with fixed calm.

Do not change `game.js` or `HUMAN_CANDIDATE_01` until that deterministic probe is complete and Executive integrates the result.

## Human Verification

Not yet applicable. This finding is structural and calculated. If a high-chain candidate later becomes a Controlled Playable, human testing should verify whether the first successful resonance continuation still feels like clear acceleration and whether later chains remain exciting despite reduced economic compounding. Do not label that feeling `HUMAN_VERIFIED` before actual play feedback.
