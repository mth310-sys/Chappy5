# Nocturne Sound & Experience Director Handoff — Product Run 5

Date: 2026-08-30
Status: `PRODUCTIZATION_ACTIVE / STOP_SEMANTIC_AUDIO_COUPLING_INTEGRATED / HUMAN_BROWSER_LISTEN_REQUIRED`

Latest main, README, production/reality/productization docs, current canonical Nocturne product code, Game & Reel Product Run 5 handoff and Visual & Mechanism Product Run 5 handoff were re-read first. Latest main was treated as sole truth.

## Human shared text rule — MUST CONTINUE

Remove/minimize tutorial, debug and system-explanation prose. Do **not** remove ordinary pachislot presentation/information such as `CHANCE`, `BONUS`, `WIN`, `TOTAL n枚`, `GET n枚`, `残り nG`, `+nG`, continuation/end, CZ/AT names and result displays. These are wanted pachislot performance tools and should receive matching sonic punctuation.

## Concrete change

Commit `5cb3bd09f185a5438781dc727def7626a6b869a1` extends the already-canonical `sound-product-run4.js` rather than adding another AudioContext or another independent scheduler.

The sound layer now consumes the Game/Reel-owned semantic events that Visual Run 5 already uses:

- `pachi-lever-read`
- `pachi-stop-read`
- `pachi-role-resolved`
- `pachi-payoff-window`

This makes the same STOP information hierarchy audible at the same moment it becomes visible.

### STOP information cadence

- `quiet`: no semantic overlay sound. Normal games are allowed to remain genuinely quiet.
- `weak`: short high glass trace only.
- `medium`: glass trace plus low underwater pressure pulse.
- `strong`: brief mix dip, deeper pressure cue and delayed seal tone.
- STOP ordinal slightly changes rate so STOP1 / STOP2 / STOP3 are not acoustically identical.

### Resolution / payoff cadence

- `hint / chance / strong / pay` receive progressively clearer result seals without replacing the existing role/payout/BONUS audio path.
- A developed medium/strong miss gets a low release-breath rather than a fake success sting.
- `bonus-open` and `at-open` receive different short seals, while their existing BGM/state audio remains authoritative.
- `normal-return` gets a restrained falling water/glass cue and resets semantic STOP memory.

## Performance / Safari constraints

- Reuses the existing single persistent AudioContext and gain bus.
- Adds reusable prebuilt AudioBuffers only; no requestAnimationFrame and no continuous audio scheduler.
- One-shots disconnect themselves on end.
- Actual machine-button `pointerdown` remains the AudioContext boot/resume gate.
- Visibility suspension remains intact.
- No extra player-facing prose was added.
- SIGNAL / FORGE / VAULT were not modified.

## Product intent

Nocturne must not merely sound beautiful. The audio now helps the player hear information accumulate through the reels: a weak first clue should feel different from a meaningful second STOP, and a strong third STOP should compress the room before the result rather than simply becoming louder. Silence remains an authored state so CHANCE / WIN / BONUS / AT punctuation has contrast.

## Verification state / next QA

No Audio / Reality / Human PASS is claimed. `AUDIO_FINAL_UNVERIFIED / REALITY_UNVERIFIED / HUMAN_UNVERIFIED` remain.

QA should verify in fresh WebKit/iPhone-equivalent play:

1. first real BET/LEVER/STOP gesture activates audio reliably,
2. quiet STOP bands do not gain unwanted semantic noise,
3. weak/medium/strong STOP bands are distinguishable without masking the physical STOP sound,
4. Run 4 legacy cues plus Run 5 semantics do not create objectionable double-stings,
5. strong STOP → judgment → miss releases tension rather than sounding like a hit,
6. strong STOP → WIN → BONUS has silence/compression/release and no clipped stacking,
7. BONUS / OCEAN RECORD loops remain single-instance and recover cleanly to normal,
8. repeated 30G+ play does not show runaway AudioNode or playback accumulation.
