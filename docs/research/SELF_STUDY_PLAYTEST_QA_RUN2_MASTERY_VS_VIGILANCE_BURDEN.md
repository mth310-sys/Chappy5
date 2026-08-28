# Self-Directed Study — Playtest & QA Director Run 2

## Theme
**How can Chappy5 distinguish rewarding mastery from defensive vigilance: a player learning what matters and safely ignoring the rest versus being forced to continuously monitor the machine for fear of missing value?**

> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production/prototype/code/browser play: `PROHIBITED`

This is not a new machine Case Study. No original concept is evaluated, ranked or changed.

---

# 1. Why this theme was chosen

Run 1 established that repeated-action quality must be measured across action integrity, causal response, workload, intrinsic loop value and reward/return, and that mastery quality is not merely error reduction but better attention allocation.

The unresolved question behind that statement is now more precise:

> When a player gets “better” at a pachislot loop, are they actually understanding and compressing the machine, or have they merely learned to stay alert to many low-frequency exceptions?

This distinction matters because both can produce experienced-looking play. A veteran can appear fluent while still carrying high vigilance burden. Conversely, a sparse machine can look uneventful while allowing an expert to predict more from fewer cues and safely ignore most of the surface.

For Chappy5, confusing these states would be dangerous. We could mistake constant monitoring, fear of missed information or memorized checking rituals for depth.

---

# 2. What was not understood before this study

Before Run 2, Chappy5 had useful labels such as workload, fatigue, attention allocation and mastery, but lacked a QA model that separates:

- **productive perceptual learning** — relevant signals become easier to identify;
- **automaticity** — practiced operations require less cognitive effort;
- **expert information reduction** — experts attend selectively to task-relevant information and ignore irrelevant information;
- **vigilance burden** — performance depends on sustained monitoring for unpredictable/infrequent signals;
- **false vigilance** — the player feels compelled to monitor many cues because the information hierarchy is not trusted;
- **boredom** — low challenge or insufficient meaningful variation;
- **flow/engagement** — skilled concentration that may feel effortless despite sustained attention.

Run 1 also did not establish how to tell “I can ignore this safely” from “I stopped noticing this because I am fatigued.”

---

# 3. What was investigated

Research areas:

1. sustained-attention / vigilance workload and vigilance decrement;
2. practice, automaticity and reduced cognitive load;
3. expert gaze / information-reduction research;
4. perceptual learning and improved signal-to-noise processing;
5. skill–challenge balance and flow in games;
6. implications for future pachislot Human trials without assuming any specific commercial machine design.

Primary sources used:

- Dember et al., *The Rate of Gain of Perceived Workload in Sustained Attention* (1993) — https://journals.sagepub.com/doi/10.1518/107118193784162371
- Warm, Dember & Hancock, *Workload and Vigilance* (1998) — https://doi.org/10.1177/154193129804201025
- Temple et al., *The Effects of Signal Salience and Caffeine on Performance, Workload, and Stress in an Abbreviated Vigilance Task* (2000) — https://doi.org/10.1518/001872000779656480
- Finomore et al., *Viewing the Workload of Vigilance Through the Lenses of the NASA-TLX and the MRQ* (2013) — https://journals.sagepub.com/doi/10.1177/0018720813484498
- Haith & Krakauer, *The multiple effects of practice: skill, habit and reduced cognitive load* (2018) — https://pmc.ncbi.nlm.nih.gov/articles/PMC6443249/
- Brams et al., *The relationship between gaze behavior, expertise, and performance: A systematic review* (2019) — https://pubmed.ncbi.nlm.nih.gov/31414844/
- Amitay et al., *Perceptual learning: top to bottom* (2014) — https://pubmed.ncbi.nlm.nih.gov/24296314/
- Dixon et al., *The relationship between the skill-challenge balance, game expertise, flow and the urge to keep playing complex mobile games* — https://pmc.ncbi.nlm.nih.gov/articles/PMC8943660/

---

# 4. New learning

## SOURCED FACT — vigilance can be demanding rather than merely boring

Human-factors research on vigilance reports that sustained monitoring can impose substantial perceived workload. Mental demand and frustration can be major contributors, and detection performance can decline over time. Dember et al. also reported workload increasing over time while detection probability declined.

### INTERPRETATION
A pachislot loop that asks the player to continuously watch for rare deviations is not automatically “light” just because each individual game is simple.

A quiet screen can therefore hide a high attention tax.

### REUSABLE PRINCIPLE
`SPARSE PRESENTATION DOES NOT GUARANTEE LOW ATTENTION COST.`

---

## SOURCED FACT — even short vigilance tasks can expose the problem

Temple et al. found that an abbreviated 12-minute computerized vigilance task reproduced major characteristics associated with much longer vigilance tasks, including vigilance decrement, high workload and stress.

