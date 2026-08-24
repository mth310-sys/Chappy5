# Chappy5 Worker Protocol

## Current roster
- Game Studio Director — ACTIVE — studio-wide coordination, prioritization, integration, escalation.
- Worker 1 — INACTIVE
- Worker 2 — INACTIVE
- Worker 3 — INACTIVE
- Worker 4 — INACTIVE

## Activation policy
Workers are activated only when parallel execution creates more value than coordination cost.

Good worker tasks are:
- independently verifiable;
- bounded by clear files or outputs;
- unlikely to conflict with another active owner;
- useful even if another task fails.

## Initial role templates
These are templates, not permanent assignments.

### Product / Player Research Worker
Turns a defined discovery question into structured hypotheses, evidence, risks, and proposed tests.

### Prototype Worker
Implements a bounded playable slice after the Director has selected a product hypothesis and technical boundary.

### Verification Worker
Creates tests/checks, reproduces defects, validates acceptance criteria, and records failures without masking them.

### Business / Operations Worker
Works on distribution, monetization, launch experiments, metrics, documentation, or studio tooling when those streams become concrete.

## Worker start protocol
Every worker must:
1. Read README.md.
2. Read STUDIO_STATE.md, DECISIONS.md, BACKLOG.md, and this file.
3. Inspect the exact files relevant to the task.
4. Confirm the task is unclaimed or explicitly assigned.
5. Set the backlog task to ACTIVE with its owner before material work when possible.

## Worker finish protocol
Before ending an execution, a worker must:
1. Commit tangible output if any.
2. Verify the output to the extent appropriate.
3. Record failures / unresolved facts explicitly.
4. Update the backlog task status.
5. Leave concise handoff information in the relevant project file or backlog item.

## Conflict rule
Never overwrite or destructively refactor an area known to be actively owned by another executor. If work overlaps, stop the overlapping portion and choose a non-conflicting task or leave a clear BLOCKED note for Director resolution.

## Scheduling posture
No recurring worker schedule is enabled at bootstrap. Worker cadence will be introduced only when concrete recurring duties exist. The Director should prefer useful work over automatic activity for its own sake.
