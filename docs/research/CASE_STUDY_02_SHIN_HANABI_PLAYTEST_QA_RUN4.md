# Case Study 02 — 新ハナビ (2021)
## Playtest & QA Director — Deep Dive Run 4

> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Scope: real repeated-play reconstruction only. No original-concept desk test, browser play, prototype, implementation, asset work, SIGNAL/FORGE/VAULT ranking or refinement.

## 0. Gate / run purpose

Latest `main` confirms Case Study 01「スマスロ北斗の拳」has completed the current cycle through all five fixed Directors. Case Study 02「新ハナビ」is the current shared real-machine study object. Machine Run 3 is integrated; Game & Reel Run 3, Visual & Mechanism Run 4 and Sound & Experience Run 4 are complete; this run advances only Playtest & QA.

Run 1–3 established novice obligation load, dry-spell motive, attention selectivity, false vigilance, skill-error recovery and post-RT return quality. Visual/Sound Run 4 add a sharper cross-discipline question:

**After a special visual/audio duty ends, does the player naturally regain the ordinary reel-centered play contract, or does attention remain displaced?**

Evidence labels:
- `SOURCED FACT` — official/manual/major strategy documentation;
- `VIDEO / FIELD OBSERVATION` — published real-play framing or field log;
- `INTERPRETATION` — QA reconstruction, not manufacturer disclosure;
- `REUSABLE QA PRINCIPLE` — transferable test principle, not a Chappy5 production decision;
- `UNRESOLVED` — needs controlled human testing or stronger evidence.

No protected sounds, melodies, visual designs or undisclosed stop-control tables are reproduced or inferred.

---

## 1. Repeated-play reference facts retained

### SOURCED FACT — machine loop
Published material for 新ハナビ documents:
- BIG maximum 202枚;
- REG maximum 112枚;
- BIG afterflow into 花火チャレンジ;
- 花火チャレンジ maximum 20G / about 0.3枚 per G;
- JAC-IN avoidance can extend 花火チャレンジ;
- JAC IN moves play into 花火GAME;
- 花火GAME is 20G / about 0.6枚 per G;
- both RT phases end if a bonus is established;
- BGM停止 is documented as a bonus cue in RT;
- outside task-bearing navigation/flash conditions, RT play can include low-duty/free-stop games.

Sources:
- https://nana-press.com/kaiseki/machine/134/3869/
- https://nana-press.com/kaiseki/machine/134/3872/
- https://nana-press.com/kaiseki/machine/134/3873/
- https://p.hisshobon.jp/machine/3661/1/82180
- https://kenslo65536.com/kaiseki/hanabi-new.html

### SOURCED FACT — setting / technical-play relationship
Published values commonly list setting 1 bonus combination around 1/156.0 and setting 6 around 1/131.6, with nominal setting-1 payout 98.1% and full-strategy reference around 102.0%.

Sources:
- https://www.atari7.com/slot/shin-hanabi.php
- https://kenslo65536.com/kaiseki/hanabi-new.html

### VIDEO / FIELD OBSERVATION — beginner framing
A beginner-facing actual-play episode explicitly treats delayed reverse-stop play and RT JAC-IN avoidance as skills to practice rather than assumed knowledge. The published episode begins actual play around 01:10 and reports the session result around 35:23.

Source:
- https://www.niconana.net/movie/%E3%80%90%E6%96%B0%E3%83%8F%E3%83%8A%E3%83%93%E3%80%91%E6%94%BB%E7%95%A5%E3%81%B8%E3%81%AE%E9%81%93-%E9%81%85%E3%82%8C%E9%80%86%E6%8A%BC%E3%81%97%E3%81%A8%E3%83%8F%E3%82%BA%E3%82%B7%E3%81%AE%E4%B8%8A/

### VIDEO / FIELD OBSERVATION — long session existence
A published 2025 video is explicitly framed around a 7,800G 新ハナビ session. This supports long-session relevance but, because the video is edited to roughly 36 minutes, it is not proof of uninterrupted 3-hour comfort or exact gaze behavior.

