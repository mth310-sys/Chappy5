# Self-Directed Study — Playtest & QA Director Run 9

> Topic: `selective closure / residual inference / false calm / preserved reopening`
> Date: 2026-08-29
> Current shared object: `SELF_DIRECTED_STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Reality baseline complete: `FALSE`

## Repository gate

Latest `main` was fetched immediately before this run and treated as the sole source of truth.

Confirmed from current main:
- Case Study 01 / スマスロ北斗の拳: complete.
- Case Study 02 / 新ハナビ (2021): complete and closed as the active Case Study; retained only as a real-machine anchor.
- `CURRENT_SHARED_OBJECT = SELF_DIRECTED_STUDY`.
- `REALITY_BASELINE_COMPLETE = FALSE`.
- original concepts remain frozen.
- `SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`.
- browser play, Human trial, fault injection, implementation, prototype, asset and code work remain unauthorized in Stage 1.

The historical Case Study 02-specific directive is therefore not allowed to regress current main.

Latest fixed-Director handoff:
- Sound & Experience Run 8 → Playtest & QA.

Handoff question:

> How can a future Human test tell the difference between true selective closure and false calm — the player correctly knows one duty ended while preserving the remaining inference, versus the player simply disengaging and missing still-live information?

This run answers that question at research-method level only.

---

# 1. Topic reason

Sound Run 8 established:

`AUDITORY DUTY CLOSED != SEMANTIC SCENE CLOSED.`

and:

`SELECTIVE AUDITORY RELEASE = END OBSOLETE DUTY + RESTORE BASELINE + DO NOT OVERRIDE LIVE EVIDENCE.`

Playtest & QA Run 8 had already established that quiet behavior after a cue cannot by itself prove healthy closure, because the player may have either:
- genuinely released the completed duty,
- disengaged from the channel,
- or retained a latent obsolete cue–action relation that can reactivate later.

The new problem is narrower and harder:

**one local action duty may correctly close while one inference remains intentionally open.**

A future QA method must therefore avoid a binary score such as `still attentive / no longer attentive`.

The correct object is **selective responsibility state**.

Central QA question:

`DID THE PLAYER STOP DOING THE OLD THING WITHOUT STOPPING THINKING ABOUT THE STILL-LIVE THING?`

---

# 2. Prior unknown

Previous runs could classify:
- lingering vigilance,
- false calm by broad disengagement,
- latent obsolete responsibility,
- healthy return to low-monitoring play.

But they did not yet provide a clean acceptance model for this mixed state:

`ACTION CLOSED + INFERENCE OPEN`

Without that distinction, two opposite design failures can both look superficially correct:

1. **under-release** — the player keeps treating a finished motor duty as active while continuing inference;
2. **over-release** — the player correctly stops the motor duty but also stops inspecting evidence that is still semantically live.

A single “did you know it was over?” question cannot separate these.

---

# 3. Investigation

This run cross-connects current repository findings with three external evidence families.

## 3.1 Completed intentions can remain retrievable after strategic monitoring has ended

### SOURCED FACT

Research on prospective-memory deactivation shows that after an intention is completed, overt monitoring cost can disappear while no-longer-relevant cues can still trigger slowed responses or commission errors. The systematic review by Möschl et al. concludes that deactivation is not reliably all-or-none; parts of an intention can remain accessible after completion.

Sources:
- Möschl et al., `Aftereffects and Deactivation of Completed Prospective Memory Intentions: A Systematic Review`, Psychological Bulletin, 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7007322/
- Möschl et al., `Dissociating sub-processes of aftereffects of completed intentions and costs to the ongoing task in prospective memory: A mouse-tracking approach`, Psychological Research, 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC9508066/
- Streeper & Bugg, `Deactivation of prospective memory intentions: Examining the role of the stimulus–response link`, Memory & Cognition, 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC7523690/

### INTERPRETATION

This supports the existing QA caution that `PACE NORMALIZED` is not proof that an old duty is gone.

But it adds a useful refinement for selective closure: motor-response deactivation and residual semantic activation should not automatically be treated as the same thing. The QA method must separately inspect **old action bias** and **continued evidence use**.

### REUSABLE PRINCIPLE

`DO NOT INFER COGNITIVE STATE FROM A SINGLE BEHAVIORAL SURFACE.`

---

## 3.2 Event boundaries update attention and working memory rather than simply erasing the past

### SOURCED FACT

Event-segmentation research describes boundaries as moments at which the current event model is updated. Boundaries are associated with transient increases in processing and can improve detection of changes while also changing what information remains readily accessible across the boundary.

Sources:
- Zacks et al., `Event Boundaries in Memory and Cognition`, Current Opinion in Behavioral Sciences, 2017. https://pmc.ncbi.nlm.nih.gov/articles/PMC5734104/
- Swallow et al., `Event Boundaries in Perception Affect Memory Encoding and Updating`, Journal of Experimental Psychology: General, 2009. https://pmc.ncbi.nlm.nih.gov/articles/PMC2819197/

### INTERPRETATION

A good local completion event can be understood as a **responsibility boundary**, but such a boundary should update the player's model rather than globally flush it.

For a pachislot-relevant example at abstraction level:
- one STOP-related duty may terminate,
- the stopped result may remain the evidence needed for the next inference,
- the player should update from `I must act` to `I must inspect / infer`, not from `special event` to `nothing matters`.

### REUSABLE PRINCIPLE

`A GOOD CLOSURE BOUNDARY CHANGES THE KIND OF ATTENTION REQUIRED; IT DOES NOT NECESSARILY END ATTENTION.`

---

## 3.3 Resuming a task requires reconstructing the still-relevant task context

### SOURCED FACT

Interruption research consistently finds resumption costs. After an interruption, the first resumed action is often slower and can be more error-prone because relevant task context must be reactivated or reconstructed. Environmental cues can support recovery of the suspended task goal.

Sources:
- Radović et al., `Examining the cognitive processes underlying resumption costs in task-interruption contexts`, Psychological Research, 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC10896823/
- Labonté et al., `Resuming a Dynamic Task Following Increasingly Long Interruptions: The Role of Working Memory and Reconstruction`, Frontiers in Psychology, 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8247645/

### INTERPRETATION

If a local duty closes but residual inference remains live, the design should not force the player to rebuild the inferential context from scratch. Persisting reel/result evidence can act as the context bridge.

This also gives QA a future failure signal: if the player repeatedly has to reconstruct “what am I still supposed to care about?” after every local completion, the closure is technically selective but cognitively expensive.

### REUSABLE PRINCIPLE

`SELECTIVE CLOSURE SHOULD RELEASE A DUTY WITHOUT DESTROYING THE CONTEXT NEEDED FOR THE REMAINING QUESTION.`

---

# 4. New learning — selective closure needs two independent truth channels

A later authorized Human test should score two different questions separately.

## Channel A — Responsibility truth

Question:
**Does the player know that the local action duty has ended?**

Evidence candidates:
- no unnecessary repeat of the old action procedure;
- no waiting for an obsolete instruction;
- no re-checking that is only relevant to the completed duty;
- correct spontaneous explanation of what no longer needs to be done;
- ordinary motor rhythm resumes when the next control law permits it.

Failure:
`OLD DUTY STILL OWNS ACTION`.

## Channel B — Residual inference truth

Question:
**Does the player still use the evidence whose meaning remains open?**

Evidence candidates:
- still inspects/uses the relevant stopped-result information;
- prediction or next-step inference remains correct;
- later free report mentions the still-live evidence without being prompted to monitor it;
- confidence tracks actual evidence quality rather than simply collapsing to “done”.

Failure:
`GLOBAL OVER-CLOSURE / FALSE ALL-CLEAR`.

### Combined rule

Healthy selective closure is not one pass condition but a conjunction:

`SELECTIVE CLOSURE = RESPONSIBILITY RELEASE PASS + RESIDUAL INFERENCE PASS`

This gives four diagnostically different outcomes:

| Responsibility release | Residual inference | Interpretation |
|---|---|---|
| PASS | PASS | healthy selective closure |
| FAIL | PASS | under-release / lingering duty |
| PASS | FAIL | over-release / false calm |
| FAIL | FAIL | unresolved scene / global confusion |

### REUSABLE PRINCIPLE

`TEST WHAT THE PLAYER STOPPED DOING AND WHAT THEY KEPT KNOWING.`

---

# 5. The “ownership handoff” test

A future authorized test should not ask only whether a cue was noticed. It should inspect whether **attention ownership transferred to the correct surface**.

Research abstraction:

`OLD OWNER = temporary action cue / temporary procedure`

`NEXT OWNER = stopped reels / result surface / next valid machine grammar`

Healthy transition:

`OLD OWNER RETIRES -> NEXT OWNER BECOMES PRIMARY -> NO GLOBAL ALL CLEAR`

Possible future observations:
- gaze is not required as a metric; spontaneous touch timing, result use, prediction, delayed free report and error type can jointly show ownership transfer;
- player stops waiting for the old auditory/visual instruction but still interprets the reel/result evidence;
- next ordinary action begins from the correct inferred state without an extra confirmation step.

Failure patterns:
- `NO HANDOFF`: old cue remains primary even after its duty ends;
- `DROPPED HANDOFF`: old cue ends and no evidence surface receives ownership;
- `DOUBLE OWNERSHIP`: player must continue monitoring old cue while also reading the new evidence, creating unnecessary dual-task cost;
- `FALSE GLOBAL RESET`: the end of one cue is interpreted as “nothing from this event matters anymore”.

### REUSABLE PRINCIPLE

`CLOSURE QUALITY IS PARTLY AN OWNERSHIP-TRANSFER PROBLEM.`

---

# 6. Future no-eye-tracking protocol for true closure versus false calm

Stage 1 does not authorize actually running this Human trial. This is a research-only future protocol.

## Step 1 — Capture a personal baseline before the special duty

Record without announcing the selective-closure hypothesis:
- ordinary STOP/action rhythm;
- unnecessary pauses/checks;
- prediction/inference accuracy;
- confidence;
- spontaneous free-report language.

Reason:
player-specific recovery is more meaningful than a universal reaction-time threshold.

## Step 2 — Observe the duty-opening event

Do not immediately ask what the player noticed.

Capture:
- whether behavior changes appropriately;
- whether the correct action law is adopted;
- whether the player attributes the change to the right evidence source.

## Step 3 — Observe local completion

At the first point where one action duty is objectively complete but inference remains live, capture two outcomes separately:

A. Does obsolete action behavior stop?

B. Does still-live evidence continue to guide interpretation?

Do not combine them into one “success” checkbox.

## Step 4 — Allow ordinary continuation before probing

Immediate questioning risks preserving the just-finished duty in working memory and can turn the test itself into continued monitoring.

Prefer:
- natural next action;
- delayed prediction;
- delayed free report;
- later unprompted use of the residual evidence.

## Step 5 — Check preserved reopening later

A player who truly released one duty should still be able to respond when a later valid responsibility opens again.

A false-calm player may show:
- normal-looking pace,
- low checking,
- but degraded detection or late response when a legitimate new duty appears.

A lingering-vigilance player may show the opposite:
- high detection,
- but elevated checking/latency during ordinary play.

### Acceptance logic

`TRUE SELECTIVE RELEASE` requires all of:
1. old-duty action ceases;
2. still-live inference remains correct;
3. ordinary baseline burden recovers where appropriate;
4. later legitimate duty can reopen attention;
5. no obsolete-duty commission-like resurrection.

---

# 7. Why verbal report alone is unsafe

A player may correctly say:
> “that part was finished”

while still showing old-action bias.

Another player may say:
> “I stopped paying attention”

while in fact still using residual reel evidence implicitly.

Therefore explicit report should be triangulated with:
- actual next action;
- inference/prediction accuracy;
- unnecessary checking;
- confidence;
- later reopening performance;
- obsolete-action recurrence.

### REUSABLE PRINCIPLE

`SELF-REPORT CAN IDENTIFY THE PLAYER'S MODEL; IT CANNOT ALONE PROVE THE MODEL IS CONTROLLING BEHAVIOR.`

