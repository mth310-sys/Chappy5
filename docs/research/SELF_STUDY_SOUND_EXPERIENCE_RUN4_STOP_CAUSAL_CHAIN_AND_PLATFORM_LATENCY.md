# Self-Directed Study — Sound & Experience Director Run 4

> Topic: `STOP causal audio chain / competing platform latency`
> Date: 2026-08-28
> Current shared object: `SELF_DIRECTED_STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Reality baseline complete: `FALSE`

## Repository gate

Latest `main` was re-read as the sole source of truth before this run, including README, production workflow, reality standard, shared planning/Human Gate, all four Director reality-baseline files, Machine reality synthesis, current Case Study status, prior Sound research and the latest Visual & Mechanism Run 4 handoff.

- Case Study 01 / スマスロ北斗の拳: current five-Director cycle complete.
- Case Study 02 / 新ハナビ (2021): current five-Director cycle complete and closed as active shared object.
- `CURRENT_SHARED_OBJECT = SELF_DIRECTED_STUDY`.
- Case Study 02 is not reopened in this run. Its completed real-machine evidence remains a reference anchor only.
- `SIGNAL//3 / FORGE//HEART / VAULT://3 = PROVISIONAL_FROZEN`.
- No original sound concept, melody, sample, signature sound, asset, prototype or code is created.

---

# 1. Why this topic is the next Sound question

Visual & Mechanism Run 4 reframed STOP as a causal geometry:

`hand → STOP control → cabinet/machine → reel response → settled reel result`

Its handoff asks what auditory evidence lets Human hear the same action as one continuous causal event without making every STOP loud, and how browser/device delay or dropout can be prevented from masquerading as legitimate machine-authored timing variation.

Prior Sound runs already established two prerequisites:

1. repeated routine audio must be stable enough that omission/delay can have meaning;
2. platform silence must not impersonate game silence.

This run therefore does **not** invent a STOP sound. It studies the causal/timing conditions under which existing categories of action, mechanism and result sound can be attributed to the same machine event.

---

# 2. Prior unknown

Before this run, the research did not adequately distinguish:

- a sound being close in time to STOP;
- a sound being perceived as the **effect of** STOP;
- a later settling/result sound remaining owned by the same action after an earlier acknowledgement;
- adaptation to a delayed feedback baseline versus genuinely good responsiveness;
- authored machine timing deviation versus browser/audio-output latency and jitter.

A single average-latency number cannot answer those questions.

---

# 3. Investigation

## 3.1 Action–sound ownership and competing effects

### SOURCED FACT

An Experimental Brain Research study on intentional binding presented a target sound 250 ms after a voluntary button press and added another sound at different timings. Intentional binding between action and target sound was significantly inhibited when the additional sound occurred **before** the target sound; the authors interpret the prior effect as having an advantage in becoming connected to the action.

Source:
- `Inhibition of intentional binding by an additional sound presentation`, Experimental Brain Research 241, 301–311 (2023 publication issue; online record 2022-12-12).
- https://cir.nii.ac.jp/crid/2120589364847895936

### INTERPRETATION

The first plausible auditory consequence after STOP can compete for causal ownership. Therefore an early transient cannot be treated as a harmless patch for a later machine/result sound merely because both are individually understandable.

If the early event becomes “what my press caused,” the later event may become perceptually detached, even though implementation considers them one sequence.

### REUSABLE PRINCIPLE

`THE EARLIEST PLAUSIBLE EFFECT CAN STEAL CAUSAL OWNERSHIP FROM A LATER ONE.`

`AUDITORY OWNERSHIP IS A SEQUENCE CLAIM, NOT A SINGLE-ONSET CLAIM.`

Do not solve delayed outcome feedback by indiscriminately adding an earlier sound. The entire action→mechanism→settle sequence must remain causally legible.

---

## 3.2 Adaptation to delay is not proof that delay is good

### SOURCED FACT

Sugano (2021) exposed participants to auditory feedback 80 ms or 180 ms after voluntary actions and then tested self-agency judgments. Temporal recalibration shifted the **decision criterion** for self-agency but did not improve perceptual sensitivity for identifying agency.

Sources:
- `Audiomotor Temporal Recalibration Modulates Decision Criterion of Self-Agency but Not Perceptual Sensitivity`, Frontiers in Psychology 12 (2021).
- https://doi.org/10.3389/fpsyg.2021.580441
- https://pubmed.ncbi.nlm.nih.gov/33981264/

### INTERPRETATION

A player can become more willing to accept a delayed action→sound relationship after repeated exposure. That does not prove the system became more temporally precise or comfortable. A stable but poor delay can become normalized.

This is directly relevant to long pachislot repetition: hundreds of STOP actions may train acceptance of a platform-specific delay even while that delay weakens immediate mechanical presence.

### REUSABLE PRINCIPLE

`ADAPTATION TO LATENCY IS NOT A RESPONSIVENESS PASS.`

Future Human evaluation must distinguish:
- perceptual/causal precision;
- learned tolerance;
- subjective comfort;
- platform timing stability.

---

