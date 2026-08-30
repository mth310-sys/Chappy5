# Case Study 03 — SLOT魔法少女まどか☆マギカ2 — Playtest & QA Run 2

> Director: `Playtest & QA`
> Phase: `PHASE A — REAL MACHINE STUDY / RUN 2`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Reality Baseline: `NOT_COMPLETE`

## 0. Boundary / current shared object

Latest `main` is the sole source of truth. Case Study 01 スマスロ北斗の拳 and Case Study 02 新ハナビ have completed their active study cycles. The current shared object is Case Study 03, メーシー「SLOT魔法少女まどか☆マギカ2」(2016), returned by Machine Director to real-machine Phase A Run 2.

This run does not desk-test any original concept, does not rank/refine SIGNAL/FORGE/VAULT, and does not implement or prototype anything. App behavior is not used as evidence of real-machine behavior.

---

## 1. Run 2 QA question

Run 1 established that this A+ART machine can keep several questions open at once: role identity, BONUS possibility, CZ/state consequence, ART value and setting inference. Run 2 asks a stricter repeated-play question:

`WHEN DOES THAT PARALLEL DEPTH FEEL LIKE PLAY, AND WHEN DOES IT DEGRADE INTO ADMINISTRATIVE WAITING?`

The reconstruction focuses on:

`first 5 minutes -> normal 100G -> ~500G dry segment -> BIG without ART -> base ART without exceptional extension -> BIG during ART -> return to normal -> ~3-hour fatigue`

The evaluation deliberately separates:

- intrinsic motor/reel satisfaction;
- state-reading satisfaction;
- reward relief;
- setting-inference motivation;
- friction caused by unresolved consequences;
- fatigue from repeated attention switching.

---

## 2. Evidence basis

### SOURCED FACT

Major strategy sources document:

- BIG + ART architecture, with BIG around 150 net coins;
- ART「マギカ☆ラッシュ」at about 1.5 coins/G and 50G+α;
- setting 1 BIG+ART combined probability around 1/175 and setting 6 around 1/129.3;
- ART initial probability from about 1/424.4 at setting 1 to about 1/267.4 at setting 6;
- weak-cherry probability with substantial setting difference;
- setting inference from several channels rather than one event;
- a normal stopping routine centered on a left-reel BAR landmark, with additional attention on cherry/watermelon branches and order compliance in ART.

Sources:
- https://1geki.jp/slot/s_madomagi2/
- https://hazuse.com/machine/pachislot/SX0136/genre/208/
- https://pachiseven.jp/articles/detail/4539/1000
- https://slotjin.com/slot-tool/madokamagica2-settei/

### FIELD REPORT

A published low-setting-leaning first-play report records 5,134 total games, 2,982 normal games, 1,522 ART games, 20 normal bonuses and 9 ART entries. This is useful because it demonstrates a session containing thousands of ordinary games rather than only highlight states.

Source:
- https://p-kn.com/slot/2590/review/50557/

A structured setting-inference practical report records 3,506G and repeatedly re-evaluates weak cherry, BIG-end voice, direct ART and specific BONUS channels at 1,000G intervals. It illustrates that skilled long-session play accumulates statistical questions even while ordinary motor execution becomes routine.

Source:
- https://pachiseven.jp/articles/detail/4539/1000

### EVIDENCE LIMIT

Edited videos and field reports can show repeated topology and player commentary, but they cannot establish exact gaze position, cabinet SPL, hand force or population-wide fatigue. Those remain observation/interpretation questions, not sourced hardware facts.

---

## 3. First five minutes — onboarding burden is conditional, not constant

### SOURCED FACT

The normal procedure uses a left BAR landmark and branches into extra attention when the stop form calls for cherry or watermelon handling. ART additionally requires navigation/order compliance when instructed.

### PLAYTEST RECONSTRUCTION

A genuine beginner's first five minutes are not simply:

`aim BAR every game`.

