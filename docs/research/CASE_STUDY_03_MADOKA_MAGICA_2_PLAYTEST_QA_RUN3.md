# Case Study 03 — SLOT魔法少女まどか☆マギカ2 — Playtest & QA Run 3

> Role: fixed Playtest & QA Director
> Phase: `PHASE A — REAL MACHINE STUDY / RUN 3`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Scope: real-machine repeated-play reconstruction only. No browser play, implementation, prototype, asset production, or original-concept evaluation.

## 1. Run 3 question

Machine Run 2 set the shared loop as:

`TRUSTED HOME ROUTINE → ROLE/STATE QUESTION → PHYSICAL REEL EVIDENCE → CONSEQUENCE WINDOW → LOCAL REWARD OR PERSISTENT-STATE EDIT → RE-ANCHOR → TRUSTED HOME ROUTINE`

Run 3 asks where this loop stops being comfortable during real repeated play.

Primary QA target:

`MEASURE / TRIANGULATE THE HOME-RETURN FAILURE BOUNDARY`

The decisive distinction is not simply dry versus exciting play. It is whether unanswered questions, visual/audio claims and optional setting inference remain bounded enough that the player can repeatedly return to a cheap, trusted motor routine.

---

## 2. Evidence classes

- `SOURCED FACT` — documented rule/probability/specification.
- `FIELD REPORT` — dated player/session report; not universal truth.
- `DIRECT VIDEO OBSERVATION` — observation from long-form actual-play footage; recording/editing limits apply.
- `INTERPRETATION` — QA inference from multiple evidence classes.
- `REUSABLE QA PRINCIPLE` — transferable test, not protected expression/design.
- `UNRESOLVED / CONTRADICTION` — insufficient evidence.

No app behavior is used as proof of real-machine behavior.

---

## 3. Real-machine anchors for repeated-play reconstruction

`SOURCED FACT` — the machine is A+ART. Published figures commonly list BIG at about 150 coins, ART `マギカ☆ラッシュ` as 50G+α with about 1.5 coins/G, setting-1 BIG about 1/297.9 and ART first hit about 1/424.4. These figures establish that a 500G interval without a major reward is not an absurd edge case for QA.

Source:
- SLOT HACK, setting/spec summary: https://slothack.net/matome/1563/
- Pachiseven normal-play analysis: https://pachiseven.jp/machines/4939/cutout/4

`SOURCED FACT` — direct ART, when won, uses a short 4–6G precursor before notification. CZ routes can keep consequences open longer. Thus role recognition on the reels and consequence resolution are different clocks.

Source:
- Pachiseven normal-play analysis: https://pachiseven.jp/machines/4939/cutout/4

`SOURCED FACT` — setting inference is distributed across multiple channels. Weak cherry probability changes materially by setting; ART direct-hit and several CZ-related branches also carry setting information.

Sources:
- https://www.slopachi-quest.com/kisyubetsu/madomagi2/
- https://slothack.net/matome/1563/

`FIELD REPORT` — Pachiseven published a 3,506G session with 13 BIG, 7 ART entries and 10 CZ entries while the player continued to evaluate weak-cherry rate, direct ART, specific BIG patterns and post-BIG voice information. At 3,000G, several desired high-setting signals were still absent despite a favorable weak-cherry count.

Source:
- Pachiseven, 3,000G/3,506G practical setting-read report: https://pachiseven.jp/articles/detail/4539/1000

`FIELD REPORT` — another long session report explicitly records that the player reached about 3,000G before noticing that one CZ-related setting-check channel had not been tracked. This is useful evidence that expert motor familiarity does not eliminate cognitive bookkeeping load.

Source:
- https://www.slopachi-quest.com/article/madomagi2-zenzen/

---

# 4. Dry / low-reward reconstruction

## 4.1 First 5 minutes — beginner

`INTERPRETATION`

A beginner first needs a small operational contract, not the whole hidden system:

`BET / lever → left-reel BAR reference → classify ordinary vs rare-role branch → only increase aiming precision when required → STOP2/STOP3 → read immediate result → return to base routine`

The first five minutes are successful if the player learns:
1. where the default gaze/aim anchor is;
2. that not every game requires equal precision;
3. that some reel outcomes open a consequence question that may resolve later;
4. that the screen may carry context while the hands continue the same physical cycle.

`REUSABLE QA PRINCIPLE`

**ONBOARDING MUST TEACH THE CHEAP HOME LOOP BEFORE IT TEACHES EVERY EXCEPTION.**

If a beginner believes every spin needs maximum reel precision plus full LCD decoding plus setting inference, the machine will feel harder than its actual mandatory play duty.

## 4.2 Normal 100G — dry but not empty

Game & Reel Run 3 estimated rare-role-class exposure at roughly 1 per 33.7G for setting 1 and about 1 per 30.5G for setting 6, while the clearest extra-precision suika branch is around 1/99.9. These are exposure estimates, not guaranteed presentation interruptions.

`INTERPRETATION`

A plausible 100G dry block therefore contains many cheap HOME spins, a few role-classification branches, perhaps one precision-demand branch, and multiple occasions where a role closes immediately but downstream meaning remains open.

The QA question is not “did something flashy happen every 10G?” It is:

`HOW OFTEN MUST THE PLAYER HOLD A QUESTION IN MEMORY WHILE ALREADY PLAYING THE NEXT SPIN?`

Provisional metric:

`OPEN-QUESTION COUNT = number of unresolved consequence questions the player reasonably carries into the next physical spin`

For comfort, ordinary HOME play should repeatedly drive this count back toward zero or one. If it remains elevated for long stretches, the machine creates vigilance debt even when motor duty is easy.

`REUSABLE QA PRINCIPLE`

**A DRY 100G BLOCK CAN REMAIN HEALTHY WHEN THE MOTOR LOOP IS CHEAP AND QUESTIONS CLOSE OFTEN ENOUGH TO PREVENT BACKLOG.**

## 4.3 500G dry spell

At setting 1, published first-hit figures make long stretches without BIG/ART plausible. The machine also contains a 1000G BIG/ART ceiling (+ precursor), meaning a 500G dry stretch sits meaningfully inside normal risk rather than only at the terminal ceiling.

Source:
- Pachiseven: https://pachiseven.jp/machines/4939/cutout/4

`INTERPRETATION`

A 500G dry spell amplifies four different burdens:

1. **motor burden** — repeated lever/STOP cycle;
2. **consequence burden** — repeated short or medium unanswered questions after rare roles;
3. **vigilance burden** — visual/audio cues asking the player to keep checking whether a question is still alive;
4. **statistical-maintenance burden** — expert-chosen tracking of weak cherry, CZ source, direct ART, bonus type, voices and state.

The most important finding is that these burdens can move in opposite directions with mastery. Motor cost can fall while cognitive cost rises.

`REUSABLE QA PRINCIPLE`

**AUTOMATED MOTOR SKILL CAN HIDE GROWING COGNITIVE LOAD.**

A skilled player who no longer struggles to aim may voluntarily track more setting evidence, increasing long-session mental work.

---

# 5. Question closure and attention release

Sound Run 3 distinguishes cue functions as `OPEN / PROLONG / NARROW / CLOSE / RE-ANCHOR` and argues that persistent context need not remain acoustic foreground.

Visual Run 3 similarly distinguishes `CONTEXT PRESENT` from `ATTENTION CLAIM ACTIVE`.

Playtest & QA converts these into behavior tests.

## 5.1 Question Closure Rate

`QUESTION CLOSURE RATE = closed consequence questions ÷ opened consequence questions over a defined play block`

This is not a machine probability statistic. It is a QA annotation metric for video/session reconstruction.

Healthy repeated play should not merely open interesting questions; it must close enough of them that the player does not accumulate ambiguous obligations.

`REUSABLE QA PRINCIPLE`