### INTERPRETATION
Future Chappy5 QA should not assume that only a three-hour test can reveal vigilance problems. Short controlled probes may expose them early, while longer play remains necessary for product-level fatigue and retention judgments.

### REUSABLE PRINCIPLE
`VIGILANCE RISK CAN EMERGE EARLY; LONG-SESSION TESTING IS STILL REQUIRED TO JUDGE ITS PRODUCT COST.`

---

## SOURCED FACT — practice can improve skill, habit and cognitive load through partly separable effects

Haith & Krakauer review practice as producing multiple behavioral effects including faster performance, habitual behavior and reduced cognitive load, and argue these effects should not simply be collapsed into one concept of automaticity.

### INTERPRETATION
A player executing STOP actions faster after repeated play does not prove that they understand more, enjoy more, or allocate attention better.

Future QA must distinguish at least:
- motor fluency;
- rule understanding;
- perceptual discrimination;
- attention reduction;
- habitual repetition.

### REUSABLE PRINCIPLE
`FLUENCY IS NOT A SINGLE VARIABLE.`

### REUSABLE PRINCIPLE
`FASTER PLAY IS NOT AUTOMATICALLY DEEPER MASTERY.`

---

## SOURCED FACT — expertise often reduces information rather than increasing total attention

Brams et al.'s systematic review found broad support for the information-reduction hypothesis across many expertise domains: experts selectively allocate attention to task-relevant information and ignore irrelevant information more efficiently, although the exact gaze signature is domain dependent.

### INTERPRETATION
A strong Chappy5 mastery curve should plausibly let experienced players **monitor less surface area while extracting more useful meaning**.

This is the opposite of a design where expertise means memorizing an ever-growing checklist of things that must be inspected every game.

### REUSABLE PRINCIPLE
`GOOD MASTERY SHOULD REDUCE IRRELEVANT ATTENTION, NOT ACCUMULATE A LARGER CHECKLIST.`

### LIMIT
The review spans sports, professional tasks and other expertise domains. It does not establish a universal pachislot gaze pattern. Chappy5 must validate its own task-specific evidence later.

---

## SOURCED FACT — perceptual learning is more than raw sensory improvement

Amitay et al. describe perceptual learning as involving changes across multiple processing levels, including attention, memory and decision-related factors, and frame improvement partly as increasing signal-to-noise by reducing bottlenecks and inefficiencies.

### INTERPRETATION
For reel/result reading, mastery can be thought of as **better compression of meaningful evidence** rather than simply “seeing faster.”

The experienced player may require fewer checks because learned structures allow one cue to eliminate several hypotheses.

### REUSABLE PRINCIPLE
`MASTERY SHOULD INCREASE INFORMATION GAIN PER GLANCE.`

---

## SOURCED FACT — challenge, boredom, frustration and flow are not interchangeable

A mobile-game study found easy conditions produced more boredom, while harder conditions increased frustration; players with higher perceived skill showed greater flow. Hard and regular conditions could produce comparable flow despite different frustration levels.

### INTERPRETATION
Low workload is not necessarily good and high challenge is not necessarily bad. QA should not optimize for minimum mental demand.

The target is **meaningful selectable attention**, not zero attention.

### REUSABLE PRINCIPLE
`THE GOAL IS NOT MINIMUM ATTENTION; IT IS HIGH-VALUE ATTENTION.`

### LIMIT
Flow and urge-to-continue findings should not be treated as a pachislot engagement formula. Gambling-like products also require care not to equate strong continuation urge with healthy or intrinsically good design.

---

# 5. What changed from the previous understanding

Previous working idea:

> “Mastery is better attention allocation.”

Run 2 refines it to:

> **Mastery is demonstrated when repeated experience increases useful information extracted per unit of attention while decreasing unnecessary monitoring, without losing required detection accuracy.**

This is stronger because it creates falsifiable alternatives.

A player who looks at fewer things may be:
1. expertly filtering irrelevant information;
2. bored and disengaged;
3. fatigued and missing relevant information;
4. overconfident and making silent errors.

Therefore gaze reduction alone is not mastery. It must be paired with preserved or improved task-relevant detection/prediction.

Likewise, high attention alone is not engagement. It may be vigilance debt.

---

# 6. Reusable Chappy5 QA principles

## Principle A
`MASTERY SHOULD INCREASE INFORMATION GAIN PER GLANCE.`

An experienced player should increasingly extract useful state/result meaning from fewer or better-chosen observations.

## Principle B
`GOOD MASTERY SHOULD REDUCE IRRELEVANT ATTENTION, NOT ACCUMULATE A LARGER CHECKLIST.`

Depth should not require permanent surveillance of every visual/audio channel.

## Principle C
`SPARSE PRESENTATION DOES NOT GUARANTEE LOW ATTENTION COST.`

A quiet machine can still be exhausting if rare valuable deviations require constant monitoring.

