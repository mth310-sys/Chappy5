# Chappy5 Backlog

Status values: TODO / ACTIVE / BLOCKED / DONE / DROPPED
Priority: P0 highest, then P1, P2, P3.

## Active

### C5-004 — Build first playable proof
- Priority: P1
- Status: ACTIVE
- Owner: Director
- Depends on: C5-003
- Goal: Implement the smallest technically verifiable playable slice.
- Output: `prototype/index.html` and `prototype/PRODUCT_BRIEF.md`.
- Current state: Playable source exists. Structural/syntax CI has been defined; CI result has not yet been observed through the available GitHub integration, so full verification remains open.
- Next: Observe verification result when available, then perform interaction validation against the product brief.

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
- Priority: P1
- Status: TODO
- Owner: Unclaimed
- Depends on: C5-003
- Goal: Define what evidence would justify continuing, changing, or stopping the product direction.

### C5-007 — Conduct first interaction validation
- Priority: P1
- Status: TODO
- Owner: Unclaimed
- Depends on: C5-004
- Goal: Test the prototype against the validation questions in `prototype/PRODUCT_BRIEF.md` without adding scope first.
- Output: `prototype/VALIDATION.md` with observed evidence, failures, and next decision.

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
