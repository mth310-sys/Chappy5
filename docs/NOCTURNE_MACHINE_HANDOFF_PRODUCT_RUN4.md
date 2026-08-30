# Nocturne Machine Director Handoff — Product Run 4

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / SUBMISSION_QA_PATH_CORRECTED / FRESH_CI_PENDING`

Latest main, README, production workflow, Reality standard, dual-track status, Productization Master, current Nocturne code and latest QA handoff were re-read before this run.

## Largest current bottleneck

The newest WebKit run `33307681196` proved the 50G nested Nocturne sound-wrapper repeated-play test now passes, but the workflow still failed in the older submission-readiness test because that test opened `play.html` while asserting audio state on the outer page. Product integrated QA was skipped downstream. This was stale QA topology, not evidence that the current product sound shell failed.

## Concrete main update

- `6294b33` — submission-readiness QA now opens Nocturne through `play-sound.html`, traverses `#shell → #game` to the actual BET/LEVER/STOP controls, and asserts technical AudioContext state on the page that owns it.
- Removed stale submission assertions for retired observation/memory buses. No first-STOP stage selection or exploration contract is allowed back into QA.
- Submission QA now protects the canonical `nocturne:game-event` audio causality and actual cabinet `pointerdown` audio boot path.
- Toki submission path remains unchanged.

## Machine direction after CI blocker

If fresh CI passes, the next product bottleneck is not another infrastructure layer. It is the Human concern: Nocturne must become interesting as pachislot, not merely beautiful. Keep `BET → LEVER → SPIN → STOP×3` central and deepen the expectation/reward rhythm through reel evidence, quiet games, lever omen, anticipation carry, chance-up, development, third-stop judgment, hit/miss, BONUS/AT, continuation and return. The same Game Event must coordinate LCD, reels, underwater world, cabinet light/mechanism and audio.

## Human shared text rule — MUST CONTINUE

Remove/minimize tutorial/debug/system-explanation prose. Do **not** remove normal pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET枚数`, `残りG`, `+G`, continuation/end, CZ/AT names and result displays. These are wanted pachislot performance tools and should be staged strongly when appropriate.

No exploration/menu gameplay or first-STOP stage selection may return. Persistent world/stage tone stays behind normal pachislot play.

## Verification state

Fresh CI triggered by `6294b33` was not complete when this handoff was written. Therefore no Product QA/Reality/Audio/Human PASS is claimed. `REALITY_UNVERIFIED / AUDIO_FINAL_UNVERIFIED / HUMAN_UNVERIFIED` remain.

SIGNAL / FORGE / VAULT were not modified.
