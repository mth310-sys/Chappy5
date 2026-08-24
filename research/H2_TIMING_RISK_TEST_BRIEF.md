# H2 Test Brief — Timing / Risk Microgame

Date: 2026-08-25
Status: HYPOTHESIS / RESEARCH PROPOSAL, NOT APPROVED PRODUCT
Owner: Product / Player Research Worker
Authority: README.md remains highest authority.

## Why this exists
Prototype 01 produced confirmed human feedback that rules were unclear and the content itself was disappointing. H2 is a deliberately different micro-concept designed to test whether a much simpler action→anticipation→payoff loop performs better.

This file does not authorize implementation by itself. Director decides whether/when Prototype Worker should build it.

## One-sentence player goal
**Stop at the best moment: go higher for a bigger score, but wait too long and you lose the round.**

If that sentence is not understandable in the actual build without extra explanation, the prototype has already failed Gate A.

## Smallest playable loop
1. Round begins automatically.
2. A visible value/meter climbs continuously.
3. Potential score rises with it.
4. A visible danger state also rises.
5. Player has one primary action: **STOP**.
6. If STOP is pressed before failure, the current score is banked.
7. If failure triggers first, the round scores zero (or visibly loses the unbanked value).
8. Immediate retry.

Target round length: short enough that action and consequence remain mentally connected. Exact seconds are UNKNOWN and should be tuned from playtest evidence, not presented as a confirmed optimum.

## Required visible information
- Current potential score.
- Clearly increasing danger/risk.
- One large STOP control.
- Result state: BANKED or BUST.
- Best score / visible threshold to create a retry motive.

## What must not be added to the first test
- Currency or shop.
- Meta progression.
- Characters/story.
- Multiple currencies.
- Skill tree.
- Ads/monetization.
- Multiple game modes.
- Complicated probability tables hidden from the player.
- More than one primary action during the first-run test.

## Design hypotheses

### H2-A — Comprehension
HYPOTHESIS: A single STOP action with visibly rising reward and danger will be understood faster than Prototype 01's three-part construction choice.

Failure signal: Human cannot explain "wait for more / stop before bust" after one round.

### H2-B — Anticipation
HYPOTHESIS: Simultaneous rising reward and danger creates an observable tension moment before the tap.

Failure signal: Player reports no tension/interest or taps at arbitrary times without understanding the tradeoff.

### H2-C — Retry motive
HYPOTHESIS: A visible best score or target causes at least one voluntary retry because the player believes a better timing choice could improve the result.

Failure signal: Player understands the game but has no desire to retry.

## Interaction feedback requirements
The first prototype should make state changes obvious through layout/motion/text without relying on a long instruction panel.

- Reward growth must be visually separable from risk growth.
- STOP must produce an immediate, unmistakable result.
- BUST must have a clearly different result from successful banking.
- Retry must require minimal friction.
- A player should see why a different stopping time could change the next result.

## Fairness guardrail
The test should not fake skill by using an unexplained random failure that makes timing meaningless.

Two acceptable early implementations:
1. **Deterministic threshold test** — failure occurs at a known/learnable meter boundary; validates comprehension and timing first.
2. **Visible-risk test** — risk probability increases but is communicated explicitly enough that the tradeoff is understandable.

Research recommendation: start deterministic or highly legible before introducing probability. If randomness is later tested, label it as such and do not disguise it as deterministic skill.

## Human playtest script
Do not explain the mechanics beyond launching the game unless the build itself instructs the player.

Observe first; then record:
1. Can the player state the goal after one round?
2. Can the player state why waiting is tempting?
3. Can the player state why STOP matters?
4. Did the player retry voluntarily?
5. Did the player try a meaningfully different stopping point?
6. Qualitative verdict in the player's own words.

## Pass / revise / reject policy

### PASS TO NEXT ITERATION
- Gate A comprehension passes, AND
- evidence of at least one payoff signal exists: voluntary retry, deliberate timing adjustment, anticipation, or positive qualitative reaction.

### REVISE ONCE
- Goal is understood but feedback/fairness is confusing, and the defect is narrow enough to fix without changing the core loop.

### REJECT / COMPARE ANOTHER CONCEPT
- Player understands the loop but still finds it dull/disappointing and shows no replay motive.
- Or the core risk/reward cannot be communicated without adding substantial complexity.

## Stable public URL requirement
If implemented, publish H2 through the same established public play URL / home-screen entry whenever technically feasible. Do not force the human tester to repeatedly locate a new URL. If side-by-side comparison requires multiple builds, Director/Operations must design navigation while preserving one stable entry point.

## Implementation boundary proposal
If Director approves H2, Prototype Worker should implement only:
- one screen;
- one STOP action;
- rising reward/risk state;
- bank/bust result;
- immediate retry;
- best/target score;
- minimal first-run cue.

Everything else is out of scope until human evidence exists.

## Research handoff
H2 is ready for Director comparison against the bounded H1 legibility revision. No claim is made that H2 is fun; it is only cheaper and cleaner to test for comprehension + anticipation + replay motive.
