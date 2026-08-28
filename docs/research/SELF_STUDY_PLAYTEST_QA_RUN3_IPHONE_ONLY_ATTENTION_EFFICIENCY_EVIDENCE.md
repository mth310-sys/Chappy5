# Self-Directed Study — Playtest & QA Director Run 3

## Theme
**How can Chappy5 estimate attention efficiency in a practical iPhone-only Human trial without eye tracking, while avoiding measurement methods that themselves change the play experience?**

> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production/prototype/code/browser play: `PROHIBITED`

This is not a new machine Case Study. Case Study 01 and Case Study 02 are not reopened. No original concept is evaluated, ranked or changed.

---

# 1. Why this theme was chosen

Playtest & QA Run 2 established a stronger target than “the player is paying attention”:

> mastery should increase useful information extracted per unit of attention while unnecessary monitoring falls, without losing required detection or prediction accuracy.

The unresolved problem was measurement. Chappy5 is iPhone-first and cannot assume laboratory eye tracking, EEG or other instrumentation. A future Human trial therefore needs evidence that can be captured from the player's choices, predictions, recognition, errors and confidence while preserving the repeated-play loop as much as possible.

A poor method could invalidate the thing being measured. If the player is asked after every game what they watched, the test may train them to watch more. If they are told when a probe is coming, they may temporarily concentrate. If they are instructed to continuously self-monitor attention, that monitoring can itself consume resources.

The QA problem is therefore not merely **what to ask**, but **how to collect evidence without turning the test into a second game layered on top of the first**.

---

# 2. What was not understood before this study

Run 2 proposed candidate measures—prediction probes, recall, confidence, controlled information events, safe-ignore tests, omission logging and interruption/return—but did not establish:

- which measures can work on a smartphone;
- which measures are likely to contaminate attention;
- whether short blocks can reveal vigilance risk;
- how confidence should be interpreted;
- how to distinguish novice confusion, mastery, boredom and fatigue without gaze data;
- how to compare “looked less because I understood” against “looked less because I disengaged.”

---

# 3. What was investigated

Research areas:

1. smartphone-based brief cognitive testing and whether sustained-attention measures can be useful outside a lab;
2. vigilance workload and time-on-task effects;
3. thought-probe / experience-sampling methods and probe reactivity;
4. costs of continuous metacognitive self-monitoring;
5. confidence as a metacognitive measure rather than a substitute for accuracy;
6. a research-only evidence structure suitable for later Chappy5 Human trials.

Primary sources used:

- Perzl, Riedl & Thomas, *Measuring Situational Cognitive Performance in the Wild: A Psychometric Evaluation of Three Brief Smartphone-Based Test Procedures* (Assessment, 2024). https://journals.sagepub.com/doi/10.1177/10731911231213845
- Temple et al., *The Effects of Signal Salience and Caffeine on Performance, Workload, and Stress in an Abbreviated Vigilance Task* (Human Factors, 2000). https://doi.org/10.1518/001872000779656480
- Dember et al., *The Rate of Gain of Perceived Workload in Sustained Attention* (1993). https://journals.sagepub.com/doi/10.1518/107118193784162371
- Finomore et al., *Viewing the Workload of Vigilance Through the Lenses of the NASA-TLX and the MRQ* (Human Factors, 2013). https://journals.sagepub.com/doi/10.1177/0018720813484498
- Safati, Seli & Smilek, *The costs of monitoring: Does self-catching the wandering mind influence task performance and/or residual probe-caught mind-wandering?* (Consciousness and Cognition, 2026). PMID 42574796.
- *The Effects of Anticipating Metacognitive Judgments about Mind-Wandering* (Attention, Perception, & Psychophysics, 2026). https://pubmed.ncbi.nlm.nih.gov/41688858/
- *Mind wandering probes as a source of mind wandering depends on attention control demands* (2022). https://pubmed.ncbi.nlm.nih.gov/35728359/
- Liu et al., *The Neural Markers of Self-Caught and Probe-Caught Mind Wandering* (Brain Sciences, 2021). https://pmc.ncbi.nlm.nih.gov/articles/PMC8534158/

