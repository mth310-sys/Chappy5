# Case Study 03 — SLOT魔法少女まどか☆マギカ2 — Game & Reel Director / Real-Machine Run 3

> Role: fixed Game & Reel Director
> Stage: `Stage 1 — Reality Baseline Study`
> Phase: `PHASE A — REAL MACHINE STUDY / RUN 3`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Reality Baseline: `NOT_COMPLETE`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## 0. Source-of-truth / scope

Latest main at start: `114559bbc372f5c4d31909c89005d579a383a5a1`.

Main states that Case Study 01 and Case Study 02 current cycles are already complete, Case Study 03 remains the current shared object, and Run 3 is formally open with `NEXT_FIXED_DIRECTOR = GAME_&_REEL`. Therefore this run does **not** regress to 新ハナビ despite older task wording.

Run 3 shared target:

`MEASURE / TRIANGULATE THE HOME-RETURN FAILURE BOUNDARY.`

This pass is intentionally narrow. It quantifies how often ordinary normal play branches away from the low-cost reel routine, separates immediate role classification from delayed consequence closure, and separates mandatory player duty from optional expert/statistical inference. It does not infer undisclosed stop-control tables.

## 1. Evidence discipline

Labels used below:
- `SOURCED FACT`
- `DIRECT REAL-MACHINE VIDEO/PHOTO OBSERVATION`
- `FIELD REPORT`
- `INTERPRETATION`
- `REUSABLE PRINCIPLE`
- `UNRESOLVED / CONTRADICTION`

Third-party protected visual/audio material is not copied. Published probabilities and rules are used only to study structure.

---

# 2. Normal HOME routine: most games are mechanically cheap

## SOURCED FACT

Published normal-play procedure consistently describes a left-reel BAR-reference routine:
- aim BAR on the left reel;
- if the watermelon/suika branch appears, aim BAR on the middle reel and the right can be stopped normally;
- cherry branches generally do not require extra precision on middle/right;
- other ordinary stop forms can be finished without an additional special aim.

Sources:
- P-WORLD machine database / play procedure: https://www.p-world.co.jp/machine/database/8129
- one-shot/strategy role-rate pages used for cross-checking: https://1geki.jp/slot/s_madomagi2/4/

## INTERPRETATION

The HOME routine is not `free-spin and ignore reels`; it is a **low-cost reference aim** every game, with precision demand increasing only after the left stop indicates that it is necessary.

Operationally:

`LEFT BAR REFERENCE → CLASSIFY LEFT STOP → [IF SUIKA: MIDDLE BAR AIM] / [OTHERWISE LOW-COST FINISH] → ROLE IDENTITY`

This is a responsibility allocator. The first stop decides whether the remainder of the game remains cheap or temporarily asks for more visual precision.

## REUSABLE PRINCIPLE

`A LOW-COST HOME ROUTINE CAN STILL REQUIRE A REPEATABLE REFERENCE AIM; LOW COST DOES NOT MEAN ZERO DUTY.`

`THE FIRST STOP CAN ALLOCATE PRECISION DUTY RATHER THAN MERELY REVEAL OUTCOME.`

---

# 3. How often does normal play leave the low-cost routine?

## SOURCED FACT

Published normal-role probabilities:
- replay: about 1/7.3;
- suika: 1/99.9;
- chance A: 1/219.9;
- chance B: 1/350.5;
- strong cherry: 1/327.7;
- middle cherry: 1/32768;
- weak cherry varies by setting: setting 1 about 1/108.9 to setting 6 about 1/81.5.

Cross-check sources:
- なな徹: https://nana-press.com/kaiseki/machine/50/908/
- 一撃: https://1geki.jp/slot/s_madomagi2/4/

## DERIVED MEASUREMENT — not a published machine statistic

If the published rare-role categories above are treated as mutually exclusive per-game role events, summing their occurrence probabilities gives a rough **rare-role encounter density**:

- setting 1: about `0.02968 / game` ≈ **1 rare-role-class event per 33.7G**;
- setting 6: about `0.03276 / game` ≈ **1 per 30.5G**.

Expected count from that arithmetic:
- 100G: roughly **3.0 events** at setting 1 / **3.3** at setting 6;
- 500G: roughly **14.8** / **16.4**;
- 3,000G: roughly **89** / **98**.

This is only an exposure estimate. It is **not** a claim that every listed event creates the same presentation branch, same player workload, or same unresolved question.

The branch that clearly creates an additional precision task—suika follow—is about 1/99.9, or approximately:
- 1 occasion per 100G;
- 5 per 500G;
- 30 per 3,000G.

## INTERPRETATION

This density supports a HOME architecture in which most games can remain routine while a meaningful branch appears every few dozen games. The machine does not need every STOP to carry new information. The cost question is instead whether the consequences opened by those ~3 rare-role-class events per 100G close quickly enough.

## REUSABLE PRINCIPLE

`BRANCH FREQUENCY AND BRANCH COST MUST BE MEASURED SEPARATELY.`

