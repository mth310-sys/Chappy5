# Visual & Mechanism Director Self-Study Run 4 — STOP Ownership, Causal Continuity, and Platform Discontinuity

> Role: `VISUAL_MECHANISM_DIRECTOR`
> Shared object: `SELF_DIRECTED_STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Original concept refinement: `DENIED`
> Case Study reopening: `NO`

## 0. Repository gate

Latest `main` was read as the sole source of truth before this study.

- Case Study 01 `スマスロ北斗の拳`: current fixed-five-Director cycle complete.
- Case Study 02 `新ハナビ (2021)`: current cycle complete and closed as active shared object; retained only as real-machine contrast evidence.
- Current shared object: `SELF_DIRECTED_STUDY`.
- Reality Baseline: `FALSE / INCOMPLETE`.
- Human Gate: `HUMAN_GATE_1_NOT_READY`.
- `SIGNAL / FORGE / VAULT`: `PROVISIONAL_FROZEN`.
- No cabinet, asset, animation, prototype, browser implementation, or original concept was produced.

This run answers the Game & Reel Run 4 handoff question:

> What visible/tactile ownership cues around STOP, reel-window depth, button state and partial-stop continuity let Human perceive “my press was accepted and this reel physically resolved from that action,” while also making platform/input/render discontinuities distinguishable from legitimate machine behavior?

---

# 1. Why this topic now

Game & Reel Run 4 added `CAUSAL DIAGNOSABILITY`: a surprising stop needs a causal history, not only a final picture. Machine Run 4 added `SOURCE AUTHORITY`: detection, meaning, and source attribution are separate questions.

Visual & Mechanism therefore has a narrower responsibility than “make STOP animation satisfying.” The visual system must preserve enough evidence that a Human can infer a chain like:

`MY FINGER / BUTTON PRESS → THIS CONTROL ACCEPTED INPUT → THIS REEL ENTERED STOP RESOLUTION → THIS PHYSICAL REEL SETTLED HERE`

without teaching the Human an undisclosed stop-control table and without making browser/render artifacts look like valid machine behavior.

---

# 2. Prior unknown

Prior Visual research established:

- physical-layer identity must survive state changes;
- object ownership should persist through finger occlusion and interruption;
- viewport adaptation should preserve reel / information / control scene-graph order;
- persistence is relational, not pixel-identical.

What remained unknown was the local causal bridge between the hand plane and reel plane.

Specifically:

1. Is immediate button-state feedback enough to establish action ownership?
2. Does a reel need an unbroken visible motion trajectory from spin to settle for the stop to feel caused rather than teleported?
3. How much temporary occlusion can the visual chain survive?
4. Which discontinuities make a legitimate stop look like missed input, lag, frame skip, or state replacement?
5. Can stable physical geometry help distinguish machine-authored surprise from platform-authored discontinuity?

---

# 3. Investigation

## 3.1 Real-machine anchor — 新ハナビ retained as closed-case evidence

### DIRECT OBSERVATION
Front photographs of the 2021 新ハナビ cabinet show a stable physical arrangement:

- three recessed reels remain above the operation deck;
- the three STOP buttons form a fixed horizontal row on the front edge / hand plane;
- the reel aperture remains visually bounded and does not move toward the finger during ordinary stopping;
- the lower identity panel remains outside the precision reel-reading zone;
- cabinet massing remains stable while the player repeats lever and three-STOP actions.

Representative photographed machine sources:

- Yahoo! Auctions archived machine front views: `S／新ハナビR／HA`.
- Slotters machine page with cabinet / reel imagery: https://slotters.jp/shinhanabi/
- P-WORLD industry coverage linking Universal official PV / explanation / test-play material: https://news.p-world.co.jp/articles/17137/nippon

### INTERPRETATION
The important reusable feature is not protected shape, artwork, lamp arrangement, or button styling. It is the **stable spatial ownership relation**:

`HAND PLANE (lever / BET / STOP) <-> FIXED MACHINE BODY <-> RECESSED REEL WORK SURFACE`

The player does not need a new visual coordinate system for every STOP. That stability lets the visible stop result inherit credibility from the already-known physical map.

### UNRESOLVED
Without physical access this study does not claim exact STOP travel, spring force, switch actuation point, reel depth, reel inertia, frame timing, lamp electronics, or tactile snap.

---

## 3.2 Touch feedback latency and action acceptance

### SOURCED FACT
Kaaresoja, Brewster & Lantz, *Towards the Temporally Perfect Virtual Button* (ACM TOCHI, 2014), experimentally varied touch-to-feedback latency on mobile touchscreen buttons. Their reported perceived-quality results degraded as latency increased; their practical guideline ranges differed by modality, with visual feedback tolerated later than tactile/audio feedback, while very long feedback delays reduced perceived button quality.

Reference:
https://dl.acm.org/doi/10.1145/2611387

Accessible summary / manuscript metadata:
https://www.researchgate.net/publication/263735996_Towards_the_Temporally_Perfect_Virtual_Button_Touch-Feedback_Simultaneity_and_Perceived_Quality_in_Mobile_Touchscreen_Press_Interactions

### INTERPRETATION
A STOP control cannot wait for the entire reel to resolve before visually acknowledging the touch if the interface is claiming that the player's press initiated that resolution.

But **fast acknowledgement alone is not proof of reel causality**. It only closes the first link:

`finger -> control accepted`

The next links must still be legible:

`control accepted -> reel response begins -> reel settles`

This changes the prior simplistic requirement from “make the button react instantly” to:

`ACKNOWLEDGE INPUT LOCALLY, THEN PRESERVE THE CAUSAL TRAJECTORY TO THE REMOTE OUTCOME.`

---

## 3.3 Agency depends on temporal and visual integrity

### SOURCED FACT
Studies of sense of agency consistently report that increasing temporal mismatch between action and outcome weakens perceived control / agency. A review of action-effect agency notes that both spatial and temporal discrepancies between performed actions and their visual consequences reduce self-attribution.

Reference:
Moore & Obhi / related review context in:
https://pmc.ncbi.nlm.nih.gov/articles/PMC4030148/

### SOURCED FACT
A psychophysical study manipulating both temporal contingency and visual integrity found that sense of agency was influenced by both. Visual feedback was gradually occluded while cursor feedback delay was manipulated; both the integrity of visible feedback and its timing mattered.

Reference:
https://pmc.ncbi.nlm.nih.gov/articles/PMC8047305/

### SOURCED FACT
Cross-modal grouping can alter perceived action-effect causality / agency. An additional synchronized signal can change how action and outcome are perceptually grouped.

Reference:
https://pmc.ncbi.nlm.nih.gov/articles/PMC3774240/

### INTERPRETATION
For a virtual pachislot STOP, the visually relevant object is not only the button and not only the final symbol alignment. The **entire causal unit** spans two separated physical-looking surfaces:

- action source on the operation deck;
- outcome on the reel cylinder / reel window.

Therefore a visually convincing STOP interaction should be evaluated as a distributed event, not as two independent animations.

New model:

`LOCAL ACCEPTANCE + REMOTE RESPONSE CONTIGUITY + TRAJECTORY INTEGRITY + FINAL SETTLE = VISUAL ACTION OWNERSHIP`

No single term is sufficient by itself.

---

## 3.4 Motion continuity through temporary occlusion

### SOURCED FACT
Research on visual motion through perceptual gaps shows that motion before and after an occlusion can be integrated into one continuous object trajectory. Strong trajectory consistency can cause observers to perceive the object emerging after the gap as the same moving object even when some visual features differ.

Reference:
https://pmc.ncbi.nlm.nih.gov/articles/PMC8516716/

### INTERPRETATION
Finger occlusion at the STOP row is not automatically harmful. A real machine is also partially occluded by the player's hand.

The dangerous failure is not “the finger covered pixels.” The dangerous failure is:

- motion state before the occlusion implies one future;
- motion state after the occlusion resumes from an incompatible position / velocity / phase;
- reel content appears to have been replaced rather than physically resolved.

Thus:

`OCCLUSION CAN HIDE A CAUSAL TRAJECTORY; IT SHOULD NOT RESET IT.`

For physical-reel presence, post-occlusion evidence should remain compatible with the pre-occlusion trajectory even if every intermediate frame was not visible.

---

# 4. New learning

## 4.1 Button ownership and reel ownership are separate perceptual claims

A control can visibly depress correctly while the reel still feels unrelated if the reel waits, jumps, changes phase, or settles without a believable continuation.

Likewise a beautiful reel deceleration can still feel system-driven rather than player-driven if the control never visibly acknowledges the press.

Therefore future acceptance should not collapse these into one “STOP feels good” rating.

Research-only claim split:

1. `CONTROL OWNERSHIP` — did this specific STOP receive my action?
2. `REEL RESPONSE OWNERSHIP` — did this specific reel begin resolving because of that action?
3. `MOTION CONTINUITY` — did the spinning object remain the same physical object throughout resolution?
4. `FINAL-STATE TRUST` — does the settled symbol position look like the end of the motion rather than a replaced frame?
5. `SOURCE ATTRIBUTION` — if something discontinuous happened, did it look machine-authored or platform-authored?

---

## 4.2 Partial-stop history is also a visual state

Game & Reel Run 4 calls partial stops “causal breadcrumbs.” Visual & Mechanism must preserve those breadcrumbs physically.

After STOP1:

- one reel is settled;
- two remain in motion;
- the settled reel should remain visibly owned by the same reel window and same cabinet layer;
- its stop state should not be visually re-authored when STOP2 occurs.

After STOP2:

- two settled reels form an accumulated physical history;
- STOP3 resolves against that already-visible history.

This gives a stronger principle:

`A THREE-STOP GAME SHOULD ACCUMULATE PHYSICAL EVIDENCE; EACH STOP SHOULD NOT RESTART THE SCENE.`

This matters especially for reach-eye / role-denial reading because interpretation can happen between stops, not only after STOP3.

---

## 4.3 Platform artifacts are dangerous when they imitate legitimate discontinuity

A machine can legitimately contain sudden state changes, flash, blackout, delayed response, or unusual stop forms. Therefore a browser rendering glitch is not merely ugly; it can counterfeit game information.

Potential false-machine events include:

- a one-frame reel snap that resembles an intentional stop-control event;
- a viewport resize that shifts the STOP row relative to the reel window during a press;
- a dropped frame that makes deceleration look like a large discrete slip;
- resumed rendering that reappears on a different reel phase without a clear interruption boundary;
- visual button feedback that occurs but reel state is stale;
- reel state updates but local button acknowledgement is absent.

New principle:

`PLATFORM DISCONTINUITY MUST NOT BE ALLOWED TO MASQUERADE AS MACHINE LAW.`

This parallels Sound Run 3's `PLATFORM SILENCE MUST NOT IMPERSONATE GAME SILENCE.`

---

## 4.4 Stable cabinet geometry functions as a causal reference frame

A fixed relation among operation deck, STOP row and reel window does more than create realism. It gives the Human a reference frame for attributing cause.

If touch-responsive mobile UI causes the STOP control to enlarge, migrate, float above the deck, or cause surrounding surfaces to reflow, the action may remain usable but the causal frame becomes generic touchscreen UI rather than cabinet mechanics.

Therefore:

`THE CABINET MAP IS PART OF THE ACTION-EFFECT MODEL.`

Responsive adaptation may scale or crop, but should preserve which object belongs to which layer and which reel belongs to which STOP position.

---

# 5. Changed understanding

Previous Visual thinking emphasized depth, material separation, state persistence and interruption recovery.

Run 4 adds **causal geometry**.

The cabinet is not only a scene graph:

`body -> glass -> reel recess -> reel -> operation deck -> control`

It is also an action graph:

`hand -> control -> machine body -> reel mechanism -> visible stop result`

These graphs should agree.

A cabinet can look deeply layered yet still feel non-mechanical if player actions do not travel through that apparent physical structure in a coherent way.

New composite model:

`PHYSICAL PRESENCE = SCENE-GRAPH COHERENCE × ACTION-GRAPH COHERENCE`

This is a research interpretation, not a production formula.

---

# 6. Reusable principles

1. `ACKNOWLEDGE INPUT LOCALLY, THEN PRESERVE THE CAUSAL TRAJECTORY TO THE REMOTE OUTCOME.`
2. `BUTTON OWNERSHIP AND REEL-RESULT OWNERSHIP ARE DIFFERENT PERCEPTUAL CLAIMS.`
3. `OCCLUSION CAN HIDE A CAUSAL TRAJECTORY; IT SHOULD NOT RESET IT.`
4. `A SURPRISING STOP SHOULD STILL LOOK LIKE THE END OF THE SAME PHYSICAL MOTION.`
5. `A THREE-STOP GAME SHOULD ACCUMULATE PHYSICAL EVIDENCE; EACH STOP SHOULD NOT RESTART THE SCENE.`
6. `PARTIAL-STOP HISTORY IS A VISUAL-MECHANICAL STATE, NOT ONLY A GAME-LOG STATE.`
7. `THE CABINET MAP IS PART OF THE ACTION-EFFECT MODEL.`
8. `PLATFORM DISCONTINUITY MUST NOT BE ALLOWED TO MASQUERADE AS MACHINE LAW.`
9. `RESPONSIVE ADAPTATION MAY CHANGE SCALE; IT SHOULD NOT CHANGE CAUSAL OWNERSHIP.`
10. `PHYSICAL PRESENCE REQUIRES ACTION-GRAPH COHERENCE AS WELL AS SCENE-GRAPH COHERENCE.`
11. `FAST FEEDBACK CLOSES THE INPUT-ACCEPTANCE LINK; IT DOES NOT BY ITSELF CLOSE THE INPUT-TO-REEL CAUSAL LINK.`
12. `FINAL SYMBOL ALIGNMENT SHOULD READ AS A SETTLED MOTION STATE, NOT A FRAME REPLACEMENT.`

---

# 7. Limits / misuse risks

- Do not convert touchscreen latency values from a general HCI experiment into hard pachislot animation timing constants without target-device testing.
- Do not infer real 新ハナビ STOP travel, tactile snap, motor timing, reel inertia, or control electronics from photographs/video.
- Do not copy 新ハナビ artwork, silhouette details, lamp arrangement, button styling, reel symbols, or protected presentation.
- Do not conclude that all machine-authored events must be smooth; a legitimate machine can intentionally flash, cut, blackout, or interrupt. The requirement is **source legibility**, not universal smoothness.
- Do not overuse button animation as compensation for inconsistent reel timing.
- Do not use fake visual continuity to conceal dropped input or stale state. QA must be able to observe failures.
- Do not claim tactile presence from visual depression alone on iPhone.

---

# 8. Remaining unknowns

1. On target iPhone/Safari, what touch-to-visible-acceptance distribution occurs under realistic rendering load?
2. What amount/type of reel-frame loss causes Humans to classify a stop as “lag” versus “heavy mechanical stop” versus “unexpected control”?
3. How much finger occlusion of the operation deck can be tolerated before STOP identity / reel mapping becomes uncertain?
4. Does a small persistent visual stop-state marker improve causal attribution, or does it become unnecessary UI noise once the physical map is learned?
5. How should a genuine Safari interruption boundary be represented so it cannot be confused with a machine-authored blackout/delay, without adding an intrusive mobile-app layer?
6. How well can Humans distinguish an execution miss from a render discontinuity when the final reel form is surprising?
7. What minimum pre-/post-occlusion trajectory evidence is enough for a spinning reel to remain perceptually one rotating object on a small screen?
8. Exact physical interaction parameters of real cabinets remain unverified without direct physical measurement.

---

# 9. Next worthwhile Visual & Mechanism study

Highest-value next question:

**When a mechanism or reel is partly hidden by another cabinet layer, what motion timing, edge continuity, occlusion order and re-emergence behavior make Human perceive one massive object moving through depth rather than a 2D layer being hidden/shown?**

This should remain real-machine / perceptual study only and must not create an original cabinet or mechanism.

Possible evidence targets:

- object permanence and motion trajectory across occlusion;
- acceleration / deceleration effects on inferred mass;
- T-junction / occlusion boundaries;
- parallax and motion-depth consistency;
- real pachislot mechanisms where motion disappears behind bezel/body layers and re-emerges;
- failure cases where masking resembles opacity animation rather than physical travel.

---

# 10. Possible future Chappy5 value

If Human later approves production, this research could support tests that distinguish:

- a beautiful STOP animation from an owned physical action;
- a correct reel result from a causally trustworthy reel result;
- deliberate machine surprise from browser/render failure;
- “3 buttons on a screen” from three controls mechanically belonging to one cabinet.

It does **not** authorize any implementation before `HUMAN_MACHINE_APPROVED`.

---

# Source classification summary

## SOURCED FACT
- Mobile touchscreen button feedback quality is sensitive to action-feedback latency; modality-specific simultaneity/quality windows have been experimentally measured.
- Sense of agency is reduced by sufficiently large temporal/spatial action-feedback mismatches.
- Visual integrity as well as temporal contingency contributes to sense of agency.
- Motion trajectories can be perceptually integrated across temporary visual gaps / occlusion.

## DIRECT OBSERVATION
- 新ハナビ cabinet imagery shows stable physical separation between fixed STOP row / operation deck and recessed reel work surface across repeated play.

## INTERPRETATION
- The stable cabinet relation can function as a causal reference frame.
- Causal ownership should be evaluated across local button acknowledgement, remote reel response, motion continuity and final settling.
- Platform discontinuity can counterfeit machine-authored information when the real game also uses legitimate timing/visual deviations.

## UNRESOLVED
- Exact physical dimensions, STOP mechanics, motor/reel timing, touch-render timing on target build, tactile qualities, frame-loss thresholds, and Human attribution thresholds.
