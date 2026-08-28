/* Game & Reel Run 6 — presentation-only cadence memory for the integrated Toki prototype.
 * Prototype-only. This module does NOT alter reel selection, payout, reward math or result logic.
 * It reads the already-stopped center symbols and exposes compact rhythm evidence for repeated play.
 */

const REEL_NAMES = ['左', '中', '右'];

function centerSymbol(doc, reelIndex) {
  const reel = doc.querySelectorAll('.reel')[reelIndex];
  const symbols = reel && reel.querySelectorAll('.sym');
  return symbols && symbols[1] ? symbols[1].textContent.trim() : '?';
}

function meaning(symbol, stopNo) {
  if (symbol === '刀') return '強斬';
  if (symbol === '七') return stopNo === 3 ? '決め七' : '七印';
  if (symbol === '蒼') return stopNo === 2 ? '二太刀冴え' : '蒼印';
  if (symbol === '桜') return stopNo === 1 ? '初太刀冴え' : '桜印';
  if (symbol === '鐘') return '立直し';
  return '読取';
}

function chainLabel(stops) {
  if (!stops.length) return '構え';
  if (stops.length === 1) return `起点 ${stops[0].meaning}`;
  const symbols = stops.map(s => s.symbol);
  if (stops.length === 2) {
    if (symbols[0] === symbols[1]) return `重ね ${symbols[0]}`;
    if (symbols.includes('刀') && symbols.includes('七')) return '刃筋上昇';
    return '二太刀転調';
  }
  if (symbols[2] === '七') return '参ノ太刀・決め七';
  if (new Set(symbols).size === 3) return '三相連閃';
  if (new Set(symbols).size === 1) return `三重 ${symbols[0]}`;
  return '重ね連閃';
}

function firstStopPattern(history) {
  const last3 = history.slice(-3);
  if (last3.length < 3) return '';
  if (last3.every(v => v === last3[0])) return `同起点×3：${REEL_NAMES[last3[0]]}`;
  if (new Set(last3).size === 3) return '三起点巡回';
  return '間合い変化';
}

function annotateRail(rail, text) {
  if (!rail || !text) return;
  const result = rail.querySelector('.result');
  if (result) {
    const base = result.textContent.replace(/\s·\s連携：.*$/, '');
    result.textContent = `${base} · 連携：${text}`;
  } else {
    rail.dataset.chain = text;
    rail.title = `Prototype cadence: ${text}`;
  }
}

function install(frame) {
  const doc = frame.contentDocument;
  if (!doc || doc.documentElement.dataset.gameReelRun6 === 'installed') return;
  doc.documentElement.dataset.gameReelRun6 = 'installed';

  const machine = doc.getElementById('machine') || doc.querySelector('.machine');
  let stopNo = 0;
  let stops = [];
  const firstHistory = [];

  doc.addEventListener('pointerdown', event => {
    const button = event.target.closest('button');
    if (!button) return;

    if (button.id === 'bet' || button.id === 'lever') {
      stopNo = 0;
      stops = [];
      if (machine) {
        machine.dataset.gameCadence = 'ready';
        delete machine.dataset.firstPattern;
      }
      return;
    }

    if (!button.classList.contains('stop') || button.disabled) return;
    const reelIndex = Number(button.dataset.i);
    stopNo = Math.min(3, stopNo + 1);
    const capturedStopNo = stopNo;

    requestAnimationFrame(() => {
      const symbol = centerSymbol(doc, reelIndex);
      const item = { reelIndex, symbol, meaning: meaning(symbol, capturedStopNo) };
      stops[capturedStopNo - 1] = item;
      if (capturedStopNo === 1) firstHistory.push(reelIndex);

      const chain = chainLabel(stops.filter(Boolean));
      const pattern = capturedStopNo === 3 ? firstStopPattern(firstHistory) : '';
      const rail = doc.querySelector('.toki-tempo');

      // Base Run 5 paint runs from the same STOP event. Append after its short evidence update.
      setTimeout(() => annotateRail(rail, pattern ? `${chain} / ${pattern}` : chain), 78);

      if (machine) {
        machine.dataset.gameCadence = capturedStopNo === 1 ? 'opening' : capturedStopNo === 2 ? 'linking' : 'resolve-ready';
        machine.dataset.cutChain = chain;
        if (pattern) machine.dataset.firstPattern = pattern;
      }
    });
  });
}

const frame = document.getElementById('game');
if (frame) {
  if (frame.contentDocument && frame.contentDocument.readyState === 'complete') queueMicrotask(() => install(frame));
  frame.addEventListener('load', () => setTimeout(() => install(frame), 0));
}
