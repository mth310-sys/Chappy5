# Chappy5 Studio Dashboard

Updated: 2026-08-26 17:29 JST
Target: ECHO DRIFT — `HUMAN_CANDIDATE_01` preserved; production frozen while first matching reward/state escalation is separated

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | STRATEGY_CLEARANCE_BLOCKED / FIRST_MATCH_REWARD_AND_MATURITY_SPLIT | 4 | HIGH for measurement / MEDIUM-HIGH for design interpretation | OBSERVED + SIMULATED | `GS-018` + `EX-022`: the first matching continuation combines a dominant immediate `+5` advantage with a smaller but real automatic `chainLen 1→2` future-state escalation. |
| Player Experience | FIRST_MATCH_REWARD_FEEL_VS_LOCK_IN_GATE | 4 | HIGH for structural observation / MEDIUM-HIGH for predicted player effect | OBSERVED + SIMULATED | `PX-014`: simply deleting the first payoff may damage the clearest resonance reward beat; future candidate must preserve recognizable payoff without turning the same tap into an automatic strategic lock. |
| Progression & Content | FAIL / BLOCKED_BY_FIRST_MATCH_CLEARANCE | 4 | HIGH | OBSERVED + SIMULATED + DESIGN ANALYSIS | `P-021`: signal affinity, match-frequency boosts, first-match bonuses, chain-start reinforcement and maturity acceleration remain blocked until the core boundary clears. |
| Technical & Quality | PASS_WITH_DEVICE_WATCH / PROBE_PARITY_HARDENED | 3 | HIGH | OBSERVED | Decision-driving probes and the new maturity-normalization diagnostic are parity guarded and CI-passing. `TQ-019`, crash atomicity and real iPhone/Safari lifecycle remain unresolved. |

## Executive priority

**Probe one structural first-match candidate that separates the reward beat from automatic future escalation, without coefficient sweeping.**

Full latest Executive finding: `EXECUTIVE_FINDING_EX022.md`.

## What changed this cycle

EX-021 identified the first matching continuation at `chainLen=1` as the primary remaining resonance boundary. GS-018 then showed that the production `+5` immediate continuation reward is a major causal source: on the same **26,470** matching `chainLen=1` states, neutralizing only that first reward moved mean `switch - resonance` from **-3.67102 → +0.12388** over 2 decisions and **-3.89082 → -0.48028** over 3 decisions.

Executive then isolated the remaining future-state value. With the first reward already held at `+0`, the diagnostic preserves the signal but normalizes the post-match chain from `chainLen=2` back to `chainLen=1` before later decisions.

`ECHO DRIFT Regression` run `32947874064` completed **success**. State regression, both parity guards and every existing strategy/decision probe passed.

### First-match causal split

| Condition | Horizon | Mean `switch - resonance` bank |
|---|---:|---:|
| Production `+5`, carry `chainLen=2` | 2 | **-3.67102** |
| Production `+5`, carry `chainLen=2` | 3 | **-3.89082** |
| First reward `+0`, carry `chainLen=2` | 2 | **+0.12388** |
| First reward `+0`, carry `chainLen=2` | 3 | **-0.48028** |
| First reward `+0`, preserve signal but normalize to `chainLen=1` | 2 | **+0.56932** |
| First reward `+0`, preserve signal but normalize to `chainLen=1` | 3 | **-0.00185** |

Relative to the `+0` control that still carries maturity, normalization alone adds **+0.44545 / +0.47843 bank** to switch viability and moves the 3-decision result to essentially neutral.

Interpretation: the first matching tap currently grants **two benefits at once** — a large immediate `+5` and automatic future-state escalation from chain length 1 to 2. The immediate reward is the dominant contributor; maturity carry explains almost all of the residual 3-step lock-in after that immediate reward is removed.

These are `SIMULATED`, not `HUMAN_VERIFIED`.

## Repo work this cycle

