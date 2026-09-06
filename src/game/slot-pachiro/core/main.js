import { bindPlacementCursorControls, createPlacementCursor } from './cursor.js';
import { createCustomer, planCustomerTo, advanceCustomer, CUSTOMER_STATES } from './customer.js';
import { layout, validateLayout } from './layout.js';
import { findPath } from './navigation.js';
import { renderCustomerActor, renderLayout, updateCustomerActor } from './renderer.js';

const fmt = new Intl.NumberFormat('ja-JP');
const GAME_TICK_MS = 220;
const OPEN_MINUTE = 10 * 60;
const CLOSE_MINUTE = 21 * 60;
const SAVE_KEY = 'slot-pachiro-main-v1';
const CUSTOMER_TYPES = Object.freeze({
  regular: Object.freeze({ label: '常連', spend: 1, dwell: 1, weight: 58 }),
  quick: Object.freeze({ label: '短時間客', spend: .72, dwell: .68, weight: 27 }),
  high: Object.freeze({ label: '高単価客', spend: 1.55, dwell: 1.35, weight: 15 }),
});

const els = {
  scene: document.getElementById('scene'), frame: document.getElementById('scene-frame'), vp: document.getElementById('vp'),
  date: document.getElementById('dateLabel'), time: document.getElementById('timeLabel'), popularity: document.getElementById('popularityLabel'),
  visitors: document.getElementById('visitorLabel'), cash: document.getElementById('cashLabel'), sales: document.getElementById('salesLabel'),
  occ: document.getElementById('occupancyLabel'), status: document.getElementById('gameStatus'), event: document.getElementById('eventText'),
  panel: document.getElementById('gamePanel'), panelTitle: document.getElementById('panelTitle'), panelBody: document.getElementById('panelBody'),
};
if (!els.scene || !els.frame || !els.vp) throw new Error('Slot Pachiro canonical roots are missing');

function loadMeta() {
  try {
    const raw = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (!raw || typeof raw !== 'object') throw new Error('empty');
    return {
      day: Math.max(1, Number(raw.day) || 1), cash: Math.max(0, Number(raw.cash) || 3_000_000),
      popularity: Math.max(1, Math.min(99, Number(raw.popularity) || 13)), research: Math.max(0, Number(raw.research) || 0),
      lifetimeSales: Math.max(0, Number(raw.lifetimeSales) || 0), lifetimeVisitors: Math.max(0, Number(raw.lifetimeVisitors) || 0),
    };
  } catch { return { day: 1, cash: 3_000_000, popularity: 13, research: 0, lifetimeSales: 0, lifetimeVisitors: 0 }; }
}
const meta = loadMeta();
let activeLayout = layout;
let report = validateLayout(activeLayout);
let day = meta.day;
let gameMinute = OPEN_MINUTE;
let cash = meta.cash;
let popularity = meta.popularity;
let researchLevel = meta.research;
let lifetimeSales = meta.lifetimeSales;
let lifetimeVisitors = meta.lifetimeVisitors;
let sales = 0;
let dayVisitors = 0;
let speed = 1;
let zoom = 1;
let customerSeq = 0;
let spawnClock = 0;
let buildCursor = null;
let buildPanel = null;
let daySettled = false;
let adBoost = 0;
let serviceBoost = 0;
const customers = new Map();
const islandStats = new Map(activeLayout.islands.map((i) => [i.id, { plays: 0, revenue: 0 }]));
const segmentStats = { regular: 0, quick: 0, high: 0 };

