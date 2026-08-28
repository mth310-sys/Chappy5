/* Sound & Experience Run 5 — original Nocturne routing profile.
 * Prototype-only. No third-party samples/assets.
 * Keeps semantic quiet separate from Safari/technical mute state.
 */
export const NOCTURNE_AUDIO_ROUTING = Object.freeze({
  master: 0.34,
  buses: Object.freeze({
    environment: 0.035,
    mechanism: 0.58,
    operation: 0.82,
    observation: 0.70,
    memory: 0.76
  }),
  environment: Object.freeze({ fundamentalHz: 43, lowpassHz: 96 }),
  hierarchy: Object.freeze(['environment', 'operation', 'observation', 'memory', 'depth']),
  technicalMuteDataset: 'audioTech'
});

export function createNocturneBuses(ctx, master) {
  if (!ctx || !master) return null;
  const buses = {};
  for (const [name, level] of Object.entries(NOCTURNE_AUDIO_ROUTING.buses)) {
    const gain = ctx.createGain();
    gain.gain.value = level;
    gain.connect(master);
    buses[name] = gain;
  }
  return buses;
}

export function createNocturneEnvironment(ctx, environmentBus) {
  if (!ctx || !environmentBus) return null;
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  osc.type = 'sine';
  osc.frequency.value = NOCTURNE_AUDIO_ROUTING.environment.fundamentalHz;
  filter.type = 'lowpass';
  filter.frequency.value = NOCTURNE_AUDIO_ROUTING.environment.lowpassHz;
  osc.connect(filter).connect(environmentBus);
  osc.start();
  return {
    dispose() {
      try { osc.stop(); } catch (_) {}
      try { osc.disconnect(); filter.disconnect(); } catch (_) {}
    }
  };
}

export function isTechnicalMute(body) {
  const state = body?.dataset?.audioTech || 'not-started';
  return state !== 'running';
}