No third-party machine IP, sounds, layouts or presentation details are reused here.

---

# 4. New learning

## SOURCED FACT — useful cognitive state measures can be collected on smartphones

Perzl et al. adapted the SART, PVT and DSST to smartphones and tested them repeatedly in everyday contexts. Their results support the feasibility of brief mobile measurements, with promising reliability/validity for short versions including a 90-second SART and 30-second PVT.

### INTERPRETATION
The target iPhone is not inherently too weak a research platform for useful behavioral evidence. Chappy5 does not need eye tracking before it can begin measuring attention-related performance.

However, a generic SART or PVT would measure general attentional state, not “attention efficiency while playing this machine.” Therefore such tasks are, at most, **context/calibration controls**, not the main product metric.

### REUSABLE PRINCIPLE
`IPHONE-ONLY DOES NOT MEAN SELF-REPORT-ONLY.`

Observable response accuracy, timing, omission and confidence can all contribute to evidence.

---

## SOURCED FACT — vigilance cost can appear within a short controlled block

Temple et al. showed that a 12-minute vigilance task could reproduce several properties associated with longer vigilance tasks, including vigilance decrement, high workload and stress. Dember et al. found perceived workload increased with time while detection probability declined.

### INTERPRETATION
A future Chappy5 trial does not need to wait three hours to detect an early attention-architecture failure. Short structured blocks can be diagnostic.

But product-level fatigue still needs real long-session play. A short probe may identify risk; it cannot certify three-hour comfort.

### REUSABLE PRINCIPLE
`USE SHORT BLOCKS TO DETECT ATTENTION RISK; USE LONG PLAY TO JUDGE PRODUCT COST.`

---

## SOURCED FACT — the act of monitoring attention can impair the primary task

Safati, Seli & Smilek (2026) compared probe-caught reporting with an additional instruction to continuously self-catch mind wandering. Continuous self-monitoring increased rhythmic response-time variability (reported d = 0.46) even though probe-caught mind-wandering reports did not significantly improve.

### INTERPRETATION
A future pachislot test should **not** ask the player to continuously watch themselves watching the machine. “Tell us whenever your attention drifts” can change motor rhythm and cognitive load, contaminating the loop being evaluated.

### REUSABLE PRINCIPLE
`DO NOT TURN ATTENTION MEASUREMENT INTO A PERMANENT SECONDARY TASK.`

### REUSABLE PRINCIPLE
`MEASUREMENT REACTIVITY IS PART OF QA ERROR.`

---

## SOURCED FACT — knowing when a metacognitive probe is coming can change attention and performance

A 2026 study comparing visible probe timing with unannounced probes found that anticipating metacognitive judgments reduced mind wandering but also changed task performance as the probe approached.

Other work shows that thought-probe frequency can interact with task demands and itself alter mind wandering.

### INTERPRETATION
Scheduled visible checkpoints—“at game 100 we will ask what you noticed”—can make the final games before the checkpoint atypically attentive.

For later Chappy5 Human trials, probes should be **sparse, unannounced and placed after an action boundary**, with probe density kept low enough that the player is not constantly anticipating inspection.

### REUSABLE PRINCIPLE
`A PROBE THAT THE PLAYER CAN PREPARE FOR IS NOT A NEUTRAL OBSERVER.`

---

## SOURCED FACT — self-report states and behavioral performance should not be collapsed

Mind-wandering research uses both probe-caught reports and behavioral indices because subjective state and performance are related but not interchangeable. Confidence research likewise treats confidence as metacognitive information whose quality depends on how well it tracks correctness.

### INTERPRETATION
“I was focused,” “I understood it,” and “I was confident” cannot substitute for whether the player actually detected or predicted the relevant event.

The most useful low-infrastructure evidence is therefore **paired**:

