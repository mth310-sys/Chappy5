# Chappy5 Studio Dashboard

Updated: 2026-08-26 16:35 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; production frozen while first matching continuation is isolated

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | STRATEGY_CLEARANCE_BLOCKED / FIRST_MATCH_CONTINUATION_BOUNDARY | 4 | HIGH for measurement / MEDIUM-HIGH for design interpretation | OBSERVED + SIMULATED | `GS-017` + `EX-021`: mismatch renewal is not primary. Matching resonance already strongly dominates at `chainLen=1`; mature chains amplify the gap further. |
| Player Experience | MATCH_CONTINUATION_IS_PRIMARY_PX_BOUNDARY | 4 | HIGH for structural observation / MEDIUM-HIGH for predicted player effect | OBSERVED + SIMULATED | `PX-014`: mismatch states already contain viable switches. The remaining practical-choice risk is matching continuation, now confirmed to be severe even before a mature chain exists. |
| Progression & Content | FAIL / BLOCKED_BY_MATCH_CONTINUATION_CLEARANCE | 4 | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | `P-020`: chain survival/insurance is not a valid long-term reward loop. First-match bonuses, signal affinity and resonance reinforcement must also remain blocked until the core clears. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH / PROBE_PARITY_HARDENED | 3 | HIGH | OBSERVED | Decision-driving probes remain under production parity guards. Reporting-only maturity metrics passed CI. `TQ-019`, terminal crash atomicity and real iPhone/Safari lifecycle remain unresolved. |

## Executive priority

**Isolate the causal value of the first matching resonance continuation reward at `chainLen=1`.**

Full latest Executive finding: `EXECUTIVE_FINDING_EX021.md`.

## What changed this cycle

The mismatch-renewal hypothesis is now demoted. The corrected production-sampled probe shows **69,669 mismatch states** already favor calm/deep switching on average:

- 2 decisions: switch **38.45%** vs resonance **26.07%**, mean `switch - resonance = +0.58843`
- 3 decisions: switch **33.15%** vs resonance **27.02%**, mean `+0.26474`

Executive then exposed the already-added chain-maturity split in CI without changing probe semantics. `ECHO DRIFT Regression` run `32943253035` completed **success**; state regression, parity and every decision probe passed.

The decisive split is the **35,067 signal-match states**:

| Matching state | Samples | Horizon | Switch wins | Resonance wins | Mean `switch - resonance` bank |
|---|---:|---:|---:|---:|---:|
| `chainLen=1` | 26,470 | 2 | 8.90% | 59.36% | **-3.67102** |
| `chainLen=1` | 26,470 | 3 | 11.93% | 51.34% | **-3.89082** |
| `chainLen>=2` | 8,597 | 2 | 12.29% | 57.43% | **-5.28405** |
| `chainLen>=2` | 8,597 | 3 | 13.42% | 56.10% | **-5.36641** |

`chainLen=1` accounts for **75.49% of matching states** and is already heavily biased toward resonance continuation. Mature-chain compounding therefore **amplifies** the problem but is not its root cause. This is consistent with earlier cap/taper probes: limiting high-chain growth narrowed fixed-resonance dominance but never cleared it.

All of these results are `SIMULATED`, not `HUMAN_VERIFIED`.

## Repo work this cycle

- `3e1a2294724edc16b6bbf17a1a647c28586e42df` — add reporting-only wrapper for nested resonance maturity metrics
- `10668cba2f25de466e474a50e4018141230d6f64` — run expanded maturity report in CI
- `a3fc2a08ab8057da8cfd667bd8fc6b12ded9011f` — record `EX-021`

Production `game.js`, UI, save format and `HUMAN_CANDIDATE_01` are unchanged.

## Frozen production policy

- Keep production `game.js` unchanged.
- Keep `HUMAN_CANDIDATE_01` unchanged; do not create Candidate 02 yet.
- Do not return to resonance slope, high-chain cap/taper, mismatch-renewal percentage or same-signal/mismatch micro-tuning.
- Do not add persistent chain insurance, break-rate reduction, signal auto-match, signal affinity, first-match power growth or resonance multipliers.
- Do not hide risk/payout information to manufacture tension.
- Do not spend human-test time on a simulation branch before strategic clearance.

## Decision gate

The next causal question is narrower than the prior renewal gate:

**How much of the `chainLen=1` match penalty comes from the first matching continuation reward itself?**

The next non-production common-RNG diagnostic should sample only active-chain `chainLen=1` states with a matching resonance offer and neutralize **only the first matching continuation bonus**. Chain state retention, base route reward, Energy, Threat, anomaly behavior, extraction and external randomness must remain production-identical.

- If this materially closes the roughly **-3.67 / -3.89** secured-bank gap, the first continuation reward is the primary balance lever.
- If a large gap remains, stop reward tuning and isolate accumulated-state retention plus extraction/risk interaction instead.

## Human verification package

`HUMAN_CANDIDATE_01` remains frozen. Existing short-session questions remain:

1. **Decision tension** — did continue versus `回収して帰還 +N` create genuine hesitation more than once?
2. **Failure ownership** — after collapse, did it feel like a knowingly pushed risk or like erased time?
3. **Immediate replay desire** — after success or collapse, did the next run feel immediately desirable?

If a chain structure later reaches Controlled Playable, observe only whether chain preservation/sacrifice is predictable before tapping and whether a matching continuation still leaves a meaningful alternative.

No human-fun claim is authorized yet.

## Important unresolved issues

1. **Strategic validity:** fixed resonance remains the best tested production-rule strategy. `Severity 4`.
2. **First matching continuation:** already strongly suppresses switching at `chainLen=1`; this is the current primary causal boundary. `Severity 4`.
3. **Mature chain:** worsens the match penalty further but is now treated as an amplifier, not the root cause.
4. **Hidden exit legibility:** calm/deep can erase an active chain through invisible 50% RNG. `Severity 4`, but not the dominant strategic source.
5. **Long-term play:** persistent progression still does not meaningfully change future decisions. `OBSERVED FAIL`.
6. **Human feel:** tension, collapse ownership, replay desire and chain-sacrifice legibility require `HUMAN_VERIFIED`.
7. **iPhone/Safari:** real-device lifecycle/layout/readability/touch behavior remains `UNVERIFIED`.
8. **Route shuffle parity:** production permutation remains non-uniform/engine-dependent until Controlled Playable hardening.
9. **Persistence hardening:** terminal settlement is not crash-atomic.
10. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`.
11. **Progression semantics:** `banked` remains lifetime cumulative recovery and must not silently become a spendable balance.

## Executive decision

`EX-021`: mismatch renewal is not the primary source of resonance stickiness. The dominant boundary is matching continuation, and it is already severe at the first continuation (`chainLen=1`). Production stays frozen. The single next gate is a common-RNG isolation of the first matching continuation reward before any gameplay candidate or human-test promotion.