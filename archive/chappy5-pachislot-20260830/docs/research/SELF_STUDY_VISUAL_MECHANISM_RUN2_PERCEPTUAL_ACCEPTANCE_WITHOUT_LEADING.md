# Chappy5 — Visual & Mechanism Director Self-Study Run 2

> Status: `COMPLETE_RUN2`
> Shared object: `SELF_DIRECTED_STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## Research question
How can Chappy5 eventually test on the target iPhone, **without leading the observer**, whether a rendered machine is actually perceived as distinct body / glass / recessed reel / lamp / internal-display layers rather than one polished emissive UI surface?

This is research about future acceptance methodology only. No original cabinet, prototype, asset, test scene or code is authorized or created here.

---

## 1. Why this topic was selected
Visual & Mechanism Run 1 changed the model from a checklist (`bevel + shadow + highlight + glow`) to a cue-consistency model. It established that material/depth appearance depends on relationships among occlusion, shading, highlights, reflected structure, motion and luminance hierarchy.

The remaining problem is epistemic: **how would we know that Humans really perceive those layers?**

A direct question such as “does this look deep?” or “does this look like glass?” risks teaching the participant the intended answer. A beauty score can also pass a visually polished image that still reads as a flat UI. Chappy5 therefore needs a future acceptance method that measures the inferred scene structure rather than asking whether the renderer looks impressive.

## 2. What was not understood before research
Before this run, the tentative future test idea included forced-choice, pairwise judgments, desaturation checks, REST/event comparison and direct-device viewing.

What remained unclear:
- what a pairwise depth task actually proves;
- whether one global “realism” rating can stand in for material/depth perception;
- whether depth order and depth magnitude should be treated as the same property;
- how conflicting cues and observer differences affect conclusions;
- how to use confidence without mistaking confidence for accuracy;
- how to avoid passing a design because participants simply learned our vocabulary;
- how to tell “glass/body/reel are distinguishable” from “they are merely different colors.”

## 3. What was investigated

### SOURCED FACT — local/pairwise depth comparisons are measurable but not equivalent to full metric depth
Koenderink, van Doorn & Kappers compared local surface attitude with pairwise depth comparisons in pictorial relief. Both produced broadly similar relief structure, but pairwise depth comparisons were substantially less precise than might be expected from surface-attitude measurements.

Source: Perception & Psychophysics (1996), PMID 8838162
https://pubmed.ncbi.nlm.nih.gov/8838162/

### SOURCED FACT — occlusion can specify depth order without specifying depth magnitude
Work on occlusion and disparity reports that occlusion can provide which surface is in front while not necessarily providing the magnitude of separation. This matters because “reel appears behind glass” and “reel appears 30 mm recessed” are different claims.

Source: Perception & Psychophysics (1999), PMID 10334093
https://pubmed.ncbi.nlm.nih.gov/10334093/

### SOURCED FACT — motion/occlusion cue combinations can conflict, and observers weight them differently
Hildreth & Royden found large between-observer differences in how motion-parallax, motion-occlusion and stereo cues influenced depth-order judgments, especially when cues conflicted or varied in reliability.

Source: Attention, Perception, & Psychophysics (2011), PMID 21725706
https://pubmed.ncbi.nlm.nih.gov/21725706/

Related dynamic-occlusion work shows that relative motion and occlusion information can combine differently depending on simulated depth and cue conflict.

Sources:
https://doi.org/10.1068/p170255
https://pubmed.ncbi.nlm.nih.gov/24130259/

### SOURCED FACT — material appearance is categorical and depends on interacting image structure, not one scalar property
Human material judgments can shift categories when specular image structure changes. Research on gloss and texture also demonstrates that judged glossiness and bumpiness can interact, making isolated one-dimensional ratings incomplete.

Sources:
Nature Human Behaviour (2023)
https://www.nature.com/articles/s41562-023-01601-0

Ho, Landy & Maloney (2008), conjoint measurement of gloss and surface texture
https://doi.org/10.1111/j.1467-9280.2008.02067.x

### SOURCED FACT — humans can categorize materials quickly, but color and low-level cues can influence performance
Wiebel, Valsecchi & Gegenfurtner found material categorization can occur rapidly, but performance is affected by low-level image factors including color. Other real-world-image work found material categorization remains possible under brief viewing and cannot be explained by only simple gloss/color/texture/shape judgments.

Sources:
https://pubmed.ncbi.nlm.nih.gov/23456971/
https://pmc.ncbi.nlm.nih.gov/articles/PMC4132332/

### SOURCED FACT — same/different and pair-comparison tasks can probe material-category structure without requiring an exhaustive vocabulary
Research has used same/different judgments for material categories and pair-comparison questions to infer visual material attributes. This supports a future method where observers need not be told “this should be metal/glass/plastic” before responding.

Sources:
https://pubmed.ncbi.nlm.nih.gov/25536464/
https://arxiv.org/abs/1801.03127

### SOURCED FACT — confidence and discrimination accuracy are separable
Perceptual-confidence research shows confidence can be miscalibrated, especially as task difficulty changes. Confidence can still be informative, but it is not interchangeable with objective discrimination accuracy.

Source: Perception & Psychophysics, “The calibration and resolution of confidence in perceptual judgments”
https://pubmed.ncbi.nlm.nih.gov/8036121/

---

## 4. What was newly learned

### INTERPRETATION — acceptance should test inferred scene relationships, not the intended labels
A future test should not begin with “is the reel recessed?” The participant should first reveal the scene model they inferred.

For example, research-only future questions can test:
- which of two marked regions appears in front;
- whether two regions appear to be the same or different material class;
- which region appears to emit light versus reflect it;
- whether a moving highlight remains attached to the same apparent surface;
- whether the perceived ordering remains stable from REST to event state.

Only after unprompted/neutral discrimination should descriptive labels be introduced.

### REUSABLE PRINCIPLE
`TEST THE INFERRED SCENE GRAPH BEFORE ASKING FOR REALISM.`

### INTERPRETATION — depth order, depth magnitude and material identity require separate acceptance claims
A reel can successfully appear “behind the bezel” while the amount of recession remains weak or unstable. A glass-like region can be distinguished from the cabinet body while still failing to read as a physically plausible sheet of glass.

Therefore one global REALITY score hides failure modes.

### REUSABLE PRINCIPLE
`DEPTH ORDER, DEPTH MAGNITUDE, MATERIAL IDENTITY AND EMISSIVE AUTHORITY ARE DIFFERENT CLAIMS.`

### INTERPRETATION — repeated cue agreement is more important than one perfect frame
Run 1 showed cue consistency matters. Run 2 adds that acceptance should test whether the same inferred layer relation survives:
- static REST;
- reel motion;
- STOP/settling;
- lamp activation;
- temporary display brightness changes.

If body/glass/reel ordering changes unintentionally across states, the object model is unstable even if each screenshot looks polished.

### REUSABLE PRINCIPLE
`A PHYSICAL LAYER PASSES ONLY IF ITS IDENTITY SURVIVES STATE CHANGE.`

### INTERPRETATION — direct material naming should not be the first test
Material-category studies show humans use interacting low-level and high-level structure. If Chappy5 asks “which one is glass?” first, color/learned convention can produce an apparently correct answer.

A stronger future sequence is:
1. neutral same/different or pair comparison;
2. depth-order / emitter-vs-reflector discrimination;
3. confidence;
4. only then optional naming/free description.

### REUSABLE PRINCIPLE
`DO NOT TEACH THE MATERIAL LABEL BEFORE MEASURING THE PERCEPT.`

### INTERPRETATION — confidence can reveal unstable perception but cannot rescue low accuracy
A participant who chooses the intended depth order at chance-like accuracy with high confidence does not prove a robust cue. Likewise, low confidence with high discrimination may indicate an implicit but not consciously stable cue.

### REUSABLE PRINCIPLE
`REPORT CONFIDENCE BESIDE DISCRIMINATION, NEVER IN PLACE OF IT.`

### INTERPRETATION — observer disagreement is evidence, not noise to average away immediately
Cue-conflict studies show observers can weight visual depth cues differently. If one Chappy5 surface only works for a subset of people, a single averaged score can hide fragility.

### REUSABLE PRINCIPLE
`PERCEPTUAL ROBUSTNESS INCLUDES BETWEEN-OBSERVER CONSISTENCY.`

---

## 5. What changed from previous understanding
Previous thinking treated the future Human acceptance test as mostly a checklist of visual conditions: direct iPhone view, desaturation, pair comparison, REST/event comparison.

This run changes it into a **claim-decomposition model**.

The future acceptance question should be split into at least four independent perceptual claims:

1. **Layer order** — does A appear in front of/behind B?
2. **Layer persistence** — does that relation survive motion, STOP, lamp events and brightness change?
3. **Material separation** — are body/glass/reel/lens/display perceived as meaningfully different surface classes without relying on labels?
4. **Emission hierarchy** — can Humans distinguish signal/light-source regions from reflective body regions?

Only after these pass should a broader “does this feel like one physical machine?” score be interpreted as supporting evidence.

This also changes the role of desaturation. Desaturation is not a universal realism test; it is a diagnostic manipulation for asking whether material/layer separation collapses when color is removed. Because color can genuinely contribute to material categorization, failure under desaturation does not automatically mean the original is invalid. It means the design may be color-dependent and should be understood as such.

---

## 6. Reusable design / QA principles for future Chappy5

1. `TEST THE INFERRED SCENE GRAPH BEFORE ASKING FOR REALISM.`
2. `DEPTH ORDER, DEPTH MAGNITUDE, MATERIAL IDENTITY AND EMISSIVE AUTHORITY ARE DIFFERENT CLAIMS.`
3. `A PHYSICAL LAYER PASSES ONLY IF ITS IDENTITY SURVIVES STATE CHANGE.`
4. `DO NOT TEACH THE MATERIAL LABEL BEFORE MEASURING THE PERCEPT.`
5. `REPORT CONFIDENCE BESIDE DISCRIMINATION, NEVER IN PLACE OF IT.`
6. `PERCEPTUAL ROBUSTNESS INCLUDES BETWEEN-OBSERVER CONSISTENCY.`
7. `PAIRWISE JUDGMENT IS A LOCAL TEST, NOT PROOF OF THE WHOLE CABINET.`
8. `COLOR-REMOVAL IS A DIAGNOSTIC, NOT AN AUTOMATIC PASS/FAIL RULE.`
9. `EMITTER VS REFLECTOR SHOULD BE TESTED AS A RELATIONSHIP, NOT BY PEAK BRIGHTNESS ALONE.`
10. `REST AND EVENT STATES MUST PRESERVE THE SAME PHYSICAL SCENE MODEL UNLESS A REAL MECHANISM ACTUALLY CHANGES IT.`
11. `A BEAUTIFUL FLAT UI MUST BE ABLE TO FAIL THE PHYSICAL-LAYER TEST.`
12. `REALITY ACCEPTANCE SHOULD REVEAL WHICH CUE FAILED, NOT ONLY WHETHER THE OBSERVER LIKED THE IMAGE.`

---

## 7. Limits / dangerous misuse

### UNRESOLVED / LIMIT
The cited work is general psychophysics/material/depth research, not a validated Chappy5 pachislot protocol on iPhone Safari. It supports method structure, not exact sample sizes, thresholds, timing or PASS percentages.

Dangerous misuse:
- inventing a universal “80% correct = REALITY PASS” threshold without validation;
- treating forced-choice as the only form of evidence;
- training observers with Chappy5's intended layer names before testing;
- removing color and declaring failure even where color is a legitimate material cue;
- averaging participants until meaningful cue conflicts disappear;
- assuming correct front/back order proves convincing metric depth;
- using animated motion solely to improve test scores even if it violates REST quiet;
- optimizing isolated material patches while losing whole-machine hierarchy;
- copying third-party cabinet materials or protected visual design to obtain an easier realism score.

---

## 8. What remains unknown

### UNRESOLVED
- What minimum future Human sample is practical and informative for Chappy5's iPhone-only workflow.
- Which neutral task wording is least leading in Japanese for body/glass/reel/lamp/display judgments.
- Whether observers should see one state at a time or alternating REST/event states for strongest ecological validity.
- How actual ambient light, screen brightness, True Tone/Night Shift and viewing angle change layer/material judgments.
- How finger occlusion during STOP changes perceived cavity depth and control-surface ownership.
- Whether a layer relation perceived on the physical iPhone survives screen recording/video review; direct-device and recorded evidence may need separate labels.
- How to combine local pairwise tests into one whole-machine acceptance judgment without creating a long laboratory procedure.
- Whether “emitter vs reflector” can be tested reliably with neutral wording that does not reveal the intended lighting hierarchy.

---

## 9. Next worthwhile study

Highest-value next Visual & Mechanism question:

**Perceptual persistence under touch and interruption** — when a finger covers part of the cabinet at STOP, the viewport moves/reorients, or Safari is interrupted and resumed, what visual anchors must remain stable so body/reel/control ownership does not collapse into ordinary mobile UI?

This should remain research-only until Human Gate authorizes test scenes or implementation.

---

## 10. Possible future value to Chappy5 production

If later authorized, this research can turn the Reality Standard's qualitative requirement — “one physical machine exists on the iPhone” — into a more falsifiable Human evaluation without reducing it to a generic beauty score.

It can help future Visual & Mechanism work:
- diagnose whether failure is layer order, material identity, luminance hierarchy or state persistence;
- avoid using labels that coach the Human into agreeing with the designer;
- distinguish a polished flat game UI from a stable inferred physical scene;
- compare REST and event states without rewarding constant motion;
- keep reel readability and signal authority measurable as independent concerns;
- give Playtest & QA evidence that can be discussed with Machine Director without prematurely changing game specification.

No original machine concept, protected design, cabinet, mechanism, asset, prototype, test scene or code was created in this run.

## Preservation
`VISUAL_MECHANISM_SELF_STUDY = COMPLETE_RUN2`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
