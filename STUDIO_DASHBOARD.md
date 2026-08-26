# Chappy5 Studio Dashboard

Updated: 2026-08-26 13:29 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; production frozen while active-chain switching cost is isolated

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | STRATEGY_CLEARANCE_BLOCKED / HIGH_CHAIN_CANDIDATE_NOT_CLEARED | 4 | HIGH for corrected benchmark / MEDIUM-HIGH for design inference | OBSERVED + CALCULATED + SIMULATED | `GS-015`: after per-Run RNG isolation, fixed resonance remains ahead even under visible-signal exit + high-chain cap. Mature-chain compounding is only part of the dominance. |
| Player Experience | CURRENT_HIGH_CHAIN_BRANCH_CLOSED | 2 | HIGH for candidate status / MEDIUM for predicted feel | OBSERVED + SIMULATED | `PX-015`: do not spend human test time on cap/taper reward feel until a Systems-cleared candidate exists. Hidden chain-exit legibility remains a separate PX concern. |
| Progression & Content | FAIL / BLOCKED_FOR_CORE_CLEARANCE | 4 | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | Persistent progression remains blocked. Future differentiation should alter signal/chain/extraction decisions rather than reopen resonance multipliers or high-chain ceilings. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH / RNG_AND_PARITY_GUARDED | 3 | HIGH | OBSERVED | `TQ-018` is CI-verified PASS. State regression, strategy parity and per-Run RNG isolation are protected. Real iPhone/Safari lifecycle and crash-atomic terminal settlement remain unverified. |

## Executive priority

**Quantify the opportunity cost of leaving an active resonance chain for calm/deep, separating immediate secured-bank value from the future chain value being surrendered.**

Full latest Executive finding: `EXECUTIVE_FINDING_EX018.md`.

## What changed this cycle

The previous EX-017 visible-signal + high-chain `+5` cap promotion remains withdrawn after TQ-018 per-Run RNG isolation. Corrected high-chain results remain:

| Mode | fixed resonance | chain-aware | future-aware | best contextual - fixed resonance |
|---|---:|---:|---:|---:|
| production high-chain + visible-signal exit | **12.095225** | 11.856475 | 11.812975 | **-0.238750** |
| taper after first `+5` | **11.905175** | 11.733650 | 11.693250 | **-0.171525** |
| cap after first `+5` | **11.732800** | 11.635775 | 11.594800 | **-0.097025** |

All values are `SIMULATED`, never `HUMAN_VERIFIED`.

The cap still consistently narrows fixed-resonance dominance, so mature-chain compounding is a real contributor. It does not clear the strategy problem, and further reward-tail micro-tuning remains stopped.

## Objective-aligned diagnostic result

Executive added `bank-ev` to `tests/high-chain-probe.mjs` in commit `03b8744ea5e928424ce57e099f82deedef6c0c47`.

`bank-ev` chooses among the three offered routes using one-step expected secured-bank value rather than hand-weighted heuristic scores. GitHub Actions `ECHO DRIFT Regression` run `32930271501` completed **success**; state regression, parity guard, deterministic strategy benchmark and high-chain structural probe all passed.

| Mode | fixed resonance | chain-aware | bank-ev | bank-ev gap vs fixed resonance |
|---|---:|---:|---:|---:|
| production | **12.095225** | 11.856475 | 10.856575 | **-1.238650** |
| taper after first `+5` | **11.905175** | 11.733650 | 10.802300 | **-1.102875** |
| cap after first `+5` | **11.732800** | 11.635775 | 10.763050 | **-0.969750** |

The objective-aligned one-step policy does not close the fixed-resonance gap and performs below the existing chain-aware/future-aware contextual policies. Therefore **simple objective-misalignment of the heuristic policies is no longer the leading explanation**. `bank-ev` is myopic, so this is not a global-optimality proof.

## Frozen production policy

- Keep production `game.js` unchanged.
- Keep `HUMAN_CANDIDATE_01` unchanged.
- Do not promote visible-signal chain exit yet.
- Do not promote high-chain cap or taper.
- Do not resume global slope tuning, cap sweeps, or tiny numerical searches around rank crossings.
- Do not implement persistent progression, route-affinity unlocks, flat stat shops, unrelated content volume, or broad refactors.
- Do not hide risk/payout information to manufacture tension.

## Decision gate

The next structural diagnostic must isolate **active-chain switching opportunity cost** rather than reward magnitudes.

Measure how often calm/deep is locally attractive while an active chain exists, then quantify the future value lost by abandoning/preserving that chain. If active-chain preservation overwhelms most otherwise sensible switch states, the next production candidate should address that structure rather than another reward coefficient.

If meaningful switch states already exist but contextual policies fail to exploit them, improve the evaluator instead of changing production.

## Human verification package

`HUMAN_CANDIDATE_01` remains frozen. Existing short-session questions remain:

1. **Decision tension** — did continue versus `回収して帰還 +N` create genuine hesitation more than once?
2. **Failure ownership** — after collapse, did it feel like a knowingly pushed risk or like erased time?
3. **Immediate replay desire** — after success or collapse, did the next run feel immediately desirable?

No human-fun claim is authorized yet. Do not add cap/taper-specific questions while that branch lacks Systems clearance.

## Important unresolved issues

1. **Strategic validity:** fixed resonance remains the best tested fixed/contextual result after corrected RNG. `Severity 4`.
2. **Active-chain switching cost:** remaining dominance may come from the future value surrendered when leaving a chain. This is now the Executive `Severity 4` gate.
3. **Hidden exit cost in production:** calm/deep can erase an active chain through invisible 50% RNG. `Severity 4 / OBSERVED + SIMULATED`.
4. **Long-term play:** persistent values still do not meaningfully change future decisions. `OBSERVED FAIL`.
5. **Human feel:** tension, collapse ownership and replay desire require `HUMAN_VERIFIED`.
6. **iPhone/Safari:** real-device lifecycle/layout/readability/touch behavior remains `UNVERIFIED`.
7. **Persistence hardening:** terminal settlement is not crash-atomic.
8. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`.
9. **Progression semantics:** `banked` remains lifetime cumulative recovery and must not silently become a spendable balance.

## Executive decision

`EX-018`: EX-017's pre-TQ-018 contextual advantage is withdrawn; the subsequent objective-aligned `bank-ev` check also failed to close the fixed-resonance gap. Production remains frozen. The studio now isolates active-chain switching opportunity cost before inventing another rule.