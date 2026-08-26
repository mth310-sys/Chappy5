// Deterministic, non-production balance harness for ECHO DRIFT.
// Mirrors game.js rules and sweeps resonanceSlope candidates around production (=2).
// Route choice and voluntary-extraction policy are benchmarked jointly so a shared
// extraction threshold cannot silently determine the apparent best route strategy.
// Verification produced by this file is SIMULATED, never HUMAN_VERIFIED.

const SEEDS=[101,202,303,404];
const RUNS=10000;
const tones=['calm','deep','res'];
const policies=['fixed:calm','fixed:deep','fixed:res','one-step','future-aware'];
const extractionPolicies=[25,35,45,55,65,75,Infinity,'state-ev'];
const resonanceSlopes=[2,1.75,1.5,1.25,1];
const templates={
 calm:{cost:[1,2],gain:[1,3],risk:-3},
 deep:{cost:[2,3],gain:[3,6],risk:3},
 res:{cost:[1,3],gain:[2,4],risk:0},
};
function rng(seed){let x=seed>>>0;return()=>{x=(Math.imul(1664525,x)+1013904223)>>>0;return x/4294967296}}
function ri(R,a,b){return Math.floor(R()*(b-a+1))+a}
function pick(R,a){return a[Math.floor(R()*a.length)]}
function routes(R){const order=[...tones];for(let i=order.length-1;i>0;i--){const j=ri(R,0,i);[order[i],order[j]]=[order[j],order[i]]}return order.map(t=>{const q=templates[t];return{tone:t,cost:ri(R,...q.cost),gain:ri(R,...q.gain),risk:q.risk,signal:pick(R,['A','B','C']),anomaly:R()<.18}})}
function anomalyBonus(d){return 2+Math.floor(d/2)+Math.max(0,d-2)*2}
function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
function threatAfter(s,r){const calm=r.tone==='calm'&&s.threat>=25?-8:0;return clamp(s.threat+r.risk+(s.depth+1)*1.4+(r.anomaly?7:0)+calm,0,92)}
function immediateGain(s,r,slope){let g=r.gain;if(r.tone==='res'&&s.chain===r.signal)g+=1+(s.chainLen+1)*slope;if(r.anomaly)g+=anomalyBonus(s.depth+1);return g}
function bankFor(haul,depth){return Math.floor(haul*(1+Math.min(.6,depth*.04)))}
function projectedBank(s){return bankFor(s.haul,s.depth)}
function oneMoreStepBankEV(s,r,slope){const nextThreat=threatAfter(s,r);const survival=1-nextThreat/100;const nextHaul=s.haul+immediateGain(s,r,slope);return survival*bankFor(nextHaul,s.depth+1)}
function shouldExtractStateEV(s,chosenRoute,slope){if(s.haul<=0)return false;return projectedBank(s)>=oneMoreStepBankEV(s,chosenRoute,slope)}
function step(s,r,R,slope){const n={...s};n.energy-=Math.min(n.energy,r.cost);n.depth++;let g=r.gain;if(r.tone==='res'){if(n.chain===r.signal){n.chainLen++;g+=1+n.chainLen*slope}else{n.chain=r.signal;n.chainLen=1}}else if(R()<.5){n.chain=null;n.chainLen=0}if(r.anomaly)g+=anomalyBonus(n.depth);n.haul+=g;n.threat=threatAfter(s,r);if(R()*100<n.threat)return{...n,alive:false,haul:0};if(n.energy<=0)return{...n,alive:false,bank:bankFor(n.haul,n.depth),forced:true};return n}
function oneStepChoice(s,rs,slope){let best=0,bv=-Infinity;for(let i=0;i<rs.length;i++){const r=rs[i],v=immediateGain(s,r,slope)-r.cost*0.65-threatAfter(s,r)*0.055;if(v>bv){bv=v;best=i}}return best}
function futureChoice(s,rs,slope){let best=0,bv=-Infinity;for(let i=0;i<rs.length;i++){const r=rs[i],t=threatAfter(s,r),now=immediateGain(s,r,slope)-r.cost*.55-t*.05;let future=0;for(const t2 of tones){const q=templates[t2];const avg={tone:t2,cost:(q.cost[0]+q.cost[1])/2,gain:(q.gain[0]+q.gain[1])/2,risk:q.risk,signal:r.signal,anomaly:false};future=Math.max(future,immediateGain({...s,depth:s.depth+1,chain:r.tone==='res'?r.signal:s.chain,chainLen:r.tone==='res'?(s.chain===r.signal?s.chainLen+1:1):s.chainLen},avg,slope)-avg.cost*.55)}const v=now+future*.45;if(v>bv){bv=v;best=i}}return best}
function choose(policy,s,rs,slope){if(policy.startsWith('fixed:'))return rs.findIndex(r=>r.tone===policy.slice(6));if(policy==='one-step')return oneStepChoice(s,rs,slope);return futureChoice(s,rs,slope)}
function shouldExtract(s,chosenRoute,slope,extractPolicy){if(s.haul<=0)return false;if(extractPolicy==='state-ev')return shouldExtractStateEV(s,chosenRoute,slope);return s.threat>=extractPolicy}
function play(seed,slope,policy,extractPolicy){const R=rng(seed);let total=0,collapsed=0,voluntary=0,forced=0,totalEndDepth=0,totalExtractDepth=0,totalVoluntaryThreat=0,mix={calm:0,deep:0,res:0};for(let k=0;k<RUNS;k++){let s={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true};while(s.alive){const rs=routes(R);const i=choose(policy,s,rs,slope);const chosen=rs[i];if(shouldExtract(s,chosen,slope,extractPolicy)){total+=projectedBank(s);voluntary++;totalEndDepth+=s.depth;totalExtractDepth+=s.depth;totalVoluntaryThreat+=s.threat;s.alive=false;break}mix[chosen.tone]++;s=step(s,chosen,R,slope);if(!s.alive){totalEndDepth+=s.depth;if(s.bank!=null){total+=s.bank;forced++;totalExtractDepth+=s.depth}else collapsed++;break}}}const choices=mix.calm+mix.deep+mix.res;const extracts=voluntary+forced;return{bankPerRun:total/RUNS,collapsePct:collapsed/RUNS*100,voluntaryPct:voluntary/RUNS*100,forcedPct:forced/RUNS*100,meanEndDepth:totalEndDepth/RUNS,meanExtractDepth:extracts?totalExtractDepth/extracts:0,meanVoluntaryThreat:voluntary?totalVoluntaryThreat/voluntary:0,mix:Object.fromEntries(tones.map(t=>[t,mix[t]/choices*100]))}}
function aggregate(slope,policy,extractPolicy){const rows=SEEDS.map(seed=>play(seed,slope,policy,extractPolicy));const avg=k=>rows.reduce((a,r)=>a+r[k],0)/rows.length;return{extraction:extractPolicy==='state-ev'?'state-ev':Number.isFinite(extractPolicy)?extractPolicy:'never',bankPerRun:avg('bankPerRun'),collapsePct:avg('collapsePct'),voluntaryPct:avg('voluntaryPct'),forcedPct:avg('forcedPct'),meanEndDepth:avg('meanEndDepth'),meanExtractDepth:avg('meanExtractDepth'),meanVoluntaryThreat:avg('meanVoluntaryThreat'),mix:Object.fromEntries(tones.map(t=>[t,rows.reduce((a,r)=>a+r.mix[t],0)/rows.length]))}}

for(const slope of resonanceSlopes){
 console.log(`\nresonanceSlope=${slope}${slope===2?' production':' candidate'}`);
 for(const policy of policies){
  const rows=extractionPolicies.map(t=>aggregate(slope,policy,t));
  const best=rows.reduce((a,b)=>b.bankPerRun>a.bankPerRun?b:a);
  console.log(`\n${policy} bestExtraction=${best.extraction}`,best);
  for(const row of rows)console.log(' extraction',row);
 }
}
