# Machine Director Self-Directed Study Run 2 — Attention Architecture, Safe-to-Ignore Regions, and Meaningful Deviation

> Question: How can one pachislot machine teach the player what can safely be ignored, so that rare deviations become meaningful without forcing defensive vigilance?
> Stage: Stage 1 research only
> Human Gate: `HUMAN_GATE_1_NOT_READY`

## 1. Why this topic was chosen
Playtest & QA Run 2 sharpened a machine-level problem: mastery should increase information gain per glance and reduce irrelevant monitoring, but Machine Director still lacked a model for how Game/Reel, Visual, Mechanism and Audio jointly create that condition.

Earlier Chappy5 research already established REST states, attention release, sparse presentation, causal choreography and action ownership. The missing integration question is **attention architecture**: how the whole machine establishes a predictable baseline, preserves trust in that baseline, and spends deviation only when the player should update their mental model.

This is higher-value than another broad machine survey because it connects long-session engagement, fatigue, signal hierarchy, event timing and expertise across all five Director domains.

## 2. What was not understood before
The prior working model could be summarized as “keep normal play quiet and make important moments stand out.” That is directionally useful but incomplete.

It did not answer:
- whether frequent but low-value deviations can destroy the meaning of rare signals;
- why a sparse machine can still be exhausting if every quiet detail might matter;
- how stable repeated structure helps the player form predictions;
- how event boundaries should relate to surprise rather than raw audiovisual magnitude;
- how a machine can support expert compression without hiding mandatory value behind constant checking.

## 3. What was investigated
Research areas:
- event segmentation and perceptual prediction;
- vigilance decrement and sustained monitoring workload;
- human factors literature on repeated/non-actionable alerts and alert fatigue;
- ecological-interface principles concerning support for skilled action and error recovery;
- previous Chappy5 findings from Hokuto, Shin Hanabi, Madoka 2, OkiDoki GOLD, the technology-gap audit, and all five self-study reports.

Representative external sources:
1. Reynolds, Zacks & Braver, *A Computational Model of Event Segmentation From Perceptual Prediction*, Cognitive Science (2007), DOI: 10.1080/15326900701399913.
2. Zacks & Swallow, *Event Segmentation*, Current Directions in Psychological Science (2007), DOI: 10.1111/j.1467-8721.2007.00480.x.
3. Kumar et al., *Bayesian Surprise Predicts Human Event Segmentation in Story Listening*, Cognitive Science (2023), DOI: 10.1111/cogs.13343.
4. Warm, Parasuraman & Matthews, *Vigilance Requires Hard Mental Work and Is Stressful*, Human Factors (2008), DOI: 10.1518/001872008X312152.
5. Ancker et al., *Effects of workload, work complexity, and repeated alerts on alert fatigue in a clinical decision support system* (2017), PMCID: PMC5387195.
6. Edworthy-related/human-factors alert literature summarized in *A review of human factors principles for the design and implementation of medication safety alerts in clinical information systems* (2010), PMCID: PMC2995688.
7. Rasmussen & Vicente, *Coping with human errors through system design: implications for ecological interface design* (1989), DOI: 10.1016/0020-7373(89)90014-X.

No external research is treated as a pachislot-specific numerical standard.

## 4. Newly learned
### SOURCED FACT
Event-segmentation research describes continuous activity as being perceived in meaningful event units. Recurrent sequential structure supports prediction, while transient increases in prediction error are associated with perceived event boundaries. Reynolds et al. specifically model recurring within-event patterns as enabling prediction and unexpected transitions as boundary signals. Kumar et al. further report an association between Bayesian surprise and human-marked event boundaries.

Vigilance research shows that sustained monitoring is not cognitively free. Warm, Parasuraman & Matthews review converging behavioral, physiological and subjective evidence that vigilance can require substantial mental work and increase distress.

Human-factors alert research shows that a high burden of repeated or low-information alerts can reduce response quality. Ancker et al. found lower alert acceptance as repeated reminders accumulated; their results distinguished repeated low-value information from workload quantity alone. Reviews of clinical alarm systems similarly warn that large proportions of non-actionable alarms can weaken responsiveness to important alarms.

Ecological-interface research argues that reliable human-system interaction should not assume error can be eliminated by training alone; interfaces should reduce control interference and support recovery. The broader framework is intended to help users become active problem solvers rather than passive monitors.

### OBSERVATION FROM EXISTING CHAPPY5 RESEARCH
Across the stored case studies, machines of very different lineages repeatedly preserve a recognizable baseline grammar before meaningful deviations:
- Hokuto uses ordinary repeated action and information geography so a rare role/state change can edit expectation;
- Shin Hanabi allows reel stopping itself to carry information, making learned normal forms necessary for contradiction/reach-eye recognition;
- OkiDoki GOLD relies on a highly stable repeated loop and a small set of authoritative state signals rather than requiring every surface to communicate continuously.

These observations do **not** imply the same presentation density or signal grammar should be copied across machines. They show a recurring relationship: meaningful change depends on a learnable baseline.

### INTERPRETATION
A machine does not become easier to read merely by reducing animation count. It becomes easier to read when the player can form a trustworthy prediction of what ordinary play looks/sounds/feels like and can safely allocate less attention to that region.

Therefore the useful unit is not “number of cues.” It is the ratio between **actionable information** and **attention demanded**.

A deviation has value when it changes the player’s prediction, action, interpretation, or confidence. A cue that is visually/sound-wise strong but repeatedly carries no actionable or learnable distinction consumes attention authority without buying information.

This creates an important machine-level distinction:

`QUIET ≠ SAFE TO IGNORE`