function persist() {
  localStorage.setItem(SAVE_KEY, JSON.stringify({ day, cash, popularity, research: researchLevel, lifetimeSales, lifetimeVisitors }));
}
function calendarLabel() {
  const year = Math.floor((day - 1) / 336) + 1;
  const yearDay = (day - 1) % 336;
  const month = Math.floor(yearDay / 28) + 1;
  const week = Math.floor((yearDay % 28) / 7) + 1;
  return `${year}年目 ${month}月 ${week}週`;
}
function formatTime(minute) {
  const h = Math.floor(minute / 60) % 24, m = minute % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
function setEvent(text) { els.event.textContent = text; }
function machineMultiplier() { return 1 + researchLevel * .08 + serviceBoost * .04; }
function updateHud() {
  els.date.textContent = calendarLabel();
  els.time.textContent = formatTime(gameMinute);
  els.popularity.textContent = String(popularity + adBoost);
  els.visitors.textContent = String(dayVisitors);
  els.cash.textContent = `${fmt.format(Math.round(cash))}G`;
  els.sales.textContent = `+${fmt.format(Math.round(sales))}G`;
  const seated = [...customers.values()].filter((c) => c.model.state === CUSTOMER_STATES.SEATED && c.phase === 'play').length;
  els.occ.textContent = `${Math.min(100, Math.round(seated / 36 * 100))}%`;
  els.status.textContent = daySettled ? '営業終了' : speed === 0 ? '一時停止' : gameMinute >= CLOSE_MINUTE ? '閉店作業' : '営業中';
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
    els.vp.scrollLeft = drag.left - (e.clientX - drag.x); els.vp.scrollTop = drag.top - (e.clientY - drag.y);
  });
  const end = (e) => { if (drag && e.pointerId === drag.id) { drag = null; els.vp.classList.remove('dragging'); } };
  els.vp.addEventListener('pointerup', end); els.vp.addEventListener('pointercancel', end);
  els.vp.addEventListener('wheel', (e) => { if (!e.ctrlKey) return; e.preventDefault(); applyZoom(zoom * (e.deltaY > 0 ? .92 : 1.08), e.clientX, e.clientY); }, { passive: false });
  let pinch = null;
  els.vp.addEventListener('touchstart', (e) => { if (e.touches.length === 2) { const [a,b] = e.touches; pinch = { d: Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY), z: zoom }; } }, { passive: true });
  els.vp.addEventListener('touchmove', (e) => {
    if (e.touches.length !== 2 || !pinch) return;
    e.preventDefault(); const [a,b] = e.touches, d = Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
    applyZoom(pinch.z * d / pinch.d, (a.clientX+b.clientX)/2, (a.clientY+b.clientY)/2);
  }, { passive: false });
  els.vp.addEventListener('touchend', (e) => { if (e.touches.length < 2) pinch = null; }, { passive: true });
}

function machinePorts() { return report.ports.filter((p) => p.role === 'machine-seat' && report.reachable.has(`${p.x},${p.y}`)); }
function portal() { return report.ports.find((p) => p.portal); }
function chooseCustomerType() {
  const highBonus = Math.max(0, popularity + adBoost - 15) * .5;
  const weights = { regular: 58, quick: 27, high: 15 + highBonus };
  let roll = Math.random() * Object.values(weights).reduce((a,b)=>a+b,0);
  for (const key of Object.keys(weights)) { roll -= weights[key]; if (roll <= 0) return key; }
  return 'regular';
}
function spawnThreshold() { return Math.max(3, 9 - Math.floor((popularity + adBoost) / 8)); }
function spawnCustomer() {
  if (gameMinute >= CLOSE_MINUTE || daySettled || customers.size >= Math.min(22, 10 + Math.floor((popularity + adBoost) / 5))) return;
  const entry = portal(), ports = machinePorts();
  if (!entry || !ports.length) return;
  const target = ports[Math.floor(Math.random() * ports.length)];
  const type = chooseCustomerType(), profile = CUSTOMER_TYPES[type];
  let model = createCustomer(`guest-${++customerSeq}`, entry);
  try { model = planCustomerTo(model, target, report.map); } catch { return; }
  const actor = renderCustomerActor(els.scene, model); actor.dataset.customerType = type;
  const baseDwell = 10 + Math.floor(Math.random() * 13);
  customers.set(model.id, { model, actor, phase: 'toMachine', dwell: Math.max(5, Math.round(baseDwell * profile.dwell)), spendClock: 0, target, type });
  dayVisitors++; lifetimeVisitors++; segmentStats[type]++;
  setEvent(`${profile.label} 来店 → ${target.facilityId}`);
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
      record.model = advanceCustomer(record.model); updateCustomerActor(record.actor, record.model);
      if (record.model.state === CUSTOMER_STATES.SEATED) {
        if (record.phase === 'toMachine') { record.phase = 'play'; const stat=islandStats.get(record.target.facilityId); if(stat) stat.plays++; setEvent(`${CUSTOMER_TYPES[record.type].label} 遊技開始`); }
        else record.phase = 'leave';
      }
    } else if (record.phase === 'play') {
      record.dwell--; record.spendClock++;
      if (record.spendClock % 3 === 0) {
        const base = 70 + Math.floor(Math.random() * 181);
        const gain = Math.max(30, Math.round(base * CUSTOMER_TYPES[record.type].spend * machineMultiplier()));
        sales += gain; cash += gain; lifetimeSales += gain;
        const stat = islandStats.get(record.target.facilityId); if (stat) stat.revenue += gain;
        setEvent(`${CUSTOMER_TYPES[record.type].label} +${fmt.format(gain)}G`);
      }
      if (record.dwell <= 0 || gameMinute >= CLOSE_MINUTE) beginExit(record);
    }
    if (record.phase === 'leave') { record.actor.remove(); customers.delete(id); }
  }
}