**SUSPENSE NEEDS QUESTION CLOSURE; OTHERWISE IT BECOMES ADMINISTRATIVE UNCERTAINTY.**

## 5.2 Duty Release Latency

`DUTY RELEASE LATENCY = time/games from the last genuinely action-relevant cue until the player can safely return to cheap HOME attention`

A state or precursor may remain present after action duty has ended. That is acceptable.

`REUSABLE QA PRINCIPLE`

**STATE PRESENCE DOES NOT JUSTIFY CONTINUOUS VIGILANCE.**

## 5.3 Audio-rest test inside open questions

QA accepts the Sound finding:

`QUESTION OPEN + AUDIO REST` can be healthier than continuous prolonging cues, provided the player still knows what to do next.

Test:
- Does reduced foreground audio actually allow routine play?
- Or does silence make the player anxious because they cannot tell whether they missed information?

Pass condition:

`SAFE IGNORANCE` — the player can correctly continue without monitoring every moment.

`REUSABLE QA PRINCIPLE`

**A DEEP MACHINE SHOULD TEACH THE PLAYER WHEN NOT TO LISTEN OR WATCH SO HARD.**

---

# 6. Reward-rich reconstruction

A reward-rich comparison must use the same frame rather than assuming reward abundance equals quality.

Example reconstruction:

`rare role → short consequence window → BIG → post-BIG resolution / information → ART entry or return → ART HOME → extension/event branch → return to ART HOME → ART end → normal HOME`

The exact sequence varies by session; QA judges transitions, not one protected presentation pattern.

## 6.1 Local BIG satisfaction

BIG is a real local reward of about 150 coins. It must be evaluated before ART is credited.

Test:

`LOCAL COMPLETION TEST`

Ask after BIG-only outcome:
- Did the player experience a complete reward event?
- Was there a clear beginning, sustain and end?
- Does absence of ART make the entire BIG feel retrospectively invalid?

`REUSABLE QA PRINCIPLE`

**PARALLEL REWARD SYSTEMS FAIL IF EVERY LOCAL REWARD IS FELT ONLY AS A MISSED GATE TO THE PERSISTENT STATE.**

## 6.2 Base ART satisfaction

ART is 50G+α and about 1.5 coins/G, so it can be judged as a sustained play state before exceptional extensions are counted.

Test:

`BASE-ART INDEPENDENCE`

Exclude unusually strong extension branches and ask whether ordinary ART still changes:
- what the player watches;
- what the reels mean;
- what is at stake per spin;
- the reward cadence;
- the sense of a persistent state.

If only exceptional events make ART memorable, base ART is structurally weak even if the session was profitable.

## 6.3 Reward-rich claim stacking

Reward-rich play can create the opposite failure from dry play: too many simultaneous foreground claims.

Metric:

`CONCURRENT CLAIM COUNT = simultaneous action-relevant or resolution-relevant visual/audio/question claims`

Failure risk rises when:
- an old unresolved result remains foreground;
- a new reel duty appears;
- a reward/extension cue opens another question;
- setting information arrives;
- all are presented as equally urgent.

`REUSABLE QA PRINCIPLE`

**REWARD DENSITY MUST INCREASE CLOSURE AS WELL AS OPENINGS.**

More exciting events do not compensate for poor re-anchoring if each event leaves residue that the player must keep administratively tracking.

---

# 7. Reward satisfaction vs relief

This distinction is mandatory in Run 3.

`REWARD SATISFACTION` = positive value generated by the reward event/state itself.

`RELIEF` = positive feeling produced because an unpleasant or uncertain interval finally ended.

A hit after 500G can contain both.

QA separation questions:
1. If the same BIG occurred after 50G, would it still feel good?
2. Did the dry interval contain worthwhile play before the hit?
3. Is the player praising the reward, or merely the end of drought?
4. Did the reward resolve prior uncertainty cleanly, or only overwhelm it temporarily?

`REUSABLE QA PRINCIPLE`

