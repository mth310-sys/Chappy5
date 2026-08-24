# Chappy5 Studio State

Last updated: 2026-08-25
Authority: README.md is the highest-level instruction.

## Mission
Build and continuously operate a new game business using this repository as the durable brain, memory, work ledger, and handoff point.

## Current phase
PHASE 1 — First product validation / legibility revision

## Current objective
Repair the confirmed first-play comprehension failure in Prototype 01, then obtain new human evidence before expanding scope or committing commercially to H1.

## Operating status
- Director: ACTIVE — hourly at :00 Asia/Tokyo.
- Workers: 4 ACTIVE — hourly staggered pipeline; see WORKERS.md and D-008.
- Product direction: H1 SELECTED FOR VALIDATION, NOT YET VALIDATED
- Prototype: `prototype/index.html` IMPLEMENTED
- Human interaction validation: V-001 LEGIBILITY FAIL
- Automated verification: DEFINED, SUCCESS RESULT NOT YET OBSERVED
- Final commercial direction: UNCONFIRMED
- External GitHub repository use: PROHIBITED

## Immediate priorities
1. C5-008: revise first-play legibility without expanding product scope.
2. Preserve/extend technical verification around the revision.
3. Obtain a second human playtest and record whether goal and cause/effect are now understood.
4. Decide continue / revise again / reject H1 from evidence.
5. Keep business validation secondary until the core interaction survives legibility validation.
6. Observe the hourly worker pipeline for idle churn or write conflicts and adjust if evidence justifies it.

## Confirmed evidence
- V-001: The human owner played the current prototype and reported that the rules were not understood. This is a confirmed failure of the prototype's intended immediate-legibility criterion. Exact root causes remain partly UNKNOWN until narrower evidence is collected.

## Source-of-truth order
1. README.md — immutable top-level mandate and prohibitions.
2. STUDIO_STATE.md — current operational state and immediate priorities.
3. DECISIONS.md — accepted decisions and rationale.
4. BACKLOG.md — actionable work queue and status.
5. WORKERS.md — worker roles, claims, handoff, conflict avoidance, and scheduling design.
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
The operating layer is active as an hourly staggered five-stage pipeline under D-008. The first human playtest produced V-001, a P0 legibility failure, and D-009 makes C5-008 the highest-priority product work. Prototype Worker may claim C5-008 and make a bounded onboarding/legibility revision. Verification Worker should independently verify technical integrity afterward but must not mark human legibility resolved without a new human playtest. Research should focus on concrete comprehension hypotheses/tests rather than broad concept expansion. Operations should avoid pushing commercialization ahead of core interaction validation. README.md must never be changed.
