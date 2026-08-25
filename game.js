const $=id=>document.getElementById(id);
const canvas=$('gameCanvas'),ctx=canvas.getContext('2d');
let DPR=Math.min(devicePixelRatio||1,2),W=0,H=0,last=0,raf=0;
let running=false,paused=false,wave=0,kills=0,runEchoes=0,runDrops=0,boss=null;
let player,enemies=[],projectiles=[],particles=[],texts=[],drops=[],shockwaves=[];
let pointer={active:false,x:0,y:0,targetX:0,targetY:0};

const itemPool=[
{id:'emberbrand',name:'Emberbrand',rarity:'legendary',power:8,desc:'撃破した敵が爆発し、周囲へ18 damage。',effect:'explode'},
{id:'stormglass',name:'Stormglass',rarity:'legendary',power:6,desc:'基本攻撃が最大2体へ連鎖する。',effect:'chain'},
{id:'ashen-boots',name:'Ashen Boots',rarity:'rare',power:4,desc:'DASH後に炎の軌跡を2秒残す。',effect:'trail'},
{id:'blood-oath',name:'Blood Oath',rarity:'legendary',power:5,desc:'HP35%以下で攻撃速度+65%。',effect:'frenzy'},
{id:'sunken-bell',name:'Sunken Bell',rarity:'rare',power:4,desc:'CLEAVEの範囲+45%、cooldown短縮。',effect:'wide'},
{id:'iron-heart',name:'Iron Heart',rarity:'rare',power:3,desc:'撃破時にHPを3回復する。',effect:'leech'},
{id:'grave-orbit',name:'Grave Orbit',rarity:'legendary',power:5,desc:'周囲を回る火球が敵へ継続damage。',effect:'orbit'},
{id:'hunter-mark',name:'Hunter Mark',rarity:'common',power:3,desc:'基本攻撃damage+30%。',effect:'power'},
{id:'quick-sigil',name:'Quick Sigil',rarity:'common',power:2,desc:'移動速度+18%。',effect:'speed'}
];
const defaultMeta={echoes:0,clears:0,runs:0,discovered:[],bestWave:0};
let meta=loadMeta();
function loadMeta(){try{return {...defaultMeta,...JSON.parse(localStorage.getItem('emberlore-g2')||'{}')}}catch{return {...defaultMeta}}}
function saveMeta(){localStorage.setItem('emberlore-g2',JSON.stringify(meta))}

function resize(){W=innerWidth;H=innerHeight;canvas.width=Math.floor(W*DPR);canvas.height=Math.floor(H*DPR);canvas.style.width=W+'px';canvas.style.height=H+'px';ctx.setTransform(DPR,0,0,DPR,0,0)}
addEventListener('resize',resize);resize();

function showOverlay(id){document.querySelectorAll('.overlay').forEach(x=>x.classList.remove('active'));if(id)$(id).classList.add('active')}
function updateHome(){ $('echoesText').textContent=meta.echoes;$('clearsText').textContent=meta.clears;$('itemsText').textContent=meta.discovered.length }

function resetRun(){
 wave=0;kills=0;runEchoes=0;runDrops=0;boss=null;enemies=[];projectiles=[];particles=[];texts=[];drops=[];shockwaves=[];
 player={x:W*.5,y:H*.62,r:16,hp:100,maxHp:100,speed:190,damage:15,attackRate:.48,attackCd:0,cleaveCd:0,dashCd:0,items:[],effects:new Set(),level:1,orbitAngle:0,invuln:0,dashTime:0,dashVX:0,dashVY:0,trailCd:0};
 meta.runs++;saveMeta();
 running=true;paused=false;showOverlay(null);$('hud').classList.remove('hidden');$('moveHint').style.opacity=1;
 setTimeout(()=>{if($('moveHint'))$('moveHint').style.opacity=.25},2500);
 nextWave(); if(!raf)raf=requestAnimationFrame(loop);
}