Source:
- https://yutura.net/channel/98894/video/-uhM0NgM1pY/

### FIELD OBSERVATION — economic continuation and technical miss
A 5,000G-class field log reports an initial BIG only after 500G+, later REG misses, and an explicit decision to slow play because five misses had economic cost. The same log also describes satisfaction from seeing pleasing BIG-confirming patterns while continuing a setting-1-like session for strategic/economic reasons.

Source:
- https://ameblo.jp/teamato4545/entry-12961562484.html

Another 5,000G log describes a BIG interval approaching 900G after an early REG/BIG sequence, while the player continued to sample ordinary small-role performance and later reward swings.

Source:
- https://ameblo.jp/teamato4545/entry-12956947301.html

These are individual field reports, not universal player behavior.

---

## 2. First 5 minutes — onboarding must teach the return state, not only the task state

### INTERPRETATION
Run 3 established that novices can suffer `FALSE VIGILANCE`: they do not know when special attention is unnecessary. Run 4 adds a complementary onboarding problem.

A beginner can successfully learn:
- where to aim left;
- when to follow ice;
- that delayed timing may matter;
- that RT can demand a different stop order;

and still fail to learn **what ordinary looks and feels like after each temporary task**.

If every learned rule is stored as “something I must keep checking,” the first five minutes produce cumulative obligation instead of a stable base routine.

### Reconstructed first-five-minute QA path
1. Establish one safe ordinary aiming routine.
2. Establish which result requires additional small-role follow-up.
3. Let at least one ordinary game resolve without special interpretation duty.
4. Introduce one meaningful deviation/task.
5. Confirm that after resolution the player can return to the same ordinary routine without searching for a new instruction.

### REUSABLE QA PRINCIPLE
`ONBOARDING MUST TEACH THE HOME STATE, NOT ONLY THE EXCEPTIONS.`

### Test
`HOME-STATE RECOGNITION TEST`

After a special cue resolves, ask/observe whether a novice can immediately answer behaviorally:
- “What do I do now?”
- “What can I safely ignore now?”

No verbal questionnaire is required if behavior already shows uncertainty through unnecessary slowing, repeated display checks or altered stop order.

---

## 3. 100G normal — attention should return to reels without a reset ceremony

### INTERPRETATION
Visual Run 4 states that attention claims should have a short return path to the primary precision surface. Sound Run 4 states that the normal machine should become audible again after a special duty ends.

For QA, the corresponding behavioral question is:

**How much player work is required to become an ordinary-game player again?**

A healthy sequence is:

`ordinary rhythm → meaningful deviation → task/inference → resolution → ordinary aim resumes`

A costly sequence is:

`ordinary rhythm → deviation → resolution → player keeps checking panel/audio/state → hesitates → reconstructs ordinary procedure → rhythm resumes`

### New metric
`RE-ANCHOR COST`

Count, after each task-bearing event:
- games until ordinary aiming pace returns;
- unnecessary panel/display rechecks;
- false stop-order changes;
- false listening/visual reorientations;
- delay until first voluntary reel-reading action.

### REUSABLE QA PRINCIPLE
`RETURN IS A TASK SWITCH, NOT AN EMPTY GAP.`

### REUSABLE QA PRINCIPLE
`A GOOD SPECIAL EVENT ENDS BY RESTORING THE ORDINARY PLAY CONTRACT, NOT MERELY BY STOPPING ITS EFFECTS.`

---

## 4. Missed reach eye and missed technical input require different recovery models

### INTERPRETATION
Run 3 already separated recognition from execution. Run 4 makes the repair path explicit.

A missed reach eye is primarily an **information miss**:
- player failed to recognize what the machine had already revealed;
- later confirmation can create retrospective learning;
- economic loss may be small or absent depending on subsequent behavior.

A REG/RT intervention miss is primarily an **execution miss**:
- player understood a task existed;
- physical timing/aim failed;
- published strategy gives that failure economic consequence.

These should not be combined into a single “skill failure rate.”

### New QA matrix

