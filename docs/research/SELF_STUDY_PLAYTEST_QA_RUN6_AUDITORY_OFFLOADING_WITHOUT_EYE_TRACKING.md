# Self-Directed Study — Playtest & QA Director Run 6

> Topic: `auditory offloading / defensive listening / no-eye-tracking QA / monitoring compression`
> Date: 2026-08-28
> Current shared object: `SELF_DIRECTED_STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Reality baseline complete: `FALSE`

## Repository gate

Latest `main` was fetched and treated as the sole source of truth before this run.

Read and preserved:
- `README.md`
- `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`
- `docs/REALITY_PRESENTATION_STANDARD.md`
- shared planning / Human Gate state
- current reality-baseline research
- Case Study 01 / スマスロ北斗の拳 status
- Case Study 02 / 新ハナビ (2021) status and completed research
- latest Sound & Experience Run 5 research and handoff

Current gate:
- Case Study 01 / スマスロ北斗の拳 fixed-five-Director cycle: complete.
- Case Study 02 / 新ハナビ fixed-five-Director cycle: complete and closed as active shared object.
- 新ハナビ remains a closed real-machine evidence anchor only.
- `CURRENT_SHARED_OBJECT = SELF_DIRECTED_STUDY`.
- `REALITY_BASELINE_COMPLETE = FALSE`.
- `SIGNAL//3 / FORGE//HEART / VAULT://3 = PROVISIONAL_FROZEN`.
- no original concept refinement, browser play, implementation, fault injection, prototype, audio asset or code is authorized in this run.

---

# 1. Handoff question

Sound & Experience Run 5 established:

`GOOD AUDITORY OFFLOADING REMOVES A CHECK; BAD MULTIMODALITY ADDS A CHECK.`

and asked Playtest & QA to determine how an iPhone-only Human trial could distinguish:

1. useful auditory offloading — routine sound removes unnecessary visual checking while reel evidence remains primary;
2. defensive listening — Human now monitors sound continuously because missing a cue feels costly or because the baseline is not trusted;
3. habituation / desensitization — checking falls simply because the Human stopped caring or stopped noticing deviations.

The QA problem is difficult because reduced gaze/checking can appear in all three cases.

Therefore:

`LESS CHECKING != LOWER MONITORING COST.`

A reduction in overt checking is acceptable only when task accuracy, meaningful-deviation detection and causal understanding remain intact.

---

# 2. Evidence base

## 2.1 High visual/cognitive load can suppress unexpected auditory detection

### SOURCED FACT

Giraudet et al. studied inattentional deafness during an aviation task. As task load increased, participants missed more rare auditory events. The study demonstrates that an audible event can fail to reach reportable awareness when attention is strongly occupied by another task.

Source:
- Giraudet, L. et al., `P300 Event-Related Potential as an Indicator of Inattentional Deafness?`, PLOS ONE 10(2), 2015.
- https://doi.org/10.1371/journal.pone.0118556

The reported laboratory percentages and timings are not imported into pachislot acceptance criteria.

### INTERPRETATION

A reel-reading task can preserve visual primacy so strongly that a meaningful auditory deviation is missed. This is different from healthy offloading.

If the intended relationship is `routine audio can stay peripheral, deviation can earn attention`, QA must verify that the deviation remains detectable while the player is genuinely engaged in STOP/reel interpretation.

### REUSABLE PRINCIPLE

`A CUE THAT IS AVAILABLE TO THE SPEAKER IS NOT NECESSARILY AVAILABLE TO ATTENTION.`

`OFFLOADING PASSES ONLY IF MEANINGFUL DEVIATION SURVIVES PRIMARY-TASK ENGAGEMENT.`

---

## 2.2 Auditory cues can reduce visual workload, but repeated alerts also teach monitoring policy

### SOURCED FACT

Sound Run 5 retained cross-domain evidence that simple auditory cues can reduce disruption to an ongoing visual task in some conditions, while multimodal benefit depends on task/load rather than "more modalities = better".

