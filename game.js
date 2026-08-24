const $ = (id) => document.getElementById(id);

const relicPool = [
  {id:'ember-edge', icon:'✹', name:'Ember Edge', rarity:'COMMON', desc:'STRIKEが2 BURNを付与する。', apply:s=>s.mods.strikeBurn+=2},
  {id:'mirror-hide', icon:'◇', name:'Mirror Hide', rarity:'COMMON', desc:'GUARDのシールド量 +3。', apply:s=>s.mods.guardBonus+=3},
  {id:'glass-heart', icon:'✦', name:'Glass Heart', rarity:'RARE', desc:'FOCUS時にHPを2回復する。', apply:s=>s.mods.focusHeal+=2},
  {id:'war-drum', icon:'◉', name:'War Drum', rarity:'COMMON', desc:'STRIKE基礎ダメージ +2。', apply:s=>s.mods.strikeBonus+=2},
  {id:'ash-crown', icon:'♛', name:'Ash Crown', rarity:'RARE', desc:'BURNダメージ +1。', apply:s=>s.mods.burnBonus+=1},
  {id:'echo-fang', icon:'⌁', name:'Echo Fang', rarity:'RARE', desc:'FOCUSが3以上ならSTRIKE時HPを1回復。', apply:s=>s.mods.focusLeech+=1},
  {id:'bulwark', icon:'▣', name:'Old Bulwark', rarity:'COMMON', desc:'戦闘開始時に4 SHIELD。', apply:s=>s.mods.startShield+=4},
  {id:'storm-knot', icon:'ϟ', name:'Storm Knot', rarity:'RARE', desc:'FOCUS 1ごとにSTRIKE +1（最大+5）。', apply:s=>s.mods.focusStrike+=1}
];

const enemies = {
  hound:{name:'Ash Hound', glyph:'◆', hp:26, intents:[['attack',6],['attack',8],['guard',4]]},
  warden:{name:'Ruined Warden', glyph:'⬢', hp:32, intents:[['guard',6],['attack',10],['attack',5]]},
  moth:{name:'Cinder Moth', glyph:'✦', hp:28, intents:[['burn',3],['attack',7],['attack',9]]},
  boss:{name:'Vault Sentinel', glyph:'✹', hp:52, intents:[['attack',8],['guard',7],['attack',13],['burn',4]]}
};

const charms = [
  {id:'blade', icon:'⚔', name:'Iron Spark', desc:'STRIKE +1 damage', cost:0, setup:s=>s.mods.strikeBonus++},
  {id:'shell', icon:'◇', name:'Quiet Shell', desc:'戦闘開始時 +3 SHIELD', cost:12, setup:s=>s.mods.startShield+=3},
  {id:'lens', icon:'✦', name:'Ember Lens', desc:'FOCUS開始値 +1', cost:20, setup:s=>s.focus++}
];

const defaultMeta = {echoes:0, unlocked:['blade'], discoveredRelics:[], discoveredEnemies:[], runs:0, wins:0};
let meta = loadMeta();
let selectedCharm = meta.unlocked[0] || 'blade';
let state = null;
let archiveReturn = 'homeView';

function loadMeta(){
  try { return {...defaultMeta, ...JSON.parse(localStorage.getItem('emberlore-meta') || '{}')}; }
  catch { return {...defaultMeta}; }
}
function saveMeta(){ localStorage.setItem('emberlore-meta', JSON.stringify(meta)); }
function show(id){ document.querySelectorAll('.view').forEach(v=>v.classList.remove('active')); $(id).classList.add('active'); }
function unique(arr){ return [...new Set(arr)]; }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function shuffle(arr){ return [...arr].sort(()=>Math.random()-.5); }

function renderHome(){
  $('echoesLabel').textContent = `${meta.echoes} ECHOES`;
  $('charmList').innerHTML = charms.map(c=>{
    const unlocked = meta.unlocked.includes(c.id);
    const selected = selectedCharm===c.id;
    return `<button class="charm ${selected?'selected':''} ${unlocked?'':'locked'}" data-charm="${c.id}">
      <span class="icon">${c.icon}</span><span><strong>${c.name}</strong><small>${c.desc}</small></span>
      <span class="tag">${unlocked?(selected?'SELECTED':'READY'):`${c.cost} ECHOES`}</span></button>`;
  }).join('');
  document.querySelectorAll('[data-charm]').forEach(btn=>btn.onclick=()=>selectCharm(btn.dataset.charm));
}

function selectCharm(id){
  const c=charms.find(x=>x.id===id);
  if(meta.unlocked.includes(id)){ selectedCharm=id; renderHome(); return; }
  if(meta.echoes>=c.cost){ meta.echoes-=c.cost; meta.unlocked.push(id); selectedCharm=id; saveMeta(); renderHome(); }
}

function newRun(){
  state={hp:32,maxHp:32,shield:0,focus:0,relics:[],stage:0,turn:0,enemy:null,enemyKey:null,enemyBurn:0,playerBurn:0,
    mods:{strikeBonus:0,guardBonus:0,focusHeal:0,strikeBurn:0,burnBonus:0,focusLeech:0,startShield:0,focusStrike:0},
    path:'', defeated:0, damageTaken:0};
  charms.find(c=>c.id===selectedCharm).setup(state);
  meta.runs++; saveMeta();
  beginEncounter('hound');
}

