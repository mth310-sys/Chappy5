# Case Study 03 — SLOT魔法少女まどか☆マギカ2 — Game & Reel Run 1

> Director: `Game & Reel`
> Phase: `PHASE A — REAL MACHINE STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Reality Baseline: `NOT_COMPLETE`

## 0. Boundary / current shared object

Latest `main` is the sole source of truth. Case Study 01 スマスロ北斗の拳 is complete through all five fixed Directors. Case Study 02 新ハナビ is closed as the active shared object after Machine Run 5. The current shared object is Case Study 03, メーシー「SLOT魔法少女まどか☆マギカ2」(2016), and this run studies the **real machine only**.

The smartphone app exists and is reserved for Phase B. This run does not use the app as evidence for real-machine reel/control properties.

No original concept refinement, SIGNAL/FORGE/VAULT ranking, prototype, reel implementation, copied reel art, protected animation/audio, or invented undisclosed stop-control table is included.

---

## 1. What is structurally new versus the first two cases

### SOURCED FACT

Major strategy references classify the machine as a 5号機 A+ART / BONUS + ART machine. Published summaries place BIG at roughly 150 net coins, ART「マギカ☆ラッシュ」at about 1.5 coins/G, and the base ART unit at 50G+α. ART can be reached through CZ, rare-role/direct routes, BONUS-related routes and ceiling-related routes.

Sources:
- https://1geki.jp/slot/s_madomagi2/
- https://p-world.co.jp/machine/database/7821

### INTERPRETATION

Case 01 asks the player to use roles largely to update future AT/state probability. Case 02 makes the stopped reels themselves the main discovery surface. Case 03 sits elsewhere: **a detected role can feed several parallel reward economies** — real BONUS, hidden-state movement/CZ, direct ART, ART extension, or recovery from ART end preparation.

The same lever and 3 STOPs therefore keep the body map stable while the value of the observed role changes by state.

### REUSABLE PRINCIPLE

`THE SAME REEL EVENT CAN BECOME A DIFFERENT GAME RESOURCE IN DIFFERENT STATES.`

---

## 2. Reel / line / payout vocabulary

### SOURCED FACT

Published machine data identifies a **single valid payline, right-upward (右上がり)**.

Source:
- https://p.hisshobon.jp/machine/2825/1/59608

Published reel/payout references show the machine uses three physical reels and the standard role vocabulary relevant to this study: BONUS symbols, bell, watermelon, cherry and replay. Published payout summaries list bell at 8 coins, watermelon at 5, cherry at 3 or 8 depending on stop/result, plus replay; BIG ends after the specified payout threshold and is commonly summarized at about 150 net coins.

Sources:
- https://1geki.jp/slot/s_madomagi2/2/
- https://p-world.co.jp/machine/database/7821
- https://nana-press.com/kaiseki/machine/50/898/

### PROTECTED-IP BOUNDARY

The exact copyrighted reel artwork and full graphic reel strip are not reproduced here. A reel table may be consulted to understand spacing, landmarks and stop procedure, but Chappy5 does not copy the protected symbol art or proprietary arrangement as an asset.

### INTERPRETATION

Unlike 新ハナビ, the main repeated value is not an enormous family of reach-eye discoveries. The reel window still matters, but its everyday responsibility is more often **loss prevention + role classification + nav compliance + occasional reward alignment**.

---

## 3. Normal stopping routine — intermittent precision rather than permanent high duty

### SOURCED FACT

A widely published normal procedure is:

- aim BAR around the upper portion of the left reel;
- if a cherry stops in the middle position, treat it as the middle-cherry branch and stop the remaining reels according to the published procedure;
- if cherry stops lower, weak/strong cherry is classified from the completed stop form;
- if BAR stops lower, a chance-role-A branch remains possible;
- if watermelon appears in the upper stopping branch, aim BAR as a landmark on the middle reel to cover watermelon; the right reel can be stopped freely under the published procedure;
- a completed watermelon alignment is watermelon, while the corresponding miss can form the published chance-role-B result;
- in ART, obey navigation when it appears; without nav, or when presentation suggests a rare role, return to the ordinary small-role procedure.

The same guide notes that variant stopping during normal play is not itself penalized, while navigation during ART must be obeyed.

Source:
- https://1geki.jp/slot/s_madomagi2/2/

### INTERPRETATION

The basic 3STOP contract is not “every game read deeply.” Most games can stay low duty. Precision spikes when the left stop opens a cherry/watermelon branch, or when ART navigation changes the stop-order requirement.

That gives three different STOP responsibilities without changing the physical controls:

`NORMAL: role coverage / classification`

`ART NAV: order compliance`

`BONUS: reward-symbol alignment / confirmation`

### REUSABLE PRINCIPLE

`AIMING DUTY SHOULD SPIKE WHEN A ROLE OR STATE REQUIRES IT; IT DOES NOT NEED TO BE MAXIMUM EVERY GAME.`

`STOP RESPONSIBILITY CAN SHIFT WITHOUT MOVING THE PLAYER'S BODY MAP.`

