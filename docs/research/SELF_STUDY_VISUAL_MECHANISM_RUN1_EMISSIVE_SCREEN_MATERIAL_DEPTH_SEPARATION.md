# Chappy5 — Visual & Mechanism Director Self-Study Run 1

> Status: `COMPLETE_RUN1`
> Shared object: `SELF_DIRECTED_STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## Research question
How can an iPhone, where cabinet body, glass, reels, lamps and display are all rendered on one emissive flat screen, still make them read as **different physical layers and different materials**, rather than one glossy UI surface?

This is not a cabinet design exercise and does not authorize an original machine, prototype, asset or code implementation.

---

## 1. Why this topic was selected
The previous Visual & Mechanism technology-gap audit identified the largest platform risk as `emissive-screen substitution`: a real machine provides separate physical planes, reflected light, true occlusion, real translucent lenses and independent light sources, while iPhone collapses those into pixels on one OLED plane.

The missing question was not merely “how do we render metal/glass?” but **which visual cues actually cause the eye to infer material and depth when real physical separation is unavailable**. That is directly relevant to the Chappy5 Reality Standard, which rejects flat rectangle stacking and requires cabinet depth, material distinction, reel physicality and lamp authority.

## 2. What was not understood before research
Before this run, Chappy5 already had strong qualitative rules: use occlusion, edge treatment, reflection, shadow, internal volume, source/lens/spill lighting, and preserve REST hierarchy.

What remained shallow:
- whether highlight brightness alone is enough to make a surface read as glossy/metallic;
- whether blur/shadow can independently create depth;
- whether motion can compensate for the lack of real parallax and binocular depth;
- whether “more realistic lighting complexity” necessarily improves material perception;
- how much the target iPhone display itself can support local contrast without turning the whole machine into one luminous poster.

## 3. What was investigated
### SOURCED FACT — target display
Apple's iPhone 12 specification lists a 6.1-inch OLED Super Retina XDR display, 2532×1170 at 460 ppi, HDR, P3 wide color, a typical contrast ratio of 2,000,000:1, 625-nit typical maximum brightness and 1,200-nit HDR peak brightness.

Source: Apple Support, iPhone 12 Technical Specifications
https://support.apple.com/ja-jp/111876

### SOURCED FACT — blur and contrast as depth cues
O'Shea, Govan & Sekuler (1997) experimentally separated blur and contrast and found that both influence pictorial depth; blur retained a depth effect even when contrast was controlled.

Source: Perception, “Blur and Contrast as Pictorial Depth Cues”
https://doi.org/10.1068/p260599

### SOURCED FACT — gloss depends on congruent highlight structure
Kim, Marlow & Anderson (2011) found perceived gloss declines when highlight position/orientation becomes inconsistent with diffuse surface shading. Bright spots are therefore not sufficient; their relationship to underlying shape/shading matters.

Source: Journal of Vision, “The perception of gloss depends on highlight congruence with surface shading”
https://doi.org/10.1167/11.9.4

Related evidence shows orientation and brightness congruence both contribute to gloss perception.
Source: Journal of Vision
https://pubmed.ncbi.nlm.nih.gov/21873616/

### SOURCED FACT — dark specular structure can also signal gloss
Research on specular “lowlights” shows that dark reflected structure, when aligned with surrounding shading, can contribute to gloss perception. Gloss is therefore not equivalent to “add white bloom.”

Source: Current Biology, “The dark side of gloss”
https://pubmed.ncbi.nlm.nih.gov/23001059/

### SOURCED FACT — highlight shape and illumination structure alter perceived gloss
van Assen, Wijntjes & Pont (2016) found highlight shape changes gloss judgments for both photographed real objects and display-viewed images. More complex highlights were not automatically judged glossier.

Source: Journal of Vision
https://pubmed.ncbi.nlm.nih.gov/27271808/

### SOURCED FACT — motion can strengthen perceived material/depth information
Research on gloss and head motion reports that temporal image changes caused by observer motion can strengthen perceived gloss. Motion-parallax literature also supports relative motion as an effective monocular depth cue, although it does not provide unrestricted absolute depth and can conflict with other cues.

Sources:
https://doi.org/10.1167/10.9.15
https://doi.org/10.1080/14640748908402390
https://doi.org/10.1146/annurev-vision-110323-104032

### SOURCED FACT — high dynamic range/context changes perceived gloss
HDR material-perception research reports that background luminance/context can substantially affect perceived gloss, indicating that material appearance is contextual rather than a property of an isolated object patch.

Source: Journal of Vision, “Perceived glossiness in high dynamic range scenes”
https://pubmed.ncbi.nlm.nih.gov/20936748/

## 4. What was newly learned
### INTERPRETATION
The strongest new result is that **material identity should be authored as a cue relationship, not as a shader label**.

A “metal” surface does not become convincing because it has a metallic color, strong white highlight and high contrast. The eye evaluates relationships among shape, diffuse shading, highlight orientation/position, dark reflected structure, neighboring surfaces and motion. If these relationships disagree, adding stronger effects can reduce credibility.

### REUSABLE PRINCIPLE
`MATERIAL IDENTITY IS A RELATIONSHIP BETWEEN SHAPE, LIGHT AND CONTEXT — NOT A COLOR PRESET.`

### INTERPRETATION
The flat-screen problem is not solved by maximizing simulated depth everywhere. Different cues can carry different jobs:
- occlusion / border interruption: depth ordering;
- shading and highlight congruence: shape + material;
- local blur/contrast differences: additional pictorial separation;
- relative motion: dynamic depth confirmation;
- brightness reserve: lamp authority;
- stable spatial hierarchy: machine identity.

### REUSABLE PRINCIPLE
`DEPTH SHOULD BE OVERDETERMINED BY CONSISTENT CUES, NOT EXAGGERATED BY ONE CUE.`

### INTERPRETATION
OLED contrast is useful but dangerous. Because the entire screen can emit light, broad high-luminance surfaces can erase the distinction between “cabinet body that reflects light” and “lamp/display that emits light.” Chappy5 therefore needs an authored luminance hierarchy, not simply access to high contrast/HDR.

### REUSABLE PRINCIPLE
`ON AN EMISSIVE SCREEN, REFLECTIVE SURFACES MUST SPEND LESS LUMINANCE AUTHORITY THAN TRUE SIGNAL SURFACES.`

### INTERPRETATION
Motion is especially valuable because it can reveal whether a highlight belongs to a curved/material surface or is merely painted onto it. Subtle coherent changes in shading/reflection during a mechanism/reel movement may provide more physical credibility than stronger static bevels.

### REUSABLE PRINCIPLE
`WHEN REAL PARALLAX IS LOST, COHERENT CHANGE OVER TIME CAN CONFIRM PHYSICAL LAYERING.`

## 5. What changed from previous understanding
Previous understanding leaned toward a checklist model: depth = bevel + shadow + highlight + occlusion; material = different reflection/roughness; lamp = bloom/spill.

This run changes that to a **consistency model**.

The acceptance question should not be “are these effects present?” but:
- do highlights agree with apparent surface curvature and diffuse shading?
- do dark reflected structures agree with the same material model?
- does an object preserve material identity while it moves?
- do near/far layers keep consistent occlusion and relative motion?
- does the lamp exceed the surrounding body in signal authority without washing out it or the reels?

This also means more visual complexity is not inherently better. Illumination/highlight complexity can make gloss judgments less stable; decorative noise can therefore actively weaken material legibility.

## 6. Reusable design principles for future Chappy5
1. `MATERIAL IDENTITY IS A RELATIONSHIP BETWEEN SHAPE, LIGHT AND CONTEXT — NOT A COLOR PRESET.`
2. `DEPTH SHOULD BE OVERDETERMINED BY CONSISTENT CUES, NOT EXAGGERATED BY ONE CUE.`
3. `ON AN EMISSIVE SCREEN, REFLECTIVE SURFACES MUST SPEND LESS LUMINANCE AUTHORITY THAN TRUE SIGNAL SURFACES.`
4. `A HIGHLIGHT THAT DISAGREES WITH SHAPE CAN FLATTEN AN OBJECT EVEN WHEN IT IS BRIGHT.`
5. `DARK REFLECTION STRUCTURE CAN CARRY MATERIAL INFORMATION; GLOSS IS NOT SYNONYMOUS WITH WHITE BLOOM.`
6. `WHEN REAL PARALLAX IS LOST, COHERENT CHANGE OVER TIME CAN CONFIRM PHYSICAL LAYERING.`
7. `MATERIAL DIFFERENTIATION SHOULD SURVIVE DESATURATION; COLOR ALONE IS NOT MATERIAL.`
8. `REST VISUAL IS THE CALIBRATION STATE FOR MATERIAL AND LIGHT HIERARCHY.`
9. `A LAMP NEEDS RESERVED CONTRAST AROUND IT; THE WHOLE CABINET CANNOT BE THE LIGHT SOURCE.`
10. `VISUAL REALITY REQUIRES CUE CONSISTENCY ACROSS STATIC AND MOVING STATES.`

## 7. Limits / dangerous misuse
### UNRESOLVED / LIMIT
The cited perception studies use controlled stimuli, not pachislot cabinets on iPhone Safari. They support general visual mechanisms, not exact Chappy5 parameters.

Dangerous misuse:
- inventing fixed “correct” blur/shadow/highlight values from these papers;
- assuming HDR should always be used or that peak brightness equals realism;
- using constant motion merely to create depth, which could damage REST quiet and fatigue the player;
- adding dynamic parallax that moves independently of the user's actual viewing/interaction context and creates a false floating-card effect;
- making every surface glossy because gloss cues are well studied;
- sacrificing reel readability for material realism;
- treating perceptual tricks as permission to copy third-party cabinet appearance.

## 8. What remains unknown
### UNRESOLVED
- Actual iPhone 12 Safari rendering behavior for the future Chappy5 stack under normal brightness, True Tone, ambient light and Low Power conditions.
- Whether subtle material differences survive screen recording/compression as well as direct viewing.
- Minimum contrast/luminance reserve required for a lamp to remain authoritative without masking reel symbols.
- How much relative motion can strengthen depth before it starts reading as UI parallax rather than machine mass.
- Which combinations of static cues are robust enough that no constant motion is required at REST.
- Whether Human observers reliably distinguish Chappy5 material classes without labels/color cues.
- How finger occlusion changes the apparent cabinet/reel depth at the exact STOP moment.

## 9. Next worthwhile study
Highest-value next Visual & Mechanism study:

**Perceptual acceptance methodology for physical-layer separation on target iPhone** — how to test, without asking leading questions, whether Humans actually see “body / glass / recessed reel / lamp / internal display” as distinct layers.

This should eventually combine forced-choice or pairwise judgments, desaturated material checks, REST/event comparisons, direct-device viewing, motion/static comparisons and failure examples. It remains research-only until Human Gate allows prototype/test-scene work.

## 10. Possible future value to Chappy5 production
If later authorized, this research can prevent a common failure mode where a browser pachislot is technically polished but visually reads as one flat glowing game screen.

It gives Visual & Mechanism a stronger future authoring target:
- use coherent cue relationships instead of generic bevel/glow recipes;
- reserve emissive authority for actual signals/display regions;
- make moving surfaces confirm, rather than contradict, their static material/depth cues;
- preserve a quiet REST state as the visual calibration baseline;
- evaluate physical presence by whether Humans infer separate object layers, not by effect count.

No original machine concept, cabinet, mechanism, asset, prototype or code was created in this run.

## Preservation
`VISUAL_MECHANISM_SELF_STUDY = COMPLETE_RUN1`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
