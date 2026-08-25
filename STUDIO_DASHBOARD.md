# Chappy5 Studio Dashboard

Updated: 2026-08-25 20:24 JST
Target: ECHO DRIFT core decision loop

| 領域 | Status | Severity | Confidence | Verification | 最新の重要Finding |
|---|---|---:|---|---|---|
| Game Systems | WARNING | 4 | HIGH | SIMULATED | Fixed-stop probes found shallow expected-value optima (notably deep around depth 3), risking a learned extraction threshold instead of contextual push-your-luck decisions. |
| Player Experience | WARNING | 3 | MEDIUM | SIMULATED | Portrait/large-button structure is promising, but the play sensation may still read as cards changing numbers. Real tension, reward feel and replay desire remain unverified. |
| Progression & Content | WARNING | 4 | HIGH | OBSERVED | Persistent bank/runs/discovery record play but do not yet alter future strategy. Do not solve by content quantity or flat permanent power. |
| Technical & Quality | WARNING | 3 | HIGH | OBSERVED | Active-run persistence and save validation now exist. Real iPhone/Safari behavior and deterministic browser regression remain unverified. |

## Executive priority

**Make continue-vs-extract depend on the current visible opportunity, not mainly on a memorized depth threshold.**

This remains higher priority than adding long-term progression or more content because the flagship premise fails if the core decision becomes routine.

## Executive integration — 20:24 JST

### Evidence integrated

Systems simulation found best fixed extraction points substantially outperforming forced continuation for simple pure-route policies. That is not proof of player behavior or fun, but it is strong enough to treat static stop-depth convergence as the highest current structural risk.

Player Experience separately found that outcomes risk feeling arbitrary when important risk information is hidden and that the strong radar presentation is not yet fully connected to game sensation. Progression found no meaningful cross-run strategic growth yet. Technical found save/reload weaknesses and already repaired active-run persistence and validation.

### Game change this cycle: visible, depth-scaled anomaly temptation

The existing anomaly mechanic was previously hidden until after choosing a route. Executive changed it into a **visible opportunity before the continue/extract decision**:

- anomaly routes are marked with `⚠`;
- their extra haul and extra threat are shown before selection;
- anomaly haul bonus now grows with next depth: `2 + floor(nextDepth / 2)`;
- anomaly still adds +7 threat and can produce a discovery.

Reason: this uses an existing mechanic rather than adding a new subsystem, and creates a state-dependent reason to risk "one more step". A player at the same depth can now rationally choose differently depending on whether a valuable anomaly is currently offered. The deeper scaling makes late opportunities more tempting without simply reducing danger.

Verification: implementation is `OBSERVED`; its balance and effect on decision quality are `UNVERIFIED` until the next Systems simulation and later human play.

### What was deliberately not done

- No flat permanent stat upgrades were added.
- No new enemies/items/relic lists were added.
- No broad rebalance of all route values was performed before measuring this smaller change.
- No large refactor was performed.

## Current playable loop

1. Start a dive.
2. Inspect three visible route offers, including any anomaly opportunity.
3. Choose a route or extract the current haul.
4. Trade Energy, haul, resonance and collapse risk.
5. Bank salvage/discoveries across runs.

## Next evidence needed

Game Systems should re-simulate policies that can react to visible anomalies, current threat, energy, resonance chain and rolled cost/gain. Key question: **does the optimal action now vary meaningfully by state, or does a shallow fixed extraction rule still dominate?**

If fixed-depth extraction remains strongly superior, Executive should reshape value-at-depth again before adding progression.

## Human verification status

No HUMAN_VERIFIED findings yet. Do not claim the game is fun.

When AI-detectable structural issues are reduced, human play should answer only:
- Did you genuinely hesitate between extracting and taking the visible next opportunity?
- Did route choices feel meaningfully different rather than numerically obvious?
- After a run ended, did you want to immediately start another?
