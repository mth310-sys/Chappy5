import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const source=fs.readFileSync(new URL('../game.js',import.meta.url),'utf8');

class MemoryStorage{
  constructor(seed={}){this.map=new Map(Object.entries(seed));}
  getItem(k){return this.map.has(k)?this.map.get(k):null;}
  setItem(k,v){this.map.set(k,String(v));}
  removeItem(k){this.map.delete(k);}
}

class ThrowingStorage{
  getItem(){throw new Error('storage blocked');}
  setItem(){throw new Error('storage blocked');}
  removeItem(){throw new Error('storage blocked');}
}

function makeElement(){
  return {textContent:'',innerHTML:'',disabled:false,children:[],addEventListener(){},replaceChildren(...nodes){this.children=nodes;}};
}

function boot(storage,newRandom=()=>0.99){
  const ids=['banked','runs','discoveries','routes','statusText','energy','depth','haul','resonance','threat','threatLabel','extract','startRun','log','resetSave'];
  const elements=Object.fromEntries(ids.map(id=>[id,makeElement()]));
  const math=Object.create(Math);math.random=newRandom;
  const context=vm.createContext({
    console,
    localStorage:storage,
    confirm:()=>true,
    Math:math,
    Number,
    JSON,
    Set,
    document:{
      querySelector:s=>elements[s.replace(/^#/,'')]??makeElement(),
      querySelectorAll:()=>[],
      createElement:()=>makeElement()
    }
  });
  vm.runInContext(source,context,{filename:'game.js'});
  return {context,elements};
}

function read(ctx,expr){return vm.runInContext(expr,ctx);}
function run(ctx,code){return vm.runInContext(code,ctx);}

const SAVE_KEY='chappy5.echoDrift.v1';
const RUN_KEY='chappy5.echoDrift.run.v1';

// 1) Corrupt/legacy meta is normalized instead of poisoning runtime state.
{
  const storage=new MemoryStorage({
    [SAVE_KEY]:JSON.stringify({banked:'bad',runs:-8,found:['GLASS TIDE','BAD','GLASS TIDE']})
  });
  const {context}=boot(storage);
  assert.equal(read(context,'meta.banked'),0);
  assert.equal(read(context,'meta.runs'),0);
  assert.equal(read(context,'meta.found.length'),1);
  assert.equal(read(context,'meta.found[0]'),'GLASS TIDE');
}

// 2) A live dive survives a fresh JS boot with its offered routes intact.
{
  const storage=new MemoryStorage();
  const first=boot(storage);
  run(first.context,"run={energy:7,depth:4,haul:13,threat:31,chain:'B',chainLen:2,alive:true,log:['resume'],routes:[{...routeTemplates[0],cost:1,gain:2,signal:'A',anomaly:true},{...routeTemplates[1],cost:2,gain:5,signal:'B',anomaly:false},{...routeTemplates[2],cost:2,gain:3,signal:'C',anomaly:false}]};persistRun();");
  assert.ok(storage.getItem(RUN_KEY));
  const second=boot(storage);
  assert.equal(read(second.context,'run.energy'),7);
  assert.equal(read(second.context,'run.depth'),4);
  assert.equal(read(second.context,'run.haul'),13);
  assert.equal(read(second.context,'run.routes[0].anomaly'),true);
}

// 3) Successful extraction banks once, counts the attempt and clears live-run persistence.
{
  const storage=new MemoryStorage();
  const {context}=boot(storage);
  run(context,"run={energy:5,depth:5,haul:10,threat:20,chain:null,chainLen:0,alive:true,log:[],routes:[]};persistRun();extract(false);");
  assert.equal(read(context,'meta.banked'),12);
  assert.equal(read(context,'meta.runs'),1);
  assert.equal(storage.getItem(RUN_KEY),null);
  assert.equal(read(context,'run.alive'),false);
}

// 4) Collapse records the attempt, loses haul and clears live-run persistence.
{
  const storage=new MemoryStorage();
  const {context}=boot(storage,()=>0);
  run(context,"run={energy:10,depth:0,haul:9,threat:92,chain:null,chainLen:0,alive:true,log:[],routes:[{...routeTemplates[1],cost:2,gain:4,signal:'A',anomaly:false},{...routeTemplates[0],cost:1,gain:1,signal:'B',anomaly:false},{...routeTemplates[2],cost:1,gain:2,signal:'C',anomaly:false}]};persistRun();chooseRoute(0);");
  assert.equal(read(context,'meta.runs'),1);
  assert.equal(read(context,'run.haul'),0);
  assert.equal(read(context,'run.alive'),false);
  assert.equal(storage.getItem(RUN_KEY),null);
}

// 5) High-threat calm uses the same projected threat before and after route resolution.
{
  const storage=new MemoryStorage();
  const {context}=boot(storage,()=>0.99);
  run(context,"run={energy:10,depth:2,haul:0,threat:30,chain:null,chainLen:0,alive:true,log:[],routes:[{...routeTemplates[0],cost:1,gain:1,signal:'A',anomaly:false},{...routeTemplates[1],cost:2,gain:3,signal:'B',anomaly:false},{...routeTemplates[2],cost:1,gain:2,signal:'C',anomaly:false}]};");
  const projected=read(context,'projectedThreat(run.routes[0],run.depth+1)');
  assert.equal(projected,23.2);
  run(context,'chooseRoute(0);');
  assert.equal(read(context,'run.depth'),3);
  assert.equal(read(context,'run.threat'),projected);
  assert.equal(read(context,'run.alive'),true);
}

// 6) Depth-sensitive anomaly reward follows the production curve exactly.
{
  const storage=new MemoryStorage();
  const {context}=boot(storage);
  assert.deepEqual(
    Array.from(read(context,'[1,2,3,4,5,6].map(anomalyBonusAt)')),
    [2,3,5,8,10,13]
  );
}

// 7) Repeated extraction calls cannot double-bank or double-count a completed run.
{
  const storage=new MemoryStorage();
  const {context}=boot(storage);
  run(context,"run={energy:5,depth:5,haul:10,threat:20,chain:null,chainLen:0,alive:true,log:[],routes:[]};persistRun();extract(false);extract(false);");
  assert.equal(read(context,'meta.banked'),12);
  assert.equal(read(context,'meta.runs'),1);
  assert.equal(storage.getItem(RUN_KEY),null);
}

// 8) A route interaction after collapse cannot count or mutate the finished run again.
{
  const storage=new MemoryStorage();
  const {context}=boot(storage,()=>0);
  run(context,"run={energy:10,depth:0,haul:9,threat:92,chain:null,chainLen:0,alive:true,log:[],routes:[{...routeTemplates[1],cost:2,gain:4,signal:'A',anomaly:false},{...routeTemplates[0],cost:1,gain:1,signal:'B',anomaly:false},{...routeTemplates[2],cost:1,gain:2,signal:'C',anomaly:false}]};persistRun();chooseRoute(0);chooseRoute(0);");
  assert.equal(read(context,'meta.runs'),1);
  assert.equal(read(context,'run.haul'),0);
  assert.equal(read(context,'run.alive'),false);
  assert.equal(storage.getItem(RUN_KEY),null);
}

// 9) A browser that blocks localStorage must stay playable and surface the persistence warning.
{
  const {context,elements}=boot(new ThrowingStorage());
  assert.equal(read(context,'storageHealthy'),false);
  assert.match(elements.statusText.textContent,/保存領域を利用できません/);
  assert.doesNotThrow(()=>run(context,'startRun();'));
  assert.equal(read(context,'run.alive'),true);
  assert.equal(read(context,'storageHealthy'),false);
  assert.match(elements.statusText.textContent,/保存領域を利用できないため進行は保持されません/);
}

// 10) Restored log strings are rendered as inert text, never interpreted as HTML.
{
  const crafted='<img src=x onerror=alert(1)>';
  const routes=[
    {tone:'calm',cost:1,gain:2,signal:'A',anomaly:false},
    {tone:'deep',cost:2,gain:4,signal:'B',anomaly:false},
    {tone:'res',cost:1,gain:3,signal:'C',anomaly:false}
  ];
  const storage=new MemoryStorage({
    [RUN_KEY]:JSON.stringify({energy:7,depth:2,haul:5,threat:20,chain:null,chainLen:0,alive:true,log:[crafted],routes})
  });
  const {elements}=boot(storage);
  assert.equal(elements.log.children.length,1);
  assert.equal(elements.log.children[0].textContent,crafted);
  assert.equal(elements.log.innerHTML,'');
}

// 11) Clearing an active dive returns every interactive surface to a usable idle state.
{
  const storage=new MemoryStorage();
  const {context,elements}=boot(storage);
  run(context,"run={energy:3,depth:4,haul:17,threat:48,chain:'C',chainLen:3,alive:true,log:['stale'],routes:[{...routeTemplates[0],cost:1,gain:2,signal:'A',anomaly:false},{...routeTemplates[1],cost:2,gain:4,signal:'B',anomaly:false},{...routeTemplates[2],cost:1,gain:3,signal:'C',anomaly:false}]};render();run=null;render();");
  assert.equal(elements.startRun.disabled,false);
  assert.equal(elements.startRun.textContent,'潜航開始');
  assert.equal(elements.extract.disabled,true);
  assert.equal(elements.energy.textContent,10);
  assert.equal(elements.depth.textContent,0);
  assert.equal(elements.haul.textContent,0);
  assert.equal(elements.resonance.textContent,'—');
  assert.equal(elements.threatLabel.textContent,'CALM');
  assert.equal(elements.threat.textContent,'0%');
  assert.equal(elements.log.children.length,0);
}

// 12) A stale button from the previous offer cannot resolve the same index in the new offer.
{
  const storage=new MemoryStorage();
  const {context}=boot(storage,()=>0.99);
  run(context,"run={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true,log:[],routes:[{...routeTemplates[0],cost:1,gain:1,signal:'A',anomaly:false},{...routeTemplates[1],cost:2,gain:3,signal:'B',anomaly:false},{...routeTemplates[2],cost:1,gain:2,signal:'C',anomaly:false}]};globalThis.staleOffer=run.routes[0];chooseRoute(0,staleOffer);");
  assert.equal(read(context,'run.depth'),1);
  assert.equal(read(context,'run.alive'),true);
  run(context,'chooseRoute(0,staleOffer);');
  assert.equal(read(context,'run.depth'),1);
}

console.log('ECHO DRIFT regression tests: PASS');