# Case Study 02 — 新ハナビ (2021)
## Playtest & QA Director — Deep Dive Run 5

> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Scope: real repeated-play reconstruction only. No original-concept desk test, browser play, prototype, implementation, asset work, SIGNAL/FORGE/VAULT ranking or refinement.

## 0. Latest-main gate check

Latest `main` was fetched before this run.

Confirmed:
- Case Study 01「スマスロ北斗の拳」current study cycle is complete through all five fixed Directors.
- Case Study 02「新ハナビ」remains the active shared real-machine study.
- Machine Integration Run 4 is complete.
- Game & Reel Run 4 is complete.
- Visual & Mechanism Run 5 is complete.
- Sound & Experience Run 5 is complete.
- This run advances Playtest & QA only.
- `REALITY_BASELINE_COMPLETE = FALSE`.
- `HUMAN_GATE_1_NOT_READY`.
- Production remains denied until explicit `HUMAN_MACHINE_APPROVED`.
- SIGNAL / FORGE / VAULT remain provisional, frozen and unranked.

Case Study 03 is not opened by Playtest & QA. Human directive requires the next different-lineage case selected by Machine Director to have an official / properly licensed smartphone app, and to proceed `REAL MACHINE STUDY → SMARTPHONE APP STUDY → DIFFERENCE / TRANSLATION STUDY` after this shared Case Study 02 cycle closes.

Evidence labels used below:
- `SOURCED FACT` — official/manufacturer or major strategy documentation.
- `VIDEO / FIELD OBSERVATION` — published actual-play framing or field report; not universal behavior.
- `INTERPRETATION` — QA reconstruction, not manufacturer disclosure.
- `REUSABLE QA PRINCIPLE` — transferable test principle, not a Chappy5 concept decision.
- `UNRESOLVED` — requires controlled human play or stronger evidence.

No copyrighted melodies/samples, proprietary visual designs, or undisclosed stop-control tables are reproduced or inferred.

---

## 1. Evidence refreshed for this pass

### SOURCED FACT — machine identity and repeated loop
Universal Entertainment describes 新ハナビ as a 2021 6th-generation `ボーナス＋RT` machine whose flow inherits the 5th-generation ハナビ: payout growth is bonus-centered, BIG is followed by 花火チャレンジ, JAC-IN avoidance is retained, REG adds level-based technical intervention, and the machine adds mini-display / reel-array / blackout-law changes.

Source:
- https://www.universal-777.com/product/slot/shin_hanabi/

### SOURCED FACT — 花火チャレンジ / 花火GAME
Major strategy documentation lists:
- 花火チャレンジ: BIG後, maximum 20G, about 0.3枚/G, with JAC-IN avoidance used to prolong it until the prescribed late segment.
- 花火GAME: entered after JAC IN, 20G fixed, about 0.6枚/G, ending early if a bonus establishes.
- 花火GAME adds warning/panel information and retains small-role follow duties when signaled.

Sources:
- https://nana-press.com/kaiseki/machine/134/3872/
- https://nana-press.com/kaiseki/machine/134/3873/

### SOURCED FACT — internal cause can alter visible stop behavior
Published first-stop control material separates no-bonus / Don BIG / red-7 BIG / REG states and documents examples where press position plus internal role/state produce different slip results. This supports player-side testing of learned slip expectation, but does not disclose the full second/third-stop algorithm.

Source:
- https://1geki.jp/slot/s_shinhanabi/49/

### SOURCED FACT — bonus is not the only long-session information stream
Published bonus-draw tables show multiple internal causes and setting differences. This means skilled players may continue collecting information about ordinary roles / bonus causes / RT results independently of immediate payout satisfaction.

Source:
- https://1geki.jp/slot/s_shinhanabi/43/

### VIDEO / FIELD OBSERVATION — long-session persistence exists, but motive must be separated
Published field/community material shows players specializing in 新ハナビ over very large accumulated samples and explicitly tracking long-run goals. This establishes that the machine supports durable mastery/collection motives for some players; it is not proof that every individual 500G drought or every three-hour segment is intrinsically enjoyable.

Source:
- https://pachiseven.jp/columns/column_detail/22824

