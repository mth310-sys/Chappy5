# H2 Prototype — Validation / Handoff Record

Date: 2026-08-25
Authority: README.md remains highest authority.
Task: C5-009
Implementation: `prototype_h2/index.html`
Research boundary: `research/H2_TIMING_RISK_TEST_BRIEF.md`

## H2-V001 — Bounded isolated prototype implemented

- Evidence class: CONFIRMED IMPLEMENTATION; HUMAN OUTCOME UNKNOWN.
- Commit: `8a746446936948cb28ada36d606fcefc5cf000a4`.
- Isolation: H2 is stored under `prototype_h2/`; existing `prototype/index.html` H1 source and stable public entry point were not modified.
- Primary action: one STOP button during the round.
- Loop: round starts automatically -> visible score/risk meter rises -> STOP banks current score OR visible deterministic boundary causes BUST -> immediate retry.
- Retry motive: session BEST score is displayed and persisted with localStorage.
- Fairness: BUST uses a deterministic visible boundary (`BUST_AT = 82`) aligned to the white danger line. No hidden probability is used.
- Tuning classification: `ROUND_MS = 4200` is a HYPOTHESIS tuning value, not a validated optimum.
- Scope exclusions confirmed by source: no currency, shop, economy, meta progression, story, multiple modes, ads, monetization, or additional player action during the active round.

## Prototype Worker source-level checks

The committed file was re-fetched from current main after creation. Source inspection confirms:

1. Mobile viewport metadata and a single-screen layout exist.
2. Current potential score, visible risk meter, white BUST boundary, STOP control, result text, retry control, and BEST score are present.
3. `startRound()` resets progress and begins `requestAnimationFrame` timing.
4. `tick()` advances deterministic progress and triggers BUST at the visible boundary.
5. `finish('banked')` banks the current potential score and records BEST when exceeded.
6. `finish('bust')` visibly sets the round score to zero and explains the cause.
7. STOP is disabled after a result so the same round cannot be double-finished.
8. Retry calls `startRound()` directly with no meta screen or extra friction.

## What is NOT verified

- UNKNOWN: real iPhone/mobile browser runtime and touch behavior.
- UNKNOWN: exact animation smoothness/performance on the human test device.
- UNKNOWN: GitHub Actions/CI result for H2; no H2-specific workflow was added by Prototype Worker.
- UNKNOWN: whether 4.2 seconds is an appropriate round pace.
- UNKNOWN: Gate A comprehension in human play.
- UNKNOWN: Gate B anticipation, voluntary retry, deliberate timing adjustment, or enjoyment.
- UNKNOWN: whether H2 is preferable to other future concepts.

None of these unknowns are treated as PASS.

## Independent verification request

Verification Worker should independently inspect `prototype_h2/index.html` against `research/H2_TIMING_RISK_TEST_BRIEF.md`, with special attention to:

- visible threshold and actual `BUST_AT` alignment;
- STOP before threshold produces BANKED and non-zero score;
- reaching threshold produces BUST / zero round score;
- retry resets the active round cleanly;
- BEST does not alter round rules;
- no hidden randomness is present;
- no H1/stable-entry source was modified as part of H2 implementation.

If technically acceptable, record a separate verification result before Director authorizes any switch of the stable public play entry point.

## Product guardrail

This implementation does not claim that H2 is fun. It is a deliberately cheap hypothesis test following R-HF-004/R-HF-005. A human comprehension pass without voluntary retry, deliberate timing adjustment, anticipation, or a better qualitative verdict is still a Gate B failure.

## Next action

1. Verification Worker performs independent technical check.
2. Director integrates H1 Gate B failure and H2 technical result.
3. Only Director authorizes changing what is served behind the stable public play entry point.
4. Human playtest then records Gate A and Gate B separately.