Sources retained from prior Sound research:
- Brown, Newsome & Glinert, `An experiment into the use of auditory cues to reduce visual workload`, CHI 1989. https://doi.org/10.1145/67450.67515
- `Simple auditory and visual interruptions of a continuous visual tracking task: modality effects and time course of interference`, Ergonomics 64(7), 2021. https://pubmed.ncbi.nlm.nih.gov/33428536/
- Vitense, Jacko & Emery, `Multimodal feedback: an assessment of performance and mental workload`. https://doi.org/10.1080/00140130303534

Sound Run 5 also retained human-factors evidence that false or unreliable alerts alter trust, compliance/reliance and monitoring behavior.

Sources retained from prior Sound research:
- Ferraro & Mouloua, `Automated Alert Failures and their Impact on Operator Performance and Trust`, 2021. https://doi.org/10.1177/1071181321651290
- `Monitor Alarm Fatigue: An Integrative Review`. https://doi.org/10.2345/0899-8205-46.4.268
- Meyer, Wiczorek & Günzler, `Measures of reliance and compliance in aided visual scanning`, Human Factors 56(5), 2014. https://pubmed.ncbi.nlm.nih.gov/25141592/

### INTERPRETATION

The relevant QA object is not one sound event. It is the **monitoring policy learned across repetition**.

A Human can respond correctly to every explicitly tested cue yet still experience the system as high-cost because ordinary play requires continuous listening. Conversely, a Human can report low workload because they have begun ignoring the channel and therefore miss meaningful deviations.

### REUSABLE PRINCIPLE

`TEST THE LEARNED MONITORING POLICY, NOT ONLY THE CUE.`

`LOW REPORTED EFFORT WITH LOST DEVIATION DETECTION IS DESENSITIZATION, NOT OFFLOADING.`

---

# 3. Why eye tracking is not required for the first QA distinction

## INTERPRETATION

Eye tracking would directly measure gaze, but the core acceptance question is broader:

**Did audio remove unnecessary checking while preserving the player's ability to read the reels and notice meaningful deviation?**

That can be triangulated through behavior without claiming exact gaze coordinates.

The minimum evidence set is:

1. **primary-task accuracy** — did the Human correctly interpret the stop/reel consequence they were supposed to read?
2. **meaningful-deviation detection** — did they spontaneously notice a sound/timing/state deviation when it mattered?
3. **normal-event false alarms** — did they begin suspecting ordinary sound or silence?
4. **spontaneous re-check behavior** — after routine action confirmation, did they visibly/verbally perform extra confirmation before proceeding?
5. **free monitoring report** — without pre-teaching cue categories, what did they say they were watching/listening for?
6. **causal attribution** — when something felt wrong, did they attribute it to reel/game law, their own input, audio/platform behavior, or uncertainty?
7. **behavioral compensation** — did they slow STOP timing, wait for sound, repeat actions, hesitate, change volume, or otherwise protect themselves against ambiguity?

No single item is treated as eye tracking by proxy. The strength comes from convergence.

### REUSABLE PRINCIPLE

`WHEN DIRECT GAZE MEASUREMENT IS ABSENT, REQUIRE CONVERGING BEHAVIORAL EVIDENCE.`

`DO NOT TURN SELF-REPORT INTO FAKE EYE TRACKING.`

---

# 4. Research-only QA matrix

No browser trial is authorized yet. This section defines later Human-trial logic only.

## 4.1 Useful auditory offloading

Expected pattern:
- routine confirmations require fewer visible/explicit re-checks over time;
- reel/STOP interpretation accuracy remains stable or improves;
- meaningful deviations are still detected when they deserve attention;
- normal-event false alarms remain low;
- free report describes sound as background confirmation rather than something that must be policed;
- Human does not wait for routine sound before committing the next legitimate action unless machine law requires it;
- after a deviation resolves, attention returns to reels/routine without lingering suspicion.

Interpretation:

