# Chappy5 Backlog

Status values: TODO / ACTIVE / BLOCKED / DONE / DROPPED
Priority: P0 highest, then P1, P2, P3.

## Active

### C5-001 — Bootstrap repository-native studio operating system
- Priority: P0
- Status: ACTIVE
- Owner: Director
- Goal: Make the business resumable from repository state alone.
- Done when: state, operating rules, backlog, decisions, and worker protocol exist and are mutually consistent.

## Queue

### C5-002 — Define first product opportunity space
- Priority: P0
- Status: TODO
- Owner: Unclaimed
- Goal: Identify a small set of plausible game concepts/business angles without relying on other GitHub repositories or chat memory as factual product input.
- Output: PRODUCT_DISCOVERY.md with hypotheses, target player, differentiator, scope, risks, and validation route.
- Constraint: Assumptions must be marked as hypotheses.

### C5-003 — Select first game hypothesis
- Priority: P0
- Status: TODO
- Owner: Unclaimed
- Depends on: C5-002
- Goal: Choose one concept for the first validation cycle.
- Output: Recorded decision in DECISIONS.md and initial product brief.

### C5-004 — Build first playable proof
- Priority: P1
- Status: TODO
- Owner: Unclaimed
- Depends on: C5-003
- Goal: Implement the smallest technically verifiable playable slice.
- Output: source code + run instructions + verification evidence.

### C5-005 — Establish lightweight automated verification
- Priority: P1
- Status: TODO
- Owner: Unclaimed
- Depends on: C5-004
- Goal: Add repeatable checks appropriate to the selected stack.

### C5-006 — Define business validation plan
- Priority: P1
- Status: TODO
- Owner: Unclaimed
- Depends on: C5-003
- Goal: Define what evidence would justify continuing, changing, or stopping the product direction.

## Done
None yet.

## Work claiming rule
Before starting a task, set Owner and Status=ACTIVE. A worker must not take an ACTIVE task owned by someone else unless the prior owner explicitly releases it or the Director resolves a stale claim.
