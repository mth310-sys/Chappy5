# GS-019 — First-match pair cashout separates reward beat from carried maturity

- **Status:** STRUCTURAL_CANDIDATE_SUPPORTED / HELD_OUT_AGGREGATE_REPLICATED / NOT_PRODUCTION_CLEARED
- **Severity:** 4
- **Confidence:** HIGH for the measured deterministic aggregate result; MEDIUM for production design suitability because seed-level dominance is inconsistent and no human play has occurred
- **Verification Type:** OBSERVED + SIMULATED
- **HUMAN_VERIFIED:** No

## Evidence

README.md and the latest main were re-read before this update. Production remains unchanged.

`tests/first-match-structural-benchmark.mjs` compares current production against one structural candidate only. `pairCashout` keeps the current first matching resonance reward beat (+5), but after that first match closes the matched chain instead of automatically carrying `chainLen=2` into future decisions. This is structural reward/state separation, not scalar coefficient tuning.

The benchmark uses 10,000 runs per seed, per-run RNG isolation, Fisher-Yates route ordering, production-aligned route/economy/threat/anomaly/extraction/chain-break rules, and the same state-conditioned extraction rule for all compared policies. Base seeds are 101/202/303/404. Held-out seeds are 505/606/707/808. The cohorts are now protected by CI against overlap.

GitHub Actions `ECHO DRIFT Regression` run `32952608078` completed successfully for the held-out benchmark commit. The subsequent cohort-independence guard run `32954891395` also completed successfully.

### Base cohort

Production still reproduces the known fixed-resonance lead:

- fixed resonance: **12.038100 bank/Run**
- future-aware: **11.659650 bank/Run**

Under `pairCashout`:

- future-aware: **11.246950 bank/Run**
- fixed resonance: **11.139925 bank/Run**
- fixed calm: **10.878700 bank/Run**
- fixed deep: **8.904725 bank/Run**

Base aggregate `future-aware - fixed resonance = +0.107025 bank/Run` (~+0.96%). Future-aware route mix remains mixed: calm 9.75%, deep 42.53%, resonance 47.72%. Seed-level future-aware wins 3/4 (202/303/404) and loses seed 101.

### Held-out cohort

Production again reproduces fixed-resonance dominance:

- fixed resonance: **12.074325 bank/Run**
- future-aware: **11.568700 bank/Run**

Under `pairCashout`:

- future-aware: **11.202675 bank/Run**
- fixed resonance: **11.145000 bank/Run**
- fixed calm: **10.831400 bank/Run**
- fixed deep: **8.878475 bank/Run**

Held-out aggregate `future-aware - fixed resonance = +0.057675 bank/Run` (~+0.52%). Future-aware route mix remains mixed: calm 9.70%, deep 42.47%, resonance 47.83%.

Held-out seed deltas (`future-aware - fixed resonance`):

| Seed | Delta bank/Run | Winner |
| --- | ---: | --- |
| 505 | -0.0372 | fixed resonance |
| 606 | -0.0818 | fixed resonance |
| 707 | +0.1682 | future-aware |
| 808 | +0.1815 | future-aware |

Across all eight measured seeds, future-aware wins 5/8. The direction therefore replicates at cohort aggregate level, but not at seed-majority level in held-out alone (2/4).

Risk remains meaningfully different: held-out future-aware collapse is **52.5125%** versus fixed resonance **45.24%**. The contextual policy is not simply a safer dominant route; it accepts substantially more collapse risk for higher expected bank.

## Interpretation

The held-out result strengthens the causal design direction from EX-022: separating the first-match +5 reward beat from automatic carried maturity can remove aggregate fixed-resonance dominance without transferring the optimum to fixed calm/deep. The route mix is strikingly stable between base and held-out cohorts, which is a useful sign that the candidate changes decision structure rather than merely exploiting one seed's route composition.

However, the bank advantage shrinks from +0.107025 to +0.057675 bank/Run and held-out seed wins are only 2/4. Therefore this is **not evidence of universal strategy dominance** and is not enough for Systems to declare production clearance. The correct conclusion is narrower: pairCashout is the first structural branch in this experiment whose aggregate mixed-policy advantage reproduces on an independent seed cohort while preserving a genuinely mixed route policy.

`pairCashout` also changes the resonance fantasy from growing a long chain toward completing/cashing out matching pairs. Systems simulation cannot determine whether that semantic change feels satisfying or destructive to a human player.

## Recommended Action

1. **Do not change production or HUMAN_CANDIDATE_01 from Systems.**
2. Do not resume +1/+2/+3 reward coefficient searches or add more structural variants before the experiment cutoff.
3. Treat pairCashout as a **Controlled Playable-worthy candidate for Executive/PX consideration**, not as production-cleared balance.
4. If Executive promotes it, freeze one candidate implementation and test the human questions already identified by PX: whether first match ending feels like pair completion/cashout rather than chain destruction, and whether the following three-way choice feels like a fresh decision.
5. Preserve the measured risk distinction in any playable; do not compensate the higher contextual collapse rate with unmeasured safety buffs.
6. Keep strategy clearance blocked until HUMAN_VERIFIED evidence and, if production promotion is later considered, broader robustness evidence beyond these eight deterministic seeds.
