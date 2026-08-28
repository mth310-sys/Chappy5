# Self-Directed Study — Playtest & QA Director Run 1

## Theme
**How can Chappy5 prove that repeated BET / START / STOP1 / STOP2 / STOP3 play on iPhone is intrinsically satisfying rather than merely functional, responsive, or temporarily exciting?**

> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production/prototype/code: `PROHIBITED`

This is not a machine Case Study. No original concept is evaluated or changed.

---

## Why I chose this question
Previous machine studies already gave Playtest & QA many qualitative warnings: relief after a dry spell is not proof that the dry spell was good; low motor cost can hide vigilance cost; sparse presentation can still demand constant auditing; automation can preserve outcomes while removing action ownership; and a HOME state must release attention.

What remained weak was not vocabulary but **evidence**. Chappy5 could plausibly build a technically correct machine and still have no defensible way to answer:

- Did I enjoy the repeated 3 STOPs themselves?
- Did I keep watching because the loop was interesting, or because I feared missing something?
- Was the hit satisfying because the game was good, or because the previous 500G were painful?
- Did iPhone touch preserve action ownership, or merely simulate three button events?
- Did the first 5 minutes feel good only because everything was new?

That gap is more valuable to solve than collecting another list of famous-machine features.

---

# Evidence

## SOURCED FACT — Human-centred design is lifecycle work, not a final usability check
ISO 9241-210:2019 describes human-centred design activities across the lifecycle of interactive systems and explicitly includes software, web applications and mobile-phone-type products within its scope.

Source: https://www.iso.org/standard/77520.html

### INTERPRETATION
For Chappy5, Human evidence should not appear only at the final release gate. The future production process should repeatedly test assumptions about controls, readability, workload and repeated play as builds mature.

### REUSABLE PRINCIPLE
`HUMAN EVIDENCE IS A DEVELOPMENT INPUT, NOT A RELEASE CEREMONY.`

---

## SOURCED FACT — touch targets need physical operating margin
Apple's current interface guidance recommends a minimum hit target of 44 × 44 points for controls intended for finger input. Apple's game guidance also warns that controls which are too small or too close can frustrate players and reduce enjoyment.

Sources:
- https://developer.apple.com/design/tips/
- https://developer.apple.com/design/human-interface-guidelines/designing-for-games/
- https://developer.apple.com/design/human-interface-guidelines/game-controls

### OBSERVATION
A pachislot-like interface is unusually sensitive to this because STOP1/2/3 are not occasional menu buttons. They are repeated rhythm actions and their location competes with reel visibility on a small screen.

### INTERPRETATION
A 44 pt target is only a lower-bound interface reference. It does not prove that three adjacent repeated STOP controls are comfortable, readable or rhythmically satisfying.

### REUSABLE PRINCIPLE
`A VALID HIT TARGET IS NOT YET A GOOD REPEATED-ACTION TARGET.`

### UNRESOLVED
What target size/spacing is best for Chappy5 depends on actual cabinet composition, reel window, hand posture, thumb/finger choice and whether the user plays one-handed or two-handed. No universal value is claimed here.

---

## SOURCED FACT — web interaction latency should be treated end-to-end
Web responsiveness work behind Interaction to Next Paint measures an interaction from user input through event processing to the next frame presented, rather than measuring only handler start delay.

Source: https://web.dev/blog/responsiveness/

### INTERPRETATION
For Chappy5, `touch event received` is not sufficient evidence that STOP feels responsive. At minimum, future QA must distinguish:

1. physical touch → browser event accepted;
2. event accepted → game action committed;
3. action committed → reel visibly responds/stops;
4. action committed → audio confirms;
5. STOP1 → STOP2 → STOP3 cadence consistency.

Average latency alone can also hide jitter. Repeated pachislot action may feel less trustworthy when one STOP occasionally responds later than its neighbors even if the mean is acceptable.

### REUSABLE PRINCIPLE
`REPEATED CONTROL FEEL IS A DISTRIBUTION, NOT AN AVERAGE.`

### UNRESOLVED
General web metrics do not provide a pachislot-specific threshold for “good STOP feel.” That threshold must be learned on Chappy5's actual target device with Human testing.

---

## SOURCED FACT — workload is multidimensional
NASA-TLX evaluates subjective workload using six dimensions: Mental Demand, Physical Demand, Temporal Demand, Performance, Effort and Frustration.

Source: https://www.nasa.gov/human-systems-integration-division/nasa-task-load-index-tlx/

### INTERPRETATION
This gives Chappy5 a useful lesson even if NASA-TLX is not used as the sole product metric: “fatigue” must not be stored as one vague score.

A pachislot loop can be:
- physically easy but mentally demanding;
- mentally easy but temporally stressful;
- mechanically simple but frustrating because feedback is uncertain;
- comfortable for 100G but irritating after 1000 repeated actions.

### REUSABLE PRINCIPLE
`LOW PHYSICAL DEMAND DOES NOT IMPLY LOW TOTAL WORKLOAD.`