## 3.3 Cross-modal confirmation can help ownership—but can also hide lateness

### SOURCED FACT

Published agency research has shown that action-effect timing and the consistency of visual/auditory consequences jointly affect whether people experience outcomes as self-caused. Prior Sound and Visual runs already record that coherent cross-channel feedback can support action ownership, while inconsistent feedback can weaken it.

### INTERPRETATION

For pachislot STOP, local visible/tactile acknowledgement and reel motion can help preserve ownership of a subsequent sound. But this creates a trap: strong visual confirmation may make a late audio response feel acceptable enough that the underlying audio latency is overlooked.

The research target is therefore not “make all modalities fire together” and not “visual feedback can compensate for audio.” It is to preserve the **same causal order** while keeping each channel trustworthy enough to expose, rather than conceal, abnormal platform behavior.

### REUSABLE PRINCIPLE

`CROSS-MODAL SUPPORT SHOULD REINFORCE CAUSAL ORDER, NOT LAUNDER LATE AUDIO.`

`ONE CHANNEL SHOULD NOT BE USED TO HIDE ANOTHER CHANNEL'S INSTABILITY.`

---

## 3.4 Browser audio latency is a competing causal source

### SOURCED FACT

The Web Audio API exposes `AudioContext.baseLatency`, representing processing latency from the end of the audio graph into the host audio subsystem. MDN states that a requested `latencyHint` may be ignored by the browser. The `AudioContext()` constructor describes `interactive` as the low-latency mode intended for user actions/game-like audiovisual coordination, but still states the user agent may not meet the requested value.

`AudioContext.outputLatency` provides an estimate of additional output latency toward the actual output device and varies by platform and hardware. It only became broadly available in current browsers from March 2025 and may not exist on older combinations.

Sources:
- https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/baseLatency
- https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/AudioContext
- https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/outputLatency

### INTERPRETATION

A future iPhone/browser pachislot does not own the complete physical path from JavaScript scheduling to the listener's ear. Audio delay has at least one causal component outside the authored machine rules.

Therefore a timing anomaly can arise from two different sources:

`MACHINE-AUTHORED TIMING` — a deliberate rule tied to game state/action/result.

`PLATFORM TIMING` — browser scheduling, audio graph, host audio subsystem, device/output behavior, interruption/resume or load-related jitter.

If both are allowed to look/sound identical, deliberate “delay” or “silence” loses trustworthy semantics.

### REUSABLE PRINCIPLE

`PLATFORM LATENCY IS A COMPETING CAUSAL SOURCE, NOT A VALID MACHINE-TIMING VARIANT.`

`A TIMING DEVIATION CAN CARRY GAME MEANING ONLY AGAINST A PLATFORM-ROBUST BASELINE.`

No numeric production threshold is established here. `baseLatency`/`outputLatency` are diagnostics/estimates, not guarantees of end-to-end perceptual timing.

---

# 4. New learning — STOP is an auditory causal chain

## INTERPRETATION

The reusable object is not a single “STOP SE.” A real repeated STOP can be understood as a chain of evidence:

`PLAYER ACTION`
→ `LOCAL ACCEPTANCE EVIDENCE`
→ `REEL / MECHANISM STATE CHANGE`
→ `SETTLING / RESOLUTION EVIDENCE`
→ `PARTIAL MACHINE STATE PRESERVED FOR NEXT STOP`

Not every stage must contain an authored sound. Physical/mechanical reel sound, visual motion and touch state may carry parts of the chain. The Sound Director's responsibility is that any audio which is present does not contradict or fragment that causal history.

For STOP1 and STOP2, the result is not a terminal flourish: a partial reel state remains available to be read before the next STOP. Therefore audio must not imply “event fully ended” when the machine is still in a three-stop reasoning sequence.

For STOP3, settle/result/payout/replay information can legitimately close or hand off the sequence, but closure still depends on game state rather than mere loudness.

### REUSABLE PRINCIPLE

`ONE STOP SHOULD LEAVE ONE COHERENT CAUSAL AUDITORY HISTORY.`

`STOP1 / STOP2 AUDIO MUST NOT ERASE THE PARTIAL-STATE LISTENING SPACE NEEDED FOR THE NEXT REEL.`

`CLOSURE IS A GAME-STATE CLAIM, NOT AN AUDIO-INTENSITY CLAIM.`

---

# 5. Changed understanding

Previous Sound work emphasized:

`stable routine → meaningful deviation`

This remains valid but is incomplete. Run 4 adds **source ownership and sequence order**:

`stable causal routine → action ownership → ordered mechanism/result evidence → meaningful deviation`

A perfectly recognizable sound can still be bad feedback if it arrives in a way that makes the player bind it to the wrong action or wrong stage of the reel process.

Conversely, a sparse machine can remain clear without making each STOP conspicuous if action ownership is stable across many repetitions.

### Research-only conceptual model

`PERCEIVED STOP OWNERSHIP ≈ ORDER × PREDICTIVE CONGRUENCE × CROSS-MODAL AGREEMENT × BASELINE STABILITY ÷ COMPETING-EFFECT AMBIGUITY`