`A MACHINE MAY BE EVENTFUL AT 1/30–1/35G WITHOUT BEING HIGH-DUTY EVERY GAME, IF THE INTERVENING HOME CONTRACT IS CHEAP AND TRUSTED.`

---

# 4. Role classification clock vs consequence-resolution clock

## SOURCED FACT

Published play procedure allows the stopped reel form to identify/strongly classify weak/strong/middle cherry, suika, and chance-role families during the current game.

Published bonus simultaneous-hit expectations differ by role. Representative sourced values include:
- strong cherry: 25%;
- chance B: about 30.48%;
- middle cherry: 100%;
- suika: low single-digit percentage depending on setting;
- weak cherry: below 1%;
- chance A: about 16.78% at settings 1–2 rising to about 20.47% at setting 6.

Source cross-check:
- https://piro-shiki.com/madokamagika2-kaiseki2/
- https://xn--mckza4ard4ttb2d.com/madokamagica2-kaiseki

Published CZ behavior creates a second clock. When CZ is won, the announcement can occur after a selected **8–24G** foreground period. Published direct ART hits from rare roles use a much shorter **4–6G** foreground before announcement.

Sources:
- Pachiseven normal analysis: https://pachiseven.jp/machines/4939/cutout/4
- なな徹 direct ART: https://nana-press.com/kaiseki/machine/50/917/

## INTERPRETATION

A rare role can therefore close at three different semantic times:

### Clock A — same-game physical classification
`What role/form did I stop?`

Usually closes on STOP3 or earlier from the visible reel result.

### Clock B — short local consequence
`Was this also a BONUS / immediate direct ART trigger?`

Can remain open beyond role identification; direct ART is documented as a 4–6G foreground when won.

### Clock C — medium consequence / state question
`Did this rare role produce a CZ branch?`

For a successful CZ draw, announcement timing can extend to 8–24G.

The key failure risk is **not** that one question remains open for 24G. It is that another rare role can arrive while the previous consequence question is still unresolved. With rare-role encounter density around one per ~31–34G, a 20–24G consequence window is a substantial fraction of the average spacing between rare-role events.

This creates a plausible overlap zone, but no claim is made here about exact real presentation-overlap frequency because state, actual CZ hit rates, cancellation/priority behavior and role-specific presentation are not fully measured.

## REUSABLE PRINCIPLE

`ROLE CLASSIFICATION LATENCY ≠ CONSEQUENCE-RESOLUTION LATENCY.`

`QUESTION OVERLAP RISK ≈ CONSEQUENCE WINDOW / MEAN NEW-QUESTION SPACING, BUT ACTUAL ATTENTION DEBT REQUIRES STATE- AND HIT-RATE-AWARE MEASUREMENT.`

`SUSPENSE IS CHEAP WHEN THE PLAYER MAY RETURN TO THE MOTOR HOME ROUTINE WHILE A CONSEQUENCE QUESTION REMAINS OPEN.`

---

# 5. Mandatory duty vs optional expert inference

## SOURCED FACT

Normal operation asks the player to use the left BAR reference and follow suika when its branch appears. This is immediate mechanical duty.

Weak-cherry probability has a setting gradient from about 1/108.9 (setting 1) to about 1/81.5 (setting 6). Strategy sources also publish setting-sensitive channels in specific bonus combinations, CZ behavior and direct ART frequency.

Sources:
- https://nana-press.com/kaiseki/machine/50/908/
- https://1geki.jp/slot/s_madomagi2/5/
- https://slotjin.com/slot-tool/madokamagica2-settei/

## INTERPRETATION

Two different responsibilities coexist:

### Mandatory immediate duty
- execute the left reference aim;
- recognize whether extra suika following is required;
- obey state-specific navigation when it is presented;
- complete the current physical game correctly.

### Optional expert inference
- count weak cherries over a meaningful sample;
- remember/selectively classify specific bonus combinations;
- infer setting from CZ/direct-ART evidence;
- maintain a multi-channel statistical belief over hundreds/thousands of games.

These must not be scored as the same cognitive load. A beginner can complete legal/economic play without maintaining the full statistical model. A skilled player may **choose** to carry substantially more mental state than the machine physically demands per game.

## REUSABLE PRINCIPLE

`MANDATORY PLAY DUTY AND OPTIONAL INFERENCE DUTY MUST BE BUDGETED SEPARATELY.`

`MASTERY CAN REDUCE MOTOR COST WHILE INCREASING CHOSEN STATISTICAL LOAD.`

`A DEEP MACHINE SHOULD ALLOW EXPERT INFERENCE WITHOUT MAKING EXPERT-LEVEL MEMORY A PREREQUISITE FOR BASIC COMPETENT PLAY.`

---

# 6. 100G / 500G / 3-hour Game & Reel responsibility model

## 100G

Approximate exposure from sourced role probabilities:
- ~3 rare-role-class events;
- ~1 suika precision-follow occasion;
- the rest dominated by the stable left-reference routine and ordinary resolution.