function nextWave(){
 wave++; meta.bestWave=Math.max(meta.bestWave,wave);saveMeta();
 $('waveLabel').textContent=wave<4?`CHAMBER ${wave}`:'BOSS CHAMBER';
 $('bossWrap').classList.toggle('hidden',wave<4);
 const counts=[0,6,9,12];
 if(wave<4){for(let i=0;i<counts[wave];i++)spawnEnemy(i%3===0&&wave>1?'brute':i%4===0?'spitter':'crawler');}
 else spawnBoss();
}
function spawnEnemy(type){
 let side=Math.floor(Math.random()*4),x,y,m=38;
 if(side===0){x=Math.random()*W;y=-m}else if(side===1){x=W+m;y=Math.random()*H*.72}else if(side===2){x=Math.random()*W;y=H*.15-m}else{x=-m;y=Math.random()*H*.72}
 const defs={crawler:{r:14,hp:30,speed:72,damage:10,color:'#ce4b46',kind:'melee'},brute:{r:21,hp:68,speed:48,damage:18,color:'#8f343a',kind:'melee'},spitter:{r:15,hp:38,speed:55,damage:9,color:'#b66a3d',kind:'ranged'}};
 const d=defs[type];enemies.push({type,x,y,...d,maxHp:d.hp,attackCd:Math.random(),shootCd:1+Math.random(),hit:0,dead:false})
}
function spawnBoss(){
 boss={type:'boss',x:W*.5,y:H*.24,r:40,hp:540,maxHp:540,speed:45,damage:22,color:'#b43f38',kind:'boss',attackCd:0,shootCd:1.4,hit:0,dead:false,phase:0};enemies.push(boss);$('bossName').textContent='ASH TYRANT';updateBossBar()
}

