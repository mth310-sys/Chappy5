import { bindPlacementCursorControls, createPlacementCursor } from './cursor.js';
import { createCustomer, planCustomerTo, advanceCustomer, CUSTOMER_STATES } from './customer.js';
import { layout, validateLayout } from './layout.js';
import { findPath } from './navigation.js';
import { renderCustomerActor, renderLayout, updateCustomerActor } from './renderer.js';

const fmt = new Intl.NumberFormat('ja-JP');
const GAME_TICK_MS = 220;
const OPEN_MINUTE = 10 * 60;
const CLOSE_MINUTE = 21 * 60;

const els = {
  scene: document.getElementById('scene'), frame: document.getElementById('scene-frame'), vp: document.getElementById('vp'),
  time: document.getElementById('timeLabel'), visitors: document.getElementById('visitorLabel'), cash: document.getElementById('cashLabel'),
  sales: document.getElementById('salesLabel'), occ: document.getElementById('occupancyLabel'), status: document.getElementById('gameStatus'),
  event: document.getElementById('eventText'), panel: document.getElementById('gamePanel'), panelTitle: document.getElementById('panelTitle'), panelBody: document.getElementById('panelBody'),
};
if (!els.scene || !els.frame || !els.vp) throw new Error('Slot Pachiro canonical roots are missing');

let activeLayout = layout;
let report = validateLayout(activeLayout);
let gameMinute = OPEN_MINUTE;
let cash = 3_000_000;
let sales = 0;
let totalVisitors = 0;
let speed = 1;
let zoom = 1;
let customerSeq = 0;
let spawnClock = 0;
let buildCursor = null;
let buildPanel = null;
const customers = new Map();

function formatTime(minute) {
  const h = Math.floor(minute / 60) % 24, m = minute % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
function setEvent(text) { els.event.textContent = text; }
function updateHud() {
  els.time.textContent = formatTime(gameMinute);
  els.visitors.textContent = String(totalVisitors);
  els.cash.textContent = `${fmt.format(cash)}G`;
  els.sales.textContent = `+${fmt.format(sales)}G`;
  const seated = [...customers.values()].filter((c) => c.model.state === CUSTOMER_STATES.SEATED && c.phase === 'play').length;
  els.occ.textContent = `${Math.min(100, Math.round(seated / 36 * 100))}%`;
  els.status.textContent = speed === 0 ? '一時停止' : gameMinute >= CLOSE_MINUTE ? '閉店' : '営業中';
}

function applyZoom(nextZoom, anchorX = els.vp.clientWidth / 2, anchorY = els.vp.clientHeight / 2) {
  nextZoom = Math.max(.72, Math.min(1.55, nextZoom));
  const old = zoom;
  const worldX = (els.vp.scrollLeft + anchorX) / old;
  const worldY = (els.vp.scrollTop + anchorY) / old;
  zoom = nextZoom;
  const w = Number(els.scene.dataset.baseWidth || 730), h = Number(els.scene.dataset.baseHeight || 720);
  els.scene.style.transform = `scale(${zoom})`;
  els.frame.style.width = `${Math.ceil(w * zoom)}px`;
  els.frame.style.height = `${Math.ceil(h * zoom)}px`;
  els.vp.scrollLeft = worldX * zoom - anchorX;
  els.vp.scrollTop = worldY * zoom - anchorY;
}
function centerCamera() {
  requestAnimationFrame(() => {
    applyZoom(1.08);
    els.vp.scrollLeft = Math.max(0, (els.frame.scrollWidth - els.vp.clientWidth) / 2);
    els.vp.scrollTop = Math.max(0, els.frame.scrollHeight * .17);
  });
}

function installCameraControls() {
  let drag = null;
  els.vp.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, left: els.vp.scrollLeft, top: els.vp.scrollTop };
    els.vp.setPointerCapture(e.pointerId); els.vp.classList.add('dragging');
    document.getElementById('cameraHint')?.classList.add('hide');
  });
  els.vp.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    els.vp.scrollLeft = drag.left - (e.clientX - drag.x);
    els.vp.scrollTop = drag.top - (e.clientY - drag.y);
  });
  const end = (e) => { if (drag && e.pointerId === drag.id) { drag = null; els.vp.classList.remove('dragging'); } };
  els.vp.addEventListener('pointerup', end); els.vp.addEventListener('pointercancel', end);
  els.vp.addEventListener('wheel', (e) => { if (!e.ctrlKey) return; e.preventDefault(); applyZoom(zoom * (e.deltaY > 0 ? .92 : 1.08), e.clientX, e.clientY); }, { passive: false });

  let pinch = null;
  els.vp.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      const [a,b] = e.touches; pinch = { d: Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY), z: zoom };
    }
  }, { passive: true });
  els.vp.addEventListener('touchmove', (e) => {
    if (e.touches.length !== 2 || !pinch) return;
    e.preventDefault();
    const [a,b] = e.touches, d = Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
    applyZoom(pinch.z * d / pinch.d, (a.clientX+b.clientX)/2, (a.clientY+b.clientY)/2);
  }, { passive: false });
  els.vp.addEventListener('touchend', (e) => { if (e.touches.length < 2) pinch = null; }, { passive: true });
}

