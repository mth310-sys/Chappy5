# Technology Gap Audit — Playtest & QA Director Run 1

> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Original concepts: `FROZEN / NOT_EVALUATED`

## Audit question
What evidence can Chappy5 currently produce that a future pachislot is not only logically correct, but actually readable, controllable, satisfying, non-fatiguing and convincing as a machine on iPhone over repeated play?

This audit compares accumulated Hokuto / Shin Hanabi / Madoka 2 / Oki Doki GOLD learning against actual Chappy5 process and quality standards. It does not start a new Case Study and does not desk-test SIGNAL/FORGE/VAULT.

## 1. Capability already held

### LEARNED — repeated-play questions are already explicit
Chappy5 already knows that QA must ask more than whether a state is reachable or a Browser Test passes. Existing governing documents require repeated BET/START/STOP play, major-state verification, long-session evaluation, return quality, real-device operation, and independent `REALITY_PRESENCE` judgment.

Accumulated studies have also already separated several concepts that must not be conflated:
- outcome relief vs intrinsic loop satisfaction;
- attention vs enjoyment;
- motor burden vs vigilance/cognitive burden;
- state value vs wall-clock/action exposure;
- sparse presentation vs low attention cost;
- automated action vs played action;
- logical state reproduction vs physical/sensory embodiment.

These are sufficiently learned as QA concepts and do not require another broad machine survey merely to restate them.

### LEARNED — evidence discipline
Repository process already distinguishes verified/unverified evidence and requires Human Gate. Playtest & QA is explicitly prohibited from independently redefining game specifications when an experience problem is found.

### LEARNED — browser regression is useful but insufficient
Automated Browser Test can prove transitions, boundaries and regressions. It cannot by itself prove touch feel, attention cost, fatigue, enjoyment, machine presence or long-session willingness to continue.

## 2. Understood but not yet proven in Chappy5

### MEASUREMENT GAP — no formal Human Experience acceptance protocol
The Reality Standard asks whether the machine feels real and whether the player wants to pull the lever again, but Chappy5 does not yet have a repeatable measurement protocol that turns those questions into comparable evidence across builds.

Needed evidence model should separate at least:
- control success/error;
- input-to-visible response;
- input-to-audible response;
- stop rhythm stability;
- visual occlusion/readability;
- mental/physical/temporal workload;
- frustration;
- vigilance duty;
- intrinsic loop satisfaction;
- relief after reward;
- return-to-HOME quality;
- fatigue drift over session length.

Acquisition evidence: a documented trial protocol with fixed observation windows, rating scales, event logs and build-to-build comparison rules that can be executed by a Human on the target iPhone.

Priority: `CRITICAL`.

### PLATFORM GAP — real iPhone touch and occlusion evidence
No current repository evidence proves that future BET/START/STOP controls on the target iPhone have acceptable hit regions, finger occlusion, accidental activation rate, repeated-thumb comfort or touch-to-reel feedback timing.

Apple's current interface guidance recommends at least 44 × 44 pt hit targets for accurate finger operation; this is a useful lower-bound design reference, not proof that three pachislot STOP controls are comfortable or rhythmically satisfying in Chappy5.

Acquisition evidence: real-device recordings/logs and Human trials across deliberate, rapid, imprecise and long-session STOP operation, including miss/false-hit count and occlusion notes.

Priority: `CRITICAL`.

### MEASUREMENT GAP — interaction latency and jitter are not yet tied to pachislot action
Web responsiveness metrics treat interaction latency as the period from user input through processing to the next visual update. Chappy5 has no current per-action acceptance method for BET, START and STOP1/2/3, nor a method for detecting rhythm-damaging jitter even if average latency appears acceptable.

Acquisition evidence: per-action distributions on target iPhone for touch→accepted event, touch→first visible state change, touch→reel-stop visual confirmation and touch→audible confirmation, recorded over repeated sequences rather than one-off taps.

Priority: `CRITICAL`.

### MEASUREMENT GAP — workload/fatigue lacks a multidimensional instrument
Current studies identify vigilance, attention debt and multi-channel fatigue conceptually, but Chappy5 has no standardized way to distinguish mental demand, physical demand, temporal demand, effort and frustration.

NASA-TLX is a mature multidimensional subjective workload method covering Mental Demand, Physical Demand, Temporal Demand, Performance, Effort and Frustration. It is not a pachislot fun scale and must not be treated as one; however it offers a reusable structure for detecting whether an apparently simple loop is becoming burdensome.

Acquisition evidence: a Chappy5 trial sheet that either uses NASA-TLX correctly or uses a clearly separate adapted non-TLX workload sheet without mislabeling it, paired with observed behavior and game-event logs.

Priority: `HIGH`.

### MEASUREMENT GAP — intrinsic engagement vs relief debt
Chappy5 has principles such as `RELIEF AFTER DROUGHT != QUALITY OF THE DROUGHT`, but no operational trial method proves whether a player wanted to continue before the hit or merely felt relief after a long dry spell.

Acquisition evidence: ratings/observations captured during dry play before reward, immediately after reward, and after HOME return; compare willingness-to-continue and attention burden before and after outcome revelation.