function loop(t){raf=requestAnimationFrame(loop);let dt=Math.min(.033,(t-last)/1000||0);last=t;if(running&&!paused)update(dt);draw()}
function update(dt){
 updatePlayer(dt); updateEnemies(dt); updateProjectiles(dt); updateParticles(dt); updateTexts(dt); updateShockwaves(dt);
 if(running && enemies.length===0 && drops.length===0 && !paused){
   if(wave>=4){finishRun(true)} else {runEchoes+=2+wave;showLootChoice();}
 }
 updateHUD();
}
function updatePlayer(dt){
 player.invuln=Math.max(0,player.invuln-dt);player.attackCd-=dt;player.cleaveCd-=dt;player.dashCd-=dt;
 let moveSpeed=player.speed*(player.effects.has('speed')?1.18:1);
 if(player.dashTime>0){player.dashTime-=dt;player.x+=player.dashVX*dt;player.y+=player.dashVY*dt;if(player.effects.has('trail')){player.trailCd-=dt;if(player.trailCd<=0){player.trailCd=.08;shockwaves.push({x:player.x,y:player.y,r:9,max:24,life:.9,damage:8,trail:true,hit:new Set()})}}}
 else if(pointer.active){let dx=pointer.targetX-player.x,dy=pointer.targetY-player.y,d=Math.hypot(dx,dy);if(d>7){player.x+=dx/d*moveSpeed*dt;player.y+=dy/d*moveSpeed*dt}}
 player.x=Math.max(22,Math.min(W-22,player.x));player.y=Math.max(H*.12,Math.min(H-130,player.y));
 if(player.effects.has('orbit')){player.orbitAngle+=dt*2.7;for(let k=0;k<2;k++){let a=player.orbitAngle+k*Math.PI,ox=player.x+Math.cos(a)*48,oy=player.y+Math.sin(a)*48;for(const e of enemies){if(!e.dead&&Math.hypot(e.x-ox,e.y-oy)<e.r+10)damageEnemy(e,18*dt,false)}}}
 let target=nearestEnemy(player.x,player.y,260);
 let rate=player.attackRate;if(player.effects.has('frenzy')&&player.hp/player.maxHp<.35)rate*=.35;
 if(target&&player.attackCd<=0){player.attackCd=rate;fireBasic(target)}
}
function fireBasic(target){
 let dx=target.x-player.x,dy=target.y-player.y,d=Math.hypot(dx,dy)||1;let dmg=player.damage*(player.effects.has('power')?1.3:1)+player.items.reduce((a,i)=>a+i.power*.35,0);
 projectiles.push({x:player.x,y:player.y,vx:dx/d*520,vy:dy/d*520,r:5,life:.75,damage:dmg,color:'#ffc15c',friendly:true,chain:player.effects.has('chain'),hit:new Set()});burst(player.x,player.y,'#ffc15c',4,80)
}
function updateEnemies(dt){
 for(const e of enemies){if(e.dead)continue;e.hit=Math.max(0,e.hit-dt);let dx=player.x-e.x,dy=player.y-e.y,d=Math.hypot(dx,dy)||1;e.attackCd-=dt;e.shootCd-=dt;
   if(e.kind==='ranged'&&d<230){if(e.shootCd<=0){e.shootCd=1.55;enemyShot(e,dx/d,dy/d)}}
   else if(e.kind==='boss')updateBoss(e,dt,dx,dy,d);
   else {if(d>e.r+player.r+7){e.x+=dx/d*e.speed*dt;e.y+=dy/d*e.speed*dt}else if(e.attackCd<=0){e.attackCd=.9;hurtPlayer(e.damage,e.x,e.y)}}
 }
 enemies=enemies.filter(e=>!e.dead)
}
function updateBoss(e,dt,dx,dy,d){
 e.phase+=dt;if(d>105){e.x+=dx/d*e.speed*dt;e.y+=dy/d*e.speed*dt}
 if(e.shootCd<=0){e.shootCd=e.hp/e.maxHp<.5?1.05:1.45;for(let i=0;i<8;i++){let a=i*Math.PI/4+e.phase*.25;enemyShot(e,Math.cos(a),Math.sin(a),210)}}
 if(d<95&&e.attackCd<=0){e.attackCd=1.1;hurtPlayer(e.damage,e.x,e.y);shockwaves.push({x:e.x,y:e.y,r:20,max:105,life:.35,visual:true,hit:new Set()})}
}
function enemyShot(e,nx,ny,speed=260){projectiles.push({x:e.x,y:e.y,vx:nx*speed,vy:ny*speed,r:7,life:2.2,damage:e.damage,color:'#ff655c',friendly:false})}
function updateProjectiles(dt){
 for(const p of projectiles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;if(p.friendly){for(const e of enemies){if(e.dead||p.hit?.has(e))continue;if(Math.hypot(p.x-e.x,p.y-e.y)<p.r+e.r){p.hit?.add(e);damageEnemy(e,p.damage,true);if(p.chain){let n=enemies.filter(x=>!x.dead&&x!==e&&!p.hit.has(x)).sort((a,b)=>Math.hypot(a.x-e.x,a.y-e.y)-Math.hypot(b.x-e.x,b.y-e.y))[0];if(n&&Math.hypot(n.x-e.x,n.y-e.y)<170){p.x=e.x;p.y=e.y;let dx=n.x-e.x,dy=n.y-e.y,d=Math.hypot(dx,dy)||1;p.vx=dx/d*520;p.vy=dy/d*520;p.damage*=.72;texts.push({x:e.x,y:e.y-20,text:'CHAIN',life:.5,color:'#7db5ff'})}else p.life=0}else p.life=0;break}}}
   else if(Math.hypot(p.x-player.x,p.y-player.y)<p.r+player.r){hurtPlayer(p.damage,p.x,p.y);p.life=0}
 }
 projectiles=projectiles.filter(p=>p.life>0&&p.x>-60&&p.x<W+60&&p.y>-60&&p.y<H+60)
}

