# Case Study 04 — 沖ドキ！GOLD Official iPhone App — Playtest & QA Run 1

> Director: Playtest & QA Director
> Phase: Stage 1 / Phase B official app study
> Scope: licensed iPhone simulator as a separate evidence object
> Human Gate: HUMAN_GATE_1_NOT_READY
> Production: DENIED_UNTIL_HUMAN_MACHINE_APPROVED

## 0. Boundary

This run does **not** desk-test an original Chappy5 concept and does **not** treat the app as proof of undisclosed real-machine behavior. It evaluates what can and cannot be inferred about repeated player experience when the already-studied real machine is translated to an iPhone simulator.

Evidence classes remain separate:
- `SOURCED APP FACT`
- `DIRECT APP OBSERVATION`
- `PUBLIC APP-STORE USER REPORT`
- `REAL-MACHINE FACT` (context only)
- `INTERPRETATION`
- `REUSABLE QA PRINCIPLE`
- `UNRESOLVED / CONTRADICTION`

No direct execution of the paid app was available in this run. Therefore touch latency, exact hitboxes, finger occlusion, device haptics, speaker/headphone mix and sustained-device thermal/battery behavior are not invented.

---

## 1. Sourced app facts

### 1.1 Official product position

`SOURCED APP FACT`
Apple's current Japanese App Store listing identifies `沖ドキ！ＧＯＬＤ` as an iPhone app sold by Universal Entertainment Corporation and states that it reproduces the real machine. The listing also warns that values displayed in the app are simulation values and may differ from the real machine.

### 1.2 Simulator functions

`SOURCED APP FACT`
The publisher lists optional add-ons for:
- save/resume;
- wait cut;
- setting selection at game start;
- auto play with selectable end conditions;
- forced roles / bonus flags.

These functions are not treated as natural-play evidence. They are a simulator/laboratory layer around the represented machine.

### 1.3 Supported-device framing

`SOURCED APP FACT`
The listing names supported iPhone generations including iPhone 12-era devices and states that unsupported device/OS combinations are outside support. This establishes that phone-specific compatibility is part of the delivered product contract, not a neutral transport layer.

### 1.4 Public user reports

`PUBLIC APP-STORE USER REPORT`
Reviews report that users distinguish normal auto and high-speed auto, that some forced-role operations are unavailable in particular contexts, and that users seeking mode/interval internals can find the simulator insufficient as an analysis tool. These reports are useful as friction signals only and are not promoted to manufacturer specification.

---

## 2. Reconstructed first five minutes

### 2.1 Manual-first contract

`INTERPRETATION`
For a player who already understands the physical machine, the first five minutes of the phone app should be evaluated as a translation-learning problem rather than a rules-learning problem:

1. identify where BET/START/STOP actions moved on the screen;
2. verify that three-stop order and lamp/reel truth locations remain legible;
3. learn whether a finger blocks the reel or notification surface while acting;
4. learn whether touch feedback is immediate enough to preserve action causality;
5. decide whether simulator chrome can be ignored during ordinary manual play.

For a beginner, the app adds another layer: machine-rule learning and touch-layout learning happen together. A low-complexity machine can therefore become artificially intimidating if the wrapper asks for too much attention before the basic `advance game -> watch truth signal -> stop reels` contract becomes automatic.

`REUSABLE QA PRINCIPLE`
**PHONE TRANSLATION ADDS A SECOND LEARNING CURVE: THE PLAYER MUST LEARN BOTH THE MACHINE AND THE TRANSPORT INTERFACE. QA MUST MEASURE THEM SEPARATELY.**

---

## 3. Manual 100G

### 3.1 What should survive

`INTERPRETATION`
A manual 100G session is the cleanest Phase-B comparison frame because action ownership remains with the player. The intended preserved loop is:

`touch/start -> reel motion -> three stops -> result -> next game -> direct notification when it occurs`.

The key QA question is not whether every cabinet detail survives. It is whether the player still experiences a repeated self-authored rhythm in which the next truth event is uncertain.

