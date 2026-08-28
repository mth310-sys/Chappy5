/* Game & Reel Run 6 — Nocturne reel-evidence semantics.
 * Prototype-only. No payout, probability, reel-control or DEPTH thresholds are changed here.
 * The goal is to keep the physical reels meaningful during ~50G normal-play observation.
 */

export const NOCTURNE_REEL_EVIDENCE = Object.freeze({
  layers: Object.freeze([
    { id: 'plaza', name: '広場', firstStop: 0 },
    { id: 'tower', name: '塔', firstStop: 1 },
    { id: 'archive', name: '記録庫', firstStop: 2 }
  ]),
  // Same stopped symbol can imply a different clue depending on the first-stop observation layer.
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
