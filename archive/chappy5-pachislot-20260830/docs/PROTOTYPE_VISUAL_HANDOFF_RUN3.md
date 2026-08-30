# Prototype Visual & Mechanism Director Handoff — Run 3

Status: `VISUAL_MECHANISM_RUN3_GAME_REEL_FEEDBACK_INTEGRATED`

Source of truth re-read before work: latest `main`, `README.md`, `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`, `docs/REALITY_PRESENTATION_STANDARD.md`, `docs/PROTOTYPE_DUAL_TRACK_STATUS.md`, both canonical prototype wrappers, `docs/PROTOTYPE_GAME_REEL_HANDOFF_RUN3.md`, and the latest commits.

## Run decision

Game & Reel Run 3 added repeat-play memory that risked becoming detached HUD information. This run therefore did not add new game systems or alter payout/probability logic. The visual priority was to absorb that state into each cabinet's physical language while preserving the fixed 46px information rail and stationary iPhone control geometry.

## 刻ノ一閃

Canonical build changed: `prototypes/toki-no-issen/play.html`.

### Applied

- `連閃` now leaves restrained slash-residue lines inside the recessed screen frame instead of existing only as text.
- Residue strength is capped visually at three layers so a long chain does not turn the machine into a generic meter or obscure the LCD/reels.
- STOP1 / STOP2 / STOP3 temporarily re-energize a different residue line from the same STOP event that already drives cabinet beat and audio.
- Final resolution lifts all residue lines together, connecting three physical STOP actions to the sword-action release.
- Residue survives into the next BET/LEVER when the chain survives, providing cross-game memory without moving the control deck.
- Responsive rules tighten the residue span at approximately 390px without reducing reel or STOP target prominence.

### Intended experience

A correct opening read should feel as if the previous cut remains physically impressed in the blade/LCD boundary. The next lever therefore begins on a machine carrying a small trace of the player's previous discipline, rather than on an entirely reset screen.

Do not increase this into a large combo gauge. The primary visual hierarchy remains: cabinet silhouette → wide LCD → physical reels → STOP controls → restrained blade residue.

## ノクターン・アクアリウム

Canonical build changed: `prototypes/nocturne-aquarium/play.html`.

### Applied

- Persistent `広場 / 塔 / 記録庫` survey coverage is now represented by three small optical observation lenses inside the aquarium screen world.
- First STOP lights the corresponding lens from the same event that selects the observation layer, triggers sonar and reacts through the cabinet/tube lighting.
- Previously visited layers retain a low-intensity optical glow, so the world itself remembers survey coverage without a generic progress bar.
- Completing all three layers briefly drives a `vm-survey-complete` response through the tank frame, screen brightness/saturation and all three optics together.
- The completion response is intentionally short and quiet visually; memory/DEPTH events remain the stronger world-change layer.
- 390px responsive sizing reduces the optical instrument diameter/gap rather than shrinking reels or control targets.

### Intended experience

The player should be able to look away from the text rail and still understand that the aquarium instrument has visited one, two or all three observation channels. The physical reel choice remains the cause of the visual change.

Do not turn the optics into a conventional UI progress indicator. They should read as submerged observation hardware embedded in the tank.

## Reality Standard alignment

This run specifically reinforces the same-event principle:

- 刻ノ一閃: `STOP → reel stop / cabinet beat / slash audio / blade residue response`.
- ノクターン: `first STOP → observation layer / reel evidence / sonar / tube-tank response / observation optic`.

No independent decorative timers were added for these new states.

## Verification / caution

- Updated wrappers were re-fetched from latest `main` after both writes to confirm the committed versions are current.
- No payout, probability, reel-control or game-state tuning values were changed.
- Fixed button geometry and the 46px information-rail envelope were preserved.
- SIGNAL / FORGE / VAULT were not changed.
- Human Gate 2 remains closed.
- Rendered appearance and feel remain `VISUAL_UNVERIFIED` / `REALITY_UNVERIFIED` until downstream browser/human inspection. Do not claim visual PASS from code inspection alone.

## Next Sound & Experience priority

1. Re-read latest main before work and preserve the new cabinet-integrated states.
2. 刻ノ一閃: do not add an extra sound for persistent residue itself. The residue is memory, not a new event. Keep STOP transient → slash → third-stop/result separation clean.
3. ノクターン: the optical survey lenses should remain primarily visual. If three-layer completion gets an audio accent, keep it below strong memory/DEPTH discovery so the hierarchy remains `normal observation < survey complete < memory < DEPTH`.
4. Preserve Safari user-gesture AudioContext start/resume behavior and do not change fixed control geometry.
