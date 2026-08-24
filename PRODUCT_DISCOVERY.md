# Product Discovery — Cycle 1

Date: 2026-08-25
Status: FIRST PASS

## Objective
Choose a first game hypothesis that can be validated cheaply, produces useful player evidence quickly, and does not commit the studio to a large production before the core interaction is proven.

## External market signals

### E1 — Indie opportunity exists, but discoverability is a major constraint
- Classification: CONFIRMED as reported market commentary; strategic implication is INFERRED.
- Signal: Recent industry coverage describes large publishers becoming more conservative while small studios benefit from digital distribution and community channels, but discoverability remains difficult.
- Source: The Guardian, 2026-08-19, “Will the future of gaming be powered by upstart indie developers?”
- URL: https://www.theguardian.com/games/2026/aug/19/will-the-future-of-gaming-be-powered-by-upstart-indie-developers
- Implication: A first product should have a highly legible hook that can be understood from a short clip or screenshot.

### E2 — Steam outcomes are extremely top-heavy
- Classification: CONFIRMED as reported third-party analysis; exact revenue estimates are model-dependent.
- Signal: Recent analysis of roughly 99k paid Steam titles reports the top 1% capturing the overwhelming majority of estimated revenue, with very low median lifetime revenue.
- Source: GamesRadar summary of Totally Human Media / VaporLens analysis, 2026-08-20.
- URL: https://www.gamesradar.com/games/behold-the-whole-history-of-steams-economy-in-one-picture-the-top-1-percent-of-games-earn-84-5-percent-of-estimated-revenue-and-most-games-barely-make-anything/
- Implication: “Ship a generic competent game” is not a sufficient business strategy; distinctiveness and cheap validation matter.

### E3 — Roguelike deckbuilding is crowded
- Classification: CONFIRMED for release-count signal.
- Signal: SteamDB reports hundreds of roguelike deckbuilder releases in 2026 and rapid cumulative growth in the tag.
- Source: SteamDB release statistics, accessed 2026-08-25.
- URL: https://steamdb.info/stats/releases/?tagid=1091588
- Implication: Do not choose deckbuilding as the first concept unless the mechanic has an unusually strong differentiator.

### E4 — Browser games remain a live distribution surface
- Classification: CONFIRMED as survey result, with source-bias caveat.
- Signal: Poki’s 2026 web-gaming study reports meaningful weekly browser-game engagement and argues that web can serve as both play surface and discovery funnel.
- Caveat: Poki is itself a web-game platform and benefits from a positive conclusion; treat strategic claims cautiously.
- Source: Poki / Atomik Research, fieldwork May 2026.
- URL: https://poki.com/blog/state-of-web-gaming-report-2026
- Implication: A browser-first prototype is a reasonable low-friction validation route, not yet a confirmed final distribution strategy.

### E5 — Incremental / automation / compact system games are visibly active in current releases
- Classification: OBSERVATION, not proof of demand.
- Signal: Current Steam upcoming/recent listings include multiple incremental, idler, automation, resource-management, and compact system-driven games.
- Source: Steam upcoming releases, accessed 2026-08-25.
- URL: https://store.steampowered.com/explore/upcoming/store.html
- Implication: The mechanic family is active, but competition exists; the first prototype needs a distinct interaction rather than a generic idle loop.

## Design constraints inferred from the evidence
1. The hook must be understandable in seconds.
2. The first fun should occur before long progression systems exist.
3. The core should work as a small browser prototype.
4. The design should create visible state changes suitable for short clips/screenshots.
5. Avoid a content-heavy first build.
6. Prefer a system that can expand only after the interaction itself is proven.

## Candidate hypotheses

### H1 — One-screen chain-reaction automation sandbox
- Classification: HYPOTHESIS.
- Player fantasy: Build a tiny machine, start it, watch resources/objects bounce through a chain, then modify one part to create a better or stranger result.
- Core verbs: place, connect, start, observe, tweak.
- Session: 2–8 minutes.
- Hook: The whole machine and its consequences are visible on one screen.
- Differentiator target: tactile chain reactions and emergent “I made this” outcomes rather than passive idle accumulation.
- Prototype cost: LOW–MEDIUM.
- Main risk: Could become visually busy without producing meaningful choices.
- Validation signal: New player understands goal without tutorial text and voluntarily restarts to improve/change the machine.

### H2 — Minimal combo-survival toy
- Classification: HYPOTHESIS.
- Player fantasy: Control one object in a tiny arena and discover escalating interactions between hazards, pickups, and physics/combo rules.
- Core verbs: move, trigger, chain, survive.
- Session: 1–5 minutes.
- Hook: Dense, readable chain reactions.
- Prototype cost: LOW.
- Main risk: Extremely crowded action/roguelite adjacency and may require strong game feel/art to stand out.
- Validation signal: Repeated voluntary runs after first death and evidence that players discuss discovered interactions.

### H3 — Satisfying organization + production puzzle
- Classification: HYPOTHESIS.
- Player fantasy: Turn a messy stream of objects into an elegant self-running arrangement.
- Core verbs: sort, route, compress, optimize.
- Session: 3–10 minutes.
- Hook: Strong before/after visual transformation.
- Prototype cost: LOW–MEDIUM.
- Main risk: May feel like a puzzle utility rather than a game unless scoring/pressure is elegant.
- Validation signal: Players replay a solved layout to reduce space, moves, or time without being required.

## Director recommendation
Select **H1 — One-screen chain-reaction automation sandbox** for the first validation cycle.

Reasoning:
- It satisfies the need for an immediately visible hook.
- It can be prototyped in-browser without a large asset burden.
- It has room for both casual experimentation and deeper optimization if validated.
- It is adjacent to active automation/incremental interest without starting as a generic idle game.
- It produces visible outcomes that can later support organic sharing.

This is a product hypothesis, not a commitment to a final commercial genre.

## First test
Build a single-screen prototype containing only:
- a bounded playfield;
- a resource/object source;
- 3 placeable machine parts with visibly different behavior;
- a start/reset loop;
- one clear success metric;
- no meta progression, account system, monetization, narrative, store integration, or large art pipeline.

### Success criteria for the first internal proof
Technical:
- Runs reliably in a modern browser.
- Reset produces a clean deterministic baseline.
- Each machine part has a visibly distinct effect.

Design:
- A first-time observer can explain what happened after one run.
- At least two meaningfully different layouts can improve the metric.
- The result of changing one part is immediately visible.

If those criteria fail, revise the interaction before adding content.