`TRUSTED BASELINE -> OPTIONAL PERIPHERAL CONFIRMATION -> DEVIATION EARNS ATTENTION -> FAST RELEASE`

## 4.2 Defensive listening

Expected pattern:
- Human repeatedly comments on, waits for, or verifies ordinary audio;
- routine sound absence/presence produces hesitation even when no gameplay meaning changed;
- false alarms on ordinary events increase;
- the Human reports listening for multiple low-value details every game;
- reel reading is interrupted by confirmation behavior;
- a normal event can trigger platform/machine suspicion;
- monitoring does not release quickly after a harmless anomaly.

Interpretation:

`LOW SOURCE TRUST -> CONTINUOUS AUDIO AUDIT -> EXTRA CHECKS -> DUAL-MODAL OBLIGATION`

## 4.3 Habituation / desensitization

Expected pattern:
- explicit checking decreases;
- subjective effort may decrease;
- but meaningful-deviation detection also declines or becomes inconsistent;
- causal attribution becomes vague (`didn't notice`, `maybe normal`);
- primary-task behavior can look smooth because the Human has stopped using sound as information.

Interpretation:

`CHECKING DOWN + DETECTION DOWN = NOT OFFLOADING.`

## 4.4 Healthy skill compression

Expected pattern:
- routine checking decreases;
- meaningful-deviation detection stays intact;
- reel interpretation/prediction becomes more accurate or no worse;
- Human can state a compact monitoring rule rather than a longer list of things to inspect;
- normal-event false alarms do not rise;
- no compensatory slowdown is needed.

Interpretation:

`LESS MONITORING BECAUSE THE BASELINE IS PREDICTABLE, NOT BECAUSE THE CHANNEL WAS ABANDONED.`

---

# 5. A no-leading probe sequence

## INTERPRETATION

Previous Playtest runs established that naming anomaly classes before observation can teach defensive monitoring. The same problem applies here.

A future Human trial should therefore use this order when probes are necessary:

1. `Anything feel different or require extra attention?`
2. `What were you mainly using to decide the next action?`
3. `Did you check anything twice? If so, what and why?`
4. `Was there anything you expected to hear/see that you did not?`
5. only after free report: structured classification of visual/audio/input/machine/platform attribution.

Do not begin with:
- `Did you notice the sound?`
- `Were you listening for the delay?`
- `Did the missing cue make you check the reel?`

Those questions create the monitoring policy being measured.

### REUSABLE PRINCIPLE

`MEASURE SPONTANEOUS MONITORING BEFORE NAMING THE CHANNEL.`

`A PROBE THAT TEACHES WHAT TO MONITOR INVALIDATES THE NEXT MONITORING MEASURE.`

---

# 6. Normal events are mandatory controls

## INTERPRETATION

A test containing only meaningful deviations rewards vigilance/paranoia. The Human can succeed by treating every sound as suspicious.

Therefore later trials need ordinary events interspersed with meaningful deviations. The QA record must preserve both:

- `HIT`: meaningful deviation detected correctly;
- `MISS`: meaningful deviation not detected;
- `FALSE ALARM`: ordinary event treated as anomalous/meaningful;
- `CORRECT REJECTION`: ordinary event allowed to remain routine.

This uses signal-detection vocabulary as a descriptive QA frame only; no numeric decision threshold is declared in Stage 1.

### REUSABLE PRINCIPLE

`OFFLOADING REQUIRES CORRECT REJECTION AS WELL AS DETECTION.`

`A PLAYER WHO FLAGS EVERYTHING HAS NOT LEARNED WHAT CAN BE SAFELY IGNORED.`

---

# 7. Reel-reading accuracy must remain the primary-task guardrail

## INTERPRETATION

Visual Run 5 established stopped reels as external memory/evidence surfaces. Sound Run 5 established that audio should not replace the reel proof surface.