| Failure type | Immediate question | Healthy recovery | Failure risk |
|---|---|---|---|
| Reach-eye recognition miss | “Can the player discover what was missed?” | later connection expands knowledge | hidden depth remains inaccessible |
| Small-role handling miss | “Did player understand the obligation?” | correct rule/aim next opportunity | permanent defensive slowing |
| REG technical miss | “Can pace/aim be recalibrated?” | brief correction, confidence returns | regret loop / overcontrol |
| RT JAC-IN avoidance miss | “Was task/cue/action relation clear?” | error understood without global confusion | player distrusts whole RT procedure |

### REUSABLE QA PRINCIPLE
`INFORMATION FAILURE AND EXECUTION FAILURE NEED DIFFERENT RECOVERY PATHS.`

### Test refinement
Combine Run 3 `RETROSPECTIVE DISCOVERY CHECK` and `POST-MISS RECOVERY WINDOW`, but never merge their scores.

---

## 5. 500G drought — “still playing well” is not proof of “still enjoying normal play”

### FIELD OBSERVATION
The 5,000G field report with an initial 500G+ BIG also explicitly frames continuation in terms of setting-1 economics/technical-machine viability, while separately expressing satisfaction from pleasing bonus-confirming patterns.

Source:
- https://ameblo.jp/teamato4545/entry-12961562484.html

A separate 5,000G report describes a BIG interval approaching 900G while still sampling small-role data and continuing the session.

Source:
- https://ameblo.jp/teamato4545/entry-12956947301.html

### INTERPRETATION
This reinforces Run 2/3's motive split. During a 500G drought, three things can remain simultaneously true:
- player is executing a rational strategy;
- player is still reading reels competently;
- player is no longer intrinsically enjoying the ordinary loop.

QA must not infer intrinsic satisfaction from discipline.

### New test
`COMPETENCE WITHOUT ENJOYMENT CHECK`

At 50G / 250G / 450G of a no-bonus segment, separately code:
- execution quality;
- voluntary reel curiosity;
- economic/setting motive;
- sunk-cost/“until it hits” motive;
- irritation or autopilot;
- desire to vary stop order for curiosity rather than necessity.

### REUSABLE QA PRINCIPLE
`SUSTAINED COMPETENCE CAN COEXIST WITH FALLING ENJOYMENT.`

### REUSABLE QA PRINCIPLE
`A PLAYER WHO KEEPS PLAYING CORRECTLY MAY STILL BE EXPERIENCING A QUALITY FAILURE.`

---

## 6. BIG / RT — reward afterglow can contaminate the return-to-normal verdict

### SOURCED FACT
BIG necessarily changes the short-term loop by entering 花火チャレンジ. The RT phases alter player responsibility while retaining the same lever and three STOP buttons. Published RT procedure includes both task-bearing and low-duty games.

Sources:
- https://nana-press.com/kaiseki/machine/134/3869/
- https://nana-press.com/kaiseki/machine/134/3872/
- https://nana-press.com/kaiseki/machine/134/3873/

### INTERPRETATION
Immediately after BIG/RT, the player may still be emotionally elevated by:
- finally hitting after a drought;
- payout gain;
- successful technical intervention;
- RT music/state memory;
- a pleasing reach-eye discovery.

Therefore the first normal game is not a clean measure of base-loop quality.

### New QA test
`AFTERGLOW DECAY TEST`

After RT ends, sample separately:
- normal G1–5;
- normal G6–15;
- normal G16–30.

For each window record:
- ordinary pace;
- spontaneous reel reading;
- unnecessary state/panel checks;
- whether the player is still discussing/mentally tracking the prior reward;
- whether curiosity returns independently of the previous bonus.

### REUSABLE QA PRINCIPLE
`SPECIAL-STATE AFTERGLOW MUST NOT BE COUNTED AS BASE-LOOP SATISFACTION.`

This sharpens Run 3 `POST-REWARD BASELINE RECOVERY TEST`.

---

## 7. Sound/visual session memory is useful only if it does not create phantom duty

