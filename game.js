const $ = (id) => document.getElementById(id);

const relicPool = [
  {id:'ember-edge', icon:'✹', name:'Ember Edge', rarity:'COMMON', desc:'STRIKEが2 BURNを付与する。', lore:'火守の剣は、敵ではなく「忘却」を焼くために鍛えられた。', apply:s=>s.mods.strikeBurn+=2},
  {id:'mirror-hide', icon:'◇', name:'Mirror Hide', rarity:'COMMON', desc:'GUARDのシールド量 +3。', lore:'鏡面装甲には、装着者ではない誰かの顔が残っている。', apply:s=>s.mods.guardBonus+=3},
  {id:'glass-heart', icon:'✦', name:'Glass Heart', rarity:'RARE', desc:'FOCUS時にHPを2回復する。', lore:'割れているのに鼓動する。記憶庫の心臓部と同じ周期だ。', apply:s=>s.mods.focusHeal+=2},
  {id:'war-drum', icon:'◉', name:'War Drum', rarity:'COMMON', desc:'STRIKE基礎ダメージ +2。', lore:'最後の避難命令は、この太鼓の三打で始まった。', apply:s=>s.mods.strikeBonus+=2},
  {id:'ash-crown', icon:'♛', name:'Ash Crown', rarity:'RARE', desc:'BURNダメージ +1。', lore:'王冠の内側に刻まれた名は、Archiveから意図的に削られている。', apply:s=>s.mods.burnBonus+=1},
  {id:'echo-fang', icon:'⌁', name:'Echo Fang', rarity:'RARE', desc:'FOCUSが3以上ならSTRIKE時HPを1回復。', lore:'Echoesを喰らう獣は、火守だけを襲わなかったという。', apply:s=>s.mods.focusLeech+=1},
  {id:'bulwark', icon:'▣', name:'Old Bulwark', rarity:'COMMON', desc:'戦闘開始時に4 SHIELD。', lore:'盾の裏には「門を閉じるな」と手書きされている。', apply:s=>s.mods.startShield+=4},
  {id:'storm-knot', icon:'ϟ', name:'Storm Knot', rarity:'RARE', desc:'FOCUS 1ごとにSTRIKE +1（最大+5）。', lore:'都市崩壊の夜、空ではなく地下から雷鳴が響いた。', apply:s=>s.mods.focusStrike+=1}
];

const enemies = {
  hound:{name:'Ash Hound', glyph:'◆', hp:26, signal:'骨ではなく、焦げた記録片を噛み砕いている。', intents:[['attack',6],['attack',8],['guard',4]]},
  warden:{name:'Ruined Warden', glyph:'⬢', hp:32, signal:'こちらを侵入者ではなく「帰還者」として識別した。', intents:[['guard',6],['attack',10],['attack',5]]},
  moth:{name:'Cinder Moth', glyph:'✦', hp:28, signal:'翅の粉に、消去された避難経路が一瞬だけ浮かぶ。', intents:[['burn',3],['attack',7],['attack',9]]},
  boss:{name:'Vault Sentinel', glyph:'✹', hp:52, signal:'最奥の守護者が発した最初の音声は――「また来たのか、火守」。', intents:[['attack',8],['guard',7],['attack',13],['burn',4]]}
};

const memories = [
  {id:'wake', title:'01 / 灰からの起動', text:'あなたは火守。死ぬたび灰から再構成されるが、その理由も、誰がそうしたのかも思い出せない。'},
  {id:'hound', title:'02 / 食われた記録', text:'Ash Houndは生物の死骸ではなく、記憶媒体を喰っている。世界を壊した何かは、記録そのものを消そうとしていた。'},
  {id:'warden', title:'03 / 帰還者', text:'Ruined Wardenはあなたの識別信号を知っている。火守はこの場所へ初めて来たわけではない。'},
  {id:'relic3', title:'04 / 遺物の共通点', text:'回収した遺物には同じ焼損痕がある。すべて都市崩壊の一夜に使われていた可能性が高い。'},
  {id:'moth', title:'05 / 消された避難路', text:'Cinder Mothの灰から、封鎖された避難経路が復元された。誰かが人々を外へ逃がさないよう門を閉じた。'},
  {id:'risk', title:'06 / 危険な記憶', text:'深いEchoほど情報密度が高い。危険な経路は偶然残ったのではなく、重要な記録を守るため歪められている。'},
  {id:'relic6', title:'07 / 同じ夜の証言', text:'六つの遺物が同じ事実を指している。崩壊は外敵の侵攻ではなく、記憶庫内部から始まった。'},
  {id:'sentinel', title:'08 / 守護者の認証', text:'Vault Sentinelはあなたを敵としてではなく、過去に命令を与えた権限者として認識している。'},
  {id:'first-clear', title:'09 / 最初の扉', text:'守護者停止後、記憶庫のさらに下へ続く封印が応答した。「EMBER PROTOCOL / AUTHOR: YOU」。崩壊と火守は無関係ではない。'},
  {id:'relic8', title:'10 / 欠けた名前', text:'全遺物の記録を重ねると、一人分の名前だけが完全に欠落している。それは火守自身の名かもしれない。'}
];

