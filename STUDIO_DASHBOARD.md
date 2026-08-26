# Chappy5 Studio Dashboard

Updated: 2026-08-26 15:34 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; production frozen while guaranteed resonance renewal is isolated

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | STRATEGY_CLEARANCE_BLOCKED / ACTIVE_CHAIN_RENEWAL_PRESSURE | 4 | HIGH for measurement / MEDIUM-HIGH for design interpretation | OBSERVED + CALCULATED + SIMULATED | `GS-016`: active-chain renewal/insurance produces a real 2–3 decision switching penalty. Full calm/deep chain preservation recovers only part of it, so guaranteed resonance renewal remains unresolved. |
| Player Experience | ACTIVE_CHAIN_SACRIFICE_NOT_LEGIBLE / SIGNAL_RULE_NOT_CLEARED | 4 | HIGH for hidden-rule observation / MEDIUM-HIGH for predicted player effect | OBSERVED + SIMULATED | `PX-014`: the sacrifice is still not predictable before tapping; same-signal preserve / mismatch break was directly tested and is not promoted. |
| Progression & Content | FAIL / BLOCKED_BY_CHAIN_STRUCTURE_CLEARANCE | 4 | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | `P-018/P-019`: persistent chain insurance and resonance-affinity upgrades remain blocked; future builds must remain viable over multi-step trajectories and extraction timing. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH / PROBE_PARITY_HARDENED | 3 | HIGH | OBSERVED | Active-chain and chain-exit decision probes are under narrow production-parity guards and passed CI. `TQ-019` production shuffle plus real iPhone/Safari lifecycle remain unresolved. |

## Executive priority

**Isolate the value of resonance's guaranteed chain renewal/restart when the offered resonance signal mismatches an active chain.**

Full latest Executive finding: `EXECUTIVE_FINDING_EX020.md`.

## What changed this cycle

The hidden-50 versus visible-signal A/B branch is closed: same-signal preservation / mismatch break made switching slightly worse and is **not cleared**.

Executive then added a diagnostic-only `preserveChain` control where calm/deep never destroys an active chain, while keeping the same random draw consumption and all other economy/risk rules fixed.

`ECHO DRIFT Regression` run `32938098546` is now **completed / success**. Regression, strategy parity and all decision-driving probes passed.

Across **104,736 active-chain states**, full calm/deep chain preservation changed the production branch comparison by:

| Horizon | switch-win delta | resonance-win delta | mean `switch - resonance` bank delta |
|---|---:|---:|---:|
| 2 decisions | **+0.8870 pt** | **-0.5423 pt** | **+0.27907** |
| 3 decisions | **+0.5776 pt** | **-0.5280 pt** | **+0.29074** |

Production mean gaps were about **-0.97010 / -1.24772**, so the no-loss diagnostic narrows them only to about **-0.69102 / -0.95698**.

This is the key causal split: **chain-loss risk is a meaningful contributor, but it is not enough to explain resonance stickiness.** It accounts for roughly 29% of the two-decision mean penalty and 23% of the three-decision penalty under this diagnostic. The remaining pressure is consistent with resonance uniquely guaranteeing preservation or immediate renewal/restart of a chain state.

All of these are `SIMULATED`, not `HUMAN_VERIFIED`.

## Repo work this cycle

- `fa9394a09bb6c9c28db6b9d7e04d49c8a646a5d5` — add no-loss chain-exit causal control
- `10cb6a4486dc1c195421e091464d599fc2a36d59` — put the chain-exit probe under production parity guard
- `e91f77b51b497fc89df73ce199b87dea19cc3a1d` — update `EX-020` with completed causal split

Production `game.js`, UI, save format and `HUMAN_CANDIDATE_01` are unchanged.

## Frozen production policy

- Keep production `game.js` unchanged.
- Keep `HUMAN_CANDIDATE_01` unchanged.
- Do not promote the same-signal/mismatch chain-exit rule.
- Treat preserve-chain as a diagnostic only, not a gameplay candidate.
- Do not resume reward slope/cap/taper or break-percentage micro-tuning.
- Do not add persistent chain insurance, break-rate reduction, signal auto-match or resonance-affinity progression.
- Do not hide risk/payout information to manufacture tension.
- Do not spend human-test time on simulation branches that have not cleared the strategic gate.

## Decision gate

The next causal question is now narrower:

**How much of the remaining resonance advantage comes from the fact that a mismatching resonance offer automatically replaces the active chain with a new signal, guaranteeing that some chain state continues to exist?**

The next diagnostic should leave the existing chain unchanged on resonance mismatch rather than automatically restarting it, while keeping rewards, Threat, costs, extraction and external randomness comparable.

If that materially closes the remaining gap, Executive can design around a visible **renew versus sacrifice** tradeoff. If it barely changes the gap, stop focusing on chain lifecycle and isolate another source.

## Human verification package

`HUMAN_CANDIDATE_01` remains frozen. Existing short-session questions remain:

1. **Decision tension** — did continue versus `回収して帰還 +N` create genuine hesitation more than once?
2. **Failure ownership** — after collapse, did it feel like a knowingly pushed risk or like erased time?
3. **Immediate replay desire** — after success or collapse, did the next run feel immediately desirable?

If a chain structure later reaches Controlled Playable, add only two focused observations: can the player predict chain preservation/sacrifice before tapping, and does switching feel like a deliberate trade rather than hidden punishment?

No human-fun claim is authorized yet.

## Important unresolved issues

1. **Strategic validity:** fixed resonance remains the best tested production-rule strategy. `Severity 4`.
2. **Guaranteed renewal/restart:** chain-loss removal only partially closes the active-chain switching gap. `Severity 4`.
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

`EX-020`: chain-loss risk is confirmed as a meaningful but minority contributor to resonance stickiness. The simple A/B/C signal-causal branch remains rejected. Production stays frozen. The single next gate is a diagnostic isolation of resonance's guaranteed mismatch renewal/restart value.