---

## 4. Internal role versus visible stop form

### SOURCED FACT

Published role probabilities include approximately:

- replay: 1/7.3
- watermelon: 1/99.9
- chance role A: 1/219.9
- chance role B: 1/350.5
- strong cherry: 1/327.7
- middle cherry: 1/32768
- weak cherry varies by setting, about 1/108.9 at setting 1 through 1/81.5 at setting 6.

Source:
- https://nana-press.com/kaiseki/machine/50/906/

Published simultaneous-BONUS analysis also makes clear that a visible rare role is not always the whole internal event. Strong cherry and chance roles can be BONUS simultaneous-hit routes, while middle cherry is reported as a BONUS simultaneous hit in the published table; weak cherry, watermelon and chance A have setting-dependent simultaneous-hit information.

Sources:
- https://nana-press.com/kaiseki/machine/50/908/
- https://1geki.jp/slot/s_madomagi2/51/

### INTERPRETATION

The reel result answers the first question — “what role family did I stop?” — but may not answer the second — “did this role also carry BONUS / state / ART value?” The player therefore moves through:

`STOP FORM → ROLE CLASSIFICATION → PRESENTATION / NEXT-GAME EVIDENCE → REWARD-STATE UPDATE`

This is a different uncertainty structure from a classic reach-eye machine. The physical stop still matters, but some of the truth is deferred outside the final reel tableau.

### REUSABLE PRINCIPLE

`VISIBLE ROLE IDENTIFICATION AND COMPLETE EVENT RESOLUTION DO NOT HAVE TO OCCUR AT THE SAME MOMENT.`

---

## 5. Hidden state makes the same rare role worth different amounts

### SOURCED FACT

Normal/ART play uses low / high / super-high internal states. In normal play, state affects CZ「魔女の結界」entry probability from rare roles. Published state-transition data include weak cherry moving low→high at 25%, and chance roles moving low/high→super-high at 5.1% for settings 1–3 and 10.2% for settings 4–6. BONUS end moves to high with 50% probability; if the machine was already high or above before BONUS, that state is retained in the published description.

Sources:
- https://1geki.jp/slot/s_madomagi2/46/
- https://nana-press.com/kaiseki/machine/50/910/

### INTERPRETATION

A weak cherry is not a fixed-value “small win.” It can be:

- a simple observed rare role;
- a hidden-state editor;
- a setting sample because its base rate changes;
- an input to CZ expectation depending on current hidden state;
- a different-value event again inside CZ or ART-end preparation.

The player can correctly identify the physical role and still have incomplete knowledge of its future value.

### REUSABLE PRINCIPLE

`ROLE IDENTITY MAY BE STABLE WHILE ROLE VALUE IS STATE-RELATIVE.`

---

