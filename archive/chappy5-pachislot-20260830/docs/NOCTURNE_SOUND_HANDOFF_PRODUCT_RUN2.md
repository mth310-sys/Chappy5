# Nocturne Sound & Experience Director Handoff — Product Run 2

Date: 2026-08-30
Status: `AUDIO_PRODUCT_RUN2_IMPLEMENTED / HUMAN_BROWSER_LISTEN_REQUIRED`

## Main change
- `a76630b` updates `prototypes/nocturne-aquarium/play-sound.html` against current product Game Events.

## What changed
- Kept real-button `pointerdown` AudioContext boot/resume for iPhone Safari.
- Split physical control FX and world/BGM into separate reusable buses. Tension ducking now lowers the underwater world/BGM without burying BET/LEVER/STOP physical response.
- Added reusable procedural cues for `chance-up`, reel-evidence response, `miss`, count/result punctuation, `CONTINUE`, return-to-normal and AT entry.
- Mirrored current Visual/Game event hierarchy: quiet normal -> omen -> CHANCE -> develop -> STOP3 resolve -> miss/hit -> BONUS -> OCEAN RECORD -> continuation/result -> return.
- BONUS keeps the previously audible 76 BPM aquatic loop direction. OCEAN RECORD receives a distinct 90 BPM deeper-driving reusable loop so AT is audibly more valuable than normal/BONUS.
- `bonus-result` / `at-result` now receive short count punctuation suitable for machine-natural remaining/GET/TOTAL presentation without explanatory voice/text.
- `at-continue` receives a dedicated rising continuation cue; `normal-return` deliberately releases back into the low 43 Hz submerged bed.
- Loop management is single-source: state BGM cannot stack; prior loop fades/stops before another starts.
- Temporary one-shot BufferSource/Gain nodes still disconnect on end; no continuous JS scheduler or high-frequency audio node creation was added.

## Shared text rule
Tutorial/debug/system-explanation prose should be removed or minimized. Ordinary pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL/GET枚数`, `残りG`, `+G`, continuation/end, CZ/AT names and result displays is intentional and should receive matching visual/audio punctuation. Do not mistake this for unwanted explanatory text.

## Boundaries
- No SIGNAL / FORGE / VAULT files modified.
- No verified payout/spec claims added.
- `AUDIO_FINAL_UNVERIFIED / REALITY_UNVERIFIED / PLAYTEST_UNVERIFIED` remain. This integrated Run 2 path still requires actual Safari/iPhone-width human listening and browser QA before any AUDIO PASS.

## QA focus
Confirm first real BET/LEVER gesture starts audio; physical BET/LEVER/STOP remains clear during omen/develop ducking; CHANCE is distinguishable from ordinary reel evidence; STOP3 miss vs hit has tension/release contrast; BONUS and OCEAN RECORD loops do not stack; CONTINUE/result punctuation is audible but not fatiguing; mode exit returns cleanly to submerged normal ambience without JS errors or runaway nodes.