A quiet system can still force vigilance if players believe missing one subtle cue can cost value. Conversely, a visually active routine can become low-cost once its stable portions are learned and genuinely non-actionable.

Event boundaries should therefore be authored around **model update**, not spectacle magnitude. A small timing omission or reel contradiction can be a stronger boundary than a large flash if the former changes what the player should believe.

## 5. What changed from prior understanding
Previous Chappy5 language emphasized `REST`, `ATTENTION RELEASE`, `SYNC SCARCITY` and “do not make every game loud.” Run 2 changes that into a stronger systems model:

**REST is not merely a low-intensity aesthetic state. REST is the machine’s prediction-training state.**

The baseline teaches the player what normally follows BET, START and three STOPs. Repetition is productive when it compresses expectation. Meaningful deviations spend that learned prediction model.

Likewise, “sparse presentation” is not automatically good. If sparse cues are ambiguous, mandatory, or too easy to miss, sparsity can increase vigilance burden rather than reduce it.

## 6. Reusable design principles
`REST IS A PREDICTION-TRAINING STATE, NOT JUST A QUIET VISUAL STATE.`

`THE PLAYER SHOULD BE ABLE TO LEARN WHAT IS SAFE TO IGNORE.`

`MEANINGFUL DEVIATION SHOULD PURCHASE A MODEL UPDATE, NOT MERELY ATTENTION.`

`SIGNAL AUTHORITY IS FINITE; LOW-VALUE REPETITION SPENDS IT.`

`QUIET DOES NOT MEAN LOW-COST IF THE PLAYER MUST MONITOR IT DEFENSIVELY.`

`AN EVENT BOUNDARY SHOULD CORRESPOND TO A CHANGE IN BELIEF, ACTION, OR VALUE — NOT JUST A BIGGER EFFECT.`

`MASTERY SHOULD COMPRESS THE BASELINE AND SHARPEN DEVIATION, NOT EXPAND THE CHECKLIST.`

`A MACHINE CAN BE INFORMATION-RICH WITHOUT BEING ATTENTION-HUNGRY.`

`DO NOT USE UNCERTAINTY ABOUT WHETHER A CUE MATTERS AS A SUBSTITUTE FOR DEPTH.`

`THE WHOLE MACHINE SHOULD AGREE ON WHICH EVENTS DESERVE ATTENTION.`

## 7. Conditions / misuse risks
- These principles must not be used to make all normal play minimal or silent. Some machines deliberately use dense recurring presentation; the requirement is learnable information hierarchy, not visual austerity.
- Prediction should not become perfect determinism. Surprise, ambiguity and false hypotheses can be enjoyable when they are bounded and interpretable. The danger is unlearnable ambiguity, not uncertainty itself.
- Alert-fatigue research comes from safety-critical contexts. Its numerical rates and severity cannot be imported directly into entertainment design. Only the general principle about repeated low-value signals and attention trust is reused.
- `SAFE TO IGNORE` must never mean hiding payout-affecting or required technical information. If player value depends on a cue, accessibility/readability requirements increase rather than decrease.
- A strong rare cue should not be made artificially scarce solely to manufacture impact if doing so makes the game unreadable or withholding.
- Expert compression must not be achieved by making beginner information cryptic. The same machine may need layered legibility.

## 8. What remains unknown
`UNRESOLVED`:
- how to measure Chappy5-specific “attention demanded per useful update” on iPhone without eye tracking;
- how many distinct attention-authority levels a future machine can support before hierarchy collapses;
- how long a player needs to learn a baseline strongly enough for subtle deviations to become reliable;
- how beginner and expert safe-to-ignore maps differ over 5 min / 100G / 500G / 3 h;
- how Game/Reel-derived ambiguity should interact with Visual/Audio certainty;
- whether some categories of deviation should be intentionally cross-modal while others should remain reel-only or audio-only;
- how much novelty is required to prevent over-habituation after the baseline has been fully compressed;
- practical iPhone-only methods for distinguishing healthy predictive compression from boredom or disengagement.

## 9. Worth studying next
Highest-value next Machine question:

**How can five Director outputs be represented as one machine-level `ATTENTION CONTRACT` without turning research principles into premature game specification?**

A research-only contract could classify event families by:
- ordinary / safe-to-ignore baseline;
- optional texture;
- prediction-changing cue;
- action-required cue;
- state-confirming cue;
- reward boundary;
- recovery/return cue;
- intended novice/expert visibility;
- responsible modalities;
- evidence required to prove that the hierarchy is understood by Humans.

This remains a methodology candidate only.

## 10. Possible future production value
If Human later approves production, this model can prevent five individually strong Director lines from competing for the same attention budget.

Game & Reel can define which events actually change possibility/value; Visual and Sound can reserve authority for those events; Mechanism can avoid moving without causal responsibility; QA can test whether players learned what matters and what does not; Machine can judge whether the combined result preserves an intelligible long-session rhythm.

The likely production benefit is not “less presentation.” It is **more information value per unit of player attention**, making repeated play readable enough to sustain mastery while preserving room for meaningful surprise.

## Evidence labels / unresolved discipline
No commercial machine alert density, event frequency or proprietary control table is inferred. General perception/HCI/human-factors research is used only to derive reusable principles. Pachislot-specific thresholds remain `UNRESOLVED` until target-device Human evidence exists.

`FUTURE_CONSIDERATION_CANDIDATE = MACHINE_ATTENTION_CONTRACT_RESEARCH_METHOD`
`ORIGINAL_CONCEPT_REFINEMENT = NONE`
`CODE_IMPLEMENTATION = NONE`
`PROTOTYPE = NONE`
`HUMAN_GATE_CROSSED = FALSE`
