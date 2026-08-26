# Executive Finding EX-015 — State-conditioned extraction removes the Threat-25 confound but leaves production resonance ahead

Updated: 2026-08-26 09:29 JST
Director: Executive Game Director
Target: latest `main` ECHO DRIFT / preserved `HUMAN_CANDIDATE_01`

- Status: STRATEGIC_CLEARANCE_BLOCKED / EXTRACTION_CONFOUND_RESOLVED
- Severity(1-5): 4
- Confidence: HIGH for deterministic benchmark result; MEDIUM for final balance conclusion
- Verification Type: OBSERVED + SIMULATED
- Evidence: After GS-013 showed every tested fixed extraction threshold peaking at Threat 25, Executive extended `tests/strategy-benchmark.mjs` with a state-conditioned `state-ev` extraction policy. The first implementation incorrectly compared extraction against the best visible route even for fixed-route policies, so that output was rejected rather than used. Commit `117f51d876114e594b7929e963e8a162def61b8b` binds extraction EV to the route the current policy would actually choose. GitHub Actions `ECHO DRIFT Regression` run `32915174169` completed successfully: deterministic state regression PASS, strategy parity guard PASS, strategy benchmark PASS. The benchmark still uses seeds 101/202/303/404 and 10,000 runs per seed. Under production resonance slope `*2`, state-conditioned extraction produces fixed calm **10.8403 bank/run / 39.48% collapse / mean voluntary return Threat 17.01**, fixed deep **8.9901 / 49.23% / 26.95**, fixed resonance **12.1585 / 46.27% / 22.23**, one-step **10.9721 / 52.90% / 28.69**, and future-aware **12.0098 / 51.28% / 27.44**. These results are all higher than or comparable to their best tested fixed-threshold versions, and their voluntary-return Threat differs materially by strategy rather than collapsing to one global cutoff. Therefore GS-013's Threat-25 result is best interpreted as a limitation of the fixed-threshold policy family, not evidence that rational extraction universally reduces to `return at 25`. However, production fixed resonance still exceeds the encoded future-aware mixed policy by about **0.149 bank/run (~1.24%)**. Under the reduced-compounding slope `*1`, state-conditioned extraction gives fixed calm **10.8403**, fixed resonance **10.6993**, one-step **10.5979**, and future-aware **10.7776**; the candidate therefore removes resonance leadership but creates a small calm lead instead and is still not cleared.
- Recommended Action: Keep production and `HUMAN_CANDIDATE_01` frozen. Treat the extraction-policy confound from EX-014 as materially resolved for the current deterministic harness, but do not claim strategic clearance. The next single priority is to resolve **route-value dominance under state-conditioned extraction** with the narrowest possible intervention or stronger joint policy evaluation. Do not tune the UI to hide the UNSTABLE boundary, and do not implement progression yet. Before accepting any gameplay coefficient change, require that the same parity-guarded benchmark shows no single fixed route materially outperforming a competent mixed policy across the shared seeds, while preserving distinct extraction behavior. Because `state-ev` is only a one-step risk-neutral extraction approximation and `future-aware` route choice remains heuristic, use these results to reject obvious bad candidates and focus the search, not as proof of the human-optimal strategy.

## Executive interpretation

### What changed

The prior Executive priority was to make `continue` versus `return` part of the same deterministic strategy evaluation as route choice. That objective is now met at a useful first approximation. The important result is not that one new policy has been declared optimal; it is that extraction decisions now respond to state and chosen route, and the old global Threat-25 attractor no longer explains the ranking by itself.

### What did not clear

Production still has a narrow but repeatable resonance advantage in the current parity-guarded harness. The reduced-compounding `*1` candidate is also not a clean answer because calm becomes the best fixed route under the same state-conditioned extraction model. Therefore neither production `*2` nor candidate `*1` earns strategic clearance.

### Player-experience consequence

PX-016 remains a valid human-facing hypothesis because `UNSTABLE` is still a strong semantic cue at 25, but Systems evidence no longer supports treating that UI boundary as the universal mathematical cash-out point. Do not rename, hide, or soften the UI before human evidence. A later human test should observe whether players actually treat first UNSTABLE as an automatic return command.

### Progression consequence

P-015 remains blocked. The benchmark now demonstrates that different route policies naturally produce different extraction horizons, which supports Progression's state-oriented design direction, but persistent commitments must wait until the route-value ranking itself is cleared.

### Technical consequence

TQ-016 has been materially mitigated without refactoring the frozen playable: `tests/strategy-parity.mjs` now checks benchmark-critical duplicated production rules, and CI executes it before the strategy benchmark. This is a narrow declaration/parity guard, not proof that the simulation is a perfect model of browser play.

No production gameplay values, UI, save format, progression, or human candidate were changed in this Executive pass. No `HUMAN_VERIFIED` fun claim exists.
