# Case Study 02 — 新ハナビ (2021)
## Playtest & QA Director — Deep Dive Run 3

> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Scope: real repeated-play behavior, attention switching, error recovery, mastery automation and sparse-presentation endurance. No original-concept testing, browser implementation or prototype work.

## 0. Run 3 purpose

Run 1/2 established novice obligation load, intrinsic-vs-economic attention, dry-spell motive, technical-intervention regret and long-session drift. Run 3 asks a narrower question:

**When the machine deliberately stays sparse, can players reliably switch between “mostly automatic ordinary play” and short high-attention moments without either missing information or living in permanent vigilance?**

Evidence labels:
- `SOURCED FACT` — official/manual/major strategy documentation;
- `VIDEO / FIELD OBSERVATION` — documented real-machine behavior or long-form actual-play framing;
- `INTERPRETATION` — QA reconstruction, not manufacturer disclosure;
- `UNRESOLVED` — requires controlled human testing or stronger evidence.

No undisclosed stop-control table, physical timing value, audio level or proprietary algorithm is inferred.

---

## 1. The real loop is not “always concentrate”; it is “know when concentration is required”

### SOURCED FACT
Published RT procedure explicitly distinguishes high-duty and low-duty games.

During 花火チャレンジ:
- reverse-stop navigation requires the player to execute the JAC-IN avoidance procedure;
- JAC IN uses a different instructed procedure;
- ordinary games outside navigation/flash conditions can be stopped freely.

During 花火GAME:
- flash/notice conditions require ordinary small-role handling;
- otherwise free stopping is allowed.

Sources:
- https://nana-press.com/kaiseki/machine/134/3869/
- https://1geki.jp/slot/l_hanabi/81/

### INTERPRETATION
This makes the practical skill loop:

`LOW DUTY → CUE DETECTED → TASK MODE → EXECUTE → VERIFY → RELEASE → LOW DUTY`

not:

`HIGH DUTY → HIGH DUTY → HIGH DUTY ...`

The difficult part is therefore not only whether the required aim is fair. It is whether the player can **enter and exit attention mode cleanly**.

### New QA principle
`SKILLFUL PLAY REQUIRES ATTENTION SWITCHING, NOT PERMANENT MAXIMUM ATTENTION.`

### Reusable QA test
`ATTENTION SWITCH LATENCY TEST`

For each task-bearing cue, measure separately:
- cue onset → player recognition;
- recognition → change in stop order/aiming behavior;
- execution end → return to comfortable ordinary pace.

A successful technical action with a very slow attention switch can still produce a tiring machine.

---

## 2. Beginner intimidation is partly uncertainty about when it is safe to relax

### VIDEO / FIELD OBSERVATION
A beginner-facing actual-play program explicitly frames its 新ハナビ session as practice toward delayed reverse-stop play and RT avoidance skill rather than treating those skills as already mastered.

Source:
- https://www.niconana.net/movie/%E3%80%90%E6%96%B0%E3%83%8F%E3%83%8A%E3%83%93%E3%80%91%E6%94%BB%E7%95%A5%E3%81%B8%E3%81%AE%E9%81%93-%E9%81%85%E3%82%8C%E9%80%86%E6%8A%BC%E3%81%97%E3%81%A8%E3%83%8F%E3%82%BA%E3%82%B7%E3%81%AE%E4%B8%8A/

Published guides also separate REG into beginner/intermediate/advanced procedures instead of requiring one universal highest-skill route.

Sources:
- https://1geki.jp/slot/s_shinhanabi/63/
- https://up-slot.com/shinhanabi-info/

### INTERPRETATION
A novice may not know only “what to do”; they may also not know **when they may safely stop thinking about it**. This creates defensive play:

`uncertain cue literacy → monitor everything → slow every game → fatigue/intimidation`

The expert advantage is therefore partly negative knowledge:

`I know this game does NOT require intervention.`

### New principle
`MASTERY INCLUDES KNOWING WHEN NOTHING SPECIAL IS REQUIRED.`

This connects directly to the shared Machine principle `THE MACHINE MUST MANAGE WHAT THE PLAYER CAN IGNORE`.

### QA distinction
Track two novice errors separately:
- `ACTION ERROR` — player reacts incorrectly to a real task cue;
- `FALSE VIGILANCE` — player behaves as if a task cue exists when it does not.