---

# 8. False-calm signatures that can masquerade as a pass

## 8.1 Fast return to routine

Could mean:
- true release,
- premature disengagement,
- boredom,
- learned helplessness about subtle cues.

Therefore speed alone is ambiguous.

## 8.2 No unnecessary old action

Could mean:
- proper deactivation,
- player did not understand the old duty in the first place,
- total channel disengagement.

Therefore absence of commission errors alone is ambiguous.

## 8.3 Low checking

Could mean:
- mastery,
- selective closure,
- low trust,
- fatigue/desensitization.

Therefore low monitoring alone is ambiguous.

## 8.4 Correct final outcome

Could be produced by:
- luck,
- redundant cues,
- recovery after a missed responsibility.

Therefore result correctness alone is not enough.

### REUSABLE PRINCIPLE

`EVERY “CALM” METRIC NEEDS A COMPANION MEASURE OF PRESERVED DISCRIMINATION OR INFERENCE.`

---

# 9. Closed 新ハナビ anchor — used only at abstraction level

Case Study 02 remains closed and is not re-run.

Completed 新ハナビ research supports the following abstract anchor:
- the same three physical STOPs can move between ordinary, technical and inferential roles;
- local technical duties can be temporary;
- stopped-result evidence remains important after an action is complete;
- routine can resume without changing the physical control set;
- learned absence and restrained presentation can carry information.

