# Self-Directed Study Handoff — Playtest & QA Director Run 4

> Current shared object: `SELF_DIRECTED_STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## Repository gate

Latest main confirmed before work:
- Case Study 01 current cycle is complete.
- Case Study 02 current cycle is complete and remains closed as active shared object.
- `CURRENT_SHARED_OBJECT = SELF_DIRECTED_STUDY`.
- `REALITY_BASELINE_COMPLETE = FALSE`.
- original concepts remain frozen.
- `SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`.

No Case Study was reopened and no production work was authorized.

## Latest completed work

`PLAYTEST_QA_SELF_STUDY = COMPLETE_RUN4`

Research:
`docs/research/SELF_STUDY_PLAYTEST_QA_RUN4_AUDIO_ANOMALY_ATTRIBUTION_WITHOUT_LEADING.md`

Question: when routine audio is absent, delayed, weak or discontinuous, can a Human distinguish intentional machine information from input rejection, device/browser latency, audio-output failure, interruption/resume artifact, or an unexplained anomaly without being taught in advance that silence may be meaningful?

Key change: separate **anomaly detection** from **source attribution** and **model update**. A participant can correctly notice a deviation yet form the wrong causal story. The future QA target therefore becomes high attribution precision with low false alarms and low defensive monitoring cost, not maximum anomaly sensitivity.

Main principles:
- `ANOMALY DETECTION != ANOMALY SOURCE IDENTIFICATION.`
- `DO NOT TEACH THE ANOMALY CLASS BEFORE MEASURING SPONTANEOUS ATTRIBUTION.`
- `FREE ATTRIBUTION SHOULD PRECEDE CATEGORY RECOGNITION.`
- `CONFIDENT MISATTRIBUTION IS A FIRST-CLASS FAILURE.`
- `ANOMALY QA NEEDS FALSE-ALARM MEASUREMENT, NOT ONLY HIT RATE.`
- `THE GOAL IS NOT MAXIMUM ANOMALY SENSITIVITY; IT IS HIGH ATTRIBUTION PRECISION AT LOW DEFENSIVE MONITORING COST.`
- `ATTRIBUTE ANOMALY PERFORMANCE ACROSS LEARNING AND FATIGUE, NOT FROM A SINGLE EARLY SESSION.`
- `SPARSITY AMPLIFIES BOTH THE VALUE OF TRUE DEVIATION AND THE COST OF FALSE DEVIATION.`

## Cross-Director implication for next run

Machine Director can integrate Run 3 Attention Contract with this QA result by treating **causal attribution** as part of event closure:

- an event claim is weak if the Human notices it but cannot determine whether the machine or platform caused it;
- cross-channel support may be needed to establish source authority;
- ordinary baseline reliability is necessary so true deviations do not create defensive vigilance;
- release/re-anchor must also restore trust after interruption or technical discontinuity.

Highest-value next Machine question:

**How should a research-only cross-channel event contract represent source authority / causal attribution so that reel, visual, mechanism and audio jointly tell the Human not only “something changed” but “this change belongs to the machine state rather than the platform,” without turning the framework into an original-machine specification?**

This is research only. No browser play, implementation, timing values, audio assets, prototype, or original concept is authorized.

## Next fixed Director

`NEXT_FIXED_DIRECTOR = MACHINE`

## Gates preserved

`ORIGINAL_CONCEPT_REFINEMENT = DENIED`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`CODE / PROTOTYPE / AUDIO ASSETS = NOT_CREATED`
`REALITY_BASELINE_COMPLETE = FALSE`
`HUMAN_GATE_1_NOT_READY`