They are closer to:

`find BAR -> stop left -> classify whether this game needs more attention -> complete remaining stops -> look back to LCD/state consequence -> repeat`.

The difficulty is therefore **conditional-duty recognition**. The beginner has to learn which games can be completed cheaply and which games require precision or interpretation.

A skilled player has already compressed the same loop into a motor habit. The left landmark no longer consumes much working memory. That freed attention can move to:

- rare-role classification;
- preceding/following presentation;
- hidden-state/CZ implications;
- setting sample tracking;
- whether the current state requires a different stopping responsibility.

### QA PRINCIPLE

`MASTERY SHOULD REDUCE ROUTINE DUTY AND REALLOCATE ATTENTION TO MEANING; IT SHOULD NOT REQUIRE PERMANENT MAXIMUM VIGILANCE.`

### ONBOARDING FAILURE MODE

If the LCD repeatedly captures attention before the BAR routine is automated, the beginner can understand the presentation while still feeling mechanically insecure. That is intimidation without useful depth.

`BEGINNER LOAD = MOTOR UNCERTAINTY + ROLE-CLASSIFICATION UNCERTAINTY + STATE-MEANING UNCERTAINTY.`

The desired learning curve removes these layers in that order rather than stacking them indefinitely.

---

## 4. Normal 100G — evaluate the home routine, not the rare-event montage

### SOURCED FACT

Published probabilities make a 100G sample primarily ordinary play with intermittent weak cherry/watermelon/chance-role branches. ART/BONUS are not guaranteed to punctuate every short block.

### PLAYTEST RECONSTRUCTION

The sustainable 100G loop is:

`LOW-DUTY HOME ROUTINE -> DEVIATION DETECTED -> ROLE IDENTIFIED -> CONSEQUENCE QUESTION OPENS -> MACHINE RESOLVES/DECAYS QUESTION -> HOME ROUTINE RETURNS`.

The key QA property is not how spectacular the deviation becomes. It is whether **HOME is comfortable enough to be returned to hundreds of times**.

### QA METRIC — `HOME ROUTINE TRUST`

After 100G, ask whether the player can execute ordinary games with:

- low motor anxiety;
- predictable visual orientation;
- clear understanding of when extra attention is required;
- no feeling that a meaningful cue was probably missed every few games.

If not, the normal loop is taxing even before reward drought is considered.

### QA PRINCIPLE

`A LONG-SESSION MACHINE NEEDS A TRUSTED HOME ROUTINE, NOT JUST INTERESTING EXCEPTIONS.`

---

## 5. ~500G dry segment — distinguish suspense from paperwork

### SOURCED FACT

At setting 1, published ART initial probability is about 1/424.4 and BIG probability about 1/297.9; long stretches without a satisfying major-state result are therefore a real repeated-play possibility, even though rare roles and presentation continue to occur.

### PLAYTEST RECONSTRUCTION

During a dry segment the player can still receive many small prompts:

- rare role appeared;
- maybe BONUS;
- maybe state changed;
- maybe CZ is closer;
- maybe this setting sample matters.

This can remain engaging when each prompt closes cleanly and returns attention home. It becomes friction when too many prompts produce ambiguous aftermath and require the player to remember unfinished questions.

### QA METRIC — `OPEN-QUESTION COUNT`

At arbitrary points in a dry stretch, count how many unresolved practical questions the player is carrying:

- Was that role consequential?
- Is a state change still plausible?
- Is this presentation continuation meaningful?
- Is a setting clue pending?
- Has the machine actually returned to normal expectation?

The objective is not zero uncertainty. The risk is **concurrent uncertainty**.

### QA METRIC — `RELIEF DEPENDENCE`

When the eventual BIG/ART arrives, classify the reaction:

1. `REWARD` — preceding play remained intrinsically engaging;
2. `RELIEF` — player mainly feels released from an aversive wait;
3. `MIXED`.

