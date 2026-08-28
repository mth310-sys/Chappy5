# Case Study 03 — Sound & Experience Phase A Run 1 Handoff

> Target: メーシー「SLOT魔法少女まどか☆マギカ2」（2016）
> Current phase: `PHASE A — REAL MACHINE STUDY`
> Director: `SOUND_&_EXPERIENCE`
> Result: `PHASE_A_RUN1_COMPLETE`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Reality Baseline: `NOT_COMPLETE`

Primary research:
- `docs/research/CASE_STUDY_03_MADOKA_MAGICA_2_SOUND_EXPERIENCE_RUN1.md`

## Confirmed routing

- Case Study 01 current cycle: complete through all five Directors.
- Case Study 02 current cycle: complete and closed as active object after Machine Run 5.
- Current shared object: Case Study 03 `SLOT魔法少女まどか☆マギカ2`.
- Phase B smartphone-app research remains deferred until all five Directors complete adequate Phase A real-machine study.

## Sound & Experience Run 1 summary

The real-machine A+ART sound problem is better modeled as **parallel reward clocks** than as one permanent escalation ladder:

- BIG is a short, self-contained foreground reward.
- ART is a persistent state that may need to remain acoustically sustainable for hundreds of games.
- BIG during ART temporarily owns the foreground, but the player must be audibly re-anchored to the surviving ART context afterward.

Published BIG material also establishes that the player selects notification type and BGM. The three notification modes redistribute when certainty is delivered: intermittent chance notification, sudden complete notification, or deferred post notification. This means customization can alter the player's attention schedule, not merely sound taste.

A field report describes the complete-notification event as startlingly loud enough to produce a physical jump and adjacent-seat attention. This is retained as field evidence, not measured SPL. It creates a useful QA separation between `memorable`, `rewarding`, and `comfortable`.

ART navigation changes audio responsibility from atmosphere to action timing. Persistent BGM may own mood, while intermittent navigation must temporarily own player action without requiring continuous maximum loudness.

CZ and extension states are treated as temporary attention/intensity envelopes. Their quality depends not only on entry impact but on a clear release/return edge.

## Key abstractions

- `SHORT REWARD MAY TAKE THE FOREGROUND WITHOUT ERASING THE PERSISTENT AUDIO CONTEXT IT INTERRUPTS.`
- `AUDIO CUSTOMIZATION CAN CHANGE WHEN THE PLAYER RECEIVES CERTAINTY, NOT JUST WHAT THE MACHINE SOUNDS LIKE.`
- `MEMORABILITY MUST BE EVALUATED SEPARATELY FROM STARTLE COST.`
- `A RARE PEAK BORROWS ITS POWER FROM THE HEADROOM LEFT BY ROUTINE AUDIO.`
- `STOP3 MAY CLOSE THE MOTOR QUESTION WHILE AUDIO KEEPS THE CONSEQUENCE QUESTION OPEN.`
- `TEMPORARY HIGH-DUTY AUDIO NEEDS A CLEAR RELEASE EDGE.`
- `PERSISTENT BGM MAY OWN MOOD; INTERMITTENT CUES MUST OWN ACTION TIMING.`
- `INTENSITY IS A TEMPORARY RESOURCE; SPECIAL STATES SHOULD RETURN IT WHEN THEIR LOCAL QUESTION ENDS.`
- `A PARALLEL REWARD SHOULD HAVE AN AUDIBLE RETURN ADDRESS.`
- `DENSE PRESENTATION CAN REMAIN READABLE IF SEMANTIC OWNERSHIP CHANGES CLEANLY OVER TIME.`

## Unresolved

Do not claim as verified yet:
- exact BET / lever / reel-spin / STOP1/2/3 / settling / payout / replay sound map;
- time-coded 100G acoustic event-density measurement;
- exact audio behavior of normal stage changes and precursor sequences;
- time-coded CZ failure-to-normal release;
- exact ART navigation cue/BGM masking behavior;
- time-coded BIG-inside-ART return transition;
- speaker count/location, driver specification, crossover/frequency response, subwoofer or dedicated vibration mechanism;
- any SPL measurement inferred from recorded videos.

## Handoff to Playtest & QA

Reconstruct repeated real-machine play rather than highlight clips. Specifically test:

1. normal 100G and 500G dry stretches for routine fatigue;
2. rare-role recognition → unresolved consequence → closure latency;
3. CZ failure → return-to-normal attention release;
4. BIG-only satisfaction when ART does not follow;
5. three BIG notification modes as different certainty schedules;
6. complete-notification reward versus startle cost;
7. long ART sustainability: state BGM versus intermittent navigation/extension demand;
8. `BIG during ART → ART resume` re-anchor quality;
9. semantic concurrency fatigue from navigation + BGM + voice + visual event + reward feedback;
10. no smartphone-app evidence during Phase A.

## Gate

`CASE_STUDY_03_SOUND_EXPERIENCE_PHASE_A_RUN1_COMPLETE`
`NEXT_FIXED_DIRECTOR = PLAYTEST_&_QA`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
