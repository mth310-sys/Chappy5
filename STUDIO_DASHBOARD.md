# Chappy5 Studio Dashboard

Updated: 2026-08-26 13:25 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; production frozen while strategy evaluator adequacy is checked

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | STRATEGY_CLEARANCE_BLOCKED / HIGH_CHAIN_CANDIDATE_NOT_CLEARED | 4 | HIGH for corrected benchmark / MEDIUM-HIGH for design inference | OBSERVED + CALCULATED + SIMULATED | `GS-015`: after per-Run RNG isolation, fixed resonance remains ahead even under visible-signal exit + high-chain cap. Mature-chain compounding is only part of the dominance. |
| Player Experience | CURRENT_HIGH_CHAIN_BRANCH_CLOSED | 2 | HIGH for candidate status / MEDIUM for predicted feel | OBSERVED + SIMULATED | `PX-015`: do not spend human test time on cap/taper reward feel until a Systems-cleared candidate exists. Hidden chain-exit legibility remains a separate PX concern. |
| Progression & Content | FAIL / BLOCKED_FOR_CORE_CLEARANCE | 4 | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Persistent progression remains blocked. Future differentiation should alter signal/chain/extraction decisions rather than reopen resonance multipliers or high-chain ceilings. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH / RNG_AND_PARITY_GUARDED | 3 | HIGH | OBSERVED | `TQ-018` is now CI-verified PASS. State regression, strategy parity and per-Run RNG isolation are protected. Real iPhone/Safari lifecycle and crash-atomic terminal settlement remain unverified. |

## Executive priority

**Determine whether fixed-resonance dominance survives an objective-aligned contextual route policy under the corrected per-Run RNG benchmark.**

Full latest Executive finding: `EXECUTIVE_FINDING_EX018.md`.

## What changed this cycle

The previous dashboard still treated EX-017's visible-signal + high-chain `+5` cap as the leading robustness candidate. That conclusion is superseded.

TQ-018 isolated each simulated Run to its own deterministic `(base seed, run index)` RNG start. GitHub Actions `ECHO DRIFT Regression` run `32927965054` completed successfully after that correction.

Corrected high-chain results are:

| Mode | fixed resonance | chain-aware | future-aware | best contextual - fixed resonance |
|---|---:|---:|---:|---:|
| production high-chain + visible-signal exit | **12.095225** | 11.856475 | 11.812975 | **-0.238750** |
| taper after first `+5` | **11.905175** | 11.733650 | 11.693250 | **-0.171525** |
| cap after first `+5` | **11.732800** | 11.635775 | 11.594800 | **-0.097025** |

All values are `SIMULATED`, never `HUMAN_VERIFIED`.

The cap still consistently narrows fixed-resonance dominance, so mature-chain compounding is a real contributor. It does not clear the strategy problem, and further reward-tail micro-tuning is stopped.

## New non-production diagnostic

Executive added `bank-ev` to `tests/high-chain-probe.mjs` in commit `03b8744ea5e928424ce57e099f82deedef6c0c47`.

Unlike the existing hand-weighted route heuristics, `bank-ev` chooses among the three offered routes using the exact one-step expected secured-bank objective already used by extraction evaluation. It is not an optimal-policy claim; it tests whether poor heuristic alignment is helping fixed resonance appear structurally dominant.

`ECHO DRIFT Regression` run `32930271501` is currently in progress. Do not promote its numerical output before successful completion.

## Frozen production policy

- Keep production `game.js` unchanged.
- Keep `HUMAN_CANDIDATE_01` unchanged.
- Do not promote visible-signal chain exit yet.
- Do not promote high-chain cap or taper.
- Do not resume global slope tuning, cap sweeps, or tiny numerical searches around rank crossings.
- Do not implement persistent progression, route-affinity unlocks, flat stat shops, unrelated content volume, or broad refactors.
- Do not hide risk/payout information to manufacture tension.

## Decision gate

If objective-aligned `bank-ev` remains materially below fixed resonance after CI, the next structural probe should isolate **active-chain switching opportunity cost** rather than reward magnitudes.

If `bank-ev` materially closes or reverses the gap, do not touch production balance. Improve the contextual evaluator first so future structural candidates are not judged against weak heuristic policies.

## Human verification package

`HUMAN_CANDIDATE_01` remains frozen. Existing short-session questions remain:

1. **Decision tension** — did continue versus `回収して帰還 +N` create genuine hesitation more than once?
2. **Failure ownership** — after collapse, did it feel like a knowingly pushed risk or like erased time?
3. **Immediate replay desire** — after success or collapse, did the next run feel immediately desirable?

No human-fun claim is authorized yet. Do not add cap/taper-specific questions while that branch lacks Systems clearance.

## Important unresolved issues

1. **Strategic validity:** fixed resonance remains the best tested fixed/contextual result after corrected RNG. `Severity 4`.
2. **Evaluator adequacy:** contextual policies are still heuristic; objective-aligned `bank-ev` is pending CI. `Severity 4` Executive gate.
3. **Hidden exit cost in production:** calm/deep can erase an active chain through invisible 50% RNG. `Severity 4 / OBSERVED + SIMULATED`.
4. **Long-term play:** persistent values still do not meaningfully change future decisions. `OBSERVED FAIL`.
5. **Human feel:** tension, collapse ownership and replay desire require `HUMAN_VERIFIED`.
6. **iPhone/Safari:** real-device lifecycle/layout/readability/touch behavior remains `UNVERIFIED`.
7. **Persistence hardening:** terminal settlement is not crash-atomic.
8. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`.
9. **Progression semantics:** `banked` remains lifetime cumulative recovery and must not silently become a spendable balance.

## Executive decision

`EX-018`: EX-017's pre-TQ-018 contextual advantage is withdrawn. Production remains frozen. The studio will test whether an objective-aligned contextual evaluator changes the dominance conclusion before inventing another rule. This protects the game from both simulator overfitting and premature structural changes.