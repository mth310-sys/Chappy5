# Nocturne Game & Reel Director Handoff — Product Run 1

Date: 2026-08-30
Status: `GAME_REEL_RUN1_IMPLEMENTED / VISUAL_SOUND_QA_REQUIRED`

## Main change
Commit `baa67ea` updates `prototypes/nocturne-aquarium/play-stage-v2.html`.

The product loop no longer uses `gameNo % 16` as the primary anticipation source. It now reads the visible center symbols from the three physical reels after STOP, classifies that reel evidence, carries it into the next LEVER, and uses the same evidence in develop / resolve / BONUS eligibility events.

### Event/reel coupling
- STOP emits `stop` with ordinal + physical reel index.
- After the underlying reel has resolved, `reel-evidence` emits observed center symbol + evidence token/score.
- Third STOP emits `resolve` with the full three-reel evidence.
- Prior result evidence influences the next LEVER presentation tier, creating pachislot continuity without a menu/exploration action.
- Second STOP can trigger `develop` when accumulated state or currently visible evidence is strong.
- Prototype BONUS eligibility currently requires accumulated omen plus strongest reel-evidence class; `prototypeRule:true` is emitted so this cannot be mistaken for a verified/final probability or payout spec.

### Prototype-only evidence grammar
No final probabilities are claimed. Current temporary grammar is deterministic from visible symbols:
- three matching symbols / two-or-more 七 -> strongest resonance
- 鍵+月 / any pair -> linked evidence
- single 七/鍵/月 -> trace
- otherwise plain

This replaces arbitrary game-count cadence with visible reel/result causality while preserving the ordinary BET→LEVER→SPIN→STOP×3 pachislot loop.

## Downstream
Visual: consume `reel-evidence`, `develop`, `resolve`, `bonus-hit` from the existing `nocturne:game-event` spine; do not add explanatory HUD text.
Sound: use the same evidence/intensity events rather than separate timers.
QA: verify center-symbol capture timing at 45ms across all six STOP orders and rapid input; if underlying reel DOM resolves later on WebKit, adjust capture timing/event hook rather than fabricating evidence.

SIGNAL / FORGE / VAULT untouched. No PASS claim. `PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED` remain.
