// Deterministic non-production probe for active-chain switching opportunity cost.
// SIMULATED only. This does not alter production rules.
// Samples active-chain states reached by a fixed-resonance policy and compares
// one-step secured-bank EV with a minimal next-resonance chain-option term.

const SEEDS=[101,202,303,404];
const RUNS=10000;
const tones=['calm','deep','res'];
const templates={
  calm:{cost:[1,2],gain:[1,3],risk:-3},
  deep:{cost:[2,3],gain:[3,6],risk:3},
  res:{cost:[1,3],gain:[2,4],risk:0},
};
function rng(seed){let x=seed>>>0;return()=>{x=(Math.imul(1664525,x)+1013904223)>>>0;return x/4294967296}}
function runSeed(seed,runIndex){return(seed^Math.imul(runIndex+1,0x9e3779b9))>>>0}
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
// Minimal option term: expected bonus on the next resonance choice only.
// Production non-resonance routes preserve the active chain with probability 1/2.
function nextResonanceOption(s,r){
  if(r.tone==='res'){
    const postLen=s.chain===r.signal?s.chainLen+1:1;
    return resonanceBonus(postLen+1)/3;
  }
  return resonanceBonus(s.chainLen+1)/6;
}
function shouldExtract(s,r){return s.haul>0&&projectedBank(s)>=oneStepBankEV(s,r)}
function stepFixedRes(s,r,R){const n={...s};n.energy-=Math.min(n.energy,r.cost);n.depth++;let gain=r.gain;if(n.chain===r.signal){n.chainLen++;gain+=resonanceBonus(n.chainLen)}else{n.chain=r.signal;n.chainLen=1}if(r.anomaly)gain+=anomalyBonus(n.depth);n.haul+=gain;n.threat=threatAfter(s,r);if(R()*100<n.threat)return{...n,alive:false,haul:0};if(n.energy<=0)return{...n,alive:false};return n}
function makeStats(){return{samples:0,resSignalMatch:0,baseNonRes:0,baseRes:0,flipToRes:0,chainLenTotal:0,baseNonResDelta:0,adjustedNonResDelta:0,option:{calm:0,deep:0,res:0},match:{samples:0,baseNonRes:0,flipToRes:0},mismatch:{samples:0,baseNonRes:0,flipToRes:0}}}
function sample(seed){const out=makeStats();for(let k=0;k<RUNS;k++){const R=rng(runSeed(seed,k));let s={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true};while(s.alive){const rs=routes(R);const resIndex=rs.findIndex(r=>r.tone==='res');const res=rs[resIndex];if(s.chain){out.samples++;out.chainLenTotal+=s.chainLen;const cat=res.signal===s.chain?'match':'mismatch';out[cat].samples++;if(cat==='match')out.resSignalMatch++;
        const base=rs.map(r=>oneStepBankEV(s,r));const adjusted=rs.map((r,i)=>base[i]+nextResonanceOption(s,r));for(const r of rs)out.option[r.tone]+=nextResonanceOption(s,r);const bi=base.indexOf(Math.max(...base));const ai=adjusted.indexOf(Math.max(...adjusted));if(rs[bi].tone==='res')out.baseRes++;else{out.baseNonRes++;out[cat].baseNonRes++;out.baseNonResDelta+=base[bi]-base[resIndex];out.adjustedNonResDelta+=adjusted[bi]-adjusted[resIndex];if(rs[ai].tone==='res'){out.flipToRes++;out[cat].flipToRes++;}}}
      if(shouldExtract(s,res))break;s=stepFixedRes(s,res,R)}}return out}
function merge(rows){const o=makeStats();for(const r of rows){for(const k of ['samples','resSignalMatch','baseNonRes','baseRes','flipToRes','chainLenTotal','baseNonResDelta','adjustedNonResDelta'])o[k]+=r[k];for(const t of tones)o.option[t]+=r.option[t];for(const c of ['match','mismatch'])for(const k of ['samples','baseNonRes','flipToRes'])o[c][k]+=r[c][k]}return o}
const s=merge(SEEDS.map(sample));
const pct=(a,b)=>b?100*a/b:0;
console.log({
  activeChainSamples:s.samples,
  meanChainLen:s.chainLenTotal/s.samples,
  resonanceSignalMatchPct:pct(s.resSignalMatch,s.samples),
  oneStepBaseChoosesNonResPct:pct(s.baseNonRes,s.samples),
  nonResChoiceFlipsToResAfterMinimalChainOptionPct:pct(s.flipToRes,s.baseNonRes),
  meanNextResonanceOptionByTone:Object.fromEntries(tones.map(t=>[t,s.option[t]/s.samples])),
  meanNonResLeadBeforeChainOption:s.baseNonResDelta/s.baseNonRes,
  meanNonResLeadAfterChainOption:s.adjustedNonResDelta/s.baseNonRes,
  matchStates:{baseChoosesNonResPct:pct(s.match.baseNonRes,s.match.samples),flipToResPct:pct(s.match.flipToRes,s.match.baseNonRes)},
  mismatchStates:{baseChoosesNonResPct:pct(s.mismatch.baseNonRes,s.mismatch.samples),flipToResPct:pct(s.mismatch.flipToRes,s.mismatch.baseNonRes)},
});
