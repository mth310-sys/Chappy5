// Deterministic, non-production balance harness for ECHO DRIFT.
// Mirrors game.js rules but allows resonanceSlope=2 (production) or 1 (candidate).
// Verification produced by this file is SIMULATED, never HUMAN_VERIFIED.

const SEEDS=[101,202,303,404];
const RUNS=10000;
const tones=['calm','deep','res'];
const templates={
 calm:{cost:[1,2],gain:[1,3],risk:-3},
 deep:{cost:[2,3],gain:[3,6],risk:3},
 res:{cost:[1,3],gain:[2,4],risk:0},
};
function rng(seed){let x=seed>>>0;return()=>{x=(Math.imul(1664525,x)+1013904223)>>>0;return x/4294967296}}
function ri(R,a,b){return Math.floor(R()*(b-a+1))+a}
function pick(R,a){return a[Math.floor(R()*a.length)]}
function routes(R){return tones.map(t=>{const q=templates[t];return{tone:t,cost:ri(R,...q.cost),gain:ri(R,...q.gain),risk:q.risk,signal:pick(R,['A','B','C']),anomaly:R()<.18}})}
function anomalyBonus(d){return 2+Math.floor(d/2)+Math.max(0,d-2)*2}
function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
function threatAfter(s,r){const calm=r.tone==='calm'&&s.threat>=25?-8:0;return clamp(s.threat+r.risk+(s.depth+1)*1.4+(r.anomaly?7:0)+calm,0,92)}
function immediateGain(s,r,slope){let g=r.gain;if(r.tone==='res'&&s.chain===r.signal)g+=1+(s.chainLen+1)*slope;if(r.anomaly)g+=anomalyBonus(s.depth+1);return g}
function step(s,r,R,slope){const n={...s};n.energy-=Math.min(n.energy,r.cost);n.depth++;let g=r.gain;if(r.tone==='res'){if(n.chain===r.signal){n.chainLen++;g+=1+n.chainLen*slope}else{n.chain=r.signal;n.chainLen=1}}else if(R()<.5){n.chain=null;n.chainLen=0}if(r.anomaly)g+=anomalyBonus(n.depth);n.haul+=g;n.threat=threatAfter(s,r);if(R()*100<n.threat)return{...n,alive:false,haul:0};if(n.energy<=0)return{...n,alive:false,bank:Math.floor(n.haul*(1+Math.min(.6,n.depth*.04)))};return n}
function projectedBank(s){return Math.floor(s.haul*(1+Math.min(.6,s.depth*.04)))}
function oneStepChoice(s,rs,slope){let best=0,bv=-Infinity;for(let i=0;i<rs.length;i++){const r=rs[i],v=immediateGain(s,r,slope)-r.cost*0.65-threatAfter(s,r)*0.055;if(v>bv){bv=v;best=i}}return best}
function futureChoice(s,rs,slope){let best=0,bv=-Infinity;for(let i=0;i<rs.length;i++){const r=rs[i],t=threatAfter(s,r),now=immediateGain(s,r,slope)-r.cost*.55-t*.05;let future=0;for(const t2 of tones){const q=templates[t2];const avg={tone:t2,cost:(q.cost[0]+q.cost[1])/2,gain:(q.gain[0]+q.gain[1])/2,risk:q.risk,signal:r.signal,anomaly:false};future=Math.max(future,immediateGain({...s,depth:s.depth+1,chain:r.tone==='res'?r.signal:s.chain,chainLen:r.tone==='res'?(s.chain===r.signal?s.chainLen+1:1):s.chainLen},avg,slope)-avg.cost*.55)}const v=now+future*.45;if(v>bv){bv=v;best=i}}return best}
function play(seed,slope,policy){const R=rng(seed);let total=0,collapsed=0,mix={calm:0,deep:0,res:0};for(let k=0;k<RUNS;k++){let s={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true};while(s.alive){const rs=routes(R);let i;if(policy.startsWith('fixed:'))i=rs.findIndex(r=>r.tone===policy.slice(6));else if(policy==='one-step')i=oneStepChoice(s,rs,slope);else i=futureChoice(s,rs,slope);mix[rs[i].tone]++;s=step(s,rs[i],R,slope);if(!s.alive){if(s.bank!=null)total+=s.bank;else collapsed++;break}if(s.haul>0&&s.threat>=55){total+=projectedBank(s);s.alive=false;break}}}const choices=mix.calm+mix.deep+mix.res;return{bankPerRun:total/RUNS,collapsePct:collapsed/RUNS*100,mix:Object.fromEntries(tones.map(t=>[t,mix[t]/choices*100]))}}
for(const slope of [2,1]){console.log(`\nresonanceSlope=${slope}${slope===2?' production':' candidate'}`);for(const seed of SEEDS){console.log(`seed=${seed}`);for(const p of ['fixed:calm','fixed:deep','fixed:res','one-step','future-aware'])console.log(p,play(seed,slope,p))}}