## 6. CZ — the same reel vocabulary gets a new conversion table

### SOURCED FACT

During CZ「魔女の結界」the published ART lottery changes sharply by role and CZ variant. Across the published variants, strong cherry and BONUS can confirm ART; chance roles often have high conversion probability; weak cherry/watermelon and even replay or push-order bell can have nonzero value depending on the CZ variant. The battle phase uses another published role-to-ART table.

Sources:
- https://1geki.jp/slot/s_madomagi2/43/
- https://nana-press.com/kaiseki/machine/50/915/

### INTERPRETATION

CZ does not need a new physical reel language. It **reprices the familiar role vocabulary**. A replay that is routine in normal play can become materially relevant in a CZ. A strong cherry that was already important can become decisive.

This helps explain why the same 3 STOPs remain coherent across states: the mechanics are familiar, while the consequence table changes.

### REUSABLE PRINCIPLE

`STATE CHANGE CAN REPRICE FAMILIAR INPUT RESULTS INSTEAD OF REPLACING THE INPUT SYSTEM.`

---

## 7. Real BONUS and ART are parallel, not mutually exclusive reward layers

### SOURCED FACT

The machine has real BIG BONUS rather than a purely simulated AT pseudo-bonus. Strategy references report several BIG combinations and roughly 150 net coins. Published BONUS-during-state tables show that a BONUS during ART/preparation/extension contexts can add ART game count or feed additional extension rewards rather than simply discarding the current ART contract.

BONUS play itself includes a red-7 alignment lottery. Published tables report a parallel red-7 alignment at about 1/137.1 during BONUS and a much rarer right-down alignment. Outside ART, the parallel result grants ART; inside ART, its reward context changes toward an extension opportunity. The same physical aiming act therefore does not have one fixed semantic value.

Sources:
- https://1geki.jp/slot/s_madomagi2/62/
- https://1geki.jp/slot/s_madomagi2/64/

### INTERPRETATION

This is the defining A+ART integration lesson of this run:

`REAL BONUS = immediate independent payout event`

while

`ART = persistent future-game resource`

and BONUS can occur **inside** that persistent resource. A good A+ART loop therefore has to prevent the real BONUS from feeling like an interruption that erases ART value.

### REUSABLE PRINCIPLE

`A+ART REELS CONNECT PARALLEL REWARD ECONOMIES: IMMEDIATE BONUS VALUE AND PERSISTENT ART VALUE.`

`BONUS INSIDE A PERSISTENT STATE SHOULD ADD TO, OR COHERENTLY MODIFY, THE CURRENT VALUE CONTRACT RATHER THAN SILENTLY RESET IT.`

---

## 8. Direct ART and setting inference are multi-channel

### SOURCED FACT

Published direct-ART lottery data show major setting differences for watermelon / chance-role / strong-cherry direct ART: approximately 0.4% for settings 1/3/5, 1.2% for setting 2, 2.0% for setting 4 and 3.1% for setting 6 under the published normal-state table. A direct hit also carries an extension opportunity in the published specification.

Source:
- https://1geki.jp/slot/s_madomagi2/52/

Published bonus/ART summary values also rise with setting. A commonly published table gives roughly:

- setting 1: BONUS 1/297.9, ART 1/424.4, combined 1/175.0
- setting 6: BONUS 1/250.1, ART 1/267.4, combined 1/129.3

and intermediate settings between them.

Source:
- https://p-world.co.jp/machine/database/7821

Weak-cherry frequency itself also changes by setting, and selected BONUS simultaneous-hit combinations have published setting differences.

### INTERPRETATION

Setting inference is not one meter. The player can accumulate evidence from:

`weak-role frequency + specific BONUS combinations + direct ART behavior + state/CZ-related samples + total result`

No single short-session sample is truth, but long sessions create several partially independent inference channels.

### REUSABLE PRINCIPLE