const charms = [
  {id:'blade', icon:'⚔', name:'Iron Spark', desc:'STRIKE +1 damage', cost:0, setup:s=>s.mods.strikeBonus++},
  {id:'shell', icon:'◇', name:'Quiet Shell', desc:'戦闘開始時 +3 SHIELD', cost:12, setup:s=>s.mods.startShield+=3},
  {id:'lens', icon:'✦', name:'Ember Lens', desc:'FOCUS開始値 +1', cost:20, setup:s=>s.focus++}
];

const defaultMeta = {echoes:0, unlocked:['blade'], discoveredRelics:[], discoveredEnemies:[], memories:[], runs:0, wins:0};
let meta = loadMeta();
let selectedCharm = meta.unlocked[0] || 'blade';
let state = null;
let archiveReturn = 'homeView';

function loadMeta(){
  try {
    const raw={...defaultMeta, ...JSON.parse(localStorage.getItem('emberlore-meta') || '{}')};
    raw.unlocked=Array.isArray(raw.unlocked)?raw.unlocked:['blade'];
    raw.discoveredRelics=Array.isArray(raw.discoveredRelics)?raw.discoveredRelics:[];
    raw.discoveredEnemies=Array.isArray(raw.discoveredEnemies)?raw.discoveredEnemies:[];
    raw.memories=Array.isArray(raw.memories)?raw.memories:[];
    return raw;
  } catch { return {...defaultMeta}; }
}
function saveMeta(){ localStorage.setItem('emberlore-meta', JSON.stringify(meta)); }
function show(id){ document.querySelectorAll('.view').forEach(v=>v.classList.remove('active')); $(id).classList.add('active'); }
function unique(arr){ return [...new Set(arr)]; }
function shuffle(arr){ return [...arr].sort(()=>Math.random()-.5); }
function memoryById(id){ return memories.find(m=>m.id===id); }
function unlockMemory(id){
  if(!memoryById(id) || meta.memories.includes(id)) return false;
  meta.memories.push(id);
  if(state) state.newMemories.push(id);
  saveMeta();
  return true;
}
function checkMemoryMilestones(){
  if(meta.discoveredRelics.length>=3) unlockMemory('relic3');
  if(meta.discoveredRelics.length>=6) unlockMemory('relic6');
  if(meta.discoveredRelics.length>=8) unlockMemory('relic8');
}

function currentObjective(){
  if(!meta.memories.includes('wake')) return ['起動記録を復元する','最初の遠征を開始し、自分が何者なのか手掛かりを探す。'];
  if(!meta.memories.includes('warden')) return ['記憶庫の認証記録を追う','奥へ進み、なぜ敵があなたを知っているのか確かめる。'];
  if(!meta.memories.includes('moth')) return ['封鎖された避難路を探す','危険な経路には、消された崩壊当夜の記録が残っている。'];
  if(!meta.memories.includes('first-clear')) return ['最奥の守護者へ到達する','Vault Sentinelがあなたを「帰還者」と呼ぶ理由を確かめる。'];
  if(!meta.memories.includes('relic8')) return ['失われた名前を復元する','すべての遺物を発見し、崩壊の夜に欠けた人物を特定する。'];
  return ['EMBER PROTOCOLを追う','第一層の記録は揃った。次の深度が開くまで、異なるビルドと経路で記録を検証する。'];
}