Previous case-study evidence retained:
- beginner-facing actual play treats delayed reverse-stop play and RT JAC-IN avoidance as learned skills;
- edited long-session videos show 5,000G–7,800G-class sessions exist, but editing cannot prove uninterrupted fatigue level;
- field logs show 500G+ / near-900G BIG drought segments and technical misses can coexist with continued strategic play.

These remain observational evidence only.

---

## 2. Run 5 question — does the machine teach the player when attention is no longer required?

Visual Run 5 reframed the reel surface as a sequential workspace:

`READ → STOP → MODIFY CONTEXT → READ AGAIN → STOP → MODIFY CONTEXT → RESOLVE`

Sound Run 5 added that audio can open **and close** responsibility, and that learnable absence itself can be information.

Playtest QA therefore tests the player-side consequence:

**Can the player reliably reduce attention after the relevant question has been resolved, or does the machine create lingering vigilance?**

This is different from merely asking whether the cue was noticed.

### REUSABLE QA PRINCIPLE
`A GOOD CUE DOES NOT ONLY TELL THE PLAYER WHEN TO CARE; THE SYSTEM TEACHES WHEN CARE CAN END.`

### New QA metric — `DUTY RELEASE LATENCY`
For each attention-bearing event, measure the behavioral distance from factual resolution to ordinary comfortable play:
- STOPs / games until ordinary aiming rhythm returns;
- unnecessary extra panel/mini-display checks;
- unnecessary listening pauses;
- defensive over-aiming after the task is already over;
- false alternate stop orders;
- hesitation caused by uncertainty that a special rule has ended.

Low latency means the event closes cleanly. High latency means hidden attention debt remains even though the rule-bearing event has ended.

---

## 3. First 5 minutes — novice success must include safe ignorance

### INTERPRETATION
A novice can be taught every explicit rule and still have a poor first five minutes if the learning outcome becomes:

`I must watch everything, every game, because I do not know what is safe to ignore.`

New Hanabi contains multiple learnable responsibilities:
- ordinary left-reel aiming / small-role follow;
- recognizing when additional ice follow is required;
- interpreting meaningful timing/blackout/flash deviations;
- bonus recognition;
- REG technical intervention;
- 花火チャレンジ JAC-IN avoidance;
- RT-specific warning / follow behavior.

The QA target is not maximum early knowledge. It is an early **home routine** with a small number of clearly bounded exceptions.

### Reconstructed novice five-minute checkpoints
1. Player establishes one ordinary safe aiming routine.
2. Player sees at least one game where the first stop clearly closes additional precision duty.
3. Player experiences one role where further follow is required.
4. Player experiences or is shown one meaningful deviation.
5. After that deviation resolves, player resumes the same home routine without searching for a new state.

### New test — `SAFE IGNORANCE ACQUISITION TEST`
Within the first five minutes, record whether the novice behaviorally learns all three:
- **what must be watched**;
- **what may be ignored**;
- **what event re-opens attention**.

### REUSABLE QA PRINCIPLE
`ONBOARDING QUALITY INCLUDES TEACHING SAFE IGNORANCE.`

A machine that only teaches exceptions can make mastery feel like accumulating chores.

---

## 4. Normal 100G — count questions that close, not stimuli that occur

### INTERPRETATION
Run 4 separated event density from question quality. Run 5 adds closure.

During 100G normal play, a player may encounter frequent ordinary roles and many small visual/audio changes. QA should not count these as engagement simply because they occur.

For each meaningful player question, code:
- trigger: what caused attention to rise?
- hypothesis: what did player think might be true?
- action: did stop order / aim / watching change?
- resolution: did the current game answer the question?
- release: did the player know the question was over?
- residue: did false vigilance remain?

### New metric — `QUESTION CLOSURE RATE`

`resolved player-owned questions / opened player-owned questions`

This is not a manufacturer statistic. It is a QA observation measure.

### REUSABLE QA PRINCIPLE
`QUESTION DENSITY WITHOUT CLOSURE BECOMES VIGILANCE; QUESTION DENSITY WITH CLOSURE CAN BECOME DEPTH.`

