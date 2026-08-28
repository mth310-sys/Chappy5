# Case Study 03 — SLOT魔法少女まどか☆マギカ2 — Game & Reel Run 2

> Director: `Game & Reel`
> Phase: `PHASE A — REAL MACHINE STUDY / RUN 2`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Reality Baseline: `NOT_COMPLETE`

## 0. Boundary / current shared object

Latest `main` is the sole source of truth. Case Study 01 スマスロ北斗の拳 and Case Study 02 新ハナビ are complete as active cycles. Machine Director has formally returned Case Study 03, メーシー「SLOT魔法少女まどか☆マギカ2」(2016), to real-machine study for Run 2. This file deepens only the real-machine Game & Reel baseline.

No original concept refinement, SIGNAL/FORGE/VAULT ranking, prototype, reel implementation, copied protected assets, or invented undisclosed stop-control table is included.

Evidence labels used here:
- `SOURCED FACT`
- `FIELD REPORT`
- `INTERPRETATION`
- `REUSABLE PRINCIPLE`
- `UNRESOLVED / CONTRADICTION`

---

## 1. The repeated normal-game task is a branch routine, not continuous maximum precision

### SOURCED FACT

A current published procedure for normal play is to aim BAR around the upper portion of the left reel. The first stopped form then determines whether the player can relax or must increase precision:

- middle-cherry branch: remaining reels can be completed under the published procedure;
- lower cherry branch: weak/strong classification depends on the completed right-reel stop form;
- ordinary BAR-lower branch: remaining reels can usually be stopped freely, while chance-role A can be identified by its completed result/flash;
- upper-watermelon branch: the middle reel must cover watermelon using BAR as a landmark, while the right reel may be stopped freely; a watermelon miss in the corresponding branch is chance-role B.

Source:
- https://nana-press.com/kaiseki/machine/50/905/
- https://1geki.jp/slot/s_madomagi2/2/

### INTERPRETATION

The useful unit is not simply “3 STOPs.” It is:

`LEFT LANDMARK → BRANCH RECOGNITION → PRECISION ONLY IF REQUIRED → COMPLETE ROLE CLASSIFICATION`

This reduces routine cognitive cost. The player does not need to inspect all three reels at equal intensity on every game. The first stop often decides whether the remaining two stops are low-duty or high-duty.

### REUSABLE PRINCIPLE

`A REEL ROUTINE CAN BE EASY BECAUSE THE FIRST STOP ALLOCATES ATTENTION, NOT BECAUSE ALL STOPS ARE MEANINGLESS.`

`PRECISION DUTY SHOULD BE CONDITIONAL, NOT CONSTANT.`

---

## 2. Visible role classification is only the first layer of truth

### SOURCED FACT

Published normal-play probabilities include:

- weak cherry: setting dependent, about 1/108.9 at setting 1 to 1/81.5 at setting 6;
- watermelon: about 1/99.9;
- strong cherry: about 1/327.7;
- chance role A: about 1/219.9;
- chance role B: about 1/350.5;
- middle cherry: about 1/32768.

Published BONUS simultaneous-hit tables show that strong cherry, chance roles, watermelon, weak cherry and middle cherry can have BONUS-related meaning in addition to the visible role itself. Some simultaneous-hit routes have setting differences.

Sources:
- https://1geki.jp/slot/s_madomagi2/4/
- https://1geki.jp/slot/s_madomagi2/42/

### INTERPRETATION

The player resolves two different questions on different clocks:

1. `What did I stop?`
2. `What did that role actually buy this time?`

The reels can answer role identity at STOP3 while BONUS/CZ/ART consequence remains open for later presentation or subsequent games.

### REUSABLE PRINCIPLE

`ROLE CLASSIFICATION LATENCY AND CONSEQUENCE-RESOLUTION LATENCY ARE DIFFERENT DESIGN VARIABLES.`

---

## 3. The same role vocabulary is repriced by state

### SOURCED FACT

Normal play has low/high/super-high internal states. Published transition data include:

- weak cherry: low → high at 25%;
- chance roles: low/high → super-high at 5.1% for settings 1–3 and 10.2% for settings 4–6;
- BONUS end: 50% high transition, while a pre-BONUS high-or-better state is retained under the published description;
- push-order bell can lower high/super-high states according to the published table.

Source:
- https://nana-press.com/kaiseki/machine/50/910/

During CZ「魔女の結界」the conversion table changes: replay and push-order bell can matter in some variants, weak cherry/watermelon become more valuable, chance roles are strong, and strong cherry/BONUS can be decisive. ART-confirmed CZ play then repurposes rare roles toward Magica Quest acquisition.

Sources:
- https://1geki.jp/slot/s_madomagi2/43/
- https://nana-press.com/kaiseki/machine/50/915/

### INTERPRETATION

