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
- Status: SUPERSEDED BY D-007
- Decision: Begin with the Director as coordinator and keep worker slots unactivated until independent, non-conflicting workstreams exist.
- Why: The repository initially contained no product direction or production code. Premature parallelism would have created coordination overhead and conflicting assumptions.
- Revisit trigger reached: Product research, prototype implementation, verification, and business validation are now separable workstreams.

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

## D-005 — First validation hypothesis: one-screen chain-reaction automation sandbox
- Date: 2026-08-25
- Status: ACCEPTED FOR VALIDATION
- Decision: Use H1 from PRODUCT_DISCOVERY.md as the first prototype target.
- Why: It can expose its hook quickly, supports a small browser-first build, avoids a large content burden, and can create visible outcomes suitable for later sharing.
- Important: This is not a final commercial commitment. Failure of the prototype should cause revision or rejection rather than sunk-cost expansion.

## D-006 — First prototype stack: dependency-free web
- Date: 2026-08-25
- Status: ACCEPTED
- Decision: Build the first proof with plain HTML, CSS, and JavaScript and no external runtime dependencies.
- Why: The prototype needs to test interaction, not tooling. A dependency-free web build minimizes setup, distribution friction, and avoidable technical surface area.
- Revisit trigger: Adopt a framework/engine only when the validated interaction requires capabilities that materially outweigh added complexity.

## D-007 — Activate scheduled Director and four-worker operating loop
- Date: 2026-08-25
- Status: ACCEPTED
- Decision: Run the Game Studio Director every hour. Activate four specialized workers—Product / Player Research, Prototype, Verification, and Business / Operations—every 4 hours, staggered by 10-minute offsets.
- Why: The first product hypothesis, prototype, verification need, and business-validation queue now create multiple bounded workstreams. Scheduling turns the repository-native operating system into a continuing execution system rather than a passive handoff structure.
- Conflict control: Scheduling creates execution opportunities only. Workers must verify ownership, avoid overlapping destructive changes, and may leave the repository unchanged when no safe independent task exists. The hourly Director integrates results and resolves contention.
- Revisit trigger: Change cadence, roles, or active worker count if repeated idle runs, write conflicts, validation bottlenecks, or a changed product phase show a better structure.
