# Chappy5 — Game & Reel Director Self-Study Run 1

> Director: `GAME_REEL`
> Shared object: `SELF_DIRECTED_STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Original concept refinement: `DENIED`

## Research question

**If an internal lottery/result is already determined before reel stopping, what design conditions still make STOP1/2/3 feel like meaningful player action rather than decorative confirmation?**

This study does not attempt to reproduce any commercial machine's proprietary stop-control table. It studies the reusable relationship among internal result, requested stop position, legal stop-result set, visible outcome, predictability, and sense of agency.

---

## 1. Why this theme was selected

Previous Chappy5 studies established that:

- reels can be the primary playfield rather than a passive result display;
- `internal role != requested stop != actual stop != visible stop form`;
- slip can be information;
- mastery can change what the same three STOPs reveal;
- Chappy5 still lacks a proven generalized authored stop-control model.

The unresolved question is deeper than implementation: **what must an original control law preserve so that player input genuinely contributes to the experience?**

Without this answer, a technically correct reel engine could still produce one of two failures:

1. STOP input changes almost nothing and becomes ceremony;
2. opaque control changes results so aggressively that aiming loses learnability and trust.

---

## 2. What was not understood before this study

Before this run, the working model risked reducing reel agency to:

`player aims -> engine applies allowed slip -> visible stop form`

That describes mechanism but not experience.

Unknowns were:

- whether choice alone is enough to create agency;
- how action-outcome predictability affects agency;
- whether timing consistency matters independently of correctness;
- whether more complicated stop branching necessarily creates more skill;
- when stop buttons create a misleading feeling of control rather than real authored control;
- how to think about the size and structure of the legal visible-result set for one internal result.

---

## 3. What was investigated

### SOURCED FACT — commercial pachislot stop-control structure

Japanese pachislot patent literature describes reel stopping as a controlled mapping after the player's stop operation rather than a raw physical freeze at the exact input position. One published example states that, in the described normal condition, reel stop is controlled within 190 ms and treats up to four symbols of movement as the maximum slip range; it also describes pulling permitted winning combinations toward a valid line and preventing combinations not permitted by the internal result from appearing on the valid line.

Source:
- Google Patents, JP2018110918A: https://patents.google.com/patent/JP2018110918A/ja

A separate patent describes multiple stop-control tables, with later-reel table selection depending on internal lottery result and the already stopped first-reel symbol in the example implementation. This demonstrates that later STOP outcomes may be conditioned by earlier visible history rather than independently resolved.

Source:
- Google Patents, JP4955424B2: https://patents.google.com/patent/JP4955424B2/ja

A recent patent publication continues to describe the same broad separation: stop operation occurs first; control then stops the reel within a regulated interval while attempting to display permitted combinations and prevent impermissible ones.

Source:
- Google Patents, JP7823959B2: https://patents.google.com/patent/JP7823959B2/ja

**Important boundary:** these patents demonstrate control architectures and examples. They do not provide a universal law for every machine and do not authorize copying a particular commercial table.

### SOURCED FACT — sense of agency depends on action-outcome relation

Research on sense of agency defines it as the experience that one's action caused or controlled an outcome. Studies report that action-outcome timing and the reliability/predictability of cues contribute to this experience; when outcome timing becomes uncertain, predictive and postdictive cues are reweighted.

Sources:
- Rashidi et al. (2021), Journal of Neurophysiology: https://journals.physiology.org/doi/abs/10.1152/jn.00640.2020
- Wen, Yamashita & Asama (2015), Consciousness and Cognition / PubMed: https://pubmed.ncbi.nlm.nih.gov/26100602/
- Cesari et al. (2024), systematic review on agency and skill learning in virtual-mediated environments: https://www.mdpi.com/2076-3425/14/4/350

### SOURCED FACT — action-selection conflict can reduce agency

Experimental work reports lower agency ratings when action selection is made more conflicting/difficult, even when the resulting action still produces an outcome. This is relevant because adding more reel-choice branches does not automatically make STOP play feel more agentic.

Source:
- Sidarus et al., Acta Psychologica / UCL: https://discovery.ucl.ac.uk/id/eprint/1487956/

### SOURCED FACT — explicit skill knowledge can interact with reward

Motor-sequence research found that rewards improved performance broadly, but the performance gain was larger for explicitly learned sequences that could be planned in advance. This supports separating **learnable preparation** from raw motor difficulty when designing technical intervention.

Source:
- Anderson et al. (2020), Journal of Neurophysiology: https://journals.physiology.org/doi/full/10.1152/jn.00575.2019

### SOURCED FACT — a stop button can create erroneous control beliefs when it does not actually grant corresponding control

A casino slot-machine study found that adding a stop button increased physiological response, and a minority of participants reported erroneous beliefs about control/skill. Near-miss reactions were also altered. This is not a pachislot stop-control study, but it is an important warning: **input ceremony itself can manufacture perceived control even where the underlying system does not grant matching agency.**

Source:
- Clark et al. / Journal of Gambling Studies, PubMed: https://pubmed.ncbi.nlm.nih.gov/28702882/

---

## 4. New learning

### INTERPRETATION — STOP agency has at least four independent components

A useful Game & Reel model is:

`STOP AGENCY = ACTION OWNERSHIP + PREDICTABILITY + CONSEQUENCE LEGIBILITY + COUNTERFACTUAL DIFFERENCE`

Where:

1. **Action ownership** — the player chooses/times the STOP rather than the system silently substituting it.
2. **Predictability** — the player can form some expectation about what a given aim/order may do.
3. **Consequence legibility** — after stopping, the player can understand what happened well enough to update their model.
4. **Counterfactual difference** — at least some plausible alternative valid input would have produced a meaningfully different visible/skill result.

The fourth term is the most important new insight. If every reasonable STOP request collapses to the same visible result, the button may still feel responsive, but there is little genuine reel-game agency.

### INTERPRETATION — difficulty and agency are not the same variable

More narrow timing windows, more stop orders, and more possible outcomes can raise difficulty while lowering agency if the player cannot learn the mapping.

Therefore:

`MORE BRANCHES != MORE SKILL`

and

`MORE PRECISION DUTY != MORE AGENCY`

A high-value technical-intervention system should expose a learnable relationship between cue, action, and consequence.

### INTERPRETATION — a good control law shapes a result space, not a single answer

For one internal role/state, Game & Reel should conceptually author a **legal stop-result space**:

`internal truth + state + stop history + requested stop -> set of legal actual stops -> selected actual stop -> visible form`

The design question is not merely “which row should stop?” but:

- How many meaningfully different legal visible results exist?
- Which differences are caused by aim?
- Which are caused by stop order?
- Which are caused by prior reel history?
- Which differences are readable by beginners?
- Which become readable only through mastery?
- Which outcomes must remain impossible because they would contradict internal truth?

This reframes reel design from a lookup problem into **authored counterfactual structure**.

### INTERPRETATION — later STOPs need inherited context

Because commercial control architectures can condition later stopping on already stopped reels, a three-STOP game should not be modeled as three isolated button presses. Each STOP changes the player's remaining possibility space.

Reusable abstraction:

`STOP1 partitions possibilities -> STOP2 narrows/interprets -> STOP3 closes or deliberately preserves a question`

This can make the same three physical actions support different levels of expertise without adding more buttons.

---

## 5. What changed from the prior understanding

### Before

The main missing capability was thought of primarily as a generalized engine that can reproduce:

`aim -> slip -> actual stop -> visible form`.

### After

That is necessary but insufficient.

The engine/specification must eventually also preserve **why the player's action mattered**. A future authored control spec therefore needs to expose not only the selected actual stop but the surrounding legal alternatives and action dependency.

A stronger future research representation is:

`STATE / INTERNAL RESULT`
`+ STOP HISTORY`
`+ REQUESTED STOP`
`-> LEGAL RESULT SET`
`-> SELECTION RULE`
`-> ACTUAL STOP`
`-> VISIBLE INFORMATION`
`-> PLAYER-LEARNABLE CONSEQUENCE`

No implementation is authorized by this study.

---

## 6. Reusable principles for Chappy5

### REUSABLE PRINCIPLE 1

**`A STOP BUTTON IS MEANINGFUL ONLY WHEN THE PLAYER CAN EVENTUALLY LEARN WHAT THEIR ACTION CHANGED.`**

Immediate understanding is not required. Long-term learnability is.

### REUSABLE PRINCIPLE 2

**`AUTHOR COUNTERFACTUALS, NOT ONLY OUTCOMES.`**

For important reel interactions, define what valid alternative actions could have changed, not just what the selected action produced.

### REUSABLE PRINCIPLE 3

**`SKILL REQUIRES A STABLE ACTION -> CONSEQUENCE RELATION, NOT MERELY A NARROW TIMING WINDOW.`**

A hard input that does not support prediction and learning is friction, not necessarily depth.

### REUSABLE PRINCIPLE 4

**`STOP1 / STOP2 / STOP3 SHOULD TRANSFORM THE REMAINING POSSIBILITY SPACE.`**

The three stops can act as sequential questions rather than three equivalent confirmations.

### REUSABLE PRINCIPLE 5

**`INTERNAL TRUTH MAY CONSTRAIN THE RESULT; PLAYER INPUT SHOULD SHAPE THE LEGIBLE FORM WITHIN THAT TRUTH WHEN THE DESIGN CLAIMS REEL AGENCY.`**

This preserves deterministic game law while giving the player's timing/order an honest domain of influence.

### REUSABLE PRINCIPLE 6

**`DO NOT COUNT ILLUSION OF CONTROL AS REEL DEPTH.`**

If an input has no meaningful counterfactual effect, presentation must not falsely credit it as technical mastery.

### REUSABLE PRINCIPLE 7

**`MASTERY SHOULD INCREASE PREDICTIVE COMPRESSION.`**

Experts should be able to anticipate more from fewer cues and classify more outcomes with less attention. Expertise should not simply mean accepting more permanent vigilance.

---

## 7. Conditions where these principles do not apply / misuse risks

1. **Direct-notification/simple machines** may intentionally make STOP timing low-agency. That is not automatically a flaw if the product does not claim stopping itself as the core repeated value.
2. **Randomness must not be disguised as controllable skill.** A player may influence visible stop form while not influencing the internal lottery result; those layers must remain conceptually separate.
3. **Counterfactual richness can become unreadable combinatorial noise.** More legal outcomes are not automatically better.
4. **Do not import commercial slip limits/control tables as Chappy5 design requirements.** Patent examples describe commercial/legal environments; Chappy5 is a browser game and must author original rules appropriate to its own design.
5. **Sense-of-agency research is not pachislot-specific proof.** It supplies human-action principles, not exact reel timing thresholds.
6. **The casino stop-button study concerns a different slot-machine structure.** It is used only as a warning about false control attribution, not as evidence of Japanese pachislot behavior.
7. **Do not optimize for stronger gambling misconceptions.** The design goal is honest interaction meaning, readability and mastery—not inducing mistaken beliefs about chance outcomes.

---

## 8. Still unresolved

### UNRESOLVED 1 — minimum meaningful counterfactual density

How many distinct player-influenced visible outcomes are enough to sustain reel agency over hundreds of games without overloading learning?

### UNRESOLVED 2 — ideal stability vs surprise balance

How stable must `aim -> consequence` be for mastery, and how much state-dependent variation can exist before the machine feels arbitrary?

### UNRESOLVED 3 — phone touch and aim ownership

Even a well-authored result space may fail if iPhone touch latency/jitter makes requested stop position unreliable. This remains a platform/measurement gap.

### UNRESOLVED 4 — expert compression curve

We do not yet know how quickly an original reel grammar should move from beginner recognition to expert prediction across 100G / 500G / multi-hour exposure.

### UNRESOLVED 5 — measurable “honest agency” QA

A future QA method should distinguish:

- player believes STOP mattered;
- player can correctly predict when STOP mattered;
- telemetry proves an alternative valid action would in fact have changed the authored visible result.

No current Chappy5 acceptance metric proves all three.

---

## 9. Next worthwhile study

Highest-value next Game & Reel study candidate:

**`REEL POSSIBILITY-SPACE COMPLEXITY VS LEARNABILITY`**

Research question:

> How can an original reel grammar provide enough counterfactual depth for experts while allowing beginners to safely ignore most of it?

Useful comparison sources would include motor learning, information theory, decision complexity, expert chunking, and multiple reel-centered game families. The goal would not be a new commercial Case Study but a measurable design vocabulary such as:

- branching factor per STOP;
- number of player-relevant distinctions;
- cue-to-action entropy;
- classification compression with mastery;
- false-vigilance cost.

---

## 10. Possible future value to Chappy5

If later approved for production, this research could help Chappy5 create original reels where:

- internal lottery remains deterministic/auditable;
- visible reel behavior is not arbitrary;
- STOP timing/order has a real, bounded, honest consequence;
- beginners can operate safely;
- experts gain predictive power rather than merely tighter timing obligations;
- slip and stop form communicate why the result occurred;
- Game, Reel, Visual and QA can share the same truth about what the player's action changed.

The intended end-state is not “a complicated stop table.” It is:

**a reel system whose counterfactual structure is learnable enough that the player can truthfully feel: `I did that`, while never confusing skill over visible reel resolution with control over undisclosed random lottery outcomes.**

---

## Gate

`GAME_REEL_SELF_STUDY_RUN1 = COMPLETE`
`ORIGINAL_MACHINE_SPEC = NOT_CREATED`
`REEL_IMPLEMENTATION = NOT_CREATED`
`PROTOTYPE = NOT_CREATED`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
