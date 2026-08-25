const $=id=>document.getElementById(id);
const canvas=$('gameCanvas'),ctx=canvas.getContext('2d');
let DPR=Math.min(devicePixelRatio||1,2),W=0,H=0,last=0,raf=0;
let running=false,paused=false,kills=0,runEchoes=0,runDrops=0,boss=null,currentNode=null,routeStage=0,runLoot=[];
let player,enemies=[],projectiles=[],particles=[],texts=[],drops=[],shockwaves=[];
let pointer={active:false,x:0,y:0,targetX:0,targetY:0};

const itemPool=[
{id:'emberbrand',name:'Emberbrand',rarity:'legendary',power:8,desc:'撃破した敵が爆発し、周囲へ18 damage。',effect:'explode'},
{id:'stormglass',name:'Stormglass',rarity:'legendary',power:6,desc:'基本攻撃が最大2体へ連鎖する。',effect:'chain'},
{id:'ashen-boots',name:'Ashen Boots',rarity:'rare',power:4,desc:'DASH後に炎の軌跡を残す。',effect:'trail'},
{id:'blood-oath',name:'Blood Oath',rarity:'legendary',power:5,desc:'HP35%以下で攻撃速度+65%。',effect:'frenzy'},
{id:'sunken-bell',name:'Sunken Bell',rarity:'rare',power:4,desc:'CLEAVEの範囲+45%、cooldown短縮。',effect:'wide'},
{id:'iron-heart',name:'Iron Heart',rarity:'rare',power:3,desc:'撃破時にHPを3回復する。',effect:'leech'},
{id:'grave-orbit',name:'Grave Orbit',rarity:'legendary',power:5,desc:'周囲を回る火球が敵へ継続damage。',effect:'orbit'},
{id:'hunter-mark',name:'Hunter Mark',rarity:'common',power:3,desc:'基本攻撃damage+30%。',effect:'power'},
{id:'quick-sigil',name:'Quick Sigil',rarity:'common',power:2,desc:'移動速度+18%。',effect:'speed'}
];
const persistentGear=[
{id:'cinder-edge',slot:'weapon',name:'Cinder Edge',rarity:'rare',desc:'Basic damage +18%',effect:'gearPower'},
{id:'storm-fang',slot:'weapon',name:'Storm Fang',rarity:'legendary',desc:'Basic attacks can chain once.',effect:'gearChain'},
{id:'warden-plate',slot:'armor',name:'Warden Plate',rarity:'rare',desc:'Max HP +25',effect:'gearHp'},
{id:'runner-hide',slot:'armor',name:'Runner Hide',rarity:'rare',desc:'Move speed +15%',effect:'gearSpeed'},
{id:'ember-eye',slot:'relic',name:'Ember Eye',rarity:'legendary',desc:'Kills have a chance to burst.',effect:'gearBurst'},
{id:'grave-star',slot:'relic',name:'Grave Star',rarity:'legendary',desc:'Begin with a single orbiting flame.',effect:'gearOrbit'}
];
const starterGear={weapon:{id:'rust-blade',slot:'weapon',name:'Rust Blade',rarity:'common',desc:'Basic damage +10%',effect:'starterPower'},armor:{id:'ash-wrap',slot:'armor',name:'Ash Wrap',rarity:'common',desc:'Max HP +10',effect:'starterHp'},relic:null};
const defaultMeta={echoes:0,clears:0,runs:0,discovered:[],bestWave:0,vault:[],equipped:{weapon:'rust-blade',armor:'ash-wrap',relic:null}};
let meta=loadMeta();
function loadMeta(){try{let m={...defaultMeta,...JSON.parse(localStorage.getItem('emberlore-g2')||'{}')};m.discovered=Array.isArray(m.discovered)?m.discovered:[];m.vault=Array.isArray(m.vault)?m.vault:[];m.equipped={...defaultMeta.equipped,...(m.equipped||{})};return m}catch{return JSON.parse(JSON.stringify(defaultMeta))}}
function saveMeta(){localStorage.setItem('emberlore-g2',JSON.stringify(meta))}
function allGear(){return [starterGear.weapon,starterGear.armor,...persistentGear.filter(g=>meta.vault.includes(g.id))]}
function equippedGear(slot){let id=meta.equipped[slot];return allGear().find(g=>g&&g.id===id)||starterGear[slot]||null}