### LIMIT
NASA-TLX is a workload instrument, not a fun, immersion, gambling-value or pachislot-quality score. A low workload machine can be boring. A moderately demanding technical machine can be engaging. Workload must be interpreted beside behavior and experience evidence.

---

# The new Playtest evidence model

## INTERPRETATION
The prior Chappy5 studies suggest that one global “楽しい/つまらない” rating is too lossy. Future Playtest should collect evidence in five independent layers.

### Layer A — Action Integrity
Can the player execute the intended action reliably?

Future measures:
- hit / miss / false activation;
- accidental double input;
- STOP order error when order matters;
- finger occlusion;
- one-hand / two-hand comfort;
- recovery from imprecise taps.

### Layer B — Causal Response
Does the machine feel as though it reacts to the player's action?

Future measures:
- touch→visible response distribution;
- touch→audio response distribution;
- inter-STOP cadence/jitter;
- mismatch between logical stop and presented stop;
- whether feedback remains clear under rapid play.

### Layer C — Attention / Workload
What does repeated play demand from the player?

Future measures:
- what must be watched every game;
- what can safely be ignored;
- mental / physical / temporal demand;
- frustration;
- frequency of “I was not sure whether I missed something.”

### Layer D — Intrinsic Loop Value
Would the player continue if the next reward were not imminent?

Future probes should be taken **before** a hit as well as after it:
- “もう10G回したいか” / “もう100G回したいか”;
- curiosity about the next stop/result;
- whether normal play contains meaningful questions;
- whether attention is voluntary or defensive.

### Layer E — Reward / Return Effect
What does the reward change, and what remains after it ends?

Future measures:
- immediate reward satisfaction;
- relief after drought;
- desire to continue after reward;
- re-anchor time to HOME;
- whether HOME feels worthwhile or only like waiting for the next rescue.

### REUSABLE PRINCIPLE
`PLAYTEST MUST MEASURE THE LOOP BEFORE THE REWARD, THE REWARD ITSELF, AND THE RETURN AFTER THE REWARD AS THREE DIFFERENT PRODUCTS.`

---

# Novelty and long-session testing

## INTERPRETATION
A first-session test systematically overweights discovery. Almost any polished machine can feel denser in its first minutes because every sound, flash and transition is new.

Therefore future Chappy5 trials should not treat a 5-minute reaction as proof of repeated value. The same evidence categories should be sampled at multiple exposure points.

Candidate structure for future production-stage Human trials (not a specification and not yet a PASS rule):
- first-contact window;
- post-learning window;
- routine mid-session window;
- late-session window;
- post-reward return window.

The exact game counts/time windows should be chosen when a real Chappy5 machine exists. No fake precision is imposed during Stage 1.

### REUSABLE PRINCIPLE
`NOVELTY DECAY IS NOT THE SAME VARIABLE AS FATIGUE GROWTH.`

A good long-session protocol should try to tell them apart.

---

# Beginner versus mastery evidence

## INTERPRETATION
Shin Hanabi research suggested that mastery may let the player ignore more safely while preserving optional depth. That cannot be verified with only an expert or only a beginner.

Future Playtest should separately observe:
- first-contact player;
- player after learning the routine;
- experienced player where the machine contains meaningful mastery.

For each, record:
- what they watch;
- what they aim at;
- what they predict;
- what they ignore;
- where they hesitate;
- what they misunderstand;
- whether repeated operation becomes fluent or merely automatic.

### REUSABLE PRINCIPLE
`MASTERY QUALITY IS NOT JUST ERROR REDUCTION; IT IS BETTER ATTENTION ALLOCATION.`

---

# Relief debt

## INTERPRETATION
The strongest methodological lesson from prior machine study is that reward reaction can contaminate evaluation of the preceding loop.

If a player says “やっと当たった、気持ちいい” after a long dry period, at least two different effects may coexist:
- reward quality;
- relief from aversive waiting.

To separate them, future trial notes should capture state **before the reward is known** and not rely only on post-hit interview memory.

Possible future evidence:
- willingness to continue sampled during dry play;
- attention/vigilance burden sampled during dry play;
- post-hit satisfaction;
- explicit “reward excitement” vs “relief that the dry spell ended” distinction;
- return-to-HOME willingness after the reward settles.

### REUSABLE PRINCIPLE
`POST-REWARD EMOTION CANNOT RETROACTIVELY PASS THE PRE-REWARD LOOP.`

---

# Real-machine presence as Human evidence

## INTERPRETATION
The Reality Standard correctly lists materials, reels, LEDs, controls, mechanisms and audio. But Presence ultimately needs a Human causal judgment:

> “I touched one thing and a coherent machine responded.”

This cannot be reduced to visual fidelity. A beautiful cabinet with delayed STOP feedback may feel less real than a restrained cabinet whose reel/audio/light response is perfectly causal.

Future QA should therefore ask separately:
- Does it look like a machine?
- Does it react like a machine?
- Does action feel owned by the player?
- Does the machine settle back into a trusted physical/visual/audio HOME?

