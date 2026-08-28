# Case Study 04 — 沖ドキ！GOLD — Official App Visual & Mechanism Run 1

> Director: Visual & Mechanism
> Phase: `PHASE B — OFFICIAL APP STUDY / RUN 1`
> Scope: official/properly licensed smartphone simulator as a separate evidence object
> Stage: `Stage 1 — Reality Baseline Study`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production: denied

## 1. Evidence boundary

This pass does **not** treat app behavior as proof of real-machine behavior. It also does not claim direct in-app observation: the official app was not executed in this research environment. Storefront screenshots, publisher descriptions and public reports are therefore kept separate from `DIRECT APP OBSERVATION`.

Evidence classes used below:
- `SOURCED APP FACT`
- `STOREFRONT / PUBLIC SCREEN OBSERVATION`
- `PUBLIC APP-STORE USER REPORT`
- `REAL-MACHINE FACT` (reference only)
- `INTERPRETATION`
- `REUSABLE TRANSLATION PRINCIPLE`
- `UNRESOLVED`

## 2. Sourced app facts

### 2.1 Official simulator status

`SOURCED APP FACT` — Universal Entertainment announced the iOS/Android simulator on 2023-02-06 and describes it as faithfully reproducing the 2022 real machine. The publisher explicitly promotes simulator-specific functions including forced roles and high-speed auto. Apple currently lists the iPhone app under Universal Entertainment Corporation. The App Store listing also exposes add-ons for wait cut, auto play, setting change, forced roles and save data.

This matters visually because the phone product is not only a cabinet image: it must also host a **laboratory/wrapper layer** that has no physical equivalent on the hall machine.

Sources:
- Universal Entertainment news release, 2023-02-06
- Apple App Store listing for `沖ドキ！ＧＯＬＤ`

### 2.2 Phone target

`SOURCED APP FACT` — Apple lists the product as iPhone-only in the current storefront and the compatibility list includes multiple iPhone generations including iPhone 12. This makes portrait-screen hierarchy and touch legibility first-class translation constraints rather than incidental browser concerns.

## 3. Storefront / public-screen observations

### 3.1 The machine face remains the primary visual object

`STOREFRONT / PUBLIC SCREEN OBSERVATION` — Available promotional/app imagery consistently presents the recognizable machine face as a vertically stacked object rather than rebuilding the experience as a conventional mobile-game HUD. The visible hierarchy preserves the broad real-machine reading order: upper identity/notification area → lamp/panel region → physical-reel representation → lower machine/deck region.

`INTERPRETATION` — This is a strong form of **spatial continuity**. A phone cannot preserve real depth, size or hand travel, but it can preserve *where the player expects truth to live*.

`REUSABLE TRANSLATION PRINCIPLE`:

**WHEN PHYSICAL SCALE IS LOST, PRESERVE THE PLAYER'S INFORMATION GEOGRAPHY BEFORE PRESERVING DECORATIVE DETAIL.**

### 3.2 Cabinet compression creates a pixel-budget conflict

`STOREFRONT / PUBLIC SCREEN OBSERVATION` — A complete cabinet face compressed into a phone necessarily allocates much less physical area to the three reels than the hall machine does. Fine molded edges, trim, panel printing and simulated depth compete for the same pixels required for reel symbols and the notification lamp.

`INTERPRETATION` — Exact cabinet fidelity can therefore become anti-fidelity at phone scale if it makes the mechanically important objects too small.

`REUSABLE TRANSLATION PRINCIPLE`:

**VISUAL FIDELITY ON A SMALL SCREEN IS NOT PROPORTIONAL TO THE NUMBER OF CABINET DETAILS RETAINED.**

For Chappy5 later, `reel readability`, `truth-signal readability` and `touch target legibility` must be measured independently from decorative cabinet resemblance.

### 3.3 Depth becomes represented depth

`REAL-MACHINE REFERENCE` — Phase A established a fixed physical HOME with real reels, a fixed notification surface and cabinet-side identity light.

`INTERPRETATION` — On phone, reel-window depth, material thickness, lamp lens volume, side-light spill and operation-deck reach cannot survive physically. They can only survive as rendered cues: occlusion, scale, shading, highlight, shadow, glow and motion parallax if present. These cues are **substitutions**, not retained mechanism.