### Player contrast
**Beginner:** likely asks broader procedural questions — “Do I need to aim now?”, “Was that special?”, “Which way do I stop?”

**Skilled player:** can compress routine procedure and ask narrower optional questions — “What did that slip remove?”, “Did that role deny the expected family?”, “Do I want to query a different stop order next game?”

The same three STOPs therefore need not create the same cognitive workload.

---

## 5. Missed vs recognized reach eyes — retrospective learning must lower future cost

### INTERPRETATION
A missed reach eye can be productive if later bonus confirmation lets the player connect the earlier stopped form with the result. But if the player only learns “I missed something somewhere,” the experience can increase defensive checking instead of mastery.

Run 5 therefore adds a cost condition to the existing `RETROSPECTIVE DISCOVERY CHECK`.

### New test — `RETROSPECTIVE COMPRESSION TEST`
After a missed pattern is retrospectively recognized, observe the next comparable opportunities:
- does recognition become faster?
- does the player need fewer external checks?
- does confidence increase?
- does ordinary play stay fluid?
- or does the player slow every game because they now fear missing unknown patterns?

### REUSABLE QA PRINCIPLE
`A DISCOVERY ONLY BECOMES MASTERY IF IT REDUCES FUTURE UNCERTAINTY COST.`

### Failure mode
`DISCOVERY → MORE THINGS TO FEAR MISSING`

is not sustainable depth.

Desired direction:

`DISCOVERY → NEW OPTIONAL MEANING + LOWER FUTURE SEARCH COST`

---

## 6. Cherry / wind-bell / ice handling — frequent roles can create competence without excitement

### SOURCED FACT / INTERPRETATION BOUNDARY
Major strategy documentation establishes that ordinary roles and bonus causes have differentiated probabilities and that setting information can be sampled over long play. Exact player interpretation varies by chosen strategy and expertise.

### QA separation
For repeated small-role handling, score separately:
1. **motor fluency** — can the player execute the needed aim?
2. **rule fluency** — do they understand why further aiming is or is not required?
3. **information value** — does the result tell them anything they care about?
4. **intrinsic satisfaction** — did the stop/result itself feel satisfying?
5. **economic utility** — was the action performed mainly to avoid loss / preserve expected value?

### REUSABLE QA PRINCIPLE
`FREQUENT TECHNICAL COMPETENCE IS NOT AUTOMATICALLY FREQUENT ENJOYMENT.`

This is important for a machine whose expert play can look smooth and disciplined for thousands of games. Smooth execution may indicate mastery, not necessarily high moment-to-moment pleasure.

---

## 7. Bonus detection — early knowledge should change experience before payout arrives

### INTERPRETATION
Reach-eye / role-denial / slip-based play can let the player know or strongly suspect the bonus before explicit entry/notification. QA should treat that recognition moment as a reward event distinct from later payout.

### New reward timeline coding
For each bonus:
- `SUSPICION MOMENT`
- `SELF-CONFIRMATION MOMENT`
- `FORMAL CONFIRMATION / ALIGNMENT`
- `PAYOUT START`
- `BONUS END`
- `RT DUTY START`

Then score affect/pace around each boundary.

### REUSABLE QA PRINCIPLE
`PLAYER DISCOVERY CAN BE A REWARD BEFORE THE MACHINE DELIVERS THE ECONOMIC REWARD.`

### QA warning
Do not collapse:
- relief after a long drought;
- satisfaction from recognizing a reach eye;
- pride from successful technical input;
- payout relief;
- RT anticipation.

They may occur close together but represent different quality dimensions.

---

## 8. REG technical intervention — skill reward vs punishment/friction

### INTERPRETATION
Published strategy and previous field evidence establish that technical execution can have economic consequence. Run 5 therefore evaluates not only success rate but **behavior after success/failure**.

### New test — `POST-SKILL BEHAVIOR SHIFT`
After each technical success/failure, record the next 10–20 actions for:
- pace increase/decrease;
- over-aiming;
- confidence;
- avoidance;
- self-correction;
- irritation;
- willingness to attempt the same difficulty again.

### Desired distinction
**Skill reward:** success makes the player feel ownership/competence and improves future execution.

