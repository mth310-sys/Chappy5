// Chappy5 - fixed customer model / CustomerInstance generator v0.1
// No dependencies. Deterministic with Mulberry32.

const AGE_OCCUPATIONS = {
  20: ['UNI','PT','EMP','SELF','FREE','HOME','NONE','PRO'],
  30: ['PT','EMP','SELF','FREE','HOME','NONE','PRO'],
  40: ['PT','EMP','SELF','FREE','HOME','NONE','PRO'],
  50: ['PT','EMP','SELF','FREE','HOME','NONE','PRO'],
  60: ['PT','EMP','SELF','FREE','HOME','NONE','PENS','PRO'],
  70: ['PT','SELF','HOME','NONE','PENS']
};

const GENERAL_STYLES = ['ST','HY','NW','MF','GB','EN','NP'];
const PRO_STYLES = ['ST','HY'];

const STYLE = {
  ST:{information:75,settingSkill:72,technicalSkill:60,expectationFocus:80,patience:72,quitSpeed:68,heat:25,caution:72,mobility:55,hallLoyalty:45,novelty:45},
  HY:{information:82,settingSkill:55,technicalSkill:62,expectationFocus:92,patience:38,quitSpeed:88,heat:15,caution:82,mobility:90,hallLoyalty:30,novelty:35},
  NW:{information:60,settingSkill:45,technicalSkill:50,expectationFocus:45,patience:58,quitSpeed:45,heat:48,caution:45,mobility:48,hallLoyalty:38,novelty:95},
  MF:{information:42,settingSkill:40,technicalSkill:48,expectationFocus:30,patience:78,quitSpeed:30,heat:42,caution:40,mobility:20,hallLoyalty:62,novelty:25},
  GB:{information:35,settingSkill:32,technicalSkill:45,expectationFocus:25,patience:70,quitSpeed:28,heat:82,caution:22,mobility:42,hallLoyalty:38,novelty:55},
  EN:{information:28,settingSkill:25,technicalSkill:40,expectationFocus:18,patience:55,quitSpeed:35,heat:45,caution:38,mobility:32,hallLoyalty:58,novelty:45},
  NP:{information:18,settingSkill:15,technicalSkill:35,expectationFocus:10,patience:45,quitSpeed:25,heat:65,caution:20,mobility:58,hallLoyalty:35,novelty:50}
};

const PRO = {
  ST:{information:95,settingSkill:92,technicalSkill:88,expectationFocus:98,patience:82,quitSpeed:88,heat:8,caution:90,mobility:70,hallLoyalty:20,novelty:45},
  HY:{information:96,settingSkill:72,technicalSkill:88,expectationFocus:99,patience:35,quitSpeed:96,heat:5,caution:94,mobility:98,hallLoyalty:12,novelty:35}
};

const AGE_MOD = {
  20:{timeFreedom:5,novelty:8,maxSession:0},
  30:{timeFreedom:0,novelty:5,maxSession:0},
  40:{timeFreedom:0,novelty:0,maxSession:0},
  50:{timeFreedom:2,novelty:-3,maxSession:0},
  60:{timeFreedom:8,novelty:-6,maxSession:-20},
  70:{timeFreedom:12,novelty:-8,maxSession:-35}
};

const OCC = {
  UNI:{budgetPower:-18,timeFreedom:12,schedules:{CLASS:55,SHIFT:25,IRREGULAR:10,FREE:10},baseBudgetYen:[5000,25000],sessionMin:[60,300]},
  PT:{budgetPower:-10,timeFreedom:5,schedules:{SHIFT:70,IRREGULAR:15,DAY:10,FREE:5},baseBudgetYen:[6000,30000],sessionMin:[60,330]},
  EMP:{budgetPower:5,timeFreedom:-15,schedules:{DAY:68,NIGHT:10,SHIFT:22},baseBudgetYen:[8000,40000],sessionMin:[45,300]},
  SELF:{budgetPower:8,timeFreedom:8,schedules:{DAY:25,IRREGULAR:40,FREE:35},baseBudgetYen:[10000,50000],sessionMin:[60,420]},
  FREE:{budgetPower:0,timeFreedom:15,schedules:{IRREGULAR:45,FREE:55},baseBudgetYen:[7000,40000],sessionMin:[60,420]},
  HOME:{budgetPower:-3,timeFreedom:6,schedules:{HOME:70,IRREGULAR:15,FREE:15},baseBudgetYen:[5000,30000],sessionMin:[45,300]},
  NONE:{budgetPower:-20,timeFreedom:25,schedules:{FREE:85,IRREGULAR:15},baseBudgetYen:[3000,25000],sessionMin:[60,480]},
  PENS:{budgetPower:-8,timeFreedom:25,schedules:{FREE:90,IRREGULAR:10},baseBudgetYen:[3000,25000],sessionMin:[45,300]},
  PRO:{budgetPower:0,timeFreedom:30,schedules:{FREE:100},baseBudgetYen:[20000,100000],sessionMin:[120,720]}
};

