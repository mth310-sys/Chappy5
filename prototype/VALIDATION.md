# Prototype 01 — Validation Record

Authority: README.md remains highest authority.
Prototype: `prototype/index.html`
Product brief: `prototype/PRODUCT_BRIEF.md`

## Evidence log

### V-001 — First human playtest: rules not understood
- Date: 2026-08-25
- Evidence class: CONFIRMED HUMAN FEEDBACK
- Source: Human owner played the prior prototype and reported: 「ゲームプレイしたけどルールがよくわからん」.
- Interpretation: The prior prototype failed the product brief's primary legibility test. A player who actually interacted with the build did not understand the rules well enough for the intended one-screen interaction to be self-explanatory.
- Confidence: HIGH for the existence of the legibility failure; UNKNOWN for which exact UI/mechanic elements caused it because no narrower diagnostic feedback was collected from that build.

### V-002 — Bounded legibility revision implemented
- Date: 2026-08-25
- Evidence class: CONFIRMED IMPLEMENTATION / HUMAN OUTCOME UNKNOWN
- Commit: `107d7ece6f54a4756bc35ea8d0e8bbb310ed3073`
- Scope: C5-008 only. H1 core routing mechanics were retained; no progression, economy, narrative, monetization, or speculative content was added.
- Changes:
  - UI localized to Japanese for the current human test context.
  - One-sentence objective made persistent and prominent.
  - SOURCE / COLLECTOR and left-to-right flow made visually explicit.
  - First-use highlighted placement cell added.
  - Progressive disclosure introduced: Diverter initially available; Booster after first run; Splitter after second run.
  - Each part now explains its immediate cause/effect at selection/placement.
  - Result feedback distinguishes red-block collision from leaving the board and suggests a directly related correction.
  - Delivery scoring is applied when the outcome occurs so the run-end explanation can reflect the actual result.
  - Retry remains one button with the existing board preserved; reset remains separate.
- Repository check: The updated `prototype/index.html` was re-fetched from main and the expected revised source is present. Existing required structural identifiers and constants remain present by inspection.
- Automated/independent verification: No GitHub status/check result was observable for commit `107d7ece6f54a4756bc35ea8d0e8bbb310ed3073` during this Prototype Worker run. Therefore CI success and independent technical verification remain UNCONFIRMED and are handed to Verification Worker.
- Human legibility result: UNKNOWN. V-001 remains unresolved until a new human playtest.

## Validation questions
- Can a new observer explain the flow after one run? **FAIL on prior build / RETEST REQUIRED on V-002 build.**
- Does moving one part create an obvious change in outcome? **UNKNOWN; V-002 adds direct feedback but requires human evidence.**
- Are there at least two viable layouts with materially different scores? **UNKNOWN.**
- Is retrying fast enough that experimentation feels natural? **UNKNOWN.**

## Revision acceptance target
The V-002 build is intended to make the following understandable without a long explanation:
- visible source and collector;
- a single concrete objective stated in player language;
- parts introduced progressively rather than three unexplained choices at once;
- first action/run produces an obvious before/after result;
- score/miss feedback explains why the result changed;
- retry path remains fast.

These are implementation targets, not proven human outcomes.

## Known product limitation
Research evidence R-HF-002 records that the prior content itself was judged disappointing, not merely confusing. V-002 must therefore be treated as a bounded diagnostic legibility revision, not evidence that H1 is now a good or preferred game. Even if comprehension improves, core-payoff validation remains required and H1 should be compared against an alternative concept if directed by the Director.

## Next validation
1. Verification Worker independently checks technical integrity of V-002 and records failures without masking them.
2. After technical integrity is acceptable, obtain a new human playtest through the stable public play URL.
3. Do not mark V-001 resolved until the human can describe the goal and basic cause/effect after playing.
4. Separately retain the content/hook disappointment as unresolved; passing comprehension alone is insufficient to validate H1.
