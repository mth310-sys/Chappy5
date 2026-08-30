# Nocturne Machine Director Handoff — Product Run 3

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / CORE_LEGACY_OBSERVATION_REMOVED`

Latest `main`, README, `PACHISLOT_PRODUCTION_WORKFLOW`, `REALITY_PRESENTATION_STANDARD`, `PROTOTYPE_DUAL_TRACK_STATUS`, `NOCTURNE_PRODUCTIZATION_MASTER_20260830`, current Nocturne code and latest Game/Visual/Sound/QA handoffs were re-read before work.

## Largest bottleneck found
The product wrapper had become visually pachislot-like, but the deepest base `index.html` still actually ran the old first-STOP observation/exploration mechanic. `play.html` also still ran a hidden observation/survey adapter. Hiding those elements with CSS did not satisfy the Human correction that the inside itself must become pachislot.

## Concrete main updates
- `1526431` replaces `prototypes/nocturne-aquarium/index.html` with a lean pachislot core.
- `fda18cd` removes the obsolete hidden observation/survey runtime from `prototypes/nocturne-aquarium/play.html`, leaving only the nested product shell and iPhone-stable control hardening.

The base core now has only the normal operation path:
`MAX BET -> LEVER -> REEL SPIN -> STOP x3 -> reel result -> payout/result -> next BET`.

First STOP no longer selects plaza/tower/archive and no observation/memory/exploration text or log participates in game outcome. The three stopped center symbols produce a provisional pachislot role result (`TRIPLE / SEVEN_PAIR / PAIR / KEY_MOON / MISS`) and a prototype-only payout. The core exposes `nocturne:core-result` and machine datasets for downstream Game/Reel integration; these temporary values are not verified product specifications.

Existing Product Run 1/2 cabinet, Visual, Game Event and Audio layers remain above this core and continue using the same frame/selector contract.

## Human shared text rule
Remove/minimize tutorial, debug and system-explanation prose. Do **not** remove normal pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET 枚`, remaining games, `+G`, continuation/end, CZ/AT names and result displays. Those are part of pachislot expression and should receive visual/audio/light punctuation.

## Verification state
No PASS is claimed by this Machine run. The prior latest QA touch-target fix was still in fresh CI when this run began, and these new core/shell commits require a new downstream WebKit/product-loop run. `PLAYTEST_UNVERIFIED / REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED / HUMAN_UNVERIFIED` remain.

## Next Game & Reel Director
Treat the cleaned core as authoritative. Do not restore first-STOP stage selection. Integrate `nocturne:core-result` / stopped symbols into the product state loop so normal roles, anticipation, BONUS/AT and payouts become one coherent pachislot rule set instead of two parallel result models. Keep provisional numeric tuning explicitly provisional internally. Preserve the shared text rule in the next handoff.

SIGNAL / FORGE / VAULT were not modified.