function resize(){W=innerWidth;H=innerHeight;canvas.width=Math.floor(W*DPR);canvas.height=Math.floor(H*DPR);canvas.style.width=W+'px';canvas.style.height=H+'px';ctx.setTransform(DPR,0,0,DPR,0,0)}
addEventListener('resize',resize);resize();
function showOverlay(id){document.querySelectorAll('.overlay').forEach(x=>x.classList.remove('active'));if(id)$(id).classList.add('active')}
function updateHome(){
 $('echoesText').textContent=meta.echoes;$('clearsText').textContent=meta.clears;$('itemsText').textContent=meta.discovered.length;
 for(const slot of ['weapon','armor','relic']){let g=equippedGear(slot),el=$(slot+'Slot');el.querySelector('b').textContent=g?g.name:'Empty';el.querySelector('span').textContent=g?g.desc:'No relic equipped'}
}

function beginExpedition(){routeStage=0;currentNode=null;kills=0;runEchoes=0;runDrops=0;runLoot=[];meta.runs++;saveMeta();renderRoute();showOverlay('routeView')}
const routeNodes=[
{id:'hunt',stage:0,type:'hunt',name:'Broken Gallery',desc:'敵群。安定したEchoとrun power。'},
{id:'cache',stage:0,type:'cache',name:'Sealed Cache',desc:'戦闘なし。戦利品を先に得る。'},
{id:'shrine',stage:1,type:'shrine',name:'Ash Shrine',desc:'代償なしの一時祝福。'},
{id:'elite',stage:1,type:'elite',name:'Warden Pit',desc:'強敵。高品質の戦利品。'},
{id:'boss',stage:2,type:'boss',name:'Tyrant Gate',desc:'最奥。勝てば装備を持ち帰れる。'}
];
function renderRoute(){
 $('routeMap').innerHTML=routeNodes.map(n=>{let available=n.stage===routeStage,done=n.stage<routeStage,locked=n.stage>routeStage;return `<button class="routeNode ${n.type} ${available?'available':''} ${done?'done':''} ${locked?'locked':''}" data-node="${n.id}" ${available?'':'disabled'}><small>${n.type.toUpperCase()}</small><b>${n.name}</b><span>${n.desc}</span></button>`}).join('');
 document.querySelectorAll('.routeNode.available').forEach(b=>b.onclick=()=>enterNode(routeNodes.find(n=>n.id===b.dataset.node)));
 $('routeHint').textContent=routeStage===0?'最初の進路を選べ。':routeStage===1?'安全な祝福か、危険なエリートか。':'最奥の門が開いた。';
}
function enterNode(node){currentNode=node;if(node.type==='cache'){runEchoes+=5;showLootChoice(true);return}if(node.type==='shrine'){applyShrine();return}startCombat(node)}
function applyShrine(){ensurePlayer();player.maxHp+=20;player.hp=player.maxHp;player.damage+=3;texts=[];routeStage=2;renderRoute();showOverlay('routeView')}
function ensurePlayer(){if(!player)createPlayer()}
function createPlayer(){
 player={x:W*.5,y:H*.62,r:16,hp:100,maxHp:100,speed:190,damage:15,attackRate:.48,attackCd:0,cleaveCd:0,dashCd:0,items:[],effects:new Set(),level:1,orbitAngle:0,invuln:0,dashTime:0,dashVX:0,dashVY:0,trailCd:0};
 let w=equippedGear('weapon'),a=equippedGear('armor'),r=equippedGear('relic');
 for(const g of [w,a,r]){if(!g)continue;if(g.effect==='starterPower')player.damage*=1.10;if(g.effect==='gearPower')player.damage*=1.18;if(g.effect==='gearChain')player.effects.add('chain');if(g.effect==='starterHp'){player.maxHp+=10;player.hp+=10}if(g.effect==='gearHp'){player.maxHp+=25;player.hp+=25}if(g.effect==='gearSpeed')player.speed*=1.15;if(g.effect==='gearBurst')player.effects.add('gearBurst');if(g.effect==='gearOrbit')player.effects.add('orbit')}
}
function startCombat(node){
 ensurePlayer();player.x=W*.5;player.y=H*.62;enemies=[];projectiles=[];particles=[];texts=[];drops=[];shockwaves=[];boss=null;
 running=true;paused=false;showOverlay(null);$('hud').classList.remove('hidden');$('bossWrap').classList.toggle('hidden',node.type!=='boss');$('waveLabel').textContent=node.type==='elite'?'ELITE · WARDEN PIT':node.type==='boss'?'BOSS · TYRANT GATE':'HUNT · BROKEN GALLERY';
 if(node.type==='boss')spawnBoss();else if(node.type==='elite'){spawnElite();for(let i=0;i<5;i++)spawnEnemy(i%3===0?'spitter':'crawler')}else{for(let i=0;i<8;i++)spawnEnemy(i%4===0?'spitter':i%3===0?'brute':'crawler')}
 $('moveHint').style.opacity=1;setTimeout(()=>{if($('moveHint'))$('moveHint').style.opacity=.25},2200);if(!raf)raf=requestAnimationFrame(loop)
}
function spawnEnemy(type){let side=Math.floor(Math.random()*4),x,y,m=38;if(side===0){x=Math.random()*W;y=-m}else if(side===1){x=W+m;y=Math.random()*H*.72}else if(side===2){x=Math.random()*W;y=H*.15-m}else{x=-m;y=Math.random()*H*.72}const defs={crawler:{r:14,hp:30,speed:72,damage:10,color:'#ce4b46',kind:'melee'},brute:{r:21,hp:68,speed:48,damage:18,color:'#8f343a',kind:'melee'},spitter:{r:15,hp:38,speed:55,damage:9,color:'#b66a3d',kind:'ranged'}};const d=defs[type];enemies.push({type,x,y,...d,maxHp:d.hp,attackCd:Math.random(),shootCd:1+Math.random(),hit:0,dead:false})}
function spawnElite(){let e={type:'elite',x:W*.5,y:H*.24,r:30,hp:220,maxHp:220,speed:58,damage:20,color:'#9f4052',kind:'melee',attackCd:0,shootCd:1,hit:0,dead:false};enemies.push(e)}
function spawnBoss(){boss={type:'boss',x:W*.5,y:H*.24,r:40,hp:560,maxHp:560,speed:45,damage:22,color:'#b43f38',kind:'boss',attackCd:0,shootCd:1.4,hit:0,dead:false,phase:0};enemies.push(boss);$('bossName').textContent='ASH TYRANT';updateBossBar()}