function machinePorts() { return report.ports.filter((p) => p.role === 'machine-seat' && report.reachable.has(`${p.x},${p.y}`)); }
function portal() { return report.ports.find((p) => p.portal); }
function spawnCustomer() {
  if (gameMinute >= CLOSE_MINUTE || customers.size >= 14) return;
  const entry = portal(), ports = machinePorts();
  if (!entry || !ports.length) return;
  const target = ports[Math.floor(Math.random() * ports.length)];
  let model = createCustomer(`guest-${++customerSeq}`, entry);
  try { model = planCustomerTo(model, target, report.map); } catch { return; }
  const actor = renderCustomerActor(els.scene, model);
  customers.set(model.id, { model, actor, phase: 'toMachine', dwell: 8 + Math.floor(Math.random() * 14), spendClock: 0, target });
  totalVisitors++;
  setEvent(`来店 ${totalVisitors}人目 → ${target.facilityId}`);
}
function beginExit(record) {
  const exit = portal(); if (!exit) return;
  const route = findPath(record.model, exit, report.map);
  if (!route) { record.phase = 'leave'; return; }
  record.model = Object.freeze({ ...record.model, state: CUSTOMER_STATES.WALKING, route: Object.freeze(route.map((p)=>Object.freeze({...p}))), routeIndex: 0, target: Object.freeze({x:exit.x,y:exit.y}) });
  record.phase = 'toExit';
}
function advanceCustomers() {
  for (const [id, record] of customers) {
    if (record.phase === 'toMachine' || record.phase === 'toExit') {
      record.model = advanceCustomer(record.model);
      updateCustomerActor(record.actor, record.model);
      if (record.model.state === CUSTOMER_STATES.SEATED) {
        if (record.phase === 'toMachine') { record.phase = 'play'; setEvent(`${id} 遊技開始`); }
        else record.phase = 'leave';
      }
    } else if (record.phase === 'play') {
      record.dwell--;
      record.spendClock++;
      if (record.spendClock % 3 === 0) {
        const gain = 70 + Math.floor(Math.random() * 181);
        sales += gain; cash += gain;
        setEvent(`${id} +${gain}G`);
      }
      if (record.dwell <= 0 || gameMinute >= CLOSE_MINUTE) beginExit(record);
    }
    if (record.phase === 'leave') {
      record.actor.remove(); customers.delete(id); setEvent(`${id} 退店`);
    }
  }
}

function tick() {
  if (speed === 0) return;
  const minutes = speed === 2 ? 2 : 1;
  for (let i=0;i<minutes;i++) {
    if (gameMinute < CLOSE_MINUTE) gameMinute++;
    spawnClock++;
    if (spawnClock >= 5 + Math.floor(Math.random()*5)) { spawnClock = 0; spawnCustomer(); }
    advanceCustomers();
  }
  updateHud();
  if (gameMinute >= CLOSE_MINUTE && customers.size === 0) setEvent(`営業終了 / 本日売上 ${fmt.format(sales)}G`);
}

function openPanel(title, html) {
  els.panelTitle.textContent = title; els.panelBody.innerHTML = html; els.panel.hidden = false;
}
function closePanel() { els.panel.hidden = true; }
document.getElementById('panelClose')?.addEventListener('click', closePanel);