### 3.2 What can degrade on phone

Potential phone-specific costs:
- finger travel may be lower than physical lever/three-button travel, reducing motor segmentation;
- there is no guaranteed physical detent or button travel to mark action completion;
- the same luminous screen carries cabinet, reels, signal and UI, increasing visual competition;
- repeated tapping can become generic touchscreen work if causality/feedback is weak;
- simulator controls can compete with the represented machine for authority.

These are `INTERPRETATION` until direct-device execution is available.

`REUSABLE QA PRINCIPLE`
**PRESERVING THREE INPUT EVENTS IS NOT THE SAME AS PRESERVING THREE-STOP RHYTHM. QA MUST TEST ACTION SEGMENTATION, NOT ONLY INPUT COUNT.**

---

## 4. Automated 100G

### 4.1 Automation is not merely faster manual play

`SOURCED APP FACT`
Auto play is an explicit optional simulator function. Wait cut is separately listed.

`INTERPRETATION`
Therefore manual, wait-cut and auto must be three distinct QA contracts:

- `MANUAL`: player owns action and waiting;
- `WAIT CUT`: player owns action, wall-clock waiting is compressed;
- `AUTO`: system owns repeated action, player primarily observes outcomes.

The earlier Game/Reel and Sound findings are upheld: `time compression != action delegation`.

`REUSABLE QA PRINCIPLE`
**AUTOMATION BOREDOM MUST NOT BE SCORED AS FAILURE OF THE UNDERLYING MANUAL LOOP, AND AUTOMATION CONVENIENCE MUST NOT BE SCORED AS PROOF THAT THE MANUAL LOOP SURVIVED.**

### 4.2 Observation contract

Under auto, the direct lamp notification can remain outcome-salient while the repeated three-stop loop loses ownership. That changes anticipation from `I am advancing toward the next answer` to `I am watching the system search for the next answer`.

This is a material experiential transformation even if logical game count and result distribution are preserved.

---

## 5. Dry 500G frame

### 5.1 Four separate exposure measures

A dry 500G comparison must not use game count alone. Record four measures separately:

1. `LOGICAL EXPOSURE` — 500 games occurred;
2. `WALL-CLOCK EXPOSURE` — elapsed real time;
3. `ACTION EXPOSURE` — how many player-owned actions were required;
4. `VIGILANCE EXPOSURE` — how long/often the player remained responsible for detecting the meaningful deviation.

`REUSABLE QA PRINCIPLE`
**A DIGITAL PORT CAN REMOVE TIME AND MOTOR COST WHILE LEAVING, REDUCING OR EVEN INCREASING VIGILANCE COST. GAME COUNT ALONE CANNOT DESCRIBE FATIGUE.**

### 5.2 Relief debt

The real-machine QA already established that eventual notification after a dry interval must not retroactively make the dry interval intrinsically satisfying.

On phone, acceleration can hide that debt by making the interval cheap to skip. That is convenience, not evidence that the baseline loop survived intact.

`REUSABLE QA PRINCIPLE`
**SKIPPABILITY IS NOT ENGAGEMENT. WHEN A PORT ADDS ACCELERATION, QA MUST REPORT HOW MUCH EXPERIENCE IS BEING BYPASSED RATHER THAN CALLING BYPASS A QUALITY IMPROVEMENT.**

---

## 6. BONUS and 32G horizon

### 6.1 BONUS

`INTERPRETATION`
BONUS remains a local reward event, but phone QA must separate:
- notification impact;
- reward routine readability;
- repeated-touch burden;
- audio/visual saturation;
- whether high-speed/auto modes convert the reward into a progress bar rather than a played sequence.

### 6.2 32G manual

The 32G post-bonus horizon is the strongest repeated comparison window because the logical horizon is short and known.

