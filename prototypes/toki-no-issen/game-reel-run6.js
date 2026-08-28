/* Game & Reel Run 6 + Visual & Mechanism Run 6 — presentation-only cadence memory.
 * Prototype-only. This module does NOT alter reel selection, payout, reward math or result logic.
 * It reads already-stopped center symbols and exposes a lightweight visual cause for the sword cabinet.
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

function visualChain(chain) {
  if (/決め七/.test(chain)) return 'finisher';
  if (/三相/.test(chain)) return 'triple';
  if (/三重/.test(chain)) return 'locked';
  if (/刃筋上昇/.test(chain)) return 'rising';
  if (/重ね/.test(chain)) return 'layered';
  return 'flow';
}

function firstStopPattern(history) {
  const last3 = history.slice(-3);
  if (last3.length < 3) return '';
  if (last3.every(v => v === last3[0])) return `同起点×3：${REEL_NAMES[last3[0]]}`;
  if (new Set(last3).size === 3) return '三起点巡回';
  return '間合い変化';
}

function stanceToken(pattern) {
  if (/同起点/.test(pattern)) return 'habit';
  if (/三起点巡回/.test(pattern)) return 'circuit';
  if (pattern) return 'change';
  return '';
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

function installVisualBridge(doc) {
  if (doc.getElementById('vm-run6-toki')) return;
  const style = doc.createElement('style');
  style.id = 'vm-run6-toki';
  style.textContent = `
/* Visual & Mechanism Run 6 — low-compositor cadence response. */
.machine[data-game-cadence='opening'] .screenFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #d8bd73aa,0 0 10px #8e54be44!important}
.machine[data-game-cadence='linking'] .screenFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #e6ce8fbb,0 0 14px #9f56ce55!important}
.machine[data-game-cadence='resolve-ready'] .screenFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #f2d98dcc,0 0 18px #c889dd66!important}
.machine[data-game-cadence='opening'] .bladeBridge:before{opacity:.62!important}
.machine[data-game-cadence='linking'] .bladeBridge:before{opacity:.82!important;box-shadow:0 0 5px #fff2d0,0 0 13px #b57bd8!important}
.machine[data-game-cadence='resolve-ready'] .bladeBridge:before{opacity:1!important;box-shadow:0 0 6px #fff4cf,0 0 17px #d5ad5f!important}
.machine[data-vm-chain='finisher'] .screenFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #ffe39ddd,0 0 21px #b94e6a77!important}
.machine[data-vm-chain='triple'] .spine{opacity:1!important}.machine[data-vm-chain='triple'] .screenFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #e8d493cc,0 0 18px #8e54df66!important}
.machine[data-vm-chain='locked'] .bladeBridge:before{box-shadow:0 0 7px #fff6d8,0 0 19px #d7b762!important}
.machine[data-vm-chain='rising'] .spine.r{opacity:1!important}.machine[data-vm-chain='layered'] .spine.l{opacity:1!important}
.machine[data-vm-stance='habit'] .spine{opacity:.74!important}.machine[data-vm-stance='circuit'] .spine{opacity:.93!important}
@media(max-width:390px){.machine[data-game-cadence] .screenFrame{outline:0!important}}
`;
  doc.head.appendChild(style);
}

function install(frame) {
  const doc = frame.contentDocument;
  if (!doc || doc.documentElement.dataset.gameReelRun6 === 'installed') return;
  doc.documentElement.dataset.gameReelRun6 = 'installed';
  installVisualBridge(doc);

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
        delete machine.dataset.cutChain;
        delete machine.dataset.vmChain;
        delete machine.dataset.firstPattern;
        delete machine.dataset.vmStance;
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

      setTimeout(() => annotateRail(rail, pattern ? `${chain} / ${pattern}` : chain), 78);

      if (machine) {
        machine.dataset.gameCadence = capturedStopNo === 1 ? 'opening' : capturedStopNo === 2 ? 'linking' : 'resolve-ready';
        machine.dataset.cutChain = chain;
        machine.dataset.vmChain = visualChain(chain);
        if (pattern) {
          machine.dataset.firstPattern = pattern;
          machine.dataset.vmStance = stanceToken(pattern);
        }
      }
    });
  });
}

const frame = document.getElementById('game');
if (frame) {
  if (frame.contentDocument && frame.contentDocument.readyState === 'complete') queueMicrotask(() => install(frame));
  frame.addEventListener('load', () => setTimeout(() => install(frame), 0));
}
