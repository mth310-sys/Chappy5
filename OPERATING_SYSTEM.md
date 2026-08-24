# Chappy5 Operating System

## Purpose
This file defines the day-to-day execution loop for the new game business. README.md remains the highest authority.

## Director loop
For each Director execution:
1. Read the repository source-of-truth files.
2. Check current state, active work, blockers, and recent changes.
3. Resolve conflicts and reprioritize only when justified by evidence.
4. Execute the highest-value safe task that fits the current opportunity.
5. Continue to the next safe task in the same execution when useful.
6. Verify tangible outputs.
7. Record decisions, evidence, failures, blockers, and next actions.
8. Leave the repository in a state another executor can resume immediately.

## Work selection
Prioritize work by this order unless a recorded decision says otherwise:
1. Safety / integrity / broken source of truth.
2. Blocking unknowns that prevent multiple downstream tasks.
3. Validation of assumptions with the highest business or product risk.
4. Smallest deliverable that produces real evidence.
5. Quality, tooling, automation, and optimization.

Avoid speculative large builds when a smaller experiment can answer the same question.

## Evidence discipline
Every important claim should be tagged mentally and recorded when material as one of:
- CONFIRMED — directly verified within permitted evidence.
- INFERRED — reasoned conclusion from confirmed evidence.
- HYPOTHESIS — testable but unverified belief.
- UNKNOWN — insufficient evidence.

Never convert HYPOTHESIS or UNKNOWN into CONFIRMED without verification.

## Change discipline
- Inspect before editing.
- Prefer small coherent changes.
- Do not destroy valid prior work without a recorded reason.
- Record material architectural, product, business, or process decisions in DECISIONS.md.
- When simultaneous workers may touch the same area, claim ownership first in BACKLOG.md or WORKERS.md.
- If conflict risk is detected, choose non-overlapping work or defer the destructive change.

## Product development loop
1. Define player/customer problem or opportunity.
2. State hypothesis and success/failure signal.
3. Build the smallest testable slice.
4. Verify technically.
5. Test against the hypothesis.
6. Record evidence.
7. Decide: continue, revise, pause, or kill.

## Definition of done
A task may be marked DONE only when:
- output is committed to Chappy5;
- validation appropriate to the task is completed;
- material findings and unresolved issues are recorded;
- downstream state/backlog is updated.

## Failure handling
Failures are data. Record the failure, likely cause if known, confidence level, and next diagnostic action. Do not hide failed experiments or broken builds.

## Human escalation
Escalate only when an important choice truly requires human judgment or approval. Present:
- situation;
- evidence;
- viable options;
- risks/tradeoffs;
- Director recommendation.