function damageEnemy(e,amount,show=true){if(e.dead)return;e.hp-=amount;e.hit=.09;if(show)texts.push({x:e.x,y:e.y-18,text:`${Math.round(amount)}`,life:.6,color:'#ffd58a'});burst(e.x,e.y,e.color,3,90);if(e===boss)updateBossBar();if(e.hp<=0)killEnemy(e)}
function killEnemy(e){if(e.dead)return;e.dead=true;kills++;runEchoes++;burst(e.x,e.y,'#ff8a55',14,170);shockwaves.push({x:e.x,y:e.y,r:8,max:42,life:.25,visual:true,hit:new Set()});
 if(player.effects.has('leech'))player.hp=Math.min(player.maxHp,player.hp+3);
 if(player.effects.has('explode')){shockwaves.push({x:e.x,y:e.y,r:10,max:90,life:.3,damage:18,hit:new Set([e])});texts.push({x:e.x,y:e.y-30,text:'EMBER BURST',life:.65,color:'#ffb14e'})}
 if(Math.random()<(e.type==='boss'?1:.13)){drops.push({x:e.x,y:e.y,r:9,life:3,pulse:0});runDrops++;}
}
function hurtPlayer(amount,x,y){if(player.invuln>0||!running)return;player.hp-=amount;player.invuln=.28;texts.push({x:player.x,y:player.y-28,text:`-${Math.round(amount)}`,life:.65,color:'#ff6b63'});burst(player.x,player.y,'#ff5b58',9,150);if(navigator.vibrate)navigator.vibrate(18);if(player.hp<=0)finishRun(false)}

function updateShockwaves(dt){for(const s of shockwaves){s.life-=dt;s.r+=(s.max-s.r)*Math.min(1,dt*12);if(s.damage){for(const e of enemies){if(e.dead||s.hit.has(e))continue;if(Math.hypot(e.x-s.x,e.y-s.y)<s.r+e.r){s.hit.add(e);damageEnemy(e,s.damage,true)}}}}shockwaves=shockwaves.filter(s=>s.life>0)}
function updateParticles(dt){for(const p of particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=.96;p.vy*=.96;p.life-=dt}particles=particles.filter(p=>p.life>0);for(const d of drops){d.life-=dt;d.pulse+=dt;if(Math.hypot(d.x-player.x,d.y-player.y)<32){d.life=0;runEchoes+=2;texts.push({x:d.x,y:d.y-20,text:'+2 ECHO',life:.8,color:'#6fd7ff'});burst(d.x,d.y,'#6fd7ff',10,120)}}drops=drops.filter(d=>d.life>0)}
function updateTexts(dt){for(const t of texts){t.y-=28*dt;t.life-=dt}texts=texts.filter(t=>t.life>0)}
function burst(x,y,color,n,speed){for(let i=0;i<n;i++){let a=Math.random()*Math.PI*2,v=Math.random()*speed;particles.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:.25+Math.random()*.35,color,r:1.5+Math.random()*2.5})}}

function useCleave(){if(!running||paused||player.cleaveCd>0)return;player.cleaveCd=player.effects.has('wide')?2.6:3.6;let radius=player.effects.has('wide')?145:100;shockwaves.push({x:player.x,y:player.y,r:25,max:radius,life:.28,damage:34+player.items.length*2,hit:new Set()});burst(player.x,player.y,'#ffc15c',20,210);if(navigator.vibrate)navigator.vibrate(25)}
function useDash(){if(!running||paused||player.dashCd>0)return;player.dashCd=3.2;let dx=pointer.active?pointer.targetX-player.x:0,dy=pointer.active?pointer.targetY-player.y:-1,d=Math.hypot(dx,dy)||1;player.dashVX=dx/d*620;player.dashVY=dy/d*620;player.dashTime=.22;player.invuln=.34;player.trailCd=0;burst(player.x,player.y,'#75b8ff',12,140)}

function showLootChoice(){paused=true;let choices=pickItems(3);$('lootChoices').innerHTML=choices.map(i=>`<button class="lootCard ${i.rarity}" data-item="${i.id}"><div class="lootTop"><span class="lootName">${i.name}</span><span class="rarity">${i.rarity.toUpperCase()}</span></div><div class="lootPower">POWER +${i.power}</div><div class="lootAffix">${i.desc}</div></button>`).join('');document.querySelectorAll('[data-item]').forEach(b=>b.onclick=()=>equipItem(b.dataset.item));showOverlay('lootView')}
function pickItems(n){let scored=itemPool.map(i=>({i,r:Math.random()+(i.rarity==='legendary'?.10:i.rarity==='rare'?.22:.35)})).sort((a,b)=>b.r-a.r).map(x=>x.i);return [...new Map(scored.map(i=>[i.id,i])).values()].slice(0,n)}
function equipItem(id){let item=itemPool.find(i=>i.id===id);player.items.push(item);player.effects.add(item.effect);meta.discovered=[...new Set([...meta.discovered,id])];saveMeta();paused=false;showOverlay(null);texts.push({x:player.x,y:player.y-40,text:item.name.toUpperCase(),life:1.2,color:item.rarity==='legendary'?'#ffc15c':'#79afff'});nextWave()}