**RELIEF AFTER DROUGHT IS NOT EVIDENCE THAT THE DROUGHT WAS GOOD.**

---

# 8. Beginner vs skilled-player load

## Beginner — likely mandatory focus

- default left-reel reference;
- recognize when extra precision is needed;
- follow navigation when state requires it;
- notice obvious state/result transitions;
- understand the current next action.

Primary risk: **intimidation by apparent information density**.

If the machine exposes every setting clue, presentation law and hidden-state implication as if mandatory, the beginner may misread optional depth as required work.

## Skilled player — reduced motor burden, expanded optional depth

A skilled player may:
- compress the aiming routine;
- classify roles faster;
- detect consequences earlier;
- track weak cherry rates;
- distinguish CZ source/state;
- track direct ART and bonus types;
- remember post-BIG voices;
- infer setting over thousands of games.

The 3,000G field report where a CZ tracking channel was forgotten is important: expert play can still overflow its own bookkeeping budget.

`REUSABLE QA PRINCIPLE`

**MASTERY SHOULD IMPROVE ATTENTION SELECTIVITY, NOT REQUIRE ATTENTION SATURATION.**

`REUSABLE QA PRINCIPLE`

**OPTIONAL DEPTH IS HEALTHY ONLY WHEN IGNORING IT DOES NOT BREAK SAFE PLAY.**

---

# 9. Three-hour fatigue model

Run 3 retains five fatigue channels and adds explicit question/claim measures.

### A. Motor repetition
Repeated BET/lever/STOP. Likely reduced by stable body grammar and practice.

### B. Precision fatigue
Concentrated on branches needing more accurate aiming rather than every spin.

### C. Vigilance fatigue
Generated when unresolved questions or cues imply the player must keep watching/listening.

### D. Semantic/statistical fatigue
Tracking multiple setting-evidence channels over long samples.

### E. Re-orientation fatigue
Cost of reconstructing where to look, what state is active and what action duty applies after temporary reward/CZ/BIG/ART contexts.

New QA measures:
- `OPEN-QUESTION COUNT`
- `QUESTION CLOSURE RATE`
- `DUTY RELEASE LATENCY`
- `HOME RECOGNITION LATENCY`
- `RE-ANCHOR LATENCY`
- `CONCURRENT CLAIM COUNT`
- `QUESTION-PROLONG CUE COUNT`
- `QUESTION-CLOSE CUE COUNT`
- `AUDIBLE RE-ANCHOR LATENCY`
- `OPTIONAL INFERENCE BURDEN`

`INTERPRETATION`

For this machine, Run 3 evidence points away from “three STOPs are physically exhausting” as the primary long-session failure boundary. The larger risk is **attention debt created by overlapping consequence windows plus optional statistical tracking**, especially during dry play.

---

# 10. Dry vs reward-rich comparison verdict

## Dry / low-reward

Strength:
- cheap physical HOME can remain stable;
- not every spin demands precision;
- persistent screen/audio context can coexist with routine motor play.

Failure boundary:
- repeated unresolved questions;
- ambiguous prolonging cues;
- expert bookkeeping stack;
- relief-seeking replacing intrinsic interest.

## Reward-rich

Strength:
- BIG and ART provide different reward timescales;
- temporary rewards can foreground without destroying the persistent state if return is clear;
- state value can change while physical controls remain familiar.

Failure boundary:
- simultaneous claims opening faster than they close;
- BIG judged only as ART gate;
- base ART judged only by exceptional extensions;
- return to HOME technically occurring before the player has actually reconstructed state/action/attention.

Overall provisional QA verdict:

`THE HOME-RETURN ARCHITECTURE IS PLAUSIBLY ROBUST AT THE MOTOR LEVEL, BUT ITS LONG-SESSION FAILURE BOUNDARY IS GOVERNED BY QUESTION BACKLOG, VIGILANCE DUTY AND OPTIONAL STATISTICAL MAINTENANCE MORE THAN BY THE THREE-STOP ROUTINE ITSELF.`

