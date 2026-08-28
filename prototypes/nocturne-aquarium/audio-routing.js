/* Sound & Experience Run 6 — original Nocturne routing profile.
 * Prototype-only. No third-party samples/assets.
 * Keeps semantic quiet separate from Safari/technical mute state and gives the
 * pending public-shell integration one explicit event vocabulary.
 */
export {
  NOCTURNE_REEL_EVIDENCE,
  nocturneEvidenceFor,
  nocturneChainLabel,
  nextNocturneObservation,
  installNocturneVisualBridge,
  applyNocturneVisualEvidence
} from './game-reel-run6.js';

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

/* One event = one meaning. Frequencies are synthetic prototype values, not
 * borrowed sound assets. Stronger memory events gain duration/spacing rather
 * than simply stacking many louder voices over the reel STOP sound. */
export const NOCTURNE_AUDIO_EVENTS = Object.freeze({
  bet: Object.freeze({ bus: 'operation', hz: 118, durationMs: 34, gain: 0.010 }),
  lever: Object.freeze({ bus: 'mechanism', hz: 76, durationMs: 62, gain: 0.013 }),
  stop: Object.freeze({ bus: 'mechanism', hz: 132, durationMs: 30, gain: 0.012 }),
  observation: Object.freeze({
    bus: 'observation',
    channelsHz: Object.freeze([286, 337, 401]),
    durationMs: 65,
    gain: 0.014,
    overtoneDelayMs: 36
  }),
  survey: Object.freeze({ bus: 'observation', hz: 228, durationMs: 118, gain: 0.006 }),
  memory: Object.freeze({ bus: 'memory', hz: 310, durationMs: 220, gain: 0.013, secondDelayMs: 82 }),
  depth: Object.freeze({ bus: 'memory', hz: 164, durationMs: 440, gain: 0.017, stepMs: 82 })
});

export function nocturneObservationProfile(reelIndex = 0) {
  const event = NOCTURNE_AUDIO_EVENTS.observation;
  const index = Math.max(0, Math.min(2, Number(reelIndex) || 0));
  return Object.freeze({ ...event, hz: event.channelsHz[index] });
}

export function nocturneMemoryProfile(kind = 'memory') {
  return kind === 'depth' ? NOCTURNE_AUDIO_EVENTS.depth : NOCTURNE_AUDIO_EVENTS.memory;
}

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