`SETTING INFERENCE IS STRONGER WHEN SEVERAL GAME SYSTEMS EMIT DIFFERENT KINDS OF EVIDENCE.`

---

## 9. ART and extension zones — ordinary roles can become positional resources

### SOURCED FACT

ART「マギカ☆ラッシュ」is published as about 1.5 coins/G and 50G+α, with game-count extension. Published special-extension information describes ordinary navigated outcomes such as bells becoming important to progression/timing inside the extension sequence, while rare roles carry further extension value.

Sources:
- https://1geki.jp/slot/s_madomagi2/53/
- https://p-world.co.jp/machine/database/7821

At ART end preparation, published recovery data show rare roles can restore ART: watermelon/weak cherry at 25% and chance roles/strong cherry/BONUS at 100% in the cited table.

Source:
- https://1geki.jp/slot/s_madomagi2/54/

### INTERPRETATION

“ART ended” is not always an instantaneous semantic cliff. During the end-preparation boundary, a role that would be modest in ordinary play can become a direct recovery resource.

This creates a useful time-domain structure:

`ART VALUE → END THREAT → RECOVERY WINDOW → TRUE RETURN TO NORMAL`

### REUSABLE PRINCIPLE

`STATE BOUNDARIES MAY HAVE THEIR OWN ROLE ECONOMY; DO NOT ASSUME VALUE CHANGES AT A SINGLE FRAME.`

---

## 10. What 100G / 500G / 3 hours ask of the player's 3 STOPs

### SOURCED FACT + DERIVED EXPECTATION

Using the published marginal role probabilities only as a rough frequency lens, 100G produces expectation counts of about:

- replay: 13.7
- watermelon: 1.0
- chance A: 0.45
- chance B: 0.29
- strong cherry: 0.31
- weak cherry: about 0.92 at setting 1 or 1.23 at setting 6

Middle cherry is far rarer. These are mathematical expectations, not a guaranteed session script.

At 500G the same rates imply repeated chances to enter the precision branches even when BONUS/ART does not arrive: roughly 5 watermelons, 2.3 chance A, 1.4 chance B, 1.5 strong cherry and 4.6 weak cherry at setting 1 on expectation.

Published machine information places a large ceiling boundary beyond a 500G ordinary dry stretch, so 500G can exist without a modern AT-style sequence of guaranteed milestone states.

Sources:
- https://nana-press.com/kaiseki/machine/50/906/
- https://p-world.co.jp/machine/database/7821

### INTERPRETATION — 100G

Most STOPs are routine. The player periodically shifts into precision for cherry/watermelon classification, then returns to low-duty play. Each rare role can start a second task: observe whether it edits hidden state, starts CZ/precursor, or carried BONUS.

### INTERPRETATION — 500G dry spell

The machine can still create repeated **micro questions** from role detection and state/CZ inference, but this does not prove that a 500G dry spell is enjoyable. If rare roles repeatedly fail to resolve into meaningful state movement, vigilance can become fatigue. That fatigue claim remains for Playtest & QA to verify from long-form play.

### INTERPRETATION — 3 hours

Mastery should reduce mechanical overhead: the normal BAR landmark and branching procedure become routine, while attention is reserved for rare-role branches, navigation, BONUS confirmation/alignment and state-specific repricing. The deeper long-session burden shifts away from constant eye skill and toward **probability tracking / hidden-state interpretation / reward-state context switching**.

### REUSABLE PRINCIPLE

`LONG-SESSION DEPTH CAN MOVE FROM MOTOR DIFFICULTY TO CONTEXTUAL INTERPRETATION AS THE BASIC STOP ROUTINE BECOMES AUTOMATIC.`

---

## 11. Contrast with Case Study 01 / 02

### INTERPRETATION

**スマスロ北斗の拳**
- role recognition mainly updates mode/AT/future-state expectation;
- persistent AT reward and continuation dominate the reward architecture.

**新ハナビ**
- stopping, slip and reach-eye discovery make the current physical reel result the main product;
- technical intervention directly links precision to payout.

