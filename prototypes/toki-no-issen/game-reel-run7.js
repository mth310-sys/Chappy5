/* Game & Reel Run 8 — repeat-play stance memory for 刻ノ一閃.
 * Prototype-only presentation/game-feel layer.
 * Does NOT alter reel selection, probability, payout, reward or result logic.
 * Visual Run 8 keeps submission geometry locked and lets the existing blade/spines carry stance intent.
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

function leastUsedFirst(recentFirst) {
  const counts = [0, 1, 2].map(i => recentFirst.filter(v => v === i).length);
  const min = Math.min(...counts);
  const candidates = [0, 1, 2].filter(i => counts[i] === min);
  const last = recentFirst.at(-1);
  return candidates.find(i => i !== last) ?? candidates[0] ?? 0;
}

function nextStance(firstHistory, chainHistory) {
  const recentFirst = firstHistory.slice(-6);
  const least = leastUsedFirst(recentFirst);
  const recentChains = chainHistory.slice(-4);
  const repeatedChain = recentChains.length >= 3 && new Set(recentChains.slice(-3)).size === 1;
  const flowingChains = recentChains.length >= 4 && new Set(recentChains).size >= 3;
  if (repeatedChain) return { token: 'break-chain', text: `型替え：${REEL_NAMES[least]}から崩す` };
  if (recentFirst.length >= 3 && new Set(recentFirst.slice(-3)).size === 1) return { token: 'change-first', text: `間合い替え：${REEL_NAMES[least]}第一停止` };
  if (recentFirst.length >= 3 && new Set(recentFirst.slice(-3)).size === 3) return { token: 'free', text: '三起点巡回：出目で次を決める' };
  if (flowingChains) return { token: 'flowing', text: '太刀筋変化中：初太刀は出目優先' };
  return { token: 'read', text: '次局：初太刀の出目を読む' };
}

function installStanceVisuals(doc) {
  if (doc.getElementById('vm-run8-stance-style')) return;
  const style = doc.createElement('style');
  style.id = 'vm-run8-stance-style';
  style.textContent = `
/* Visual & Mechanism Run 8: submission-safe mechanical afterimage.
   No layout growth, continuous animation, blur stack, perspective or blend mode. */
.machine[data-next-stance] .bladeBridge:before,
.machine[data-next-stance] .spine,
.machine[data-next-stance] .screenFrame{transition:opacity .16s ease,box-shadow .18s ease,border-color .18s ease}
.machine[data-next-stance='read'] .bladeBridge:before{opacity:.7!important;box-shadow:0 0 4px #fff2c7,0 0 11px #805ab8!important}
.machine[data-next-stance='read'] .spine{opacity:.7!important}
.machine[data-next-stance='flowing'] .bladeBridge:before{opacity:.84!important;box-shadow:0 0 5px #fff2c9,0 0 13px #8e70d2!important}
.machine[data-next-stance='flowing'] .spine{opacity:.84!important}
.machine[data-next-stance='flowing'] .spine.l{box-shadow:0 0 9px #8a62ca88,inset -1px 0 #eedb9a55!important}
.machine[data-next-stance='flowing'] .spine.r{box-shadow:0 0 9px #8a62ca88,inset 1px 0 #eedb9a55!important}
.machine[data-next-stance='free'] .spine{opacity:.9!important}
.machine[data-next-stance='free'] .screenFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #dbc982aa,0 0 12px #7554c64d!important}
.machine[data-next-stance='change-first'] .spine.l{opacity:1!important;box-shadow:0 0 12px #d7b76266!important}
.machine[data-next-stance='change-first'] .spine.r{opacity:.5!important}
.machine[data-next-stance='change-first'] .bladeBridge:before{opacity:.9!important;box-shadow:0 0 6px #fff3cc,0 0 15px #d2a64f!important}
.machine[data-next-stance='break-chain'] .spine.l,.machine[data-next-stance='break-chain'] .spine.r{opacity:1!important;box-shadow:0 0 11px #b95d8a77!important}
.machine[data-next-stance='break-chain'] .screenFrame{box-shadow:0 8px 18px #000,inset 0 0 0 1px #efdd9dcc,0 0 16px #b84f8158!important}
.machine[data-next-stance='break-chain'] .bladeBridge:before{opacity:.96!important;box-shadow:0 0 7px #fff6d8,0 0 17px #c7668a!important}
@media(max-width:390px){.machine[data-next-stance] .bladeBridge:before{filter:none!important}.machine[data-next-stance] .screenFrame{outline:0!important}}
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