### REUSABLE PRINCIPLE
`PRESENCE IS NOT ONLY WHAT THE MACHINE LOOKS LIKE; IT IS HOW RELIABLY THE PLAYER CAN CAUSE IT TO RESPOND.`

---

# Required ten-item final record

## 1. Why this topic was chosen
Because prior studies already identified many experience risks, but Chappy5 lacked a disciplined method for proving that repeated phone play is intrinsically good rather than merely technically correct or reward-driven.

## 2. What was not understood before the study
How to turn concepts such as relief debt, vigilance cost, 3STOP rhythm, mobile occlusion and long-session fatigue into independent evidence categories rather than one subjective impression.

## 3. What was investigated
Human-centred design process (ISO 9241-210), Apple's current touch/game-control guidance, end-to-end web interaction-latency thinking, NASA-TLX workload dimensions, and prior Chappy5 findings from multiple pachislot lineages.

## 4. What was newly learned
- repeated-action quality needs different evidence from generic tap usability;
- latency should be considered from action through perceivable response, including jitter across repeated STOPs;
- fatigue/workload must be decomposed rather than treated as one feeling;
- first-session novelty and long-session fatigue are separate variables;
- reward evaluation can contaminate judgment of the preceding normal loop unless evidence is captured before the hit.

## 5. What changed from prior understanding
Previously Playtest could be framed as “actually play it and judge whether it is fun/real.” The stronger model is: **Human judgment remains final, but the conditions that produced the judgment must be measured and separated.** This makes qualitative judgment more trustworthy rather than replacing it with numbers.

## 6. Reusable design/QA principles for Chappy5
- `HUMAN EVIDENCE IS A DEVELOPMENT INPUT, NOT A RELEASE CEREMONY.`
- `A VALID HIT TARGET IS NOT YET A GOOD REPEATED-ACTION TARGET.`
- `REPEATED CONTROL FEEL IS A DISTRIBUTION, NOT AN AVERAGE.`
- `LOW PHYSICAL DEMAND DOES NOT IMPLY LOW TOTAL WORKLOAD.`
- `PLAYTEST MUST MEASURE THE LOOP BEFORE THE REWARD, THE REWARD ITSELF, AND THE RETURN AFTER THE REWARD AS THREE DIFFERENT PRODUCTS.`
- `NOVELTY DECAY IS NOT THE SAME VARIABLE AS FATIGUE GROWTH.`
- `MASTERY QUALITY IS NOT JUST ERROR REDUCTION; IT IS BETTER ATTENTION ALLOCATION.`
- `POST-REWARD EMOTION CANNOT RETROACTIVELY PASS THE PRE-REWARD LOOP.`
- `PRESENCE IS NOT ONLY WHAT THE MACHINE LOOKS LIKE; IT IS HOW RELIABLY THE PLAYER CAN CAUSE IT TO RESPOND.`

## 7. Conditions where these principles do not apply / misuse risks
- 44 pt must not be treated as a universal Chappy5 STOP specification.
- General web responsiveness metrics must not be converted into invented pachislot latency thresholds.
- NASA-TLX must not be used as a “fun score.”
- Low workload must not automatically be treated as good; technical/reel games can intentionally demand concentration.
- Pre/post reward measurement must not turn play into constant questionnaires that themselves destroy immersion.
- Numerical instrumentation must not override Human Gate or lived experience.

## 8. What remains unknown
- the latency/jitter region where Chappy5 STOP feel becomes perceptibly worse on the target iPhone;
- ideal control geometry for Chappy5's eventual cabinet layout;
- how much long-session testing is sufficient before release confidence;
- how many external testers and skill levels are needed for broader product confidence;
- which sensory substitutions best restore physical-machine confidence on a phone without creating noise.

## 9. What is worth studying next
A future Playtest & QA self-study should investigate **measurement design for causal multisensory synchrony**: how humans perceive whether reel stop, button feedback, LED and audio belong to the same action, especially when each subsystem has different latency. That is more valuable than another generic Case Study unless Machine integration identifies a specific unresolved machine-law question.

## 10. How this may help future Chappy5 production
When production is eventually Human-approved, this framework can prevent a common failure mode: shipping a browser machine whose code, visuals and audio all work individually but whose repeated operation is tiring, untrustworthy or reward-dependent. It gives Stage 4–7 Playtest a structured way to detect why a machine does or does not make the player want one more lever/START action without copying third-party IP.

---

## Future consideration only
`FUTURE_CONSIDERATION_CANDIDATE`: establish a versioned `HUMAN_PLAY_EVIDENCE_PROTOCOL` during a future Human-approved production stage, combining event traces, real-iPhone action measurements, workload sampling, pre/post reward probes and qualitative observation.

This is not approved for implementation in Stage 1.

## Final status
`PLAYTEST_QA_SELF_STUDY_RUN1 = COMPLETE`
`NEW_MACHINE_CASE_STUDY = NOT_STARTED`
`ORIGINAL_CONCEPTS = UNTOUCHED`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