A machine can have few outright misses while still intimidating novices through excessive false vigilance.

---

## 3. Sparse presentation makes false alarms more expensive

### SOURCED FACT
新ハナビ uses deviations such as delayed reel-start sound, blackout/flash relationships and a mini-display while preserving the physical reels as the main information surface. Published analysis makes these deviations meaningful rather than constant decorative noise.

Sources:
- https://up-slot.com/shinhanabi-info/
- https://www.slopachi-quest.com/article/sin-hanabi-settei/

### INTERPRETATION
Sparse presentation has a hidden dependency: the player must be able to trust ordinary REST state. If normal games frequently look/sound almost special without carrying useful information, the player starts checking everything.

That produces:

`FALSE ALARM RATE ↑ → ATTENTION RELEASE ↓ → ORDINARY LOOP FATIGUE ↑`

### New QA test
`FALSE ALARM BURDEN TEST`

Across 100 ordinary games, count:
- player attention shifts caused by actual meaningful cues;
- attention shifts caused by misunderstood but legitimate cues;
- attention shifts caused by presentation that looks/sounds important but resolves to no useful distinction;
- how long the player remains cautious after each event.

### Principle
`SPARSE PRESENTATION ONLY SAVES ATTENTION IF ORDINARY STATE IS TRUSTWORTHY.`

---

## 4. Missed reach-eye versus recognized reach-eye should be tested as different emotional events

### INTERPRETATION
Two players can receive the same underlying bonus and have different experiences:

Expert:
`STOP relation → suspicion → contradiction/reach-eye recognition → self-confirmation → bonus entry`

Beginner:
`STOP relation unnoticed → next cue/explicit indication → bonus recognized → entry`

The payout result can be identical while the **discovery reward** differs.

### QA protocol
`RETROSPECTIVE DISCOVERY CHECK`

After a bonus is recognized, ask/observe:
- when did the player first believe a bonus might exist?
- which STOP or cue caused that belief?
- did the player later realize an earlier reach-eye had already established it?
- did that realization feel educational, frustrating, or irrelevant?

### Principle
`MISSED INFORMATION IS NOT ALWAYS FAILURE; IT CAN BE FUTURE LEARNING MATERIAL — IF THE PLAYER CAN CONNECT IT AFTERWARD.`

If the player never learns what they missed, the machine's theoretical depth is not accessible depth.

---

## 5. Bonus relief must be separated from “I solved it” satisfaction even more aggressively in long droughts

### SOURCED FACT
Published setting-1 combined bonus reference is approximately 1/156.0, while higher settings improve the combined rate (setting 6 around 1/131.6). No AT/CZ milestone is needed to break a long no-bonus stretch.

Sources:
- https://up-slot.com/shinhanabi-info/
- https://www.nankaikoya.jp/shinhanabi-settei/

### INTERPRETATION
A 500G drought increases the emotional amplitude of the eventual bonus even if the preceding 499G were weak. Therefore post-hit interviews are especially contaminated by relief.

Run 2 separated `RELIEF / DISCOVERY / EXECUTION PRIDE / PAYOUT`. Run 3 adds **time separation**.

### New QA test
`DELAYED DROUGHT VERDICT`

For a 300G+ no-bonus segment, collect judgments at:
- G+0 immediately on bonus recognition;
- after bonus/RT has completed;
- after 30 returned-to-normal games.

If “the drought was fun” appears only at G+0 and decays after return to normal, relief likely contaminated the verdict.

### Principle
`THE EMOTIONAL PEAK AFTER A DROUGHT SHOULD NOT RETROACTIVELY REWRITE THE DROUGHT.`

---

## 6. Setting advantage changes reinforcement frequency, but should not be mistaken for a different base game

### SOURCED FACT
Published values show setting differences in bonus probability and multiple setting-sampling elements, including small roles and RT-state outcomes. Setting 6 has a higher combined bonus rate than setting 1, and RTハズレ rates are also used as setting information.

Sources:
- https://www.nankaikoya.jp/shinhanabi-settei/
- https://nana-press.com/kaiseki/machine/134/3873/

### INTERPRETATION
A high-setting session provides more frequent payout/reward reinforcement and more positive economic confidence. That can improve mood without proving that the **ordinary three-STOP loop itself** is better.

