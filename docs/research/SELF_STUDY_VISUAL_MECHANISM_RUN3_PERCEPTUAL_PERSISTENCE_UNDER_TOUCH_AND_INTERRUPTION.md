# Self-Directed Study — Visual & Mechanism Director Run 3

> Stage: `Stage 1 — Reality Baseline Study`
> Shared object: `SELF_DIRECTED_STUDY`
> Status: `COMPLETE_RUN3`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## Research question

When a real pachislot cabinet is compressed onto an iPhone, what visual/physical anchors must remain stable so that a finger covering the STOP area, a brief viewport disturbance, or an interruption/resume does not make the player re-parse the scene as ordinary mobile UI?

This is reality-baseline research only. It does not design an original cabinet, UI, mechanism, asset, or implementation.

## 1. Why this topic now

Game & Reel Run 3 showed that learned action grammar can survive interruption while immediate performance still suffers a transient re-entry cost. Its handoff explicitly raised the question of whether stable visual/physical landmarks can act as retrieval context without becoming answer-giving tutorial overlays.

The prior Visual studies already established:
- material/depth identity depends on coherent cue relationships rather than isolated bevel/glow effects;
- physical-layer claims must survive state change;
- in 新ハナビ, the reel chamber, compact information band, projecting operation deck, lever and fixed STOP row remain spatially stable while state meaning changes;
- large state changes do not require destroying the player's spatial map.

## 2. Prior unknown

The unresolved issue was whether stability itself has a perceptual/memory function during interruption and touch occlusion, or whether it is merely aesthetic consistency.

A second unknown was how to distinguish useful persistence from a rigid UI that simply refuses to adapt to viewport constraints.

## 3. Investigation

### SOURCED FACT — touch occlusion is a real interaction cost

Touchscreen research documents that the finger can occlude small targets and that small-target interaction increases selection difficulty/error risk.

- Sheik-Nainar (2010), *Contact Location Offset to Improve Small Target Selection on Touchscreens*:
  https://journals.sagepub.com/doi/10.1177/154193121005400614
- Maiero et al. (2019), *Back-of-Device Force Feedback Improves Touchscreen Interaction for Mobile Devices*:
  https://pubmed.ncbi.nlm.nih.gov/30990440/

These studies concern general touchscreen interaction, not pachislot specifically.

### SOURCED FACT — stable scenes support interrupted visual search

Lleras, Rensink & Enns (2005) found rapid resumption of interrupted visual search and reported that the effect depends on stability of the visual scene.

https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2005.01596.x

Lleras & Enns (2009) further showed that spatial orienting can improve correct responding after interruption, while distinguishing that benefit from the rapid-resumption mechanism itself.

https://pubmed.ncbi.nlm.nih.gov/19304647/

### SOURCED FACT — spatial memory can aid task resumption

Cane, Cauchard & Weger (2012) found that a visual cue marking the interruption location substantially aided reading resumption and concluded that recovery draws on spatial memory resources.

https://pubmed.ncbi.nlm.nih.gov/22540847/

Shen & Jiang (2006) found that interrupted visual search could preserve useful spatial-layout memory across some disruptions, while additional search tasks could impair it.

https://pubmed.ncbi.nlm.nih.gov/17002532/

### SOURCED FACT — occlusion can preserve object continuity

Yantis (1995) showed that perceived continuity across a brief interruption is stronger when the interruption is consistent with an object being hidden behind an occluding surface rather than disappearing without a plausible surface relation.

https://journals.sagepub.com/doi/10.1111/j.1467-9280.1995.tb00329.x

This is basic visual-perception evidence, not evidence that an iPhone pachislot will automatically inherit the same strength of object persistence.

## 4. Real-machine observation base

### OBSERVATION — 新ハナビ

Existing Case Study 02 Visual research records a stable spatial stack:

`upper identity/context -> recessed physical reels -> narrow information band -> projecting operation deck -> fixed STOP row`

It also records that normal, bonus, 花火チャレンジ and 花火GAME change state information and player duty while the reel window, operation deck, lever and three STOP positions remain physically fixed.

Existing research:
`docs/research/CASE_STUDY_02_SHIN_HANABI_VISUAL_MECHANISM_RUN4.md`

### OBSERVATION — real-machine generality

A physical pachislot cabinet does not move its reel cylinder or STOP buttons to a different screen region because the player's hand temporarily covers them. The player's finger occludes part of an already-existing object; it does not cause the cabinet geometry to reflow.

The important distinction is not “never adapt on mobile.” It is that any necessary adaptation should preserve the learned ownership and ordering of the machine's major physical planes.

## 5. New learning

### INTERPRETATION

Touch occlusion should be treated as **temporary occlusion of a persistent object**, not as permission to replace/rearrange that object at contact time.

If a STOP target visibly shifts, enlarges into a detached overlay, or causes surrounding machine layers to reflow exactly when touched, the finger is no longer merely covering a machine control; the system teaches the player that the control is a mobile UI widget whose geometry is negotiable.

This interpretation is supported indirectly by touch-occlusion research plus object-continuity/spatial-memory findings. It is not yet Human-verified on Chappy5.

