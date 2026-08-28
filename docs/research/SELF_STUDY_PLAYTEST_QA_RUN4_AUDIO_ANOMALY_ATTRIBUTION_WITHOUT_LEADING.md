# Self-Directed Study — Playtest & QA Director Run 4

> Domain: Playtest & QA
> Stage: `Stage 1 — Reality Baseline Study`
> Current shared object: `SELF_DIRECTED_STUDY`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Original-concept refinement: `DENIED`

## 1. Why this topic now

Sound & Experience Run 3 established that silence / omission / attenuation / timing deviation can only carry authored meaning after a stable action→sound expectation has been learned, and that platform-created silence must not impersonate game silence.

The QA problem is therefore not merely whether a Human notices an anomaly. The higher-value question is:

**When routine audio is missing, late, weak, or discontinuous, can a Human correctly attribute the anomaly without first being taught that silence may be meaningful?**

Incorrect attribution is dangerous in both directions:
- an authored game cue can be dismissed as lag or broken audio;
- device/browser failure can be interpreted as authored machine information.

This run develops a research-only attribution framework. It does not create a browser test, timing table, sound asset, prototype, or original machine rule.

---

## 2. Repository truth checked before study

Latest `main` was re-fetched and treated as sole source of truth.

Governing documents read:
- `README.md`
- `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`
- `docs/REALITY_PRESENTATION_STANDARD.md`
- `docs/MACHINE_01_PLANNING.md`
- `docs/research/SELF_DIRECTED_STUDY_STATUS.md`
- `docs/research/SELF_DIRECTED_STUDY_HANDOFF_SOUND_EXPERIENCE_RUN3.md`