This is an **INTERPRETATION**, not a scientific equation or production formula.

---

# 6. Real-machine / 新ハナビ anchor retained

Case Study 02 remains closed. No protected sample, melody, voice, flash artwork or signature sound is reproduced.

The completed 新ハナビ research is useful here because the machine's repeated value is centered on physical stopping, partial reel information, reach-eye/role reading and technical intervention rather than constant AT escalation. That makes **quiet causal clarity during ordinary STOP repetition** more important than creating a reward peak on every input.

Prior Case Study 02 Sound research also established that audio continuation/cessation can itself become an information surface in RT contexts. Run 4 strengthens the constraint: if continuity carries machine meaning, platform-created discontinuity is not merely a quality defect—it can falsify game information.

### REUSABLE PRINCIPLE

`WHEN CONTINUITY IS SEMANTIC, TECHNICAL DROPOUT IS FALSE GAME INFORMATION.`

`SPARSE PRESENTATION INCREASES THE INFORMATIONAL WEIGHT OF SMALL TIMING ERRORS.`

---

# 7. Repetition and fatigue implication

## INTERPRETATION

Repeated causal clarity should not be confused with repeated attention capture.

The Sound baseline already established that BET/lever/reel/STOP/result sounds are heard during poor runs as well as rewarding runs, and therefore must survive hundreds of repetitions. Run 4 adds that causal acknowledgement can be **low-salience yet reliable**. Making every STOP maximally sharp/loud may improve immediate detectability while consuming the same attention authority needed for meaningful deviations.

A stable, quiet causal law can produce stronger meaning when an actual deviation occurs because the player does not have to defensively monitor every ordinary STOP.

### REUSABLE PRINCIPLE

`CAUSAL CLARITY DOES NOT REQUIRE MAXIMUM SALIENCE.`

`ROUTINE STOP FEEDBACK SHOULD CONFIRM OWNERSHIP MORE OFTEN THAN IT DEMANDS ORIENTING.`

`MEASURE JITTER AND FALSE ATTRIBUTION, NOT ONLY WHETHER A CUE WAS HEARD.`

---

# 8. Limits / misuse prevention

- This run does not specify a STOP sound, sound family, waveform, pitch, duration, speaker position or mix.
- It does not reproduce 新ハナビ or any third-party sound.
- 80 ms / 180 ms / 250 ms values above are experimental conditions from cited human-perception studies, **not pachislot acceptance thresholds**.
- Web Audio latency properties do not provide a complete end-to-end ear-level latency measurement.
- Do not infer undocumented real-machine stop-control/audio timing from video frames or compressed YouTube audio.
- Do not “fix” platform latency by simply moving all game sounds early; that can break causal order and create new attribution errors.
- Do not deliberately use unstable browser timing as a game-effect source.
- No production acceptance constant may be created before Human Gate / implementation-stage measurement.

---

# 9. UNRESOLVED

1. What distribution of STOP→auditory-feedback delay and jitter is actually produced by the target iPhone/browser combinations under sustained play?
2. How much of a STOP's perceived ownership can be carried by visual/tactile/mechanical evidence when authored audio is delayed or intentionally absent?
3. At what point does a local acknowledgement cue compete with rather than support the later reel-settle/result event?
4. Can Human distinguish authored timing deviation from random platform jitter without being pre-taught that “delay means something”?
5. How does STOP1→STOP2→STOP3 cadence alter causal grouping when the player changes stopping speed or pauses to read a partial reach eye?
6. How does long-session fatigue change tolerance for latency and the false conclusion that “I must have pressed badly”?
7. Actual cabinet speaker/mechanical-acoustic timing for 新ハナビ remains undocumented here and must not be invented.

---

# 10. Next worthwhile study

Highest-value next Playtest & QA question:

**Can Human attribute a STOP timing anomaly to the correct source—intentional machine behavior, own input, or platform/audio failure—while normal STOPs remain low-monitoring-cost, and can this be measured without first teaching the anomaly categories?**

Suggested research-only measures for a later Human Trial design:
- spontaneous anomaly detection;
- free-text/free-choice source attribution before category recognition;
- confidence;
- action→reel/result causal ownership;
- normal-event false alarms;
- delay/jitter distribution where instrumentation eventually exists;
- change after 100G/500G/long-session repetition.

No browser play or implementation is authorized in Stage 1.

---

# 11. Possible future Chappy5 value

If later approved for production study, this research can prevent two opposite failures:

1. **flat UI feedback** — STOP sounds like an unrelated interface tap while reels resolve elsewhere;
2. **false machine law** — browser/audio instability is mistaken for an intentional pachislot timing cue.

The target is not more sound. It is stronger causal trust in the repeated machine loop.

---

# Gates preserved

`ORIGINAL_CONCEPT_REFINEMENT = DENIED`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`AUDIO PROTOTYPE / ASSET / CODE = NOT_CREATED`
`REALITY_BASELINE_COMPLETE = FALSE`
`HUMAN_GATE_1_NOT_READY`
