# Executive Finding EX-014 — reproducible benchmark invalidates candidate clearance and exposes extraction-policy confound

Updated: 2026-08-26 08:21 JST
Director: Executive Game Director
Target: latest `main` ECHO DRIFT / preserved `HUMAN_CANDIDATE_01`

- Status: CANDIDATE_NOT_CLEARED / BENCHMARK_REPRODUCED_WITH_POLICY_CONFOUND
- Severity(1-5): 4
- Confidence: HIGH for benchmark output; MEDIUM for gameplay conclusion
- Verification Type: OBSERVED + SIMULATED
- Evidence: `tests/strategy-benchmark.mjs` is now repository-side, deterministic, and CI-executed. ECHO DRIFT Regression run `32909018863` completed successfully and its strategy step ran to completion. Across seeds 101/202/303/404, production slope `*2` produced fixed-calm bank/run 9.0483/9.2974/9.0737/8.8596 and fixed-resonance 9.6304/9.2581/9.1413/9.5020; the encoded future-aware policy reached only 8.6220/8.6226/8.6079/8.7133. Under candidate slope `*1`, fixed-calm remained 9.0483/9.2974/9.0737/8.8596, fixed-resonance fell to 8.4825/8.1810/8.0989/8.3997, while future-aware reached only 7.5294/7.3549/7.7251/7.3747. Thus the candidate does not satisfy EX-013's clearance criterion in the actual reproducible harness: a simple fixed route clearly beats the encoded mixed policy.
- Finding: The prior exploratory result supporting `1 + chainLen` cannot be promoted. The reproducible harness materially contradicts it. However, the new harness also reveals a methodological confound: route-selection policies are compared under one hard-coded extraction rule (`return only when threat >= 55`; Energy exhaustion auto-banks), while ECHO DRIFT's core decision loop includes the player deciding when to extract. The current `future-aware` scorer estimates route value but does not jointly optimize extraction timing. Because calm primarily buys survival, a fixed high-threat return threshold structurally favors calm and can make a mixed route policy look incompetent even when the underlying route choice may be useful under different extraction decisions.
- Product Impact: Do not merge the reduced-compounding candidate and do not revert to broad balance changes. The studio now has stronger evidence that route balance and extraction timing cannot be evaluated independently. Changing production from this benchmark alone risks replacing resonance dominance with calm dominance or tuning against an artifact of the evaluator.
- Recommended Action: Keep gameplay frozen. Extend the deterministic strategy harness so each compared policy uses the same explicit extraction-decision model and can choose `continue` versus `return` from current state. Compare fixed calm/deep/resonance and mixed policies with identical seeds/run counts, but allow each policy to optimize or follow the same defined extraction heuristic. Record route mix, bank/run, collapse rate, mean depth and extraction depth. Only reconsider `*1` after the joint route+extraction benchmark shows no simple fixed strategy clearly dominates a competent mixed strategy.
- Current Highest Priority: Make extraction timing a first-class component of the deterministic strategy benchmark; this is now the narrowest blocker to a trustworthy balance decision.
- Human Verification Needed: NO for this benchmark correction. Preserve `HUMAN_CANDIDATE_01` and its existing three questions; no new playable should be promoted yet.

## Executive integration

### Game Systems
The newly reproducible CI result is higher-quality evidence than prior bounded exploratory probes and supersedes their candidate-clearance direction. `GS-012` remains useful as a hypothesis generator, not authorization.

### Player Experience
`PX-015` remains relevant only if a reduced-compounding candidate later clears mechanically. No reward-feel A/B should be created yet.

### Progression & Content
Long-term progression stays blocked. Route-specialized permanent progression would still amplify an unresolved core balance state.

### Technical & Quality
The benchmark itself now runs successfully in CI alongside regression. This is an observed quality gain. Real iPhone/Safari lifecycle verification remains separate.

## Explicit non-decisions

- No production balance change.
- No claim that slope `*1` is bad in human play; only that it is not cleared by current reproducible evidence.
- No claim that the current `future-aware` policy represents optimal human or AI play.
- No progression implementation.
- No HUMAN_VERIFIED fun claim.
