/* Game & Reel Run 7 — long-play observation variety model for ノクターン・アクアリウム.
 * Prototype-only. No payout/probability/reel-control/DEPTH thresholds are changed.
 * It converts first-stop history + resolved evidence into a quiet next-observation reason.
 */
import { NOCTURNE_REEL_EVIDENCE, nocturneChainLabel } from './game-reel-run6.js';

export function createNocturneObservationMemory() {
  const visits = [0, 0, 0];
  const recentChains = [];
  const recentLayers = [];

  function record(firstStopIndex, symbols = []) {
    const index = Math.max(0, Math.min(2, Number(firstStopIndex) || 0));
    visits[index] += 1;
    recentLayers.push(index);
    const layer = NOCTURNE_REEL_EVIDENCE.layers[index];
    const chain = nocturneChainLabel(layer.name, symbols);
    recentChains.push(chain);
    if (recentLayers.length > 9) recentLayers.shift();
    if (recentChains.length > 9) recentChains.shift();
    return snapshot();
  }

  function snapshot() {
    const min = Math.min(...visits);
    const least = visits.findIndex(v => v === min);
    const layer = NOCTURNE_REEL_EVIDENCE.layers[least];
    const last3 = recentLayers.slice(-3);
    const sameLayer3 = last3.length === 3 && new Set(last3).size === 1;
    const lastChains = recentChains.slice(-3);
    const sameEvidence3 = lastChains.length === 3 && new Set(lastChains).size === 1;
    let reason = '未観測差を埋める';
    if (sameEvidence3) reason = '同じ証拠が続く。観測層を変える';
    else if (sameLayer3) reason = '同じ層を見続けている。別深度へ';
    else if (Math.max(...visits) - min <= 1) reason = '観測は均衡。出目優先で選ぶ';
    return Object.freeze({
      visits: Object.freeze([...visits]),
      nextIndex: least,
      nextLayer: layer.name,
      nextLabel: `${layer.name}＝${['左','中','右'][least]}第一停止`,
      reason,
      lastChain: recentChains.at(-1) || ''
    });
  }

  return Object.freeze({ record, snapshot });
}