const ECONOMIC_TIERS = {
  low:{mul:.65,score:-18}, lower:{mul:.82,score:-8}, standard:{mul:1,score:0}, comfortable:{mul:1.3,score:12}, wealthy:{mul:1.8,score:25}
};

const ECONOMIC_WEIGHTS = {
  UNI:{low:35,lower:35,standard:22,comfortable:7,wealthy:1}, PT:{low:25,lower:35,standard:30,comfortable:9,wealthy:1},
  EMP:{low:8,lower:20,standard:45,comfortable:22,wealthy:5}, SELF:{low:10,lower:15,standard:35,comfortable:28,wealthy:12},
  FREE:{low:14,lower:22,standard:38,comfortable:21,wealthy:5}, HOME:{low:12,lower:25,standard:40,comfortable:20,wealthy:3},
  NONE:{low:45,lower:30,standard:18,comfortable:6,wealthy:1}, PENS:{low:30,lower:30,standard:28,comfortable:11,wealthy:1},
  PRO:{low:10,lower:25,standard:45,comfortable:18,wealthy:2}
};

function rng(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
const clamp=(v,min=0,max=100)=>Math.max(min,Math.min(max,v));
const jitter=(r,amount=12)=>(r()*2-1)*amount;
function weightedPick(weights,r){const entries=Object.entries(weights);const total=entries.reduce((s,[,w])=>s+w,0);let x=r()*total;for(const [k,w] of entries){x-=w;if(x<=0)return k;}return entries[entries.length-1][0];}
function intRange(r,min,max){return Math.round(min+r()*(max-min));}

function listFixedModels(){
  const rows=[];
  for(const age of [20,30,40,50,60,70]) for(const occ of AGE_OCCUPATIONS[age]) {
    const styles=occ==='PRO'?PRO_STYLES:GENERAL_STYLES;
    for(const style of styles) rows.push({id:`${age}-${occ}-${style}`,ageBand:age,occupation:occ,playStyle:style,isPro:occ==='PRO'});
  }
  return rows;
}
const FIXED_MODELS=listFixedModels();
function modelById(id){return FIXED_MODELS.find(m=>m.id===id)||null;}

function buildProfile(model,r){
  const center={...(model.isPro?PRO[model.playStyle]:STYLE[model.playStyle])};
  const occ=OCC[model.occupation], age=AGE_MOD[model.ageBand];
  const econ=weightedPick(ECONOMIC_WEIGHTS[model.occupation],r), econCfg=ECONOMIC_TIERS[econ];
  const profile={};
  for(const [k,v] of Object.entries(center)) profile[k]=clamp(Math.round(v+jitter(r,model.isPro?7:14)));
  profile.budgetPower=clamp(Math.round(50+occ.budgetPower+econCfg.score+jitter(r,10)));
  profile.timeFreedom=clamp(Math.round(50+occ.timeFreedom+age.timeFreedom+jitter(r,10)));
  profile.novelty=clamp(profile.novelty+age.novelty);
  if(model.playStyle==='ST') profile.expectationFocus=Math.max(profile.expectationFocus,model.isPro?90:62);
  if(model.playStyle==='HY'){profile.expectationFocus=Math.max(profile.expectationFocus,model.isPro?94:75);profile.mobility=Math.max(profile.mobility,75);}
  if(model.playStyle==='NP') profile.expectationFocus=Math.min(profile.expectationFocus,32);
  if(model.isPro){profile.heat=Math.min(profile.heat,22);profile.caution=Math.max(profile.caution,78);}
  return {profile,economicTier:econ};
}

function buildPreferences(model,r){
  const p={normalPreference:intRange(r,15,90),artRtPreference:intRange(r,15,90),artPreference:intRange(r,15,90),okisloPreference:intRange(r,10,90),newMachinePreference:intRange(r,10,90),favoriteMachineAffinity:intRange(r,20,95)};
  if(model.playStyle==='NW') p.newMachinePreference=Math.max(p.newMachinePreference,75);
  if(model.playStyle==='MF') p.favoriteMachineAffinity=Math.max(p.favoriteMachineAffinity,78);
  return p;
}

function buildAvailability(model,r,schedule){
  let weekdayWindows,weekendWindows;
  switch(schedule){
    case 'DAY': weekdayWindows=[[17,23]];weekendWindows=[[10,23]];break;
    case 'NIGHT': weekdayWindows=[[10,16]];weekendWindows=[[10,23]];break;
    case 'SHIFT': weekdayWindows=r()<.5?[[10,17]]:[[17,23]];weekendWindows=[[10,23]];break;
    case 'CLASS': weekdayWindows=[[15,23]];weekendWindows=[[10,23]];break;
    case 'HOME': weekdayWindows=[[10,17]];weekendWindows=[[11,18]];break;
    default: weekdayWindows=[[10,23]];weekendWindows=[[10,23]];
  }
  return {weekdayWindows,weekendWindows};
}

function createCustomer(modelId,seed=1,seq=1){
  const model=modelById(modelId); if(!model) throw new Error(`Unknown fixed model: ${modelId}`);
  const r=rng((seed*2654435761+seq*1013904223)>>>0), occ=OCC[model.occupation];
  const {profile,economicTier}=buildProfile(model,r), schedule=weightedPick(occ.schedules,r), prefs=buildPreferences(model,r);
  const econMul=ECONOMIC_TIERS[economicTier].mul;
  let dailyBudgetYen=Math.round(intRange(r,occ.baseBudgetYen[0],occ.baseBudgetYen[1])*econMul/1000)*1000;
  if(model.isPro) dailyBudgetYen=Math.max(20000,dailyBudgetYen);
  let maxSessionMinutes=intRange(r,occ.sessionMin[0],occ.sessionMin[1])+AGE_MOD[model.ageBand].maxSession;
  maxSessionMinutes=Math.max(45,Math.min(720,maxSessionMinutes));
  const customer={
    id:`C${String(seq).padStart(5,'0')}`,fixedModelId:model.id,ageBand:model.ageBand,occupation:model.occupation,playStyle:model.playStyle,isPro:model.isPro,
    economicTier,scheduleType:schedule,dailyBudgetYen,maxSessionMinutes,profile,preferences:prefs,availability:buildAvailability(model,r,schedule),
    memory:{visitCount30d:0,lastVisitDay:null,hallTrust:0,hallLoyalty:0,machineMemories:{},categoryMemories:{},favoriteMachineIds:[],competitorPreference:0,regularStage:0}
  };
  const errors=validateCustomer(customer);if(errors.length)throw new Error(`Invalid generated customer ${customer.id}: ${errors.join('; ')}`);
  return customer;
}

function validateCustomer(c){
  const errors=[],m=modelById(c.fixedModelId);
  if(!m) errors.push('unknown fixedModelId');
  if(m&&(m.ageBand!==c.ageBand||m.occupation!==c.occupation||m.playStyle!==c.playStyle)) errors.push('identity mismatch');
  if(c.occupation==='PRO'&&!['ST','HY'].includes(c.playStyle)) errors.push('invalid pro playStyle');
  if(c.ageBand===20&&c.occupation==='PENS') errors.push('invalid pension age');
  if(c.ageBand===70&&['UNI','EMP','FREE','PRO'].includes(c.occupation)) errors.push('invalid age/occupation combination');
  if(c.playStyle==='NP'&&c.profile.expectationFocus>32) errors.push('NP expectation too high');
  if(c.isPro&&c.profile.heat>22) errors.push('pro heat too high');
  if(c.dailyBudgetYen<0||c.maxSessionMinutes<0) errors.push('negative economic/time value');
  return errors;
}

function generateRegionalPool(size=800,seed=20260901){
  const r=rng(seed),pool=[];
  // Equal fixed-model baseline for v0.1. Population weights are a later calibration layer.
  for(let i=1;i<=size;i++){
    const model=FIXED_MODELS[Math.floor(r()*FIXED_MODELS.length)];
    pool.push(createCustomer(model.id,Math.floor(r()*0xffffffff),i));
  }
  return pool;
}

function summarizePool(pool){
  const countBy=key=>pool.reduce((a,c)=>{const k=typeof key==='function'?key(c):c[key];a[k]=(a[k]||0)+1;return a;},{});
  return {size:pool.length,age:countBy('ageBand'),occupation:countBy('occupation'),playStyle:countBy('playStyle'),regularStage:countBy(c=>c.memory.regularStage)};
}

module.exports={AGE_OCCUPATIONS,GENERAL_STYLES,PRO_STYLES,FIXED_MODELS,listFixedModels,modelById,createCustomer,validateCustomer,generateRegionalPool,summarizePool,rng};

if(require.main===module){
  const pool=generateRegionalPool(800,20260901);
  console.log(JSON.stringify({fixedModelCount:FIXED_MODELS.length,sample:pool.slice(0,3),summary:summarizePool(pool)},null,2));
}
