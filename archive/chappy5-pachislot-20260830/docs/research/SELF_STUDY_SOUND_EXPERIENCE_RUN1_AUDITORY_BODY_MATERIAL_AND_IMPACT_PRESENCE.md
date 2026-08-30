# Chappy5 — Sound & Experience Self-Study Run 1

> Director: Sound & Experience Director
> Shared object: `SELF_DIRECTED_STUDY`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
> Scope: autonomous learning only. No original sound concept, audio asset, prototype, code, machine spec, or Human Gate advancement.

## Research question

**When a real pachislot cabinet collapses onto an iPhone screen and small speakers, how much of “machine body” — hardness, material, thickness, size, contact, weight and physical consequence — can be supported by sound, and what makes that support believable rather than merely loud?**

This is deliberately narrower and deeper than the already-learned rules about attention hierarchy, silence/delay, event timing, BGM transitions, sparse presentation and long-session fatigue.

---

# 1. Why this theme was selected

The Technology Gap Audit already identified `machine-body acoustic substitution` as an unresolved capability, but it did not yet explain what acoustic information makes a contact sound imply a physical object.

Previous Chappy5 studies correctly established:
- repeated action timing must be causal;
- phone translation loses cabinet acoustic mass;
- loudness alone is not hierarchy;
- Visual/Mechanism/Audio must share one causal event story.

What remained shallow was the phrase **“machine body”** itself. It was still too easy to imagine it as “add low bass, resonance and reverb.” That is not a sufficient physical model and may be especially wrong on an iPhone speaker.

This study therefore asks what psychoacoustic and multisensory evidence actually supports perceived material/body properties.

---

# 2. What was not understood before this study

Before this run, Sound & Experience did not have a sufficiently evidence-based answer to these questions:

1. Which acoustic dimensions help listeners infer hardness/material from an impact?
2. Can sound influence perceived stiffness/weight/size rather than only identify a sound category?
3. Is “more bass = heavier” a safe reusable law?
4. How does decay/damping participate in perceived physical properties?
5. Does surrounding acoustic context/reverberation change inferred material?
6. Can synchronized touch/action make a relatively weak sound feel stronger or more physical?
7. What must remain unresolved because laboratory impact-sound research is not pachislot-specific and iPhone output has not been measured directly?

---

# 3. What was investigated

## SOURCED FACT — impact sounds carry material/action information

Hjortkjær & McAdams studied recorded impact sounds spanning wood, metal and glass and different actions, demonstrating that spectral and temporal information contributes to how listeners classify both material and action.

Source:
- Hjortkjær, J. & McAdams, S. (2016), *Spectral and temporal cues for perception of material and action categories in impacted sound sources*, Journal of the Acoustical Society of America.
  https://pubmed.ncbi.nlm.nih.gov/27475165/

Giordano and McAdams found that listeners can distinguish broad material classes in real impact sounds, while identification within closer classes becomes entangled with object size and acoustic frequency information. This is important because “material sound” is not a single isolated timbre label.

Source:
- *Material identification of real impact sounds: effects of size variation in steel, glass, wood, and plexiglass plates*.
  https://pubmed.ncbi.nlm.nih.gov/16521778/

## SOURCED FACT — low-level sound parameters can change haptic stiffness perception

A multisensory stiffness study used force feedback plus synthesized impact sounds and manipulated frequency/damping. Low-level acoustic parameters affected perceived stiffness, and higher frequency and/or shorter decay tended to be associated with greater stiffness in the tested conditions. The study explicitly found that categorical “metal vs drum” identity alone was not the whole explanation.

Source:
- *Metal Sounds Stiffer than Drums for Ears, but Not Always for Hands: Low-Level Auditory Features Affect Multisensory Stiffness Perception More than High-Level Categorical Information*.
  https://pmc.ncbi.nlm.nih.gov/articles/PMC5130246/

## SOURCED FACT — impact sound can support thickness judgments

A 2024 plate-sound study tested synthesized plate impacts and found that damping and nonlinear/modal behavior influenced perceived thickness; in the tested model, increased overall damping increased perceived thickness, while high-frequency energy behavior associated with thin plates could evoke thinner-object judgments.

