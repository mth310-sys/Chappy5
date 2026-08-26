// Deterministic non-production probe for active-chain switching value over 2-3 decisions.
// SIMULATED only. Production game.js is not changed.
// At sampled active-chain states, compare forcing the offered resonance route versus
// forcing the locally-best calm/deep route, then follow the same contextual policy.
// Future route offers, anomaly flags, chain-break rolls, and collapse rolls use
// step-indexed exogenous tapes shared across both branches (common random numbers).

const SEEDS=[101,202,303,404];
const RUNS=10000;
const HORIZONS=[2,3];
const tones=['calm','deep','res'];
const templates={
  calm:{cost:[1,2],gain:[1,3],risk:-3},
  deep:{cost:[2,3],gain:[3,6],risk:3},
  res:{cost:[1,3],gain:[2,4],risk:0},
};
function rng(seed){let x=seed>>>0;return()=>{x=(Math.imul(1664525,x)+1013904223)>>>0;return x/4294967296}}
function mix(a,b,c=0){let x=(a^Math.imul(b+1,0x9e3779b9)^Math.imul(c+1,0x85ebca6b))>>>0;x^=x>>>16;x=Math.imul(x,0x7feb352d);x^=x>>>15;x=Math.imul(x,0x846ca68b);x^=x>>>16;return x>>>0}
function runSeed(seed,runIndex){return mix(seed,runIndex)}
function ri(R,a,b){return Math.floor(R()*(b-a+1))+a}
function pick(R,a){return a[Math.floor(R()*a.length)]}
function routes(R){const order=[...tones];for(let i=order.length-1;i>0;i--){const j=ri(R,0,i);[order[i],order[j]]=[order[j],order[i]]}return order.map(t=>{const q=templates[t];return{tone:t,cost:ri(R,...q.cost),gain:ri(R,...q.gain),risk:q.risk,signal:pick(R,['A','B','C']),anomaly:R()<.18}})}
function anomalyBonus(d){return 2+Math.floor(d/2)+Math.max(0,d-2)*2}
function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
function threatAfter(s,r){const calm=r.tone==='calm'&&s.threat>=25?-8:0;return clamp(s.threat+r.risk+(s.depth+1)*1.4+(r.anomaly?7:0)+calm,0,92)}
function resonanceBonus(chainLen){return chainLen<2?0:1+chainLen*2}
function immediateGain(s,r){let g=r.gain;if(r.tone==='res'&&s.chain===r.signal)g+=resonanceBonus(s.chainLen+1);if(r.anomaly)g+=anomalyBonus(s.depth+1);return g}
function bankFor(haul,depth){return Math.floor(haul*(1+Math.min(.6,depth*.04)))}
function projectedBank(s){return bankFor(s.haul,s.depth)}
function oneStepBankEV(s,r){const survival=1-threatAfter(s,r)/100;return survival*bankFor(s.haul+immediateGain(s,r),s.depth+1)}
function shouldExtract(s,r){return s.haul>0&&projectedBank(s)>=oneStepBankEV(s,r)}
function contextualRoute(s,rs){let best=rs[0],score=-Infinity;for(const r of rs){let v=oneStepBankEV(s,r);if(s.chain&&r.tone==='res')v+=resonanceBonus((s.chain===r.signal?s.chainLen+1:1)+1)/3;else if(s.chain)v+=resonanceBonus(s.chainLen+1)/6;if(v>score){score=v;best=r}}return best}
function applyStep(s,r,breakU,collapseU){const n={...s};n.energy-=Math.min(n.energy,r.cost);n.depth++;let gain=r.gain;if(r.tone==='res'){
    if(n.chain===r.signal){n.chainLen++;gain+=resonanceBonus(n.chainLen)}else{n.chain=r.signal;n.chainLen=1}
  }else if(n.chain&&breakU<.5){n.chain=null;n.chainLen=0}
  if(r.anomaly)gain+=anomalyBonus(n.depth);n.haul+=gain;n.threat=threatAfter(s,r);
  if(collapseU<n.threat/100)return{...n,alive:false,haul:0,collapsed:true};
  if(n.energy<=0)return{...n,alive:false,collapsed:false};
  return{...n,alive:true,collapsed:false};
}
function terminalBank(s){return s.collapsed?0:bankFor(s.haul,s.depth)}
function futureTape(baseSeed,horizon){const tape=[];for(let step=0;step<horizon;step++){
  const routeR=rng(mix(baseSeed,step,11));const outcomeR=rng(mix(baseSeed,step,29));
  tape.push({rs:routes(routeR),breakU:outcomeR(),collapseU:outcomeR()});
}return tape}
function branchValue(start,firstRoute,tape,horizon){let s={...start,alive:true,collapsed:false};for(let step=0;step<horizon;step++){
  const e=tape[step];const rs=step===0?null:e.rs;const r=step===0?firstRoute:contextualRoute(s,rs);
  if(step>0&&shouldExtract(s,r))return projectedBank(s);
  s=applyStep(s,r,e.breakU,e.collapseU);
  if(!s.alive)return terminalBank(s);
}return projectedBank(s)}
function stepFixedRes(s,r,breakU,collapseU){return applyStep(s,r,breakU,collapseU)}
function makeStats(){return{samples:0,nonResLocallyBetter:0,resWins:{2:0,3:0},switchWins:{2:0,3:0},ties:{2:0,3:0},delta:{2:0,3:0},match:{samples:0,resWins:{2:0,3:0},switchWins:{2:0,3:0}},mismatch:{samples:0,resWins:{2:0,3:0},switchWins:{2:0,3:0}},chain:{}}}
function addChain(o,len,h,resWin,switchWin,delta){const k=String(len);if(!o.chain[k])o.chain[k]={samples:0,resWins:{2:0,3:0},switchWins:{2:0,3:0},delta:{2:0,3:0}};const c=o.chain[k];if(h===HORIZONS[0])c.samples++;if(resWin)c.resWins[h]++;if(switchWin)c.switchWins[h]++;c.delta[h]+=delta}
function sample(seed){const out=makeStats();for(let k=0;k<RUNS;k++){const R=rng(runSeed(seed,k));let s={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true,collapsed:false};let visit=0;while(s.alive){const rs=routes(R);const res=rs.find(r=>r.tone==='res');if(s.chain){out.samples++;visit++;const non=rs.filter(r=>r.tone!=='res').sort((a,b)=>oneStepBankEV(s,b)-oneStepBankEV(s,a))[0];if(oneStepBankEV(s,non)>oneStepBankEV(s,res))out.nonResLocallyBetter++;const cat=res.signal===s.chain?'match':'mismatch';out[cat].samples++;
        for(const h of HORIZONS){const tape=futureTape(mix(seed,k,visit*17+h),h);const rv=branchValue(s,res,tape,h);const nv=branchValue(s,non,tape,h);const d=nv-rv;const rw=d<0,nw=d>0;if(rw){out.resWins[h]++;out[cat].resWins[h]++}else if(nw){out.switchWins[h]++;out[cat].switchWins[h]++}else out.ties[h]++;out.delta[h]+=d;addChain(out,s.chainLen,h,rw,nw,d)}}
      if(shouldExtract(s,res))break;const breakU=R(),collapseU=R();s=stepFixedRes(s,res,breakU,collapseU)}}return out}
