# Nocturne Game & Reel Handoff — Product Run 2

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE`

Latest main, README, production workflow, Reality Standard, Productization Master and Machine Run 2 handoff were re-read before work.

## Concrete main update
Commit `d590b35` updates `prototypes/nocturne-aquarium/play-stage-v2.html`.

The player-facing loop is now more explicitly pachislot-like without adding exploration/menu controls or explanatory prose:
- BET → LEVER → SPIN → STOP1 → STOP2 → STOP3 remains the only basic operation.
- stopped reel center symbols are retained per reel and classified as prototype-only reel evidence.
- STOP1 can create a small-role/chance-up beat from the actually stopped symbol.
- STOP2 can create chance-up/development from accumulated anticipation or partial reel evidence.
- STOP3 resolves the full three-reel evidence.
- medium evidence can carry anticipation across multiple normal games instead of resolving everything in one game.
- strong evidence, or medium evidence backed by strong carried anticipation, can produce the current prototype BONUS hit.
- stage movement remains behind ordinary play and no longer displays stage-name prose in this product shell.

## BONUS / AT direction
The prototype-only reward loop was deepened without claiming final payout/spec values:
- BONUS is now a real mode with its own repeated reel games; its game count decrements after STOP3 resolution, not at BET.
- reel evidence during BONUS accumulates an internal provisional charge.
- sufficient BONUS charge can transition to prototype `OCEAN RECORD` AT.
- AT is a repeated reel-game mode; strong reel evidence can provisionally add one game, then the machine returns to normal when the section ends.
- all provisional counts/thresholds stay internal and are emitted with `prototypeRule:true`; they are not final specification claims.

## QA-only deterministic route
`?qa=product-loop` supplies a hidden deterministic evidence sequence for automated QA to reach anticipation → development → BONUS without changing public play. No extra player-facing control or menu was added.

## New/expanded shared Game Events
`reel-role`, `chance-up`, `develop`, `resolve`, `miss`, `bonus-hit`, `bonus-open`, `bonus-result`, `bonus-end`, `at-open`, `at-continue`, `at-result`, `at-end`, `normal-return`, plus existing BET/LEVER/STOP/mode events.

Next Visual & Mechanism Director should turn these event distinctions into actual pachislot presentation rather than labels: especially STOP1 small-role response, STOP2 chance-up/development, STOP3 judgment, BONUS repeated-play identity, OCEAN RECORD entry/continuation, and normal return.

Next Sound Director should mirror the same event hierarchy with quiet-normal → omen → stop escalation → judgment → hit/miss → BONUS/AT contrast.

No SIGNAL / FORGE / VAULT files were modified. Human Gate 2 remains closed. `PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED` remain until downstream evidence.