**Punishment/friction:** failure causes global slowing, fear, or makes ordinary play feel like preparation for the next exam.

### REUSABLE QA PRINCIPLE
`SKILL SHOULD CREATE LOCAL ACCOUNTABILITY WITHOUT GLOBAL ANXIETY.`

### REUSABLE QA PRINCIPLE
`WHEN FAILURE HAS ECONOMIC COST, QA MUST MEASURE THE BEHAVIORAL AFTERSHOCK, NOT ONLY THE LOST VALUE.`

---

## 9. 花火チャレンジ / 花火GAME — responsibility should pulse, not stay permanently elevated

### SOURCED FACT
花火チャレンジ is a maximum-20G RT following BIG, with JAC-IN avoidance used during the relevant segment; 花火GAME is a fixed 20G RT after JAC IN, with warning/panel information and role follow where applicable.

Sources:
- https://nana-press.com/kaiseki/machine/134/3872/
- https://nana-press.com/kaiseki/machine/134/3873/

### INTERPRETATION
The same lever and three STOP buttons serve different responsibility states:
- low-duty RT game;
- warning / small-role follow;
- JAC-IN avoidance duty;
- JAC IN acceptance / transition;
- bonus anomaly detection;
- return to normal.

The sustainable property is not that RT is always more demanding. It is that duty rises and falls legibly.

### New metric — `DUTY PULSE LEGIBILITY`
For each RT segment, record whether the player can distinguish without excessive checking:
- `LOW DUTY`
- `ATTENTION OPEN`
- `PRECISION ACTION REQUIRED`
- `ACTION COMPLETE`
- `ATTENTION RELEASED`

### REUSABLE QA PRINCIPLE
`SPECIAL STATES CAN FEEL DISTINCT BY REALLOCATING RESPONSIBILITY, NOT BY MAXIMIZING RESPONSIBILITY.`

### Failure mode
If the player behaves as if every RT game might contain a hidden mandatory task, the nominally sparse system has created `FALSE VIGILANCE`.

---

## 10. Return to normal — test “home recognition” before measuring enjoyment

Run 4 added afterglow decay and re-anchor cost. Run 5 adds a prerequisite:

**Does the player recognize that they are home?**

### New test — `HOME RECOGNITION LATENCY`
After:
- BIG/REG end;
- 花火チャレンジ → 花火GAME transition;
- RT end;
- bonus detection / alignment;
- technical intervention sequence;

measure time/games until player resumes the normal baseline without checking for leftover special duty.

### REUSABLE QA PRINCIPLE
`A RETURN STATE IS NOT COMPLETE UNTIL THE PLAYER RECOGNIZES THE RETURN.`

Only after home recognition should base-loop enjoyment be scored. Otherwise reorientation confusion contaminates the verdict.

---

## 11. 500G drought — separate five continuation engines

A long no-bonus segment can still contain reel events, learning, setting samples and technical competence. QA must identify **why play continues**.

### Five continuation engines
1. `INTRINSIC REEL CURIOSITY` — wants to see/interpret the next stop result.
2. `MASTERY / COLLECTION` — wants to improve recognition or encounter new patterns.
3. `ECONOMIC / SETTING MOTIVE` — expected value or setting evidence justifies continuation.
4. `RELIEF SEEKING` — wants to end the drought with a hit.
5. `AUTOPILOT / SUNK-COST` — continues without positive pull.

### New metric — `CONTINUATION MOTIVE MIX`
At 50G / 150G / 300G / 450G within a no-bonus segment, estimate from observed behavior/comments which motives dominate. Do not infer enjoyment from total games played.

### REUSABLE QA PRINCIPLE
`THE SAME 500G CONTINUATION CAN BE HEALTHY CURIOSITY, RATIONAL DISCIPLINE, RELIEF SEEKING, OR AUTOPILOT; QA MUST NOT MERGE THEM.`

### Dry-spell pass condition
The base loop should retain at least some player-owned questions and voluntary curiosity even when the eventual bonus/relief is analytically removed from the evaluation.

---

## 12. Three-hour fatigue — attention decoding is its own fatigue channel

Previous runs separated:
- sensory fatigue;
- decision fatigue;
- aiming-precision fatigue;
- vigilance fatigue;
- motivation fatigue;
- re-orientation fatigue.

