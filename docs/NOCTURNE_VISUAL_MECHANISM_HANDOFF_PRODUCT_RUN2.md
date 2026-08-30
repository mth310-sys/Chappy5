# Nocturne Visual & Mechanism Handoff — Product Run 2

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE`

Latest main, README, current Nocturne product code, latest Machine/Game-Reel handoffs and governing product/reality rules were re-read before work.

## Concrete main updates
- `b87a877` adds `prototypes/nocturne-aquarium/visual-product-run2.js`.
- `af3baae` wires it into `play-stage-v2.html` after the existing cabinet-depth layer.

## What changed
The player-facing screen now translates the expanded pachislot Game Events into actual visual beats rather than explanatory/status prose:
- quiet normal state preserves contrast;
- LEVER omen raises underwater city/jelly presence without adding controls;
- STOP1 reel evidence can create a small light/reel-window response;
- `chance-up` can use short machine-natural `CHANCE` presentation;
- STOP2 `develop` brings a deep-water shadow/gate forward;
- STOP3 `resolve` closes the visual gate and flashes the reel-window/judgment line;
- miss returns toward quiet normal;
- hit produces a short `WIN` impact before existing BONUS entry;
- BONUS has a brighter dedicated aquarium state;
- `OCEAN RECORD` AT has its own underwater/gate state and `CONTINUE` beat;
- return-to-normal removes the strong state rather than explaining it in prose.

## Cabinet / mechanism direction
Run 1's black metal/glass shell, transparent side reservoirs, inner light spines, physical reel glass/depth and lower clock/depth mechanism remain the cabinet base. Run 2 layers presentation onto those same structures instead of introducing an exploration/menu UI.

## Shared text rule
Human correction is now treated explicitly: tutorial/debug/system-explanation prose should be removed or minimized, but normal pachislot presentation/information text is allowed and useful. `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET`, remaining games, `+G`, CZ/AT names, continuation/end and result displays are not forbidden when they function as pachislot presentation rather than explanation.

## Performance constraints
The new layer creates its DOM once and reacts only to existing `nocturne:game-event` events. It does not add requestAnimationFrame loops, high-frequency DOM construction, heavy blend stacks or new gameplay controls.

No SIGNAL / FORGE / VAULT files were modified. Human Gate 2 remains closed. `VISUAL_UNVERIFIED / REALITY_UNVERIFIED / PLAYTEST_UNVERIFIED` remain until downstream browser/iPhone evidence.

Next Sound Director should mirror the same hierarchy: quiet normal -> omen -> chance-up -> develop -> STOP3 judgment -> miss/hit -> BONUS -> OCEAN RECORD -> continuation/return, while preserving the shared text rule in its handoff.