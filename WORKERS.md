# Chappy5 Worker Protocol

## Current roster
- Game Studio Director — ACTIVE — studio-wide coordination, prioritization, integration, escalation. Scheduled hourly.
- Worker 1 — ACTIVE — Product / Player Research Worker. Scheduled every 4 hours, starting at 00:25 Asia/Tokyo.
- Worker 2 — ACTIVE — Prototype Worker. Scheduled every 4 hours, starting at 00:35 Asia/Tokyo.
- Worker 3 — ACTIVE — Verification Worker. Scheduled every 4 hours, starting at 00:45 Asia/Tokyo.
- Worker 4 — ACTIVE — Business / Operations Worker. Scheduled every 4 hours, starting at 00:55 Asia/Tokyo.

## Activation policy
Workers are activated only when parallel execution creates more value than coordination cost.

Good worker tasks are:
- independently verifiable;
- bounded by clear files or outputs;
- unlikely to conflict with another active owner;
- useful even if another task fails.

The current four-worker activation is justified because product research, bounded prototype implementation, independent verification, and business/operations validation are now separable workstreams. A worker must still refrain from making changes when no safe, non-conflicting task exists.

## Role assignments

### Product / Player Research Worker
Turns a defined discovery question into structured hypotheses, evidence, risks, and proposed tests. It must not present hypotheses as confirmed facts.

### Prototype Worker
Implements bounded playable slices after the Director has selected a product hypothesis and technical boundary. It should avoid speculative scope expansion and destructive refactors.

### Verification Worker
Creates tests/checks, reproduces defects, validates acceptance criteria, and records failures without masking them. It should remain independent from implementation where practical.

### Business / Operations Worker
Works on distribution, monetization, launch experiments, metrics, documentation, or studio tooling when those streams become concrete. It must separate market hypotheses from confirmed evidence.

## Scheduling design
The Director executes every hour. Workers are staggered by 10-minute offsets and each executes every 4 hours. This reduces simultaneous write pressure while giving the Director frequent opportunities to integrate worker results and resolve conflicts.

Scheduling is an execution opportunity, not a requirement to manufacture work. If no safe, useful, non-conflicting task exists, an executor should inspect state and leave the repository unchanged rather than create low-value churn.

The Director may change cadence, deactivate a worker, or reassign roles when repository evidence shows a better operating model, provided README.md and human instructions remain satisfied.

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