Source:
- Poirot et al. (2024), *Auditory perception of the thickness of plates*.
  https://pubmed.ncbi.nlm.nih.gov/38169313/

## SOURCED FACT — pitch can influence perceived weight, loudness is not equivalent to weight

A perceptual study found objects paired with higher-pitched sound were judged lighter than those paired with lower-pitched sound, while loudness did not produce the same weight effect in that experiment.

Source:
- Takashima (2018), *Perceived Weight Is Affected by Auditory Pitch Not Loudness*.
  https://pubmed.ncbi.nlm.nih.gov/30348053/

This is especially relevant to Chappy5 because it directly warns against a naive `LOUDER = HEAVIER` rule.

## SOURCED FACT — sound can bias visual size judgments, but the relation is contextual

Research has shown high-intensity sound can increase visually perceived object size under particular audiovisual conditions, while separate impact research shows listeners’ size judgments can be biased by the sounding object/context rather than recover a unique physical size directly.

Sources:
- *High-intensity sound increases the size of visually perceived objects*.
  https://pubmed.ncbi.nlm.nih.gov/23188734/
- *Do we hear size or sound? Balls dropped on plates*.
  https://pubmed.ncbi.nlm.nih.gov/15971691/

## SOURCED FACT — reverberation/context can alter how material cues are weighted

Koumura & Furukawa found that material identification from impact sounds can remain robust on average under reverberation, but individual responses and the weighting of spectral information changed depending on whether reverberation was stable or varied across trials.

Source:
- *Context-Dependent Effect of Reverberation on Material Perception from Impact Sound*.
  https://pubmed.ncbi.nlm.nih.gov/29184117/

## SOURCED FACT — synchronous touch can strengthen auditory detection / perceived loudness

Gillmeister & Eimer found that synchronous tactile stimulation facilitated detection of faint sounds and increased perceived loudness relative to asynchronous tactile stimulation in their experiments.

Source:
- *Tactile enhancement of auditory detection and perceived loudness*.
  https://pubmed.ncbi.nlm.nih.gov/17573048/

This does not prove a browser STOP button will create “real haptics,” but it establishes that temporally aligned touch and sound can interact perceptually.

## SOURCED FACT — delayed action-linked sound weakens authorship as delay grows

Motor-auditory research found delayed feedback increasingly disrupted subjective action–sound integration, with conscious delay detection / authorship changes around the order of ~200 ms in the tested paradigm. This is not a Chappy5 timing threshold, but it supports the broader principle that action-linked impact sound is not independent of timing.

Source:
- *Neural Basis of the Time Window for Subjective Motor-Auditory Integration*.
  https://pmc.ncbi.nlm.nih.gov/articles/PMC4704610/

## SOURCED FACT — browser audio latency is measurable only partially from API estimates

Web Audio exposes `baseLatency` and, on current browsers/devices where supported, `outputLatency` as estimates of audio pipeline latency. `outputLatency` became broadly available across current browser/device versions in 2025, but compatibility may differ on older devices. These values do not by themselves prove the exact acoustic onset reaching the player's ear.

Sources:
- MDN `AudioContext.baseLatency`:
  https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/baseLatency
- MDN `AudioContext.outputLatency`:
  https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/outputLatency

`navigator.vibrate()` remains limited-availability across browsers, so Chappy5 must not assume a universal web-vibration layer on iPhone without direct target-device verification.

Source:
- MDN `Navigator.vibrate()`:
  https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate

---

# 4. New learning

## INTERPRETATION — “machine body sound” is a relationship, not a bass layer

The combined evidence strongly argues against defining physicality as a single frequency band or effect preset.

A believable impact can carry relationships among:
- attack shape;
- spectral distribution;
- modal frequency structure;
- damping/decay;
- apparent material class;
- implied thickness/size;
- visual object shape/material;
- action timing;
- surrounding acoustic context.

A phone speaker may reproduce only part of this information, but losing sub-bass does **not** imply all body information is lost. Spectral shape, transient profile, decay and audiovisual congruence can still carry physical cues.