Current repository gates:
- Case Study 01 current cycle: complete.
- Case Study 02 current cycle: complete and not the active shared object.
- `CURRENT_SHARED_OBJECT = SELF_DIRECTED_STUDY`
- `REALITY_BASELINE_COMPLETE = FALSE`
- `HUMAN_GATE_1_NOT_READY`
- `SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
- no production, prototype or original-concept refinement authorized.

Completed 新ハナビ research remains useful as reality evidence that sparse presentation can make small timing/continuity differences meaningful, but Case Study 02 is not reopened here.

---

# 3. Sourced facts

## 3.1 Omission response depends on a sufficiently reliable expectation

### SOURCED FACT
Tast, Schröger & Widmann (2024) used a self-generation paradigm in which button presses generated a sound either 80% or 50% of the time. An omission N1 was observed in the more predictable 80% condition but not the 50% condition.

Source:
- Tast et al. (2024), European Journal of Neuroscience: https://onlinelibrary.wiley.com/doi/10.1111/ejn.16393
- PubMed: https://pubmed.ncbi.nlm.nih.gov/38764129/

### QA INTERPRETATION
A missing routine sound is not inherently a strong cue. A stable baseline must first earn enough predictive trust that absence violates an expectation.

This supports the Sound Run 3 rule:
`ABSENCE ONLY HAS AUTHORITY AFTER PRESENCE HAS EARNED TRUST.`

It also creates a QA requirement: before interpreting a participant's response to silence, establish whether the expected action→sound relation was actually learned.

---

## 3.2 Omission processing is stronger when the expected effect is specific

### SOURCED FACT
Korka et al. (2020) reviewed/experimentally examined omission responses and reported that omission responses are affected by the specificity and predictability of expected action effects. Prior work cited there found stronger omission responses when a button press had a stable, specific expected sound than when the sound identity varied widely.

Source:
- https://onlinelibrary.wiley.com/doi/10.1111/ejn.14899

### QA INTERPRETATION
A participant cannot meaningfully classify “what was missing” if the baseline event itself was poorly differentiated. Attribution testing therefore requires event identity, not only event occurrence.

For example, a Human may detect “something felt wrong” while being unable to identify whether BET feedback, STOP feedback, payout feedback, or a state-continuity layer was missing.

That distinction matters because:
`ANOMALY DETECTION != ANOMALY SOURCE IDENTIFICATION.`

---

## 3.3 Sense of agency depends on learned action-effect timing, not only minimum delay

### SOURCED FACT
Haering & Kiesel found that perceived agency depends strongly on action-effect timing, but repeated experience can recalibrate what timing feels causally expected. Participants exposed mostly to delayed effects shifted their agency judgments toward that learned timing distribution.

Source:
- Haering & Kiesel, Cognition (2015): https://pubmed.ncbi.nlm.nih.gov/25490127/

### QA INTERPRETATION
A delayed sound can be classified differently depending on the machine's learned timing baseline. Therefore a fixed universal threshold such as “X ms late = broken” is not justified by this evidence.

For QA, the relevant variable is not delay alone but:
`DEVIATION FROM LEARNED ACTION-EFFECT TIMING`.

---

## 3.4 Recent work continues to separate omission prediction from generic sensory suppression

### SOURCED FACT
Tast, Schröger & Widmann (2025) reported that omission N1 was modulated by predictability whereas ordinary self-generation-related N1 suppression was not equivalently modulated, arguing that these effects should not be assumed to share one mechanism.

Source:
- PubMed: https://pubmed.ncbi.nlm.nih.gov/40538129/

### QA INTERPRETATION
QA should not collapse all “reduced response to routine sound” phenomena into one construct such as habituation. A player can habituate to a baseline sound yet still detect a meaningful omission from that baseline.

This reinforces prior Playtest principle:
`HABITUATION IS NOT A COMFORT PASS.`

and adds:
`HABITUATION DOES NOT IMPLY LOSS OF ANOMALY SENSITIVITY.`

---

# 4. The attribution problem

An anomalous audio moment has at least three separable stages:

1. **Detection** — did the Human notice a deviation?
2. **Source attribution** — what did the Human think caused it?
3. **Model update / action** — did the Human change what they believed or did next?

A test that asks only “did you notice that?” misses the most important failure mode.

Two participants can both detect the same missing sound:
- Participant A: “That must mean the machine state changed.”
- Participant B: “My tap probably did not register.”

Detection is identical; experience is not.

---

# 5. Research-only attribution taxonomy

Future Human trials may classify spontaneous explanations into the following bins without teaching these bins beforehand.

## A. AUTHORED MACHINE INFORMATION
Human believes the deviation is an intentional consequence of game/machine state.

## B. INPUT NOT REGISTERED
Human believes BET / START / STOP or another action did not execute.

## C. DEVICE / BROWSER LATENCY
Human believes the action executed but feedback arrived late because of system lag.

## D. AUDIO OUTPUT / MUTE / HARDWARE FAILURE
Human believes the audio path itself failed or was suppressed.

## E. INTERRUPTION / RESUME ARTIFACT
Human connects the anomaly to backgrounding, app switching, Safari resume, route change, or similar session discontinuity.

## F. DETECTED BUT UNEXPLAINED
Human notices deviation but cannot assign a cause.

## G. NOT DETECTED
Human reports no anomaly and behavior gives no evidence of detection.

These are **QA observation categories**, not machine states and not a proposed original-machine design.

---

# 6. Non-leading evidence method

## 6.1 Do not announce that silence carries information

If the participant is told in advance “sometimes missing sounds are meaningful,” defensive monitoring is created by the test itself.

The first-pass trial should instead allow normal repeated play/interaction and collect rare, non-predictable post-event probes.

### REUSABLE QA PRINCIPLE
`DO NOT TEACH THE ANOMALY CLASS BEFORE MEASURING SPONTANEOUS ATTRIBUTION.`

---

## 6.2 Ask open attribution before forced choice

Preferred order after a selected event:

1. “Did anything about that action/result feel different?”
2. If yes: “What do you think happened?”
3. “How sure are you?”
4. Only after free response, optionally classify or present standardized alternatives.

This avoids planting “lag”, “failure”, or “intentional cue” as explanations before the Human has generated one.

### REUSABLE QA PRINCIPLE
`FREE ATTRIBUTION SHOULD PRECEDE CATEGORY RECOGNITION.`

---

## 6.3 Confidence is evidence beside attribution, not instead of it

A confidently wrong attribution is potentially worse than an uncertain anomaly detection because it can train the wrong machine model.

Record:
- detected/not detected;
- spontaneous cause;
- confidence;
- subsequent action;
- actual ground truth.

### REUSABLE QA PRINCIPLE
`CONFIDENT MISATTRIBUTION IS A FIRST-CLASS FAILURE.`

---

# 7. Ground-truth matrix for future trials

A useful future trial should distinguish at least these classes of truth, while keeping the participant blind to class labels:

| Ground truth | What changed | Desired evidence |
|---|---|---|
| authored anomaly | machine intentionally omits/changes feedback | noticed as machine-relevant after baseline is learned |
| input rejection | action genuinely did not register | participant does not falsely infer game-state information |
| system delay | action registers, feedback is technically late | participant can recover without treating delay as game truth |
| output loss | audio path unavailable | participant does not build a game hypothesis from missing output |
| resume discontinuity | interruption disrupts continuity | participant re-anchors context rather than inferring authored event |
| ordinary baseline | nothing unusual | low false-alarm rate |

The ordinary-baseline row is essential. Without it, a participant can appear “sensitive” simply by suspecting anomalies constantly.

### REUSABLE QA PRINCIPLE
`ANOMALY QA NEEDS FALSE-ALARM MEASUREMENT, NOT ONLY HIT RATE.`

---

# 8. Attribution precision versus defensive vigilance

This run connects directly to Playtest & QA Run 2 and Run 3.

A machine should not train the Human to ask after every routine event:
“Was that missing? Was that late? Did I lose value?”

A meaningful anomaly system should instead produce:
- stable routine expectation;
- low ordinary false-alarm rate;
- high detection when a consequential anomaly occurs;
- correct source attribution often enough to support useful action/model update;
- return to safe-to-ignore baseline after resolution.

Proposed research metrics:

`ATTRIBUTION_PRECISION = correctly attributed meaningful anomalies / all events attributed as meaningful machine anomalies`

`ATTRIBUTION_RECALL = correctly attributed meaningful anomalies / all meaningful machine anomalies presented`

`TECH_FAILURE_FALSE_SEMANTIC_RATE = technical failures interpreted as intentional machine information / technical failures`

`BASELINE_FALSE_ALARM_RATE = ordinary baseline events suspected as anomalies / ordinary baseline probes`

These are research metrics only; no pass thresholds are set.

### REUSABLE QA PRINCIPLE
`THE GOAL IS NOT MAXIMUM ANOMALY SENSITIVITY; IT IS HIGH ATTRIBUTION PRECISION AT LOW DEFENSIVE MONITORING COST.`

---

# 9. Time-course matters

The same missing/late sound can mean different things at different learning stages.

## First minutes
The action→sound baseline may not yet be trusted. A missing sound is likely to be ambiguous.

## ~100G-equivalent repeated exposure
Stable routine relationships should be increasingly compressed. Rare deviations can become more legible if baseline reliability remains high.

## ~500G dry/repetitive period
Two opposite failures become possible:
- fatigue/habituation causes true anomalies to be missed;
- defensive vigilance increases false alarms because the player is searching for relief/meaning.

## ~3-hour session
Attribution should be examined together with fatigue, confidence and false alarms. “Still notices every oddity” is not automatically good if the Human has been forced into continuous monitoring.

### REUSABLE QA PRINCIPLE
`ATTRIBUTE ANOMALY PERFORMANCE ACROSS LEARNING AND FATIGUE, NOT FROM A SINGLE EARLY SESSION.`

---

# 10. Connection to real pachislot study

Completed Case Study 02 新ハナビ was valuable precisely because it contrasts with an AT escalation model: repeated value can live in physical reels, stopping, slip, reach-eye recognition, bonus detection and technical intervention while presentation remains comparatively sparse.

That reality study also makes the current attribution issue important. In a sparse presentation ecology, a small timing/audio/flash deviation can earn disproportionate informational weight because routine presentation has not spent attention authority constantly.

However, the same sparsity increases the danger of technical discontinuity impersonating information if baseline feedback is unreliable.

### INTERPRETATION
`SPARSITY AMPLIFIES BOTH THE VALUE OF TRUE DEVIATION AND THE COST OF FALSE DEVIATION.`

This is a reusable principle, not a copy of 新ハナビ's protected presentation or sound design.

---

# 11. Contradictions and limits

## UNRESOLVED 1 — Neural omission evidence is not a direct product UX threshold
Omission N1 findings show prediction sensitivity under controlled laboratory conditions. They do not provide a millisecond threshold or a direct pachislot QA pass criterion.

## UNRESOLVED 2 — Correct attribution may depend on cross-channel evidence
A Human may correctly classify audio silence only because reels, lamps, button state or visual response provide corroboration. Audio-only and integrated-machine attribution need separate investigation.

## UNRESOLVED 3 — iPhone/browser output failures are heterogeneous
Mute state, audio-session interruption, Bluetooth routing, resource pressure and browser scheduling can create different symptoms. This run does not claim they are perceptually equivalent.

## UNRESOLVED 4 — Expertise can create both precision and overinterpretation
An expert may correctly detect subtler deviations, but may also have stronger priors and confidently over-read accidental technical anomalies. Expertise cannot be assumed to improve attribution monotonically.

## UNRESOLVED 5 — No browser prototype is authorized
The repository remains before Human Machine Approval, so this framework is not executed against an original Chappy5 machine.

---

# 12. Ten-part closing

## 1. Topic reason
Sound Run 3 handed off the unresolved problem of distinguishing intentional audio anomalies from missing/broken/platform feedback without leading the Human.

## 2. Prior unknown
QA had principles for attention efficiency and anomaly detection, but not a structured way to separate noticing an anomaly from attributing its cause.

## 3. Investigation
Reviewed repository reality research and literature on auditory omission prediction, expected action effects, predictability, action-effect timing and agency.

## 4. New learning
Reliable baseline expectation is prerequisite evidence for meaningful omission, and learned timing affects causal attribution. Detection alone is insufficient.

## 5. Changed understanding
The core QA target changes from “did they notice silence/delay?” to **“did they infer the right cause, with what confidence, and did that inference improve or corrupt their machine model?”**

## 6. Reusable principles
- `ANOMALY DETECTION != ANOMALY SOURCE IDENTIFICATION.`
- `DO NOT TEACH THE ANOMALY CLASS BEFORE MEASURING SPONTANEOUS ATTRIBUTION.`
- `FREE ATTRIBUTION SHOULD PRECEDE CATEGORY RECOGNITION.`
- `CONFIDENT MISATTRIBUTION IS A FIRST-CLASS FAILURE.`
- `ANOMALY QA NEEDS FALSE-ALARM MEASUREMENT, NOT ONLY HIT RATE.`
- `THE GOAL IS NOT MAXIMUM ANOMALY SENSITIVITY; IT IS HIGH ATTRIBUTION PRECISION AT LOW DEFENSIVE MONITORING COST.`
- `ATTRIBUTE ANOMALY PERFORMANCE ACROSS LEARNING AND FATIGUE, NOT FROM A SINGLE EARLY SESSION.`
- `SPARSITY AMPLIFIES BOTH THE VALUE OF TRUE DEVIATION AND THE COST OF FALSE DEVIATION.`

## 7. Limits / misuse
Do not turn lab omission ERP findings into exact timing values. Do not intentionally inject technical-looking failures into a production design based on this document. Do not tell participants in advance which anomalies are “supposed to matter” during first-pass attribution testing.

## 8. Remaining unknowns
How much cross-channel corroboration is necessary before a Human treats a subtle audio anomaly as machine truth rather than device failure?

## 9. Next worthwhile Playtest study
Separate three reward experiences without interrupting play: **intrinsic repeated-action/reel satisfaction**, **skill-execution reward**, and **relief from finally receiving an outcome after a dry period**. This remains a major unresolved QA problem from earlier real-machine study.

## 10. Possible future Chappy5 value
After Human Gate and only during authorized prototype/trial stages, this framework could help prevent a high-quality authored cue system from being undermined by ambiguous browser/device feedback, while also preventing technical glitches from accidentally becoming fake game information.

---

# 13. Gate preservation

`ORIGINAL_CONCEPT_REFINEMENT = DENIED`

`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`

`BROWSER_PLAY / IMPLEMENTATION / AUDIO PROTOTYPE = NOT_PERFORMED`

`REALITY_BASELINE_COMPLETE = FALSE`

`HUMAN_GATE_1_NOT_READY`
