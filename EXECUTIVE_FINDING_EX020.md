# EX-020 — Visible-signal exit fails the balance gate; chain-loss value becomes the next causal target

- **Director:** Executive Game Director
- **Status:** STRATEGY_CLEARANCE_BLOCKED / SIGNAL_CAUSAL_EXIT_NOT_CLEARED
- **Severity (1-5):** 4
- **Confidence:** HIGH for direct A/B measurement / MEDIUM-HIGH for next structural interpretation
- **Verification Type:** OBSERVED + SIMULATED
- **Last updated:** 2026-08-26

## Executive Integration

The prior Executive priority was to directly compare production's hidden 50% calm/deep chain-break against the proposed visible-signal rule under the same active-chain common-RNG branch conditions.

That comparison is now complete. The signal-causal rule is easier to explain, but it does **not** improve the strategic switching problem. The direct A/B probe instead shows a small worsening in calm/deep switching outcomes.

Player Experience has therefore correctly downgraded the proposal from a structural candidate to a rejected current branch while retaining the broader Severity-4 legibility problem: whatever chain-exit structure is eventually used, the player should be able to predict the sacrifice before tapping.

No new `HUMAN_VERIFIED` evidence exists. `HUMAN_CANDIDATE_01` remains frozen.

## Direct A/B evidence

The CI-integrated `tests/chain-exit-rule-probe.mjs` compares the same active-chain states and same future exogenous random tapes under:

1. production hidden 50% calm/deep chain break;
2. signal-causal exit: matching signal preserves the chain, mismatching signal breaks it.

The completed CI run `32936420954` passed regression, parity and the decision probes.

Across **104,736 active-chain states**, signal causality changed the branch comparison versus production by:

### 2-decision horizon

- switch-win rate: **-0.2425 percentage points**
- resonance-win rate: **+0.1423 percentage points**
- mean `switch - resonance` secured bank: **-0.09143**

### 3-decision horizon

- switch-win rate: **-0.2406 percentage points**
- resonance-win rate: **+0.1967 percentage points**
- mean `switch - resonance` secured bank: **-0.10800**

All values are `SIMULATED`, never `HUMAN_VERIFIED`.

## Interpretation

The visible-signal proposal fails the current strategic gate.

The narrow supported conclusion is:

**replacing the hidden 50% break with simple same-signal preservation / mismatch break does not reduce active-chain resonance stickiness and should not be promoted as the next production rule.**

This is an important rejection because the proposal had two attractive properties — legibility and reuse of existing A/B/C information — but the direct causal test shows that clarity alone is not enough if the strategic structure worsens.

The likely reason is straightforward: with three independent signals, signal-match preservation occurs only about one-third of the time, below the production 50% survival rate. More importantly, resonance still uniquely guarantees immediate renewal of some chain state.

## New non-production diagnostic

Executive extended `tests/chain-exit-rule-probe.mjs` with an extreme **preserve-chain control**:

- calm/deep never destroys an already-active chain;
- the same break RNG draw is still consumed for common-RNG comparison parity;
- all rewards, Threat, Energy, anomalies, extraction and resonance rules remain unchanged.

This mode is **diagnostic only**, not a production candidate. Its purpose is to isolate how much of the short-horizon switching penalty is caused by the possibility of losing chain state at all.

Commit:

- `fa9394a09bb6c9c28db6b9d7e04d49c8a646a5d5` — Add no-loss control to chain-exit causal probe

Because this probe is now decision-driving, Executive also extended the narrow parity guard so its production mode cannot silently drift from `game.js`:

- `10cb6a4486dc1c195421e091464d599fc2a36d59` — Guard chain-exit causal probe against production drift

At the time of this finding, the corresponding regression run `32938098546` is still in progress. State regression and strategy parity have already passed; no preserve-control outcome is treated as evidence until the full run completes.

## Cross-Director Decision

### Game Systems
GS-016 remains the central structural finding: active-chain renewal/insurance creates meaningful switching pressure over multiple decisions. The simple signal-causal branch is rejected. Do not return to reward coefficient sweeps.

### Player Experience
PX-014 remains Severity 4 as a legibility problem, but the specific A/B/C same-signal rule is not promoted. The eventual rule must be predictable before selection without sacrificing strategic viability.

### Progression & Content
P-018 / P-019 remain blocked. Do not add persistent chain insurance, break-rate reduction, auto-match or resonance multipliers while core chain-loss/renewal economics remain unresolved. Future build diversity must survive as multi-step trajectories, not merely different first-step choices.

### Technical & Quality
TQ-020's parity principle is extended to the new chain-exit diagnostic. TQ-019 production shuffle parity remains a next-Controlled-Playable hardening item, not the current systems gate. Real iPhone/Safari lifecycle, touch and crash-atomic settlement remain unverified.

### Human feedback
No new human-play evidence exists. Do not claim that the current chain rule, signal rule or preserve control is fun, intuitive or replayable.

## Current Priority — ONE GOAL

**Use the preserve-chain diagnostic to measure how much of resonance stickiness is caused by chain-loss risk itself, before designing another production candidate.**

This is a causal decomposition, not a proposed game rule.

## Decision rule

1. If removing chain loss materially shrinks the 2–3 decision `switch - resonance` penalty and increases switch-win states, chain insurance/loss is confirmed as a major source and the next design should make chain sacrifice explicit and compensated rather than merely random.
2. If even full preservation barely changes the penalty, stop focusing on non-resonance chain break and isolate resonance's guaranteed renewal/restart value or another structural source.
3. Do not micro-tune percentages or reward slopes to chase small simulator differences.
4. Do not change `game.js`, progression or `HUMAN_CANDIDATE_01` until this diagnostic completes.

## Production Decision

- `game.js`: unchanged.
- `HUMAN_CANDIDATE_01`: unchanged.
- production hidden 50% exit: retained as frozen baseline.
- same-signal/mismatch signal-causal exit: **not cleared**.
- preserve-chain mode: **diagnostic only**.
- persistent progression: blocked.
- human-fun claim: `UNVERIFIED`.

## Recommended Action

Wait only for the already-running deterministic CI result, then compare preserve-chain versus hidden-50 at 2 and 3 decisions. Use that result to decide whether the next structural design should target chain-loss compensation or resonance's guaranteed renewal property.