`REUSABLE TRANSLATION PRINCIPLE`:

**A SCREEN CAN PRESERVE DEPTH CUES; IT CANNOT PRESERVE DEPTH ITSELF. DO NOT SCORE THE TWO AS EQUIVALENT.**

This is directly relevant to `REALITY_PRESENTATION_STANDARD.md`, which requires Chappy5 to distinguish material/depth/light-source presence rather than merely draw attractive rectangles.

## 4. Lamp → displayed-glow translation

The real-machine study found that the hibiscus truth signal gains strength from a stable physical location and reserved contrast.

`INTERPRETATION` — On phone the lamp no longer illuminates a translucent physical lens or nearby cabinet surfaces. It becomes emissive pixels surrounded by other emissive pixels. The display itself is the light source, so simulated glow can lose the physical distinction between `lamp` and `painted bright graphic`.

The preservation target is therefore not maximum bloom. It is:

`stable location + quiet REST + local contrast + unmistakable event transition`.

`REUSABLE TRANSLATION PRINCIPLE`:

**WHEN EVERY PIXEL CAN EMIT LIGHT, A SIGNAL MUST EARN SALIENCE THROUGH CONTRAST AND TIMING RATHER THAN THROUGH EMISSION ALONE.**

And:

**DISPLAYED GLOW SHOULD PRESERVE SIGNAL OWNERSHIP, NOT PRETEND TO PRESERVE PHYSICAL LIGHT SPILL.**

`UNRESOLVED` — Exact app bloom radius, luminance relationship, animation timing and whether neighboring cabinet art is dynamically affected cannot be verified without direct app capture.

## 5. Reel hierarchy and touch HOME

`INTERPRETATION` — The physical machine couples reel position and STOP-button position through hand reach and depth. A phone replaces this with a flat touch surface. Therefore visual placement must do more work: it must tell the thumb what is actionable without forcing persistent UI chrome over the reels.

The critical translation question is not merely “are three STOP controls present?” but:

- can each target be acquired without looking away from the reel result?
- does the target remain stable across normal/BONUS/32G states?
- does touch feedback visually belong to the same STOP event as the reel stop?
- does the finger occlude the information it is trying to resolve?

`REUSABLE TRANSLATION PRINCIPLE`:

**TOUCH TRANSLATION MUST REBUILD ACTION GEOGRAPHY, NOT JUST DRAW THE PHYSICAL BUTTONS.**

`UNRESOLVED` — Exact hitboxes, thumb travel, landscape/portrait behavior, button pressed-state, finger occlusion and STOP/reel visual latency require direct app execution.

## 6. Wrapper UI versus machine HOME

The official simulator adds save, wait cut, setting change, auto and forced-role functions that do not belong to the natural hall-machine face.

`INTERPRETATION` — These controls form a second visual system with a different authority. If always foregrounded, simulator controls can compete with the machine's lamp/reel HOME and turn “playing a machine” into “operating an emulator”.

`REUSABLE TRANSLATION PRINCIPLE`:

**SIMULATOR CHROME SHOULD BE VISUALLY SUBORDINATE TO THE SIMULATED MACHINE DURING MANUAL PLAY.**

And:

**LABORATORY CONTROLS NEED A DIFFERENT VISUAL AUTHORITY FROM PLAYER-FACING GAME TRUTH.**

This is especially important for future Chappy5 debug tooling: debug visibility and production visual hierarchy must not be conflated.

`PUBLIC APP-STORE USER REPORT` — Reviews describe normal/high-speed auto and the ability to stop auto at selected conditions, while also reporting restrictions on some forced-role use. These are not manufacturer-confirmed visual observations, but they reinforce that automation is a visible/operable simulator layer rather than a natural machine state.

## 7. Wait-cut / auto mode visual legibility

Game & Reel Run 1 separated `time compression` from `action delegation`.

Visual translation should preserve that distinction.

`INTERPRETATION`:
- **wait cut**: player still owns each action; visual rhythm may compress but action HOME should remain player-facing;
- **auto**: action ownership moves to the simulator; the screen should make automation status legible without letting the automation badge become the dominant game signal;
- **forced role / setting tools**: laboratory intervention; should not visually masquerade as natural in-machine state evidence.

