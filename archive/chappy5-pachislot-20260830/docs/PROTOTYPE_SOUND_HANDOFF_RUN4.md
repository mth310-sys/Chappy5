# Dual Prototype Sound & Experience Director Handoff — Run 4

Date: 2026-08-29 JST
Status: `AUDIO_RUN4_IMPLEMENTED_UNVERIFIED`

## Source of truth

Re-read latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both integrated prototype code paths, recent commits, and `docs/PROTOTYPE_VISUAL_HANDOFF_RUN4.md` before changing code.

Latest `main` remains sole source of truth. SIGNAL / FORGE / VAULT were not changed.

## Run 4 decision

The current bottleneck was not missing sound layers. Visual Run 4 already made the physical cause-and-effect stronger, while the audio path still crossed an `await boot()` Promise boundary on every control pointerdown even when the AudioContext was already running. That is unnecessary risk for perceived STOP latency on iPhone Safari.

This run therefore improves gesture-to-audio scheduling and technical mute observability without increasing the normal sound count.

### 刻ノ一閃

Commit `9345a0d` — `Tighten Toki audio gesture latency and mute state`

- Replaced the always-async `await boot()` control path with a running-state fast path.
- Once Web Audio is already running, BET / LEVER / STOP audio is scheduled synchronously inside the same pointerdown turn instead of waiting for a Promise microtask.
- First-use or post-background Safari resume remains user-gesture initiated. A shared `resumePromise` prevents duplicate concurrent resume calls.
- Existing mechanical-hit -> 12ms slash transient -> result delay timing is preserved. No new sound was added for Visual Run 4 blade rails, impact rails or persistent chain residue.
- AudioContext states are exposed as `body.dataset.audioTech` (`running`, `resuming`, `suspended-by-visibility`, `resume-failed`, `unsupported`, etc.) so QA can distinguish a technical mute from deliberate in-game silence.
- Backgrounding still suspends audio; returning does not auto-resume. The next real control gesture attempts resume.
- Existing reusable noise buffer and node cleanup remain intact.

### ノクターン・アクアリウム

Commit `77fe06e` — `Tighten Nocturne audio gesture latency and mute state`

- Applied the same running-state fast path so quiet mechanical STOPs and observation-channel tones do not cross an unnecessary async boundary once audio is active.
- Safari first-use / return-from-background resume remains tied to a genuine user control gesture and deduplicated through `resumePromise`.
- Added explicit `onended` disconnect cleanup for short-lived oscillator/gain nodes. The persistent 43Hz deep-water oscillator remains intentional and is not recreated per event.
- Kept the established hierarchy unchanged: quiet ambient baseline < observation < survey complete < MEMORY < DEPTH.
- Passive glass ribs, optical links and refraction layers remain silent. Reel STOP mechanical sound remains foreground evidence of the physical action.
- `body.dataset.audioTech` now exposes technical audio state without turning that state into an in-game message. This prevents QA from misclassifying suspended/unsupported audio as intentional quiet.

## Bluetooth / external-output policy

No attempt is made to shift game timing based on Bluetooth output latency. Device/output latency is treated as external uncertainty. Game state, STOP resolution and visual timing remain authoritative; Web Audio scheduling stays relative to the current AudioContext clock.

## Verification state

- Both integrated `play.html` paths were updated directly on latest main.
- Generic Autonomous Playtest and Pages deployment were triggered from latest main and were still running at handoff time; do not claim browser PASS from this run yet.
- Actual iPhone Safari ear feel, first-gesture onset, resume after app/background transitions and Bluetooth-device behavior remain `AUDIO_UNVERIFIED` / `HUMAN_UNVERIFIED` until QA/human listening.
- Human Gate 2 remains closed.

## Next Playtest & QA focus

1. Confirm normal BET -> LEVER -> STOP1/2/3 operation still passes on both prototypes.
2. On Safari-like lifecycle testing, inspect top document `document.body.dataset.audioTech` before and after background/resume so technical mute is explicit.
3. For 刻ノ一閃, judge whether STOP mechanical onset feels attached to the finger and whether the 12ms slash separation still reads as one physical cut rather than two unrelated sounds.
4. For ノクターン, confirm ambient quiet remains below physical reel-stop audibility and MEMORY/DEPTH events remain clearly above normal observation.
5. Do not compensate Bluetooth latency by modifying game-state timing.

SIGNAL / FORGE / VAULT remain untouched.