function finishRun(win){if(!running)return;running=false;paused=true;$('hud').classList.add('hidden');let earned=runEchoes+(win?18:0);meta.echoes+=earned;if(win)meta.clears++;saveMeta();$('resultEyebrow').textContent=win?'VAULT BREACHED':'EXPEDITION ENDED';$('resultSigil').textContent=win?'✦':'◇';$('resultTitle').textContent=win?'The Tyrant fell.':'The ash keeps what you learned.';$('resultText').textContent=win?'装備の組み合わせで最奥まで押し切った。次は別のドロップ構成を狙える。':'Echoesと発見済み装備は残る。次のrunでは別のビルドを試せる。';$('resultStats').innerHTML=`<div><span>ECHOES</span><strong>+${earned}</strong></div><div><span>KILLS</span><strong>${kills}</strong></div><div><span>LOOT</span><strong>${player.items.length}</strong></div>`;showOverlay('resultView');updateHome()}

function nearestEnemy(x,y,max){let best=null,bd=max;for(const e of enemies){if(e.dead)continue;let d=Math.hypot(e.x-x,e.y-y);if(d<bd){bd=d;best=e}}return best}
function updateBossBar(){if(boss)$('bossFill').style.width=`${Math.max(0,boss.hp/boss.maxHp*100)}%`}
function updateHUD(){$('hpFill').style.width=`${Math.max(0,player.hp/player.maxHp*100)}%`;$('hpText').textContent=Math.max(0,Math.ceil(player.hp));$('levelText').textContent=1+player.items.length;$('cleaveCd').textContent=player.cleaveCd>0?player.cleaveCd.toFixed(1):'READY';$('dashCd').textContent=player.dashCd>0?player.dashCd.toFixed(1):'READY';$('cleaveBtn').classList.toggle('cooldown',player.cleaveCd>0);$('dashBtn').classList.toggle('cooldown',player.dashCd>0)}