### QA comparison requirement
For setting1-like and high-setting-like field sessions, compare separately:
- ordinary-game voluntary reel reading;
- strategy sampling behavior;
- frustration during no-bonus intervals;
- discovery reactions;
- pace;
- technical-intervention accuracy.

Do not compare only total enjoyment or win/loss.

### Principle
`REINFORCEMENT FREQUENCY CAN MASK BASE-LOOP QUALITY IN BOTH DIRECTIONS.`

Low setting can make a healthy loop feel harsher; high setting can make a weak loop look healthier.

---

## 7. Technical intervention creates error recovery behavior, not just success/failure counts

### SOURCED FACT / FIELD CONTEXT
REG has beginner/intermediate/advanced procedures whose published full-strategy return differs materially. A real 5,000G-class field account documented multiple REG misses and explicitly decided to slow play to reduce further errors.

Sources:
- https://1geki.jp/slot/s_shinhanabi/63/
- https://up-slot.com/shinhanabi-info/
- field record retained from Run 2: https://ameblo.jp/teamato4545/entry-12961562484.html

### INTERPRETATION
The most revealing moment may be **the game after a miss**.

Possible recovery patterns:
- healthy: brief acknowledgement → pace correction → confidence restored;
- punitive: miss → prolonged hesitation → overchecking → second miss;
- avoidance: player downgrades difficulty or stops using an optional strategy;
- escalation: player speeds up/frustrates and compounds errors.

### New QA test
`POST-MISS RECOVERY WINDOW`

For each intervention miss, record the next 10 relevant actions:
- pace change;
- aim hesitation;
- difficulty-route change;
- repeated miss;
- verbal/self-attributed frustration;
- recovery to baseline rhythm.

### Principle
`A SKILL SYSTEM IS JUDGED BY HOW PLAY RECOVERS AFTER FAILURE, NOT ONLY BY HOW SUCCESS IS REWARDED.`

This sharpens Run 2 `REGRET ATTRIBUTION MAP`.

---

## 8. Expert play becomes quieter because routine decisions compress

### VIDEO / FIELD OBSERVATION
An expert-oriented 2025 actual-play program centers on a long 新ハナビ session and specifically on high-skill REG play rather than beginner explanation. The episode runs roughly 44 minutes and follows play from morning into the day, demonstrating that expert viewing/playing interest can be carried by repeated ordinary and skill events rather than constant staged escalation.

Source:
- https://yutura.net/channel/3934/video/UHi1cInu2tM/

This edited video cannot prove uninterrupted comfort or exact gaze behavior.

### INTERPRETATION
Expertise should reduce conscious handling of routine cases:

`recognize ordinary shape quickly → ignore safe information → spend attention only where ambiguity/reward exists`

This is not “less engagement.” It is **more selective engagement**.

### New QA metric
`ATTENTION SELECTIVITY RATIO`

Compare:

`meaningful attention shifts / total attention shifts`

between novice and expert players.

A mature player should not necessarily have more total attention events. They may have fewer, more precise ones.

### Principle
`MASTERY SHOULD IMPROVE ATTENTION SELECTIVITY, NOT REQUIRE ATTENTION SATURATION.`

---

## 9. Return from BIG/RT to normal is a test of whether the reels are genuinely the product

### SOURCED FACT
BIG leads into 花火チャレンジ and then potentially 花火GAME; those RT phases temporarily change responsibility while preserving the same physical reels and three STOP buttons.

Sources:
- https://nana-press.com/kaiseki/machine/134/3869/
- https://nana-press.com/kaiseki/machine/134/3873/

### INTERPRETATION
The crucial QA moment is not only RT entry. It is the first 30 normal games after RT ends.

If the player immediately resumes:
- spontaneous reel reading;
- aim variation;
- slip/reach-eye anticipation;
then normal play likely retains independent value.

If behavior collapses into:
- rapid mechanical stopping;
- waiting only for the next obvious cue;
then reward-state stimulation may have temporarily exposed weakness in the baseline.

### Run 3 refinement of existing test
`POST-REWARD BASELINE RECOVERY TEST` should now measure **recovery time**, not only pass/fail.

Metric:
`RT end → first spontaneous non-required reel-reading action`