The physical vocabulary remains stable while the economic meaning of the same visible role changes.

Normal weak cherry can be a state editor and setting sample. In CZ it can be an ART conversion input. In ART it can be an extension input. In ART-end preparation it can be a return input.

### REUSABLE PRINCIPLE

`STATE DEPTH DOES NOT REQUIRE NEW REEL VOCABULARY; IT CAN REPRICE A STABLE VOCABULARY.`

---

## 4. ART changes STOP responsibility from classification-only to classification + order compliance

### SOURCED FACT

Published ART procedure states:

- when navigation appears, follow the indicated stop order;
- when navigation is absent, or when a presentation suggests a rare role, use the normal small-role procedure;
- the same source notes no normal-play penalty for variant stop order, while ART navigation should be obeyed.

Source:
- https://1geki.jp/slot/s_madomagi2/2/

ART「マギカ☆ラッシュ」is published as 50G+α, approximately 1.5 coins/G, with game-count extension.

Source:
- https://nana-press.com/kaiseki/machine/50/923/

### INTERPRETATION

ART does not replace reel operation with a new controller. It overlays an additional responsibility on the same three STOP buttons:

`NO NAV → role coverage/classification`

`NAV → stop-order compliance`

`RARE-ROLE BRANCH → coverage/classification + expectation update`

The skill demand therefore changes in type rather than simply increasing.

### REUSABLE PRINCIPLE

`A MODE CHANGE CAN ALTER THE MEANING OF STOP ORDER WITHOUT ALTERING THE PLAYER'S PHYSICAL CONTROL MAP.`

---

## 5. BONUS-in-ART is a continuity test, not just an extra reward

### SOURCED FACT

Published BIG information distinguishes reward by current state.

- In non-ART BONUS, a parallel red-7 alignment grants ART; the rarer diagonal alignment grants ART plus the stronger Magica Quest route.
- In ART or after ART has already been won, the same parallel red-7 alignment instead grants Magica Quest; the rarer diagonal alignment grants the stronger version.
- A BONUS during ART/ART preparation gives at least +10G after BONUS according to published descriptions.
- A BONUS during ART-end preparation grants an ART set plus at least +10G after the BONUS.

Sources:
- https://nana-press.com/kaiseki/machine/50/918/
- https://1geki.jp/slot/s_madomagi2/62/
- https://1geki.jp/slot/s_madomagi2/66/

### INTERPRETATION

The red-7 aiming act is physically similar but state-priced differently. More importantly, a real BONUS that interrupts ART must return the player to the persistent ART contract with added value rather than erase it.

The complete physical/semantic loop is:

`ART HOME → rare role / BONUS recognition → BONUS entry → BONUS aiming/award → BONUS resolution → ART value restored + incremented → ART HOME`

### REUSABLE PRINCIPLE

`A TEMPORARY REAL BONUS INSIDE A PERSISTENT STATE MUST HAVE A CLEAR RETURN ADDRESS.`

`THE SAME AIMING ACT CAN HAVE DIFFERENT REWARD SEMANTICS WHEN THE PERSISTENT STATE IS ALREADY OWNED.`

---

## 6. ART-end preparation is a real game state with changed role prices

### SOURCED FACT

Published ART-end-preparation data report the following return probabilities:

- watermelon: 25%;
- weak cherry: 25%;
- chance role A/B: 100%;
- strong cherry: 100%;
- BONUS: 100%.

A middle-cherry + BONUS route additionally carries the published stronger reward.

Sources:
- https://nana-press.com/kaiseki/machine/50/925/
- https://1geki.jp/slot/s_madomagi2/82/

### INTERPRETATION

ART “ending” is not a single instant. The player enters a short boundary in which familiar role families are repriced toward survival/return. That means a weak cherry near this boundary is materially different from a weak cherry in ordinary ART or normal play even though the visible family is the same.

### REUSABLE PRINCIPLE

`END STATES SHOULD BE MODELED AS PLAYABLE BOUNDARIES WHEN INPUT RESULTS CAN STILL ALTER WHETHER THE STATE ACTUALLY ENDS.`

---

## 7. Setting inference uses multiple channels with different sample speeds

### SOURCED FACT

Published setting differences include at least:

- weak-cherry base probability: about 1/108.9 at setting 1 to 1/81.5 at setting 6;
- direct ART from watermelon/chance-role/strong-cherry path: 0.4% for settings 1/3/5, 1.2% setting 2, 2.0% setting 4, 3.1% setting 6 in the published table;
- standalone purple-7 BIG and selected simultaneous-BONUS routes have setting differences;
- normal-state transition behavior also contains setting-group differences.

Sources:
- https://1geki.jp/slot/s_madomagi2/4/
- https://nana-press.com/kaiseki/machine/50/917/
- https://1geki.jp/slot/s_madomagi2/42/
- https://nana-press.com/kaiseki/machine/50/910/

