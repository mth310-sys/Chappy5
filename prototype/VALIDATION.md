# Prototype 01 — Validation Record

Authority: README.md remains highest authority.
Prototype: `prototype/index.html`
Product brief: `prototype/PRODUCT_BRIEF.md`

## Evidence log

### V-001 — First human playtest: rules not understood
- Date: 2026-08-25
- Evidence class: CONFIRMED HUMAN FEEDBACK
- Source: Human owner played the current prototype and reported: 「ゲームプレイしたけどルールがよくわからん」.
- Interpretation: The current prototype fails the product brief's primary legibility test. A player who actually interacted with the build did not understand the rules well enough for the intended one-screen interaction to be self-explanatory.
- Confidence: HIGH for the existence of the legibility failure; UNKNOWN for which exact UI/mechanic elements caused it because no narrower diagnostic feedback has yet been collected.

## Validation questions
- Can a new observer explain the flow after one run? **FAIL / strong evidence.** The first human player reports that the rules are unclear.
- Does moving one part create an obvious change in outcome? **UNKNOWN.**
- Are there at least two viable layouts with materially different scores? **UNKNOWN.**
- Is retrying fast enough that experimentation feels natural? **UNKNOWN.**

## Director diagnosis
The highest-value next step is not adding content, progression, monetization, or more machine parts. The prototype must first communicate four things through the interaction itself:
1. What the player is trying to achieve.
2. Where energy starts and where it must go.
3. What each available action changes.
4. What success/failure looks like immediately after RUN.

The current help paragraph is insufficient evidence of legibility; the validation target is comprehension through play, not merely availability of written instructions.

## Revision acceptance target
A revised build should make the following understandable without requiring a long explanation:
- visible source and collector;
- a single concrete objective stated in player language;
- parts introduced with immediate cause/effect rather than three unexplained choices at once;
- first action/run produces an obvious before/after result;
- score/miss feedback explains why the result changed;
- retry path remains fast.

## Next validation
After a bounded legibility revision, request another human playtest. Do not mark the interaction validated until new evidence shows that the player can describe the goal and basic cause/effect after playing.
