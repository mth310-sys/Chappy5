# GS-019 — First-match pair cashout separates reward beat from carried maturity

- **Status:** STRUCTURAL_CANDIDATE_SUPPORTED / NOT_PRODUCTION_CLEARED
- **Severity:** 4
- **Confidence:** HIGH for the measured deterministic result; MEDIUM for production design suitability because one of four seeds still favors fixed resonance and no human play has occurred
- **Verification Type:** OBSERVED + SIMULATED
- **HUMAN_VERIFIED:** No

## Evidence

README.md and the latest main were re-read before this probe. Production remains unchanged.

A new non-production full-run benchmark, `tests/first-match-structural-benchmark.mjs`, compares current production against one structural candidate only. The candidate keeps the current first matching resonance reward beat (+5), but after that first match it closes the matched chain instead of automatically carrying `chainLen=2` into future decisions. This is a structural reward/state separation probe, not scalar coefficient tuning.

The benchmark uses four deterministic base seeds (101/202/303/404), 10,000 runs per seed, per-run RNG isolation, Fisher-Yates route ordering, production-aligned route/economy/threat/anomaly/extraction/chain-break rules, and the same state-conditioned extraction rule for all compared policies. A dedicated parity guard covers the candidate boundary.

GitHub Actions `ECHO DRIFT Regression` run `32950894032` completed successfully. State regression, production parity, first-match parity, all existing strategy probes, and the new structural benchmark passed.

### Production reproduction

| Policy | Bank / Run | Collapse |
| --- | ---: | ---: |
| fixed resonance | 12.038100 | 46.8700% |
| future-aware | 11.659650 | 52.7600% |
| one-step | 10.906775 | 53.5050% |
| fixed calm | 10.878700 | 39.1925% |
| fixed deep | 8.904725 | 49.9000% |

Production therefore still reproduces the known fixed-resonance lead.

### Pair-cashout structural candidate

| Policy | Bank / Run | Collapse |
| --- | ---: | ---: |
| future-aware | **11.246950** | 52.4250% |
| fixed resonance | **11.139925** | 45.3575% |
| fixed calm | 10.878700 | 39.1925% |
| one-step | 10.733250 | 53.2100% |
| fixed deep | 8.904725 | 49.9000% |

Aggregate `future-aware - fixed resonance = +0.107025 bank/Run`, approximately +0.96% relative to fixed resonance.

The future-aware route mix under the candidate remains genuinely mixed rather than collapsing to another fixed route:

- calm: 9.75%
- deep: 42.53%
- resonance: 47.72%

Seed-level bank/Run comparison:

| Seed | fixed resonance | future-aware | future-aware - fixed resonance |
| --- | ---: | ---: | ---: |
| 101 | 11.2345 | 11.1786 | -0.0559 |
| 202 | 11.0121 | 11.2588 | +0.2467 |
| 303 | 11.0683 | 11.2492 | +0.1809 |
| 404 | 11.2448 | 11.3012 | +0.0564 |

The contextual policy therefore wins 3/4 measured seeds, not all four. This is materially stronger than prior micro-margin slope/cap results, but it is not yet robust enough for production clearance.

The candidate also changes the risk profile rather than simply granting free value: future-aware collapse is 52.43% versus fixed resonance 45.36%. The mixed policy earns the higher expected bank while accepting more collapse risk, which is directionally compatible with a push-your-luck choice rather than a strictly dominant safer strategy.

## Interpretation

EX-022's causal split is supported at full-run scale: keeping the first-match reward beat while preventing that same tap from automatically escalating future chain maturity can reverse the aggregate fixed-resonance lead without moving the optimum to fixed calm/deep and without scalar coefficient searching.

However, `pairCashout` is deliberately coarse. It effectively makes the first successful matching pair complete/cash out the current chain instead of supporting the current long-chain growth semantics. That may be a useful game structure, or it may damage the resonance fantasy and feedback loop. Systems simulation cannot decide that human experience question.

The one-seed reversal also means the candidate must not be described as universally robust.

## Recommended Action

1. **Do not change production or HUMAN_CANDIDATE_01 in Systems.**
2. Do not return to +1/+2/+3 coefficient tuning.
3. Before Executive promotes this structure to a Controlled Playable, run one robustness pass using held-out seeds and include the strongest chain-aware/contextual evaluator under the same pair-cashout semantics.
4. Require the candidate to remain above fixed resonance without shifting the optimum to fixed calm/deep and without relying on a sub-percent single-seed accident.
5. If robustness survives, hand the structural semantics to Executive/PX: the human question becomes whether a successful first match feels like a satisfying **pair completion/cashout** rather than an arbitrary destruction of a chain.

Until that robustness and human gate exists, strategy clearance remains blocked.
