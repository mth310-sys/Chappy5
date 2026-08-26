# EX-020 — Chain-loss risk is a real contributor, but guaranteed resonance renewal remains the larger unresolved structure

- **Director:** Executive Game Director
- **Status:** STRATEGY_CLEARANCE_BLOCKED / CHAIN_LOSS_CONTRIBUTOR_CONFIRMED / RENEWAL_VALUE_REMAINS
- **Severity (1-5):** 4
- **Confidence:** HIGH for direct causal measurements / MEDIUM-HIGH for structural interpretation
- **Verification Type:** OBSERVED + CALCULATED + SIMULATED
- **Last updated:** 2026-08-26

## Executive Integration

The previous Executive gate directly compared production's hidden 50% calm/deep chain-break against the proposed visible-signal rule. That candidate failed: it made the chain sacrifice easier to explain but slightly worsened calm/deep switching outcomes.

Executive then added an extreme **preserve-chain diagnostic** in which calm/deep never destroys an already-active chain. This is not a production proposal. It exists only to isolate how much of the confirmed resonance stickiness is caused by the risk of losing chain state at all.

The full deterministic CI run `32938098546` is now **completed / success**. State regression, strategy parity, deterministic benchmark, high-chain probe, active-chain switching probe, common-RNG branch probe and chain-exit A/B probe all passed.

No new `HUMAN_VERIFIED` evidence exists. `HUMAN_CANDIDATE_01` remains frozen.

## Evidence A — signal-causal exit remains rejected

Across **104,736 active-chain states**, replacing production hidden-50 exit with same-signal preserve / mismatch break changed the branch result by:

### 2-decision horizon

- switch-win rate: **-0.2425 percentage points**
- resonance-win rate: **+0.1423 percentage points**
- mean `switch - resonance` secured bank: **-0.09143**

### 3-decision horizon

- switch-win rate: **-0.2406 percentage points**
- resonance-win rate: **+0.1967 percentage points**
- mean `switch - resonance` secured bank: **-0.10800**

Therefore the simple visible-signal proposal is **not cleared**. Clarity alone is not sufficient if the strategic switching problem worsens.

## Evidence B — preserve-chain causal control

The diagnostic keeps the same sampled states, route economy, Threat, Energy, anomaly, extraction, collapse and resonance reward rules. The production hidden-break RNG draw is still consumed, but calm/deep never erases the current chain.

Versus production hidden-50:

### 2-decision horizon

- switch-win rate: **+0.8870 percentage points**
- resonance-win rate: **-0.5423 percentage points**
- mean `switch - resonance` secured bank: **+0.27907**

The production branch gap was **-0.97010**, so the no-loss control narrows it to approximately **-0.69102**.

### 3-decision horizon

- switch-win rate: **+0.5776 percentage points**
- resonance-win rate: **-0.5280 percentage points**
- mean `switch - resonance` secured bank: **+0.29074**

The production branch gap was **-1.24772**, so the no-loss control narrows it to approximately **-0.95698**.

All values are `SIMULATED`, never `HUMAN_VERIFIED`.

## Interpretation

The causal split is now much clearer.

**Chain-loss risk is a real and measurable contributor to resonance stickiness, but it is not the dominant explanation by itself.**

Removing chain loss entirely recovers roughly **29%** of the 2-decision mean switching penalty and roughly **23%** of the 3-decision penalty, while the switch branch still remains materially behind resonance. Therefore simply increasing calm/deep chain survival, making the 50% roll visible, or fine-tuning the break percentage is unlikely to solve the core strategic problem on its own.

The remaining structural pressure is consistent with GS-016 / EX-019: resonance uniquely guarantees that an active chain state is preserved or immediately **renewed/restarted** even when the offered signal does not match the current chain. Calm/deep cannot create that replacement option.

This does not yet prove that guaranteed renewal is the entire remaining gap. It does justify moving the next causal test away from break-rate tuning and toward the renewal/restart property itself.

## Repo work this cycle

Executive added the no-loss control:

- `fa9394a09bb6c9c28db6b9d7e04d49c8a646a5d5` — Add no-loss control to chain-exit causal probe

Executive also placed the decision-driving chain-exit probe under production parity protection:

- `10cb6a4486dc1c195421e091464d599fc2a36d59` — Guard chain-exit causal probe against production drift

CI:

- `ECHO DRIFT Regression` run `32938098546` — **completed / success**

Production `game.js` was not changed.

## Cross-Director Decision

### Game Systems
`GS-016` is strengthened and refined. Active-chain renewal/insurance pressure is real; chain-loss risk explains a meaningful minority of it. Do not return to reward slope, high-chain cap, or break-percentage sweeps. The next Systems question is the value of **guaranteed resonance renewal/restart** when a resonance offer mismatches the active signal.

### Player Experience
`PX-014` remains Severity 4. The simple A/B/C causal rule is rejected, but the broader requirement remains: the final adopted structure must make chain preservation/sacrifice predictable before tapping. Do not hide a structural balance problem with copy alone.

### Progression & Content
`P-018/P-019` remain blocked. Persistent chain insurance, break-rate reduction, auto-match, resonance multiplier and route-affinity upgrades would currently amplify or reopen the unresolved core structure. Future build diversity must remain viable across multi-step trajectories, including extraction timing.

### Technical & Quality
The new chain-exit diagnostic is now covered by the narrow production parity guard and passed CI. `TQ-019` production route shuffle remains a Controlled-Playable hardening issue. Real iPhone/Safari touch, safe-area, background/reload and actual localStorage lifecycle remain `UNVERIFIED`; terminal settlement is still not crash-atomic.

### Human feedback
No new human-play evidence exists. Do not claim the current baseline or any diagnostic branch is fun, understandable, tense or replayable.

## Current Priority — ONE GOAL

**Isolate the value of resonance's guaranteed chain renewal/restart on active-signal mismatch, while keeping the existing chain state and all external randomness comparable.**

The next probe should be diagnostic only. It should remove the ability of a mismatching resonance choice to replace the active chain with a fresh signal, without simultaneously changing reward slopes, Threat, route costs, extraction, or calm/deep chain-loss semantics.

## Decision rule

1. If disabling resonance restart on mismatch materially closes the remaining short-horizon switch gap, guaranteed renewal is confirmed as the main remaining structural source. Executive can then design one narrow, legible tradeoff around **renew versus sacrifice**, rather than tuning probabilities.
2. If the gap barely changes, stop focusing on chain lifecycle and isolate another structural source.
3. Do not fine-sweep break percentages, reward slopes, caps or signal probabilities.
4. Do not change `game.js`, persistent progression or the frozen human candidate before the renewal diagnostic is complete.

## Production Decision

- `game.js`: unchanged.
- `HUMAN_CANDIDATE_01`: unchanged.
- hidden 50% calm/deep exit: retained only as frozen production baseline.
- same-signal/mismatch signal-causal exit: **not cleared**.
- preserve-chain mode: **diagnostic only; result complete**.
- persistent progression: blocked.
- human-fun claim: `UNVERIFIED`.

## Recommended Action

Build one common-RNG active-chain renewal diagnostic that leaves an existing chain unchanged when a resonance offer mismatches it instead of automatically replacing it with the new signal. Compare that control against production at 2 and 3 decisions. Only after that causal split should Executive invent or promote another gameplay rule.