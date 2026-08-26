# EX-022 — First matching continuation lock-in splits into immediate reward and maturity carry

- **Status:** `STRATEGY_CLEARANCE_BLOCKED / FIRST_MATCH_REWARD_AND_MATURITY_CAUSALLY_SEPARATED`
- **Severity:** 4
- **Confidence:** HIGH for measured causal split / MEDIUM-HIGH for design interpretation
- **Verification Type:** `OBSERVED + SIMULATED` (`HUMAN_VERIFIED`: no)

## Executive integration

Latest `main` and the full `README.md` were re-read before this decision. Production `game.js`, UI/save format and `HUMAN_CANDIDATE_01` remain frozen.

Since EX-021, all four Director streams point at the same boundary:

- **Systems GS-018:** the first matching resonance reward is causal. Production `+5` creates a large 2–3 decision switching penalty; a coarse `+3` still leaves excessive lock-in, so coefficient micro-search was stopped.
- **Player Experience PX-014:** removing the first reward entirely may fix arithmetic while destroying the first clear resonance payoff beat; strategy and reward feel must be separated rather than traded blindly.
- **Progression P-021:** signal affinity, match-frequency boosts, first-match bonuses, chain-start reinforcement and resonance multipliers remain blocked because they would permanently amplify the unresolved boundary.
- **Technical TQ-020:** decision-driving probes are production-parity guarded. TQ-019 route permutation semantics and physical iPhone/Safari lifecycle remain unresolved.
- No new `HUMAN_VERIFIED` feedback exists.

## New causal diagnostic

Executive extended the existing deterministic `tests/first-match-continuation-probe.mjs` with one diagnostic only:

1. sample the same active-chain `chainLen=1` states whose offered resonance signal matches the current chain;
2. neutralize the first matching continuation reward to `+0` in both comparison conditions;
3. in the new diagnostic branch only, preserve the signal but normalize the post-match chain from `chainLen=2` back to `chainLen=1` before subsequent decisions;
4. leave route base reward, Energy, Threat, anomaly behavior, extraction policy, 50% non-resonance chain break, collapse rolls and common exogenous randomness unchanged.

A dedicated parity guard verifies that the normalization is limited to that first matching continuation boundary.

`ECHO DRIFT Regression` run `32947874064` completed **success**. State regression, both parity guards and every existing strategy/decision probe passed.

The sample remains **26,470 matching `chainLen=1` states**.

## Causal split

### Production first match

| Horizon | Mean `switch - resonance` secured bank |
|---|---:|
| 2 decisions | **-3.67102** |
| 3 decisions | **-3.89082** |

### Remove only the immediate first-match `+5`

Using the existing `noFirstMatchBonus` control while still carrying `chainLen=2` forward:

| Horizon | Mean `switch - resonance` secured bank |
|---|---:|
| 2 decisions | **+0.12388** |
| 3 decisions | **-0.48028** |

Relative to production, neutralizing the immediate reward improves the mean difference by **+3.79490 / +3.41054 bank** and sharply reduces resonance wins. This confirms GS-018: the immediate `+5` is the dominant causal contributor.

### Then remove only the automatic maturity carry

With the first-match reward already fixed at `+0`, preserving the same signal but normalizing the resulting chain from `2` back to `1` changes the result by:

| Horizon | Switch-win delta | Resonance-win delta | Mean `switch - resonance` delta |
|---|---:|---:|---:|
| 2 decisions | **+4.07 pt** | **-3.93 pt** | **+0.44545** |
| 3 decisions | **+3.57 pt** | **-3.76 pt** | **+0.47843** |

That produces an absolute mean difference of approximately:

- **2 decisions: +0.56932**
- **3 decisions: -0.00185**

The remaining 3-decision lock-in after removing `+5` is therefore almost entirely explained by **automatically carrying the matured `chainLen=2` state into future decisions**.

All values are `SIMULATED`, not human-play results.

## Executive interpretation

The first matching continuation is not one balance lever. It combines two different benefits on the same tap:

1. **large immediate secured-reward advantage** — the current `+5`;
2. **persistent future-state escalation** — the chain automatically matures from `1` to `2`, increasing later matching continuation value.

The immediate reward is the much larger contributor, but the smaller maturity carry is strategically meaningful because it accounts for almost all of the residual 3-step penalty after the immediate bonus is neutralized.

This explains why prior high-chain tuning and `+3` reduction were insufficient: they changed magnitudes while leaving the same tap responsible for both **reward celebration** and **automatic future escalation**.

## Executive decision

Do **not** implement `+0` or maturity normalization in production. Those are diagnostic controls, not approved game rules.

Do not resume `+2/+1` coefficient search. The current evidence is strong enough that more scalar fitting would optimize the simulator rather than resolve the design problem.

Do not promote `HUMAN_CANDIDATE_02` yet.

### Single current priority

**Probe one structural first-match candidate that separates the reward beat from automatic future escalation, without coefficient sweeping.**

The next non-production candidate should preserve a clearly recognizable first successful-match payoff while preventing that same first match from also granting full automatic maturity carry. It must then be evaluated in the full deterministic state-conditioned strategy harness, not only the local 2–3 step branch.

The candidate passes only if all of the following hold:

- fixed resonance no longer has a material structural advantage over a contextual policy;
- calm/deep remain meaningfully viable in mismatch states;
- no new fixed-calm or fixed-deep optimum replaces the old resonance optimum;
- the rule is legible enough that PX can later explain the reward/state transition without hidden exception logic;
- no persistent-progression reward reopens the same boundary.

If no single structural candidate clears these conditions before the trial end, production remains frozen and the final report should explicitly carry this unresolved Severity-4 boundary into the go/no-go judgment.

## Cross-Director implications

- **Systems:** treat immediate first-match reward and maturity carry as separate causal terms. Stop scalar tuning; test one structural decoupling candidate only.
- **PX:** the first successful match still needs a satisfying reward beat, but reward feel must not require automatic strategic lock-in. Human feel remains unverified.
- **Progression:** first-match amplification, signal affinity, chain-start boosts and maturity acceleration remain blocked.
- **Technical:** keep the new diagnostic parity-guarded. TQ-019 and physical Safari/iPhone verification remain open before any Controlled Playable promotion.

## Safety / scope

- Production gameplay: unchanged.
- UI/save format: unchanged.
- `HUMAN_CANDIDATE_01`: unchanged.
- No human-fun claim.
- No large refactor.