### SOURCED FACT
Sound Run 4 retains published evidence that reward BGM can vary with recent session history and that RT BGM continuity itself can be an anomaly reference because BGM停止 signals bonus.

See linked Sound Run 4 research and published RT sources:
- `docs/research/CASE_STUDY_02_SHIN_HANABI_SOUND_EXPERIENCE_RUN4.md`
- https://nana-press.com/kaiseki/machine/134/3872/
- https://nana-press.com/kaiseki/machine/134/3873/

### INTERPRETATION
Session memory can strengthen continuity: the machine acknowledges that this bonus belongs to the recent run of play. But QA must distinguish **recognition** from **obligation**.

Good memory feedback:
`player recognizes history → feels continuity → continues current task normally`

Bad memory feedback:
`player hears/sees history cue → assumes hidden extra duty/state → keeps checking for something that is not there`

### New test
`PHANTOM DUTY CHECK`

After history-linked presentation changes, observe whether players:
- incorrectly alter strategy;
- search for hidden continuation;
- retain unnecessary listening/visual vigilance after the rule-bearing period ends.

### REUSABLE QA PRINCIPLE
`SESSION MEMORY SHOULD ADD CONTEXT WITHOUT INVENTING A NEW PLAYER OBLIGATION.`

---

## 8. Beginner versus skilled player — mastery should reduce re-orientation cost

### VIDEO / FIELD OBSERVATION
Beginner-facing actual play explicitly treats delayed reverse-stop and JAC-IN avoidance as practice goals. Long-session/expert-oriented records, by contrast, can devote thousands of games to the same machine while discussing fine execution, setting evidence and reach-eye satisfaction.

Sources:
- https://www.niconana.net/movie/%E3%80%90%E6%96%B0%E3%83%8F%E3%83%8A%E3%83%93%E3%80%91%E6%94%BB%E7%95%A5%E3%81%B8%E3%81%AE%E9%81%93-%E9%81%85%E3%82%8C%E9%80%86%E6%8A%BC%E3%81%97%E3%81%A8%E3%83%8F%E3%82%BA%E3%82%B7%E3%81%AE%E4%B8%8A/
- https://yutura.net/channel/98894/video/-uhM0NgM1pY/
- https://ameblo.jp/teamato4545/entry-12961562484.html

### INTERPRETATION
Mastery changes the same three STOPs in two directions:
1. **more meaning is available** — slip, reach-eye, role denial, setting sample, alternate stop order;
2. **less re-orientation is required** — ordinary routine and state return become automatic.

A weak mastery model only adds more knowledge obligations. A sustainable mastery model also removes routine cognitive cost.

### New metric
`RE-ORIENTATION COMPRESSION`

Compare novice vs skilled player after:
- ordinary meaningful cue;
- bonus detection;
- REG technical sequence;
- RT navigation;
- RT end.

Measure games/time until normal comfortable rhythm returns.

### REUSABLE QA PRINCIPLE
`MASTERY SHOULD COMPRESS RE-ORIENTATION COST AS WELL AS ROUTINE DECISION COST.`

---

## 9. Sparse presentation — engagement depends on confidence in what is over

### INTERPRETATION
Run 3 concluded that sparsity amplifies underlying game quality. Run 4 adds a termination requirement.

Sparse presentation can make a small timing/light/sound deviation highly meaningful only if the player trusts two boundaries:
- when the deviation begins;
- when the deviation is over.

If the player keeps wondering “is that still relevant?”, sparse presentation stops saving attention and instead produces lingering vigilance.

### New principle
`SPARSE PRESENTATION NEEDS CLEAN SEMANTIC ENDINGS.`

### New test
`LINGERING SIGNIFICANCE TEST`

After a cue resolves, count games in which the player still treats the previous cue as actionable despite no documented continuing rule.

This directly connects:
- Visual Run 4: `THE PLAYER SHOULD NOT HAVE TO SEARCH FOR THE NORMAL VIEW AFTER THE TASK ENDS.`
- Sound Run 4: `THE NORMAL MACHINE MUST BECOME AUDIBLE AGAIN AFTER A SPECIAL DUTY ENDS.`
- QA Run 4: `THE PLAYER SHOULD NOT HAVE TO RECONSTRUCT THE NORMAL PLAY CONTRACT AFTER THE TASK ENDS.`