And:

`DEPTH REMAINS HEALTHY WHEN QUESTIONS OPEN, RESOLVE AND RELEASE ATTENTION; DEPTH TURNS INTO FATIGUE WHEN THE PLAYER MUST CARRY TOO MANY UNRESOLVED OBLIGATIONS INTO THE NEXT ORDINARY SPIN.`

---

# 11. Reusable QA principles added by Run 3

1. `ONBOARDING MUST TEACH THE CHEAP HOME LOOP BEFORE IT TEACHES EVERY EXCEPTION.`
2. `A DRY 100G BLOCK CAN REMAIN HEALTHY WHEN THE MOTOR LOOP IS CHEAP AND QUESTIONS CLOSE OFTEN ENOUGH TO PREVENT BACKLOG.`
3. `AUTOMATED MOTOR SKILL CAN HIDE GROWING COGNITIVE LOAD.`
4. `SUSPENSE NEEDS QUESTION CLOSURE; OTHERWISE IT BECOMES ADMINISTRATIVE UNCERTAINTY.`
5. `STATE PRESENCE DOES NOT JUSTIFY CONTINUOUS VIGILANCE.`
6. `A DEEP MACHINE SHOULD TEACH THE PLAYER WHEN NOT TO LISTEN OR WATCH SO HARD.`
7. `PARALLEL REWARD SYSTEMS FAIL IF EVERY LOCAL REWARD IS FELT ONLY AS A MISSED GATE TO THE PERSISTENT STATE.`
8. `REWARD DENSITY MUST INCREASE CLOSURE AS WELL AS OPENINGS.`
9. `RELIEF AFTER DROUGHT IS NOT EVIDENCE THAT THE DROUGHT WAS GOOD.`
10. `MASTERY SHOULD IMPROVE ATTENTION SELECTIVITY, NOT REQUIRE ATTENTION SATURATION.`
11. `OPTIONAL DEPTH IS HEALTHY ONLY WHEN IGNORING IT DOES NOT BREAK SAFE PLAY.`
12. `DEPTH TURNS INTO FATIGUE WHEN UNRESOLVED OBLIGATIONS OUTLIVE THE ATTENTION CLAIM THAT MADE THEM INTERESTING.`

These are abstract QA principles only. No protected character, audiovisual asset, exact presentation or proprietary control design is reusable.

---

# 12. Unresolved / evidence limits

- No defensible timestamped count of exact cue density per 100G was established from available compressed long-form footage.
- Hall/video recordings cannot establish real cabinet SPL, speaker response, low-frequency body transmission or exact attention capture.
- No universal beginner/expert eye-tracking data exists here; beginner/expert attention models remain evidence-grounded interpretation, not biometric fact.
- Field reports are individual sessions and cannot prove universal emotional response.
- Exact numerical threshold at which `OPEN-QUESTION COUNT` becomes fatiguing remains a future human/real-play measurement problem.
- Exact division between intrinsic normal-play enjoyment and relief cannot be inferred from payout/session result alone.

Therefore:

`REALITY_BASELINE_COMPLETE = FALSE`

---

# 13. Handoff to Machine Director

Case Study 03 Phase A Run 3 specialist pass is now complete across:
- Game & Reel
- Visual & Mechanism
- Sound & Experience
- Playtest & QA

Machine Director should integrate, not reopen broad description.

Integration question:

**Can the machine keep `OPEN-QUESTION COUNT`, attention claims and optional inference below a tolerable backlog across both dry and reward-rich play, while reliably returning the player to a low-cost HOME routine?**

Standing human direction to preserve after Run 3 integration:
- remain in real-machine study;
- do not return to SIGNAL/FORGE/VAULT or original concepts;
- after this Madoka Magica 2 cycle is closed, select a deliberately different lineage for the next case study;
- the next selected machine should have an official or properly licensed smartphone app version so later research can again compare real machine → smartphone translation;
- the app must not be treated as proof of real-machine rules.

Human Gate remains closed.