Priority: `HIGH`.

### MEASUREMENT GAP — mastery is not yet longitudinally observed
Shin Hanabi research showed that expertise can reduce required attention while increasing optional inference. Chappy5 has no beginner→familiar→expert observation protocol for whether repeated play actually becomes easier to read without becoming empty.

Acquisition evidence: repeated sessions with the same Human and/or multiple skill levels, recording what the player watches, aims, predicts, ignores and still gets wrong.

Priority: `HIGH`.

### PLATFORM GAP — interruption and mobile-session recovery
No current Human evidence establishes whether iPhone interruption, app/browser backgrounding, audio route changes, viewport shifts, orientation changes, thermal throttling or battery pressure damage state trust and return-to-HOME continuity.

Acquisition evidence: real-device interruption matrix with state-before/state-after, audio recovery, visible control ownership, event loss/duplication and Human re-anchoring time.

Priority: `HIGH`.

### MEASUREMENT GAP — long-session performance/fatigue drift
A 5-minute good impression cannot prove a 3-hour machine. Chappy5 currently lacks a protocol that samples the same metrics across time and distinguishes novelty decay from genuine fatigue.

Acquisition evidence: staged checkpoints (for example early, mid, late) with the same measures for errors, response, workload, attention, enjoyment and willingness to continue; no arbitrary PASS threshold should be invented before baseline data exists.

Priority: `HIGH`.

## 3. Knowledge gaps

### KNOWLEDGE GAP — exact Human thresholds for pachislot-specific timing
General UI/web references can explain response measurement, but they do not establish a universal millisecond threshold for satisfying virtual-reel STOP feel. Exact acceptable values must be learned empirically in Chappy5 rather than copied from unrelated application categories.

### KNOWLEDGE GAP — minimum sample needed for product-level confidence
One Human is essential for Human Gate but cannot establish population robustness. Chappy5 has not yet decided what number/diversity of external testers is necessary before release-level confidence. This is a future process question, not a reason to block Stage 1 research.

### KNOWLEDGE GAP — real-machine body cues that compensate for uncertainty
Physical machines provide tactile, acoustic and spatial confirmation that a phone lacks. Specialist studies identify the loss, but Playtest QA has not yet quantified which substitutions most improve player confidence versus merely add sensory noise.

## 4. Can these gaps be acquired in the current environment?

Mostly yes.

- GitHub can hold protocols, event traces, trial logs and acceptance evidence.
- Browser instrumentation can record logical and rendering timestamps once implementation is permitted after Human Gate.
- The user's target iPhone can provide real-device Human evidence.
- Screen recording can document occlusion and visible response, though it must not be assumed to provide hardware-accurate absolute latency without calibration.
- Workload and experience questionnaires can be administered without creating game code.

What cannot be acquired now is actual Chappy5 machine play evidence because production/prototype work remains prohibited before `HUMAN_MACHINE_APPROVED`. Therefore this audit defines the future evidence requirement; it does not falsely mark those capabilities as verified.

## 5. Highest-value learning decision
Playtest & QA does **not** recommend another broad survey of famous machines as the default next step. The largest remaining gap is a Human evidence methodology that can tell the team when a technically correct browser machine is actually fun, readable, comfortable and machine-like on iPhone.

## 6. Objective criteria to mark Playtest & QA capability acquired
Do not mark this domain acquired merely because a checklist exists. Future evidence should include:
1. a versioned Human trial protocol;
2. real iPhone execution;
3. event/response timing measurements for repeated controls;
4. hit/miss/occlusion evidence;
5. workload/fatigue measures over time;
6. separate pre-reward and post-reward engagement observations;
7. interruption/recovery tests;
8. beginner/familiar-player comparison where relevant;
9. build-to-build comparability;
10. Human qualitative judgment retained as final authority rather than replaced by metrics.

## Audit conclusion
`PLAYTEST_QA_AUDIT = COMPLETE_RUN1`

The strongest unresolved capability is not generic debugging. It is **experience measurement**: proving that repeated action, attention, feedback and return rhythm remain satisfying on the actual phone over time.

`BROWSER_CORRECTNESS ≠ HUMAN_PLAYABILITY ≠ LONG_SESSION_QUALITY ≠ REALITY_PRESENCE`

The next Machine Director should integrate this with the four prior Director answers. Playtest & QA is now eligible for its self-directed study under `SELF_DIRECTED_STUDY_STATUS.md`.

## Sources used for audit framing
- Chappy5 `README.md`
- `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`
- `docs/REALITY_PRESENTATION_STANDARD.md`
- `docs/research/TECHNOLOGY_GAP_AUDIT_STATUS.md`
- Apple UI Design Tips / Human Interface Guidelines: https://developer.apple.com/design/tips/
- NASA Task Load Index: https://www.nasa.gov/human-systems-integration-division/nasa-task-load-index-tlx/
- ISO 9241-210:2019 overview: https://www.iso.org/standard/77520.html
- Web responsiveness / interaction-latency background: https://web.dev/blog/responsiveness/