Manual QA should ask:
- does each game still feel player-advanced rather than passively consumed?
- is the truth signal continuously easy to monitor without staring strain?
- does the phone create extra urgency through smaller display/finger occlusion?
- does the end of 32G produce clean closure rather than wrapper confusion?

### 6.3 32G wait-cut

Wait cut preserves ownership but compresses recovery time between action/audio/visual events.

QA therefore needs separate fatigue scores for:
- tapping cadence;
- notification vigilance;
- audio repetition;
- visual flicker/change frequency.

### 6.4 32G auto

Auto transforms the same short horizon into observation. It may heighten `watching for the lamp` while reducing motor burden.

`REUSABLE QA PRINCIPLE`
**THE SAME 32 LOGICAL GAMES CAN REPRESENT THREE DIFFERENT EXPERIENCES: PLAYED, ACCELERATED-PLAYED, OR OBSERVED. PORT QA MUST NEVER COLLAPSE THEM INTO ONE SPEED SLIDER.**

---

## 7. Chain, end and return to HOME

`INTERPRETATION`
A successful chain must still contain recovery boundaries. On phone, continuous automatic continuation can erase the small `reward -> release -> next short question` articulation that made repeated positive states legible.

At chain end, return-to-HOME quality should be judged by whether the player immediately understands:
- the prior short-horizon promise has ended;
- normal repeated play has resumed;
- simulator state did not accidentally become the dominant object of attention.

`REUSABLE QA PRINCIPLE`
**A PORT MUST PRESERVE CLOSURE, NOT ONLY SUCCESS EVENTS. ACCELERATION THAT BLURS END-OF-STATE BOUNDARIES DAMAGES PLAYER ORIENTATION.**

---

## 8. Extended phone use / three-hour frame

No direct three-hour app execution was available, so this remains a test specification rather than a claimed observation.

Measure separately:
- thumb/finger repetition fatigue;
- posture/neck/hand fatigue;
- screen vigilance fatigue;
- brightness/visual fatigue;
- audio fatigue on device speaker and headphones;
- automation boredom;
- manual-action boredom;
- relief debt during dry play;
- wrapper/menu interruption cost;
- device heat/battery/performance degradation;
- interruption/resume behavior after OS/app context changes.

`REUSABLE QA PRINCIPLE`
**MOBILE FATIGUE IS MULTI-SOURCE. LOW PHYSICAL CABINET EFFORT DOES NOT IMPLY LOW HAND, POSTURE, SCREEN OR VIGILANCE COST.**

---

## 9. Beginner versus experienced player

### Beginner

Likely watches:
- obvious lamp/truth signal;
- reels broadly;
- touch controls;
- basic BONUS/end state.

Likely ignores or cannot yet exploit:
- subtle role/mode inference;
- simulator research tooling beyond basic controls.

Primary risk: wrapper/UI learning competes with learning the machine.

### Experienced real-machine player

Likely watches:
- whether manual timing feels causally faithful;
- whether the lamp/reel/action geography matches expectation;
- how automation changes the 32G contract;
- whether simulation tools expose or conceal desired diagnostics.

Public reviews indicate that some experienced users judge the app partly as a research simulator and are frustrated when hidden-mode/forced-role access is not available. This is a different evaluation target from pure entertainment fidelity.

`REUSABLE QA PRINCIPLE`
**A LICENSED MACHINE APP HAS AT LEAST TWO USER PROMISES: EXPERIENCE REPRODUCTION AND SIMULATION/ANALYSIS UTILITY. FAILURE IN ONE MUST NOT BE MISDIAGNOSED AS FAILURE IN THE OTHER.**

---

## 10. Convenience versus preserved game experience

### Convenience gains

Potentially provided by sourced functions:
- save/resume;
- wait cut;
- auto play;
- setting selection;
- forced-state access.

### Experience preservation

Must instead be judged through:
- player-owned three-stop rhythm;
- direct-notification salience;
- readable reel/signal geography;
- uncertainty of the next answer;
- clear 32G horizon;
- reward/closure transitions;
- sustainable repeated attention.

