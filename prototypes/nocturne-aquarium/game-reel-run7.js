/* Game & Reel Run 8 — long-play observation/evidence memory for ノクターン・アクアリウム.
 * Prototype-only. No payout/probability/reel-control/DEPTH thresholds are changed.
 * It converts first-stop history + resolved reel evidence into a quiet reason to
 * choose the next observation layer, so 30–50G play does not reduce the reels to decoration.
 * Visual integration remains optional and geometry-neutral for the submission shell.
 */
import { NOCTURNE_REEL_EVIDENCE, nocturneChainLabel } from './game-reel-run6.js';

const symbolSignature = symbols => (symbols || []).slice(0, 3).map(v => String(v || '?')).join('');

export function createNocturneObservationMemory() {
  const visits = [0, 0, 0];
  const evidenceByLayer = [new Set(), new Set(), new Set()];
  const recentChains = [];
  const recentLayers = [];

  function record(firstStopIndex, symbols = []) {
    const index = Math.max(0, Math.min(2, Number(firstStopIndex) || 0));
    visits[index] += 1;
    recentLayers.push(index);
    const layer = NOCTURNE_REEL_EVIDENCE.layers[index];
    const chain = nocturneChainLabel(layer.name, symbols);
    const signature = `${chain}:${symbolSignature(symbols)}`;
    evidenceByLayer[index].add(signature);
    recentChains.push(chain);
    if (recentLayers.length > 9) recentLayers.shift();
    if (recentChains.length > 9) recentChains.shift();
    return snapshot();
  }

  function snapshot() {
    const evidenceCounts = evidenceByLayer.map(set => set.size);
    const minEvidence = Math.min(...evidenceCounts);
    const evidenceCandidates = evidenceCounts.map((v, i) => v === minEvidence ? i : -1).filter(i => i >= 0);
    const minVisits = Math.min(...visits);
    const visitLeast = visits.findIndex(v => v === minVisits);
    const least = evidenceCandidates.includes(visitLeast) ? visitLeast : evidenceCandidates[0];
    const layer = NOCTURNE_REEL_EVIDENCE.layers[least];
    const last3 = recentLayers.slice(-3);
    const sameLayer3 = last3.length === 3 && new Set(last3).size === 1;
    const lastChains = recentChains.slice(-3);
    const sameEvidence3 = lastChains.length === 3 && new Set(lastChains).size === 1;
    const coverageSpread = Math.max(...evidenceCounts) - minEvidence;
    let reason = coverageSpread > 0 ? '未採取の証拠が多い層を観測' : '未観測差を埋める';
    let token = coverageSpread > 0 ? 'seek-evidence' : 'seek';
    if (sameEvidence3) { reason = '同じ証拠が続く。観測層を変える'; token = 'shift-evidence'; }
    else if (sameLayer3) { reason = '同じ層を見続けている。別深度へ'; token = 'shift-layer'; }
    else if (Math.max(...visits) - minVisits <= 1 && coverageSpread === 0) { reason = '観測と証拠は均衡。出目優先で選ぶ'; token = 'balanced'; }
    return Object.freeze({
      visits: Object.freeze([...visits]),
      evidenceCounts: Object.freeze([...evidenceCounts]),
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
/* Visual & Mechanism Run 7/8: guide long-play variety through the aquarium itself. */
.machine[data-next-observation] .vm-worldport{transition:opacity .18s,box-shadow .18s,transform .18s,color .18s}
.machine[data-next-observation='0'] .vm-worldport[data-p='0'],.machine[data-next-observation='1'] .vm-worldport[data-p='1'],.machine[data-next-observation='2'] .vm-worldport[data-p='2']{opacity:.94;color:#efffff;transform:scale(1.08);box-shadow:inset 0 0 0 4px #08232baa,inset 0 0 11px #bfffff66,0 0 10px #68efff77}
.machine[data-observation-mode='shift-layer'] .vm-glass-ribs,.machine[data-observation-mode='shift-evidence'] .vm-glass-ribs,.machine[data-observation-mode='seek-evidence'] .vm-glass-ribs{opacity:.9}.machine[data-observation-mode='balanced'] .vm-worldport{opacity:.7!important;transform:none!important}
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
  machine.dataset.evidenceCoverage = (snapshot.evidenceCounts || []).join('-');
  return true;
}
