// Deterministic non-production probe for high-chain resonance diminishing returns.
// This file does NOT alter production. All output is SIMULATED, never HUMAN_VERIFIED.
// It intentionally uses the visible-signal chain-exit candidate from EX-016 and
// preserves common RNG consumption across reward modes.

const SEEDS=[101,202,303,404];
const RUNS=10000;
const tones=['calm','deep','res'];
const policies=['fixed:calm','fixed:deep','fixed:res','one-step','future-aware','chain-aware'];
const modes=['production','taper-after-first','cap-after-first'];
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
function resonanceBonus(chainLen,mode){
 if(chainLen<2)return 0;
 if(mode==='production')return 1+chainLen*2;      // +5,+7,+9...
 if(mode==='taper-after-first')return 5+(chainLen-2); // +5,+6,+7...
 if(mode==='cap-after-first')return 5;             // +5,+5,+5...
 throw new Error(`unknown reward mode ${mode}`);
}
function immediateGain(s,r,mode){let g=r.gain;if(r.tone==='res'&&s.chain===r.signal)g+=resonanceBonus(s.chainLen+1,mode);if(r.anomaly)g+=anomalyBonus(s.depth+1);return g}
function bankFor(haul,depth){return Math.floor(haul*(1+Math.min(.6,depth*.04)))}
function projectedBank(s){return bankFor(s.haul,s.depth)}
function oneMoreStepBankEV(s,r,mode){const nextThreat=threatAfter(s,r);const survival=1-nextThreat/100;const nextHaul=s.haul+immediateGain(s,r,mode);return survival*bankFor(nextHaul,s.depth+1)}
function shouldExtract(s,r,mode){return s.haul>0&&projectedBank(s)>=oneMoreStepBankEV(s,r,mode)}
function breaksChainVisible(s,r,R){R();return !!s.chain&&s.chain!==r.signal}
function step(s,r,R,mode){const n={...s};n.energy-=Math.min(n.energy,r.cost);n.depth++;let g=r.gain;if(r.tone==='res'){if(n.chain===r.signal){n.chainLen++;g+=resonanceBonus(n.chainLen,mode)}else{n.chain=r.signal;n.chainLen=1}}else if(breaksChainVisible(n,r,R)){n.chain=null;n.chainLen=0}if(r.anomaly)g+=anomalyBonus(n.depth);n.haul+=g;n.threat=threatAfter(s,r);if(R()*100<n.threat)return{...n,alive:false,haul:0};if(n.energy<=0)return{...n,alive:false,bank:bankFor(n.haul,n.depth),forced:true};return n}
function oneStepChoice(s,rs,mode){let best=0,bv=-Infinity;for(let i=0;i<rs.length;i++){const r=rs[i],v=immediateGain(s,r,mode)-r.cost*.65-threatAfter(s,r)*.055;if(v>bv){bv=v;best=i}}return best}
function futureChoice(s,rs,mode){let best=0,bv=-Infinity;for(let i=0;i<rs.length;i++){const r=rs[i],t=threatAfter(s,r),now=immediateGain(s,r,mode)-r.cost*.55-t*.05;let future=0;for(const t2 of tones){const q=templates[t2];const avg={tone:t2,cost:(q.cost[0]+q.cost[1])/2,gain:(q.gain[0]+q.gain[1])/2,risk:q.risk,signal:r.signal,anomaly:false};const next={...s,depth:s.depth+1,chain:r.tone==='res'?r.signal:(s.chain===r.signal?s.chain:null),chainLen:r.tone==='res'?(s.chain===r.signal?s.chainLen+1:1):(s.chain===r.signal?s.chainLen:0)};future=Math.max(future,immediateGain(next,avg,mode)-avg.cost*.55)}const v=now+future*.45;if(v>bv){bv=v;best=i}}return best}
function chainAwareChoice(s,rs,mode){let best=0,bv=-Infinity;for(let i=0;i<rs.length;i++){const r=rs[i];const base=immediateGain(s,r,mode)-r.cost*.65-threatAfter(s,r)*.055;let postLen=0,preserve=0;if(r.tone==='res'){postLen=s.chain===r.signal?s.chainLen+1:1;preserve=1}else if(s.chain&&s.chain===r.signal){postLen=s.chainLen;preserve=1}const nextResContinuation=postLen>0?preserve*(1/3)*resonanceBonus(postLen+1,mode):0;const v=base+nextResContinuation;if(v>bv){bv=v;best=i}}return best}
function choose(policy,s,rs,mode){if(policy.startsWith('fixed:'))return rs.findIndex(r=>r.tone===policy.slice(6));if(policy==='one-step')return oneStepChoice(s,rs,mode);if(policy==='chain-aware')return chainAwareChoice(s,rs,mode);return futureChoice(s,rs,mode)}
function play(seed,mode,policy){const R=rng(seed);let total=0,collapsed=0,voluntary=0,forced=0,mix={calm:0,deep:0,res:0};for(let k=0;k<RUNS;k++){let s={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true};while(s.alive){const rs=routes(R);const i=choose(policy,s,rs,mode),chosen=rs[i];if(shouldExtract(s,chosen,mode)){total+=projectedBank(s);voluntary++;s.alive=false;break}mix[chosen.tone]++;s=step(s,chosen,R,mode);if(!s.alive){if(s.bank!=null){total+=s.bank;forced++}else collapsed++;break}}}const choices=mix.calm+mix.deep+mix.res;return{bankPerRun:total/RUNS,collapsePct:collapsed/RUNS*100,voluntaryPct:voluntary/RUNS*100,forcedPct:forced/RUNS*100,mix:Object.fromEntries(tones.map(t=>[t,mix[t]/choices*100]))}}
function aggregate(mode,policy){const rows=SEEDS.map(seed=>play(seed,mode,policy));const avg=k=>rows.reduce((a,r)=>a+r[k],0)/rows.length;return{bankPerRun:avg('bankPerRun'),collapsePct:avg('collapsePct'),voluntaryPct:avg('voluntaryPct'),forcedPct:avg('forcedPct'),mix:Object.fromEntries(tones.map(t=>[t,rows.reduce((a,r)=>a+r.mix[t],0)/rows.length]))}}

for(const mode of modes){
 console.log(`\nhighChainMode=${mode} visibleSignalExit stateEV`);
 const rows=[];
 for(const policy of policies){const row=aggregate(mode,policy);rows.push({policy,...row});console.log(policy,row)}
 const ranked=[...rows].sort((a,b)=>b.bankPerRun-a.bankPerRun);
 console.log('ranking',ranked.map(r=>`${r.policy}:${r.bankPerRun.toFixed(6)}`).join(' > '));
 const bestContext=ranked.find(r=>!r.policy.startsWith('fixed:'));
 const bestFixed=ranked.find(r=>r.policy.startsWith('fixed:'));
 console.log('contextVsFixedDelta',bestContext.bankPerRun-bestFixed.bankPerRun);
}
