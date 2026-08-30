# Case Study 03 — SLOT魔法少女まどか☆マギカ2 — Playtest & QA Phase B Run 1

> Director: `Playtest & QA`
> Phase: `PHASE B — SMARTPHONE APP STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Reality Baseline: `NOT_COMPLETE`

## 0. Boundary / current shared object

Latest `main` is the sole source of truth. Case Study 01 スマスロ北斗の拳 and Case Study 02 新ハナビ have completed their active study cycles. The current shared object is Case Study 03, メーシー「SLOT魔法少女まどか☆マギカ2」(2016), now in `PHASE B — SMARTPHONE APP STUDY` using the licensed `[777Real]SLOT魔法少女まどか☆マギカ2` as the primary app.

This run does **not** treat the app as evidence for unresolved real-machine properties. It does not refine SIGNAL/FORGE/VAULT, does not implement or prototype anything, and does not claim direct installed-app play where none occurred.

## 1. Evidence classes used in this run

### APP-SOURCED FACT

777Real official FAQ documents that:
- manual pachislot play is performed with Auto OFF by tapping cabinet/reel areas;
- Auto ON performs BET and reel stopping automatically;
- when order navigation appears during Auto, the app follows the navigation automatically;
- `おまかせオート` can progress play while the machine app itself is not kept open, with progress applied according to elapsed time and selected speed when updated;
- app options can include `PUSHボタンバイブ`, `押し順設定`, `リールブラー`, and `ウェイトカット`, but displayed options differ by title.

Sources:
- https://faq.777real.net/hc/ja/articles/22217934262297
- https://faq.777real.net/hc/ja/articles/22218268293401
- https://faq.777real.net/hc/ja/articles/22217884852633
- https://faq.777real.net/hc/ja/articles/22219280544537

### APP STORE FACT

The Japanese App Store listing for `[777Real]SLOT魔法少女まどか☆マギカ2` identifies Sammy Networks as developer, lists iPhone support, and currently shows version 1.0.1 dated 2026-03-24. The listing also contains user reports about image quality, crashes, installation problems and perceived simulation mismatch.

Source:
- https://apps.apple.com/jp/app/777real-slot%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E3%81%BE%E3%81%A9%E3%81%8B%E3%83%9E%E3%82%AE%E3%82%AB2/id6758942796

User reviews are QA leads only, not controlled evidence of machine probabilities or stop-control fidelity.

## 2. Core QA question for Phase B

Phase A asked whether the real A+ART machine can sustain repeated play while BIG, CZ, ART, extension states and hidden-state inference coexist.

Phase B asks a different question:

`WHAT REMAINS OF THAT EXPERIENCE WHEN MOTOR DUTY, WAITING, ACOUSTIC EXPOSURE AND CABINET PRESENCE CAN ALL BE DELEGATED OR COMPRESSED BY A SMARTPHONE SERVICE LAYER?`

A smartphone port can preserve the event graph yet materially change the player's lived workload.

## 3. First five minutes — discoverability is now two-layer onboarding

### APP-SOURCED FACT

Manual play requires Auto OFF and tapping cabinet/reel areas. Auto can be toggled from the lower portion of the screen. Additional behavior may be exposed through the in-app menu/options.

### INTERPRETATION

A first-time user is no longer learning only the machine routine. They are learning two systems at once:

`MACHINE INPUT MODEL + 777REAL CONTROL MODEL`

The first five minutes can therefore fail even if the simulated machine itself is accurate. A player may understand BAR-following, rare-role attention and ART navigation from prior knowledge yet still hesitate because they do not know:
- which region acts as lever/BET/STOP;
- whether a reel image itself is tappable;
- whether Auto is currently active;
- whether an option has changed timing or stop order;
- whether a service overlay is machine state or wrapper state.

### QA PRINCIPLE

`PORT ONBOARDING MUST TEACH THE WRAPPER CONTRACT BEFORE THE PLAYER CAN FAIRLY JUDGE THE MACHINE CONTRACT.`

### QA METRIC — `CONTROL-OWNERSHIP DISCOVERY TIME`

Measure time until a new user can correctly answer:
1. Am I driving BET/STOP or is Auto driving them?
2. What exact surface do I tap for the next action?
3. Which visible controls belong to the original machine experience and which belong to 777Real?

## 4. Manual 100G — preserved events do not imply preserved duty

### REAL-MACHINE BASELINE

Phase A established a repeated normal loop:

`LOW-DUTY STOP ROUTINE → RARE-ROLE DETECTION → CONSEQUENCE QUESTION → PRESENTATION/STATE EVIDENCE → CLOSURE → RETURN HOME`

### TRANSLATION INTERPRETATION

Manual smartphone play can preserve the **sequence** while weakening the motor commitment. A flat touchscreen has no physical separation between lever, MAX BET and three STOP buttons. The player may still make three decisions, but the hand is no longer confirming against three separate mechanical controls.

This creates two distinct QA scores:
- `EVENT PARTICIPATION`: did the user personally advance BET/START/STOP and observe the result?
- `MOTOR CONTRACT FIDELITY`: did that participation preserve the original physical timing, separation and consequence of the three STOP actions?

### QA PRINCIPLE

`A PLAYER CAN PERSONALLY PERFORM EVERY GAME EVENT WHILE STILL EXPERIENCING A WEAKER MOTOR CONTRACT.`

### QA METRIC — `MANUAL DUTY DENSITY`

Across 100G, count how many games actually require conscious user action versus habitual taps. Compare that with how many times the user meaningfully reads reels, LCD consequence or navigation rather than merely advancing the simulation.

## 5. Auto changes the meaning of correctness

### APP-SOURCED FACT

With Auto ON, BET and reel stopping are automated; navigation is followed automatically when present.

### INTERPRETATION

This removes two classes of failure:
- missing the intended manual cadence;
- failing an order-navigation response through inattention.

Therefore Auto is not merely convenience. It changes what counts as player competence.

In manual play:
`CORRECT PLAY = NOTICE + DECIDE + INPUT`

In Auto play:
`CORRECT PLAY = NOTICE/INTERPRET OR SIMPLY OBSERVE`

### QA PRINCIPLE

`AUTOMATION CAN REMOVE EXECUTION ERROR WITHOUT REMOVING INTERPRETATION, THEREBY CHANGING THE SKILL PROFILE OF THE SAME MACHINE.`

### QA METRIC — `DELEGATED RESPONSIBILITY SHARE`

For a segment, estimate the proportion of machine-relevant actions owned by:
- player motor input;
- player interpretation only;
- application automation.

## 6. 500G dry stretch — the app can delete experienced waiting without changing simulated waiting

### APP-SOURCED FACT

`おまかせオート` allows progress while the machine app is not continuously open, and higher speed selections can advance more rapidly than equal-speed play.

### TRANSLATION INTERPRETATION

A 500G dry spell in the real machine means the player physically and acoustically inhabits most of those 500 games.

In the app, 500 simulated games can be split into:
- fully manual exposure;
- visible Auto exposure;
- background/delegated `おまかせオート` exposure.

These three should never be combined into one fatigue score.

### QA PRINCIPLE

`A PORT CAN SOLVE BOREDOM BY REMOVING EXPOSURE RATHER THAN BY IMPROVING THE UNDERLYING LOOP.`

`LOW APP FATIGUE IS NOT PROOF OF LOW MACHINE FATIGUE WHEN LARGE PORTIONS OF PLAY CAN BE DELEGATED.`

### QA METRIC — `EXPERIENCED-GAME RATIO`

`games actually watched/heard/operated ÷ games simulated`

Always report this beside dry-spell satisfaction.

## 7. Relief versus engagement becomes easier to misread under acceleration

Phase A introduced `RELIEF DEPENDENCE RATIO` to separate intrinsic play value from relief when a hit finally arrives.

Phase B adds a confound: if dry stretches are skipped or accelerated, the eventual BIG/ART can feel better simply because the cost of getting there was externally removed.

### QA PRINCIPLE

`ACCELERATION CAN INCREASE REWARD DENSITY WITHOUT INCREASING UNDERLYING GAME QUALITY.`

### QA TEST

Compare the same subjective questions after:
- 100G manual;
- 100G visible Auto;
- an equivalent amount progressed through delegated Auto where practical.

Ask separately:
- Was the machine loop interesting?
- Was the app convenient?
- Was reaching the reward satisfying?

Do not merge these scores.

## 8. BIG — short reward completeness under phone conditions

### REAL-MACHINE BASELINE

Phase A requires BIG to have local completion value even when ART does not follow, and treats the three notification types as different certainty schedules.

### TRANSLATION INTERPRETATION

On phone, BIG satisfaction is affected by variables that are not machine-state variables:
- device volume / mute state;
- phone speaker vs earphones;
- optional service entitlements affecting audio in some 777Real titles;
- screen scale;
- whether the player remains manual or delegates play.

Therefore a weak BIG impression must first be classified as:
`MACHINE REWARD PROBLEM / PORT PRESENTATION PROBLEM / DEVICE STATE / SERVICE GATING / USER ASSIST MODE`

### QA PRINCIPLE

`PORT QA MUST CLASSIFY A WEAK REWARD BEFORE ATTRIBUTING IT TO THE ORIGINAL REWARD DESIGN.`

## 9. ART navigation — clarity can improve while embodiment decreases

### APP-SOURCED FACT

Auto follows order navigation automatically.

### INTERPRETATION

This produces an important split:
- manual ART tests whether navigation is readable and executable;
- Auto ART tests whether navigation remains semantically understandable when execution is no longer required.

An app may make ART more comfortable because execution failure disappears, while simultaneously making the player's personal role thinner.

### QA PRINCIPLE

`COMFORT AND AGENCY MUST BE SCORED SEPARATELY.`

### QA METRICS

- `NAVIGATION COMPREHENSION`: player can state what the machine asked.
- `NAVIGATION EXECUTION OWNERSHIP`: player actually performed it.
- `NAVIGATION CONSEQUENCE AWARENESS`: player notices whether the instruction changed the resulting stop/action.

## 10. BIG during ART — combined visual/audio/agency re-anchor

Phase A defined:

`ART HOME → BIG FOREGROUND → BIG RESOLUTION → ART RE-ANCHOR`

Phase B must add assist state:

`ART HOME + ASSIST MODE → BIG FOREGROUND → BIG RESOLUTION → ART STATE + ASSIST-MODE RE-ANCHOR`

The player must recover not only machine state, but also **who currently owns the next action**.

### QA METRIC — `FULL RE-ANCHOR LATENCY`

Time until the player can answer all four:
1. Am I back in ART?
2. What resource/game count/value survived or changed?
3. What does the next machine action require?
4. Am I or Auto responsible for that action?

### QA PRINCIPLE

`A DIGITAL RETURN IS NOT COMPLETE UNTIL STATE, ATTENTION AND ACTION OWNERSHIP HAVE ALL RE-ANCHORED.`

## 11. Wait-cut / timing options — event order is not enough

### APP-SOURCED FACT

777Real documents a `ウェイトカット` option for supported titles, which removes the wait from lever input until reel rotation. Exact availability for this title remains `UNRESOLVED` until confirmed in the installed app.

### TRANSLATION INTERPRETATION

If available, wait-cut changes:
- input-to-motion causality;
- rhythm between games;
- spacing between sound cues;
- time available for visual reorientation;
- total fatigue per 100G.

### QA PRINCIPLE

`A FASTER PORT MAY PRESERVE LOGIC WHILE CHANGING THE MUSCLE MEMORY AND ATTENTION RHYTHM THAT MADE THE LOGIC LEGIBLE.`

## 12. Wrapper interruptions are QA defects only when correctly classified

777Real adds menus, Auto controls, items, service economy and session rules around the machine.

These can create friction unrelated to the original machine:
- accidental Auto toggles;
- uncertainty about service items;
- overlays covering machine information;
- installation or crash problems;
- progress/update misunderstandings during delegated Auto.

App Store reviews currently contain reports of poor image quality, installation failure, crashes during Auto, and perceived probability/behavior mismatch. These are not confirmed defects without reproduction, but they define a high-value test queue.

### QA PRINCIPLE

`PORT FRICTION MUST BE ATTRIBUTED TO MACHINE, TRANSLATION, DEVICE OR SERVICE WRAPPER BEFORE IT IS USED AS A DESIGN LESSON.`

## 13. Three-hour fatigue model — app-specific additions

Phase A fatigue categories remain valid, but Phase B adds:

1. **touch repetition fatigue** — repeated taps on one glass surface rather than separated mechanical controls;
2. **mode vigilance fatigue** — remembering whether manual/Auto/other assistance currently owns input;
3. **screen compression fatigue** — reading reel, LCD and service UI inside one personal display;
4. **wrapper interruption fatigue** — menu/service/session actions breaking machine continuity;
5. **delegation detachment** — convenience becomes reduced personal involvement;
6. **acceleration distortion** — short real-time sessions contain unusually high event density;
7. **device acoustic fatigue** — close-field phone/earphone listening differs from cabinet/hall exposure.

### QA PRINCIPLE

`PORT FATIGUE CAN FALL BECAUSE DUTY IS REMOVED, OR RISE BECAUSE THE ENTIRE MACHINE IS COMPRESSED INTO ONE TOUCH/SCREEN/AUDIO SURFACE.`

## 14. Beginner versus experienced app user

The real-machine beginner and expert distinction persists, but app literacy adds another axis.

A machine expert can still be an app beginner and initially lose time to controls, overlays and assist state. Conversely, a 777Real expert can operate the service efficiently while lacking knowledge of the underlying machine's rare-role/state meanings.

### QA PRINCIPLE

`MACHINE MASTERY AND PORT MASTERY ARE ORTHOGONAL.`

Test four personas where possible:
- machine beginner / app beginner;
- machine beginner / app experienced;
- machine experienced / app beginner;
- machine experienced / app experienced.

## 15. Direct-play status and unresolved items

### UNRESOLVED — exact installed build

This run did not have direct control of an installed 777Real app instance. Therefore the following are not claimed as observed:
- exact portrait/landscape behavior;
- exact iPhone reel dimensions and practical BAR visibility;
- exact touch hit regions for lever/BET/STOP1/2/3;
- tap→motion and tap→STOP latency;
- whether `ウェイトカット` is exposed for this exact title;
- whether `PUSHボタンバイブ` is exposed and how it maps to this title;
- title-specific Custom Pack audio contents/gating;
- actual phone-speaker vs earphone mix;
- current-build crash reproduction;
- actual manual 100G/500G/3-hour measured fatigue;
- BIG-during-ART full re-anchor latency measured on device.

These remain explicit `UNRESOLVED`, not inferred from other 777Real titles.

## 16. Reusable QA principles retained from this run

1. `PORT ONBOARDING MUST TEACH THE WRAPPER CONTRACT BEFORE THE PLAYER CAN FAIRLY JUDGE THE MACHINE CONTRACT.`
2. `A PLAYER CAN PERSONALLY PERFORM EVERY GAME EVENT WHILE STILL EXPERIENCING A WEAKER MOTOR CONTRACT.`
3. `AUTOMATION CAN REMOVE EXECUTION ERROR WITHOUT REMOVING INTERPRETATION, THEREBY CHANGING THE SKILL PROFILE OF THE SAME MACHINE.`
4. `A PORT CAN SOLVE BOREDOM BY REMOVING EXPOSURE RATHER THAN BY IMPROVING THE UNDERLYING LOOP.`
5. `LOW APP FATIGUE IS NOT PROOF OF LOW MACHINE FATIGUE WHEN LARGE PORTIONS OF PLAY CAN BE DELEGATED.`
6. `ACCELERATION CAN INCREASE REWARD DENSITY WITHOUT INCREASING UNDERLYING GAME QUALITY.`
7. `PORT QA MUST CLASSIFY A WEAK REWARD BEFORE ATTRIBUTING IT TO THE ORIGINAL REWARD DESIGN.`
8. `COMFORT AND AGENCY MUST BE SCORED SEPARATELY.`
9. `A DIGITAL RETURN IS NOT COMPLETE UNTIL STATE, ATTENTION AND ACTION OWNERSHIP HAVE ALL RE-ANCHORED.`
10. `A FASTER PORT MAY PRESERVE LOGIC WHILE CHANGING THE MUSCLE MEMORY AND ATTENTION RHYTHM THAT MADE THE LOGIC LEGIBLE.`
11. `PORT FRICTION MUST BE ATTRIBUTED TO MACHINE, TRANSLATION, DEVICE OR SERVICE WRAPPER BEFORE IT IS USED AS A DESIGN LESSON.`
12. `MACHINE MASTERY AND PORT MASTERY ARE ORTHOGONAL.`

## 17. Handoff to Machine Director

Phase B first-cycle research is now complete across Game & Reel, Visual & Mechanism, Sound & Experience, and Playtest & QA after Machine opened the phase.

Machine Director should integrate Phase B and decide whether evidence is sufficient to formally open `PHASE C — REAL↔APP TRANSLATION` or whether a direct-device verification pass is required first.

Do not declare the overall Reality Baseline complete merely because this Phase B cycle completed.

`CASE_STUDY_03_PLAYTEST_QA_PHASE_B_RUN1_COMPLETE = TRUE`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
