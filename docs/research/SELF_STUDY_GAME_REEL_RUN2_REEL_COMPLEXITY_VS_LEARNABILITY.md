# Chappy5 — Game & Reel Director Self-Study Run 2

> Director: `GAME_REEL`
> Shared object: `SELF_DIRECTED_STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Original concept refinement: `DENIED`

## Research question

**How can a reel possibility-space remain simple enough for a beginner to operate safely, while still containing enough learnable counterfactual depth that an expert can ask better questions with the same three STOPs?**

This is not a new machine specification and does not reproduce any commercial stop-control table. It deepens Run 1's unresolved `REEL POSSIBILITY-SPACE COMPLEXITY VS LEARNABILITY` question using accumulated Case Study evidence plus human decision, motor-learning, expertise and cognitive-load research.

Evidence labels used below: `SOURCED FACT / OBSERVATION / INTERPRETATION / REUSABLE PRINCIPLE / UNRESOLVED`.

---

## 1. Why this theme was selected

Run 1 established that meaningful reel agency needs more than `aim -> slip -> actual stop`. It needs player-learnable counterfactual structure: alternative valid actions must sometimes change the visible or skill consequence in a stable way.

That immediately creates a second problem.

If every internal state, press position, stop order, slip, role possibility and partial stop form is exposed to the player as a separate decision, the system can become technically deep but practically unreadable. A novice may respond by:

- memorizing a large checklist;
- monitoring every reel equally;
- fearing value loss from small mistakes;
- treating unexplained variation as arbitrary control;
- never reaching the point where three STOPs become fluent.

The highest-value question is therefore not `how many branches can the reel system support?` but:

**How much of the latent branching structure should become player-relevant at each level of mastery?**

---

## 2. What was not understood before this study

Before this run, the working vocabulary included:

- legal stop-result set;
- counterfactual alternatives;
- branching factor per STOP;
- cue-to-action entropy;
- mastery as predictive compression.

But several important relationships were still unclear:

1. whether more valid alternatives necessarily increase decision burden;
2. whether expert depth requires beginners to understand the same full possibility-space;
3. whether early variation helps learning or merely causes noise;
4. how a safe routine can coexist with optional expert routes without becoming fake depth;
5. how guidance should change as knowledge grows;
6. what complexity measure is more useful than raw stop-table size.

---

## 3. What was investigated

### SOURCED FACT — decision uncertainty generally slows response selection

The Hick–Hyman law describes a relationship between response-selection uncertainty and reaction time: as the information entropy of possible stimulus-response alternatives rises, response selection generally takes longer. Reviews also emphasize that exact slopes depend on task, practice and stimulus-response compatibility; it is not a universal per-choice millisecond constant.

Sources:
- Wu et al. (2018), *Hick–Hyman Law is Mediated by the Cognitive Control Network in the Brain*: https://pmc.ncbi.nlm.nih.gov/articles/PMC5998988/
- Czyż (2021), *Variability of Practice, Information Processing, and Decision Making—How Much Do We Know?*: https://pmc.ncbi.nlm.nih.gov/articles/PMC7933225/
- Stone et al. (2011), *Exploring attention-based explanations for some violations of Hick’s law for aimed movements*: https://pmc.ncbi.nlm.nih.gov/articles/PMC3063872/

**Boundary:** these are general human choice/action studies, not pachislot timing studies. They support the direction `more unresolved player-relevant alternatives can increase selection burden`, not an exact STOP-time formula.

### SOURCED FACT — experts can compress domain-specific structure into chunks

Expert-memory research supports the long-standing view that expertise involves access to more domain-specific memory structures/chunks. A meta-analysis found an expert memory advantage even for randomized domain-specific material, consistent with experts having more reusable stored structures with which to recognize patterns.

Source:
- Sala & Gobet (2017), *Experts’ memory superiority for domain-specific random material generalizes across fields of expertise*: https://pmc.ncbi.nlm.nih.gov/articles/PMC5323477/

Perceptual-learning literature also describes learning as reweighting attention toward relevant dimensions and away from irrelevant ones.

Source:
- Dosher et al. / review discussion in *Perceptual Learning and Attention*: https://pmc.ncbi.nlm.nih.gov/articles/PMC3345174/

### SOURCED FACT — novices and experts do not necessarily search information in the same way

Visual-search research in sport reports that novices often have difficulty distinguishing relevant from irrelevant cues and may search more diffusely. Expert strategies can be more selective, although the literature does not support a single universal eye-movement pattern for all domains.

Source:
- Piras et al. (2014), *Response Time, Visual Search Strategy, and Anticipatory Skills in Volleyball Players*: https://pmc.ncbi.nlm.nih.gov/articles/PMC4021845/

**Boundary:** this is not reel-specific evidence. It supports evaluating whether mastery reduces irrelevant search, not prescribing a fixation pattern.

### SOURCED FACT — high variation can hurt acquisition while sometimes helping retention/transfer

Motor-learning research on contextual interference distinguishes blocked/low-interference practice from random/high-interference practice. Meta-analytic evidence suggests higher contextual interference can improve retention or transfer in some settings, while making acquisition performance worse. Importantly, effects in applied settings are smaller or less consistent than laboratory effects.

Sources:
- Czyż & colleagues (2024), *High contextual interference improves retention in motor learning: systematic review and meta-analysis*: https://pmc.ncbi.nlm.nih.gov/articles/PMC11237090/
- Czyż, Wójcik & Solarská (2024), *The effect of contextual interference on transfer in motor learning*: https://pmc.ncbi.nlm.nih.gov/articles/PMC11349744/
- Immink et al. / sequence-learning discussion, *Interleaved practice benefits implicit sequence learning and transfer*: https://pmc.ncbi.nlm.nih.gov/articles/PMC8476370/

This means `more variation = better learning` is not a safe design rule.

### SOURCED FACT — guidance useful to novices can become redundant for experts

Cognitive-load/instruction research describes the worked-example effect and expertise-reversal effect: detailed guidance can reduce unnecessary cognitive load for novices, but the same guidance can become redundant or obstructive after schemas are acquired. Guidance-fading approaches progressively remove support as expertise grows.

Sources:
- Young et al. (2019), *Cognitive load theory: Practical implications and an important challenge*: https://pmc.ncbi.nlm.nih.gov/articles/PMC6694886/
- Wilson (2019), *Ten quick tips for creating an effective lesson*: https://pmc.ncbi.nlm.nih.gov/articles/PMC6459472/
- van Gog / worked-example order review discussion: https://pmc.ncbi.nlm.nih.gov/articles/PMC9648051/

**Boundary:** Chappy5 is not an educational tutor. The reusable point is that the same amount of explicit assistance can have different costs at different mastery levels.

---

## 4. Accumulated reel-study observation

### OBSERVATION — 新ハナビ exposed a layered rather than flat decision surface

Previous Chappy5 Case Study 02 Game & Reel research recorded a normal routine in which a player can use a relatively safe left-reel opening, stop the right reel freely, and only perform an additional ice-related middle-reel duty when the partial stop form leaves that duty relevant. The same machine also supports alternate stop orders, slip interpretation, role denial, bonus discrimination and technical intervention for players who choose to learn more.

Internal reference:
- `docs/research/CASE_STUDY_02_SHIN_HANABI_GAME_REEL_RUN4.md`

This is important not because Chappy5 should copy 新ハナビ, but because it demonstrates an architectural distinction:

`LATENT SYSTEM COMPLEXITY` can be much larger than `IMMEDIATE REQUIRED DECISION COMPLEXITY`.

A beginner does not need to consciously enumerate every reach-eye family or stop-control alternative on every game to participate correctly.

### OBSERVATION — accumulated Case Studies repeatedly separate mandatory duty from optional inference

Across reel-centered study, high-value repeated play appears stronger when the player can distinguish:

- what must be done now to avoid an execution loss;
- what can be safely ignored;
- what is optional information for deeper prediction;
- what becomes relevant only after a partial result or state deviation.

This aligns with Machine Run 2's attention-architecture principle: mastery should compress the baseline instead of expanding a permanent vigilance checklist.

---

## 5. New learning

### INTERPRETATION — the important complexity is exposed entropy, not latent branch count

A reel engine may contain hundreds or thousands of legal state/press/stop combinations, but those combinations do not all impose equal burden if the player can operate through a small number of stable action classes.

Therefore distinguish:

`LATENT BRANCHING` = all legal authored alternatives inside the control law

from

`EXPOSED DECISION ENTROPY` = alternatives the player must distinguish *right now* to act correctly or intentionally

This changes the design question from:

`How complex is the stop table?`

to:

`How many distinctions must the player keep live at this moment?`

A deep system can remain learnable if many latent branches collapse into the same safe action until a meaningful cue separates them.

### INTERPRETATION — beginner safety and expert depth can occupy different layers of the same control law

A useful learning ladder is:

`NOVICE: stable safe class`
`→ INTERMEDIATE: conditional duty recognition`
`→ ADVANCED: partial-stop prediction and role denial`
`→ EXPERT: voluntary alternate route / counterfactual query`

The higher layer should not invalidate the lower layer's basic competence.

This gives a stronger definition of accessibility:

**accessibility is not removing expert branches; it is preventing expert branches from becoming mandatory novice working memory.**

### INTERPRETATION — default routes should compress uncertainty; expert routes may voluntarily re-expand it

A beginner-friendly route can deliberately collapse many internal possibilities into one safe instruction. An expert route may choose a different first stop or aim that preserves more uncertainty temporarily in exchange for earlier or richer information later.

That leads to a reusable contrast:

`SAFE ROUTE = entropy compression for execution reliability`

`EXPERT ROUTE = voluntary information-seeking tradeoff`

The expert route is only real depth if it produces a stable informational/counterfactual advantage. If it merely increases precision burden or memorization, it is friction.

### INTERPRETATION — learning should change the unit of thought

A novice may think in symbol-by-symbol instructions:

`aim here -> if this appears -> look there -> then do X`

An expert should increasingly think in chunks/classes:

`safe`, `duty open`, `role family survives`, `contradiction`, `bonus discrimination`, `release`.

Therefore mastery is not merely faster reaction. It is **fewer cognitive units required to represent the same or greater possibility-space**.

### INTERPRETATION — variation must arrive after a stable reference model exists

Contextual-interference findings warn against two opposite mistakes:

1. presenting every variation in blocked, repetitive isolation forever, which may limit transfer;
2. randomizing too much too early and interpreting beginner failure as meaningful challenge.

For reel play, the reusable principle is not a prescribed tutorial sequence but a structural requirement:

**the player needs a stable reference grammar before state-dependent exceptions can feel informative instead of arbitrary.**

### INTERPRETATION — assistance has a lifetime

A permanent on-screen instruction can protect a novice while degrading expert flow if it remains attention-demanding after the action has become chunked.

For future Chappy5 research, assistance should therefore be evaluated by two questions:

- does it reduce novice extraneous burden?
- can it become ignorable/removable once the player no longer needs it?

No UI or implementation is authorized here.

---

## 6. Reusable principles for Chappy5

### REUSABLE PRINCIPLE 1

**`DEPTH SHOULD BE LATENT BEFORE IT BECOMES MANDATORY.`**

A system may contain rich counterfactual structure without requiring a beginner to represent all of it simultaneously.

### REUSABLE PRINCIPLE 2

**`MEASURE EXPOSED DECISION ENTROPY, NOT RAW STOP-TABLE SIZE.`**

Implementation complexity is not player complexity.

### REUSABLE PRINCIPLE 3

**`A SAFE DEFAULT ROUTE SHOULD COLLAPSE MANY STATES INTO FEW RELIABLE ACTION CLASSES.`**

The default route earns its value by reducing unnecessary decisions while preserving correctness.

### REUSABLE PRINCIPLE 4

**`EXPERT ROUTES MAY RE-EXPAND UNCERTAINTY ONLY WHEN THEY BUY INFORMATION, CONTROL LEGIBILITY, OR SKILL VALUE.`**

More difficult is not automatically deeper.

### REUSABLE PRINCIPLE 5

**`MASTERY SHOULD REDUCE THE NUMBER OF COGNITIVE UNITS NEEDED TO REPRESENT THE SAME POSSIBILITY-SPACE.`**

Expertise should produce chunking/compression, not a permanently larger checklist.

### REUSABLE PRINCIPLE 6

**`CONDITIONAL DUTY SHOULD OPEN FROM A CUE AND CLOSE WHEN THE CUE IS RESOLVED.`**

Do not keep precision responsibility active when the partial stop state has already made it unnecessary.

### REUSABLE PRINCIPLE 7

**`A STABLE BASE GRAMMAR MUST PRECEDE MEANINGFUL EXCEPTIONS.`**

Variation becomes information only after the player can predict the baseline it violates.

### REUSABLE PRINCIPLE 8

**`GUIDANCE THAT NEVER BECOMES IGNORABLE CAN TURN BEGINNER ACCESSIBILITY INTO EXPERT FRICTION.`**

Support must be evaluated across mastery levels, not only at first contact.

### REUSABLE PRINCIPLE 9

**`OPTIONAL COMPLEXITY IS REAL ONLY IF IGNORING IT REMAINS HONESTLY VIABLE.`**

If a supposedly optional advanced branch is economically or informationally mandatory, it is not optional complexity.

---

## 7. Conditions where these principles do not apply / misuse risks

1. **Simple/direct-notification machines may intentionally have low reel agency.** They do not need artificial expert routes merely to appear deep.
2. **A safe default must not erase the product's actual core.** If a future approved machine is explicitly about technical intervention, excessive simplification could remove the reason to play.
3. **Do not equate Hick–Hyman entropy with pachislot fun.** It models response-selection uncertainty, not engagement or reward.
4. **Do not treat chunking as permission for bad onboarding.** Experts can learn opaque systems, but that does not make opacity good design.
5. **Do not maximize contextual interference.** Applied evidence is mixed and benefits can come with worse acquisition performance.
6. **Do not force every player up the mastery ladder.** A player may rationally remain on a safe route and still deserve a coherent complete loop.
7. **Do not hide material payout penalties behind 'optional depth'.** Skill reward and punishment/friction must remain analytically separate.
8. **Do not copy 新ハナビ's routes, symbols, reach-eye laws or control.** It is evidence for layered learnability, not a template.
9. **General cognitive/motor research supplies design principles, not exact thresholds.** No maximum branching factor, cue count or millisecond budget is established here.

---

## 8. Still unresolved

### UNRESOLVED 1 — acceptable exposed entropy per STOP

There is no evidence-backed Chappy5 threshold for how many live distinctions can be presented before STOP selection becomes burdensome on iPhone.

### UNRESOLVED 2 — compression curve across 100G / 500G / 3 hours

We still lack Human data showing how quickly players consolidate symbol-level rules into higher-order chunks in an original reel grammar.

### UNRESOLVED 3 — optional expert route value

How much additional information or skill value must an alternate route provide before players experience it as worthwhile rather than self-imposed difficulty?

### UNRESOLVED 4 — relearning after interruption

A route may become fluent during one session but decay after hours/days away. We do not yet know how quickly a good reel grammar should re-anchor returning players.

### UNRESOLVED 5 — mobile timing interaction

Even low exposed decision entropy may feel arbitrary if touch latency/jitter blurs aim ownership. Platform measurement remains required.

### UNRESOLVED 6 — honest novice safety metric

We do not yet have a test that proves a beginner can use a default route for hundreds of games without accidental hidden value loss, while an expert can still demonstrate additional predictive compression.

---

## 9. Next worthwhile study

Highest-value next Game & Reel question:

**`REEL GRAMMAR RECOVERY AFTER INTERRUPTION`**

Research question:

> When a player returns after hours or days, what makes a previously learned reel routine quickly recoverable instead of requiring fresh memorization?

Why this follows naturally:

- real play is not one uninterrupted training session;
- Chappy5 is intended for iPhone/browser use where interruption is normal;
- mastery that exists only inside one continuous session is fragile;
- stable cue/action chunks, re-anchoring and retrieval practice may matter as much as acquisition speed.

Potential research domains: memory retrieval, spacing, motor-skill retention, contextual cueing, interruption recovery and resumable mobile interaction.

---

## 10. Possible future value to Chappy5

If later authorized for production, this research could help Game & Reel construct original systems where:

- internal control remains rich enough for long-term discovery;
- beginners need only a small safe action vocabulary;
- partial stops open and close precision duty clearly;
- expert stop orders/aims create genuine information tradeoffs rather than arbitrary difficulty;
- mastery changes the *representation* of play, not just input speed;
- optional depth remains honestly optional;
- QA can distinguish latent engine complexity from player-facing cognitive burden;
- iPhone interaction can preserve three-STOP depth without forcing constant vigilance.

The target is not the largest possible reach-eye catalog or stop table. It is a reel grammar where:

**the beginner can act correctly before understanding everything, while the expert can understand more without being forced to do more on every spin.**

---

## Gate

`GAME_REEL_SELF_STUDY_RUN2 = COMPLETE`
`ORIGINAL_MACHINE_SPEC = NOT_CREATED`
`REEL_IMPLEMENTATION = NOT_CREATED`
`PROTOTYPE = NOT_CREATED`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
