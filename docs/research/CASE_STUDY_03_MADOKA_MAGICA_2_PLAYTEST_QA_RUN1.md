# Case Study 03 — SLOT魔法少女まどか☆マギカ2 — Playtest & QA Run 1

> Director: `Playtest & QA`
> Phase: `PHASE A — REAL MACHINE STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Reality Baseline: `NOT_COMPLETE`

## 0. Boundary / current shared object

Latest `main` is the sole source of truth. Case Study 01 スマスロ北斗の拳 and Case Study 02 新ハナビ have already completed their active cycles. The current shared object is Case Study 03, メーシー「SLOT魔法少女まどか☆マギカ2」(2016).

This run studies **real repeated play only**. The licensed smartphone app is reserved for Phase B and is not used as evidence for real-machine behavior in this file.

No original concept refinement, SIGNAL/FORGE/VAULT ranking, prototype, implementation, browser play, copied protected audiovisual material, or invented unpublished control data is included.

---

## 1. QA question for this machine

Case Study 01 tested a state/AT progression machine. Case Study 02 tested a normal/reach-eye/technical-intervention machine. Case Study 03 asks a different repeated-play question:

`Can a player remain engaged when real BIG, CZ, persistent ART, extension states and hidden-state inference all coexist, without every ordinary game becoming high-duty?`

This is not a highlight-reel question. Playtest reconstruction must separate:

- ordinary motor routine;
- rare-role recognition;
- unresolved consequence waiting;
- actual reward arrival;
- persistent-state maintenance;
- failure/reset recovery;
- long-session interpretation fatigue.

---

## 2. Evidence basis

### SOURCED FACT

Major strategy references describe:

- BIG at about 150 net coins;
- BIG with three selectable notification styles: chance notification, complete notification, and late notification;
- ART「マギカ☆ラッシュ」at about 1.5 coins/G and 50G+α;
- ART entry from CZ, rare-role/direct routes, BONUS-related routes and ceiling-related routes;
- setting-dependent weak-cherry frequency and direct-ART behavior;
- long practical setting inference using multiple channels rather than one event.

Sources:
- https://1geki.jp/slot/s_madomagi2/
- https://1geki.jp/slot/s_madomagi2/61/
- https://1geki.jp/slot/s_madomagi2/81/
- https://1geki.jp/slot/s_madomagi2/52/
- https://pachiseven.jp/articles/detail/4539/1000
- https://pachiseven.jp/reports/detail/11317

### LONG-FORM / FIELD OBSERVATION INPUT

A long-form published actual-play video from 777パチガブ follows real play while looking for higher-setting behavior and includes ordinary stretches as well as notable ART/extension material rather than only a machine trailer:
- https://www.youtube.com/watch?v=9TtkI3AW4ag

This run uses long-form/field material for behavioral observation only. Edited video audio level, cabinet SPL, exact timing not directly documented, and unseen player gaze are not promoted to fact.

---

## 3. First five minutes — the beginner's real burden

### SOURCED FACT

The normal stopping procedure is comparatively compact:
- use BAR as the left-reel landmark;
- branch into cherry classification when the left stop opens that route;
- branch into watermelon coverage when the relevant stop form appears;
- otherwise the remaining reels can usually be stopped with low precision;
- during ART, obey navigation when present.

Source:
- https://1geki.jp/slot/s_madomagi2/2/

### INTERPRETATION

A beginner is not learning only “where to aim.” They are learning **when the routine stops being routine**.

The first-five-minute cognitive stack is approximately:

`BAR landmark → left stop classification → only then decide whether extra precision is needed → glance to LCD for consequence → resume low-duty routine`

The main onboarding risk is screen capture: the large LCD can pull attention upward before the player has automated the left-reel landmark. If that happens, the player may understand the story/presentation while still feeling mechanically insecure.

### QA PRINCIPLE

`ONBOARDING SHOULD TEACH THE TRIGGER FOR EXTRA DUTY, NOT MAKE EVERY GAME FEEL LIKE EXTRA DUTY.`

`SCREEN ATTENTION MUST NOT PREVENT THE BASIC REEL ROUTINE FROM BECOMING AUTOMATIC.`

---

## 4. Normal 100G — what actually repeats

### SOURCED FACT + DERIVED FREQUENCY LENS

Published role probabilities imply that a 100G sample is mostly routine play with intermittent rare-role branches. Game & Reel Run 1 estimated, from published marginal rates, roughly one watermelon, around one weak cherry depending on setting, and less than one each of chance A/B and strong cherry per 100G expectation, alongside frequent replay.

Primary prior research:
- `docs/research/CASE_STUDY_03_MADOKA_MAGICA_2_GAME_REEL_RUN1.md`

### INTERPRETATION

The 100G loop is not sustained by a new motor puzzle every game. It is sustained by a repeated alternation:

`LOW-DUTY STOP ROUTINE → RARE-ROLE DETECTION → CONSEQUENCE QUESTION OPENS → PRESENTATION/STATE EVIDENCE → QUESTION CLOSES OR DECAYS → RETURN HOME`

This differs sharply from 新ハナビ. The physical stopped form is often only the first answer. The second answer — whether BONUS, CZ, hidden-state movement or ART value followed — can remain open after STOP3.

### QA METRIC — `CONSEQUENCE CLOSURE LATENCY`

Measure the time/games between:
1. player recognizes a meaningful role;
2. machine gives enough evidence that the role's practical consequence is closed.

A machine can create fatigue even with sparse rare roles if too many questions remain half-open at once.

### QA PRINCIPLE

`SPARSE RARE EVENTS DO NOT GUARANTEE LOW COGNITIVE LOAD IF THEIR CONSEQUENCES STAY OPEN TOO LONG.`

---

## 5. 500G dry stretch — engagement versus relief waiting

### SOURCED FACT

Published architecture allows long normal stretches without a modern AT-style guaranteed sequence of frequent milestone states. ART and BONUS are probabilistic, while rare roles continue to appear and can influence hidden state/CZ expectation.

Sources:
- https://1geki.jp/slot/s_madomagi2/
- https://1geki.jp/slot/s_madomagi2/46/

### INTERPRETATION

A 500G dry stretch can contain many micro-questions without delivering the machine's major rewards. QA must therefore separate five motives that can look identical from outside:

1. intrinsic enjoyment of the stop/role/state loop;
2. curiosity about hidden-state/CZ movement;
3. setting inference and sample collection;
4. sunk-cost / “surely soon” relief waiting;
5. inertia/autopilot.

Repeated rare-role failures can make the LCD/state layer feel like **administrative uncertainty** rather than suspense. The player may still interact correctly while subjective engagement has already collapsed.

### QA METRIC — `RELIEF DEPENDENCE RATIO`

After a dry segment, classify the emotional value of the next BIG/ART:
- reward because the preceding play remained interesting;
- relief because the preceding play had become aversive;
- mixed.

### QA PRINCIPLE

`A HIT AFTER A DRY SPELL MUST NOT BE USED AS RETROACTIVE PROOF THAT THE DRY SPELL WAS GOOD.`

---

## 6. BIG without ART — does the real BONUS stand on its own?

### SOURCED FACT

BIG is a real approximately-150-net-coin reward. During BIG the player can choose among three notification styles:
- chance notification: a cut-in can create a 7-alignment opportunity;
- complete notification: ART certainty is announced immediately when the designated notification occurs;
- late notification: result is held until the final portion and then revealed.

Source:
- https://1geki.jp/slot/s_madomagi2/61/

### INTERPRETATION

This creates a crucial QA split:

`BIG PAYOUT VALUE`
versus
`BIG → ART CONVERSION VALUE`

If a BIG that fails to produce ART feels like only a failed transport attempt, then the A+ART architecture is not emotionally balanced even though the BONUS has real payout.

### QA TEST — `BIG-ONLY SATISFACTION`

Evaluate a BIG session where no ART follows:
- Does entry itself feel like a completed reward?
- Is 150-coin payout perceived as meaningful?
- Does the chosen notification style create a complete local arc?
- Does the end state feel like “reward completed” or “ART chance failed”?

### QA PRINCIPLE

`IN A PARALLEL-REWARD MACHINE, A REAL BONUS MUST RETAIN LOCAL COMPLETION VALUE EVEN WHEN IT DOES NOT OPEN THE PERSISTENT STATE.`

---

## 7. The three BIG notification modes are three certainty schedules

### SOURCED FACT

The machine lets the player choose chance, complete, or late notification during BIG.

Source:
- https://1geki.jp/slot/s_madomagi2/61/

### INTERPRETATION

These are not merely cosmetic modes.

- chance notification distributes uncertainty throughout BIG;
- complete notification can collapse uncertainty suddenly;
- late notification deliberately preserves uncertainty until near the end.

The same reward therefore supports different preferred **certainty timing**.

### QA TEST — `CERTAINTY SCHEDULE FIT`

Observe whether each mode changes:
- how often the player watches the reels versus LCD;
- whether attention stays elevated throughout BIG;
- whether repeated BIGs create anticipation or fatigue;
- whether the player switches mode after several repetitions.

### SOUND/EXPERIENCE CROSS-CHECK

Sound Run 1 recorded field evidence that the complete-notification event can be physically startling. Memorable/rewarding/comfortable must therefore be scored separately.

### QA PRINCIPLE

`PLAYER CHOICE CAN BE A CHOICE OF UNCERTAINTY TIMING, NOT ONLY PRESENTATION STYLE.`

---

## 8. CZ entry and failure — temporary duty must release cleanly

### SOURCED FACT

CZ「魔女の結界」reprices familiar roles: replay/bell/rare roles can have different ART conversion value depending on the CZ state/variant, and CZ failure is also one of the documented “穢れ” accumulation contexts.

Sources:
- https://1geki.jp/slot/s_madomagi2/43/
- https://1geki.jp/slot/s_madomagi2/45/

### INTERPRETATION

CZ is a temporary high-attention envelope. Failure is not semantically empty because other systems may retain memory, but the **player's active motor/visual duty still needs to return home**.

The post-failure risk is sticky vigilance: the player continues treating ordinary games as if every stop still carries CZ-level consequence.

### QA METRIC — `HOME RECOGNITION LATENCY`

Count games from CZ resolution until the player can safely resume the ordinary normal-play routine without checking for leftover special-state responsibilities.

### QA PRINCIPLE

`A FAILED TEMPORARY STATE MAY LEAVE SYSTEM MEMORY, BUT IT SHOULD NOT LEAVE UNBOUNDED PLAYER DUTY.`

---

## 9. ART base state — test it without extension highlights

### SOURCED FACT

ART「マギカ☆ラッシュ」is about 1.5 coins/G, 50G+α, with navigation and game-count extension systems.

Source:
- https://1geki.jp/slot/s_madomagi2/81/

### INTERPRETATION

The correct QA test is not “Is Magica Quest/Walpurgis exciting?” First test **plain ART with little or no major extension**.

Base ART must carry:
- clear navigation responsibility;
- persistent reward-state identity;
- enough rhythm to make 50G feel intentionally different from normal;
- a readable end approach;
- no need for constant maximum audiovisual intensity.

If plain ART is boring and only extension zones are enjoyable, then the persistent state has become transport between highlights.

### QA TEST — `BASE-ART INDEPENDENCE`

Observe 50G with no major extension and ask:
- Is navigation comfortable after 10/30/50 games?
- Does BGM/presentation sustain state identity without masking action cues?
- Does the player still read rare roles, or only wait for a special-zone trigger?
- Does the end feel like a meaningful loss of a state, or simply the end of a waiting room?

### QA PRINCIPLE

`THE PERSISTENT STATE MUST BE TESTED WITHOUT ITS HIGHLIGHT SUBSTATES.`

---

## 10. BIG during ART — foreground interruption and re-anchor

### SOURCED FACT

A real BIG can occur during ART, and published reward tables connect BONUS during ART/preparation/special contexts to additional ART value rather than erasing the existing state.

Sources:
- https://1geki.jp/slot/s_madomagi2/62/
- https://1geki.jp/slot/s_madomagi2/64/

### INTERPRETATION

This is the core A+ART continuity test:

`ART HOME → BIG FOREGROUND → BIG LOCAL RESULT → ART RE-ANCHOR`

The player should not have to reconstruct from zero:
- whether ART still exists;
- what game-count/resource survived;
- what new reward was added;
- which stopping contract resumes.

### QA METRIC — `RE-ANCHOR LATENCY`

After BIG ends inside ART, measure how quickly the player can answer:
1. What state am I in now?
2. What input rules apply now?
3. What value did the BIG add/change?

### QA PRINCIPLE

`A TEMPORARY REWARD INTERRUPTION SHOULD RETURN THE PLAYER TO THE PERSISTENT STATE WITH MINIMAL ORIENTATION COST.`

---

## 11. Setting play changes what the expert watches

### SOURCED FACT

Field reports and strategy data use multiple setting inference channels, including:
- weak-cherry frequency;
- selected BONUS combinations;
- weak-cherry-related CZ behavior;
- direct ART;
- selected post-BONUS voice/announcement evidence;
- aggregate ART/CZ/BONUS occurrence over substantial samples.

A Pachiseven field example continued to 3,506 total games while tracking multiple indicators and illustrates that thousands of games can still leave ambiguous setting inference.

Sources:
- https://pachiseven.jp/articles/detail/4539/1000
- https://pachiseven.jp/reports/detail/11317

### INTERPRETATION

Beginner and expert may perform the same 3 STOPs but play different cognitive games.

Beginner watches:
`aiming correctness → obvious rare role → obvious state/event`

Experienced player additionally watches:
`rare-role counts → exact context of CZ/ART entry → specific BONUS type → post-BONUS evidence → sample sufficiency`

Mastery reduces motor difficulty but can increase **record-keeping and inference burden**.

### QA PRINCIPLE

`MASTERY CAN MOVE LOAD FROM THE HANDS TO THE MODEL IN THE PLAYER'S HEAD.`

