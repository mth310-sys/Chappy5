# Self-Directed Study — Game & Reel Director Run 6

> Topic: Safe automaticity / rapid re-engagement / responsibility triggers in repeated reel play
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Original concepts: `FROZEN`
> Shared object: `SELF_DIRECTED_STUDY`
> Closed real-machine anchor: `Case Study 02 — 新ハナビ (2021)`

## 1. Repository gate

Latest `main` was fetched and treated as the sole source of truth.

- Case Study 01 / スマスロ北斗の拳: complete through all five fixed Directors.
- Case Study 02 / 新ハナビ: complete and closed as active shared object.
- `CURRENT_SHARED_OBJECT = SELF_DIRECTED_STUDY`.
- `REALITY_BASELINE_COMPLETE = FALSE`.
- `SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`.
- no original-concept refinement, ranking or implementation is authorized.

Machine Director Run 6 handed Game & Reel the question:

**Which observable invariants let routine aiming and role handling become safely automatic while preserving rapid re-engagement when partial stops, contradiction, slip/timing change or temporary technical-intervention responsibility genuinely require attention?**

This run does not reopen 新ハナビ. It uses the completed case only as a real-machine anchor.

---

## 2. Sourced real-machine facts

### FACT A — routine play already contains conditional monitoring reduction

P-WORLD documents a normal procedure in which the player first aims a cherry-covering landmark on the left reel, can stop the right reel freely, and only needs to aim ice on the middle reel when the partial result leaves ice relevant. If ice does not remain a candidate, middle-reel precision duty can be dropped for that game.

Source:
- https://www.p-world.co.jp/machine/database/9401

### FACT B — the machine also contains explicit responsibility-expansion states

The same machine changes player responsibility by state:

- BIG contains a documented technical-intervention action for maximum payout.
- REG has selectable procedures with different precision demand; the upper procedure can reach the documented maximum payout while simpler procedures trade away return for easier execution.
- BIG is followed by 花火チャレンジ, where JAC-IN avoidance can extend the RT until the appropriate transition point.
- JAC-IN then moves play to 花火GAME.

Sources:
- https://www.universal-777.com/product/slot/shin_hanabi/
- https://www.p-world.co.jp/machine/database/9401
- https://news.p-world.co.jp/articles/16848/greenbelt
- https://1geki.jp/slot/s_shinhanabi/64/

### FACT C — meaningful deviations are embedded in otherwise repetitive reel play

Published analysis documents normal-play deviations such as delayed reel-start sound, extinguishing patterns, flashes and corresponding-role contradictions. The machine also contains approximately 3,500 reach-eye patterns, so bonus discovery can arise through reel evidence rather than only through a separate notification layer.

Sources:
- https://1geki.jp/slot/s_shinhanabi/
- https://www.p-world.co.jp/machine/database/9401

### FACT D — the manufacturer explicitly positions continuity plus changed responsibility as part of the product

The official product page states that the game flow of the 5th-generation HANABI is inherited, while the 6th-generation version adds level-dependent technical intervention in REG plus changes to reel layout and extinguishing rules.

Source:
- https://www.universal-777.com/product/slot/shin_hanabi/

---

## 3. Direct game/reel interpretation

### INTERPRETATION — automaticity should be attached to an action class, not to all three STOPs

A safe repeated routine is not:

`STOP1 -> STOP2 -> STOP3 without attention`.

It is closer to:

`recognize state -> execute familiar first-stop action class -> inspect only the evidence that can change responsibility -> either remain compressed or re-engage`.

The important unit is therefore not one full game but a **conditional action chunk**.

Example abstraction from the real-machine anchor:

`left first-stop routine -> ice candidate dead -> reduced precision duty`

versus

`left first-stop routine -> ice candidate alive -> precision duty reopens`.

The first branch rewards learned stability. The second branch re-expands attention because a preventable loss remains possible.

### INTERPRETATION — responsibility, not novelty, should reopen attention

A visually unusual stop is not automatically important. A routine-looking stop is not automatically safe.

A better re-engagement trigger is:

`Does the current evidence change what the player must do or what can still be inferred?`

This yields four observable responsibility triggers:

1. `ROLE DUTY OPENS`
   - a surviving small-role candidate requires an aim that was not required one step earlier.

2. `INFERENCE DUTY OPENS`
   - a partial stop or role denial creates a new bonus/reach-eye question even when no extra precision is required.

3. `STATE DUTY OPENS`
   - BIG / REG / RT changes the current technical procedure.

4. `CAUSAL DUTY OPENS`
   - a result contradicts the learned route/invariant strongly enough that the player must determine whether it came from aim, route, machine law or another source.

### INTERPRETATION — safe compression needs a visible reopening boundary

If the player cannot tell when responsibility has reopened, automation becomes omission.

Therefore:

`SAFE AUTOMATICITY = CHUNKED ROUTINE + RELIABLE RESPONSIBILITY-REOPENING CUES + PRESERVED OUTCOME DISCRIMINATION`.

This is stronger than simply measuring faster pressing.

---

## 4. Automaticity versus careless omission

### INTERPRETATION — omission and mastery can produce the same surface speed

Two players may both stop quickly:

- Player A no longer checks ice because the partial stop has already ruled it out.
- Player B no longer checks ice because they stopped caring about the possibility of losing it.

Observed speed alone cannot distinguish them.

The difference appears when responsibility changes.

`MASTERY` should show:

