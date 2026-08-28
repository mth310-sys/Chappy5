# Dual Prototype Visual & Mechanism Director Handoff — Run 5

Date: 2026-08-29 JST
Status: `VISUAL_MECHANISM_RUN5_IMPLEMENTED_PENDING_FRESH_CI`

## Source of truth

This run re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated prototype code paths, recent commits, and `docs/PROTOTYPE_GAME_REEL_HANDOFF_RUN5.md` before changing code.

Latest `main` remains the sole source of truth. SIGNAL / FORGE / VAULT were not changed.

## Visual bottleneck selected

Game & Reel Run 5 made stopped reel evidence more meaningful, but that meaning still risked living mainly in text rails. This Visual pass therefore does not add a new full-screen effect system. It routes the exact physical reel evidence back into each machine's existing material/mechanism language.

## 刻ノ一閃

Commit `a61ce7b` updates `prototypes/toki-no-issen/play.html`.

Machine Run 4's lean WebKit-safe rendering envelope is preserved: no high-frequency JS reel redraw, no restored full-cabinet filter stack, no new blend-mode layer pile.

### Change

Each STOP now takes the stopped physical reel and the exact center symbol already captured by Game & Reel Run 5 and reflects that result through the existing sword-machine surfaces for about 235 ms.

- the exact stopped reel gets a restrained recessed gold/violet edge response;
- `刀` drives the strongest warm blade/frame reflection;
- `七` drives a red-gold resolve reflection;
- `蒼` produces a cooler violet-blue frame response;
- `桜` produces a softer pink-violet response;
- `鐘` stays deliberately restrained as a stabilizing gold response;
- STOP1 / STOP2 / STOP3 still retain their existing successive spine/cut distinction.

This keeps the causal chain visible as:

`physical STOP -> stopped reel -> stopped symbol -> blade/frame response -> result`

instead of adding a detached symbol HUD.

The response is cleared on BET/LEVER and is deliberately short so 10–30G repeated play does not accumulate visual noise.

### Visual rule for Sound continuation

Do not add a separate sound to the new material reflection itself. It is the visual consequence of the existing STOP/slash event, not a new game event.

## ノクターン・アクアリウム

Commit `4a66a86` updates `prototypes/nocturne-aquarium/play.html`.

The existing stable aquarium structure, optical links, sonar, glass ribs, survey logic, memory logic and fixed control geometry are retained.

### Change

The three first-STOP destinations are now represented as actual circular observation ports embedded inside the tank world:

- left physical first STOP -> `広` port / 広場;
- middle physical first STOP -> `塔` port / 塔;
- right physical first STOP -> `庫` port / 記録庫.

The ports sit at the same world-space positions already used by the sonar targets. They therefore read as aquarium instrumentation/windows rather than tutorial arrows or an external HUD.

State is visualized in the world itself:

- previously observed locations remain softly lit;
- the current first-STOP destination becomes the active glass port;
- pair echo / MEMORY / DEPTH reactions strengthen that same selected port together with the existing optical link and refraction response.

This reinforces the causal depth ordering:

`physical reel foreground -> first STOP choice -> in-tank observation port -> world evidence -> MEMORY / DEPTH deeper in the aquarium`.

At <=390px the ports shrink to 30px and remain pointer-inert, so reel/STOP touch geometry is untouched.

### Visual rule for Sound continuation

The ports are persistent physical/optical objects and should not emit constant sound. Keep the current hierarchy: normal observation < survey complete < MEMORY < DEPTH. The first STOP channel sound may continue to identify the selected port.

## Shared Reality Standard intent

This pass specifically targets the Reality Standard requirement that a button/reel result should be felt by the whole machine as one causal event rather than unrelated animation timers.

It also preserves the visual identity split:

- 刻ノ一閃 = opaque black/purple/gold sword cabinet, short hard material response, horizontal battle display;
- ノクターン = transparent vertical aquarium instrument, circular observation glass, persistent depth/world response.

They should not converge into the same black cabinet with different colors.

## Verification state

- Both integrated code paths were updated on main.
- Fresh GitHub Pages / automated browser runs triggered by the new commits still need downstream confirmation before Browser/Visual PASS is claimed.
- Real rendered appearance on a physical iPhone Safari remains `VISUAL_UNVERIFIED` / `REALITY_UNVERIFIED` until Human/device inspection.
- Human Gate 2 remains closed.

SIGNAL / FORGE / VAULT remain untouched.