function dailyExpenses() { return 9_000 + activeLayout.islands.length * 1_500 + 4_000 + serviceBoost * 2_000; }
function settleDay() {
  if (daySettled) return;
  daySettled = true; speed = 0; syncSpeedButtons();
  const expenses = dailyExpenses(); cash = Math.max(0, cash - expenses);
  const profit = sales - expenses;
  const targetVisitors = 45 + popularity * 2;
  if (dayVisitors >= targetVisitors) popularity = Math.min(99, popularity + 1);
  else if (dayVisitors < targetVisitors * .45) popularity = Math.max(1, popularity - 1);
  adBoost = Math.max(0, adBoost - 2);
  persist(); updateHud();
  const rows = [...islandStats.entries()].map(([id,s])=>`<li>${id}: ${s.plays}遊技 / ${fmt.format(s.revenue)}G</li>`).join('');
  openPanel('本日の営業結果', `<p class="resultBig">売上 ${fmt.format(sales)}G</p><p>経費 -${fmt.format(expenses)}G<br>営業利益 <b>${profit>=0?'+':''}${fmt.format(profit)}G</b><br>来店 ${dayVisitors}人</p><ul>${rows}</ul><button class="panelAction" id="nextDay">次の日へ</button>`);
  setEvent(`営業終了 / 利益 ${profit>=0?'+':''}${fmt.format(profit)}G`);
  document.getElementById('nextDay')?.addEventListener('click', startNextDay);
}
function startNextDay() {
  for (const r of customers.values()) r.actor.remove(); customers.clear();
  day++; gameMinute = OPEN_MINUTE; sales = 0; dayVisitors = 0; spawnClock = 0; daySettled = false; speed = 1;
  segmentStats.regular = segmentStats.quick = segmentStats.high = 0;
  for (const stat of islandStats.values()) { stat.plays = 0; stat.revenue = 0; }
  closePanel(); persist(); updateHud(); syncSpeedButtons(); setEvent(`${calendarLabel()} 営業開始`); setTimeout(spawnCustomer, 500);
}
function tick() {
  if (speed === 0 || daySettled) return;
  const minutes = speed === 2 ? 2 : 1;
  for (let i=0;i<minutes;i++) {
    if (gameMinute < CLOSE_MINUTE) gameMinute++;
    spawnClock++;
    if (gameMinute < CLOSE_MINUTE && spawnClock >= spawnThreshold() + Math.floor(Math.random()*3)) { spawnClock = 0; spawnCustomer(); }
    advanceCustomers();
  }
  updateHud();
  if (gameMinute >= CLOSE_MINUTE && customers.size === 0) settleDay();
}

