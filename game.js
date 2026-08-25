const $=s=>document.querySelector(s);
const SAVE_KEY='chappy5.echoDrift.v1';
const RUN_KEY='chappy5.echoDrift.run.v1';
const relics=['GLASS TIDE','RED STATIC','NULL CHOIR','PALE ORBIT','IRON BLOOM','LAST SIGNAL'];
let storageHealthy=true;

function storageGet(key){try{return localStorage.getItem(key)}catch{storageHealthy=false;return null}}
function storageSet(key,value){try{localStorage.setItem(key,value);return true}catch{storageHealthy=false;return false}}
function storageRemove(key){try{localStorage.removeItem(key);return true}catch{storageHealthy=false;return false}}
function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}
function finiteInt(value,fallback,min=0,max=Number.MAX_SAFE_INTEGER){const n=Number(value);return Number.isFinite(n)?clamp(Math.floor(n),min,max):fallback}

const routeTemplates=[
 {name:'静かな反響',tone:'calm',cost:[1,2],gain:[1,3],risk:-3,hint:'低消費・低回収 / 高脅威時は鎮静'},
 {name:'深層パルス',tone:'deep',cost:[2,3],gain:[3,6],risk:3,hint:'高消費・高回収 / 短期の回収向け'},
 {name:'共鳴追跡',tone:'res',cost:[1,3],gain:[2,4],risk:0,hint:'同系統を繋ぐほど回収が加速'}
];

function loadMeta(){
 const base={banked:0,runs:0,found:[]};const raw=storageGet(SAVE_KEY);if(!raw)return base;
 try{const parsed=JSON.parse(raw);if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))return base;const found=Array.isArray(parsed.found)?[...new Set(parsed.found.filter(x=>relics.includes(x)))]:[];return {banked:finiteInt(parsed.banked,0),runs:finiteInt(parsed.runs,0),found}}catch{return base}
}
function saveMeta(){return storageSet(SAVE_KEY,JSON.stringify(meta))}
function normalizeRoute(saved){if(!saved||typeof saved!=='object')return null;const template=routeTemplates.find(t=>t.tone===saved.tone);if(!template)return null;const signal=['A','B','C'].includes(saved.signal)?saved.signal:null;if(!signal)return null;return {...template,cost:finiteInt(saved.cost,template.cost[0],template.cost[0],template.cost[1]),gain:finiteInt(saved.gain,template.gain[0],template.gain[0],template.gain[1]),signal,anomaly:saved.anomaly===true}}
function loadRun(){
 const raw=storageGet(RUN_KEY);if(!raw)return null;
 try{const saved=JSON.parse(raw);if(!saved||saved.alive!==true||!Array.isArray(saved.routes)||saved.routes.length!==3)return null;const routes=saved.routes.map(normalizeRoute);if(routes.some(r=>!r))return null;const energy=finiteInt(saved.energy,-1,0,10);if(energy<=0)return null;const chain=['A','B','C'].includes(saved.chain)?saved.chain:null;return {energy,depth:finiteInt(saved.depth,0,0,1000),haul:finiteInt(saved.haul,0,0),threat:clamp(Number.isFinite(Number(saved.threat))?Number(saved.threat):6,0,92),chain,chainLen:chain?finiteInt(saved.chainLen,1,1,1000):0,alive:true,log:Array.isArray(saved.log)?saved.log.filter(x=>typeof x==='string').slice(0,12):[],routes}}catch{return null}
}
function persistRun(){if(run?.alive)return storageSet(RUN_KEY,JSON.stringify(run));return storageRemove(RUN_KEY)}

let meta=loadMeta();let run=loadRun();
function startRun(){run={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true,log:[]};log('潜航開始。信号海へ接続した。');generateRoutes();persistRun();render()}
function generateRoutes(){if(!run?.alive)return;const shuffled=[...routeTemplates].sort(()=>Math.random()-.5);run.routes=shuffled.map(t=>({...t,cost:rand(...t.cost),gain:rand(...t.gain),signal:pick(['A','B','C']),anomaly:Math.random()<0.18}))}
function anomalyBonusAt(nextDepth){return 2+Math.floor(nextDepth/2)+Math.max(0,nextDepth-2)*2}
function calmRecoveryFor(r){return r.tone==='calm'&&run.threat>=25?-8:0}
function projectedThreat(r,nextDepth=run.depth+1){return clamp(run.threat+r.risk+nextDepth*1.4+(r.anomaly?7:0)+calmRecoveryFor(r),0,92)}
function projectedBank(){if(!run)return 0;const bonus=1+Math.min(.6,run.depth*.04);return Math.floor(run.haul*bonus)}

