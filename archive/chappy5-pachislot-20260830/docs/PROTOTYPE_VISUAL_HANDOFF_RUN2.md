# Dual Prototype — Visual & Mechanism Director Run 2 Handoff

Date: 2026-08-29 JST
Status: `VISUAL_MECHANISM_RUN2_APPLIED_UNVERIFIED`

Latest main, README, production workflow, Reality Standard, Dual Prototype Status, both integrated playables and Game & Reel Run 2 handoff were re-read before work. SIGNAL / FORGE / VAULT were not changed. Human Gate 2 remains closed.

## Primary decision

Game & Reel Run 2 added compact cadence/evidence readouts. The Visual task was to keep these from reading as mobile-game HUD while preserving stationary touch geometry demanded by Machine Run 1. This pass therefore moves feedback into cabinet light, trim and instrument language instead of translating controls or enlarging overlays.

The current Generic Autonomous Playtest failure inspected during this run was for commit `656702a` and therefore predates the Machine fixed-geometry changes and Game & Reel Run 2. It must not be treated as evidence that the current main still fails. A downstream QA run must re-test latest main.

## 刻ノ一閃

Changed `prototypes/toki-no-issen/play.html`.

- Re-styled the cadence rail as a narrow metallic/blade instrument: faceted ends, dark recessed face, gold edge line and restrained glowing active state.
- Added a small blade-notch mechanism to the existing blade bridge so the lower screen/reel boundary reads as a physical sword component rather than a plain divider.
- STOP1 / STOP2 / STOP3 now drive distinct cabinet reactions without moving any touch target:
  - STOP1 emphasizes the left internal spine.
  - STOP2 emphasizes the right internal spine.
  - STOP3 lights both spines plus the blade notch.
- The screen frame gets a brief metallic/purple reflected-light response from the same STOP event.
- Result messages add a short cabinet-level resolve state so the final crossing slash and blade bridge feel like the machine reacting to the completed three-cut sequence.
- BET and LEVER clear the transient resolve state so the machine visibly returns to its neutral stance.
- 390px responsive styling reduces rail typography/spacing rather than shrinking physical STOP targets.

Intent for Sound: preserve the current three transient identities. Cabinet light now gives each STOP a visible physical location, so audio should reinforce that timing rather than add continuous noise.

## ノクターン・アクアリウム

Changed `prototypes/nocturne-aquarium/play.html`.

- Re-styled the observation rail as a recessed underwater instrument panel with small indicator lamps instead of a detached quest/progression HUD.
- Added a sonar/lens ripple inside the aquarium screen. It is triggered directly by each STOP and positioned toward the selected observation area rather than floating over the operation deck.
- First STOP now connects three layers at once: selected physical reel, selected world zone from existing game code, and a matching cabinet/sonar response.
- Subsequent STOPs reuse the same sonar mechanism at lower semantic weight; third STOP receives the strongest scan because the observation evidence is complete.
- Cabinet side tubes/tank frame get short channel-dependent light response without changing layout or control geometry.
- Memory/DEPTH evidence raises tank-frame and depth-ring luminosity separately from normal channel selection, preserving the distinction between observation and discovery.
- BET/LEVER clear the temporary memory emphasis and return to the quiet aquarium baseline.
- 390px responsive styling reduces instrument typography while keeping the tank, reels and controls dominant.

Intent for Sound: the new sonar graphic is an event cue, not permission for constant sonar audio. Keep the quiet baseline and let first selection, reel STOP and memory discovery remain separately readable.

## Verification / caution

- Both integrated files were written as self-contained overlay/integration layers; the existing underlying `index.html` game logic was not modified in this Visual pass.
- Control targets remain stationary and the Machine Director fixed-geometry overrides are preserved.
- No third-party assets were introduced.
- Current rendered appearance remains `VISUAL_UNVERIFIED` and `REALITY_UNVERIFIED` until downstream browser evidence checks the new overlays on WebKit/iPhone dimensions.
- Latest-current repeated-play QA was not yet available during this run. The previously inspected failure is stale relative to the current commits.

## Next Sound & Experience focus

1. Re-read latest main before work.
2. Preserve quiet/active contrast in Nocturne and do not sonically mirror every visual shimmer.
3. In Toki, keep STOP3 and final resolve separated; Visual now has a distinct third-stop cabinet beat followed by result emphasis.
4. Do not move controls or change touch geometry while adding sound interaction behavior.
5. Leave SIGNAL / FORGE / VAULT untouched.
