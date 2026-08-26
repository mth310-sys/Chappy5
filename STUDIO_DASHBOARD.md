# Chappy5 Studio Dashboard

Updated: 2026-08-26 15:30 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; production frozen while active-chain loss/renewal value is isolated

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | STRATEGY_CLEARANCE_BLOCKED / ACTIVE_CHAIN_SWITCH_COST_CONFIRMED | 4 | HIGH for measurement / MEDIUM-HIGH for design interpretation | OBSERVED + CALCULATED + SIMULATED | `GS-016`: active-chain renewal/insurance produces a real 2–3 decision switching penalty. The simple visible-signal exit candidate did not reduce it. |
| Player Experience | ACTIVE_CHAIN_SACRIFICE_NOT_LEGIBLE / SIGNAL_RULE_NOT_CLEARED | 4 | HIGH for hidden-rule observation / MEDIUM-HIGH for predicted player effect | OBSERVED + SIMULATED | `PX-014`: the sacrifice is still not predictable before tapping, but same-signal preserve / mismatch break worsened the strategic A/B and is not promoted. |
| Progression & Content | FAIL / BLOCKED_BY_CHAIN_STRUCTURE_CLEARANCE | 4 | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | `P-018/P-019`: persistent chain insurance and resonance-affinity upgrades remain blocked; future builds must remain viable over multi-step trajectories. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH / PROBE_PARITY_HARDENING | 3 | HIGH | OBSERVED | Active-chain and chain-exit decision probes are now covered by narrow production-parity guards. `TQ-019` production route shuffle and real iPhone/Safari lifecycle remain unresolved. |

## Executive priority

**Measure how much of the 2–3 decision resonance stickiness is caused by losing chain state at all, using a no-loss preserve-chain diagnostic under the same common-RNG conditions.**

Full latest Executive finding: `EXECUTIVE_FINDING_EX020.md`.

## What changed this cycle

The previous priority is complete. The CI-integrated direct A/B comparison of production hidden-50 exit versus visible signal causality passed and produced a negative result for the candidate.

Across **104,736 active-chain states**, signal causality changed the branch result versus hidden-50 by:

| Horizon | switch-win delta | resonance-win delta | mean `switch - resonance` bank delta |
|---|---:|---:|---:|
| 2 decisions | **-0.2425 pt** | **+0.1423 pt** | **-0.09143** |
| 3 decisions | **-0.2406 pt** | **+0.1967 pt** | **-0.10800** |

Therefore same-signal preservation / mismatch break is **not cleared** as the next production structure. It improves explainability but slightly worsens the strategic switching problem. These are `SIMULATED` results, not `HUMAN_VERIFIED`.

Executive added an extreme non-production `preserveChain` control to `tests/chain-exit-rule-probe.mjs`: calm/deep never destroys an active chain, while the same random draw is still consumed to preserve common-RNG parity. This is a causal diagnostic, not a candidate rule.

The chain-exit probe is also now included in the narrow production-parity guard. Current commits:

- `fa9394a09bb6c9c28db6b9d7e04d49c8a646a5d5` — no-loss control
- `10cb6a4486dc1c195421e091464d599fc2a36d59` — chain-exit parity guard
- `1c74f4e2701b7471b7f7206b31f687ef72827431` — `EX-020`

Regression run `32938098546` was still in progress at the latest check. State regression and strategy parity had already passed. No preserve-control numerical result is accepted until the full run completes.

## Frozen production policy

- Keep production `game.js` unchanged.
- Keep `HUMAN_CANDIDATE_01` unchanged.
- Do not promote the same-signal/mismatch chain-exit rule.
- Do not resume reward slope/cap/taper micro-tuning.
- Do not add persistent chain insurance, break-rate reduction, signal auto-match or resonance-affinity progression.
- Do not hide risk/payout information to manufacture tension.
- Do not spend human-test time on simulation branches that have not cleared the strategic gate.

## Decision gate

Use the no-loss preserve-chain control only to answer one causal question:

**If calm/deep can never erase an existing chain, does the negative short-horizon `switch - resonance` gap materially shrink?**

If yes, chain-loss/insurance is a major source and the next design should make sacrifice explicit and compensated. If no, stop focusing on chain-break semantics and isolate resonance's guaranteed chain renewal/restart value instead.

## Human verification package

`HUMAN_CANDIDATE_01` remains frozen. Existing short-session questions remain:

1. **Decision tension** — did continue versus `回収して帰還 +N` create genuine hesitation more than once?
2. **Failure ownership** — after collapse, did it feel like a knowingly pushed risk or like erased time?
3. **Immediate replay desire** — after success or collapse, did the next run feel immediately desirable?

If a chain-exit structure is later promoted to Controlled Playable, add only two focused observations: can the player predict chain preservation/break before tapping, and does calm/deep switching feel like a deliberate sacrifice rather than a hidden punishment?

No human-fun claim is authorized yet.

## Important unresolved issues

1. **Strategic validity:** fixed resonance remains the best tested production-rule strategy. `Severity 4`.
2. **Active-chain switching cost:** direct short-horizon branching confirms material renewal/insurance pressure. `Severity 4`.
3. **Hidden exit legibility:** calm/deep can erase an active chain through invisible 50% RNG. `Severity 4`.
4. **Signal-causal candidate:** directly tested and **not cleared**; do not promote on clarity alone.
5. **Long-term play:** persistent progression still does not meaningfully change future decisions. `OBSERVED FAIL`.
6. **Human feel:** tension, collapse ownership, replay desire and chain-sacrifice legibility require `HUMAN_VERIFIED`.
7. **iPhone/Safari:** real-device lifecycle/layout/readability/touch behavior remains `UNVERIFIED`.
8. **Route shuffle parity:** production permutation remains non-uniform/engine-dependent until Controlled Playable hardening.
9. **Persistence hardening:** terminal settlement is not crash-atomic.
10. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`.
11. **Progression semantics:** `banked` remains lifetime cumulative recovery and must not silently become a spendable balance.

## Executive decision

`EX-020`: reject the simple A/B/C signal-causal exit branch as a balance fix. Preserve its broader legibility lesson only. Production remains frozen. The single next gate is the already-added no-loss diagnostic to determine whether chain-loss itself is the major source of resonance stickiness before another design candidate is invented.