This makes it especially useful for the current QA distinction:

`SAME CONTROL HARDWARE DOES NOT MEAN SAME RESPONSIBILITY STATE.`

A player may correctly stop executing one temporary rule while continuing to read the same physical result for a different purpose.

No proprietary reel table, sound, flash law, cabinet design or exact stop-control behavior is reproduced.

---

# 10. First-5-minute / 100G / 500G / 3-hour implications

This is not a new play reconstruction; it extends the completed repeated-play baseline.

## First 5 minutes

Desired learning:
- player can identify one baseline action grammar;
- temporary duties have recognizable start and end;
- local completion does not teach “special thing ended = stop interpreting everything”.

Primary risk:
`beginner learns binary special/not-special instead of layered responsibility.`

## 100G

Desired learning:
- the player starts compressing closure transitions;
- old duties stop consuming explicit checking;
- result-reading remains available where useful.

Primary risk:
`every closure requires a fresh confirmation search.`

## 500G dry spell

Desired behavior:
- sparse reward does not cause either defensive over-monitoring or broad disengagement;
- selective handoffs remain legible even when reward motivation is low.

Primary risk:
`false calm caused by boredom looks like successful low-cost mastery.`

## 3 hours

Desired behavior:
- obsolete action rules remain suppressible;
- valid new duties still reopen attention;
- residual inference survives local closure without requiring deliberate rehearsal.