Therefore any apparent audio benefit is rejected if it causes:
- lower recognition of partial-stop evidence;
- lower role/reach-eye interpretation accuracy where the machine expects reel reading;
- delayed or less confident STOP decisions caused by listening checks;
- premature conclusion because audio announces an interpretation before the reel evidence is processed.

A useful QA relationship is:

`AUDITORY OFFLOADING PASS`
requires
`CHECKING COST DOWN`
AND `PRIMARY REEL TASK PRESERVED`
AND `MEANINGFUL DEVIATION DETECTION PRESERVED`
AND `FALSE ALARM CONTROLLED`.

This is a conceptual conjunction, not a production metric formula.

### REUSABLE PRINCIPLE

`NEVER ACCEPT LOWER MONITORING COST BY SACRIFICING THE PRIMARY SKILL SURFACE.`

`THE AUDIO CHANNEL MAY SAVE A CHECK; IT MAY NOT BUY THAT SAVING BY MAKING THE REELS LESS READABLE OR LESS NECESSARY.`

---

# 8. Real-machine anchor — 新ハナビ retained, not reopened

### SOURCED FACT RETAINED FROM COMPLETED CASE STUDY

Completed 新ハナビ research documents a normal/reach-eye/technical-intervention machine in which:
- physical reel reading is the central precision task;
- a reel-start timing deviation can change what the player should consider;
- technical-intervention feedback can acknowledge execution;
- RT audio continuity/cessation can carry state meaning;
- repeated value does not require constant AT-state escalation.

Official / major-source anchors retained by prior runs include:
- Universal Entertainment product material: https://www.universal-777.com/product/slot/shin_hanabi/
- 1geki machine/strategy material: https://1geki.jp/slot/s_shinhanabi/
- completed repository Case Study 02 research.

### INTERPRETATION

新ハナビ is useful here because skilled play demonstrates an important target state:

**the player does not need to consciously inspect every available channel every game.**

Routine can become compressed while deviations remain meaningful. That is exactly the distinction this QA model is designed to preserve.

Protected sounds, melodies, samples, proprietary stop-control details and machine-specific presentation are not copied.

---

# 9. First-five-minutes versus long-session interpretation

## INTERPRETATION

The same checking behavior has different meaning at different experience stages.

### First five minutes

More checking can be legitimate model-building:
- learning what confirms input acceptance;
- learning what remains visually primary;
- learning whether silence is normal;
- learning which deviations deserve attention.

QA should not label all early checking as friction.

### Around 100G repeated routine

Healthy trajectory:
- routine confirmation compresses;
- stop/reel interpretation remains stable;
- fewer explicit cross-checks are needed.

Warning trajectory:
- Human still audits routine sound every game;
- or has stopped hearing it entirely and misses meaningful deviation.

### 500G dry/repetitive stretch

This is where defensive monitoring and desensitization can diverge:
- defensive player becomes tired from checking too much;
- desensitized player becomes smooth but misses meaningful deviation;
- healthy skilled player preserves selective sensitivity with low routine cost.

### Three-hour fatigue frame

The long-session question is not merely `Is the sound annoying?`.

It is:
- does selective listening remain possible under fatigue?
- does ordinary audio remain safely ignorable?
- do meaningful deviations still break through?
- does the Human begin compensating with slower play or repeated confirmation?
- does reduced detection reflect fatigue rather than learned mastery?

No three-hour browser trial is performed in Stage 1.

### REUSABLE PRINCIPLE

`MASTERY, FATIGUE AND DESENSITIZATION CAN ALL REDUCE OVERT CHECKING; QA MUST SEPARATE THEM BY PRESERVED DISCRIMINATION.`

---

# 10. New QA model

Research-only model:

`MONITORING COMPRESSION QUALITY`

is judged through the relationship among:

`ROUTINE RE-CHECKS`
`+ PRIMARY-TASK ACCURACY`
`+ MEANINGFUL-DEVIATION DETECTION`
`+ NORMAL-EVENT FALSE ALARMS`
`+ CAUSAL ATTRIBUTION`
`+ COMPENSATION BEHAVIOR`
`+ SUBJECTIVE MONITORING RULE`

