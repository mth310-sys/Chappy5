# Chappy5 Backlog

Status values: TODO / ACTIVE / BLOCKED / DONE / DROPPED
Priority: P0 highest, then P1, P2, P3.

## Active

### C5-007 — Conduct first interaction validation
- Priority: P0
- Status: ACTIVE
- Owner: Director
- Depends on: C5-004
- Goal: Test the prototype against the validation questions in `prototype/PRODUCT_BRIEF.md` without adding scope first.
- Evidence: First human playtest is recorded in `prototype/VALIDATION.md` as V-001. Player reported that the rules were not understood. R-HF-002 in `research/POST_PLAYTEST_SYNTHESIS.md` additionally records that the content itself was judged disappointing.
- Current result: LEGIBILITY FAIL + CONTENT/HOOK FAIL on prior build. V-002 revised build passed independent static/logic inspection as V-003, with runtime/CI still unconfirmed.
- Next: Obtain new human evidence through the stable public play entry point before expanding H1 scope. Test comprehension and core payoff separately. Do not treat technical verification as proof of comprehension or fun.

### C5-008 — Revise first-play legibility
- Priority: P0
- Status: ACTIVE
- Owner: Prototype Worker
- Depends on: V-001 in `prototype/VALIDATION.md`
- Goal: Make goal, source→collector flow, part cause/effect, success/failure, and retry loop understandable through play rather than a long help paragraph.
- Constraints: Keep the core H1 experiment small; do not add meta progression, economy, narrative, monetization, or speculative content. Prefer progressive disclosure and visible cause/effect over more prose.
- Acceptance: Revised build satisfies the bounded targets in `prototype/VALIDATION.md` and is ready for a second human playtest.
- Implementation: V-002 committed in `prototype/index.html` at `107d7ece6f54a4756bc35ea8d0e8bbb310ed3073`. Added persistent one-sentence goal, explicit SOURCE/COLLECTOR flow, highlighted first placement, progressive part unlock, Japanese cause/effect labels, and reason-specific result feedback while retaining H1 core scope.
- Independent verification: V-003 in `prototype/VALIDATION.md` confirms the expected structure and interaction wiring by static/logic inspection. Initial guided placement routes around the first blocker; staged tool unlocking, reason-specific feedback, scoring, retry/reset paths are wired. No blocking source defect was identified.
- Remaining caveat: GitHub combined-status lookup exposed no CI status for the implementation commit, and no real mobile-browser runtime was executed by Verification Worker. CI/runtime therefore remain UNKNOWN, not PASS.
- Handoff: V-002 is technically suitable for a second human playtest subject to the runtime caveat. Human legibility remains unresolved until that playtest. R-HF-002 content/hook disappointment also remains unresolved even if legibility improves.

### C5-004 — Build first playable proof
- Priority: P1
- Status: ACTIVE
- Owner: Director
- Depends on: C5-003
- Goal: Implement the smallest technically verifiable playable slice.
- Output: `prototype/index.html` and `prototype/PRODUCT_BRIEF.md`.
- Current state: Playable source exists and V-002 bounded legibility revision is implemented. V-003 independent static/logic verification found no blocking source defect. CI and real mobile runtime remain unconfirmed.
- Next: Preserve technical scope while human validation proceeds; reproduce any concrete runtime defect separately if observed.

### C5-005 — Establish lightweight automated verification
- Priority: P1
- Status: ACTIVE
- Owner: Director
- Depends on: C5-004
- Goal: Add repeatable checks appropriate to the selected stack.
- Current state: `scripts/verify_prototype.mjs` and `.github/workflows/verify.yml` created. Static inspection confirms the workflow invokes the verifier on main push/PR, but no successful workflow/status result has been observed through the available integration.
- Done when: At least one successful verification run is observed and recorded.

## Queue

### C5-009 — Prepare bounded H2 alternative prototype
- Priority: P1
- Status: TODO
- Owner: Unclaimed
- Depends on: `research/H2_TIMING_RISK_TEST_BRIEF.md`
- Goal: Prepare a smallest-test timing/risk microgame so H1 is not optimized by sunk cost after confirmed content disappointment.
- Constraints: Keep H2 isolated from the current H1 source until Director explicitly authorizes switching the stable public entry point. One primary action, result within seconds, instant retry, no meta/economy/monetization scope.
- Validation: Must be independently technically checked before it can replace or be exposed through the stable human play entry point.
- Distribution guardrail: Human direction requires one stable public play URL. Do not require the human to repeatedly discover/add new URLs; exact canonical URL remains UNKNOWN in repository evidence.

## Done

### C5-001 — Bootstrap repository-native studio operating system
- Priority: P0
- Status: DONE
- Owner: Director
- Result: `STUDIO_STATE.md`, `OPERATING_SYSTEM.md`, `BACKLOG.md`, `DECISIONS.md`, and `WORKERS.md` established.

### C5-002 — Define first product opportunity space
- Priority: P0
- Status: DONE
- Owner: Director
- Result: `PRODUCT_DISCOVERY.md` records current market signals, caveats, three hypotheses, and a smallest-test route.

### C5-003 — Select first game hypothesis
- Priority: P0
- Status: DONE
- Owner: Director
- Depends on: C5-002
- Result: D-005 selects H1 for validation; D-006 selects a dependency-free browser prototype stack.

### C5-006 — Define business validation plan
- Priority: P2
- Status: DONE
- Owner: Business / Operations Worker
- Depends on: C5-003
- Result: `operations/BUSINESS_VALIDATION.md` defines comprehension, core-payoff, repeatability/sharing, and commercial gates; stop/continue discipline; and stable public entry-point requirements. Monetization remains intentionally blocked until product evidence supports it.

## Work claiming rule
Before starting a task, set Owner and Status=ACTIVE. A worker must not take an ACTIVE task owned by someone else unless the prior owner explicitly releases it or the Director resolves a stale claim.