Sound Run 5 adds an important mechanism: long-session audio fatigue can come from decoding, not only volume. Visual Run 5 similarly depends on remembering stable baseline states and detecting small edits.

Run 5 therefore adds:

`SEMANTIC DECODING FATIGUE`

This is the cost of repeatedly asking:
- did that timing change matter?
- is this blackout still relevant?
- did the absence of a cue release me?
- was that STOP result ordinary or contradictory?

### New three-hour observation blocks
Sample at approximately:
- 0–15 min
- 45–60 min
- 105–120 min
- 165–180 min

For each, record independently:
- ordinary aiming accuracy;
- technical intervention accuracy;
- false cue checks;
- missed meaningful cues;
- voluntary alternate stop-order exploration;
- time to resume home rhythm after task;
- irritation at ambiguous signals;
- whether player is relying on habit safely or merely disengaging.

### REUSABLE QA PRINCIPLE
`EXPERT AUTOPILOT IS HEALTHY ONLY WHEN IT IS SELECTIVE, REVERSIBLE AND CORRECT.`

### New metric — `SELECTIVE AUTOPILOT QUALITY`
Healthy:
`routine compresses → relevant cue re-opens attention → action → clean release`

Unhealthy:
`routine compresses → meaningful cue missed` or `routine never compresses because everything feels potentially mandatory`.

### REUSABLE QA PRINCIPLE
`LONG-SESSION MASTERY IS THE ABILITY TO OSCILLATE BETWEEN LOW ATTENTION AND PRECISE ATTENTION WITHOUT LOSING TRUST.`

---

## 13. Sparse presentation verdict — sparsity succeeds only if ambiguity remains bounded

### INTERPRETATION
New Hanabi demonstrates a presentation structure where the physical reel result remains central and relatively small timing/blackout/flash/audio deviations can carry meaning. Sparse presentation is therefore not equivalent to inactivity.

But it has a QA risk: when small differences carry meaning, players may become hypervigilant if the boundaries are unclear.

### New test — `AMBIGUITY BUDGET AUDIT`
Across 100G and 500G segments classify attention claims:
- mandatory and clear;
- optional and clear;
- meaningful but learnable;
- ambiguous with retrospective resolution;
- ambiguous and unresolved/no payoff.

The last class creates attention debt without mastery.

### REUSABLE QA PRINCIPLE
`SPARSE PRESENTATION REQUIRES AN AMBIGUITY BUDGET.`

### REUSABLE QA PRINCIPLE
`SMALL SIGNALS REMAIN DELIGHTFUL ONLY WHILE THE PLAYER TRUSTS THAT MOST ORDINARY MOMENTS ARE ACTUALLY ORDINARY.`

This connects directly to Sound Run 5's `LEARNABLE ABSENCE CAN BE AN INFORMATION STATE` and Visual Run 5's stable baseline comparator.

---

## 14. Beginner vs skilled player — same three STOPs, different number of mandatory decisions

### INTERPRETATION
The defining mastery test is not simply whether the skilled player perceives more information. It is whether **mandatory cognitive work decreases while optional interpretation expands**.

### Beginner reconstructed workload
- remember baseline aim;
- detect when ice follow is needed;
- remember special timing/cue meaning;
- identify bonus vs ordinary result;
- execute REG task;
- remember RT task and stop order;
- confirm when task has ended.

### Skilled reconstructed workload
- baseline aim becomes motor routine;
- common role branches close rapidly;
- known cue families are recognized quickly;
- only selected anomalies receive high attention;
- optional stop-order questions can be chosen for curiosity;
- return/home recognition is nearly automatic.

### New metric — `MANDATORY DECISION COMPRESSION`
Compare novice vs skilled player on identical event types:
- number of conscious procedural checks;
- number of external information checks;
- time before first STOP;
- post-event return latency;
- missed economic duties;
- optional curiosity actions.

### REUSABLE QA PRINCIPLE
`MASTERY SHOULD DECREASE MANDATORY DECISIONS WHILE INCREASING OPTIONAL MEANING.`

This is a stronger criterion than “experts notice more.”