### INTERPRETATION

After an interruption, the first useful visual evidence may be **recognition of the same spatial machine map**, not an explicit tutorial message.

A stable relation such as:

`reel chamber above -> information band below -> controls nearest the hand`

can potentially reactivate task context before the player reconstructs every rule. This aligns with Game & Reel Run 3's separation of retained grammar from transient re-entry cost.

### INTERPRETATION

Persistence should be hierarchical rather than pixel-identical.

The exact viewport, safe-area crop, browser chrome and scale may change. What matters more for machine ownership is preservation of relational invariants:
- reel field remains the principal reading plane;
- controls remain owned by the lower/near hand plane;
- secondary information remains adjacent to, but distinct from, the reel task;
- body/glass/reel/light layers preserve their front/back ordering;
- state changes do not arbitrarily exchange these roles.

## 6. Changed understanding

Previous Visual thinking emphasized `A PHYSICAL LAYER PASSES ONLY IF ITS IDENTITY SURVIVES STATE CHANGE.`

Run 3 extends this to interaction and interruption:

`A MACHINE LAYER IS NOT PERSISTENT IF ITS OWNERSHIP OR SPATIAL ROLE COLLAPSES WHEN THE PLAYER TOUCHES OR RETURNS.`

The stronger model is therefore not “freeze the screen.” It is:

`PRESERVE RELATIONAL ANCHORS; ALLOW NECESSARY VIEWPORT ADAPTATION AROUND THEM.`

## 7. Reusable principles

- `TOUCH SHOULD OCCLUDE A CONTROL MORE OFTEN THAN IT REDEFINES THE CONTROL'S LOCATION.`
- `PERSISTENCE IS RELATIONAL, NOT PIXEL-IDENTICAL.`
- `THE PRIMARY REEL / INFORMATION / CONTROL ORDER SHOULD SURVIVE INTERRUPTION.`
- `RE-ENTRY SHOULD FIRST RESTORE THE MACHINE MAP, NOT OPEN A NEW TUTORIAL LAYER.`
- `STABLE PHYSICAL LANDMARKS CAN FUNCTION AS RETRIEVAL CONTEXT.`
- `A CONTROL THAT DETACHES INTO MOBILE-UI SPACE RISKS LOSING MACHINE OWNERSHIP.`
- `VIEWPORT ADAPTATION SHOULD PRESERVE SCENE-GRAPH ORDER EVEN WHEN SCALE OR CROP MUST CHANGE.`
- `TEMPORARY FINGER OCCLUSION IS NOT THE SAME AS VISUAL DISAPPEARANCE.`
- `STATE CHANGE MAY REALLOCATE ATTENTION WITHOUT RELOCATING THE PLAYER'S BODY MAP.`
- `RETURNING TO THE SAME MACHINE SHOULD REQUIRE RECOGNITION BEFORE RE-LEARNING.`

## 8. Limits / misuse

- The cited perception/interruption studies are not pachislot Human trials.
- No claim is made that a specific pixel layout, scale, button size or viewport rule is correct for Chappy5.
- This does not justify making touch targets too small in the name of realism.
- This does not justify disabling responsive layout.
- It does not prove that every visual surface must remain static.
- It does not authorize reproducing the 新ハナビ cabinet, panel art, lamp geometry, reel symbols, logos, protected flash programs, or other third-party design details.
- It does not authorize a prototype or browser test before Human Gate.

## 9. Remaining unknowns

`UNRESOLVED`:
- how much geometric movement/scale change can occur before Humans stop perceiving one persistent machine;
- whether a partially covered STOP region still reads as a physical control on the target iPhone during repeated fast play;
- which landmarks are sufficient for rapid re-entry after Safari/background interruption;
- whether preserving reel/control adjacency is more important than preserving exact apparent cabinet proportions during severe viewport change;
- how orientation changes should be treated if ever permitted;
- whether temporary browser chrome changes create enough scale motion to weaken depth/material ownership;
- how quickly users recover their prior gaze/hand map after minutes, hours and days away;
- whether beginners and experts rely on the same visual landmarks.

## 10. Next worthwhile Visual & Mechanism study

Investigate **mechanical motion continuity and occlusion**: when a reel, lamp reflection or future permitted mechanism moves partly behind another cabinet layer, what timing/trajectory/occlusion relationships make it read as one persistent mass moving in depth rather than a 2D element being hidden/shown?

This remains real-machine/reality-baseline study only and must not become an original mechanism proposal.

## Possible future Chappy5 value

If later Human-approved production begins, these findings could help define acceptance tests for whether responsive iPhone presentation preserves “one physical machine” through touch and interruption. The likely value is not a decorative rule but a falsifiable reality question: after contact/resume, can the Human immediately identify the same reel chamber, same control ownership and same physical layer order without being retaught?

## Gate preservation

`ORIGINAL_CONCEPT_REFINEMENT = DENIED`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`CODE / PROTOTYPE / ASSETS = NOT_CREATED`
`REALITY_BASELINE_COMPLETE = FALSE`
`HUMAN_GATE_1_NOT_READY`