## INTERPRETATION — “low pitch = heavy” is a cue, not a law

Pitch influenced weight judgments in one cited study, but size/material/thickness studies show multiple parameters and contextual interactions. Therefore an audio designer should not turn every “heavy” event into a low boom.

The correct reusable abstraction is **cross-channel physical consistency**, not a one-dimensional sound mapping.

## INTERPRETATION — decay is physical information, not empty tail

Damping/decay can participate in judgments of stiffness/material/thickness. This changes how Chappy5 should think about short machine transients: the tail is not merely decorative reverb. A STOP impact whose decay is too long, too resonant, too clean or physically inconsistent with the visible object can make the action feel less real even if its onset is satisfying.

## INTERPRETATION — shared “body coloration” must be stable enough to become a learned object

Reverberation/context research suggests listeners adapt to stable acoustic context and may reweight material cues when context changes. For a future original Chappy5 machine, this implies that mechanically related events may benefit from a coherent, restrained body/acoustic context rather than each event using unrelated cinematic spaces.

This is **not** a recommendation to add obvious reverb to every sound. Excessive or varying coloration can blur event identity and fatigue the player.

## INTERPRETATION — action-linked audio can partially reinforce missing physical touch, but cannot replace it by claim

Crossmodal evidence supports interaction between synchronous tactile and auditory signals. On iPhone/browser, however, actual usable haptic access is platform-dependent and unverified for Chappy5. Therefore sound should be authored to strengthen an action consequence, but Chappy5 must not label that as physical-equivalent haptics without Human/device evidence.

---

# 5. What changed from the previous understanding

Previous simplified model:

`machine body ≈ low-frequency layer + cabinet-like resonance + synchronized impact`

Revised model:

`PERCEIVED BODY = CAUSAL CONTACT × SPECTRAL/TEMPORAL PHYSICAL CUES × VISUAL MATERIAL CONSISTENCY × STABLE CONTEXT × OUTPUT-DEVICE SURVIVAL`

The multiplication symbol is intentional as an engineering metaphor: a strong element cannot necessarily rescue a contradictory one.

Examples of failure:
- a metallic visual surface with a soft, long, low-detail thud may weaken material identity;
- a tiny STOP button paired with a giant cinematic boom can imply scale inconsistent with the object;
- a mechanically plausible transient fired too late can feel like commentary rather than consequence;
- a beautiful sub-bass body layer that disappears on phone speaker is not a robust primary cue;
- different unrelated reverb/body signatures for every operation can make the machine sound like a sample library rather than one object.

---

# 6. Reusable principles for future Chappy5 work

## REUSABLE PRINCIPLE 1

**`BODY PRESENCE IS NOT BASS PRESENCE.`**

Low frequency may contribute to weight/body, but physical plausibility also lives in attack, spectrum, damping, modal behavior, action timing and audiovisual consistency.

## REUSABLE PRINCIPLE 2

**`AUTHOR CONTACT PHYSICS BEFORE CINEMATIC IMPACT.`**

For action-linked sounds, first ask what contacted what, how hard, how stiff/thick the visible object appears, and what part of the machine should plausibly resonate. Celebration may be layered later; it should not erase the contact story.

## REUSABLE PRINCIPLE 3

**`DECAY IS PART OF MATERIAL IDENTITY.`**

Attack and loudness alone do not define the object. Decay/damping must agree with the intended perceived body and repetition budget.

## REUSABLE PRINCIPLE 4

**`PHYSICAL CUES MUST SURVIVE THE WEAKEST REQUIRED OUTPUT PATH.`**

If the perception depends entirely on sub-bass that the target iPhone speaker cannot reproduce, it is not a stable machine-body cue. Primary action identity should remain legible through transient/spectral/temporal structure.

## REUSABLE PRINCIPLE 5

**`A MACHINE SHOULD SOUND LIKE ONE ACOUSTIC OBJECT, NOT A FOLDER OF EFFECTS.`**

Mechanically related operations should share enough acoustic relationship that the player can learn a stable source/body identity, while informational/reward layers can remain distinct.

## REUSABLE PRINCIPLE 6

