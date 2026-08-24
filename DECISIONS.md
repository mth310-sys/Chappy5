# Chappy5 Decision Log

README.md is the highest authority. This log records Director decisions below that level.

## D-001 — Repository-native operating model
- Date: 2026-08-25
- Status: ACCEPTED
- Decision: Treat Chappy5 itself as the durable studio brain. Maintain explicit state, backlog, decisions, worker protocol, product evidence, code, and verification in-repository.
- Why: The mandate requires continuity independent of chat or any single executor.
- Consequence: Work is not considered durable until important state/results are recorded here or in linked repository files.

## D-002 — Start lean; do not activate all four workers immediately
- Date: 2026-08-25
- Status: ACCEPTED
- Decision: Begin with the Director as coordinator and keep worker slots unactivated until independent, non-conflicting workstreams exist.
- Why: The repository currently contains no product direction or production code. Premature parallelism would create coordination overhead and conflicting assumptions.
- Revisit trigger: Activate workers when there are at least two clearly separable tasks with explicit outputs and ownership boundaries.

## D-003 — Evidence-first product selection
- Date: 2026-08-25
- Status: ACCEPTED
- Decision: Do not begin a large implementation before recording product hypotheses and selecting the smallest validation target.
- Why: The studio has broad discretion but no confirmed product concept yet. Small tests reduce wasted execution opportunities.

## D-004 — Simple source-of-truth files before heavier GitHub process
- Date: 2026-08-25
- Status: ACCEPTED
- Decision: Use versioned Markdown state/backlog/decision/worker files as the initial operating layer. Add Issues/PR/automation only when they solve an observed coordination or quality problem.
- Why: Current team size and repository size do not justify process overhead yet.