Primary risk:
`fatigue shifts the player from selective release into indiscriminate ignoring or indiscriminate checking.`

### REUSABLE PRINCIPLE

`LONG-SESSION QA MUST TEST SELECTIVITY, NOT JUST ATTENTION LEVEL.`

---

# 11. New QA classification set

Use these research labels in future authorized trials.

### `SELECTIVE_RELEASE_HEALTHY`
Old action duty ends; residual inference remains usable; baseline burden recovers; later valid duty still reopens.

### `UNDER_RELEASE_ACTION_PERSISTS`
Residual inference remains, but obsolete motor/listening/monitoring duty also remains.

### `OVER_RELEASE_INFERENCE_DROPPED`
Old duty ends correctly, but player also drops evidence that should remain semantically live.

### `FALSE_CALM_CHANNEL_DISENGAGED`
Behavior looks relaxed but later valid responsibility is missed/late or residual inference quality collapses.

### `LATENT_OLD_DUTY`
Behavior looks normal but a similar cue later reactivates an invalid old action.

### `DOUBLE_MONITORING_BURDEN`
Old and next responsibility surfaces both remain active longer than necessary.

### `CONTEXT_RECONSTRUCTION_COST`
Old duty ends, but the player must repeatedly rebuild what remains relevant before acting/inferencing again.

