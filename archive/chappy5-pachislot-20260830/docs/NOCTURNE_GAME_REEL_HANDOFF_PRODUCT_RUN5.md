# Nocturne Game & Reel Director Handoff — Product Run 5

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / STOP_INFORMATION_SEMANTICS_ADDED / FRESH_WEBKIT_PENDING`

Latest `main` (`30fd813ce0a953accadd8bb7865fbd106b2fcd65` at run start), `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, `docs/NOCTURNE_PRODUCTIZATION_MASTER_20260830.md`, Machine Product Run 5, QA Product Run 3, and the current canonical Nocturne product code were re-read before implementation. Latest main remained the sole truth.

## Concrete change

Commit `9faca60f1d08e36cbdc305c76180eebbf4914765` adds a Game & Reel Product Run 5 semantic bridge to the already-loaded product integration file. It does **not** add a menu, exploration control, new payout table, new probability, or new reel-control rule.

The bridge derives reusable pachislot information from the canonical `nocturne:game-event` reel evidence and exposes it back through the same event bus so Visual / Sound / QA do not have to invent separate interpretations of the reels.

New semantic events:

- `pachi-normal-rhythm` — tracks quiet normal-game run length without creating player-facing prose.
- `pachi-lever-read` — reduces the existing lever tier/carry into `quiet / weak / medium / strong` expectation bands.
- `pachi-stop-read` — gives STOP1 / STOP2 / STOP3 an explicit information band derived from the actual partial reel evidence.
- `pachi-role-resolved` — classifies the final canonical role/result as `plain / hint / chance / strong / pay` without changing the result itself.
- `pachi-payoff-window` — marks `miss / win / bonus-open / at-open / normal-return` as lifecycle payoff windows for coordinated presentation.

Machine datasets now expose the same semantics (`data-pachi-stop-band`, stop ordinal, lever band, outcome, role, quiet-run) for low-cost QA/presentation inspection.

## Pachislot intent

The purpose is to make information gain at each STOP an explicit part of the product architecture:

- STOP1 can stay quiet, give a weak trace, or create a medium first clue.
- STOP2 can upgrade the same game to weak / medium / strong based on partial reel evidence.
- STOP3 receives the canonical core evidence and closes the role/result as plain, hint, chance, strong or payout-bearing.
- Lever expectation remains connected to multi-game anticipation carry.
- Quiet games are deliberately preserved so strong beats have contrast.

This is semantic coupling only. Existing prototype hit/BONUS/AT thresholds and game counts are **not** promoted to verified product specifications.

## Human shared text rule — MUST CONTINUE

Remove or minimize tutorial, debug and system-explanation prose. Do **not** remove ordinary pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL n枚`, `GET n枚`, `残り nG`, `+nG`, continuation/end, CZ/AT names and result displays. These are wanted pachislot performance tools, not forbidden text.

The target is not a textless art piece. Explanations should disappear; pachislot information and payoff typography should remain clear and exciting.

## Invariants preserved

- Basic operation remains `BET → LEVER → SPIN → STOP×3 → result → next game`.
- First STOP does **not** select a stage.
- Persistent stage/world tone remains background presentation only.
- No exploration/menu gameplay was added.
- No verified probability, payout or regulatory claim was introduced.
- No continuous animation loop or high-frequency DOM churn was added; bridge is event-driven only for Safari/WebKit safety.
- SIGNAL / FORGE / VAULT were not modified.

## Next Visual & Mechanism Director

Consume `pachi-lever-read`, `pachi-stop-read`, `pachi-role-resolved` and `pachi-payoff-window` as the Game/Reel-owned expectation vocabulary. Make STOP1, STOP2 and STOP3 visibly distinct without turning every game into `CHANCE`. Preserve quiet normal games. When the band rises, let LCD / aquarium light / reel-window / lower mechanism increase in a causal hierarchy; reserve the largest release for `win`, `bonus-open`, and `at-open`.

Normal pachislot labels remain valid and wanted. Do not replace a meaningful `WIN`, `BONUS`, `GET`, `TOTAL`, remaining-G or `+G` moment with abstract art merely to avoid text.

## Verification state

At run start the latest Generic Autonomous Playtest for `30fd813` was still `in_progress`; Pages for that SHA had succeeded. This Product Run 5 code commit therefore makes **no new WebKit/Product QA PASS claim** yet. Fresh CI for the new main must be checked by the following Directors.

`REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED / HUMAN_UNVERIFIED` remain.