`REUSABLE TRANSLATION PRINCIPLE`:

**WHEN ACTION OWNERSHIP CHANGES, THE INTERFACE MUST SHOW WHO IS DRIVING WITHOUT RELOCATING THE GAME'S TRUTH SIGNAL.**

`UNRESOLVED` — Exact official-app indicators for normal/high-speed auto, wait cut, forced role and setting mode were not directly observed.

## 8. REST on phone

The real-machine REST principle was `identity present + reels readable + truth signal quiet`.

`INTERPRETATION` — Phone translation makes REST harder because the entire cabinet image is continuously luminous and small-screen decorative contrast can remain visually “on” even when no event is occurring. A faithful color copy can therefore reduce the contrast reserve that the physical lamp enjoyed.

`REUSABLE TRANSLATION PRINCIPLE`:

**PHONE REST MUST BE JUDGED BY ATTENTION CLAIM, NOT BY WHETHER THE SOURCE ART IS STATIC.**

A visually busy but motionless phone screen may still have poor REST if high-contrast gold trim, UI badges and glow continuously compete with the reels/lamp.

## 9. What survives / what is substituted / what is lost

### Plausibly survives
- relative vertical information geography;
- stable reel/lamp coordinates;
- event timing and state-dependent visibility;
- recognizable identity palette/silhouette within IP-specific implementation;
- logical 3-STOP sequence;
- REST→notification contrast if deliberately protected.

### Must be substituted
- cabinet depth → rendered depth cues;
- physical lamp emission → local pixel contrast/glow;
- hand travel → touch-target spacing;
- button travel/lighting → pressed-state/timing feedback;
- hall-scale peripheral cabinet presence → on-screen silhouette and framing.

### Cannot be claimed preserved by screenshot fidelity
- physical reel depth and rotation volume;
- lens translucency;
- material reflectance under changing ambient light;
- light spill onto neighboring physical surfaces;
- cabinet mass;
- lever/button force and travel;
- real viewing-angle/parallax behavior.

## 10. Chappy5-specific learning to carry forward after this cycle

Do not implement yet. These are study targets only.

1. **Pixel-budget QA** — measure how much phone area belongs to reels, truth signal, touch targets and non-game chrome.
2. **Action-geography QA** — verify that thumbs can operate without hiding the reel information they resolve.
3. **Emissive-signal QA** — test whether a lamp still reads as a distinct truth source when the whole screen emits light.
4. **Depth-substitution QA** — distinguish “rendered depth cue quality” from actual mechanism preservation.
5. **Wrapper-authority QA** — simulator/debug tools must not compete with game truth.
6. **REST-on-OLED/LCD QA** — static does not equal quiet; attention contrast needs measurement on the target phone.

These belong in the later five-Director technology-gap audit requested by Human, after the current app cycle finishes. They are not permission to open implementation.

## 11. Unresolved items for later direct-app observation

- exact official-app screen orientation and safe-area behavior;
- reel pixel share and symbol readability on iPhone 12-class display;
- exact lamp pixel share and REST/event contrast;
- exact manual STOP target geometry/hitboxes;
- pressed-state feedback and reel-stop latency;
- finger occlusion during STOP1/2/3;
- simulator menu placement and persistence;
- visual status treatment for wait cut / auto / high-speed auto;
- whether wrapper UI can be hidden during natural manual play;
- whether simulated lamp glow affects neighboring rendered surfaces;
- whether BONUS/32G transitions preserve the same HOME or introduce wrapper-level visual competition.

## 12. Director verdict

The official-app translation appears to preserve the **map** of the machine more readily than the **matter** of the machine. That distinction is essential.

The reusable finding is:

**PHONE TRANSLATION SHOULD FIRST PRESERVE INFORMATION GEOGRAPHY, ACTION GEOGRAPHY AND CONTRAST OWNERSHIP. MATERIAL DEPTH, PHYSICAL LIGHT AND MECHANICAL REACH MUST BE TREATED AS LOSSES REQUIRING EXPLICIT SUBSTITUTION, NOT AS FEATURES AUTOMATICALLY PRESERVED BY A HIGH-FIDELITY CABINET IMAGE.**

No original concept was designed. No protected art was copied. No implementation/prototype/assets were created. Human Gate remains closed.