---

## 12. Three-hour fatigue model

### INTERPRETATION

For this machine, fatigue is unlikely to come from constant difficult aiming. The stronger risks are:

1. **context-switch fatigue** — normal/CZ/BIG/ART/extension/end-preparation each reprice familiar events;
2. **semantic carryover fatigue** — wondering whether a rare role still has unresolved consequence;
3. **setting inference fatigue** — tracking several weak signals over thousands of games;
4. **notification fatigue** — strong certainty events remain memorable but may become physically tiring when repeated;
5. **navigation concurrency fatigue** — ART cue + BGM + LCD + reel task overlap;
6. **relief dependence** — long dry periods make hits feel good primarily because waiting stopped.

### QA METRIC — `CONCURRENT CLAIM COUNT`

At any moment count how many systems simultaneously demand active interpretation:
- motor stop order/aiming;
- role classification;
- LCD event;
- hidden-state inference;
- setting sample;
- reward-state resource;
- audio cue.

A long session becomes difficult when several low-intensity claims remain simultaneously open, even if no single cue is aggressive.

### QA PRINCIPLE

`FATIGUE CAN COME FROM TOO MANY SMALL OPEN QUESTIONS, NOT ONLY FROM HIGH PRESENTATION INTENSITY.`

`LONG-SESSION QA MUST AUDIT CONCURRENT MEANING, NOT JUST FLASH/SOUND DENSITY.`