### Principle
`RETURN QUALITY IS MEASURED BY HOW QUICKLY THE BASE GAME RECLAIMS VOLUNTARY ATTENTION.`

---

## 10. Three-hour fatigue should separate sensory fatigue, decision fatigue and precision fatigue

### INTERPRETATION
Run 2 correctly kept three-hour fatigue unresolved. Run 3 adds a decomposition because “tired” is too coarse.

- `SENSORY FATIGUE` — eyes/ears/hall environment;
- `DECISION FATIGUE` — repeated role/cue interpretation;
- `PRECISION FATIGUE` — aiming accuracy and motor consistency;
- `VIGILANCE FATIGUE` — inability to relax because meaningful cues may appear;
- `MOTIVATIONAL FATIGUE` — ordinary questions stop feeling worth answering.

These can move independently. An expert may have low decision fatigue but increasing precision fatigue. A novice may have high vigilance fatigue before physical aiming deteriorates.

### Reusable protocol
At 0–15 / 45–60 / 105–120 / 165–180 min, separately score:
- cue misses;
- false alarms;
- aiming misses;
- decision hesitation;
- self-selected pace;
- spontaneous reel-reading events;
- desire to simplify strategy;
- desire to stop despite economically favorable continuation.

### Principle
`LONG-SESSION FATIGUE IS MULTI-CHANNEL; FINAL “TIRED / NOT TIRED” RATINGS HIDE THE FAILURE MODE.`

---

## 11. Sparse presentation engagement test — Run 3 verdict

### Evidence-supported interpretation
新ハナビ demonstrates a plausible sparse-presentation loop because ordinary games still carry:
- aiming responsibility;
- slip/stop-form information;
- small-role handling;
- reach-eye discovery;
- delayed/blackout/flash deviations;
- setting samples;
- optional alternate stop-order questions.

But sparse presentation itself is **not** the source of engagement. Sparse presentation works only if the underlying STOP/reel information is worth attending to.

### Principle
`SPARSITY IS AN AMPLIFIER OF UNDERLYING GAME QUALITY, NOT A SUBSTITUTE FOR IT.`

If reel information is rich, restraint protects it. If reel information is weak, restraint exposes the weakness faster.

---

## 12. Beginner vs skilled player — Run 3 delta

| QA dimension | Beginner | Skilled player | QA risk |
|---|---|---|---|
| Ordinary game | may monitor too much because safe-to-ignore cases are unknown | routine cases compress into motor/visual memory | false vigilance can masquerade as engagement |
| Cue onset | first identifies whether something happened | quickly maps cue to an information question | slow switch latency creates fatigue |
| Reach eye | may recognize only after explicit confirmation | can self-confirm during STOP sequence | theoretical depth may be inaccessible depth |
| Skill miss | may lose confidence or overcorrect | adjusts pace/route and continues | post-miss recovery may be punitive |
| RT | follows visible instructions consciously | alternates task and low-duty modes efficiently | inability to release attention after task |
| High setting | feels more frequent positive reinforcement | also samples setting evidence | win-rate mood can mask loop quality |
| 3 hours | vigilance/decision load can remain high | routine decisions compress, precision fatigue remains | different fatigue channels require different measurement |

---

## 13. Reusable QA principles added in Run 3

- `SKILLFUL PLAY REQUIRES ATTENTION SWITCHING, NOT PERMANENT MAXIMUM ATTENTION.`
- `MASTERY INCLUDES KNOWING WHEN NOTHING SPECIAL IS REQUIRED.`
- `SPARSE PRESENTATION ONLY SAVES ATTENTION IF ORDINARY STATE IS TRUSTWORTHY.`
- `MISSED INFORMATION CAN BECOME LEARNING MATERIAL ONLY IF THE PLAYER CAN CONNECT IT AFTERWARD.`
- `THE EMOTIONAL PEAK AFTER A DROUGHT SHOULD NOT RETROACTIVELY REWRITE THE DROUGHT.`
- `REINFORCEMENT FREQUENCY CAN MASK BASE-LOOP QUALITY IN BOTH DIRECTIONS.`
- `A SKILL SYSTEM IS JUDGED BY HOW PLAY RECOVERS AFTER FAILURE, NOT ONLY BY HOW SUCCESS IS REWARDED.`
- `MASTERY SHOULD IMPROVE ATTENTION SELECTIVITY, NOT REQUIRE ATTENTION SATURATION.`
- `RETURN QUALITY IS MEASURED BY HOW QUICKLY THE BASE GAME RECLAIMS VOLUNTARY ATTENTION.`
- `LONG-SESSION FATIGUE IS MULTI-CHANNEL.`
- `SPARSITY IS AN AMPLIFIER OF UNDERLYING GAME QUALITY, NOT A SUBSTITUTE FOR IT.`