function chooseRoute(i){
 if(!run?.alive)return;const r=run.routes[i];if(!r)return;const cost=Math.min(run.energy,r.cost);run.energy-=cost;run.depth++;
 let gain=r.gain;
 if(r.tone==='res'){
   if(run.chain===r.signal){run.chainLen++;gain+=1+run.chainLen*2}else{run.chain=r.signal;run.chainLen=1}
 }else if(Math.random()<.5){run.chain=null;run.chainLen=0}
 if(r.anomaly){gain+=anomalyBonusAt(run.depth);discoverMaybe()}
 run.haul+=gain;run.threat=projectedThreat(r,run.depth);
 log(`${r.name}：-${cost} EN / +${gain} 回収${r.anomaly?' / 異常反響':''}${r.tone==='calm'&&run.threat<25?'':' '}`);
 const collapse=Math.random()*100<run.threat;
 if(collapse){run.alive=false;run.haul=0;meta.runs++;saveMeta();log('信号崩壊。今回の回収物を喪失した。');persistRun()}
 else if(run.energy<=0){extract(true);return}else{generateRoutes();persistRun()}
 render();
}

function discoverMaybe(){const locked=relics.filter(x=>!meta.found.includes(x));if(!locked.length)return;const found=pick(locked);meta.found.push(found);saveMeta();log(`発見記録：${found}`)}
function extract(forced=false){if(!run?.alive)return;const bank=projectedBank();meta.banked+=bank;meta.runs++;saveMeta();log(`${forced?'緊急浮上':'自主帰還'}：${bank} を恒久回収。`);run.alive=false;run.haul=0;persistRun();render()}
function log(t){if(!run)return;run.log.unshift(t);run.log=run.log.slice(0,12)}

function render(){
 $('#banked').textContent=meta.banked;$('#runs').textContent=meta.runs;$('#discoveries').textContent=`${meta.found.length} / ${relics.length}`;
 if(!run){$('#routes').innerHTML='';$('#extract').textContent='回収して帰還';$('#statusText').textContent=storageHealthy?'信号海へ潜る準備ができた。':'保存領域を利用できません。このセッションの進行は保持されません。';return}
 $('#energy').textContent=run.energy;$('#depth').textContent=run.depth;$('#haul').textContent=run.haul;$('#resonance').textContent=run.chain?`${run.chain}×${run.chainLen}`:'—';$('#threat').textContent=`${Math.round(run.threat)}%`;
 $('#threatLabel').textContent=run.threat<25?'CALM':run.threat<50?'UNSTABLE':run.threat<75?'DANGER':'CRITICAL';$('#extract').disabled=!run.alive||run.haul===0;$('#extract').textContent=run.alive&&run.haul>0?`回収して帰還 +${projectedBank()}`:'回収して帰還';$('#startRun').textContent=run.alive?'潜航中':'もう一度潜る';$('#startRun').disabled=run.alive;
 const baseStatus=run.alive?'3つの反響から進路を選ぶ。表示脅威は選択直後の崩壊率。':'今回の潜航は終了。記録を見て次の潜航へ。';$('#statusText').textContent=storageHealthy?baseStatus:`${baseStatus} 保存領域を利用できないため進行は保持されません。`;
 const nextDepth=run.depth+1;
 $('#routes').innerHTML=run.alive?run.routes.map((r,i)=>{const anomaly=r.anomaly?` / 異常+${anomalyBonusAt(nextDepth)}`:'';const chain=r.tone==='res'&&run.chain===r.signal?` / 共鳴継続+${1+(run.chainLen+1)*2}`:'';const calm=r.tone==='calm'&&run.threat>=25?' / 鎮静-8':'';return `<button class="route" data-i="${i}"><span class="name">${r.name} · ${r.signal}${r.anomaly?' ⚠':''}</span><span class="hint">${r.hint} / EN-${r.cost} / 基礎+${r.gain}${anomaly}${chain}${calm}</span><span class="risk">選択後脅威 ${Math.round(projectedThreat(r,nextDepth))}%</span></button>`}).join(''):'';
 $('#log').innerHTML=run.log.map(x=>`<li>${x}</li>`).join('');document.querySelectorAll('.route').forEach(b=>b.addEventListener('click',()=>chooseRoute(Number(b.dataset.i))));
}

$('#startRun').addEventListener('click',startRun);$('#extract').addEventListener('click',()=>extract(false));$('#resetSave').addEventListener('click',()=>{if(confirm('累計回収・潜航回数・発見記録を初期化しますか？')){storageRemove(SAVE_KEY);storageRemove(RUN_KEY);meta=loadMeta();run=null;render()}});render();