function renderHome(){
  if(!meta.memories.includes('wake')) unlockMemory('wake');
  const [title,text]=currentObjective();
  $('echoesLabel').textContent = `${meta.echoes} ECHOES`;
  $('objectiveTitle').textContent=title;
  $('objectiveText').textContent=text;
  const recovered=meta.memories.length;
  $('homeHeadline').textContent=recovered>=9?'あなたが世界を救ったのか、壊したのか。記憶庫はまだ答えない。':'目覚めるたび、世界は同じ灰から始まる。';
  $('homeStory').textContent=recovered>=5?`記憶断片 ${recovered}/${memories.length}。遠征のたびに崩壊の夜がつながり始めている。`:'あなたは記憶を失った「火守」。崩壊した記憶庫へ潜り、失われた世界の真相を持ち帰れ。';
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
    path:'', defeated:0, damageTaken:0, newMemories:[]};
  charms.find(c=>c.id===selectedCharm).setup(state);
  meta.runs++; saveMeta();
  beginEncounter('hound');
}

function beginEncounter(key){
  const e=enemies[key];
  state.stage++;
  state.turn=0; state.enemyKey=key; state.enemyBurn=0; state.playerBurn=0;
  state.enemy={...e,hp:e.hp,maxHp:e.hp}; state.shield=state.mods.startShield;
  const first=!meta.discoveredEnemies.includes(key);
  meta.discoveredEnemies=unique([...meta.discoveredEnemies,key]);
  if(key==='hound') unlockMemory('hound');
  if(key==='warden') unlockMemory('warden');
  if(key==='moth') unlockMemory('moth');
  if(key==='boss') unlockMemory('sentinel');
  saveMeta();
  show('gameView');
  $('signalStrip').textContent=`SIGNAL / ${first?'NEW RECORD — ':''}${e.signal}`;
  renderCombat(`Depth ${state.stage}. 敵の次の行動を読め。`);
}

function currentIntent(){ return state.enemy.intents[state.turn % state.enemy.intents.length]; }
function intentLabel([type,val]){
  if(type==='attack') return `ATTACK ${val}`;
  if(type==='guard') return `FORTIFY ${val}`;
  return `SCORCH ${val}`;
}

function renderCombat(message){
  $('stageLabel').textContent=`DEPTH ${state.stage} / 4`;
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
    notes.push(dmg?`敵 ATTACK → ${dmg} damage`:'敵 ATTACK → BLOCKED');
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
  if(state.stage>=4){ unlockMemory('first-clear'); finishRun(true); return; }
  const choices=shuffle(relicPool.filter(r=>!state.relics.includes(r.id))).slice(0,3);
  $('relicChoices').innerHTML=choices.map(r=>`<button class="relic" data-relic="${r.id}"><div class="relic-top"><span class="relic-icon">${r.icon}</span><span class="rarity">${r.rarity}</span></div><h3>${r.name}</h3><p>${r.desc}</p></button>`).join('');
  document.querySelectorAll('[data-relic]').forEach(b=>b.onclick=()=>takeRelic(b.dataset.relic));
  show('rewardView');
}

function takeRelic(id){
  const r=relicPool.find(x=>x.id===id); state.relics.push(id); r.apply(state);
  meta.discoveredRelics=unique([...meta.discoveredRelics,id]);
  checkMemoryMilestones(); saveMeta();
  if(state.stage===2){ showRoutes(); return; }
  beginEncounter(state.stage===1?'warden':state.stage===2?(state.path==='risk'?'moth':'warden'):'boss');
}

function showRoutes(){
  $('routeChoices').innerHTML=`
    <button class="route" data-route="safe"><p class="eyebrow">STABLE MEMORY</p><h3>Broken Gallery</h3><p>崩れた展示区画。信号は弱いが火守の修復設備が残る。</p><span class="risk">HP +5 / lower volatility</span></button>
    <button class="route" data-route="risk"><p class="eyebrow">CORRUPTED MEMORY</p><h3>Cinder Nest</h3><p>避難経路の記録が焼かれ続けている。危険だが崩壊当夜に近い。</p><span class="risk">NEW MEMORY / +3 ECHOES on clear</span></button>`;
  document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>{
    state.path=b.dataset.route;
    if(state.path==='safe') state.hp=Math.min(state.maxHp,state.hp+5);
    else unlockMemory('risk');
    beginEncounter(state.path==='risk'?'moth':'warden');
  });
  show('routeView');
}