- routine checks disappear when they are redundant;
- precision returns when the surviving role demands it;
- reach-eye/contradiction evidence still changes expectation;
- bonus/RT technical procedures are not flattened into the normal routine;
- preventable losses do not rise as monitoring falls.

`CARELESS OMISSION` should show one or more of:

- missed role duty rises;
- technical-intervention opportunities are skipped after long repetition;
- contradictory stop forms no longer reopen inference;
- state changes fail to change procedure;
- the same action chunk continues after its preconditions have ended.

### INTERPRETATION — mastery is selective de-automation

For reel play, expertise is not maximum automation. It is the ability to **break automation at the right boundary**.

`ROUTINE EXECUTION -> TRIGGER -> RAPID RE-ENGAGEMENT -> RESOLUTION -> RE-COMPRESSION`.

This directly complements Machine Run 6's:

`LOW-DUTY REST -> TEMPORARY HIGHER-DUTY QUESTION -> RESOLUTION -> LOW-DUTY REST`.

---

## 5. External human-performance evidence — narrow use only

Motor-learning literature describes automaticity as skilled movement performed with reduced attentional demand after training, but also warns that highly automated behavior can become inflexible. Habit/sequence research reports increased action slips when an expected sequence is altered after extensive training. Separate work on switching from automatic to controlled behavior distinguishes proactive switching from contextual cues and retroactive switching from error feedback.

Sources:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5565272/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12356714/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC2847883/

These are not pachislot studies and establish no reel-timing threshold. They support only the following reusable warning:

`REDUCED ATTENTIONAL COST IS NOT SUFFICIENT; EXPERT AUTOMATICITY MUST REMAIN INTERRUPTIBLE BY RELEVANT CONTEXT.`

A further motor-skill literature warning is that directing a skilled performer back onto every step of an already automatic action can itself disrupt performance. This supports avoiding a design/QA assumption that experts should consciously verify every routine STOP forever.

Source:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3153805/

---

## 6. Reusable Game & Reel principles

1. **`AUTOMATE THE STABLE ACTION CLASS, NOT THE WHOLE GAME.`**
2. **`RESPONSIBILITY SHOULD REOPEN ATTENTION; NOVELTY ALONE SHOULD NOT.`**
3. **`A PARTIAL STOP CAN FUNCTION AS A BRANCH CONDITION, NOT JUST AN OUTCOME.`**
4. **`SAFE AUTOMATICITY PRESERVES ROLE COVERAGE, INFERENCE AND STATE-SPECIFIC TECHNICAL DUTY.`**
5. **`EXPERTISE INCLUDES SELECTIVE DE-AUTOMATION.`**
6. **`FAST ROUTINE PLAY IS NOT EVIDENCE OF MASTERY UNTIL RESPONSIBILITY CHANGES ARE HANDLED CORRECTLY.`**
7. **`A TECHNICAL-INTERVENTION STATE SHOULD INTERRUPT A NORMAL-PLAY CHUNK BEFORE THE FIRST PRECISION-CRITICAL ACTION.`**
8. **`ROLE DENIAL / CONTRADICTION SHOULD REOPEN INFERENCE EVEN WHEN NO PAYOUT-PRESERVING AIM IS required.`**
9. **`MONITORING COMPRESSION IS SAFE ONLY WHILE PREVENTABLE LOSS AND MISCLASSIFICATION DO NOT RISE.`**
10. **`RE-ENGAGEMENT BOUNDARIES ARE PART OF THE REEL GAME'S LEARNABLE LAW.`**

---

## 7. Long-play interpretation

### Around 100G

A newer player is still building the action grammar. They may consciously check more intermediate stops because the branch conditions are not yet compressed.

### Around 500G

A practiced player can reduce routine checks if the same observable laws remain reliable. The important QA question is not whether they look less; it is whether role duty and inference duty still reopen correctly after long repetition.

### Around 3 hours

The risk changes from mere slowness to inappropriate continuation of a chunk. Fatigue, resignation and habit can all mimic expertise. The strongest evidence of healthy mastery is therefore **preserved interruption quality** late in play: when a genuine technical or inference boundary appears, the player still changes procedure promptly and correctly.

This is interpretation, not a sourced claim about exact human performance at those durations.

---

## 8. Unresolved items

- No unpublished stop-control table is inferred.
- Exact slip-control boundaries beyond published procedures remain unresolved where not documented.
- Exact frequency of each responsibility-reopening event across natural long-form play remains to be quantified from dedicated footage logs.
- No numerical threshold is yet justified for how quickly re-engagement must occur.
- Whether auditory/visual deviations sometimes reopen attention too often for expert reel reading remains a cross-Director question.

---

## 9. Handoff conclusion

The central learning from repeated real-machine reel play is:

**`MASTERY IS NOT CONTINUOUS ATTENTION AND NOT CONTINUOUS AUTOMATION. IT IS THE ABILITY TO COMPRESS A STABLE ROUTINE, DETECT WHEN ITS PRECONDITIONS END, AND RE-EXPAND RESPONSIBILITY BEFORE THE NEXT CONSEQUENTIAL ACTION.`**

This preserves Machine Run 6's monitoring-compression model without turning reduced attention into an unconditional design goal.

`GAME_REEL_SELF_STUDY = COMPLETE_RUN6`

`REALITY_BASELINE_COMPLETE = FALSE`
`HUMAN_GATE_1_NOT_READY`
