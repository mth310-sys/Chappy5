// Deterministic non-production full-run benchmark for one structural first-match candidate.
// SIMULATED only. production mirrors current resonance behavior. pairCashout keeps the
// first matching +5 reward beat, then closes that matched chain instead of automatically
// carrying chainLen=2 into later decisions. No reward coefficient is swept.
const SEEDS=[101,202,303,404], RUNS=10000;
const tones=['calm','deep','res'];
const policies=['fixed:calm','fixed:deep','fixed:res','one-step','future-aware'];
const modes=['production','pairCashout'];
const tpl={calm:{cost:[1,2],gain:[1,3],risk:-3},deep:{cost:[2,3],gain:[3,6],risk:3},res:{cost:[1,3],gain:[2,4],risk:0}};
function rng(seed){let x=seed>>>0;return()=>{x=(Math.imul(1664525,x)+1013904223)>>>0;return x/4294967296}}
function mix(a,b,c=0){let x=(a^Math.imul(b+1,0x9e3779b9)^Math.imul(c+1,0x85ebca6b))>>>0;x^=x>>>16;x=Math.imul(x,0x7feb352d);x^=x>>>15;x=Math.imul(x,0x846ca68b);x^=x>>>16;return x>>>0}
const ri=(R,a,b)=>Math.floor(R()*(b-a+1))+a, pick=(R,a)=>a[Math.floor(R()*a.length)], clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function routes(R){const o=[...tones];for(let i=2;i>0;i--){const j=ri(R,0,i);[o[i],o[j]]=[o[j],o[i]]}return o.map(t=>{const q=tpl[t];return{tone:t,cost:ri(R,...q.cost),gain:ri(R,...q.gain),risk:q.risk,signal:pick(R,['A','B','C']),anomaly:R()<.18}})}
const anomalyBonus=d=>2+Math.floor(d/2)+Math.max(0,d-2)*2;
function threatAfter(s,r){return clamp(s.threat+r.risk+(s.depth+1)*1.4+(r.anomaly?7:0)+(r.tone==='calm'&&s.threat>=25?-8:0),0,92)}
const resBonus=n=>n<2?0:1+n*2, bank=(haul,depth)=>Math.floor(haul*(1+Math.min(.6,depth*.04)));
function immediate(s,r){let g=r.gain;if(r.tone==='res'&&s.chain===r.signal)g+=resBonus(s.chainLen+1);if(r.anomaly)g+=anomalyBonus(s.depth+1);return g}
function previewState(s,r,mode){const n={...s,depth:s.depth+1,haul:s.haul+immediate(s,r),threat:threatAfter(s,r)};if(r.tone==='res'){if(s.chain===r.signal){if(mode==='pairCashout'&&s.chainLen===1){n.chain=null;n.chainLen=0}else{n.chain=r.signal;n.chainLen=s.chainLen+1}}else{n.chain=r.signal;n.chainLen=1}}return n}
const oneEV=(s,r)=>(1-threatAfter(s,r)/100)*bank(s.haul+immediate(s,r),s.depth+1);
function choose(policy,s,rs,mode){if(policy.startsWith('fixed:'))return rs.find(r=>r.tone===policy.slice(6));if(policy==='one-step')return rs.reduce((a,b)=>oneEV(s,b)>oneEV(s,a)?b:a);let best=rs[0],bv=-Infinity;for(const r of rs){const now=oneEV(s,r),p=previewState(s,r,mode);let future=-Infinity;for(const t of tones){const q=tpl[t],avg={tone:t,cost:(q.cost[0]+q.cost[1])/2,gain:(q.gain[0]+q.gain[1])/2,risk:q.risk,signal:r.signal,anomaly:false};future=Math.max(future,oneEV(p,avg))}const v=now+.45*future;if(v>bv){bv=v;best=r}}return best}
function shouldExtract(s,r){return s.haul>0&&bank(s.haul,s.depth)>=oneEV(s,r)}
function step(s,r,R,mode){const n={...s};n.energy-=Math.min(n.energy,r.cost);n.depth++;let g=r.gain;if(r.tone==='res'){if(n.chain===r.signal){n.chainLen++;g+=resBonus(n.chainLen);if(mode==='pairCashout'&&n.chainLen===2){n.chain=null;n.chainLen=0}}else{n.chain=r.signal;n.chainLen=1}}else if(n.chain&&R()<.5){n.chain=null;n.chainLen=0}if(r.anomaly)g+=anomalyBonus(n.depth);n.haul+=g;n.threat=threatAfter(s,r);if(R()<n.threat/100)return{...n,alive:false,collapsed:true,haul:0};if(n.energy<=0)return{...n,alive:false,collapsed:false};return{...n,alive:true,collapsed:false}}
function play(seed,policy,mode){let total=0,collapsed=0,voluntary=0,forced=0,totalDepth=0,mix={calm:0,deep:0,res:0};for(let k=0;k<RUNS;k++){const R=rng(mixSeed(seed,k));let s={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true,collapsed:false};while(s.alive){const rs=routes(R),r=choose(policy,s,rs,mode);if(shouldExtract(s,r)){total+=bank(s.haul,s.depth);voluntary++;totalDepth+=s.depth;break}mix[r.tone]++;s=step(s,r,R,mode);if(!s.alive){totalDepth+=s.depth;if(s.collapsed)collapsed++;else{total+=bank(s.haul,s.depth);forced++}}}}const choices=mix.calm+mix.deep+mix.res;return{bankPerRun:total/RUNS,collapsePct:collapsed/RUNS*100,voluntaryPct:voluntary/RUNS*100,forcedPct:forced/RUNS*100,meanEndDepth:totalDepth/RUNS,mix:Object.fromEntries(tones.map(t=>[t,mix[t]/choices*100]))}}
function mixSeed(seed,k){return mix(seed,k,777)}
function aggregate(policy,mode){const rows=SEEDS.map(seed=>play(seed,policy,mode)),avg=k=>rows.reduce((a,r)=>a+r[k],0)/rows.length;return{mode,policy,bankPerRun:avg('bankPerRun'),collapsePct:avg('collapsePct'),voluntaryPct:avg('voluntaryPct'),forcedPct:avg('forcedPct'),meanEndDepth:avg('meanEndDepth'),mix:Object.fromEntries(tones.map(t=>[t,rows.reduce((a,r)=>a+r.mix[t],0)/rows.length])),seeds:rows.map((r,i)=>({seed:SEEDS[i],bankPerRun:r.bankPerRun,collapsePct:r.collapsePct}))}}
const out={};for(const mode of modes){out[mode]={};for(const p of policies)out[mode][p]=aggregate(p,mode)}
console.log(JSON.stringify(out,null,2));
