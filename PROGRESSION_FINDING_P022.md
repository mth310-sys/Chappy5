# P-022 — Progression must not couple first-match celebration to automatic maturity acceleration

- **Status:** `BLOCKED_DESIGN_GATE / REWARD_BEAT_AND_STATE_ESCALATION_MUST_REMAIN_SEPARATE`
- **Severity:** 4
- **Confidence:** HIGH for causal split / MEDIUM-HIGH for progression-design consequence
- **Verification Type:** `OBSERVED + SIMULATED + DESIGN ANALYSIS` (`HUMAN_VERIFIED`: no)

## Evidence

Latest `main` and the full `README.md` were re-read before this Progression pass. Production `game.js` and `HUMAN_CANDIDATE_01` remain unchanged.

EX-022 isolates two benefits currently granted by the same first matching resonance continuation in **26,470** sampled `chainLen=1` matching states:

1. the immediate first-match `+5` reward;
2. automatic future-state escalation from `chainLen=1` to `chainLen=2`.

Production mean `switch - resonance` secured-bank differences are **-3.67102** over 2 decisions and **-3.89082** over 3 decisions.

Neutralizing only the immediate `+5` changes those values to **+0.12388 / -0.48028**, showing that the immediate reward is the dominant causal contributor. With that reward already neutralized, additionally normalizing the carried state from `chainLen=2` back to `chainLen=1` changes the absolute result to approximately **+0.56932 / -0.00185**. The automatic maturity carry therefore explains almost all of the residual 3-decision lock-in after the immediate reward is removed.

These values are `SIMULATED`, not human-play results.

## Progression interpretation

This creates a stronger long-term design constraint than P-021 alone. A future progression system must not treat **reward celebration** and **persistent strategic escalation** as the same upgrade axis.

A permanent unlock such as "first match pays more and starts a stronger chain", "matching immediately advances chain tier", "signal affinity grants stronger continuation state", or "chain-start level +1" would recreate the exact double benefit that EX-022 identified as the current Severity-4 lock-in boundary.

The useful progression opportunity is the opposite: once the core is strategically cleared, progression may vary **what the player does with accumulated state** without automatically increasing its power. Examples worth later prototyping are voluntary transform, sacrifice, conversion, or extraction-timing commitments where the reward beat can remain satisfying while future state strength is not silently escalated.

This also strengthens the trajectory-level gate from P-019. A progression choice is not meaningfully different merely because it produces a different immediate reward animation or number. It must remain a viable alternative across later decisions and extraction timing without receiving automatic maturity acceleration.

## Recommended Action

1. Keep persistent progression implementation blocked until Executive's single structural first-match candidate is tested in the full deterministic state-conditioned harness.
2. Explicitly block permanent first-match payout boosts, chain-start level boosts, maturity acceleration, signal-affinity upgrades, match-frequency boosts, resonance multipliers, and any combined upgrade that improves both immediate first-match reward and future chain state.
3. If Executive clears a structural separation between reward beat and state escalation, treat that separation as a **protected core boundary**, not a progression stat to be reopened later.
4. Preserve extraction horizon as the strongest currently observed progression dimension that is not itself this balance defect.
5. After strategic clearance, the first tiny progression prototype should change a player's multi-decision trajectory through voluntary transform/sacrifice/conversion plus extraction timing, while sharing the same cleared first-match and maturity rules.
6. Do not add enemies, items, discoveries, stages or prose merely to create runway. Existing content-exhaustion, collection-agency and world-discovery failures remain unresolved.

## Relationship to prior findings

- **P-021 remains valid**: first matching continuation is the active core boundary.
- **P-022 refines P-021** by separating that boundary into immediate reward and maturity carry, and converts the causal split into a permanent progression constraint.
- **P-019 remains required**: future builds must survive multi-decision trajectory comparison.
- **P-015 remains supported direction**: extraction horizon remains differentiated across strategies.
- **P-016/P-020 remain constraints**: do not revive rejected signal-causal mapping or generic chain-survival subsidies as progression shortcuts.

## Executive handoff

Progression remains **FAIL / BLOCKED** at the mid- and long-term layers. No progression feature should be implemented before the current Severity-4 first-match structure is cleared. If the upcoming single structural candidate succeeds, Progression should evaluate whether two tiny mutually exclusive commitments can alter **voluntary state transformation/sacrifice and extraction horizon** while both obey the same protected first-match reward/state boundary. If it fails before the trial end, carry P-022 unchanged into the final go/no-go report rather than compensating with meta progression or content volume.
