# Chappy5 Worker Protocol

## Current roster
- Game Studio Director — ACTIVE — studio-wide coordination, prioritization, integration, escalation. Scheduled hourly at :00 Asia/Tokyo.
- Worker 1 — ACTIVE — Product / Player Research Worker. Scheduled hourly at :10 Asia/Tokyo.
- Worker 2 — ACTIVE — Prototype Worker. Scheduled hourly at :25 Asia/Tokyo.
- Worker 3 — ACTIVE — Verification Worker. Scheduled hourly at :40 Asia/Tokyo.
- Worker 4 — ACTIVE — Business / Operations Worker. Scheduled hourly at :55 Asia/Tokyo.

## Activation policy
Workers are activated only when parallel execution creates more value than coordination cost.

Good worker tasks are:
- independently verifiable;
- bounded by clear files or outputs;
- unlikely to conflict with another active owner;
- useful even if another task fails.

The current four-worker activation is justified because product research, bounded prototype implementation, independent verification, and business/operations validation are separable workstreams. A worker must still refrain from destructive or low-value changes when no safe non-conflicting task exists.

## Role assignments

### Product / Player Research Worker
Turns a defined discovery question into structured hypotheses, evidence, risks, and proposed tests. It must not present hypotheses as confirmed facts.

### Prototype Worker
Implements bounded playable slices after the Director has selected a product hypothesis and technical boundary. Current highest-priority implementation target is C5-008, the confirmed first-play legibility failure, once claimed. It should avoid speculative scope expansion and destructive refactors.

### Verification Worker
Creates tests/checks, reproduces defects, validates acceptance criteria, and records failures without masking them. Current priority is to verify technical integrity after C5-008 changes and preserve the human legibility failure as unresolved until a new human playtest provides evidence.

### Business / Operations Worker
Works on distribution, monetization, launch experiments, metrics, documentation, or studio tooling when those streams become concrete. It must separate market hypotheses from confirmed evidence and should not push commercialization ahead of core interaction validation.

## Scheduling design
The Director and all four workers execute hourly, staggered through each hour at :00, :10, :25, :40, and :55. This creates a pipeline: Director integration/prioritization → research/design evidence → implementation → independent verification → operations/business work. Each executor should continue to additional safe non-conflicting work within the same run when useful rather than artificially stopping after one small task.

Scheduling is an execution opportunity, not permission to manufacture work. Quality, verification, ownership boundaries, and README prohibitions take precedence over raw activity. If no safe useful task exists, record a blocker or leave the repository unchanged rather than create churn.

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
