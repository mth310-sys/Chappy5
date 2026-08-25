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

function makeElement(){
  return {textContent:'',innerHTML:'',disabled:false,addEventListener(){}};
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
      querySelectorAll:()=>[]
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

console.log('ECHO DRIFT regression tests: PASS');