- `197538256debfd3a508971fabc46bcae50d0eb7e` — add first-match maturity normalization diagnostic
- `eb59a278c8f47828248dc58efbb53a6b163a8bf9` — parity-guard the diagnostic boundary
- `e701c82f407e0ab65aebac455ee420b5fdcbc029` — record `EX-022`

Production `game.js`, UI, save format and `HUMAN_CANDIDATE_01` are unchanged.

## Frozen production policy

- Keep production `game.js` unchanged until a structural candidate clears the deterministic strategy gate.
- Keep `HUMAN_CANDIDATE_01` unchanged; do not create Candidate 02 yet.
- Do not return to resonance slope, high-chain cap/taper, mismatch-renewal percentage, same-signal/mismatch exit rules, or `+2/+1` first-match coefficient searching.
- Do not add persistent chain insurance, break-rate reduction, signal auto-match, signal affinity, first-match power growth, maturity acceleration or resonance multipliers.
- Do not hide risk/payout information to manufacture tension.
- Do not spend human-test time on a simulation branch before strategic clearance.

## Decision gate

The next question is now structural rather than scalar:

**Can the first successful resonance match keep a clear reward beat without also granting the full automatic future escalation that makes matching resonance an effectively dominant continuation?**

Only one non-production structural candidate should be tested next; no coefficient sweep. It must be evaluated in the full deterministic state-conditioned strategy harness.

Pass conditions:

1. contextual play removes a material fixed-resonance advantage rather than merely moving the fixed optimum to calm/deep;
2. mismatch states retain meaningful calm/deep switching trajectories;
3. the first match remains legible enough for a later human reward-feel test;
4. the rule does not require hidden exception logic;
5. Progression cannot trivially re-open the boundary through permanent reinforcement.

If this does not clear before trial end, carry the unresolved Severity-4 strategic boundary into the final go/no-go report rather than forcing a production change.

## Human verification package

`HUMAN_CANDIDATE_01` remains frozen. Existing short-session questions remain:

1. **Decision tension** — did continue versus `回収して帰還 +N` create genuine hesitation more than once?
2. **Failure ownership** — after collapse, did it feel like a knowingly pushed risk or like erased time?
3. **Immediate replay desire** — after success or collapse, did the next run feel immediately desirable?

If a strategically cleared chain candidate later reaches Controlled Playable, add only one focused observation: **does the first successful match feel rewarding while a matching continuation still leaves a believable alternative?**

No human-fun claim is authorized yet.

## Important unresolved issues

1. **Strategic validity:** fixed resonance remains the best tested production-rule strategy. `Severity 4`.
2. **First matching continuation:** immediate `+5` is the dominant causal contributor to lock-in. `Severity 4`.
3. **Automatic maturity carry:** `chainLen 1→2` explains almost all residual 3-step lock-in after immediate reward neutralization. `Severity 4` as part of the same boundary.
4. **Hidden exit legibility:** calm/deep can erase an active chain through invisible 50% RNG. `Severity 4`, but not the dominant strategic source.
5. **Long-term play:** persistent progression still does not meaningfully change future decisions. `OBSERVED FAIL`.
6. **Human feel:** tension, collapse ownership, replay desire and first-match reward/choice quality require `HUMAN_VERIFIED`.
7. **iPhone/Safari:** real-device lifecycle/layout/readability/touch behavior remains `UNVERIFIED`.
8. **Route shuffle parity:** production permutation remains non-uniform/engine-dependent until Controlled Playable hardening.
9. **Persistence hardening:** terminal settlement is not crash-atomic.
10. **Low-Energy clarity:** displayed route cost can exceed Energy actually charged. `OBSERVED`.
11. **Progression semantics:** `banked` remains lifetime cumulative recovery and must not silently become a spendable balance.

## Executive decision

`EX-022`: the first matching continuation lock-in is now causally split into a **large immediate reward term** and a **smaller automatic maturity-carry term**. Scalar tuning is stopped. Production stays frozen. The single next gate is one structural non-production candidate that preserves a recognizable first-match payoff while separating it from automatic future escalation.