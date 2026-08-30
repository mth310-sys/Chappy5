# Chappy5 — Technology Gap Audit / Visual & Mechanism Director Run 1

> Status: `COMPLETE_RUN1`
> Shared object: `TECHNOLOGY_GAP_AUDIT`
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## 0. Scope and decision boundary

This run does not design an original machine and does not rank/refine `SIGNAL/FORGE/VAULT`.

The task is to compare accumulated real-machine/app study with Chappy5/遊創舎's demonstrated or explicitly available capabilities and identify what still must be learned, built, or measured before Visual & Mechanism production readiness can be considered.

The governing Reality Standard requires more than a clean screenshot: cabinet depth, material distinction, reel physicality, emitted light and spill, button response, mechanism mass, causal event synchronization and real-iPhone confirmation must all be evidenced before Reality PASS.

## 1. What is already learned

### LEARNED — cabinet information hierarchy and REST visual

Capability already held:
- accumulated studies distinguish `REEL-FIRST / BALANCED / SCREEN-FIRST` hierarchy;
- Visual baseline already treats top panel / display or reel window / operation deck / lower panel as functional layers rather than decorative rectangles;
- studies of 新ハナビ and 沖ドキ！GOLD established that restrained REST presentation can protect reel/lamp readability and make small deviations salient.

Lesson understood:
- visual quiet is an authored state, not absence of design;
- the player needs stable information geography before event intensity can have meaning.

Additional learning required now: `NO` broad machine survey.

Acquisition evidence:
- retained as research knowledge; production proof remains separate.

### LEARNED — depth/material reasoning model

Capability already held:
- Visual baseline explicitly separates `front silhouette / depth stack / material stack / internal-volume implication`;
- known target materials include metal/chrome-like surfaces, opaque resin, translucent resin, glass/acrylic-like covers, emissive elements and reel surfaces;
- the repository standard already rejects treating all cabinet layers as one flat plane.

Lesson understood:
- physical presence is produced by consistent occlusion, edge treatment, reflection, shadow and internal volume cues, not by adding generic drop shadows.

Additional real-machine knowledge required now: `LOW`.

### LEARNED — light must behave as a source

Capability already held:
- accumulated studies distinguish lamp truth signals from decoration;
- app study established that on an emissive phone screen, a signal cannot rely on “being luminous” alone; contrast, timing and stable location are required.

Lesson understood:
- LED/lamp rendering needs source → lens/translucent body → neighboring surface response, while REST must retain headroom.

Additional broad cabinet study required now: `NO`.

### LEARNED — action geography

Capability already held:
- studies consistently preserve the relationship among reel window, lever/MAX BET, three STOP positions and truth signals;
- real→app study already identified that information geography should survive even when physical scale and depth do not.

Lesson understood:
- visual fidelity is not only silhouette fidelity; the eye/hand route is part of the machine.

## 2. Highest-value remaining gaps

### TECHNOLOGY GAP — coherent cabinet depth/material rendering pipeline

Current capability:
- Chappy5 has the conceptual depth/material specification and遊創舎 may use its existing HTML/CSS/Canvas/Phaser/rendering assets under README's reuse policy.

Missing capability:
- there is not yet evidence in Chappy5 of a reusable, measured rendering pipeline that can represent cabinet bezel depth, recessed reel/display layers, translucent lenses, metallic/opaque surfaces, internal shadow and consistent highlight behavior as one coherent system on iPhone.

Why it matters:
- the Reality Standard explicitly denies PASS to flat rectangle stacking or screenshots that are merely attractive.

Can it be acquired in current workflow: `YES`.
- GitHub can hold reusable rendering primitives and test scenes;
- iPhone Safari can provide the actual target-device visual check once Human Gate permits production/prototyping.

Priority/value: `VERY HIGH`.

Evidence required to mark acquired:
1. one neutral non-IP cabinet/material test scene rendered on target iPhone;
2. at least four visibly distinct material classes without relying only on color;
3. front and oblique/depth cues remain coherent under animation;
4. screenshot/video comparison against internally defined acceptance references;
5. Human confirmation that the result reads as layered physical construction rather than flat UI.