The desirable direction is not "minimize every observable check." It is:

`MINIMUM NECESSARY MONITORING AT PRESERVED DISCRIMINATION.`

### Core principles

- `LESS CHECKING != LOWER MONITORING COST.`
- `CHECKING DOWN + DETECTION DOWN = DESENSITIZATION, NOT OFFLOADING.`
- `OFFLOADING PASSES ONLY IF MEANINGFUL DEVIATION SURVIVES PRIMARY-TASK ENGAGEMENT.`
- `TEST THE LEARNED MONITORING POLICY, NOT ONLY THE CUE.`
- `WHEN DIRECT GAZE MEASUREMENT IS ABSENT, REQUIRE CONVERGING BEHAVIORAL EVIDENCE.`
- `DO NOT TURN SELF-REPORT INTO FAKE EYE TRACKING.`
- `MEASURE SPONTANEOUS MONITORING BEFORE NAMING THE CHANNEL.`
- `A PROBE THAT TEACHES WHAT TO MONITOR INVALIDATES THE NEXT MONITORING MEASURE.`
- `OFFLOADING REQUIRES CORRECT REJECTION AS WELL AS DETECTION.`
- `A PLAYER WHO FLAGS EVERYTHING HAS NOT LEARNED WHAT CAN BE SAFELY IGNORED.`
- `NEVER ACCEPT LOWER MONITORING COST BY SACRIFICING THE PRIMARY SKILL SURFACE.`
- `MINIMUM NECESSARY MONITORING AT PRESERVED DISCRIMINATION.`

---

# 11. CONTRADICTIONS / unresolved boundaries

## CONTRADICTION A — Peripheral audio should be ignorable, but meaningful deviation must break through

If deviation is too subtle, reel-task engagement can cause inattentional deafness. If it is too commanding/frequent, it becomes a second mandatory channel.

`UNRESOLVED: what qualitative evidence demonstrates the correct middle ground on iPhone without pre-teaching the cue?`

## CONTRADICTION B — Reduced checking can indicate trust or abandonment

The same outward smoothness can reflect mastery, fatigue, habituation or indifference.

`UNRESOLVED: which smallest set of non-leading probes best separates these states without itself increasing monitoring?`

## CONTRADICTION C — Self-report is necessary but reactive

Asking what the Human listened for can expose the strategy, but repeated questions can teach the strategy.

`UNRESOLVED: optimal probe spacing and whether delayed retrospective reporting preserves useful evidence without memory distortion.`

## CONTRADICTION D — Hall/noise conditions versus iPhone-only development

Laboratory evidence on auditory offloading cannot guarantee performance through iPhone speakers or in a noisy pachislot-like environment.

`UNRESOLVED: environmental robustness remains a later authorized Human/implementation question.`

---

# 12. What changed in QA understanding

Prior QA work separated:

`DETECTION -> ATTRIBUTION -> TRUST`

Run 6 adds a repeated-play monitoring layer:

`TRUSTED ROUTINE -> MONITORING COMPRESSION -> PRESERVED PRIMARY TASK -> PRESERVED DEVIATION DISCRIMINATION -> LOW FALSE ALARM -> ATTENTION RELEASE`

The major correction is that **less visible checking is not itself success**.

A real low-friction system lets the Human stop checking what has become trustworthy **without losing the ability to detect what actually changed**.

---

# 13. Gates preserved

`ORIGINAL_CONCEPT_REFINEMENT = DENIED`

`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`

`BROWSER_PLAY / HUMAN TRIAL / FAULT INJECTION = NOT_AUTHORIZED_IN_STAGE_1`

`IMPLEMENTATION / PROTOTYPE / AUDIO ASSET / CODE = NOT_AUTHORIZED`

`REALITY_BASELINE_COMPLETE = FALSE`

`HUMAN_GATE_1_NOT_READY`
