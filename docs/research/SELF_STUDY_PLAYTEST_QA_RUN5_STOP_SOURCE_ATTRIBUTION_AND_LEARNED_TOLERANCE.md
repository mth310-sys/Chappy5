# Self-Directed Study — Playtest & QA Director Run 5

> Domain: Playtest & QA
> Stage: `Stage 1 — Reality Baseline Study`
> Current shared object: `SELF_DIRECTED_STUDY`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Original-concept refinement: `DENIED`

## 1. Why this topic now

Sound & Experience Run 4 handed off a narrower QA question than Run 4's generic audio-anomaly problem:

**Can a Human attribute a STOP timing anomaly to the correct source—intentional machine behavior, own input, or platform/audio failure—while ordinary STOPs remain low-monitoring-cost, and can this be measured without teaching the anomaly categories first?**

This matters because a STOP sequence is a causal chain, not a collection of independent effects. A player may experience:

`finger action -> local control response -> reel response -> settle/result -> partial state`

If one link is late, missing or inconsistent, the player still has to decide what happened. The QA risk is not only failure to notice. It is **confidently assigning the wrong cause**.

This run develops a research-only method. It does not create an original machine rule, prototype, injected fault, timing threshold, browser test or production acceptance value.

---

## 2. Repository truth checked before study

Latest `main` was re-fetched and treated as sole source of truth.

Governing/current documents read include:
- `README.md`
- `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`
- `docs/REALITY_PRESENTATION_STANDARD.md`
- `docs/MACHINE_01_PLANNING.md`
- `docs/research/SELF_DIRECTED_STUDY_STATUS.md`
- `docs/research/SELF_DIRECTED_STUDY_HANDOFF_SOUND_EXPERIENCE_RUN4.md`
- completed Case Study status/research references relevant to 新ハナビ and Playtest/QA.