### TECHNOLOGY GAP — physical-reel visual renderer integrated with stop law

Current capability:
- reel-game architecture and research understand rotation, slip and stop as game information;
- Visual baseline specifies bezel depth, top/bottom occlusion, cylindrical cues, internal shadow and illumination.

Missing capability:
- no production-ready proof yet that the visual reel can remain a convincing rotating body while being driven deterministically by Game & Reel's authored stop position/slip/event trace.

This is distinct from Game & Reel's control-law gap: Visual owns the rendered physical continuity of the same law.

Can it be acquired in current workflow: `YES`.

Priority/value: `VERY HIGH`.

Evidence required:
- deterministic replay shows identical reel position and identical rendered stop outcome;
- start/constant rotation/slip/deceleration/stop preserve symbol readability;
- top/bottom disappearance and reel-window occlusion read as a curved/recessed mechanism;
- no visual “teleport” at controlled stops on target iPhone.

### TECHNOLOGY GAP — source/lens/spill LED model with authored REST headroom

Current capability:
- LED animation, CSS/rendering and prior遊創舎 lamp experiments are explicitly reusable classes of asset under README;
- research already defines the conceptual distinction between source, translucent lens and surrounding response.

Missing capability:
- no Chappy5 evidence yet of a reusable lamp model where brightness, lens transmission, bloom/spill, neighboring surface response and REST/event contrast are controlled together rather than as independent glow effects.

Can it be acquired: `YES`.

Priority/value: `HIGH`.

Evidence required:
- REST, minor cue and major cue can be distinguished at the same physical lamp location;
- surrounding surfaces respond without washing out reel/display readability;
- iPhone capture confirms important cues remain distinct under normal screen brightness;
- repeated cues do not convert the whole cabinet into a continuously emissive panel.

### TECHNOLOGY GAP — mechanism motion with mass and causal anchoring

Current capability:
- Chappy5 standard already requires acceleration/deceleration/stop/recovery and same-event synchronization;
- README permits reuse/axis change/fusion of遊創舎's prior mechanism assets.

Missing capability:
- there is not yet evidence of a general motion-authoring contract that ties mechanism travel, easing/velocity phases, hard stops/settling and return behavior to the canonical game event trace.

Can it be acquired: `YES`.

Priority/value: `HIGH`, but only for machines that actually justify moving mechanisms.

Evidence required:
- mechanism animation cannot drift from the triggering game event during deterministic replay;
- start/impact/settle/return phases are individually measurable;
- perceived mass survives target-device frame pacing;
- the machine still has a coherent REST silhouette after return.

### MEASUREMENT GAP — objective Visual Reality acceptance harness

Current capability:
- Playwright/browser testing exists in遊創舎 assets and the Reality Standard defines qualitative PASS questions.

Missing capability:
- there is no sufficient objective acceptance harness yet for visual presence. Functional screenshot regression alone cannot prove depth, material, lamp authority, reel readability or action geography.

Required measurement families:
- `pixel-budget QA` — how much target screen area each truth surface occupies;
- `action-geography QA` — distance/occlusion relationship among reel, truth signal and touch controls;
- `emissive-signal QA` — REST/minor/major contrast without global washout;
- `depth-substitution QA` — whether phone rendering still communicates front/recessed/internal layers;
- `REST QA` — stable default hierarchy before an event;
- `motion continuity QA` — no frame/position discontinuity during reel or mechanism motion.

Can it be acquired: `YES`, but requires Human visual evidence in addition to automation.

Priority/value: `VERY HIGH`.

Evidence required:
- documented capture protocol on target iPhone;
- fixed viewpoints/device orientation/brightness assumptions;
- automated geometry and frame-sequence checks where measurable;
- Human PASS for presence/readability where automation cannot establish perception.

### PLATFORM GAP — emissive-screen substitution for real materials and real lamps

Current capability:
- app studies already identify the core problem: cabinet, glass, lamp and display become pixels on one emitting plane.

Missing capability:
- a validated translation rule for preserving hierarchy when actual reflected light, parallax, depth accommodation and separate physical luminance sources are absent.

Can it be acquired: `YES`, experimentally on iPhone.

