# Chappy5 Studio State

## Trial window
- Start: 2026-08-25 19:19 JST
- End: 2026-08-26 19:19 JST
- Auto-extension: prohibited

## Product target
A flagship-quality, iPhone-first browser game with short sessions and long-term reasons to return: repeat play, mastery, growth, collection, and discovery.

## Initial concept comparison

### Candidate A — ECHO DRIFT
Portrait exploration roguelite. Each turn the player chooses one of three signal routes, trading energy, danger, and salvage. A run lasts a few minutes; recovered relics unlock permanent archive entries and future options.
- Core fun: push-your-luck route decisions with partial information.
- Distinctive reason to play: read unstable signals, build resonance chains, decide when to extract before the expedition collapses.
- Mobile fit: one-thumb, large targets, portrait, interruptible.
- Replay depth: procedural route offers, build synergies, risk escalation.
- Long-term expansion: regions, signal families, relic sets, modifiers, story fragments.
- Feasibility: high with HTML/CSS/JS; presentation can later use Phaser/Web Audio if justified.
- Primary risk: shallow choices if routes become obvious or purely numerical.

### Candidate B — POCKET FOUNDRY
Compact production/automation strategy where the player arranges a tiny evolving factory grid and discovers recipes.
- Strength: long-term optimization and discovery.
- Risk: interface density and drag precision are weaker for one-handed iPhone browser play; meaningful depth needs more systems before the first playable feels representative.

### Candidate C — NIGHT COURIER
Urban route-planning game where contracts, time windows, weather, and reputation create short tactical deliveries and a persistent city network.
- Strength: strong theme and long-term world growth.
- Risk: content burden is higher; without sufficient city/event variety the core can feel like menu routing rather than a flagship game.

## Initial decision
**Selected: Candidate A — ECHO DRIFT.**

Reason: it offers the strongest ratio of meaningful moment-to-moment choice, one-thumb mobile fit, repeatability, and scalable long-term structure while allowing a representative playable to exist immediately. The initial implementation must prove that route selection and extraction timing are interesting before content expansion.

## First playable hypothesis
A run is compelling if the player repeatedly faces a non-trivial choice among:
1. safer low-yield salvage,
2. risky high-yield salvage,
3. a route that strengthens a resonance chain but may worsen immediate survival.

The player may extract at any time. Staying longer should increase potential reward but also collapse risk.

## Human verification gate
Do not claim the game is fun before human play. When AI-detectable structural problems are reduced, ask a human to verify only:
- Did route choices feel meaningfully different rather than obviously correct?
- Did the decision to extract or continue create tension?
- After one run, was there a genuine desire to immediately try another?

## Technical reference
Read-only reference inspected: `mth310-sys/yusosha-usage-test/test_lupin_zero/TECHNOLOGY_SELECTION.md`.
Useful proven patterns: HTML5/CSS/JavaScript ES modules, iPhone-first responsive layout, GitHub Pages, deterministic rule separation, Playwright browser regression, optional localStorage/IndexedDB, Phaser only when high-frequency 2D presentation justifies it.
Adoption for first playable: HTML/CSS/vanilla JS + localStorage. Phaser is intentionally deferred until the core loop proves value.