---

# 12. New Stage-1 study checks

These are research checks, not implementation requirements.

- `Responsibility Release Test`
- `Residual Inference Preservation Test`
- `Ownership Handoff Test`
- `False Global All-Clear Test`
- `Context Reconstruction Cost Test`
- `Preserved Reopening Test`
- `Latent Old-Duty Resurrection Test`
- `Long-Session Selectivity Test`

---

# 13. Changed understanding

Before this run, closure QA could be summarized as:

`RECOVER ROUTINE + SUPPRESS OLD + DETECT NEW`

That remains valid but is incomplete for mixed responsibility states.

The stronger model is now:

`SELECTIVE CLOSURE = RETIRE OBSOLETE ACTION + PRESERVE LIVE INFERENCE + TRANSFER OWNERSHIP + RECOVER BASELINE COST + PRESERVE FUTURE REOPENING`

This changes the conceptual unit from **state closure** to **responsibility closure**.

The player is not simply “done” or “not done.” Different duties can end at different times.

---

# 14. Reusable QA principles

- `TEST WHAT THE PLAYER STOPPED DOING AND WHAT THEY KEPT KNOWING.`
- `A GOOD CLOSURE BOUNDARY CAN CHANGE THE KIND OF ATTENTION REQUIRED WITHOUT ENDING ATTENTION.`
- `ACTION RELEASE AND INFERENCE PRESERVATION ARE SEPARATE ACCEPTANCE TARGETS.`
- `CLOSURE QUALITY IS PARTLY AN OWNERSHIP-TRANSFER PROBLEM.`
- `CALM BEHAVIOR IS NOT PROOF OF SELECTIVE RELEASE.`
- `EVERY LOW-MONITORING METRIC NEEDS A COMPANION MEASURE OF PRESERVED DISCRIMINATION OR INFERENCE.`
- `SELECTIVE CLOSURE SHOULD NOT FORCE CONTEXT RECONSTRUCTION.`
- `HEALTHY RELEASE PRESERVES THE ABILITY TO REOPEN.`
- `THE SAME PHYSICAL CONTROLS CAN CARRY DIFFERENT RESPONSIBILITY STATES.`
- `LONG-SESSION QA MUST TEST SELECTIVITY, NOT JUST ATTENTION LEVEL.`

---

# 15. Limits / misuse warnings

- prospective-memory, event-segmentation and interruption studies are not pachislot-specific; they provide distinctions and test logic, not numeric thresholds;
- no universal reaction-time cutoff is justified from these sources;
- eye tracking is not required for the proposed acceptance logic, but the absence of eye tracking means inference must be triangulated from behavior/report rather than claimed as direct visual-attention measurement;
- no Human test has been run in this Stage-1 study;
- no fault injection is authorized;
- no original machine feature, audio cue, reel rule, signal priority, timing value or implementation is specified;
- closed 新ハナビ evidence is used only as an abstract repeated-play anchor.

---

# 16. Remaining unknowns

