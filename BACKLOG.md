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
- Evidence: First human playtest is recorded in `prototype/VALIDATION.md` as V-001. Player reported that the rules were not understood.
- Current result: LEGIBILITY FAIL. Other validation questions remain UNKNOWN.
- Next: Revise only the legibility/onboarding layer, then obtain a new human playtest before expanding scope.

### C5-008 — Revise first-play legibility
- Priority: P0
- Status: TODO
- Owner: Unclaimed
- Depends on: V-001 in `prototype/VALIDATION.md`
- Goal: Make goal, source→collector flow, part cause/effect, success/failure, and retry loop understandable through play rather than a long help paragraph.
- Constraints: Keep the core H1 experiment small; do not add meta progression, economy, narrative, monetization, or speculative content. Prefer progressive disclosure and visible cause/effect over more prose.
- Acceptance: Revised build satisfies the bounded targets in `prototype/VALIDATION.md` and is ready for a second human playtest.

### C5-004 — Build first playable proof
- Priority: P1
- Status: ACTIVE
- Owner: Director
- Depends on: C5-003
- Goal: Implement the smallest technically verifiable playable slice.
- Output: `prototype/index.html` and `prototype/PRODUCT_BRIEF.md`.
- Current state: Playable source exists. Structural/syntax CI has been defined; CI result has not yet been observed through the available GitHub integration, so full verification remains open.
- Next: Preserve technical scope while C5-008 addresses the confirmed legibility failure.

### C5-005 — Establish lightweight automated verification
- Priority: P1
- Status: ACTIVE
- Owner: Director
- Depends on: C5-004
- Goal: Add repeatable checks appropriate to the selected stack.
- Current state: `scripts/verify_prototype.mjs` and `.github/workflows/verify.yml` created. Workflow result not yet confirmed through the available integration.
- Done when: At least one successful verification run is observed and recorded.

## Queue

### C5-006 — Define business validation plan
- Priority: P2
- Status: TODO
- Owner: Unclaimed
- Depends on: C5-003
- Goal: Define what evidence would justify continuing, changing, or stopping the product direction.
- Note: Lower priority until the core interaction survives legibility validation.

## Done

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

## Work claiming rule
Before starting a task, set Owner and Status=ACTIVE. A worker must not take an ACTIVE task owned by someone else unless the prior owner explicitly releases it or the Director resolves a stale claim.