Interpretation: 100G can teach the motor grammar quickly because the player repeats the same opening action many times while seeing a small number of meaningful branch cases.

### Principle
`ONBOARDING REPETITION SHOULD STABILIZE THE HOME MOVE BEFORE EXCEPTIONS ACCUMULATE.`

## 500G

Approximate exposure:
- ~15–16 rare-role-class events;
- ~5 suika follow occasions;
- several stronger roles/chance roles in expectation, but actual realized sequence can vary sharply.

At this horizon the player has enough events to learn the branch grammar, but not enough to make every setting-sensitive channel statistically stable. Thus 500G can produce **felt evidence without reliable certainty**.

### Principle
`THE SAMPLE SIZE AT WHICH A RULE BECOMES LEARNABLE MAY BE MUCH SMALLER THAN THE SAMPLE SIZE AT WHICH A STATISTICAL HYPOTHESIS BECOMES TRUSTWORTHY.`

## ~3 hours / illustrative 3,000G-scale reasoning

The exact number of games in three hours is player- and state-dependent, so 3,000G is used only as a round arithmetic lens, not as a measured three-hour throughput.

At 3,000G the expected exposure is roughly:
- ~89 rare-role-class events at setting 1;
- ~98 at setting 6;
- ~30 suika precision branches.

Motor cost should be highly compressed by then. The remaining Game & Reel fatigue risk is more likely to be:
- repeated consequence waiting after rare roles;
- maintaining several setting-inference channels;
- switching from role-follow to navigation/bonus/ART responsibilities;
- re-establishing HOME after temporary states.

### Principle
`LONG-SESSION REEL FATIGUE CAN MOVE FROM AIMING COST TO CONSEQUENCE-TRACKING COST.`

---

# 7. HOME-return failure boundary — Run 3 Game & Reel verdict

The evidence supports a **low physical branch density** relative to total games: most normal games use the same reference routine, rare-role-class events arrive roughly once per 31–34G by simple probability aggregation, and the clearest extra precision follow (suika) is about once per 100G.

But the consequence windows are not equally short. Same-game role identity may close quickly while CZ consequence can remain unresolved for 8–24G and direct ART for 4–6G when won. Therefore the relevant failure boundary is not `too many difficult STOPs`.

It is:

`NEW QUESTION ARRIVAL RATE × CONSEQUENCE-OPEN DURATION × NUMBER OF SIMULTANEOUS OPTIONAL INFERENCE CHANNELS`.

Provisional Game & Reel judgment:

**The real-machine rules plausibly protect HOME at the motor level, while the main long-session failure risk shifts upward into consequence tracking and optional statistical maintenance.**

This does not prove the machine avoids attention debt. Visual/Sound/QA Run 3 must test whether foreground presentation actually lets the player resume cheap reel operation while those consequence questions remain open, and whether multiple questions visibly/audibly stack.

---

# 8. Unresolved / contradictions

## UNRESOLVED

1. Exact proprietary stop-control tables by internal role / press position remain undisclosed and are not inferred.
2. The arithmetic rare-role density is an exposure model, not a measured presentation-interruption rate.
3. Actual overlap frequency between a live CZ/bonus/ART consequence window and a newly arriving rare role has not been measured from timestamped long-form play.
4. State-specific role presentation can change perceived duty even where physical role frequency is unchanged; this awaits Visual/Sound/QA evidence.
5. Exact three-hour game throughput varies too much to equate 3 hours with 3,000G; 3,000G here is explicitly illustrative.
6. Expert use of external/embedded counters can reduce statistical-memory burden; the degree to which players rely on such support belongs in QA, not inferred here.

---

# 9. Handoff to Visual & Mechanism Director

Run 3 Game & Reel asks Visual to test the following concrete timing hypothesis rather than repeat cabinet description:

1. After a rare-role STOP3, how quickly can the player visually reacquire the reel/lever/STOP HOME even if the LCD consequence question remains unresolved?
2. During documented 4–6G direct-ART or 8–24G CZ announcement windows, does the display demand continuous central attention, or can attention release between evidence events?
3. When a second rare role arrives during an unresolved first consequence, does the visual hierarchy distinguish `new physical role evidence` from `old consequence suspense`?
4. Can the reel surface remain the immediate work surface while the LCD carries delayed consequence state?

Shared metrics proposed for Run 3 integration:
- `PHYSICAL BRANCH DENSITY`
- `PRECISION-DUTY DENSITY`
- `ROLE CLASSIFICATION LATENCY`
- `CONSEQUENCE-OPEN DURATION`
- `QUESTION OVERLAP`
- `MANDATORY DUTY` vs `OPTIONAL INFERENCE DUTY`
- `HOME RE-ACQUISITION LATENCY`

## Gate

`CASE_STUDY_03_GAME_REEL_PHASE_A_RUN3_COMPLETE = TRUE`
`NEXT_FIXED_DIRECTOR = VISUAL_&_MECHANISM`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