function openPanel(title, html) { els.panelTitle.textContent = title; els.panelBody.innerHTML = html; els.panel.hidden = false; }
function closePanel() { if (!daySettled) els.panel.hidden = true; }
document.getElementById('panelClose')?.addEventListener('click', closePanel);
function infoHtml() {
  const rows = [...islandStats.entries()].map(([id,s])=>`<li>${id}: ${s.plays}回 / ${fmt.format(s.revenue)}G</li>`).join('');
  return `<p>来店 ${dayVisitors}人 / 店内 ${customers.size}人<br>本日売上 ${fmt.format(sales)}G / 所持金 ${fmt.format(cash)}G</p><p>研究Lv.${researchLevel} / 人気 ${popularity}${adBoost?` (+${adBoost})`:''}</p><ul>${rows}</ul>`;
}
function bindPanelActions() {
  document.getElementById('adFlyer')?.addEventListener('click',()=>buyAd(10_000,3,'チラシ広告'));
  document.getElementById('adWeb')?.addEventListener('click',()=>buyAd(35_000,7,'WEB広告'));
  document.getElementById('researchMachine')?.addEventListener('click',()=>runResearch());
  document.getElementById('serviceUp')?.addEventListener('click',()=>upgradeService());
  document.getElementById('saveGame')?.addEventListener('click',()=>{persist(); setEvent('セーブしました'); closePanel();});
  document.getElementById('resetSave')?.addEventListener('click',()=>{if(confirm('保存データを初期化しますか？')){localStorage.removeItem(SAVE_KEY);location.reload();}});
}
function buyAd(cost, boost, name) {
  if (cash < cost) { setEvent('資金不足'); return; }
  cash -= cost; adBoost = Math.min(20, adBoost + boost); updateHud(); persist(); setEvent(`${name} -${fmt.format(cost)}G / 人気+${boost}`); closePanel();
}
function runResearch() {
  const cost = 25_000 + researchLevel * 20_000;
  if (cash < cost) { setEvent('研究資金不足'); return; }
  cash -= cost; researchLevel++; popularity = Math.min(99, popularity + 1); updateHud(); persist(); setEvent(`新台研究 Lv.${researchLevel} / 売上倍率UP`); closePanel();
}
function upgradeService() {
  const cost = 20_000 + serviceBoost * 15_000;
  if (cash < cost || serviceBoost >= 5) { setEvent(serviceBoost>=5?'サービス強化MAX':'資金不足'); return; }
  cash -= cost; serviceBoost++; popularity = Math.min(99, popularity + 1); updateHud(); setEvent(`接客強化 Lv.${serviceBoost}`); closePanel();
}