`task answer + confidence + actual truth`

For example, after an unannounced probe boundary:
- what changed?
- what is likely next / what mattered?
- how confident are you?
- compare with the machine's actual event/state truth.

This can distinguish:
- correct + high confidence = likely learned signal;
- correct + low confidence = fragile knowledge;
- incorrect + high confidence = dangerous false mastery;
- incorrect + low confidence = recognized uncertainty.

### REUSABLE PRINCIPLE
`CONFIDENCE MUST BE CALIBRATED AGAINST TRUTH, NOT REPORTED ALONE.`

---

# 5. Research-only ATTENTION_EFFICIENCY_EVIDENCE model

This is a future QA method candidate, **not an implementation specification and not approval to build a machine**.

## A. Primary-play block
Let the player play normally. No continuous introspection requirement.

Record only machine-observable behavior when production eventually exists:
- action timing / rhythm;
- relevant execution errors;
- missed required actions;
- state/result truth;
- recoveries after errors;
- interruption/resume boundaries.

## B. Sparse unannounced probes
At a small number of natural post-result boundaries, ask one short question, then return immediately to play.

Candidate probe families:
1. **Detection:** “Did anything this game require different attention/action?”
2. **Prediction:** “What currently seems possible/likely next?”
3. **Reconstruction:** “What evidence made you think that?”
4. **Safe-ignore:** “Which channel could you safely ignore during that sequence?”
5. **Confidence:** confidence in the answer, recorded separately.

Do not use all questions at every probe.

## C. Truth-linked scoring
A response has value only against the known game/event truth.

Candidate research measures:
- relevant detection hit rate;
- false-alarm rate on ordinary games;
- prediction accuracy;
- confidence calibration;
- required-action error rate;
- unnecessary-check / over-response rate where behavior exposes one;
- return-to-task recovery after interruption.

## D. Repeated exposure phases
Compare the same person across at least conceptual phases:

`NOVICE -> LEARNED -> LATER/RETURNING`

The desired mastery signature is not merely faster input. It is:

**equal or better truth-linked detection/prediction with fewer unnecessary errors/checks and stable or reduced subjective burden.**

## E. Fatigue/boredom disambiguation
Low attention-effort is positive only if truth-linked accuracy remains stable.

Candidate interpretation matrix:

| Behavior | Accuracy | Burden | Likely interpretation |
|---|---:|---:|---|
| fewer checks / fluent | maintained or better | lower | mastery candidate |
| fewer checks | worse | lower/neutral | disengagement or overconfidence risk |
| many checks | maintained | high | vigilance burden candidate |
| many checks | poor | high | overload/fatigue candidate |
| slower but accurate | maintained | high | compensation; not automatic mastery |

These are hypotheses to test, not universal diagnostic labels.

---

# 6. What changed from previous understanding

Previous Run 2 idea:

> measure attention together with detection, prediction and confidence.

Run 3 makes that operationally safer:

> **Do not continuously measure attention. Measure the consequences of attention sparsely, against known truth, and treat measurement reactivity as a source of error.**

The key shift is from trying to observe “where attention is” to asking whether attention produces reliable information and action.

Without eye tracking, Chappy5 can still obtain evidence about:
- what was detected;
- what was missed;
- what was falsely treated as important;
- what the player predicts;
- whether confidence matches correctness;
- whether learning reduces unnecessary monitoring;
- whether fatigue breaks the same relationships.

---

# 7. Reusable QA principles