function beginEncounter(key){
  const e=enemies[key];
  state.stage++;
  state.turn=0; state.enemyKey=key; state.enemyBurn=0; state.playerBurn=0;
  state.enemy={...e,hp:e.hp,maxHp:e.hp}; state.shield=state.mods.startShield;
  meta.discoveredEnemies=unique([...meta.discoveredEnemies,key]); saveMeta();
  show('gameView'); renderCombat(`Encounter ${state.stage}. 敵の次の行動を読め。`);
}

function currentIntent(){ return state.enemy.intents[state.turn % state.enemy.intents.length]; }
function intentLabel([type,val]){
  if(type==='attack') return `ATTACK ${val}`;
  if(type==='guard') return `FORTIFY ${val}`;
  return `SCORCH ${val}`;
}

function renderCombat(message){
  $('stageLabel').textContent=`ROOM ${state.stage} / 4`;
  $('buildLabel').textContent=`${state.relics.length} RELICS`;
  $('enemyName').textContent=state.enemy.name;
  $('enemyCore').textContent=state.enemy.glyph;
  $('intentText').textContent=intentLabel(currentIntent());
  $('enemyHpText').textContent=`${Math.max(0,state.enemy.hp)} / ${state.enemy.maxHp}`;
  $('enemyHpBar').style.width=`${Math.max(0,state.enemy.hp/state.enemy.maxHp*100)}%`;
  $('playerHp').textContent=Math.max(0,state.hp); $('playerShield').textContent=state.shield; $('playerFocus').textContent=state.focus; $('enemyBurn').textContent=state.enemyBurn;
  $('strikeHint').textContent=`${strikeDamage()} damage`; $('guardHint').textContent=`${6+state.mods.guardBonus} shield`;
  $('combatLog').textContent=message;
}

function strikeDamage(){ return 7+state.mods.strikeBonus+Math.min(5,state.focus)*state.mods.focusStrike; }
function setActionsDisabled(disabled){ document.querySelectorAll('.action').forEach(b=>b.disabled=disabled); }

function playerAction(action){
  if(!state || state.hp<=0 || state.enemy.hp<=0) return;
  setActionsDisabled(true);
  let notes=[];
  if(state.playerBurn>0){ state.hp-=state.playerBurn; notes.push(`火傷で${state.playerBurn} damage`); state.playerBurn=Math.max(0,state.playerBurn-1); }
  if(state.hp<=0){ finishRun(false); return; }

  if(action==='strike'){
    const dmg=strikeDamage(); state.enemy.hp-=dmg; notes.push(`STRIKE ${dmg}`);
    if(state.mods.strikeBurn){state.enemyBurn+=state.mods.strikeBurn; notes.push(`BURN +${state.mods.strikeBurn}`);}
    if(state.focus>=3 && state.mods.focusLeech){state.hp=Math.min(state.maxHp,state.hp+state.mods.focusLeech); notes.push(`HP +${state.mods.focusLeech}`);}
    state.focus=Math.max(0,state.focus-1);
  } else if(action==='guard'){
    const gain=6+state.mods.guardBonus; state.shield+=gain; notes.push(`SHIELD +${gain}`);
  } else {
    state.focus=Math.min(5,state.focus+2); notes.push('FOCUS +2');
    if(state.mods.focusHeal){state.hp=Math.min(state.maxHp,state.hp+state.mods.focusHeal); notes.push(`HP +${state.mods.focusHeal}`);}
  }

  if(state.enemyBurn>0 && state.enemy.hp>0){
    const burn=state.enemyBurn+state.mods.burnBonus; state.enemy.hp-=burn; notes.push(`BURN ${burn}`); state.enemyBurn=Math.max(0,state.enemyBurn-1);
  }

  pulseEnemy();
  if(state.enemy.hp<=0){ renderCombat(notes.join(' / ')); setTimeout(winEncounter,300); return; }
  enemyTurn(notes);
}

function enemyTurn(notes){
  const [type,val]=currentIntent();
  if(type==='attack'){
    const blocked=Math.min(state.shield,val), dmg=val-blocked; state.shield-=blocked; state.hp-=dmg; state.damageTaken+=dmg;
    notes.push(dmg?`敵 ATTACK → ${dmg} damage`:`敵 ATTACK → BLOCKED`);
  } else if(type==='guard'){
    state.enemy.hp=Math.min(state.enemy.maxHp,state.enemy.hp+val); notes.push(`敵 FORTIFY → HP +${val}`);
  } else {
    state.playerBurn+=val; notes.push(`敵 SCORCH → 火傷 ${val}`);
  }
  state.turn++;
  renderCombat(notes.join(' / '));
  if(state.hp<=0){ setTimeout(()=>finishRun(false),350); }
  else setTimeout(()=>setActionsDisabled(false),120);
}