**`SYNCHRONY CAN STRENGTHEN A WEAK PHYSICAL CUE; IT CANNOT LEGITIMIZE AN IMPOSSIBLE ONE.`**

Fast action-linked onset matters, but timing alone does not rescue contradictory material/scale cues.

## REUSABLE PRINCIPLE 7

**`LOUDER IS NOT HEAVIER.`**

Perceived weight, stiffness, size and material are multidimensional and context-dependent. Never use raw amplitude as the sole physicality control.

---

# 7. Conditions where these principles do not apply / misuse risks

1. **Laboratory impact studies are not pachislot-specific.** Their stimuli and judgments cannot be converted directly into a universal STOP/BET/lever recipe.
2. **Do not turn research correlations into fixed synthesis formulas.** “Shorter decay = stiffer” or “lower pitch = heavier” may fail across different source models, materials and contexts.
3. **Do not maximize physical realism at the expense of information hierarchy.** A mechanically realistic noise floor could mask reel-reading or increase 500G fatigue.
4. **Do not simulate every cabinet resonance literally.** Real cabinet coloration can include undesirable noise; Chappy5's target is perceptual machine coherence, not forensic acoustic duplication.
5. **Do not claim haptic equivalence from sound.** Audio may bias or reinforce tactile interpretation but cannot be assumed to replace physical buttons/vibration.
6. **Do not copy recognizable commercial machine sounds or cabinet signatures.** Only the general physical/psychoacoustic principles are reusable.
7. **Do not let body coloration contaminate truth signals.** Strong information cues may need separation from mechanical layers so that semantic priority remains readable.

---

# 8. What remains unknown

## UNRESOLVED

- Exact frequency/decay combinations that survive the target iPhone 12 speaker while still suggesting distinct original materials.
- Whether the target iPhone/browser path supports any useful haptic/vibration mechanism in Chappy5's actual deployment context.
- Actual `touch → Web event → AudioContext schedule → acoustic onset` distribution on the target device.
- How much body coloration can be repeated for 500G/3h before it becomes tiring or muddy.
- Whether speaker and headphones require meaningfully different body-layer balancing to preserve the same physical interpretation.
- Whether Human observers actually infer “one machine body” from a coherent set of original synthesized contact sounds when visual material cues are held constant.
- How much source-location/stereo information remains perceptually useful when the iPhone is held close and device orientation varies.
- Where the boundary lies between useful mechanical consequence and redundant sonic clutter when Visual/Mechanism already communicates the same impact strongly.

No unresolved item is to be treated as a verified Chappy5 specification.

---

# 9. Next worthwhile study

Highest-value next Sound & Experience research question:

**How should repeated machine sounds be differentiated so the player can identify action source and physical consequence instantly, while the entire machine still sounds like one body and remains comfortable across hundreds of repetitions?**

This would connect:
- auditory scene analysis / source segregation;
- spectral masking;
- transient competition;
- action-source localization;
- mix priority;
- repetition/fatigue;
- speaker/headphone translation.

It is more valuable than collecting more pachislot signature sounds because it addresses how Chappy5 can maintain clarity and physical unity simultaneously.

---

# 10. Possible future value to Chappy5 production

If later validated after Human Gate, this knowledge could help Chappy5:

- make STOP/BET/lever/reel/result events feel like consequences occurring inside one machine rather than generic mobile UI feedback;
- create material/weight/depth cues that remain meaningful even when phone speakers cannot reproduce real cabinet low-frequency energy;
- prevent “heaviness” from degenerating into louder/boomier audio;
- align Sound with Visual & Mechanism material/depth rules from the current Visual self-study;
- define better future QA questions for speaker/headphone and long-session evaluation;
- give the future deterministic Audio Event system a perceptual reason for its transient/decay/body parameters instead of merely technical controls.

This is a future capability direction only. No sound concept, asset, synthesis preset, event timing number or machine specification is authorized by this study.

---

# Final status

`SOUND_EXPERIENCE_SELF_STUDY = COMPLETE_RUN1`
`SELF_DIRECTED_STUDY = ACTIVE`
`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`ORIGINAL_CONCEPT_REFINEMENT = DENIED`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