The later reward must not rewrite the QA verdict on the earlier 500G.

### REUSABLE PRINCIPLE

`A REWARD AFTER A DRY SPELL CANNOT RETROACTIVELY VALIDATE THE DRY SPELL.`

`SUSPENSE NEEDS QUESTION CLOSURE; OTHERWISE IT BECOMES ADMINISTRATIVE UNCERTAINTY.`

---

## 6. BIG without ART — local completion test

### SOURCED FACT

BIG is a real coin reward and supports different notification styles. ART entry/conversion is valuable but is not guaranteed for every ordinary BIG.

### PLAYTEST RECONSTRUCTION

A BIG that does not lead to ART is the cleanest test of whether the BONUS is genuinely one reward axis or merely perceived as a failed ART gateway.

Evaluate:

- entry satisfaction before ART prospects are known;
- whether the payout has local value;
- whether the selected certainty schedule gives the BIG its own beginning/middle/end;
- emotional state at return to normal.

### QA PRINCIPLE

`A PARALLEL REWARD MUST BE ABLE TO COMPLETE LOCALLY.`

If the player leaves BIG thinking only “nothing happened because ART did not start,” the machine's nominally parallel A+ART architecture is emotionally collapsing into a single persistent-state chase.

---

## 7. Base ART without exceptional extension — test the floor, not the jackpot tail

### SOURCED FACT

Magica Rush begins as a persistent 50G+α ART state at roughly 1.5 coins/G, with extension opportunities layered on top.

### PLAYTEST RECONSTRUCTION

QA must deliberately observe a **plain ART** where exceptional extension material does not rescue the experience.

Questions:

- Does entering ART immediately clarify that the action contract changed?
- Can the player maintain stop-order responsibility without excessive cognitive overhead?
- Does persistent BGM/state presentation create a stable HOME?
- Is 50G itself experienced as a meaningful state, or only as a waiting room for Magica Quest / major extension?
- When nothing exceptional happens, does the state still have a completed arc?

### QA METRIC — `BASE-STATE INDEPENDENCE`

`BASE-STATE INDEPENDENCE = satisfaction of the guaranteed/basic state before rare extension value is counted`.

### REUSABLE PRINCIPLE

`THE BASE PERSISTENT STATE MUST NOT BORROW ALL OF ITS VALUE FROM ITS EXCEPTIONAL TAIL.`

---

## 8. BIG during ART — interruption quality and return-address integrity

### SOURCED FACT

Game & Reel Run 2 established that BONUS during ART is not simply a replacement state; it interacts with retained/added ART value and returns to the persistent contract.

### PLAYTEST RECONSTRUCTION

This transition should be tested as:

`ART HOME -> BIG FOREGROUND -> BIG RESOLUTION -> ART RE-ANCHOR`.

A successful return means more than the internal state still being ART. The player should rapidly recover:

- where to look;
- what the next STOP responsibility is;
- whether order navigation is active;
- what persistent value remains;
- which prior questions are now closed.

### QA METRIC — `RE-ANCHOR LATENCY`

Count games/seconds from BIG completion until the player can resume ART without checking or hesitating about the current action contract.

### CROSS-DIRECTOR FATIGUE MODEL

Sound Run 2 supplies:

`AUDIO FATIGUE LOAD = REPETITION COST + CONCURRENT CLAIMS + UNCERTAINTY DURATION + STARTLE COST + RE-ANCHOR COST`.

Playtest extends the same logic across modalities:

`TOTAL ATTENTION FATIGUE = ROUTINE DUTY + CONCURRENT CLAIMS + UNCERTAINTY DURATION + ORIENTATION SWITCHING + RE-ANCHOR COST`.

This is a QA classification model, not a physical equation.

### REUSABLE PRINCIPLE

`A TRANSITION IS NOT COMPLETE WHEN THE STATE VARIABLE RETURNS; IT IS COMPLETE WHEN THE PLAYER'S ACTION MODEL RETURNS.`