1. `IPHONE-ONLY DOES NOT MEAN SELF-REPORT-ONLY.`
2. `DO NOT TURN ATTENTION MEASUREMENT INTO A PERMANENT SECONDARY TASK.`
3. `MEASUREMENT REACTIVITY IS PART OF QA ERROR.`
4. `A PROBE THAT THE PLAYER CAN PREPARE FOR IS NOT A NEUTRAL OBSERVER.`
5. `CONFIDENCE MUST BE CALIBRATED AGAINST TRUTH, NOT REPORTED ALONE.`
6. `MEASURE THE CONSEQUENCES OF ATTENTION, NOT ONLY THE CLAIM OF ATTENTION.`
7. `MASTERY EVIDENCE REQUIRES PRESERVED TRUTH-LINKED PERFORMANCE AS MONITORING BURDEN FALLS.`
8. `FALSE ALARMS MATTER: A PLAYER WHO TREATS EVERY ORDINARY DEVIATION AS IMPORTANT HAS NOT LEARNED SAFE-TO-IGNORE REGIONS.`
9. `USE SHORT BLOCKS TO DETECT ATTENTION RISK; USE LONG PLAY TO JUDGE PRODUCT COST.`
10. `A QA INSTRUMENT THAT CHANGES THE LOOP MUST REPORT THAT COST.`

---

# 8. Limits and misuse risks

- This does not prove that any particular future probe count, duration or question wording is valid for pachislot. Those require pilot testing.
- Smartphone SART/PVT findings support mobile cognitive measurement feasibility, not a direct pachislot metric.
- A player may infer what QA is testing after repeated sessions; learning the test can contaminate later comparisons.
- Verbal reconstruction can privilege players who explain well. Behavioral accuracy must remain primary.
- A low false-alarm rate can also mean a player is ignoring everything; pair it with hit rate and prediction accuracy.
- A high hit rate can come from monitoring everything; pair it with workload and false alarms.
- Reward outcomes can change attention and confidence. Reward-rich and dry periods must not be pooled blindly.
- Do not create deceptive hidden “critical events” that affect player value merely for experimentation. Future controlled information events must be ethically and mechanically benign or use already-valid game truth.
- Do not interpret a laboratory workload scale as proof of fun or product desirability.

---

# 9. Remaining unknowns

## UNRESOLVED — probe density
How sparse can probes be while remaining informative, and how dense before they materially alter play?

## UNRESOLVED — workload instrument
NASA-TLX is widely used for workload, but a later Chappy5 trial may need a shorter between-block burden measure so questionnaire cost does not dominate the session.

## UNRESOLVED — behavioral proxy for “unnecessary checking”
Without eye tracking, not every covert check is visible. Chappy5 needs task-specific observable proxies rather than pretending all attention is measurable.

## UNRESOLVED — individual baseline
Players differ in pachislot experience, vision, motor rhythm and confidence calibration. Within-person change may be more informative than one universal threshold.

## UNRESOLVED — interruption recovery
The iPhone-first context makes interruption/resume important. The current model identifies it but has not yet established a robust recovery metric.

## UNRESOLVED — intrinsic enjoyment
Attention efficiency is not enjoyment. A highly learnable, low-burden loop can still be boring. Intrinsic loop value must remain a separate outcome.

---

# 10. Highest-value next Playtest & QA question

**How can intrinsic repeated-action satisfaction be separated from reward relief and from competence satisfaction in a Human trial without asking leading “was this fun?” questions every few games?**

This should connect Run 1's intrinsic-loop problem with Run 3's non-reactive measurement rule.

Potential research areas only:
- retrospective segment comparison;
- voluntary continuation under reward-controlled conditions;
- reward-free / neutral-result micro-block comparisons during later production stages;
- competence-success versus payout-result separation;
- temporal placement of questionnaires to reduce reactivity.

No original Chappy5 concept is to be tested until Human Gate permits production.

---

# Final status

`SOURCED_FACT / OBSERVATION / INTERPRETATION / REUSABLE_PRINCIPLE / UNRESOLVED` separation preserved.

`ORIGINAL_CONCEPT_REFINEMENT = DENIED`
`NEW_MACHINE_DESIGN = NOT_STARTED`
`CASE_STUDY_01 = NOT_REOPENED`
`CASE_STUDY_02 = NOT_REOPENED`
`BROWSER_PLAY = NOT_PERFORMED`
`CODE / PROTOTYPE / ASSETS = NOT_CREATED`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
