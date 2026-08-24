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
- Revisit trigger reached: Product research, prototype implementation, verification, and business validation became separable workstreams.

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
- Status: SUPERSEDED IN CADENCE BY D-008; ROLE MODEL RETAINED
- Decision: Run the Game Studio Director every hour and activate four specialized workers—Product / Player Research, Prototype, Verification, and Business / Operations—initially every 4 hours with staggered offsets.
- Why: Multiple bounded workstreams existed and required a continuing execution system.

## D-008 — Maximize safe throughput with an hourly staggered five-stage pipeline
- Date: 2026-08-25
- Status: ACCEPTED
- Human direction: Worker cadence was judged too slow; use each Scheduled Task execution and available scheduling capacity more fully while maintaining safety and quality.
- Decision: Keep Director hourly and increase all four specialized workers to hourly. Stagger at Director :00, Research :10, Prototype :25, Verification :40, Operations :55 Asia/Tokyo. Each executor should continue to additional safe non-conflicting work within a run when capacity remains.
- Why: The product-validation phase has separable work and benefits from shorter evidence→implementation→verification feedback loops. Staggering reduces simultaneous write pressure while using the maximum supported recurring frequency.
- Guardrail: More execution opportunities must not become low-value churn. README prohibitions, ownership, evidence discipline, and verification remain mandatory.
- Revisit trigger: Repeated idle runs, conflicts, or a changed product phase.

## D-009 — Treat first-play rule confusion as a P0 product failure
- Date: 2026-08-25
- Status: ACCEPTED
- Evidence: V-001 in `prototype/VALIDATION.md` records direct human playtest feedback that the rules were not understood.
- Decision: Prioritize first-play legibility above business expansion or additional content. Revise the existing H1 prototype in a bounded way before deciding whether to retain or reject H1.
- Why: Immediate legibility is an explicit purpose and validation question in `prototype/PRODUCT_BRIEF.md`; the first human test failed that criterion.
- Guardrail: Do not solve this by merely adding a long instruction wall. Prefer visible goal/source/collector, progressive disclosure, immediate cause/effect, and explanatory run feedback.
- Revisit trigger: Second human playtest after C5-008 revision.
