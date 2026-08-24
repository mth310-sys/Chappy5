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
- Automated/independent verification: See V-003. CI success remains unobserved, but an independent static/logic inspection has now been completed.
- Human legibility result: UNKNOWN. V-001 remains unresolved until a new human playtest.

### V-003 — Independent technical inspection of V-002
- Date: 2026-08-25
- Evidence class: CONFIRMED STATIC / LOGIC INSPECTION; RUNTIME CI RESULT UNKNOWN
- Executor: Verification Worker
- Scope: Independent verification of the V-002 implementation without modifying `prototype/index.html`.
- Confirmed structure:
  - `prototype/index.html` on current main contains Japanese UI, persistent one-sentence objective, explicit SOURCE → COLLECTOR labeling, `board`, `runButton`, `resetButton`, all three tool declarations, 7x5 constants, six-part limit, and the central routing blocker expected by `scripts/verify_prototype.mjs`.
  - Existing verifier parses the single inline browser script with `new Function(...)` and checks the required structural snippets plus central blocker.
  - `.github/workflows/verify.yml` is configured to run `node scripts/verify_prototype.mjs` on pushes and pull requests targeting `main`.
- Confirmed interaction wiring by source inspection:
  - Initial hint is at column 1 / source row, immediately before blocker `2,2`; placing the default upward Diverter there moves the token off the blocked source lane before it reaches that blocker.
  - Diverter direction toggles on tapping an existing Diverter and its feedback text updates to the new direction.
  - Booster is disabled until the first completed run and Splitter until the second completed run through `runCount` / `unlockStage` and `updateToolAvailability()`.
  - Run completion distinguishes delivery, blocker miss, and edge miss, and supplies reason-specific feedback.
  - Delivered score is incremented at delivery by the token's current value, so Booster value is reflected in score.
  - Reset clears board parts, score, deliveries, misses, active tokens, and restores the first-cell hint while leaving within-session unlock progression intact.
- CI/status observation:
  - GitHub combined-status lookup for commit `107d7ece6f54a4756bc35ea8d0e8bbb310ed3073` returned no statuses through the available integration. Therefore CI PASS/FAIL remains UNKNOWN; absence of a reported status is not treated as success.
- Runtime limitation:
  - This verification run did not execute the page in a real mobile browser or observe animation/touch behavior. Static/logic integrity is acceptable for handoff, but human/mobile runtime behavior remains unconfirmed.
- Verdict: TECHNICAL STATIC CHECK PASS WITH RUNTIME/CI CAVEAT. No blocking source defect was identified in the bounded V-002 acceptance targets. Proceed to a second human playtest only as a product-comprehension test; do not treat this verdict as evidence that H1 is fun or commercially viable.

## Validation questions
- Can a new observer explain the flow after one run? **FAIL on prior build / RETEST REQUIRED on V-002 build.**
- Does moving one part create an obvious change in outcome? **SOURCE LOGIC SUPPORTS THIS / HUMAN EVIDENCE STILL REQUIRED.**
- Are there at least two viable layouts with materially different scores? **UNKNOWN.**
- Is retrying fast enough that experimentation feels natural? **SOURCE PATH EXISTS / HUMAN EVIDENCE STILL REQUIRED.**

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
1. Technical static inspection is complete under V-003; CI/runtime status remains unconfirmed.
2. Obtain a new human playtest through the stable public play URL.
3. Do not mark V-001 resolved until the human can describe the goal and basic cause/effect after playing.
4. Separately retain the content/hook disappointment as unresolved; passing comprehension alone is insufficient to validate H1.
5. If the human test exposes a concrete runtime defect, reproduce it separately before changing product scope.
