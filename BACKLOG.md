# Chappy5 Backlog

Status values: TODO / ACTIVE / BLOCKED / DONE / DROPPED
Priority: P0 highest, then P1, P2, P3.

## Active

### C5-007 — Conduct first interaction validation
- Priority: P0
- Status: ACTIVE
- Owner: Director
- Depends on: C5-004
- Goal: Test the prototype against the validation questions in `prototype/PRODUCT_BRIEF.md` without adding scope first.
- Evidence: First human playtest is recorded in `prototype/VALIDATION.md` as V-001. Player reported that the rules were not understood. R-HF-002 in `research/POST_PLAYTEST_SYNTHESIS.md` additionally records that the content itself was judged disappointing. R-HF-004/R-HF-005 in `research/H1_GATE_B_FAILURE.md` now record that comprehension improved while enjoyment failed strongly.
- Current result: Gate A comprehension PASS for the current human tester after V-002; Gate B core payoff STRONG FAIL. Formal H1 lead-product disposition remains Director-owned.
- Next: Integrate the post-legibility human evidence and decide H1 lead status. Do not expand H1 scope merely because comprehension improved.

### C5-004 — Build first playable proof
- Priority: P1
- Status: ACTIVE
- Owner: Director
- Depends on: C5-003
- Goal: Implement the smallest technically verifiable playable slice.
- Output: `prototype/index.html` and `prototype/PRODUCT_BRIEF.md`.
- Current state: H1 playable source exists and V-002 bounded legibility revision is implemented. V-003 independent static/logic verification found no blocking source defect. Human evidence now shows comprehension improved but core payoff failed strongly. CI and real mobile runtime remain unconfirmed.
- Next: Preserve H1 as evidence; avoid further H1 feature expansion pending Director disposition. H2 is being prepared separately under C5-009.

### C5-005 — Establish lightweight automated verification
- Priority: P1
- Status: ACTIVE
- Owner: Director
- Depends on: C5-004
- Goal: Add repeatable checks appropriate to the selected stack.
- Current state: `scripts/verify_prototype.mjs` and `.github/workflows/verify.yml` created. Static inspection confirms the workflow invokes the verifier on main push/PR, but no successful workflow/status result has been observed through the available integration.
- Done when: At least one successful verification run is observed and recorded.

### C5-009 — Prepare bounded H2 alternative prototype
- Priority: P1
- Status: ACTIVE
- Owner: Prototype Worker
- Depends on: `research/H2_TIMING_RISK_TEST_BRIEF.md`
- Goal: Prepare a smallest-test timing/risk microgame so H1 is not optimized by sunk cost after confirmed content disappointment.
- Constraints: Keep H2 isolated from the current H1 source until Director explicitly authorizes switching the stable public entry point. One primary action, result within seconds, instant retry, no meta/economy/monetization scope.
- Implementation: `prototype_h2/index.html` added in commit `8a746446936948cb28ada36d606fcefc5cf000a4`. It implements one deterministic visible BUST boundary, one STOP action, BANKED/BUST results, immediate retry, and session BEST. Existing H1 `prototype/index.html` was not modified.
- Prototype record: `prototype_h2/VALIDATION.md` added in commit `8f912b844f42377bcfa555ed73882e59a3366206`; source-level checks and all runtime/product unknowns are recorded there.
- Current state: IMPLEMENTATION COMPLETE; INDEPENDENT VERIFICATION REQUIRED. Prototype Worker should not expand H2 before that check.
- Validation: Must be independently technically checked before it can replace or be exposed through the stable human play entry point.
- Distribution guardrail: Human direction requires one stable public play URL. Do not require the human to repeatedly discover/add new URLs; exact canonical URL remains UNKNOWN in repository evidence.
- Claim note: Prototype Worker claimed C5-009 after confirming no conflicting owner and after R-HF-004/R-HF-005 showed the bounded H1 legibility experiment had achieved Gate A but failed Gate B strongly.
- Next: Verification Worker independently checks mechanics/fairness/isolation. Director alone decides whether/when H2 may replace content behind the stable public entry point.

## Queue

## Done

### C5-008 — Revise first-play legibility
- Priority: P0
- Status: DONE
- Owner: Prototype Worker
- Depends on: V-001 in `prototype/VALIDATION.md`
- Goal: Make goal, source→collector flow, part cause/effect, success/failure, and retry loop understandable through play rather than a long help paragraph.
- Result: V-002 implemented in `prototype/index.html` at `107d7ece6f54a4756bc35ea8d0e8bbb310ed3073`; V-003 independently confirmed static/logic integrity with runtime/CI caveats. Human evidence R-HF-004 then confirmed the revised experience became understandable for the current tester.
- Product caveat: R-HF-004/R-HF-005 simultaneously show Gate B STRONG FAIL; C5-008 solved the bounded comprehension objective but did not validate H1 as enjoyable.

### C5-001 — Bootstrap repository-native studio operating system
- Priority: P0
- Status: DONE
- Owner: Director
- Result: `STUDIO_STATE.md`, `OPERATING_SYSTEM.md`, `BACKLOG.md`, `DECISIONS.md`, and `WORKERS.md` established.

### C5-002 — Define first product opportunity space
- Priority: P0
- Status: DONE
- Owner: Director
- Result: `PRODUCT_DISCOVERY.md` records current market signals, caveats, three hypotheses, and a smallest-test route.

### C5-003 — Select first game hypothesis
- Priority: P0
- Status: DONE
- Owner: Director
- Depends on: C5-002
- Result: D-005 selects H1 for validation; D-006 selects a dependency-free browser prototype stack.

### C5-006 — Define business validation plan
- Priority: P2
- Status: DONE
- Owner: Business / Operations Worker
- Depends on: C5-003
- Result: `operations/BUSINESS_VALIDATION.md` defines comprehension, core-payoff, repeatability/sharing, and commercial gates; stop/continue discipline; and stable public entry-point requirements. Monetization remains intentionally blocked until product evidence supports it.

## Work claiming rule
Before starting a task, set Owner and Status=ACTIVE. A worker must not take an ACTIVE task owned by someone else unless the prior owner explicitly releases it or the Director resolves a stale claim.
