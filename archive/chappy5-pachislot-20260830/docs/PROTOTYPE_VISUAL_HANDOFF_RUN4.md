# Dual Prototype Visual & Mechanism Director Handoff — Run 4

Date: 2026-08-29 JST
Status: `VISUAL_RUN4_IMPLEMENTED_UNVERIFIED`

## Source of truth

Re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated prototype code paths, recent commits, and `docs/PROTOTYPE_GAME_REEL_HANDOFF_RUN4.md` before changing code.

Latest `main` remains sole source of truth. SIGNAL / FORGE / VAULT were not changed.

## Run 4 decision

The visual bottleneck was not lack of more screens or systems. It was making the new Game & Reel meaning visible as physical cause-and-effect without restoring expensive per-frame JavaScript animation or disturbing the fixed control geometry.

### 刻ノ一閃

Commit `28cc689` — `Deepen Toki STOP-linked blade mechanism`

- Preserves Run 4 compositor-based reel spinning and does not restore the removed 78ms JavaScript reel redraw path.
- Adds two recessed blade-edge depth rails inside the LCD frame so the black/purple/gold cabinet reads more like a blade-housing mechanism than a decorated black rectangle.
- Each STOP still drives the existing cabinet beat, but now the stopped reel index also drives a dedicated slash-impact trajectory across the display.
- The already-existing temporary symbol readings are expressed physically rather than as a new HUD system:
  - `強斬` / `決め七` sharpen the blade rails and impact flash;
  - a successful first read / `初太刀冴え` / `二太刀冴え` briefly tighten the screen-frame light and physical reel emphasis.
- Chain residue remains persistent across games and is visually separate from the instant STOP impact.
- No new payout math, probability or game state was added.
- Fixed operation deck / 46px information rail geometry is untouched.

Sound continuation: do not add a sound for the passive blade rails. The semantic visual pulse is already synchronized to the existing STOP sound event; keep `STOP mechanical hit -> slash transient -> result` readable instead of layering a new voice.

### ノクターン・アクアリウム

Commit `c19db45` — `Deepen Nocturne optical reel-to-world linkage`

- Keeps the known 50G-stable game/control path and does not alter temporary memory math.
- Adds curved glass-rib reflections inside the tank to separate transparent aquarium material from LCD imagery.
- Adds three optical link paths from the physical reel foreground toward `広場 / 塔 / 記録庫`. Only the first STOP-selected path lights, so the player can read `first reel -> observation place` as one physical event rather than a detached screen update.
- When the three stopped symbols produce a pair echo, the selected optical path intensifies and a restrained refraction pulse crosses the water volume.
- Strong memory / DEPTH events reuse that same selected optical path and refraction layer instead of firing an unrelated full-screen effect.
- This preserves reel priority: the LCD response is evidence of what the stopped reels produced, not a replacement for them.
- Fixed controls and survey rail geometry are untouched.

Sound continuation: preserve the quiet baseline. Optical links and passive glass ribs should remain silent. Pair echo may remain within the existing observation/memory hierarchy; do not cover the physical STOP sound.

## Verification state

- Code was committed directly to latest main.
- Rendered browser appearance and actual iPhone Safari feel are still `VISUAL_UNVERIFIED` / `REALITY_UNVERIFIED` until the downstream browser/QA pass.
- 刻ノ一閃 long-play stability must still be judged by the fresh WebKit evidence after Run 4 timer removal plus these CSS/event-linked changes. No high-frequency animation loop was reintroduced here.
- ノクターン's previously stable control/game route was preserved; visual additions are CSS and existing-event-driven.
- Human Gate 2 remains closed.

SIGNAL / FORGE / VAULT remain untouched.
