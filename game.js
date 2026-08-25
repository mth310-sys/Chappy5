const $=s=>document.querySelector(s);
const SAVE_KEY='chappy5.echoDrift.v1';
const relics=['GLASS TIDE','RED STATIC','NULL CHOIR','PALE ORBIT','IRON BLOOM','LAST SIGNAL'];
let meta=loadMeta();
let run=null;

function loadMeta(){try{return {...{banked:0,runs:0,found:[]},...JSON.parse(localStorage.getItem(SAVE_KEY)||'{}')}}catch{return{banked:0,runs:0,found:[]}}}
function saveMeta(){localStorage.setItem(SAVE_KEY,JSON.stringify(meta))}
function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}

// Route identities are intentionally different without making one route a clear default.
// 2026-08-25 SIMULATED Monte Carlo (30k runs / pure-route policies):
// calm ~6.0 expected bank, deep ~8.0, resonance ~6.8; survival ~29-33%.
// These are balance probes, not human-verified fun measurements.
const routeTemplates=[
 {name:'静かな反響',tone:'calm',cost:[1,2],gain:[1,3],risk:-3,hint:'低消費・低回収 / 崩壊を抑える'},
 {name:'深層パルス',tone:'deep',cost:[2,3],gain:[4,7],risk:3,hint:'高消費・高回収 / 短く深く潜る'},
 {name:'共鳴追跡',tone:'res',cost:[1,3],gain:[2,4],risk:0,hint:'同系統を繋ぐと回収倍率が伸びる'}
];

function startRun(){
 run={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true,log:[]};
 log('潜航開始。信号海へ接続した。');
 generateRoutes();render();
}

function generateRoutes(){
 if(!run?.alive)return;
 const shuffled=[...routeTemplates].sort(()=>Math.random()-.5);
 run.routes=shuffled.map(t=>({
   ...t,
   cost:rand(...t.cost),gain:rand(...t.gain),
   signal:pick(['A','B','C']),
   anomaly:Math.random()<0.18
 }));
}

function chooseRoute(i){
 if(!run?.alive)return;
 const r=run.routes[i];
 const cost=Math.min(run.energy,r.cost);
 run.energy-=cost;
 run.depth++;
 let gain=r.gain;
 if(r.tone==='res'){
   if(run.chain===r.signal){run.chainLen++;gain+=run.chainLen}else{run.chain=r.signal;run.chainLen=1}
 }else if(Math.random()<.5){run.chain=null;run.chainLen=0}
 if(r.anomaly){gain+=2;run.threat+=7;discoverMaybe()}
 run.haul+=gain;
 run.threat=clamp(run.threat+r.risk+run.depth*1.4,0,92);
 log(`${r.name}：-${cost} EN / +${gain} 回収${r.anomaly?' / 異常信号':''}`);
 const collapse=Math.random()*100<run.threat;
 if(collapse){
   run.alive=false;run.haul=0;meta.runs++;saveMeta();log('信号崩壊。今回の回収物を喪失した。');
 }else if(run.energy<=0){
   extract(true);return;
 }
 generateRoutes();render();
}

function discoverMaybe(){
 const locked=relics.filter(x=>!meta.found.includes(x));
 if(!locked.length)return;
 const found=pick(locked);
 meta.found.push(found);saveMeta();log(`発見記録：${found}`);
}

function extract(forced=false){
 if(!run?.alive)return;
 const bonus=1+Math.min(.6,run.depth*.04);
 const bank=Math.floor(run.haul*bonus);
 meta.banked+=bank;meta.runs++;saveMeta();
 log(`${forced?'緊急浮上':'自主帰還'}：${bank} を恒久回収。`);
 run.alive=false;run.haul=0;render();
}

function log(t){if(!run)return;run.log.unshift(t);run.log=run.log.slice(0,12)}

function render(){
 $('#banked').textContent=meta.banked;$('#runs').textContent=meta.runs;$('#discoveries').textContent=`${meta.found.length} / ${relics.length}`;
 if(!run){$('#routes').innerHTML='';$('#statusText').textContent='信号海へ潜る準備ができた。';return}
 $('#energy').textContent=run.energy;$('#depth').textContent=run.depth;$('#haul').textContent=run.haul;
 $('#resonance').textContent=run.chain?`${run.chain}×${run.chainLen}`:'—';$('#threat').textContent=`${Math.round(run.threat)}%`;
 $('#threatLabel').textContent=run.threat<25?'CALM':run.threat<50?'UNSTABLE':run.threat<75?'DANGER':'CRITICAL';
 $('#extract').disabled=!run.alive||run.haul===0;$('#startRun').textContent=run.alive?'潜航中':'もう一度潜る';$('#startRun').disabled=run.alive;
 $('#statusText').textContent=run.alive?'3つの反響から進路を選ぶ。深く潜るほど帰還価値と崩壊率が上がる。':'今回の潜航は終了。記録を見て次の潜航へ。';
 $('#routes').innerHTML=run.alive?run.routes.map((r,i)=>`<button class="route" data-i="${i}"><span class="name">${r.name} · ${r.signal}</span><span class="hint">${r.hint} / EN-${r.cost} / 基礎+${r.gain}</span><span class="risk">${r.risk>=0?'+':''}${r.risk}%</span></button>`).join(''):'';
 $('#log').innerHTML=run.log.map(x=>`<li>${x}</li>`).join('');
 document.querySelectorAll('.route').forEach(b=>b.addEventListener('click',()=>chooseRoute(Number(b.dataset.i))));
}

$('#startRun').addEventListener('click',startRun);$('#extract').addEventListener('click',()=>extract(false));
$('#resetSave').addEventListener('click',()=>{if(confirm('累計回収・帰還回数・発見記録を初期化しますか？')){localStorage.removeItem(SAVE_KEY);meta=loadMeta();run=null;render()}});
render();
