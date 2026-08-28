/* Sound & Experience Run 5 — original Web Audio timing profile.
 * Prototype-only. No third-party samples/assets.
 * Imported by the integrated shell when the next safe HTML integration point is available.
 */
export const TOKI_AUDIO_TIMELINE = Object.freeze({
  bet: { mechHz: 145, confirmHz: 290, confirmDelayMs: 20 },
  lever: { mechHz: 72, spinBedHz: 54, spinBedGain: 0.0045 },
  stop: {
    mechDelayMs: 0,
    slashDelayMs: 12,
    thirdBladeTailDelayMs: 38,
    resultDelayMs: 90,
    resultReleaseMs: 130
  },
  silence: {
    // Meaningful silence: after the third slash, leave room before resolve.
    thirdStopToResolveMs: 52,
    // Technical mute is never represented by this value; use body.dataset.audioTech.
    technicalMuteDataset: 'audioTech'
  }
});

export function createTokiSpinBed(ctx, destination) {
  if (!ctx || !destination) return null;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.value = TOKI_AUDIO_TIMELINE.lever.spinBedHz;
  gain.gain.value = 0.0001;
  osc.connect(gain).connect(destination);
  osc.start();
  return {
    start(at = ctx.currentTime) {
      gain.gain.cancelScheduledValues(at);
      gain.gain.setValueAtTime(Math.max(0.0001, gain.gain.value), at);
      gain.gain.linearRampToValueAtTime(TOKI_AUDIO_TIMELINE.lever.spinBedGain, at + 0.045);
    },
    stop(at = ctx.currentTime) {
      gain.gain.cancelScheduledValues(at);
      gain.gain.setValueAtTime(Math.max(0.0001, gain.gain.value), at);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.055);
    },
    dispose() {
      try { osc.stop(); } catch (_) {}
      try { osc.disconnect(); gain.disconnect(); } catch (_) {}
    }
  };
}
