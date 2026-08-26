# Chappy5 Studio Dashboard

Updated: 2026-08-26 14:27 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; production frozen while active-chain chain-exit structure is isolated

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | STRATEGY_CLEARANCE_BLOCKED / ACTIVE_CHAIN_SWITCH_COST_CONFIRMED | 4 | HIGH for measurement / MEDIUM-HIGH for design interpretation | OBSERVED + CALCULATED + SIMULATED | `GS-016`: active-chain states often make calm/deep locally attractive, but future chain renewal value flips a meaningful share back toward resonance. Executive short-horizon common-RNG branching now independently confirms the pressure persists over 2–3 decisions. |
| Player Experience | ACTIVE_CHAIN_SACRIFICE_NOT_LEGIBLE | 4 | HIGH for hidden-rule observation / MEDIUM-HIGH for predicted player effect | OBSERVED + SIMULATED | `PX-014`: the strategically material chain sacrifice remains hidden behind the production 50% calm/deep break roll. Do not confuse this with human-verified confusion yet. |
| Progression & Content | FAIL / BLOCKED_BY_CHAIN_STRUCTURE_CLEARANCE | 4 | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | `P-018`: persistent chain insurance, break-rate reduction, signal auto-match, resonance multiplier and similar upgrades remain blocked while chain renewal is the active core issue. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH / CONTROLLED_PLAYABLE_BOUNDARY_RISK | 3 | HIGH | OBSERVED | `TQ-019`: production route shuffle uses engine-dependent `sort(()=>Math.random()-.5)` while analysis uses Fisher-Yates. Fix at the next Controlled Playable boundary; real iPhone/Safari lifecycle and crash-atomic settlement remain unverified. |

## Executive priority

**Directly measure whether replacing the hidden 50% calm/deep chain-break rule with visible signal causality reduces the confirmed 2–3 decision switching penalty under the same common-RNG branch probe.**

Full latest Executive finding: `EXECUTIVE_FINDING_EX019.md`.

## What changed this cycle

Executive added `tests/active-chain-branch-probe.mjs` and integrated it into regression CI. It branches the same active-chain state into `resonance` versus locally best `calm/deep`, then follows the same contextual policy and state-conditioned extraction rule for 2 or 3 decisions. Step-indexed future route/anomaly/break/collapse tapes are shared across branches to avoid cross-branch RNG-stream drift.

GitHub Actions `ECHO DRIFT Regression` run `32933903792` completed **success**. State regression, parity guard, deterministic strategy benchmark, high-chain probe, active-chain switching probe and the new common-RNG branch probe all passed.

Across **104,736** active-chain states, calm/deep was locally better by one-step secured-bank EV in **52.52%** of states. Despite that local attractiveness:

| Horizon | switch wins | resonance wins | ties | mean switch - resonance bank |
|---|---:|---:|---:|---:|
| 2 decisions | 28.84% | **37.06%** | 34.10% | **-0.9701** |
| 3 decisions | 26.17% | **35.56%** | 38.28% | **-1.2477** |

All values are `SIMULATED`, never `HUMAN_VERIFIED`.

This strengthens GS-016: resonance renewal/insurance pressure survives a direct short-horizon branch comparison and is not merely an artifact of adding a hand-written next-chain option term. It still does not prove globally optimal fixed-resonance play or human behavior.

A display-only accounting issue in chainLen sample counts was corrected in commit `b602e8f3ff286a8df26f24d43317e5a5ee9f3bec`; aggregate horizon win rates and deltas above are unchanged. The follow-up CI run must remain green before treating chainLen breakdowns as final evidence.

## Frozen production policy

- Keep production `game.js` unchanged.
- Keep `HUMAN_CANDIDATE_01` unchanged.
- Do not promote visible-signal chain exit yet.
- Do not resume reward slope/cap/taper micro-tuning.
- Do not add persistent chain insurance or resonance-affinity progression.
- Do not hide risk/payout information to manufacture tension.
- Do not spend human-test time on un-cleared reward-tail candidates.

## Decision gate

The next non-production comparison should use the **same sampled active-chain states and same common-RNG future tapes** but replace production's hidden random 50% calm/deep chain break with the already-studied visible-signal rule: preserve chain on matching signal, break it on mismatch while still consuming the same random value for comparison parity.

If this materially shrinks the negative `switch - resonance` branch delta and creates more meaningful switch-win states without simply moving dominance to calm, the structural candidate advances. If not, hidden 50% exit is not sufficient as the main explanation and the studio should isolate another structural source rather than tune coefficients.

## Human verification package

`HUMAN_CANDIDATE_01` remains frozen. Existing short-session questions remain:

1. **Decision tension** — did continue versus `回収して帰還 +N` create genuine hesitation more than once?
2. **Failure ownership** — after collapse, did it feel like a knowingly pushed risk or like erased time?
3. **Immediate replay desire** — after success or collapse, did the next run feel immediately desirable?

If a chain-exit structure is later promoted to Controlled Playable, add only two focused observations: can the player predict chain preservation/break before tapping, and does calm/deep switching feel like a deliberate sacrifice rather than a hidden punishment?

No human-fun claim is authorized yet.

## Important unresolved issues

1. **Strategic validity:** fixed resonance remains the best tested production-rule strategy. `Severity 4`.
2. **Active-chain switching cost:** direct short-horizon branching confirms a material renewal/insurance penalty. `Severity 4`.
3. **Hidden exit cost:** calm/deep can erase an active chain through invisible 50% RNG. `Severity 4`.
4. **Long-term play:** persistent progression still does not meaningfully change future decisions. `OBSERVED FAIL`.
5. **Human feel:** tension, collapse ownership, replay desire and chain-sacrifice legibility require `HUMAN_VERIFIED`.
6. **iPhone/Safari:** real-device lifecycle/layout/readability/touch behavior remains `UNVERIFIED`.
7. **Route shuffle parity:** production permutation remains non-uniform/engine-dependent until Controlled Playable boundary hardening.
8. **Persistence hardening:** terminal settlement is not crash-atomic.
9. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`.
10. **Progression semantics:** `banked` remains lifetime cumulative recovery and must not silently become a spendable balance.

## Executive decision

`EX-019`: active-chain renewal pressure is now confirmed by both GS-016 decomposition and a direct common-RNG 2–3 decision branch probe. Production remains frozen. The single next gate is a causal branch comparison of production hidden-50 exit versus visible-signal chain exit; no further reward micro-tuning or progression work is authorized before that result.