function makeBuildPanel(cursor) {
  const panel = document.createElement('div'); panel.className = 'placementPanel';
  panel.innerHTML = '<b>建設モード</b><span data-cursor-status></span><div><button data-move="0,-1">↑</button></div><div><button data-move="-1,0">←</button><button data-rotate>回転</button><button data-move="1,0">→</button></div><div><button data-move="0,1">↓</button></div><div><button data-commit>確定</button><button data-cancel>終了</button></div>';
  panel.querySelectorAll('[data-move]').forEach((b)=>b.addEventListener('click',()=>{const [dx,dy]=b.dataset.move.split(',').map(Number);cursor.move(dx,dy);}));
  panel.querySelector('[data-rotate]').addEventListener('click',()=>cursor.rotate(1));
  panel.querySelector('[data-commit]').addEventListener('click',()=>{
    try { activeLayout = cursor.commit(); report = validateLayout(activeLayout); renderLayout(els.scene, activeLayout); rerenderCustomers(); applyZoom(zoom); panel.querySelector('[data-cursor-status]').textContent='配置確定'; setEvent('島設備の配置を変更'); }
    catch(err){ panel.dataset.state='error'; panel.querySelector('[data-cursor-status]').textContent=`NG ${err.message}`; }
  });
  panel.querySelector('[data-cancel]').addEventListener('click',exitBuildMode); document.body.appendChild(panel); return panel;
}
function rerenderCustomers() { for (const record of customers.values()) { record.actor.remove(); record.actor = renderCustomerActor(els.scene, record.model); record.actor.dataset.customerType=record.type; } }
function enterBuildMode() {
  if (buildPanel || daySettled) return;
  const island = activeLayout.islands[0]; if (!island) return;
  speed = 0; syncSpeedButtons();
  buildCursor = createPlacementCursor(activeLayout, island, ({item,result})=>{ if (!buildPanel) return; buildPanel.dataset.state=result.ok?'ok':'error'; buildPanel.querySelector('[data-cursor-status]').textContent=`${item.x},${item.y} ${item.orientation} / ${result.ok?'OK':'NG'}`; });
  buildPanel = makeBuildPanel(buildCursor); bindPlacementCursorControls(buildCursor); buildCursor.move(0,0); setEvent('建設モード / 島設備を移動');
}
function exitBuildMode() { buildCursor?.cancel(); buildCursor=null; buildPanel?.remove(); buildPanel=null; speed=1; syncSpeedButtons(); setEvent('営業再開'); }
function syncSpeedButtons(){ document.querySelectorAll('[data-speed]').forEach((b)=>b.classList.toggle('active', Number(b.dataset.speed)===speed)); updateHud(); }

document.querySelectorAll('[data-speed]').forEach((b)=>b.addEventListener('click',()=>{ if(daySettled)return; speed=Number(b.dataset.speed); syncSpeedButtons(); setEvent(speed===0?'PAUSE':speed===2?'FAST':'NORMAL'); }));
document.querySelectorAll('[data-action]').forEach((b)=>b.addEventListener('click',()=>{
  const action=b.dataset.action;
  if(action==='build'||action==='replace'){ enterBuildMode(); return; }
  if(action==='info') openPanel('ホール情報', infoHtml());
  else if(action==='manage') openPanel('経営', `<p>本日売上 ${fmt.format(sales)}G / 稼働 ${els.occ.textContent}<br>接客強化 Lv.${serviceBoost}</p><button class="panelAction" id="serviceUp">接客を強化する</button>`);
  else if(action==='ad') openPanel('広告', `<p>広告中の人気補正 +${adBoost}</p><button class="panelAction" id="adFlyer">チラシ 10,000G / 人気+3</button><button class="panelAction" id="adWeb">WEB 35,000G / 人気+7</button>`);
  else if(action==='research'){ const cost=25_000+researchLevel*20_000; openPanel('研究', `<p>新台研究 Lv.${researchLevel}<br>研究Lvで遊技売上が上昇します。</p><button class="panelAction" id="researchMachine">研究 ${fmt.format(cost)}G</button>`); }
  else if(action==='customer') openPanel('客層', `<p>本日の来店 ${dayVisitors}人</p><ul><li>常連 ${segmentStats.regular}人</li><li>短時間客 ${segmentStats.quick}人</li><li>高単価客 ${segmentStats.high}人</li></ul><p>人気が上がるほど高単価客が増えます。</p>`);
  else openPanel('メニュー', `<p>${calendarLabel()} / 累計売上 ${fmt.format(lifetimeSales)}G / 累計来店 ${lifetimeVisitors}人</p><p>ドラッグ: 店内移動 / ピンチ: ズーム / ▶▶: 高速営業</p><button class="panelAction" id="saveGame">セーブ</button><button class="panelAction danger" id="resetSave">初期化</button>`);
  bindPanelActions();
}));

window.__CHAPPY_PLAYTEST_STATE__ = () => ({ day, minute: gameMinute, cash, sales, visitors: dayVisitors, customers: customers.size, popularity, adBoost, researchLevel, serviceBoost, speed, zoom, settled: daySettled });
renderLayout(els.scene, activeLayout);
installCameraControls(); centerCamera(); updateHud();
setInterval(tick, GAME_TICK_MS); setTimeout(spawnCustomer, 600);