---

## 15. Integrated QA model added by Run 5

Run 5 combines the current shared findings into this player-side loop:

`HOME ROUTINE`
→ `MEANINGFUL DEVIATION`
→ `ATTENTION OPENS`
→ `QUESTION / DUTY CLASSIFIED`
→ `PLAYER ACTS OR READS`
→ `PHYSICAL RESULT RESOLVES`
→ `INTERPRETIVE RESULT MAY FOLLOW`
→ `RESPONSIBILITY CLOSES`
→ `PLAYER RECOGNIZES HOME`
→ `LOW-ATTENTION ROUTINE RESUMES`

A quality failure can occur at any boundary:
- deviation invisible;
- too many false deviations;
- duty unclear;
- skill excessively punitive;
- resolution ambiguous;
- release not signaled/learned;
- home not recognized;
- ordinary loop lacks intrinsic questions.

### New synthesis
`SUSTAINABLE DEPTH = OPTIONAL MEANING + LEARNABLE DUTY + RELIABLE RELEASE + LOW-COST RETURN`

This is an interpretation framework, not a numerical claim about 新ハナビ.

### Core Run 5 principle
`THE PLAYER MUST LEARN NOT ONLY HOW TO READ THE MACHINE, BUT HOW TO STOP READING IT SO HARD.`

---

## 16. Contradictions / cautions

### CONTRADICTION / CAUTION 1 — long play does not prove base-loop pleasure
Large accumulated game counts and full-day sessions demonstrate durable reasons to play for some users, but reasons may include expected value, setting pursuit, mastery goals, collection, routine, or sunk-cost. Do not use persistence alone as enjoyment evidence.

### CONTRADICTION / CAUTION 2 — expertise can hide poor onboarding
Expert footage may look effortless because responsibilities are compressed into habit. That does not show the same cue system is legible to a first-session player.

### CONTRADICTION / CAUTION 3 — edited footage hides vigilance and fatigue
Long-form/high-game-count videos that are cut down substantially cannot validate 3-hour sensory, semantic-decoding or aiming fatigue.

### CONTRADICTION / CAUTION 4 — strategy-site clarity is not machine-only clarity
A procedure can look obvious after reading a strategy guide. QA must distinguish what the cabinet/reels/audio themselves teach from what external documentation teaches.

### CONTRADICTION / CAUTION 5 — technical success rate alone can hide anxiety
A player may maintain high accuracy by slowing excessively or over-focusing. Accuracy must be paired with pace, confidence and recovery observations.

---

## 17. Unresolved items

`UNRESOLVED`:
- controlled first-five-minute novice observation without prior guide knowledge;
- eye/gaze tracking for reel vs mini-display vs panel attention;
- exact three-hour false-vigilance growth curve;
- actual semantic decoding fatigue under noisy hall conditions;
- novice/expert duty-release latency measured on the same cabinet;
- whether missed reach-eye retrospective discovery consistently reduces later search cost;
- technical-miss behavioral aftershock in a larger player sample;
- how hall sound masks or changes learnability of absence/timing cues;
- exact effect of alternate stop-order exploration on long-session engagement;
- precise separation of setting/economic motive vs intrinsic reel curiosity without interview contamination.

These remain study questions. They must not be invented or treated as verified.

---

## 18. Handoff to Machine Director

This current shared Case Study 02 cycle has now reached:
- Machine Run 4 complete;
- Game & Reel Run 4 complete;
- Visual & Mechanism Run 5 complete;
- Sound & Experience Run 5 complete;
- Playtest & QA Run 5 complete.

Machine Director should fetch latest main and decide the cycle boundary/integration. Per Human directive, once this shared New Hanabi cycle is formally closed, the next case must be a deliberately different lineage with an official / properly licensed smartphone app and should be studied in the sequence:

`REAL MACHINE STUDY → SMARTPHONE APP STUDY → DIFFERENCE / TRANSLATION STUDY`

Playtest & QA does not choose/open Case Study 03.

Do not return to SIGNAL/FORGE/VAULT. Do not declare `REALITY_BASELINE_COMPLETE` merely because Case Study 02 has completed another pass. Preserve Human Gate.