function pulseEnemy(){ const el=$('enemyCore'); el.classList.add('hit'); setTimeout(()=>el.classList.remove('hit'),140); }

function winEncounter(){
  state.defeated++;
  if(state.stage>=4){ finishRun(true); return; }
  const choices=shuffle(relicPool.filter(r=>!state.relics.includes(r.id))).slice(0,3);
  $('relicChoices').innerHTML=choices.map(r=>`<button class="relic" data-relic="${r.id}"><div class="relic-top"><span class="relic-icon">${r.icon}</span><span class="rarity">${r.rarity}</span></div><h3>${r.name}</h3><p>${r.desc}</p></button>`).join('');
  document.querySelectorAll('[data-relic]').forEach(b=>b.onclick=()=>takeRelic(b.dataset.relic));
  show('rewardView');
}

function takeRelic(id){
  const r=relicPool.find(x=>x.id===id); state.relics.push(id); r.apply(state);
  meta.discoveredRelics=unique([...meta.discoveredRelics,id]); saveMeta();
  if(state.stage===2){ showRoutes(); return; }
  beginEncounter(state.stage===1?'warden':state.stage===2?(state.path==='risk'?'moth':'warden'):'boss');
}

function showRoutes(){
  $('routeChoices').innerHTML=`
    <button class="route" data-route="safe"><p class="eyebrow">STABLE PATH</p><h3>Broken Gallery</h3><p>回復してから防御型の敵へ進む。</p><span class="risk">HP +5 / lower volatility</span></button>
    <button class="route" data-route="risk"><p class="eyebrow">DANGEROUS PATH</p><h3>Cinder Nest</h3><p>火傷を使う敵。勝てば追加でEchoを得る。</p><span class="risk">+3 ECHOES on clear</span></button>`;
  document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>{
    state.path=b.dataset.route;
    if(state.path==='safe') state.hp=Math.min(state.maxHp,state.hp+5);
    beginEncounter(state.path==='risk'?'moth':'warden');
  });
  show('routeView');
}

function finishRun(win){
  setActionsDisabled(true);
  const earned=(win?10:3)+state.defeated+(state.path==='risk'&&state.defeated>=3?3:0);
  meta.echoes+=earned; if(win) meta.wins++; saveMeta();
  $('resultCard').innerHTML=`<div class="result-mark">${win?'✦':'◇'}</div><p class="eyebrow">${win?'EXPEDITION CLEARED':'EXPEDITION ENDED'}</p><h2>${win?'The vault remembers you.':'灰の中にも記録は残る。'}</h2><p class="muted">${win?'ビルドが最奥まで届いた。別のCharmと遺物の組み合わせも試せる。':'今回の発見とEchoesは失われない。次のrunで別の選択を試せる。'}</p><div class="result-stats"><div><span>ECHOES</span><strong>+${earned}</strong></div><div><span>DEFEATED</span><strong>${state.defeated}</strong></div><div><span>RELICS</span><strong>${state.relics.length}</strong></div></div>`;
  show('resultView');
}

function renderArchive(){
  const relics=relicPool.map(r=>`<div class="archive-item ${meta.discoveredRelics.includes(r.id)?'':'unknown'}"><strong>${meta.discoveredRelics.includes(r.id)?`${r.icon} ${r.name}`:'? Unknown Relic'}</strong><small>${meta.discoveredRelics.includes(r.id)?r.desc:'Find it during an expedition'}</small></div>`).join('');
  const enemyItems=Object.entries(enemies).map(([id,e])=>`<div class="archive-item ${meta.discoveredEnemies.includes(id)?'':'unknown'}"><strong>${meta.discoveredEnemies.includes(id)?`${e.glyph} ${e.name}`:'? Unknown Entity'}</strong><small>${meta.discoveredEnemies.includes(id)?`${e.hp} base HP`:'Encounter it to record'}</small></div>`).join('');
  $('archiveContent').innerHTML=`<section class="archive-block"><h3>RECORD</h3><div class="result-stats"><div><span>RUNS</span><strong>${meta.runs}</strong></div><div><span>WINS</span><strong>${meta.wins}</strong></div><div><span>ECHOES</span><strong>${meta.echoes}</strong></div></div></section><section class="archive-block"><h3>RELICS ${meta.discoveredRelics.length}/${relicPool.length}</h3><div class="archive-grid">${relics}</div></section><section class="archive-block"><h3>ENTITIES ${meta.discoveredEnemies.length}/${Object.keys(enemies).length}</h3><div class="archive-grid">${enemyItems}</div></section>`;
}

$('startBtn').onclick=newRun;
$('homeBtn').onclick=()=>{ state=null; renderHome(); show('homeView'); };
$('archiveBtn').onclick=()=>{ archiveReturn=document.querySelector('.view.active')?.id || 'homeView'; renderArchive(); show('archiveView'); };
$('archiveClose').onclick=()=>show(archiveReturn==='archiveView'?'homeView':archiveReturn);
document.querySelectorAll('.action').forEach(btn=>btn.onclick=()=>playerAction(btn.dataset.action));

renderHome();
