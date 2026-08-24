# Chappy5 Studio State

Last updated: 2026-08-25
Authority: README.md is the highest-level instruction.

## Mission
Build and continuously operate a new game business using this repository as the durable brain, memory, work ledger, and handoff point.

## Current phase
PHASE 1 — First product validation

## Current objective
Validate whether the first one-screen chain-reaction automation interaction is technically sound, immediately legible, and worth replaying before expanding scope.

## Operating status
- Director: ACTIVE
- Workers: NOT YET ACTIVATED
- Product direction: H1 SELECTED FOR VALIDATION
- Prototype: `prototype/index.html` IMPLEMENTED
- Automated verification: DEFINED, RESULT NOT YET OBSERVED
- Final commercial direction: UNCONFIRMED
- External GitHub repository use: PROHIBITED

## Immediate priorities
1. Confirm prototype verification result.
2. Test the actual interaction against `prototype/PRODUCT_BRIEF.md`.
3. Record failures and player-legibility evidence in `prototype/VALIDATION.md`.
4. Decide continue / revise / reject H1 before adding meta systems or content.
5. Define a lightweight business validation plan only after the core interaction survives the first design test.

## Source-of-truth order
1. README.md — immutable top-level mandate and prohibitions.
2. STUDIO_STATE.md — current operational state and immediate priorities.
3. DECISIONS.md — accepted decisions and rationale.
4. BACKLOG.md — actionable work queue and status.
5. WORKERS.md — worker roles, claims, handoff, and conflict avoidance.
6. Other project files — product, research, design, code, tests, and evidence.

If two lower-level files conflict, prefer the newer explicitly recorded decision and repair the stale file. Nothing may override README.md.

## Resume protocol
Every executor should begin by reading, in order:
1. README.md
2. STUDIO_STATE.md
3. DECISIONS.md
4. BACKLOG.md
5. WORKERS.md

Then inspect files directly related to the claimed task before changing anything.

## Completion rule
A task is only DONE when its tangible output exists in this repository, required verification has been performed, and BACKLOG.md / STUDIO_STATE.md are updated as needed. Unknowns must remain explicitly unknown.

## Current handoff
Studio bootstrap is complete. Product discovery selected H1 for validation and D-006 selected a dependency-free web stack. The first playable source, product brief, verification script, and GitHub Actions workflow are committed. Do not claim the prototype verified until a successful run or equivalent direct verification is observed. Do not expand scope before interaction validation.