## Principle D
`HIGH ATTENTION IS NOT PROOF OF ENGAGEMENT.`

Attention may be voluntary curiosity, skilled concentration, defensive checking or fatigue compensation.

## Principle E
`LOW ATTENTION IS NOT PROOF OF MASTERY.`

It may be expertise, boredom, learned helplessness or missed information.

## Principle F
`MEASURE ATTENTION TOGETHER WITH DETECTION, PREDICTION AND CONFIDENCE.`

Behavior must disambiguate why attention changed.

## Principle G
`THE GOAL IS NOT MINIMUM ATTENTION; IT IS HIGH-VALUE ATTENTION.`

Technical or reel-driven play may deliberately require attention. The test is whether attention reliably produces understanding, agency or useful prediction.

## Principle H
`A REPEATED LOOP SHOULD CONTAIN SAFE-TO-IGNORE REGIONS.`

If every frame, lamp, sound and reel position can unexpectedly carry critical value, the player cannot form an efficient attention policy.

---

# 7. Conditions where these principles do not apply / misuse risks

1. **Do not turn “safe to ignore” into “nothing matters.”** A loop with no optional depth may become trivial or boring.
2. **Do not assume experts must look less in every domain.** Some expert tasks use broader visual spans or different strategies; task-specific evidence is required.
3. **Do not reward missed information by hiding consequences.** If important information exists, QA must test whether it remains recoverable and learnable.
4. **Do not use low workload as a quality target.** A machine can be effortless and empty.
5. **Do not interpret prolonged concentration as automatically positive flow.** Vigilance, frustration or reward-conditioned capture can also sustain attention.
6. **Do not design around eye-tracking alone.** Chappy5 may not have eye tracking in normal workflow; observable choices, predictions, errors and verbalized confidence can provide useful lower-tech evidence.
7. **Do not use commercial-machine cue structures as templates.** The reusable target is the attention architecture principle, not copied reach eyes, flashes, lamps, sounds or reward cues.

---

# 8. Remaining unknowns

## UNRESOLVED — task-specific mastery signature
No evidence yet defines what expert attention compression should look like in an original Chappy5 machine.

## UNRESOLVED — acceptable vigilance cost
There is no universal threshold for how much sustained monitoring is acceptable in entertainment play, especially across different machine genres.

## UNRESOLVED — attention versus enjoyment without instrumentation
Chappy5 needs a practical Human-test method that works with its iPhone-first workflow and does not require laboratory eye-tracking equipment.

## UNRESOLVED — false confidence
A player may report that they understand the machine while systematically missing cues. QA needs paired prediction/detection checks.

## UNRESOLVED — long-session transition
We do not yet know where productive focused attention becomes defensive monitoring or fatigue for a future original machine.

## UNRESOLVED — reward contamination
Reward history can change what captures attention. Future QA must still separate intrinsic learning value from reward-conditioned vigilance.

---

# 9. Next worthwhile study

Highest-value next Playtest & QA question:

**How can Chappy5 run a low-infrastructure, iPhone-only Human trial that estimates attention efficiency without eye tracking?**

Candidate research directions only, not implementation:
- prediction probes at selected games;
- “what mattered this game?” recall probes;
- confidence calibration;
- detection of intentionally controlled information events;
- safe-ignore tests;
- error/omission logging;
- interruption-and-return probes;
- dual-task or secondary-task methods used cautiously to estimate spare attentional capacity;
- comparison of novice / learned / experienced exposure phases.

The goal would be to produce a practical `ATTENTION_EFFICIENCY_EVIDENCE` method that can distinguish expertise, boredom and vigilance fatigue on the actual target iPhone.

---

# 10. Possible future value to Chappy5 production

If validated later during production stages, these principles could prevent several failure modes:

- a reel-driven machine where “depth” is actually constant checking;
- a presentation-heavy machine where every channel demands attention and nothing can be safely ignored;
- an apparently beginner-friendly machine that becomes exhausting after novelty fades;
- a technical machine where expertise only means memorizing chores;
- a QA process that mistakes fast habitual tapping for mastery;
- a long-session design that uses rare surprise cues to hold vigilance rather than creating meaningful repeated play.

The desired future state is not a player staring harder. It is a player who increasingly knows **where to look, when to care, what can be ignored, what an action changed, and what is likely next**.

That is a stronger definition of learnable repeated play than “few errors” or “high attention.”

---

# Final status

`SOURCED_FACT / OBSERVATION / INTERPRETATION / REUSABLE_PRINCIPLE / UNRESOLVED` separation preserved.

`ORIGINAL_CONCEPT_REFINEMENT = DENIED`
`NEW_MACHINE_DESIGN = NOT_STARTED`
`BROWSER_PLAY = NOT_PERFORMED`
`CODE / PROTOTYPE / ASSETS = NOT_CREATED`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