function merge(rows){const o=makeStats();for(const r of rows){o.samples+=r.samples;o.nonResLocallyBetter+=r.nonResLocallyBetter;for(const h of HORIZONS){o.resWins[h]+=r.resWins[h];o.switchWins[h]+=r.switchWins[h];o.ties[h]+=r.ties[h];o.delta[h]+=r.delta[h]}for(const c of ['match','mismatch']){o[c].samples+=r[c].samples;for(const h of HORIZONS){o[c].resWins[h]+=r[c].resWins[h];o[c].switchWins[h]+=r[c].switchWins[h]}}for(const [k,v] of Object.entries(r.chain)){if(!o.chain[k])o.chain[k]={samples:0,resWins:{2:0,3:0},switchWins:{2:0,3:0},delta:{2:0,3:0}};o.chain[k].samples+=v.samples;for(const h of HORIZONS){o.chain[k].resWins[h]+=v.resWins[h];o.chain[k].switchWins[h]+=v.switchWins[h];o.chain[k].delta[h]+=v.delta[h]}}}return o}
const s=merge(SEEDS.map(sample));const pct=(a,b)=>b?100*a/b:0;
const horizon=Object.fromEntries(HORIZONS.map(h=>[h,{switchWinsPct:pct(s.switchWins[h],s.samples),resonanceWinsPct:pct(s.resWins[h],s.samples),tiePct:pct(s.ties[h],s.samples),meanSwitchMinusResBank:s.delta[h]/s.samples}]));
const bySignal=Object.fromEntries(['match','mismatch'].map(c=>[c,Object.fromEntries(HORIZONS.map(h=>[h,{samples:s[c].samples,switchWinsPct:pct(s[c].switchWins[h],s[c].samples),resonanceWinsPct:pct(s[c].resWins[h],s[c].samples)}]))]));
const byChainLen=Object.fromEntries(Object.entries(s.chain).sort((a,b)=>Number(a[0])-Number(b[0])).map(([k,v])=>[k,{samples:v.samples,...Object.fromEntries(HORIZONS.map(h=>[`h${h}`,{switchWinsPct:pct(v.switchWins[h],v.samples),resonanceWinsPct:pct(v.resWins[h],v.samples),meanSwitchMinusResBank:v.delta[h]/v.samples}]))}]));
console.log({activeChainSamples:s.samples,oneStepNonResLocallyBetterPct:pct(s.nonResLocallyBetter,s.samples),horizon,bySignal,byChainLen});