1. How much persistence should still-live evidence retain after local action closure before it becomes clutter or a second vigilance burden?
2. How can a future Human trial distinguish healthy inferential persistence from perseveration when the player keeps looking at the same result too long?
3. When multiple residual inferences coexist, how should QA determine which one currently owns attention without eye tracking?
4. What is the smallest non-leading post-event probe set that can classify `SELECTIVE_RELEASE_HEALTHY` versus `OVER_RELEASE_INFERENCE_DROPPED`?
5. How does repeated exposure change context-reconstruction cost across sessions separated by hours or days?

---

# 17. Next worthwhile fixed-Director question

Next fixed Director: `MACHINE`.

Highest-value handoff question:

**If different responsibilities on the same stopped result can close at different times, what machine-level research model can represent responsibility ownership and transfer across Game/Reel, Visual/Mechanism and Sound without turning Stage 1 principles into an original-machine event specification?**

Suggested integration targets:
- distinguish `ACTION_OWNER`, `INFERENCE_OWNER`, `ATTENTION_OWNER` and `CLOSURE_EVIDENCE` as research concepts;
- preserve local closure without global reset semantics;
- prevent two Directors from independently claiming the same attention duty after one should have retired;
- keep reopening rules research-only until Human Gate.

---

# 18. Ten-part closing

## 18.1 Topic reason
Sound Run 8 required QA to distinguish true selective release from false calm when one duty ends but meaningful evidence remains live.

## 18.2 Prior unknown
Earlier QA could distinguish broad vigilance/disengagement failures but did not separately score `action closed` and `inference still open`.

## 18.3 Investigation
Reviewed latest main, governing gates, prior QA closure work, Sound Run 8 handoff, closed 新ハナビ abstraction, and literature on completed-intention deactivation, event boundaries and task resumption.

## 18.4 New learning
Selective closure needs two independent truth channels: responsibility release and residual inference preservation, plus evidence that ownership transfers cleanly and future valid duties can reopen.

## 18.5 Changed understanding
The acceptance unit is not global state closure but responsibility-specific closure. One local duty can be finished while the same scene remains semantically open.

## 18.6 Reusable principles
Primary rule:

`TEST WHAT THE PLAYER STOPPED DOING AND WHAT THEY KEPT KNOWING.`

Supporting rule:

`SELECTIVE CLOSURE = RETIRE OBSOLETE ACTION + PRESERVE LIVE INFERENCE + TRANSFER OWNERSHIP + RECOVER BASELINE COST + PRESERVE FUTURE REOPENING.`

## 18.7 Limits / misuse
No Human test, browser play, fault injection, implementation, prototype, proprietary reproduction or original concept refinement is authorized or performed.

## 18.8 Remaining unknowns
The largest remaining issue is how machine-level responsibility ownership should be represented across Directors without prematurely authoring a new machine.

## 18.9 Next worthwhile study
Machine Director should integrate `ACTION_OWNER / INFERENCE_OWNER / ATTENTION_OWNER / CLOSURE_EVIDENCE` as a research model and test where cross-Director responsibility transfer can fail.

## 18.10 Possible future Chappy5 value
If later validated by Human trials, this model could help prevent two expensive failure modes in future machines: a player who keeps monitoring a duty that already ended, and a player who interprets local completion as permission to ignore evidence that still matters.

---

## Gates preserved

`PLAYTEST_QA_SELF_STUDY = COMPLETE_RUN9`
`CURRENT_SHARED_OBJECT = SELF_DIRECTED_STUDY`
`ORIGINAL_CONCEPT_REFINEMENT = DENIED`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`BROWSER_PLAY / HUMAN_TRIAL / FAULT_INJECTION = NOT_AUTHORIZED_IN_STAGE_1`
`IMPLEMENTATION / PROTOTYPE / ASSET / CODE = NOT_AUTHORIZED`
`REALITY_BASELINE_COMPLETE = FALSE`
`HUMAN_GATE_1_NOT_READY`
`NEXT_FIXED_DIRECTOR = MACHINE`