function loop(t){raf=requestAnimationFrame(loop);let dt=Math.min(.033,(t-last)/1000||0);last=t;if(running&&!paused)update(dt);draw()}
function update(dt){updatePlayer(dt);updateEnemies(dt);updateProjectiles(dt);updateParticles(dt);updateTexts(dt);updateShockwaves(dt);if(running&&enemies.length===0&&drops.length===0&&!paused)completeNode();updateHUD()}
function completeNode(){running=false;$('hud').classList.add('hidden');if(currentNode.type==='boss'){meta.bestWave=Math.max(meta.bestWave,3);saveMeta();showExtraction();return}if(currentNode.type==='elite')runEchoes+=7;else runEchoes+=3;showLootChoice(false)}
function advanceRoute(){routeStage++;renderRoute();showOverlay('routeView')}

function updatePlayer(dt){player.invuln=Math.max(0,player.invuln-dt);player.attackCd-=dt;player.cleaveCd-=dt;player.dashCd-=dt;let moveSpeed=player.speed*(player.effects.has('speed')?1.18:1);if(player.dashTime>0){player.dashTime-=dt;player.x+=player.dashVX*dt;player.y+=player.dashVY*dt;if(player.effects.has('trail')){player.trailCd-=dt;if(player.trailCd<=0){player.trailCd=.08;shockwaves.push({x:player.x,y:player.y,r:9,max:24,life:.9,damage:8,trail:true,hit:new Set()})}}}else if(pointer.active){let dx=pointer.targetX-player.x,dy=pointer.targetY-player.y,d=Math.hypot(dx,dy);if(d>7){player.x+=dx/d*moveSpeed*dt;player.y+=dy/d*moveSpeed*dt}}player.x=Math.max(22,Math.min(W-22,player.x));player.y=Math.max(H*.12,Math.min(H-130,player.y));if(player.effects.has('orbit')){player.orbitAngle+=dt*2.7;for(let k=0;k<2;k++){let a=player.orbitAngle+k*Math.PI,ox=player.x+Math.cos(a)*48,oy=player.y+Math.sin(a)*48;for(const e of enemies){if(!e.dead&&Math.hypot(e.x-ox,e.y-oy)<e.r+10)damageEnemy(e,18*dt,false)}}}let target=nearestEnemy(player.x,player.y,260),rate=player.attackRate;if(player.effects.has('frenzy')&&player.hp/player.maxHp<.35)rate*=.35;if(target&&player.attackCd<=0){player.attackCd=rate;fireBasic(target)}}
function fireBasic(target){let dx=target.x-player.x,dy=target.y-player.y,d=Math.hypot(dx,dy)||1,dmg=player.damage*(player.effects.has('power')?1.3:1)+player.items.reduce((a,i)=>a+i.power*.35,0);projectiles.push({x:player.x,y:player.y,vx:dx/d*520,vy:dy/d*520,r:5,life:.75,damage:dmg,color:'#ffc15c',friendly:true,chain:player.effects.has('chain'),hit:new Set()});burst(player.x,player.y,'#ffc15c',4,80)}
function updateEnemies(dt){for(const e of enemies){if(e.dead)continue;e.hit=Math.max(0,e.hit-dt);let dx=player.x-e.x,dy=player.y-e.y,d=Math.hypot(dx,dy)||1;e.attackCd-=dt;e.shootCd-=dt;if(e.kind==='ranged'&&d<230){if(e.shootCd<=0){e.shootCd=1.55;enemyShot(e,dx/d,dy/d)}}else if(e.kind==='boss')updateBoss(e,dt,dx,dy,d);else{if(d>e.r+player.r+7){e.x+=dx/d*e.speed*dt;e.y+=dy/d*e.speed*dt}else if(e.attackCd<=0){e.attackCd=.9;hurtPlayer(e.damage,e.x,e.y)}}}enemies=enemies.filter(e=>!e.dead)}
function updateBoss(e,dt,dx,dy,d){e.phase+=dt;if(d>105){e.x+=dx/d*e.speed*dt;e.y+=dy/d*e.speed*dt}if(e.shootCd<=0){e.shootCd=e.hp/e.maxHp<.5?1.05:1.45;for(let i=0;i<8;i++){let a=i*Math.PI/4+e.phase*.25;enemyShot(e,Math.cos(a),Math.sin(a),210)}}if(d<95&&e.attackCd<=0){e.attackCd=1.1;hurtPlayer(e.damage,e.x,e.y);shockwaves.push({x:e.x,y:e.y,r:20,max:105,life:.35,visual:true,hit:new Set()})}}
function enemyShot(e,nx,ny,speed=260){projectiles.push({x:e.x,y:e.y,vx:nx*speed,vy:ny*speed,r:7,life:2.2,damage:e.damage,color:'#ff655c',friendly:false})}
function updateProjectiles(dt){for(const p of projectiles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;if(p.friendly){for(const e of enemies){if(e.dead||p.hit?.has(e))continue;if(Math.hypot(p.x-e.x,p.y-e.y)<p.r+e.r){p.hit?.add(e);damageEnemy(e,p.damage,true);if(p.chain){let n=enemies.filter(x=>!x.dead&&x!==e&&!p.hit.has(x)).sort((a,b)=>Math.hypot(a.x-e.x,a.y-e.y)-Math.hypot(b.x-e.x,b.y-e.y))[0];if(n&&Math.hypot(n.x-e.x,n.y-e.y)<170){p.x=e.x;p.y=e.y;let dx=n.x-e.x,dy=n.y-e.y,d=Math.hypot(dx,dy)||1;p.vx=dx/d*520;p.vy=dy/d*520;p.damage*=.72;texts.push({x:e.x,y:e.y-20,text:'CHAIN',life:.5,color:'#7db5ff'})}else p.life=0}else p.life=0;break}}}else if(Math.hypot(p.x-player.x,p.y-player.y)<p.r+player.r){hurtPlayer(p.damage,p.x,p.y);p.life=0}}projectiles=projectiles.filter(p=>p.life>0&&p.x>-60&&p.x<W+60&&p.y>-60&&p.y<H+60)}
function damageEnemy(e,amount,show=true){if(e.dead)return;e.hp-=amount;e.hit=.09;if(show)texts.push({x:e.x,y:e.y-18,text:`${Math.round(amount)}`,life:.6,color:'#ffd58a'});burst(e.x,e.y,e.color,3,90);if(e===boss)updateBossBar();if(e.hp<=0)killEnemy(e)}
function killEnemy(e){if(e.dead)return;e.dead=true;kills++;runEchoes++;burst(e.x,e.y,'#ff8a55',14,170);shockwaves.push({x:e.x,y:e.y,r:8,max:42,life:.25,visual:true,hit:new Set()});if(player.effects.has('leech'))player.hp=Math.min(player.maxHp,player.hp+3);if(player.effects.has('explode')||(player.effects.has('gearBurst')&&Math.random()<.28)){shockwaves.push({x:e.x,y:e.y,r:10,max:90,life:.3,damage:18,hit:new Set([e])});texts.push({x:e.x,y:e.y-30,text:'EMBER BURST',life:.65,color:'#ffb14e'})}if(Math.random()<(e.type==='boss'?1:e.type==='elite'?.5:.12)){drops.push({x:e.x,y:e.y,r:9,life:3,pulse:0});runDrops++}}
function hurtPlayer(amount,x,y){if(player.invuln>0||!running)return;player.hp-=amount;player.invuln=.28;texts.push({x:player.x,y:player.y-28,text:`-${Math.round(amount)}`,life:.65,color:'#ff6b63'});burst(player.x,player.y,'#ff5b58',9,150);if(navigator.vibrate)navigator.vibrate(18);if(player.hp<=0)finishRun(false)}
function updateShockwaves(dt){for(const s of shockwaves){s.life-=dt;s.r+=(s.max-s.r)*Math.min(1,dt*12);if(s.damage){for(const e of enemies){if(e.dead||s.hit.has(e))continue;if(Math.hypot(e.x-s.x,e.y-s.y)<s.r+e.r){s.hit.add(e);damageEnemy(e,s.damage,true)}}}}shockwaves=shockwaves.filter(s=>s.life>0)}
function updateParticles(dt){for(const p of particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=.96;p.vy*=.96;p.life-=dt}particles=particles.filter(p=>p.life>0);for(const d of drops){d.life-=dt;d.pulse+=dt;if(Math.hypot(d.x-player.x,d.y-player.y)<32){d.life=0;runEchoes+=2;texts.push({x:d.x,y:d.y-20,text:'+2 ECHO',life:.8,color:'#6fd7ff'});burst(d.x,d.y,'#6fd7ff',10,120)}}drops=drops.filter(d=>d.life>0)}
function updateTexts(dt){for(const t of texts){t.y-=28*dt;t.life-=dt}texts=texts.filter(t=>t.life>0)}
function burst(x,y,color,n,speed){for(let i=0;i<n;i++){let a=Math.random()*Math.PI*2,v=Math.random()*speed;particles.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:.25+Math.random()*.35,color,r:1.5+Math.random()*2.5})}}
function useCleave(){if(!running||paused||player.cleaveCd>0)return;player.cleaveCd=player.effects.has('wide')?2.6:3.6;let radius=player.effects.has('wide')?145:100;shockwaves.push({x:player.x,y:player.y,r:25,max:radius,life:.28,damage:34+player.items.length*2,hit:new Set()});burst(player.x,player.y,'#ffc15c',20,210);if(navigator.vibrate)navigator.vibrate(25)}
function useDash(){if(!running||paused||player.dashCd>0)return;player.dashCd=3.2;let dx=pointer.active?pointer.targetX-player.x:0,dy=pointer.active?pointer.targetY-player.y:-1,d=Math.hypot(dx,dy)||1;player.dashVX=dx/d*620;player.dashVY=dy/d*620;player.dashTime=.22;player.invuln=.34;player.trailCd=0;burst(player.x,player.y,'#75b8ff',12,140)}