### FIELD REPORT

A long-form written field report logged 3,506 total games and tracked several channels at once: weak-cherry count, direct ART, CZ frequency, BONUS count and specific BONUS categories. The report did not treat one short sample as conclusive.

Source:
- https://pachiseven.jp/articles/detail/4539/1000

### INTERPRETATION

Setting inference is not one meter. It is a portfolio of signals with different expected sample speeds:

- weak cherry: frequent but noisy;
- rare direct ART: sparse but potentially discriminating;
- specific BONUS routes: sparse and classification-sensitive;
- state/CZ behavior: context-sensitive and harder to isolate.

### REUSABLE PRINCIPLE

`SETTING READABILITY SHOULD BE TREATED AS MULTI-CHANNEL EVIDENCE, NOT A SINGLE SHORT-SESSION TELL.`

---

## 8. What the player actually watches across 100G / 500G / ~3 hours

### 100G — routine acquisition

### INTERPRETATION

The player can settle into a low-cost loop:

`BAR landmark → inspect left stop → cover cherry/watermelon only when needed → classify rare role → watch whether the consequence opens`

At this horizon, the important learning is procedural: knowing when the second/third stops require precision and when they do not.

### 500G — consequence management

### INTERPRETATION

The workload shifts from pure stopping to keeping several unresolved questions in memory:

- did the recent rare role move state?
- is this a CZ precursor or dead branch?
- did a chance role also carry BONUS?
- how many weak cherries have appeared?
- has direct ART appeared?

A dry 500G section therefore can be physically easy while mentally noisy.

### ~3 hours — dual mastery

### FIELD REPORT + INTERPRETATION

The 3,506G field report demonstrates the practical accumulation of multiple setting samples over a long session. By this horizon, a practiced player may execute the physical BAR/role routine almost automatically while carrying a much richer statistical and state model.

This is a key distinction from 新ハナビ: long-session mastery here tends to move cognitive effort away from every-stop reach-eye exploration and toward **role classification + state consequence + setting evidence + reward continuity**.

### REUSABLE PRINCIPLE

`MOTOR MASTERY CAN REDUCE HAND LOAD WHILE INCREASING THE PLAYER'S CAPACITY FOR STATE AND STATISTICAL REASONING.`

---

## 9. Direct contradictions / unresolved items

### UNRESOLVED / CONTRADICTION

1. This study does not possess an official public stop-control table. Exact pull-in priorities, slip counts by internal flag, and complete stop-position matrices remain unresolved and must not be invented.
2. Published strategy pages agree on the practical BAR-based routine, but the full protected reel strip is not reproduced here. Exact spacing is not promoted into a reusable layout.
3. Long-form actual-play video evidence still needs a dedicated timestamped pass for: average number of games between precision-required branches, how often players delay BONUS alignment after suspicion, and how quickly players visually re-anchor after BIG→ART return.
4. The machine's complete all-state role-conversion graph remains distributed across many published tables. This run records high-value transitions only and does not claim exhaustive internal control coverage.
5. Field reports are observational and sample-limited; they are not substitutes for published probability tables.

---

## 10. Game & Reel Run 2 synthesis

The real-machine Game & Reel loop is best described as:

`LOW-DUTY BAR ROUTINE`
→ `CONDITIONAL PRECISION BRANCH`
→ `VISIBLE ROLE CLASSIFICATION`
→ `STATE-RELATIVE CONSEQUENCE`
→ `TEMPORARY REWARD OR PERSISTENT ART VALUE`
→ `RETURN TO THE SAME PHYSICAL 3-STOP HOME`

The important lesson is not that the machine has many states. It is that those states continue to make sense because the physical reel vocabulary remains stable while responsibility and reward price change around it.

### REUSABLE PRINCIPLES RETAINED FROM RUN 2

- `A REEL ROUTINE CAN BE EASY BECAUSE THE FIRST STOP ALLOCATES ATTENTION.`
- `ROLE CLASSIFICATION LATENCY ≠ CONSEQUENCE-RESOLUTION LATENCY.`
- `STATE DEPTH CAN REPRICE A STABLE REEL VOCABULARY.`
- `STOP ORDER CAN CHANGE MEANING WITHOUT CHANGING THE BODY MAP.`
- `A TEMPORARY BONUS INSIDE A PERSISTENT STATE NEEDS A CLEAR RETURN ADDRESS.`
- `END PREPARATION CAN BE A PLAYABLE BOUNDARY, NOT A DEAD TRANSITION.`
- `SETTING READABILITY IS MULTI-CHANNEL EVIDENCE.`
- `MOTOR MASTERY CAN FREE ATTENTION FOR STATE AND STATISTICAL REASONING.`

## Gate

`CASE_STUDY_03_GAME_REEL_PHASE_A_RUN2_COMPLETE = TRUE`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