Priority/value: `VERY HIGH` because the project target is iPhone.

Evidence required:
- cabinet remains readable as a non-display body while the internal display remains recognizably “a screen inside it”;
- lamp truth signals remain visually authoritative without merely maximizing brightness;
- black/metal/translucent/reel/display regions do not collapse into one graphic layer;
- target-device Human comparison passes at REST and during major events.

### PLATFORM GAP — finger occlusion and touch-control visual ownership

Current capability:
- app/QA study has already identified action ownership and information geography as distinct from logical state.

Missing capability:
- no target-iPhone evidence yet that the player's fingers do not hide reel stop information, lamps or state truth at the exact moments of interaction.

Can it be acquired: `YES` with real-device Human testing.

Priority/value: `HIGH`.

Evidence required:
- left/right-hand observation for repeated BET/START/STOP sequence;
- no critical truth signal is routinely hidden by the active finger/hand;
- controls remain visually subordinate to the machine while retaining reliable hit area.

### MEASUREMENT GAP — device performance as visual fidelity

Current capability:
- browser implementation and automated tests can detect functional failure.

Missing capability:
- a visual-specific target-device budget connecting frame pacing, resize/orientation behavior and layer/effect load to perceived reel/mechanism mass.

Can it be acquired: `YES`.

Priority/value: `HIGH`.

Evidence required:
- frame-time capture during REST, reel spin, STOP burst and largest allowed visual event;
- no frame pacing failure that changes apparent stop timing or mechanism weight;
- no layout jump when Safari chrome/viewport state changes.

## 3. Knowledge gaps that should NOT drive another broad machine survey

### KNOWLEDGE GAP — exact commercial material recipes / proprietary cabinet construction

Some real machines' exact resin formulations, lens microstructure, internal reflector design, lamp diffusion and manufacturing tolerances are not public.

Decision: `DO NOT REVERSE-ENGINEER AS A PRODUCTION PREREQUISITE`.

Chappy5 needs an original browser translation that produces convincing differentiated materials and light hierarchy, not proprietary third-party manufacturing recipes.

### KNOWLEDGE GAP — exhaustive cabinet lineage coverage

Four contrasting case-study directions plus the general Visual baseline already establish that there is no single correct cabinet architecture and that reel-first, screen-first and direct-notification machines organize attention differently.

Decision: `NO ADDITIONAL BROAD MACHINE SURVEY BY DEFAULT`.

A future targeted case study is justified only when the final Machine audit identifies a specific missing phenomenon, e.g. a moving-mechanism-heavy architecture or unusual multi-display/touch interaction that current evidence cannot answer.

## 4. What Visual & Mechanism recommends learning next

The next learning step should be a **translation/measurement study**, not another tour of famous machines.

Order of value:
1. establish target-iPhone cabinet depth/material/light acceptance tests;
2. prove a deterministic physical-reel visual renderer can consume Game & Reel's canonical event trace;
3. establish REST/minor/major lamp headroom and emissive-screen translation rules;
4. measure finger occlusion/action geography on the actual phone;
5. establish mechanism mass/event-anchor tests for any future concept that genuinely needs moving parts.

This is not authorization to prototype now. Human Gate remains closed. These are acquisition targets for the final Machine Director to integrate.

## 5. Final Visual & Mechanism answer

**Do we need to learn more? `YES`, but primarily technology/platform/measurement, not more general pachislot visual history.**

The research has taught Chappy5 what credible cabinet hierarchy, reel primacy, REST quiet, light authority and physical layering mean. What is not yet demonstrated is the ability to translate those principles into a repeatable iPhone rendering system and prove them with objective + Human evidence.

Therefore Visual & Mechanism does **not** recommend reopening broad real-machine research by default. It recommends closing the gap between `UNDERSTOOD` and `REPRODUCIBLE / MEASURABLE ON IPHONE`.

## 6. Preservation

`HUMAN_GATE_1_NOT_READY`
`REALITY_BASELINE_COMPLETE = FALSE`
`SIGNAL/FORGE/VAULT = PROVISIONAL_FROZEN`
`PRODUCTION = DENIED_UNTIL_HUMAN_MACHINE_APPROVED`
