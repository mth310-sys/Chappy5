# TECHNICAL_FINDING_TQ021 — Held-out robustness cohort was not protected from overlap with base seeds

- Status: FIXED_PENDING_CI
- Severity: 3
- Confidence: HIGH
- Verification Type: OBSERVED
- Evidence: `tests/first-match-structural-benchmark.mjs` now separates the pair-cashout robustness test into `BASE_SEEDS=[101,202,303,404]` and `HELDOUT_SEEDS=[505,606,707,808]`, which is important because Executive/Systems may use the held-out result to decide whether a structural candidate is robust enough for a Controlled Playable. Before this finding, `tests/first-match-continuation-parity.mjs` guarded the production-common rules and the declared pair-cashout boundary, but did not verify that the held-out seed cohort remained non-empty, equally sized, and disjoint from the base cohort. A later accidental edit could therefore duplicate one or more base seeds into the held-out list while CI continued to pass, weakening the independence of the robustness claim without an obvious failure. Commit `67a204efb544c58810ecbf145b50e1ef55585829` extends the narrow first-match parity guard to parse the cohort declaration and fail when either cohort is empty, cohort sizes diverge, or any held-out seed overlaps a base seed.
- Recommended Action: Keep the cohort guard narrow. Do not freeze the exact numeric seeds as permanent product behavior; require only the properties that make the robustness claim meaningful: explicit base/held-out cohorts, non-empty cohorts, equal cohort size for the current comparison, and zero overlap. Promote this finding to PASS only after the corresponding regression workflow completes successfully.

## Verification boundary

This guard protects the independence of the deterministic robustness cohort used by the first-match structural benchmark. It does not prove that eight seeds are statistically sufficient, that pair-cashout is production-ready, or that simulated results represent human play. Those remain Systems/Executive/HUMAN_VERIFIED questions. Production gameplay, UI, save format, and `HUMAN_CANDIDATE_01` are unchanged.