function makeBuildPanel(cursor) {
  const panel = document.createElement('div'); panel.className = 'placementPanel';
  panel.innerHTML = '<b>建設モード</b><span data-cursor-status></span><div><button data-move="0,-1">↑</button></div><div><button data-move="-1,0">←</button><button data-rotate>回転</button><button data-move="1,0">→</button></div><div><button data-move="0,1">↓</button></div><div><button data-commit>確定</button><button data-cancel>終了</button></div>';
  panel.querySelectorAll('[data-move]').forEach((b)=>b.addEventListener('click',()=>{const [dx,dy]=b.dataset.move.split(',').map(Number);cursor.move(dx,dy);}));
  panel.querySelector('[data-rotate]').addEventListener('click',()=>cursor.rotate(1));
  panel.querySelector('[data-commit]').addEventListener('click',()=>{
    try { activeLayout = cursor.commit(); report = validateLayout(activeLayout); renderLayout(els.scene, activeLayout); rerenderCustomers(); applyZoom(zoom); panel.querySelector('[data-cursor-status]').textContent='配置確定'; setEvent('島設備の配置を変更'); }
    catch(err){ panel.dataset.state='error'; panel.querySelector('[data-cursor-status]').textContent=`NG ${err.message}`; }
  });
  panel.querySelector('[data-cancel]').addEventListener('click',()=>exitBuildMode());
  document.body.appendChild(panel); return panel;
}
function rerenderCustomers() {
  for (const record of customers.values()) { record.actor.remove(); record.actor = renderCustomerActor(els.scene, record.model); }
}
function enterBuildMode() {
  if (buildPanel) return;
  const island = activeLayout.islands[0]; if (!island) return;
  speed = 0; syncSpeedButtons();
  buildCursor = createPlacementCursor(activeLayout, island, ({item,result})=>{
    if (!buildPanel) return; buildPanel.dataset.state = result.ok ? 'ok':'error'; buildPanel.querySelector('[data-cursor-status]').textContent=`${item.x},${item.y} ${item.orientation} / ${result.ok?'OK':'NG'}`;
  });
  buildPanel = makeBuildPanel(buildCursor); bindPlacementCursorControls(buildCursor); buildCursor.move(0,0); setEvent('建設モード / 島設備を移動');
}
function exitBuildMode() { buildCursor?.cancel(); buildCursor=null; buildPanel?.remove(); buildPanel=null; speed=1; syncSpeedButtons(); setEvent('営業再開'); }

function syncSpeedButtons(){ document.querySelectorAll('[data-speed]').forEach((b)=>b.classList.toggle('active', Number(b.dataset.speed)===speed)); updateHud(); }
document.querySelectorAll('[data-speed]').forEach((b)=>b.addEventListener('click',()=>{ speed=Number(b.dataset.speed); syncSpeedButtons(); setEvent(speed===0?'PAUSE':speed===2?'FAST':'NORMAL'); }));
document.querySelectorAll('[data-action]').forEach((b)=>b.addEventListener('click',()=>{
  const action=b.dataset.action;
  if(action==='build'||action==='replace'){ enterBuildMode(); return; }
  if(action==='info') openPanel('ホール情報',`<p>来店 ${totalVisitors}人 / 店内 ${customers.size}人</p><p>本日売上 ${fmt.format(sales)}G / 所持金 ${fmt.format(cash)}G</p><p>島設備 ${activeLayout.islands.length}列 / 到達可能セル ${report.reachableCells}</p>`);
  else if(action==='manage') openPanel('経営',`<p>本日の営業は自動進行中です。</p><ul><li>売上 ${fmt.format(sales)}G</li><li>来店 ${totalVisitors}人</li><li>現在稼働 ${els.occ.textContent}</li></ul>`);
  else if(action==='ad') openPanel('広告',`<p>広告費 10,000G で人気を一時的に上げます。</p><button id="runAd">広告を出す</button>`);
  else if(action==='research') openPanel('研究',`<p>設備研究は次段階で機種開放へ接続予定。現在は本編営業を優先実装しています。</p>`);
  else if(action==='customer') openPanel('客層',`<p>現在の来店 ${totalVisitors}人。客は入口から台まで実経路で移動し、遊技後に退店します。</p>`);
  else openPanel('メニュー',`<p>画面ドラッグで店内移動、ピンチでズーム。▶▶で高速営業。</p>`);
  document.getElementById('runAd')?.addEventListener('click',()=>{if(cash>=10000){cash-=10000; totalVisitors+=2; updateHud(); setEvent('広告実施 -10,000G'); closePanel();}});
}));

renderLayout(els.scene, activeLayout);
installCameraControls();
centerCamera();
updateHud();
setInterval(tick, GAME_TICK_MS);
setTimeout(()=>spawnCustomer(), 600);