---

## 13. Intrinsic satisfaction vs reward relief

### QA SEPARATION FRAME

For every notable hit after an ordinary stretch, record two independent ratings:

### A. `INTRINSIC PRE-HIT PLAY VALUE`
Would the preceding 50–100G still have felt worthwhile if the hit had not arrived?

### B. `RELIEF VALUE`
How much of the positive reaction is simply release from unsuccessful waiting?

Do not merge these scores.

The same applies inside ART:
- base ART satisfaction;
- relief/excitement when an extension zone finally arrives.

### QA PRINCIPLE

`REWARD PEAKS AND THE QUALITY OF THE ROAD TO THEM ARE SEPARATE VARIABLES.`

---

## 14. Skill reward versus punishment/friction

### SOURCED FACT

Unlike 新ハナビ, this case is not primarily a technical-intervention payout machine. Ordinary play still requires small-role coverage and ART navigation, but the central repeated skill is more about correct routine, context recognition and state inference than extracting a large mechanical skill delta.

Source:
- https://1geki.jp/slot/s_madomagi2/2/

### INTERPRETATION

Therefore QA should not import the Case Study 02 framework unmodified. The relevant failure costs are:
- missed small-role coverage;
- missed/incorrect navigation;
- failed recognition of a role/state cue;
- cognitive overload from too many contextual rules.

