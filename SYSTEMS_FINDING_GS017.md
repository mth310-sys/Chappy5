# GS-017 — Guaranteed mismatch renewal is not the dominant source of resonance stickiness

- **Status:** `STRATEGY_CLEARANCE_BLOCKED / MISMATCH_RENEWAL_NOT_PRIMARY`
- **Severity:** 4
- **Confidence:** HIGH for measured direction / MEDIUM-HIGH for design interpretation
- **Verification Type:** `OBSERVED + SIMULATED` (`HUMAN_VERIFIED`: no)

## Evidence

A new deterministic non-production probe, `tests/resonance-renewal-probe.mjs`, samples the exact same production active-chain states and compares two branch semantics under common exogenous random tapes:

1. `production` — a mismatching resonance offer replaces the active chain with the offered signal at `chainLen=1`.
2. `noRenew` — only when an active chain already exists and the offered resonance signal mismatches, the old chain and chainLen are left unchanged. Initial chain creation remains production-identical.

The probe uses 4 seeds × 10,000 simulated Runs, 2- and 3-decision branch horizons, production reward/risk/extraction rules, and production-sampled states. Production `game.js` is unchanged.

The first implementation incorrectly prevented initial chain creation in `noRenew`; that output was rejected before use. The corrected probe also fixes state sampling to always follow production semantics, so both branch modes are evaluated from the same 104,736 active-chain states.

Corrected deterministic output:

### All active-chain states

| Horizon | Production `switch - resonance` mean bank | No-renew mean | Delta no-renew vs production | Switch-win delta | Resonance-win delta |
|---|---:|---:|---:|---:|---:|
| 2 decisions | -0.97010 | -1.01963 | **-0.04953** | +0.9538 pt | -1.8895 pt |
| 3 decisions | -1.24772 | -1.30826 | **-0.06054** | +0.5967 pt | -1.4408 pt |

Stopping automatic mismatch renewal does **not** close the aggregate expected-bank gap. On mean bank it slightly worsens it, although it converts some resonance wins into switch wins/ties.

### Mismatching-resonance subset

69,669 / 104,736 active-chain states (66.52%) had a resonance offer whose signal mismatched the active chain.

Under production rules, this subset already favors switching on average:

- 2 decisions: switch wins 38.45%, resonance wins 26.07%, mean `switch - resonance` **+0.58843**.
- 3 decisions: switch wins 33.15%, resonance wins 27.02%, mean `switch - resonance` **+0.26474**.

With mismatch renewal disabled:

- 2 decisions: mean becomes **+0.51396**.
- 3 decisions: mean becomes **+0.19410**.

So guaranteed restart on a mismatching resonance offer is not the main reason fixed resonance wins globally. The problematic pressure must be concentrated elsewhere, especially states where the offered resonance signal **matches** the active chain and can immediately compound it, and/or in how repeated matching opportunities interact with extraction/risk.

## Interpretation

This directly weakens the EX-020 working hypothesis that the remaining 70–77% switching penalty might primarily come from guaranteed resonance renewal/restart.

The key distinction is now:

- **Mismatch state:** calm/deep switching is already frequently and on-average viable over 2–3 decisions.
- **Match state:** by subtraction, this is the more likely source of the aggregate resonance stickiness that keeps fixed resonance ahead.

The result does **not** prove that mismatch renewal has zero value. It changes win/tie frequencies and may matter for player legibility or longer horizons. It only shows that removing it is not a promising primary balance fix under the tested production-rule horizons.

## Recommended Action

Do not promote a mismatch no-renew rule to production and do not micro-tune renewal probabilities.

Next Systems priority: isolate **active-chain signal-match states** by chainLen and compare forced resonance continuation against the best calm/deep switch under the same common-RNG 2–3 decision probe. Quantify how much of the aggregate negative `switch - resonance` mean is contributed by match states, especially chainLen 1 versus chainLen 2+.

If the pressure is concentrated in chainLen 2+ match states, the remaining issue is mature-chain compounding/continuation value rather than generic renewal insurance. If even chainLen 1 match states dominate, inspect the first continuation reward and extraction interaction before proposing any production change.

## Safety / scope

- Production `game.js`: unchanged.
- `HUMAN_CANDIDATE_01`: unchanged.
- No human-fun claim.
- First invalid diagnostic output: explicitly discarded.
- CI step has been added; final GitHub Actions completion should be checked before Executive uses these numbers as a promotion gate.