---

## 10. Three-hour fatigue — count re-orientations, not only misses

### INTERPRETATION
Run 3 decomposed long-session fatigue into sensory, decision, precision, vigilance and motivational channels. Run 4 adds **context-switch cost**.

A three-hour session can include many repeated transitions:
- ordinary → cue → ordinary;
- ordinary → bonus detection → bonus;
- BIG → 花火チャレンジ;
- high-duty RT game → low-duty RT game;
- 花火チャレンジ → 花火GAME;
- RT → ordinary;
- skill miss → recalibration;
- brief real-world distraction/break → resume play.

Even if each transition is individually understandable, repeated re-orientation can accumulate fatigue.

### New fatigue channel
`RE-ORIENTATION FATIGUE`

Definition:
repeated cognitive/motor cost of reconstructing “what matters now / what can I ignore / how should I stop now?” after state or cue transitions.

### Three-hour protocol extension
At 0–15 / 45–60 / 105–120 / 165–180 min log:
- cue misses;
- false alarms;
- aiming misses;
- decision hesitation;
- voluntary reel-reading events;
- technical-route simplification;
- `RE-ANCHOR COST` after each major state transition;
- number of phantom checks after task completion;
- recovery after a real-world interruption.

### REUSABLE QA PRINCIPLE
`LONG-SESSION QA SHOULD COUNT HOW OFTEN THE PLAYER MUST REBUILD CONTEXT.`

### REUSABLE QA PRINCIPLE
`A DEEP MACHINE CAN CHANGE RESPONSIBILITY OFTEN, BUT IT MUST NOT MAKE THE PLAYER RELEARN THE HOME STATE EVERY TIME.`

Exact three-hour human measurements remain `UNRESOLVED` until controlled real-person testing exists.

---

## 11. Complete-loop QA reconstruction — Run 4

### First 5 minutes
`learn safe aim → handle one conditional small role → experience ordinary resolution → detect one deviation → return home`

Primary risk: learning exceptions without learning the normal home state.

### Normal 100G
`routine motor rhythm + optional reel questions + occasional meaningful deviation + clean return`

Primary risk: every meaningful event leaves residual vigilance.

### 500G no-bonus stretch
`execute accurately + sample setting/role information + curiosity may rise/fall independently of strategic continuation`

Primary risk: correct disciplined play is mistaken for enjoyment.

### Bonus discovery
`reel relation / deviation → suspicion → confirmation → identify bonus → enter reward`

Primary risk: beginner gets payout but not discovery learning.

### BIG
`reward + one technical duty / payout handling → RT entry`

Primary risk: entry impact hides whether subsequent RT responsibility is clear.

### REG
`chosen skill route → repeated execution → local success/failure → economic consequence → recovery`

Primary risk: execution miss creates global hesitation beyond the failed action.

### HANABI Challenge
`low duty → navigation cue → JAC-IN avoidance task → release → later JAC IN acceptance → transition`

Primary risk: player remains permanently armed for the avoidance task after it is no longer required.

### HANABI GAME
`lower-duty repeat + setting/bonus observation + meaningful interruption → end/bonus`

Primary risk: BGM/visual monitoring becomes false listening/viewing duty.

### Return to normal
`special state ends → ordinary sensory baseline returns → player resumes self-owned reel questions`

Primary risk: reward afterglow or state uncertainty contaminates base-loop verdict.

### Three hours
`routine compression + periodic technical concentration + repeated state re-anchoring + precision drift + motive drift`

Primary risk: cumulative re-orientation fatigue even when individual rules are understood.

---

## 12. New reusable QA principles from Run 4