New reusable tests:
- `ATTENTION SWITCH LATENCY TEST`
- `FALSE ALARM BURDEN TEST`
- `RETROSPECTIVE DISCOVERY CHECK`
- `DELAYED DROUGHT VERDICT`
- `POST-MISS RECOVERY WINDOW`
- `ATTENTION SELECTIVITY RATIO`
- refined `POST-REWARD BASELINE RECOVERY TEST`

---

## 14. Cross-Director connections

### With Game & Reel Run 2
`REEL RESPONSIBILITY SHOULD OPEN AND CLOSE WITH INFORMATION NEED` becomes a measurable human requirement: players must enter task mode quickly and leave it quickly. `MASTERY SHOULD COMPRESS ROUTINE COST WHILE EXPANDING OPTIONAL QUESTIONS` is behaviorally visible as increasing attention selectivity.

### With Visual Run 3
`TEMPORARY TASK PRIORITY SHOULD EXPIRE CLEANLY` maps directly to attention-switch release. A visual task cue is not successful if the player remains uncertain for several subsequent ordinary games.

### With Sound Run 3
`AUDIO PRIORITY SHOULD EXPIRE WHEN THE PLAYER'S RESPONSIBILITY EXPIRES` and `PLAYER KNOWLEDGE CAN BE A VALID END CONDITION FOR PRESENTATION` predict lower vigilance debt. QA adds false-alarm burden and release latency as observable tests.

### With Machine Integration Run 2
`DEPTH = LEARNABLE MEANING - UNSUSTAINABLE ATTENTION DEBT` now gains a behavioral decomposition:

`ATTENTION DEBT = missed release + false vigilance + precision strain + redundant checking + motivation decay`

---

## 15. Contradictions / cautions

1. Edited long-form video establishes realistic repeated-play patterns, not uninterrupted three-hour comfort.
2. Expert commentary can make sparse play look information-dense because the expert verbalizes knowledge a novice does not possess.
3. Published difficulty routes prove accessible options exist, not that novices naturally choose the right route.
4. Higher setting reinforcement can improve session mood while contaminating judgment of ordinary-loop quality.
5. A low raw miss count can hide severe false vigilance and slowed play.
6. Recognition after explicit bonus notification must not be counted as self-discovery.
7. Current 2026 スマスロ ハナビ information remains excluded from 2021 新ハナビ mechanical claims.

---

## 16. UNRESOLVED after Run 3

Still requires controlled human observation or stronger evidence:
- first-five-minute false-vigilance rate;
- cue-recognition and attention-switch latency by skill tier;
- exact proportion of missed reach eyes later understood retrospectively;
- uninterrupted 500G no-bonus motive drift;
- setting1 vs high-setting matched-session intrinsic engagement;
- post-REG-miss recovery duration and repeated-error probability;
- three-hour sensory/decision/precision/vigilance fatigue curves;
- whether expert selective attention measurably reduces total fatigue;
- physical reel readability and actual hall-noise effects.

These remain `UNRESOLVED`; they are not to be filled by inference.

---

## 17. Gate / handoff

Playtest & QA reality study is now `DEEP_DIVE_RUN_3_COMPLETE` for the current Case Study 02 pass.

No original concept was tested. No browser play, implementation, prototype, asset, SIGNAL/FORGE/VAULT ranking or Human Gate advancement was performed.

Retain:
- Stage 1 real-machine study;
- `HUMAN_GATE_1_NOT_READY`;
- `REALITY_BASELINE_COMPLETE = FALSE`;
- production denied until explicit `HUMAN_MACHINE_APPROVED`.

Next Machine Director should integrate Run 3 specialist findings only if the latest main still keeps Case Study 02 current.