function showLootChoice(fromCache=false){paused=true;running=false;$('hud').classList.add('hidden');let choices=pickItems(3);$('lootTitle').textContent=fromCache?'Sealed cache opened':'Choose your power';$('lootChoices').innerHTML=choices.map(i=>`<button class="lootCard ${i.rarity}" data-item="${i.id}"><div class="lootTop"><span class="lootName">${i.name}</span><span class="rarity">${i.rarity.toUpperCase()}</span></div><div class="lootPower">POWER +${i.power}</div><div class="lootAffix">${i.desc}</div></button>`).join('');showOverlay('lootView');document.querySelectorAll('[data-item]').forEach(b=>b.onclick=()=>{let item=itemPool.find(i=>i.id===b.dataset.item);player=player||null;if(!player)createPlayer();player.items.push(item);player.effects.add(item.effect);runLoot.push(item.id);if(!meta.discovered.includes(item.id))meta.discovered.push(item.id);saveMeta();advanceRoute()})}
function pickItems(n){let pool=[...itemPool].sort(()=>Math.random()-.5),out=pool.slice(0,n);if(currentNode?.type==='elite'&&!out.some(i=>i.rarity==='legendary'))out[0]=itemPool.filter(i=>i.rarity==='legendary')[Math.floor(Math.random()*4)];return out}
function showExtraction(){paused=true;running=false;$('hud').classList.add('hidden');let locked=new Set(meta.vault),pool=persistentGear.filter(g=>!locked.has(g.id)).sort(()=>Math.random()-.5).slice(0,3);if(!pool.length){finalizeWin();return}$('extractChoices').innerHTML=pool.map(g=>`<button class="lootCard ${g.rarity}" data-gear="${g.id}"><div class="lootTop"><span class="lootName">${g.name}</span><span class="rarity">${g.rarity.toUpperCase()}</span></div><div class="lootPower">${g.slot.toUpperCase()}</div><div class="lootAffix">${g.desc}</div></button>`).join('');showOverlay('extractView');document.querySelectorAll('[data-gear]').forEach(b=>b.onclick=()=>{let g=persistentGear.find(x=>x.id===b.dataset.gear);meta.vault.push(g.id);meta.equipped[g.slot]=g.id;finalizeWin()})}
function finalizeWin(){meta.echoes+=runEchoes;meta.clears++;meta.bestWave=Math.max(meta.bestWave,3);saveMeta();finishResult(true)}
function finishRun(win){if(!running&&!win)return;running=false;paused=true;$('hud').classList.add('hidden');if(!win){meta.echoes+=Math.floor(runEchoes*.55);saveMeta();finishResult(false)}}
function finishResult(win){showOverlay('resultView');$('resultEyebrow').textContent=win?'EXTRACTION SUCCESS':'FIREKEEPER FALLEN';$('resultSigil').textContent=win?'◆':'✦';$('resultTitle').textContent=win?'A relic survives the ash.':'The ash rebuilds you.';$('resultText').textContent=win?'持ち帰った装備は次の遠征でも残る。Campで装備を確認しよう。':'Echoの一部は残った。装備はVaultに残っている。';$('resultStats').innerHTML=`<div><span>KILLS</span><strong>${kills}</strong></div><div><span>ECHOES</span><strong>${win?runEchoes:Math.floor(runEchoes*.55)}</strong></div><div><span>VAULT</span><strong>${meta.vault.length}</strong></div>`;updateHome()}
function renderVault(){let gear=allGear();$('vaultContent').innerHTML=gear.map(g=>`<button class="vaultItem ${meta.equipped[g.slot]===g.id?'equipped':''}" data-vault="${g.id}"><div class="slotTag">${g.slot.toUpperCase()} ${meta.equipped[g.slot]===g.id?'· EQUIPPED':''}</div><b>${g.name}</b><small>${g.desc}</small></button>`).join('')||'<p class="muted">まだ装備はない。</p>';document.querySelectorAll('[data-vault]').forEach(b=>b.onclick=()=>{let g=allGear().find(x=>x.id===b.dataset.vault);meta.equipped[g.slot]=g.id;saveMeta();renderVault();updateHome()})}
function renderCodex(){$('codexContent').innerHTML=itemPool.map(i=>{let open=meta.discovered.includes(i.id);return `<div class="codexItem ${open?'':'locked'}"><b>${open?i.name:'UNKNOWN DROP'}</b><small>${open?i.desc:'敵から発見して記録する'}</small></div>`}).join('')}
function updateHUD(){if(!player)return;$('hpText').textContent=Math.max(0,Math.ceil(player.hp));$('hpFill').style.width=Math.max(0,player.hp/player.maxHp*100)+'%';$('levelText').textContent=1+player.items.length;$('cleaveCd').textContent=player.cleaveCd>0?player.cleaveCd.toFixed(1):'READY';$('dashCd').textContent=player.dashCd>0?player.dashCd.toFixed(1):'READY';$('cleaveBtn').classList.toggle('cooldown',player.cleaveCd>0);$('dashBtn').classList.toggle('cooldown',player.dashCd>0)}
function updateBossBar(){if(boss)$('bossFill').style.width=Math.max(0,boss.hp/boss.maxHp*100)+'%'}
function nearestEnemy(x,y,max){let best=null,bd=max;for(const e of enemies){if(e.dead)continue;let d=Math.hypot(e.x-x,e.y-y);if(d<bd){bd=d;best=e}}return best}