- `ONBOARDING MUST TEACH THE HOME STATE, NOT ONLY THE EXCEPTIONS.`
- `RETURN IS A TASK SWITCH, NOT AN EMPTY GAP.`
- `A GOOD SPECIAL EVENT ENDS BY RESTORING THE ORDINARY PLAY CONTRACT, NOT MERELY BY STOPPING ITS EFFECTS.`
- `INFORMATION FAILURE AND EXECUTION FAILURE NEED DIFFERENT RECOVERY PATHS.`
- `SUSTAINED COMPETENCE CAN COEXIST WITH FALLING ENJOYMENT.`
- `A PLAYER WHO KEEPS PLAYING CORRECTLY MAY STILL BE EXPERIENCING A QUALITY FAILURE.`
- `SPECIAL-STATE AFTERGLOW MUST NOT BE COUNTED AS BASE-LOOP SATISFACTION.`
- `SESSION MEMORY SHOULD ADD CONTEXT WITHOUT INVENTING A NEW PLAYER OBLIGATION.`
- `MASTERY SHOULD COMPRESS RE-ORIENTATION COST AS WELL AS ROUTINE DECISION COST.`
- `SPARSE PRESENTATION NEEDS CLEAN SEMANTIC ENDINGS.`
- `LONG-SESSION QA SHOULD COUNT HOW OFTEN THE PLAYER MUST REBUILD CONTEXT.`
- `A DEEP MACHINE CAN CHANGE RESPONSIBILITY OFTEN, BUT IT MUST NOT MAKE THE PLAYER RELEARN THE HOME STATE EVERY TIME.`

New QA instruments:
- `HOME-STATE RECOGNITION TEST`
- `RE-ANCHOR COST`
- `COMPETENCE WITHOUT ENJOYMENT CHECK`
- `AFTERGLOW DECAY TEST`
- `PHANTOM DUTY CHECK`
- `RE-ORIENTATION COMPRESSION`
- `LINGERING SIGNIFICANCE TEST`
- `RE-ORIENTATION FATIGUE`

---

## 13. Contradictions / caution

1. Long sessions prove that a machine can be played for thousands of games; they do not prove every minute was intrinsically enjoyable.
2. Edited long-form video proves repeated-play subject matter exists; editing prevents direct inference of uninterrupted fatigue, exact gaze or true pace.
3. Field logs mixing setting/economic goals with reach-eye enjoyment show multiple motives, not a single reason for continued play.
4. Published full-strategy payout demonstrates meaningful skill consequence; it does not reveal exact individual success rates or physical difficulty distributions.
5. Sparse audiovisual design can reduce noise, but if cue endings are ambiguous it may create more vigilance rather than less.
6. Session-memory presentation can strengthen continuity without a gameplay upper state; it can also be misread as hidden duty unless its semantic boundary is clear.

---

## 14. Unresolved

- controlled novice vs expert gaze/attention traces;
- first-five-minute actual success/error rates for aiming, ice follow-up, delayed-cue recognition and RT procedure;
- uninterrupted 500G motive coding under a no-bonus condition;
- exact reach-eye miss/late-recognition rates by experience level;
- REG technical-intervention miss rates by difficulty route and fatigue point;
- controlled `RE-ANCHOR COST` after BIG/RT and after ordinary cues;
- whether history-linked BGM creates phantom duty in novices;
- exact sensory fatigue from real cabinet brightness/SPL/hall environment;
- hand/eye precision drift across a controlled 3-hour session;
- effect of meal/restroom/phone interruptions on return-to-play context;
- causal separation of win/loss mood from intrinsic reel-play satisfaction.

These remain open rather than guessed.

---

## 15. Gate conclusion

Case Study 02 remains active real-machine research.

`REALITY_BASELINE_COMPLETE = FALSE`

`HUMAN_GATE_1_NOT_READY`

`SIGNAL//3 / FORGE//HEART / VAULT://3 = PROVISIONAL_FROZEN`

No browser play, code, reel implementation, prototype, cabinet/audio asset creation or original-concept refinement was performed.

Run 4 handoff:

`CASE_STUDY_02_PLAYTEST_QA_RUN_4_COMPLETE — MACHINE_REINTEGRATION_AVAILABLE — NOT_REALITY_BASELINE_COMPLETE`