**まどマギ2**
- ordinary reel interpretation is lighter than 新ハナビ;
- the same role vocabulary is repeatedly **repriced** across normal / hidden state / CZ / BONUS / ART / extension / ART-end preparation;
- real BONUS and persistent ART coexist and can reinforce each other.

### REUSABLE PRINCIPLE

`REEL DEPTH DOES NOT HAVE TO MEAN REACH-EYE DENSITY. IT CAN ALSO COME FROM STATE-RELATIVE CONSEQUENCE.`

---

## 12. Direct-play / field evidence boundary

### FIELD / VIDEO REFERENCE

Long-form and episode-length actual-play material for this exact machine exists, including experienced play and setting-oriented sessions. These are useful for the next passes to measure ordinary stretches rather than only highlight moments.

### UNRESOLVED

This run has not claimed stop-by-stop direct observations from video frames that were not actually inspected. Still required in later Phase A passes:

- time-coded long-form observation of normal 100G+ stretches;
- how often experienced players actually look down at the reels versus the LCD after routine mastery;
- practical BONUS-detection latency and whether players use aggressive early alignment or presentation-led confirmation;
- exact player behavior after rare-role misses during 500G+ dry stretches;
- complete, authoritative stop-control/slip tables where publicly documented — **do not infer undisclosed tables**;
- exact reel-strip spacing analysis without reproducing protected reel art;
- 3-hour fatigue validation from actual sustained play;
- contradiction checking among older strategy pages where nomenclature or percentages differ.

---

## 13. Run 1 reusable Game & Reel principles

1. `THE SAME REEL EVENT CAN BECOME A DIFFERENT GAME RESOURCE IN DIFFERENT STATES.`
2. `ROLE IDENTITY MAY BE STABLE WHILE ROLE VALUE IS STATE-RELATIVE.`
3. `AIMING DUTY SHOULD SPIKE WHEN A ROLE OR STATE REQUIRES IT; IT DOES NOT NEED TO BE MAXIMUM EVERY GAME.`
4. `STOP RESPONSIBILITY CAN SHIFT WITHOUT MOVING THE PLAYER'S BODY MAP.`
5. `VISIBLE ROLE IDENTIFICATION AND COMPLETE EVENT RESOLUTION DO NOT HAVE TO OCCUR AT THE SAME MOMENT.`
6. `STATE CHANGE CAN REPRICE FAMILIAR INPUT RESULTS INSTEAD OF REPLACING THE INPUT SYSTEM.`
7. `A+ART REELS CONNECT PARALLEL REWARD ECONOMIES: IMMEDIATE BONUS VALUE AND PERSISTENT ART VALUE.`
8. `SETTING INFERENCE IS STRONGER WHEN SEVERAL GAME SYSTEMS EMIT DIFFERENT KINDS OF EVIDENCE.`
9. `STATE BOUNDARIES MAY HAVE THEIR OWN ROLE ECONOMY; DO NOT ASSUME VALUE CHANGES AT A SINGLE FRAME.`
10. `REEL DEPTH DOES NOT HAVE TO MEAN REACH-EYE DENSITY. IT CAN ALSO COME FROM STATE-RELATIVE CONSEQUENCE.`

These are research abstractions, not specifications for an original Chappy5 machine.

---

## 14. Gate / handoff

`CASE_STUDY_03_GAME_REEL_PHASE_A_RUN1_COMPLETE`

`CURRENT_SHARED_OBJECT = CASE_STUDY_03 / SLOT魔法少女まどか☆マギカ2`

`CURRENT_PHASE = PHASE_A_REAL_MACHINE_STUDY`

`NEXT_FIXED_DIRECTOR = VISUAL_&_MECHANISM`

`HUMAN_GATE_1_NOT_READY`

`REALITY_BASELINE_COMPLETE = FALSE`

`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`

No production permission has been granted.