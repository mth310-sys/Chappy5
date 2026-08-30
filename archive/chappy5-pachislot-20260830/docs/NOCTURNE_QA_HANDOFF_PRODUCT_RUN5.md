# Nocturne Aquarium — Playtest & QA Product Run 5 Handoff

Date: 2026-08-30
Role: Playtest & QA Director
Target: `prototypes/nocturne-aquarium/play-stage-v2.html`

## Authoritative baseline

Work began from latest `main` after re-reading README, the current Nocturne product code, Product Run 5 Game/Reel, Visual/Mechanism and Sound handoffs, prior QA handoff, and current WebKit QA. Latest `main` remained the sole truth.

## QA finding and concrete fix

Run 5 Game/Reel emits `pachi-payoff-window` with a precise `phase` plus a broader `outcome` state. Example: `phase: bonus-open, outcome: bonus`; `phase: at-open, outcome: at`; `phase: normal-return, outcome: return`.

Visual Run 5 incorrectly preferred `outcome` over `phase`. As a result, WIN and miss could respond because their labels happened to match, while BONUS-open / AT-open / normal-return could silently miss the intended Run 5 payoff mechanism.

Fixed on `main` in commit `ddab3fa18899f6ed6e08f0d5ec037ea8e3ab90c7`: Visual Run 5 now consumes the same phase contract as Sound and only falls back to other aliases after `phase`.

## Regression coverage added

Commit `503ecd571af37e79fb34a00aa4571f4ce03b0f5f` extends `playtest/nocturne-stop-semantics.spec.js` so WebKit QA now requires all three Product Run 5 semantic consumers to be loaded:

- Game/Reel: `data-game-reel-product-run5=1`
- Visual: `data-visual-product-run5=1`
- Sound: `data-sound-product-run5=semantic-stop-v1`

A new deterministic regression sends the actual semantic contract (`phase: bonus-open, outcome: bonus`) and requires Visual Run 5 to enter the `pay` response, then sends (`phase: normal-return, outcome: return`) and requires a quiet return response. This specifically prevents the phase/outcome routing defect from returning.

The existing integrated product QA continues to cover 390px iPhone viewport, all six stop orders, 36G continuous play, rapid/mistaken taps, BET during spin, idle STOP, reload, >=44px touch targets, overflow, DOM/animation growth, JS errors, WebKit crash signals, deterministic BONUS→AT→normal return, event-path coverage, explanatory-prose suppression and actual player-facing pachislot presentation text.

## Shared player-facing text rule — MUST CONTINUE

Flag/remove tutorial, debug and system-explanation prose. Do not confuse this with pachislot presentation text.

`CHANCE`, `BONUS`, `WIN`, `GET/TOTAL ○○枚`, `残り○G`, `+○G`, CZ/AT names, continuation/end and result displays are wanted pachislot performance language. Play should be understood primarily through reel evidence + LCD + sound + cabinet light/mechanism, with these labels punctuating states and payoffs. No exploration/menu gameplay.

## Verification state

Before these QA fixes, fresh Generic Autonomous Playtest for Sound Product Run 5 commit `5cb3bd09...` completed successfully, and Pages for the latest pre-QA handoff also completed successfully.

Fresh Generic Autonomous Playtest for QA commit `503ecd571...` is Actions run `33312551130`; it was `in_progress` at handoff creation. Therefore this run does **not** declare Product QA PASS yet.

Reality PASS: NOT DECLARED. Audio PASS: NOT DECLARED. Human PASS: NOT DECLARED. CI can verify routing/stability, not perceptual quality or actual human audibility/impact.

## Machine Director next action

Treat `phase` on `pachi-payoff-window` as the precise lifecycle contract across Game/Reel, Visual and Sound. Preserve the distinction between a semantic phase (`bonus-open`, `at-open`, `normal-return`) and a broader outcome/state (`bonus`, `at`, `return`).

Continue judging the machine as pachislot, not as a beautiful technical demo: normal rhythm → omen → reel/role information gain → anticipation carry → chance-up → development/confrontation → judgment → miss/hit → BONUS/AT → continuation/return. The stronger payoff moments must visibly and audibly release the accumulated tension.

SIGNAL / FORGE / VAULT were not modified. Toki no Issen was not modified.