Current repository gates:
- Case Study 01 スマスロ北斗の拳 current cycle: complete through all five fixed Directors.
- Case Study 02 新ハナビ current cycle: complete and closed as the active shared object.
- `CURRENT_SHARED_OBJECT = SELF_DIRECTED_STUDY`
- `REALITY_BASELINE_COMPLETE = FALSE`
- `HUMAN_GATE_1_NOT_READY`
- `SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
- production/prototype/original-concept refinement remain denied.

Completed 新ハナビ research is used only as a reality anchor: a reel-first machine makes the causal ownership of repeated STOPs especially important because the same three physical STOP actions must remain trustworthy across long repeated play.

---

# 3. Sourced facts

## 3.1 Agency judgments integrate multiple cues and weight them by reliability

### SOURCED FACT
Sato (2013) manipulated multiple cues contributing to explicit agency judgments and found that cue weighting changed with prior learning. When action became a reliable predictor of outcome through preceding learning, prediction/outcome congruency received more weight; without that learning, conceptual congruency received relatively more weight.

Source:
- PubMed: https://pubmed.ncbi.nlm.nih.gov/24063155/

### QA INTERPRETATION
A player does not infer STOP ownership from one cue in isolation. The relative trust placed in button response, reel response, audio, visual state and prior experience can shift over time.

Therefore:

`CORRECT SOURCE ATTRIBUTION = RELIABLE CUE INTEGRATION, NOT SINGLE-CUE DETECTION.`

A test that validates only one channel can miss a cross-channel misattribution.

---

## 3.2 Cross-modal grouping can change perceived action-effect causality

### SOURCED FACT
Kawabe, Roseboom & Nishida (2013) showed that sense of agency can be altered by cross-modal grouping. Additional signals synchronized with action/effect events changed grouping and reduced agency measures for the putative effect.

Source:
- PubMed: https://pubmed.ncbi.nlm.nih.gov/23740784/
- PMCID: PMC3774240

### QA INTERPRETATION
Adding a prompt sound or visual flash to "clarify" a STOP can alter which event the Human groups as the consequence of the action. More feedback is not automatically more causal clarity.

This supports Sound Run 4:
`THE EARLIEST PLAUSIBLE EFFECT CAN STEAL CAUSAL OWNERSHIP FROM A LATER ONE.`

QA must therefore test the complete causal chain, not judge individual feedback tokens in solo.

---

## 3.3 Repeated latency can shift the agency decision criterion without improving sensitivity

### SOURCED FACT
Sugano (2021) used signal-detection analysis after exposure to delayed auditory feedback. Temporal recalibration shifted the decision criterion for self-agency, but did not improve perceptual sensitivity for discriminating self versus computer control.

Source:
- PubMed: https://pubmed.ncbi.nlm.nih.gov/33981264/
- PMCID: PMC8107242

### QA INTERPRETATION
A player can become **more willing to accept** delayed feedback as self-caused without becoming better at detecting whether the feedback is actually trustworthy.

This creates an important QA distinction:

`LEARNED TOLERANCE != IMPROVED CAUSAL DISCRIMINATION.`

Long-session adaptation cannot be used as evidence that timing quality passed.

---

## 3.4 Jittery delay affects agency as well as task strategy

### SOURCED FACT
Kim & Yoshida (2024) studied gaze-contingent interaction with jittery temporal delay. As delay increased, authorship/controllability ratings and visual-search efficiency decreased, and action/attention strategy changed.

Source:
- PubMed: https://pubmed.ncbi.nlm.nih.gov/38827897/

### QA INTERPRETATION
Variable delay is not just a subjective polish issue. Humans may adapt their behavior and attention strategy around unstable feedback.

For repeated STOP play, this means a user can appear to "manage" an unstable system by slowing down, waiting, checking or becoming defensive.

### REUSABLE PRINCIPLE
`COMPENSATION BEHAVIOR IS EVIDENCE OF A PROBLEM, NOT PROOF THAT THE PROBLEM DISAPPEARED.`

---

## 3.5 Better task outcome can mask delay detection

### SOURCED FACT
Wen et al. (2017) found that task performance influenced action-effect integration and delay detection. Under assistance that improved performance, participants showed reduced delay detection even when some commands were ignored; performance and agency judgments interacted with temporal feedback evaluation.

Source:
- PubMed: https://pubmed.ncbi.nlm.nih.gov/28651095/

### QA INTERPRETATION
A favorable game result can make a flawed causal chain feel more acceptable. Conversely, a bad result can make a technically normal chain feel suspicious.

Therefore QA must separate:
- whether the STOP chain was temporally/causally coherent;
- whether the resulting reel outcome was favorable;
- whether the Human felt successful.

### REUSABLE PRINCIPLE
`A GOOD OUTCOME CAN MASK BAD OWNERSHIP; A BAD OUTCOME CAN CONTAMINATE OWNERSHIP JUDGMENT.`

---

## 3.6 Outcome feedback can retrospectively alter sense of agency

### SOURCED FACT
Research on continuous action tasks has shown that success/failure feedback can retrospectively influence reported agency even when the action experience itself is otherwise similar.

Source:
- PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC6107221/

### QA INTERPRETATION
STOP ownership should be probed before the player knows whether the result is emotionally desirable when possible in research design; otherwise relief/disappointment can contaminate causal attribution.

This is especially relevant to the broader unresolved Playtest problem of separating intrinsic action satisfaction, skill reward and relief at receiving a favorable outcome.

---

# 4. Core QA model — three different questions

A STOP timing test should not collapse these into one score.

## A. ANOMALY DETECTION
Did the Human notice that something differed from the learned baseline?

## B. SOURCE ATTRIBUTION
What did the Human think caused the difference?

## C. CAUSAL TRUST
After the event, did the Human still believe the machine would respond predictably to the next STOP?

These can dissociate.

Examples:
- detects lateness, blames self incorrectly, but still trusts next STOP;
- misses lateness, gradually slows all future STOPs;
- detects no anomaly, but confidence in the machine declines;
- detects an anomaly correctly as platform failure and does not update game-state belief.

### REUSABLE PRINCIPLE
`DETECTION, ATTRIBUTION AND TRUST ARE THREE DIFFERENT QA VARIABLES.`

---

# 5. Source-attribution taxonomy for future Human trial

The first probe should remain open-ended. Classification happens after the Human's free response.

Research-only bins:

1. `MACHINE-LAW / AUTHORED EVENT`
2. `OWN INPUT / TIMING / AIM ERROR`
3. `INPUT NOT REGISTERED`
4. `PLATFORM / BROWSER / AUDIO-LATENCY ISSUE`
5. `DISPLAY / RENDERING DISCONTINUITY`
6. `INTERRUPTION / RESUME ARTIFACT`
7. `RESULT-BASED RATIONALIZATION`
8. `DETECTED, SOURCE UNKNOWN`
9. `NOT DETECTED`

The taxonomy is for analyst coding, not participant instruction.

### REUSABLE PRINCIPLE
`DO NOT TEACH THE CAUSAL MENU BEFORE MEASURING SPONTANEOUS CAUSAL INFERENCE.`

---

# 6. Non-leading research protocol candidate

No implementation is authorized. This is a future Human-trial structure only.

## Step 1 — Learn the routine without anomaly warning
Allow enough ordinary repeated actions for the Human to form a baseline.

Do not say:
- "some STOPs will be delayed";
- "listen for missing sounds";
- "sometimes the browser will lag";
- "there are intentional timing clues".

## Step 2 — Sparse, post-event free probe
After selected events only:
1. "Did that action/result feel ordinary or different?"
2. If different: "What do you think caused the difference?"
3. "How sure are you?"
4. "Would you do anything differently on the next STOP?"

## Step 3 — Ground-truth coding after the response
Analyst records:
- actual event class;
- spontaneous attribution;
- confidence;
- behavioral change;
- whether game-state belief changed.

## Step 4 — Prompted recognition only after free attribution
If needed, standardized categories can follow **after** the spontaneous answer. Recognition must not replace recall/free attribution.

## Step 5 — Include ordinary baseline probes
Normal events must be sampled so defensive vigilance is measurable.

### REUSABLE PRINCIPLE
`AN ATTRIBUTION TEST WITHOUT NORMAL-EVENT FALSE ALARMS REWARDS PARANOIA.`

---

# 7. Metrics that preserve the distinction

Research metrics only; no thresholds are authorized.

### Source attribution accuracy
`correct source classifications / classified anomaly probes`

### Confident misattribution rate
`wrong source + high confidence / classified anomaly probes`

### Machine-law false semantic rate
`platform/input/render failures interpreted as intentional machine information / those failures`

### Self-blame false rate
`platform/machine anomalies interpreted as own-input error / those anomalies`

### Baseline false alarm rate
`ordinary events called anomalous / ordinary probes`

### Behavioral compensation rate
`events after which user changes timing/checking behavior despite unchanged task requirement / observed events`

### Learned-tolerance delta
Change in acceptance/agency judgment across repetition without corresponding improvement in source-discrimination accuracy.

### REUSABLE PRINCIPLE
`TRACK CRITERION SHIFT SEPARATELY FROM SENSITIVITY.`

---

# 8. 100G / 500G / long-session interpretation

## First minutes
The baseline is still being learned. Wrong attribution can be reasonable uncertainty, not failure. The key evidence is whether Human learns a stable action-effect law without needing to monitor every channel consciously.

## ~100G-equivalent repetition
A healthy repeated loop should show:
- lower need to verify routine STOP feedback;
- stable or improved anomaly/source discrimination;
- low baseline false alarm;
- preserved next-action confidence.

## ~500G dry/repetitive period
Watch for two different degradation paths:

### Fatigue / disengagement
True anomaly detection falls because attention collapses.

### Defensive monitoring
False alarms, checking and hesitation rise because the user no longer trusts the baseline.

Both can produce slower play, but the causes are opposite.

## ~3-hour session
The strongest pass candidate is not "the player accepts everything." It is:
- routine actions remain compressed and low-cost;
- consequential deviations can still be detected;
- source attribution remains reasonably calibrated;
- the player does not accumulate safety checks after every STOP;
- learned tolerance has not simply lowered standards.

### REUSABLE PRINCIPLE
`LONG-SESSION TRUST IS SELECTIVE COMPRESSION, NOT GLOBAL TOLERANCE.`

---

# 9. Completed 新ハナビ reality anchor

Case Study 02 remains closed, but its Playtest findings are useful as a comparison anchor.

The completed research established that a skilled player can convert the same three STOPs from high-attention aiming/interpretation into selective, reversible expertise: routine portions become compressed while specific cue/role/technical-intervention duties reopen attention.

That means a causal-ownership failure is particularly damaging in a normal/reach-eye machine ecology. If the player cannot trust whether a STOP was accepted and whether the resulting reel stop belongs to their input plus machine law, the machine attacks the very loop on which reel-reading mastery depends.

This does **not** authorize copying 新ハナビ's reels, sounds, flashes, cabinet or control rules.

### REUSABLE PRINCIPLE
`REEL MASTERY REQUIRES TRUST IN THE CAUSAL CHAIN THAT PRODUCES THE REEL EVIDENCE.`

---

# 10. Contradictions / unresolved items

## UNRESOLVED 1 — No universal millisecond threshold
The cited agency studies use specific laboratory tasks and delay ranges. None authorizes a pachislot STOP acceptance threshold for Chappy5.

## UNRESOLVED 2 — Cross-channel corroboration can help or mislead
Multiple consistent cues may strengthen source attribution, but extra cues can also regroup causal events and steal ownership. The useful amount of corroboration remains empirical.

## UNRESOLVED 3 — Favorable results can hide timing defects
If a test mostly samples rewarding outcomes, source trust may be overestimated.

## UNRESOLVED 4 — Expertise may produce confident over-reading
Experienced players may be more sensitive to deviations but also more likely to impose a learned machine explanation on technical artifacts.

## UNRESOLVED 5 — Compensation can look like mastery
Slower, more deliberate play may be expert control or defensive adaptation to unstable feedback. Behavioral outcome alone cannot distinguish them.

## UNRESOLVED 6 — Stage 1 forbids execution on an original machine
No browser play, injected faults or original-concept desk testing are performed here.

---

# 11. Ten-part closing

## 1. Topic reason
Sound Run 4 handed off STOP causal-chain ownership and platform latency as competing sources.

## 2. Prior unknown
QA could measure anomaly detection and free attribution, but had not separated criterion shift, source discrimination and causal trust during repeated STOP play.

## 3. Investigation
Reviewed repository reality research plus human agency literature on cue integration, cross-modal grouping, temporal recalibration, jittery delay and result-dependent agency.

## 4. New learning
Humans integrate multiple agency cues according to learned reliability. Repetition can shift what delay is accepted as self-caused without improving discrimination. Positive outcomes can also mask delay detection or retrospectively inflate agency.

## 5. Changed understanding
The target is no longer "notice the wrong timing." The stronger target is **maintain a low-cost routine while preserving calibrated source attribution and causal trust, without learning to excuse unreliable feedback.**

## 6. Reusable principles
- `CORRECT SOURCE ATTRIBUTION = RELIABLE CUE INTEGRATION, NOT SINGLE-CUE DETECTION.`
- `LEARNED TOLERANCE != IMPROVED CAUSAL DISCRIMINATION.`
- `COMPENSATION BEHAVIOR IS EVIDENCE OF A PROBLEM, NOT PROOF THAT THE PROBLEM DISAPPEARED.`
- `A GOOD OUTCOME CAN MASK BAD OWNERSHIP; A BAD OUTCOME CAN CONTAMINATE OWNERSHIP JUDGMENT.`
- `DETECTION, ATTRIBUTION AND TRUST ARE THREE DIFFERENT QA VARIABLES.`
- `DO NOT TEACH THE CAUSAL MENU BEFORE MEASURING SPONTANEOUS CAUSAL INFERENCE.`
- `AN ATTRIBUTION TEST WITHOUT NORMAL-EVENT FALSE ALARMS REWARDS PARANOIA.`
- `TRACK CRITERION SHIFT SEPARATELY FROM SENSITIVITY.`
- `LONG-SESSION TRUST IS SELECTIVE COMPRESSION, NOT GLOBAL TOLERANCE.`
- `REEL MASTERY REQUIRES TRUST IN THE CAUSAL CHAIN THAT PRODUCES THE REEL EVIDENCE.`

## 7. Limits / misuse
Do not convert laboratory delay values into Chappy5 thresholds. Do not create fake lag or hidden failure as a game mechanic from this research. Do not treat player adaptation as an automatic timing pass.

## 8. Remaining unknowns
How can QA separate **intrinsic repeated-action/reel satisfaction**, **skill-execution reward**, and **relief from finally receiving a favorable outcome** without repeatedly interrupting the session and thereby changing the experience?

## 9. Next worthwhile Playtest study
Develop a non-leading, low-interruption evidence model for that three-way reward separation across first minutes, ~100G, ~500G dry periods and long sessions.

## 10. Possible future Chappy5 value
After Human Gate, this framework could prevent technically inconsistent STOP feedback from being normalized by player adaptation, and could help verify that repeated reel play remains trustworthy without forcing constant defensive monitoring.

---

# 12. Gate preservation

`PLAYTEST_QA_SELF_STUDY = COMPLETE_RUN5`

`ORIGINAL_CONCEPT_REFINEMENT = DENIED`

`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`

`BROWSER PLAY / PROTOTYPE / FAULT INJECTION = NOT_PERFORMED`

`REALITY_BASELINE_COMPLETE = FALSE`

`HUMAN_GATE_1_NOT_READY`