function draw(){ctx.clearRect(0,0,W,H);let g=ctx.createRadialGradient(W*.5,H*.42,20,W*.5,H*.45,Math.max(W,H)*.7);g.addColorStop(0,'#18202b');g.addColorStop(.55,'#0b0f16');g.addColorStop(1,'#050609');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);ctx.strokeStyle='#ffffff08';ctx.lineWidth=1;for(let y=H*.14;y<H-90;y+=44){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}if(!player)return;for(const d of drops){ctx.globalAlpha=.25+.2*Math.sin(d.pulse*7);ctx.fillStyle='#63d8ff';ctx.fillRect(d.x-2,d.y-70,4,70);ctx.globalAlpha=1;ctx.beginPath();ctx.arc(d.x,d.y,8+Math.sin(d.pulse*8)*2,0,Math.PI*2);ctx.fillStyle='#9de8ff';ctx.fill()}for(const s of shockwaves){ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.strokeStyle=s.trail?'#ff853d99':s.damage?'#ffc15caa':'#ffffff35';ctx.lineWidth=s.trail?7:3;ctx.stroke()}for(const p of projectiles){ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=10;ctx.fill();ctx.shadowBlur=0}for(const e of enemies)drawEnemy(e);drawPlayer();for(const p of particles){ctx.globalAlpha=Math.max(0,p.life*2);ctx.fillStyle=p.color;ctx.fillRect(p.x,p.y,p.r,p.r)}ctx.globalAlpha=1;ctx.textAlign='center';ctx.font='700 11px system-ui';for(const t of texts){ctx.globalAlpha=Math.min(1,t.life*2);ctx.fillStyle=t.color;ctx.fillText(t.text,t.x,t.y)}ctx.globalAlpha=1}
function drawEnemy(e){ctx.save();ctx.translate(e.x,e.y);ctx.fillStyle=e.hit>0?'#fff':e.color;ctx.shadowColor=e.color;ctx.shadowBlur=e.type==='boss'?24:e.type==='elite'?18:8;ctx.beginPath();if(e.type==='boss'){for(let i=0;i<8;i++){let a=i*Math.PI/4,r=i%2?e.r*.72:e.r;let x=Math.cos(a)*r,y=Math.sin(a)*r;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.closePath()}else if(e.type==='elite'){for(let i=0;i<6;i++){let a=i*Math.PI/3-Math.PI/2,x=Math.cos(a)*e.r,y=Math.sin(a)*e.r;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.closePath()}else ctx.arc(0,0,e.r,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#18090b';ctx.beginPath();ctx.arc(-e.r*.28,-2,2.5,0,Math.PI*2);ctx.arc(e.r*.28,-2,2.5,0,Math.PI*2);ctx.fill();ctx.restore()}
function drawPlayer(){ctx.save();ctx.translate(player.x,player.y);if(player.invuln>0)ctx.globalAlpha=.55+.45*Math.sin(performance.now()*.04);ctx.shadowColor='#ffc15c';ctx.shadowBlur=20;ctx.fillStyle='#f2b64d';ctx.beginPath();ctx.moveTo(0,-19);ctx.lineTo(14,11);ctx.lineTo(0,17);ctx.lineTo(-14,11);ctx.closePath();ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#fff1c7';ctx.beginPath();ctx.arc(0,-6,5,0,Math.PI*2);ctx.fill();if(player.effects.has('orbit')){ctx.fillStyle='#ff7b39';for(let k=0;k<2;k++){let a=player.orbitAngle+k*Math.PI;ctx.beginPath();ctx.arc(Math.cos(a)*48,Math.sin(a)*48,7,0,Math.PI*2);ctx.fill()}}ctx.restore()}

function pointerPos(e){let r=canvas.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return{x:p.clientX-r.left,y:p.clientY-r.top}}
canvas.addEventListener('pointerdown',e=>{let p=pointerPos(e);pointer.active=true;pointer.targetX=p.x;pointer.targetY=p.y});canvas.addEventListener('pointermove',e=>{if(pointer.active){let p=pointerPos(e);pointer.targetX=p.x;pointer.targetY=p.y}});addEventListener('pointerup',()=>pointer.active=false);
$('cleaveBtn').onclick=e=>{e.stopPropagation();useCleave()};$('dashBtn').onclick=e=>{e.stopPropagation();useDash()};
$('startBtn').onclick=beginExpedition;$('againBtn').onclick=beginExpedition;$('campBtn').onclick=()=>{player=null;showOverlay('homeView');updateHome()};
$('closeRoute').onclick=()=>{showOverlay('homeView');updateHome()};
$('vaultBtn').onclick=()=>{renderVault();showOverlay('vaultView')};$('closeVault').onclick=()=>{showOverlay('homeView');updateHome()};
$('codexBtn').onclick=()=>{renderCodex();showOverlay('codexView')};$('closeCodex').onclick=()=>{showOverlay('homeView');updateHome()};
updateHome();
