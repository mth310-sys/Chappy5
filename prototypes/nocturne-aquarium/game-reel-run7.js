/* Game & Reel Run 7 — long-play observation variety model for ノクターン・アクアリウム.
 * Prototype-only. No payout/probability/reel-control/DEPTH thresholds are changed.
 * It converts first-stop history + resolved evidence into a quiet next-observation reason.
 * Visual & Mechanism Run 7 adds an optional world-response bridge for the existing
 * circular observation windows/glass path. It is inert until the public shell calls it.
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
    let token = 'seek';
    if (sameEvidence3) { reason = '同じ証拠が続く。観測層を変える'; token = 'shift-evidence'; }
    else if (sameLayer3) { reason = '同じ層を見続けている。別深度へ'; token = 'shift-layer'; }
    else if (Math.max(...visits) - min <= 1) { reason = '観測は均衡。出目優先で選ぶ'; token = 'balanced'; }
    return Object.freeze({
      visits: Object.freeze([...visits]),
      nextIndex: least,
      nextLayer: layer.name,
      nextLabel: `${layer.name}＝${['左','中','右'][least]}第一停止`,
      reason,
      token,
      lastChain: recentChains.at(-1) || ''
    });
  }

  return Object.freeze({ record, snapshot });
}

export function installNocturneRun7VisualBridge(doc) {
  if (!doc || doc.getElementById('vm-run7-observation-style')) return false;
  const style = doc.createElement('style');
  style.id = 'vm-run7-observation-style';
  style.textContent = `
/* Visual & Mechanism Run 7: guide long-play variety through the aquarium itself. */
.machine[data-next-observation] .vm-worldport{transition:opacity .18s,box-shadow .18s,transform .18s,color .18s}
.machine[data-next-observation='0'] .vm-worldport[data-p='0'],.machine[data-next-observation='1'] .vm-worldport[data-p='1'],.machine[data-next-observation='2'] .vm-worldport[data-p='2']{opacity:.94;color:#efffff;transform:scale(1.08);box-shadow:inset 0 0 0 4px #08232baa,inset 0 0 11px #bfffff66,0 0 10px #68efff77}
.machine[data-observation-mode='shift-layer'] .vm-glass-ribs,.machine[data-observation-mode='shift-evidence'] .vm-glass-ribs{opacity:.9}.machine[data-observation-mode='balanced'] .vm-worldport{opacity:.7!important;transform:none!important}
.machine[data-observation-mode='balanced'] .tankFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #c8ffff77,0 0 16px #4ee9e938}
@media(max-width:390px){.machine[data-next-observation] .vm-worldport{filter:none!important}}
`;
  doc.head.appendChild(style);
  return true;
}

export function applyNocturneRun7VisualState(doc, snapshot) {
  const machine = doc?.querySelector('.machine');
  if (!machine || !snapshot) return false;
  installNocturneRun7VisualBridge(doc);
  machine.dataset.nextObservation = String(Math.max(0, Math.min(2, snapshot.nextIndex ?? 0)));
  machine.dataset.observationMode = snapshot.token || 'seek';
  machine.dataset.nextLayer = snapshot.nextLayer || '';
  return true;
}
