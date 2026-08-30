# Nocturne Visual & Mechanism Director Handoff — Product Run 1

Date: 2026-08-30
Status: `VISUAL_MECHANISM_RUN1_IMPLEMENTED / SOUND_QA_REQUIRED`

## Main changes
- `prototypes/nocturne-aquarium/visual-product-run1.js` added and integrated into `play-stage-v2.html`.
- Product visual layer consumes the existing `nocturne:game-event` spine from Machine/Game & Reel rather than introducing independent presentation timers.

## Cabinet / depth work
- Added paired internal luminous side spines to reinforce the transparent aquarium-frame silhouette without changing touch geometry.
- Added a lightweight reel-deck glass layer so the three physical reels read as a protected foreground mechanism rather than flat symbols on top of the scene.
- Added a single central optical beam inside the tank. STOP1 / STOP2 / STOP3 alter its direction/intensity from the same stop event.
- Added a circular lower depth/clock mechanism inside the existing `depthRing`; it changes hand angle on STOP and gains light/scale with stronger reel evidence.
- Existing underwater city / tank / side tubes remain the base scene. This pass does not add explanatory HUD text.

## Event coupling
- `lever`: maps base / whisper / rise / omen / bonus to cabinet-edge intensity.
- `stop`: drives side-spine light, optical beam and lower clock motion.
- `reel-evidence`: drives lower mechanism evidence intensity.
- `develop`: short synchronized side-light + clock response.
- `resolve`: short reel-glass / central beam release.
- `bonus-hit` / `bonus-open`: locks the cabinet into stronger aquatic illumination.
- `bonus-end`: returns the added mechanisms to normal intensity.
- `stage-shift`: uses the same resolve-light path instead of a detached label-heavy effect.

## Stability constraints preserved
- No high-frequency DOM update loop added.
- No `mix-blend-mode`, perspective stack, or continuous JS animation loop added.
- Event reactions are class/dataset/CSS-variable changes with short timers only.
- Control geometry and button positions are untouched.
- SIGNAL / FORGE / VAULT untouched.

## Verification
Static integration was re-fetched from latest main after commit. Real browser rendering, iPhone Safari interaction, audio synchrony and Reality remain unverified in this Visual run.

Current status remains:
`VISUAL_UNVERIFIED / PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED`

## Next Sound focus
Use the same `nocturne:game-event` events and intensity/evidence grammar. STOP1/2/3 should audibly match the new light/mechanism beats, `develop` should create tension without masking reel-stop mechanics, and `bonus-hit/open` should connect to the approved Nocturne BGM direction. Do not create a separate audio-state timer model.