function draw(){ctx.clearRect(0,0,W,H);drawArena();if(!player)return;for(const d of drops)drawDrop(d);for(const s of shockwaves)drawShockwave(s);for(const e of enemies)drawEnemy(e);for(const p of projectiles)drawProjectile(p);drawPlayer();for(const p of particles){ctx.globalAlpha=Math.max(0,p.life*2);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1;for(const t of texts){ctx.globalAlpha=Math.min(1,t.life*2);ctx.fillStyle=t.color;ctx.font='800 12px system-ui';ctx.textAlign='center';ctx.fillText(t.text,t.x,t.y)}ctx.globalAlpha=1}
function drawArena(){let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#141821');g.addColorStop(.55,'#0b0f15');g.addColorStop(1,'#080a0f');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);ctx.strokeStyle='#ffffff08';ctx.lineWidth=1;let size=44,off=(Date.now()*.004)%size;for(let x=-size;x<W+size;x+=size){ctx.beginPath();ctx.moveTo(x+off,0);ctx.lineTo(x+off,H);ctx.stroke()}for(let y=H*.13;y<H;y+=size){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}let rg=ctx.createRadialGradient(W*.5,H*.45,20,W*.5,H*.45,Math.max(W,H)*.65);rg.addColorStop(0,'#5d20141d');rg.addColorStop(1,'#00000000');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H)}
function drawPlayer(){let pulse=1+Math.sin(Date.now()*.008)*.04;ctx.save();ctx.translate(player.x,player.y);ctx.shadowColor='#ffc15c';ctx.shadowBlur=18;ctx.fillStyle=player.invuln>0?'#fff0c2':'#e7a63e';ctx.beginPath();ctx.arc(0,0,player.r*pulse,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#2a1d12';ctx.beginPath();ctx.moveTo(0,-12);ctx.lineTo(10,10);ctx.lineTo(-10,10);ctx.closePath();ctx.fill();ctx.restore();if(player.effects.has('orbit')){for(let k=0;k<2;k++){let a=player.orbitAngle+k*Math.PI,ox=player.x+Math.cos(a)*48,oy=player.y+Math.sin(a)*48;ctx.fillStyle='#ff9d3d';ctx.shadowColor='#ff9d3d';ctx.shadowBlur=12;ctx.beginPath();ctx.arc(ox,oy,7,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0}}}
function drawEnemy(e){ctx.save();ctx.translate(e.x,e.y);ctx.shadowColor=e.color;ctx.shadowBlur=e.type==='boss'?24:12;ctx.fillStyle=e.hit>0?'#fff1d0':e.color;if(e.type==='crawler'){ctx.beginPath();ctx.moveTo(0,-e.r);ctx.lineTo(e.r,e.r);ctx.lineTo(-e.r,e.r);ctx.closePath();ctx.fill()}else if(e.type==='spitter'){ctx.rotate(Math.PI/4);ctx.fillRect(-e.r*.75,-e.r*.75,e.r*1.5,e.r*1.5)}else{ctx.beginPath();ctx.arc(0,0,e.r,0,Math.PI*2);ctx.fill();ctx.fillStyle='#39131a';ctx.beginPath();ctx.arc(0,0,e.r*.46,0,Math.PI*2);ctx.fill()}ctx.shadowBlur=0;if(e.type!=='boss'){ctx.fillStyle='#0009';ctx.fillRect(-e.r,-e.r-9,e.r*2,3);ctx.fillStyle='#ff6b60';ctx.fillRect(-e.r,-e.r-9,e.r*2*Math.max(0,e.hp/e.maxHp),3)}ctx.restore()}
function drawProjectile(p){ctx.fillStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0}
function drawDrop(d){let h=32+Math.sin(d.pulse*7)*6;let g=ctx.createLinearGradient(0,d.y-h,0,d.y+8);g.addColorStop(0,'#6fd7ff00');g.addColorStop(1,'#6fd7ffaa');ctx.fillStyle=g;ctx.fillRect(d.x-3,d.y-h,6,h);ctx.fillStyle='#9be5ff';ctx.shadowColor='#6fd7ff';ctx.shadowBlur=16;ctx.beginPath();ctx.arc(d.x,d.y,7,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0}
function drawShockwave(s){ctx.globalAlpha=Math.max(0,s.life*3);ctx.strokeStyle=s.trail?'#ff8e3d':s.damage?'#ffad48':'#ff625a';ctx.lineWidth=s.trail?8:3;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1}

function pointerPos(ev){let r=canvas.getBoundingClientRect();return{x:ev.clientX-r.left,y:ev.clientY-r.top}}
canvas.addEventListener('pointerdown',e=>{if(!running||paused)return;let p=pointerPos(e);pointer.active=true;pointer.x=p.x;pointer.y=p.y;pointer.targetX=p.x;pointer.targetY=p.y;canvas.setPointerCapture?.(e.pointerId)});
canvas.addEventListener('pointermove',e=>{if(!pointer.active)return;let p=pointerPos(e);pointer.targetX=p.x;pointer.targetY=p.y});
canvas.addEventListener('pointerup',()=>pointer.active=false);canvas.addEventListener('pointercancel',()=>pointer.active=false);
$('cleaveBtn').onclick=useCleave;$('dashBtn').onclick=useDash;$('startBtn').onclick=resetRun;$('againBtn').onclick=resetRun;$('campBtn').onclick=()=>{showOverlay('homeView');updateHome()};
$('codexBtn').onclick=()=>{renderCodex();showOverlay('codexView')};$('closeCodex').onclick=()=>showOverlay('homeView');
function renderCodex(){$('codexContent').innerHTML=itemPool.map(i=>{let found=meta.discovered.includes(i.id);return `<div class="codexItem ${found?'':'locked'}"><b>${found?i.name:'Unknown Relic'}</b><small>${found?i.desc:'Find this item during an expedition.'}</small></div>`}).join('')}
updateHome();showOverlay('homeView');