---

## 9. Return to normal — can the machine become quiet again?

### PLAYTEST RECONSTRUCTION

After ART/BIG, normal play should regain its low-duty HOME quickly. A common fatigue risk in layered machines is that the player remains mentally “inside” the prior reward state and continues scanning for consequences that are no longer live.

QA asks:

- Is return-to-normal visually and audibly legible?
- Does the ordinary BAR-based routine regain priority immediately?
- Is the player still carrying extension/return questions that should already be closed?
- Does normal feel intentionally restful, or merely like reward removal?

### QA PRINCIPLE

`REST IS A POSITIVE MACHINE STATE, NOT THE ABSENCE OF CONTENT.`

A machine can support stronger peaks when ordinary play is allowed to reduce claim density again.

---

## 10. Beginner versus skilled player — same three STOPs, different information economy

### BEGINNER

Likely watches/allocates attention to:

- BAR landmark acquisition;
- whether cherry/watermelon was missed;
- explicit navigation;
- obvious LCD explanation;
- immediate win/fail confirmation.

Likely ignores or underuses:

- multi-channel setting inference;
- subtle state-context relationships;
- sample-size discipline;
- distinction between role classification and consequence resolution.

### SKILLED PLAYER

Likely compresses routine stopping and reallocates attention to:

- rare-role type and context;
- whether a BONUS is plausible/denied;
- CZ/state implications;
- direct ART / specific BONUS / weak-cherry setting evidence;
- retained ART value across interruptions;
- when evidence is too weak to act on.

Field reports also show a downside: experienced players can simply forget one tracking channel during a long session. One 3,000G practical report explicitly notes that the player had forgotten to watch one CZ-related setting clue until later. This is useful evidence that expertise does not remove cognitive capacity limits.

Source:
- https://www.slopachi-quest.com/article/madomagi2-zenzen/

### QA PRINCIPLE

`MASTERY SHOULD CHANGE WHAT THE PLAYER CAN NOTICE, NOT REQUIRE THE PLAYER TO REMEMBER AN UNBOUNDED NUMBER OF LIVE COUNTERS.`

---

## 11. ~3-hour fatigue reconstruction

### FIELD REPORT

A structured 3,506G practical session repeatedly updates several setting channels at 1,000G intervals; a separate first-play report exceeds 5,000 total games. These sessions demonstrate that long play combines repeated motor routine with cumulative statistical interpretation.

### INTERPRETATION

After roughly three hours, fatigue can arise from at least five distinct sources:

1. `MOTOR REPETITION` — repeated BAR/STOP routine;
2. `ORIENTATION SWITCHING` — reels ↔ LCD ↔ state cue ↔ reels;
3. `UNRESOLVED CONSEQUENCES` — repeated rare-role questions that take time to close;
4. `STATISTICAL MAINTENANCE` — weak cherry, ART direct, specific BONUS, voices, CZ behavior;
5. `REWARD-DROUGHT RELIEF SEEKING` — continuing primarily to escape the current negative run.

Motor mastery reduces #1 but can increase #4 because skilled players have bandwidth to track more channels. Therefore “experienced players look less tired while stopping” is not proof of lower total cognitive load.

### QA METRIC — `FATIGUE SOURCE MAP`

At 30/60/120/180 minute equivalents, classify the dominant fatigue source rather than using one global tired/not-tired score.

### QA PRINCIPLE

`AUTOMATED MOTOR SKILL CAN HIDE GROWING COGNITIVE LOAD.`

`LONG-SESSION QA MUST IDENTIFY WHAT THE PLAYER IS TIRED OF.`

---

## 12. Intrinsic satisfaction versus relief

This machine must be evaluated on at least four independent satisfaction channels:

1. `MOTOR SATISFACTION` — executing the reel routine cleanly;
2. `INTERPRETIVE SATISFACTION` — correctly reading role/state/setting evidence;
3. `REWARD SATISFACTION` — BIG/ART itself;
4. `RELIEF` — ending a bad or uncertain stretch.