`REUSABLE QA PRINCIPLE`
**SIMULATOR FEATURES SHOULD BE SCORED ON A SECOND AXIS. MORE CONTROL OVER THE SIMULATION DOES NOT AUTOMATICALLY MEAN HIGHER FIDELITY OF THE PLAY EXPERIENCE.**

---

## 11. Contradictions and unresolved items

### UNRESOLVED

Without direct app execution this run cannot certify:
- exact touch target dimensions and spacing;
- left/right-handed comfort;
- finger occlusion of reels/lamp;
- touch-to-reel/STOP latency;
- whether haptic feedback exists and how it is timed;
- manual reel readability while spinning;
- device-speaker versus headphone balance;
- actual wait-cut cadence and whether any presentation is dropped;
- exact auto-stop behavior and intervention boundaries;
- app interruption/resume reliability;
- three-hour heat, battery or frame pacing;
- whether accessibility settings materially alter layout/feedback.

### CONTRADICTION / evidence caution

Public App Store users report restrictions on forced roles and missing mode/interval information, but these reports are not publisher specification and may depend on version/context. Preserve as user-friction evidence only.

---

## 12. Reusable QA principles from this run

1. **PHONE TRANSLATION ADDS A SECOND LEARNING CURVE.**
2. **PRESERVING INPUT COUNT IS NOT PRESERVING ACTION RHYTHM.**
3. **MANUAL / WAIT-CUT / AUTO ARE DIFFERENT EXPERIENCE CONTRACTS.**
4. **GAME COUNT, WALL TIME, ACTION EXPOSURE AND VIGILANCE EXPOSURE MUST BE MEASURED SEPARATELY.**
5. **SKIPPABILITY IS NOT ENGAGEMENT.**
6. **THE SAME SHORT HORIZON CAN BE PLAYED, ACCELERATED-PLAYED OR OBSERVED.**
7. **PORTS MUST PRESERVE CLOSURE AS WELL AS PEAKS.**
8. **MOBILE FATIGUE IS MULTI-SOURCE.**
9. **EXPERIENCE REPRODUCTION AND SIMULATION UTILITY ARE SEPARATE PRODUCT PROMISES.**
10. **SIMULATOR CONVENIENCE MUST NOT BE CREDITED AS PLAY-FIDELITY EVIDENCE.**

---

## 13. Technology-gap audit candidates for later five-Director review

Per Human directive, do not resolve these yet. Preserve as Playtest & QA candidates for the post-cycle audit:

- real iPhone touch-latency measurement protocol;
- finger-occlusion / reachable-hitbox mapping;
- manual-vs-auto action-ownership instrumentation;
- game-count vs wall-time vs action-exposure vs vigilance-exposure logging;
- long-session mobile fatigue protocol (hand/posture/screen/audio/attention);
- phone speaker/headphone A/B QA;
- interruption/resume and audio-context recovery QA;
- thermal/frame-pacing/battery degradation checks;
- beginner-vs-expert first-session observation rubric;
- relief-debt versus intrinsic-loop satisfaction scoring;
- simulator-wrapper dominance test;
- Human-in-the-loop real-device playtest evidence capture beyond Browser Test.

These are only audit candidates. No Chappy5 implementation or prototype is authorized.

---

## 14. Handoff to Machine Director

Case Study 04 official-app specialist cycle now has all four specialist passes complete if this file is accepted on main.

Machine Director should integrate Phase B before opening any Real↔App translation phase.

Key integration question:

**DID THE PHONE PORT PRESERVE THE PLAYER'S REPEATED ACTION/ATTENTION CONTRACT, OR DID IT MOSTLY PRESERVE OUTCOMES WHILE USING CONVENIENCE FEATURES TO BYPASS THE COST OF THE ORIGINAL LOOP?**

Preserve:
- `HUMAN_GATE_1_NOT_READY`
- `REALITY_BASELINE_COMPLETE = FALSE`
- `SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
- `PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