function finishRun(win){
  setActionsDisabled(true);
  const earned=(win?10:3)+state.defeated+(state.path==='risk'&&state.defeated>=3?3:0);
  meta.echoes+=earned; if(win) meta.wins++; saveMeta();
  const latestId=state.newMemories[state.newMemories.length-1];
  const latest=memoryById(latestId);
  const recovered=state.newMemories.length;
  const memoryHtml=latest?`<div class="memory-recovered"><span>${recovered>1?`${recovered} MEMORIES RECOVERED`:'MEMORY RECOVERED'}</span><strong>${latest.title}</strong><p>${latest.text}</p></div>`:'';
  $('resultCard').innerHTML=`<div class="result-mark">${win?'✦':'◇'}</div><p class="eyebrow">${win?'VAULT SIGNAL RECOVERED':'EXPEDITION ENDED'}</p><h2>${win?'守護者は、あなたを知っていた。':'灰の中にも記憶は残る。'}</h2><p class="muted">${win?'最奥で新しい問いが生まれた。Archiveで断片をつなぎ、次の遠征で証拠を集めろ。':'死んでもEchoesと発見した記憶は残る。次の火守が続きを追える。'}</p><div class="result-stats"><div><span>ECHOES</span><strong>+${earned}</strong></div><div><span>DEFEATED</span><strong>${state.defeated}</strong></div><div><span>MEMORY</span><strong>${meta.memories.length}/${memories.length}</strong></div></div>${memoryHtml}`;
  show('resultView');
}

function renderArchive(){
  const relics=relicPool.map(r=>{
    const found=meta.discoveredRelics.includes(r.id);
    return `<div class="archive-item ${found?'':'unknown'}"><strong>${found?`${r.icon} ${r.name}`:'? Unknown Relic'}</strong><small>${found?r.lore:'遠征中に回収すると記録を読める'}</small></div>`;
  }).join('');
  const enemyItems=Object.entries(enemies).map(([id,e])=>{
    const found=meta.discoveredEnemies.includes(id);
    return `<div class="archive-item ${found?'':'unknown'}"><strong>${found?`${e.glyph} ${e.name}`:'? Unknown Entity'}</strong><small>${found?e.signal:'接触すると記録される'}</small></div>`;
  }).join('');
  const memoryItems=memories.map((m,i)=>{
    const found=meta.memories.includes(m.id);
    return `<div class="memory-item ${found?'':'locked'}"><span class="memory-index">THREAD ${String(i+1).padStart(2,'0')}</span><strong>${found?m.title:'████ / 未復元'}</strong><p>${found?m.text:'遠征・危険経路・遺物の発見によって復元される。'}</p></div>`;
  }).join('');
  const pct=Math.round(meta.memories.length/memories.length*100);
  const [objectiveTitle,objectiveText]=currentObjective();
  $('archiveContent').innerHTML=`
    <section class="archive-block"><div class="archive-summary"><span class="objective-label">ACTIVE MYSTERY</span><strong>${objectiveTitle}</strong><p>${objectiveText}</p><div class="thread-progress"><span style="width:${pct}%"></span></div></div></section>
    <section class="archive-block"><h3>MEMORY THREAD ${meta.memories.length}/${memories.length}</h3><div class="memory-list">${memoryItems}</div></section>
    <section class="archive-block"><h3>RECORD</h3><div class="result-stats"><div><span>RUNS</span><strong>${meta.runs}</strong></div><div><span>WINS</span><strong>${meta.wins}</strong></div><div><span>ECHOES</span><strong>${meta.echoes}</strong></div></div></section>
    <section class="archive-block"><h3>RELIC TESTIMONY ${meta.discoveredRelics.length}/${relicPool.length}</h3><div class="archive-grid">${relics}</div></section>
    <section class="archive-block"><h3>ENTITIES ${meta.discoveredEnemies.length}/${Object.keys(enemies).length}</h3><div class="archive-grid">${enemyItems}</div></section>`;
}

$('startBtn').onclick=newRun;
$('homeBtn').onclick=()=>{ state=null; renderHome(); show('homeView'); };
$('archiveBtn').onclick=()=>{ archiveReturn=document.querySelector('.view.active')?.id || 'homeView'; renderArchive(); show('archiveView'); };
$('archiveClose').onclick=()=>show(archiveReturn==='archiveView'?'homeView':archiveReturn);
document.querySelectorAll('.action').forEach(btn=>btn.onclick=()=>playerAction(btn.dataset.action));

renderHome();