Do not merge #4 into #3.

### QA INTERVIEW / OBSERVATION PROMPT

After each major reward, classify the player's immediate motivation to continue:

- “I want another normal game because the loop itself is readable/interesting.”
- “I want to see whether my interpretation was correct.”
- “I want another reward.”
- “I mainly feel relieved that the bad stretch ended.”

The first three may support repeated play for different reasons. The fourth is not automatically positive retention.

---

## 13. Reusable QA principles from Run 2

1. `A LONG-SESSION MACHINE NEEDS A TRUSTED HOME ROUTINE, NOT JUST INTERESTING EXCEPTIONS.`
2. `MASTERY SHOULD REDUCE ROUTINE DUTY AND REALLOCATE ATTENTION TO MEANING.`
3. `SUSPENSE NEEDS QUESTION CLOSURE; OTHERWISE IT BECOMES ADMINISTRATIVE UNCERTAINTY.`
4. `A REWARD AFTER A DRY SPELL CANNOT RETROACTIVELY VALIDATE THE DRY SPELL.`
5. `A PARALLEL REWARD MUST BE ABLE TO COMPLETE LOCALLY.`
6. `THE BASE PERSISTENT STATE MUST NOT BORROW ALL OF ITS VALUE FROM ITS EXCEPTIONAL TAIL.`
7. `A TRANSITION IS COMPLETE WHEN THE PLAYER'S ACTION MODEL RETURNS, NOT ONLY WHEN THE STATE VARIABLE RETURNS.`
8. `REST IS A POSITIVE MACHINE STATE, NOT THE ABSENCE OF CONTENT.`
9. `MASTERY SHOULD CHANGE WHAT THE PLAYER CAN NOTICE, NOT REQUIRE UNBOUNDED LIVE COUNTERS.`
10. `AUTOMATED MOTOR SKILL CAN HIDE GROWING COGNITIVE LOAD.`
11. `LONG-SESSION QA MUST IDENTIFY WHAT THE PLAYER IS TIRED OF.`
12. `REWARD SATISFACTION AND RELIEF MUST BE SCORED SEPARATELY.`

---

## 14. Contradictions / unresolved

### UNRESOLVED

- timestamped, unedited long-form measurements of exact cue density per 100G/500G;
- direct beginner eye-tracking or gaze logs;
- controlled novice-versus-expert error rates for cherry/watermelon handling;
- measured re-anchor latency after BIG during ART;
- clean separation of visual, audio and statistical fatigue in a controlled three-hour session;
- population-level evidence that each BIG notification mode is less/more fatiguing over repeated BIGs;
- whether low-setting dry play remains intrinsically satisfying for players without setting-analysis motivation.

### CONTRADICTION / CAUTION

Field reports span very different settings, player goals and outcome paths. A profitable/high-setting-leaning 3,506G session cannot be used to prove that a setting-1 500G dry segment is comfortable. A low-setting 5,000G report cannot prove universal aversion either. Outcome, expertise and purpose must remain explicit context.

---

## 15. Handoff to Machine Director

Playtest & QA Run 2 is complete for the requested real-machine reconstruction. The next Machine integration should compare all Run 2 Directors on one central question:

`DOES THE MACHINE SUCCESSFULLY RETURN THE PLAYER TO A LOW-COST, TRUSTED HOME ROUTINE AFTER EACH TEMPORARY ROLE/STATE/REWARD QUESTION, OR DOES PARALLEL DEPTH ACCUMULATE AS UNRESOLVED ATTENTION DEBT?`

Do not open production or original-concept refinement from this run alone.

`CASE_STUDY_03_PLAYTEST_QA_PHASE_A_RUN2_COMPLETE = TRUE`
`NEXT_FIXED_DIRECTOR = MACHINE`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