The strongest mastery reward should be **lower orientation cost**, not permanent hypervigilance.

### QA PRINCIPLE

`WHEN MOTOR SKILL IS NOT THE MAIN PRODUCT, MASTERY SHOULD MOSTLY REDUCE FRICTION AND IMPROVE CONTEXT RECOGNITION.`

---

## 15. Contradictions / unresolved items

### UNRESOLVED — direct observation depth

- no authoritative eye-tracking data for beginner versus expert;
- no complete time-coded 100G unedited reel/LCD/audio density audit yet;
- no trustworthy cabinet SPL or fatigue threshold from video;
- exact normal-stage transition acoustic behavior remains unresolved;
- exact player response to repeated complete notifications needs multiple-session evidence;
- practical BONUS detection/alignment latency remains insufficiently observed;
- exact re-anchor latency after BIG-inside-ART needs time-coded real footage;
- three-hour boredom/engagement ratio cannot be inferred from one successful edited session;
- smartphone app behavior is explicitly out of scope until Phase B.

### CONTRADICTION CONTROL

Older strategy pages may differ in terminology or summarized probabilities. This run relies on cross-source agreement for architecture and treats disputed fine detail as unresolved rather than normalizing it into false certainty.

---

## 16. Reusable QA principles retained from this run

1. `ONBOARDING SHOULD TEACH THE TRIGGER FOR EXTRA DUTY, NOT MAKE EVERY GAME FEEL LIKE EXTRA DUTY.`
2. `SCREEN ATTENTION MUST NOT PREVENT THE BASIC REEL ROUTINE FROM BECOMING AUTOMATIC.`
3. `SPARSE RARE EVENTS DO NOT GUARANTEE LOW COGNITIVE LOAD IF THEIR CONSEQUENCES STAY OPEN TOO LONG.`
4. `A HIT AFTER A DRY SPELL MUST NOT BE USED AS RETROACTIVE PROOF THAT THE DRY SPELL WAS GOOD.`
5. `IN A PARALLEL-REWARD MACHINE, A REAL BONUS MUST RETAIN LOCAL COMPLETION VALUE EVEN WHEN IT DOES NOT OPEN THE PERSISTENT STATE.`
6. `PLAYER CHOICE CAN BE A CHOICE OF UNCERTAINTY TIMING, NOT ONLY PRESENTATION STYLE.`
7. `A FAILED TEMPORARY STATE MAY LEAVE SYSTEM MEMORY, BUT IT SHOULD NOT LEAVE UNBOUNDED PLAYER DUTY.`
8. `THE PERSISTENT STATE MUST BE TESTED WITHOUT ITS HIGHLIGHT SUBSTATES.`
9. `A TEMPORARY REWARD INTERRUPTION SHOULD RETURN THE PLAYER TO THE PERSISTENT STATE WITH MINIMAL ORIENTATION COST.`
10. `MASTERY CAN MOVE LOAD FROM THE HANDS TO THE MODEL IN THE PLAYER'S HEAD.`
11. `FATIGUE CAN COME FROM TOO MANY SMALL OPEN QUESTIONS, NOT ONLY FROM HIGH PRESENTATION INTENSITY.`
12. `LONG-SESSION QA MUST AUDIT CONCURRENT MEANING, NOT JUST FLASH/SOUND DENSITY.`
13. `REWARD PEAKS AND THE QUALITY OF THE ROAD TO THEM ARE SEPARATE VARIABLES.`
14. `WHEN MOTOR SKILL IS NOT THE MAIN PRODUCT, MASTERY SHOULD MOSTLY REDUCE FRICTION AND IMPROVE CONTEXT RECOGNITION.`

---

## 17. Director conclusion

Case Study 03's repeated-play challenge is not constant motor difficulty and not a single escalating AT ladder. It is **context management across parallel reward systems**.

The strongest QA finding is:

`THE MACHINE MUST LET THE PLAYER RETURN TO A TRUSTED HOME ROUTINE AFTER EACH TEMPORARY CONTEXT, OR PARALLEL DEPTH TURNS INTO PARALLEL FATIGUE.`

A+ART coherence should therefore be judged by the quality of transitions and releases as much as by the peaks themselves:

`NORMAL HOME → QUESTION → CZ/BIG/ART CLAIM → LOCAL RESOLUTION → RE-ANCHOR → NORMAL OR ART HOME`

The five fixed Directors now have one Phase A run each for Case Study 03. This does **not** make the global Reality Baseline complete. Machine Director should integrate the Phase A cycle, preserve Human Gate, and decide whether more real-machine evidence is required before formally opening Phase B smartphone-app study.
