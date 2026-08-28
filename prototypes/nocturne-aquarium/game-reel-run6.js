/* Game & Reel Run 6 + Visual & Mechanism Run 6 — Nocturne reel-evidence semantics.
 * Prototype-only. No payout, probability, reel-control or DEPTH thresholds are changed here.
 * The goal is to keep the physical reels meaningful during ~50G normal-play observation.
 */

export const NOCTURNE_REEL_EVIDENCE = Object.freeze({
  layers: Object.freeze([
    { id: 'plaza', name: '広場', firstStop: 0 },
    { id: 'tower', name: '塔', firstStop: 1 },
    { id: 'archive', name: '記録庫', firstStop: 2 }
  ]),
  clues: Object.freeze({
    '広場': Object.freeze({ '灯': '群灯反応', '鍵': '漂着鍵', '月': '月影反射', '七': '共鳴核', '泡': '気泡列' }),
    '塔': Object.freeze({ '灯': '塔灯信号', '鍵': '封印鍵', '月': '塔頂月相', '七': '共鳴核', '泡': '上昇気泡' }),
    '記録庫': Object.freeze({ '灯': '保存灯', '鍵': '記録鍵', '月': '時相記録', '七': '共鳴核', '泡': '封入気泡' })
  })
});

export function nocturneEvidenceFor(layerName, symbol) {
  const table = NOCTURNE_REEL_EVIDENCE.clues[layerName];
  return table?.[symbol] || `${symbol || '?'}痕跡`;
}

export function nocturneChainLabel(layerName, symbols) {
  const clean = symbols.filter(Boolean);
  if (!clean.length) return `${layerName || '未選択'}：観測待機`;
  const clues = clean.map(symbol => nocturneEvidenceFor(layerName, symbol));
  if (clean.length === 1) return `採取1 ${clues[0]}`;
  if (clean.length === 2) return clean[0] === clean[1] ? `反復 ${clues[0]}` : `照合 ${clues.join(' × ')}`;
  if (new Set(clean).size === 1) return `三重共鳴 ${clues[0]}`;
  if (clean.filter(symbol => symbol === '七').length >= 2) return '七核共鳴';
  if (clean.includes('鍵') && clean.includes('月')) return '鍵月連結';
  if (clean.filter(symbol => symbol === '灯').length >= 2) return `${layerName} 群灯連結`;
  return `三証拠 ${clues.join(' / ')}`;
}

export function nextNocturneObservation(layerVisits = [0, 0, 0]) {
  const visits = layerVisits.map(Number);
  const min = Math.min(...visits);
  const candidates = visits.map((value, index) => value === min ? index : -1).filter(index => index >= 0);
  const index = candidates[0] ?? 0;
  const layer = NOCTURNE_REEL_EVIDENCE.layers[index];
  return { index, label: `${layer.name}＝${['左', '中', '右'][index]}第一停止`, visits: visits[index] };
}

/* Visual bridge stays presentation-only. It converts existing reel evidence into
 * low-cost cabinet/world tokens so the public shell can connect physical reel ->
 * circular observation window -> aquarium depth without a detached HUD.
 */
export function nocturneVisualState(layerName, symbols = []) {
  const layer = NOCTURNE_REEL_EVIDENCE.layers.find(item => item.name === layerName);
  const clean = symbols.filter(Boolean);
  const chain = nocturneChainLabel(layerName, clean);
  let intensity = 'trace';
  if (/三重共鳴|七核共鳴/.test(chain)) intensity = 'core';
  else if (/鍵月連結|群灯連結/.test(chain)) intensity = 'linked';
  else if (clean.length >= 3) intensity = 'resolved';
  else if (clean.length >= 2) intensity = 'compare';
  else if (clean.length === 1) intensity = 'sample';
  return Object.freeze({
    layerIndex: layer?.firstStop ?? -1,
    layerId: layer?.id || 'unknown',
    chain,
    intensity,
    evidence: clean.map(symbol => nocturneEvidenceFor(layerName, symbol))
  });
}

export function installNocturneVisualBridge(frame) {
  const doc = frame?.contentDocument;
  if (!doc || doc.documentElement.dataset.nocturneVmRun6 === 'installed') return false;
  doc.documentElement.dataset.nocturneVmRun6 = 'installed';
  const machine = doc.querySelector('.machine');
  if (!machine) return false;

  const style = doc.createElement('style');
  style.id = 'vm-run6-nocturne';
  style.textContent = `
/* Visual & Mechanism Run 6 — evidence travels through existing glass/world geometry. */
.machine[data-vm-evidence='sample'] .tankFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #b9f5f577,0 0 16px #4addec44!important}
.machine[data-vm-evidence='compare'] .tankFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #c9ffff88,0 0 20px #54e6e755!important}
.machine[data-vm-evidence='resolved'] .tankFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #d8ffff99,0 0 24px #6be8e866!important}
.machine[data-vm-evidence='linked'] .depthRing{box-shadow:0 0 18px #77f5e988!important}.machine[data-vm-evidence='linked'] .vm-worldport.active{box-shadow:inset 0 0 0 4px #09242daa,inset 0 0 11px #dfffff77,0 0 14px #8cffe2aa!important}
.machine[data-vm-evidence='core'] .depthRing{box-shadow:0 0 23px #a5edff99!important}.machine[data-vm-evidence='core'] .vm-worldport.active{box-shadow:inset 0 0 0 4px #09242daa,inset 0 0 12px #efffff99,0 0 17px #b0e8ffaa!important}
.machine[data-vm-layer='plaza'] .vm-worldport:nth-child(1),.machine[data-vm-layer='tower'] .vm-worldport:nth-child(2),.machine[data-vm-layer='archive'] .vm-worldport:nth-child(3){opacity:1!important;color:#efffff!important}
@media(max-width:390px){.machine[data-vm-evidence] .tankFrame{outline:0!important}}
`;
  doc.head.appendChild(style);
  return true;
}

export function applyNocturneVisualEvidence(frame, layerName, symbols = []) {
  const doc = frame?.contentDocument;
  const machine = doc?.querySelector('.machine');
  if (!machine) return null;
  installNocturneVisualBridge(frame);
  const state = nocturneVisualState(layerName, symbols);
  machine.dataset.vmLayer = state.layerId;
  machine.dataset.vmEvidence = state.intensity;
  machine.dataset.vmEvidenceChain = state.chain;
  return state;
}
