# Player Experience Finding PX-016 — UNSTABLE remains a semantic cash-out cue, but not a universal systems optimum

Updated: 2026-08-26 10:12 JST
Target: latest `main` ECHO DRIFT / preserved `HUMAN_CANDIDATE_01`
Director: Player Experience Analysis Director

- Status: HUMAN_WATCH / SYSTEMS_CONFOUND_RESOLVED
- Severity(1-5): 3
- Confidence: HIGH for observed UI semantics; MEDIUM for predicted human behavior
- Verification Type: OBSERVED + SIMULATED
- Evidence: Production still changes the threat label from `CALM` to `UNSTABLE` at Threat 25, continuously exposes current Threat, shows each route's exact `選択後脅威`, and shows exact voluntary-return payout. However, EX-015 materially changes the systems evidence behind this finding. After correcting the state-conditioned extraction policy so each strategy evaluates extraction against the route it would actually choose, mean voluntary-return Threat no longer clusters at 25: fixed calm ≈17.01, fixed resonance ≈22.23, fixed deep ≈26.95, future-aware ≈27.44, and one-step ≈28.69. Therefore GS-013's earlier universal Threat-25 optimum was a limitation of the fixed-threshold policy family, not evidence that rational play universally reduces to `return at UNSTABLE`. The semantic boundary at 25 remains visually strong, but the underlying simulated incentives now support state-dependent extraction on both sides of it.
- Player Experience Impact: The prior Severity-4 concern that the UI and system jointly teach `CALMなら進む / UNSTABLEになったら帰る` is no longer supported strongly enough to drive a pre-test change. A human may still interpret `UNSTABLE` as an imperative warning because it is a categorical word placed beside exact risk and a guaranteed-looking extraction value, but doing so would now be a UI/mental-model behavior rather than simply following a universal mathematical optimum. This distinction matters: renaming or hiding the band before human evidence could reduce useful risk communication while solving a problem the state-conditioned model no longer demonstrates.
- Recommended Action: Keep `HUMAN_CANDIDATE_01` frozen and do not alter threat labels, risk visibility, or extraction copy. Retain one unobtrusive human observation: on first entering `UNSTABLE`, does the player automatically cash out because of the label, or do current haul, route opportunity, Energy, resonance state, and visible risk produce genuine hesitation? If players repeatedly treat the word itself as a command despite differing states, record that as `HUMAN_VERIFIED` and then test softer semantic wording without hiding numbers. If behavior varies with state, close this finding rather than tuning the UI around the old Threat-25 benchmark artifact.

## Interpretation boundary

EX-015 and the underlying state-conditioned benchmark are `SIMULATED`, not `HUMAN_VERIFIED`. They refute the earlier inference that Threat 25 is a universal simulated cash-out point; they do not prove how a human reads `UNSTABLE`. No claim is made that the current label is good, bad, or fun until human play provides evidence.
