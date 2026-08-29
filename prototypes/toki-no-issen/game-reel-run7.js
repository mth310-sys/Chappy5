/* Game & Reel Run 7 — repeat-play stance memory for 刻ノ一閃.
 * Prototype-only presentation/game-feel layer.
 * Does NOT alter reel selection, probability, payout, reward or result logic.
 * Visual & Mechanism Run 7 adds a low-cost cabinet response for the next stance.
 */

const REEL_NAMES = ['左', '中', '右'];

function centerSymbol(doc, reelIndex) {
  const reel = doc.querySelectorAll('.reel')[reelIndex];
  const symbols = reel?.querySelectorAll('.sym');
  return symbols?.[1]?.textContent.trim() || '?';
}

function chainToken(symbols) {
  if (symbols[2] === '七') return 'finisher';
  if (symbols.filter(s => s === '刀').length >= 2) return 'blade-heavy';
  if (new Set(symbols).size === 3) return 'three-tone';
  if (new Set(symbols).size === 1) return 'locked';
  return 'layered';
}

function nextStance(firstHistory, chainHistory) {
  const recentFirst = firstHistory.slice(-6);
  const counts = [0, 1, 2].map(i => recentFirst.filter(v => v === i).length);
  const least = counts.indexOf(Math.min(...counts));
  const recentChains = chainHistory.slice(-4);
  const repeatedChain = recentChains.length >= 3 && new Set(recentChains.slice(-3)).size === 1;
  if (repeatedChain) return { token: 'break-chain', text: `型替え：${REEL_NAMES[least]}から崩す` };
  if (recentFirst.length >= 3 && new Set(recentFirst.slice(-3)).size === 1) return { token: 'change-first', text: `間合い替え：${REEL_NAMES[least]}第一停止` };
  if (recentFirst.length >= 3 && new Set(recentFirst.slice(-3)).size === 3) return { token: 'free', text: '三起点巡回：出目で次を決める' };
  return { token: 'read', text: '次局：初太刀の出目を読む' };
}

function installStanceVisuals(doc) {
  if (doc.getElementById('vm-run7-stance-style')) return;
  const style = doc.createElement('style');
  style.id = 'vm-run7-stance-style';
  style.textContent = `
/* Visual & Mechanism Run 7: no new HUD; the existing blade/cabinet carries next-stance intent. */
.machine[data-next-stance='read'] .bladeBridge:before{opacity:.72!important;box-shadow:0 0 5px #fff2c7,0 0 12px #8f5fc9!important}
.machine[data-next-stance='free'] .spine{opacity:.9!important}.machine[data-next-stance='free'] .screenFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #dbc982aa,0 0 13px #7d5bd455!important}
.machine[data-next-stance='change-first'] .spine.l{opacity:1!important}.machine[data-next-stance='change-first'] .spine.r{opacity:.58!important}.machine[data-next-stance='change-first'] .bladeBridge:before{box-shadow:0 0 7px #fff3cc,0 0 16px #d2a64f!important}
.machine[data-next-stance='break-chain'] .spine.l,.machine[data-next-stance='break-chain'] .spine.r{opacity:1!important}.machine[data-next-stance='break-chain'] .screenFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #efdd9dcc,0 0 18px #b84f815e!important}.machine[data-next-stance='break-chain'] .bladeBridge:before{box-shadow:0 0 8px #fff6d8,0 0 18px #c7668a!important}
@media(max-width:390px){.machine[data-next-stance] .bladeBridge:before{filter:none!important}}
`;
  doc.head.appendChild(style);
}

function install(frame) {
  const doc = frame?.contentDocument;
  if (!doc || doc.documentElement.dataset.gameReelRun7 === 'installed') return;
  doc.documentElement.dataset.gameReelRun7 = 'installed';
  installStanceVisuals(doc);
  const machine = doc.querySelector('.machine');
  const rail = () => doc.querySelector('.toki-tempo');
  let stopNo = 0;
  let symbols = [];
  const firstHistory = [];
  const chainHistory = [];

  doc.addEventListener('pointerdown', event => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.id === 'bet' || button.id === 'lever') {
      stopNo = 0;
      symbols = [];
      if (machine) delete machine.dataset.nextStance;
      return;
    }
    if (!button.classList.contains('stop') || button.disabled) return;
    const reelIndex = Number(button.dataset.i);
    stopNo = Math.min(3, stopNo + 1);
    const captured = stopNo;
    requestAnimationFrame(() => {
      symbols[captured - 1] = centerSymbol(doc, reelIndex);
      if (captured === 1) firstHistory.push(reelIndex);
      if (captured !== 3) return;
      const token = chainToken(symbols);
      chainHistory.push(token);
      const stance = nextStance(firstHistory, chainHistory);
      if (machine) {
        machine.dataset.lastChain = token;
        machine.dataset.nextStance = stance.token;
      }
      window.setTimeout(() => {
        const result = rail()?.querySelector('.result');
        if (result) {
          const base = result.textContent.replace(/\s·\s次局：.*$/, '');
          result.textContent = `${base} · 次局：${stance.text.replace(/^次局：/, '')}`;
        } else if (rail()) {
          rail().dataset.nextStance = stance.text;
          rail().title = stance.text;
        }
      }, 180);
    });
  }, { capture: true });
}

const frame = document.getElementById('game');
if (frame) {
  if (frame.contentDocument?.readyState === 'complete') queueMicrotask(() => install(frame));
  frame.addEventListener('load', () => setTimeout(() => install(frame), 0));
}
