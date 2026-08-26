// Deterministic non-production causal probe for the FIRST matching resonance continuation.
// SIMULATED only. Sample production active-chain states, keep only chainLen=1 states where
// the offered resonance signal matches the active chain, then compare:
//   production: first forced resonance step receives the normal +5 continuation bonus
//   firstMatchBonus3: ONLY that first forced step receives +3 instead of +5
//   noFirstMatchBonus: ONLY that first forced step receives +0 instead of +5 (diagnostic bound)
//   noFirstMatchBonusNormalized: same +0 bound, but after the first matching step only,
//     preserve the signal while carrying chainLen=1 instead of chainLen=2 into later decisions.
// All later steps, costs, Threat, anomalies, extraction, chain-break semantics,
// collapse rolls and common exogenous random tapes remain production-equivalent.
const SEEDS=[101,202,303,404], RUNS=10000, H=[2,3], tones=['calm','deep','res'];
const tpl={calm:{cost:[1,2],gain:[1,3],risk:-3},deep:{cost:[2,3],gain:[3,6],risk:3},res:{cost:[1,3],gain:[2,4],risk:0}};
function rng(seed){let x=seed>>>0;return()=>{x=(Math.imul(1664525,x)+1013904223)>>>0;return x/4294967296}}
function mix(a,b,c=0){let x=(a^Math.imul(b+1,0x9e3779b9)^Math.imul(c+1,0x85ebca6b))>>>0;x^=x>>>16;x=Math.imul(x,0x7feb352d);x^=x>>>15;x=Math.imul(x,0x846ca68b);x^=x>>>16;return x>>>0}
const ri=(R,a,b)=>Math.floor(R()*(b-a+1))+a, pick=(R,a)=>a[Math.floor(R()*a.length)], clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function routes(R){const o=[...tones];for(let i=2;i>0;i--){const j=ri(R,0,i);[o[i],o[j]]=[o[j],o[i]]}return o.map(t=>{const q=tpl[t];return{tone:t,cost:ri(R,...q.cost),gain:ri(R,...q.gain),risk:q.risk,signal:pick(R,['A','B','C']),anomaly:R()<.18}})}
const anomalyBonus=d=>2+Math.floor(d/2)+Math.max(0,d-2)*2;
function threatAfter(s,r){return clamp(s.threat+r.risk+(s.depth+1)*1.4+(r.anomaly?7:0)+(r.tone==='calm'&&s.threat>=25?-8:0),0,92)}
const resBonus=n=>n<2?0:1+n*2, bank=(haul,depth)=>Math.floor(haul*(1+Math.min(.6,depth*.04)));
function immediate(s,r){let g=r.gain;if(r.tone==='res'&&s.chain===r.signal)g+=resBonus(s.chainLen+1);if(r.anomaly)g+=anomalyBonus(s.depth+1);return g}
const oneEV=(s,r)=>(1-threatAfter(s,r)/100)*bank(s.haul+immediate(s,r),s.depth+1);
const extract=(s,r)=>s.haul>0&&bank(s.haul,s.depth)>=oneEV(s,r);
function policy(s,rs){let best=rs[0],v=-Infinity;for(const r of rs){let x=oneEV(s,r);if(s.chain&&r.tone==='res')x+=resBonus((s.chain===r.signal?s.chainLen+1:1)+1)/3;else if(s.chain)x+=resBonus(s.chainLen+1)/6;if(x>v){v=x;best=r}}return best}
function step(s,r,breakU,collapseU,firstMatchBonusOverride=null){const n={...s};n.energy-=Math.min(n.energy,r.cost);n.depth++;let g=r.gain;if(r.tone==='res'){
 if(n.chain===r.signal){n.chainLen++;g+=firstMatchBonusOverride===null?resBonus(n.chainLen):firstMatchBonusOverride}
 else{n.chain=r.signal;n.chainLen=1}
}else if(n.chain&&breakU<.5){n.chain=null;n.chainLen=0}
if(r.anomaly)g+=anomalyBonus(n.depth);n.haul+=g;n.threat=threatAfter(s,r);if(collapseU<n.threat/100)return{...n,alive:false,collapsed:true,haul:0};if(n.energy<=0)return{...n,alive:false,collapsed:false};return{...n,alive:true,collapsed:false}}
function tape(base,h){const a=[];for(let i=0;i<h;i++){const rr=rng(mix(base,i,11)),or=rng(mix(base,i,29));a.push({rs:routes(rr),breakU:or(),collapseU:or()})}return a}
function firstMatchOverride(mode,i,s,r){if(i!==0||s.chainLen!==1||r.tone!=='res'||s.chain!==r.signal)return null;if(mode==='firstMatchBonus3')return 3;if(mode==='noFirstMatchBonus'||mode==='noFirstMatchBonusNormalized')return 0;return null}
function shouldNormalizeFirstMatch(mode,i,s,r){return mode==='noFirstMatchBonusNormalized'&&i===0&&s.chainLen===1&&r.tone==='res'&&s.chain===r.signal}
function branch(start,first,t,h,mode){let s={...start,alive:true,collapsed:false};for(let i=0;i<h;i++){const e=t[i],r=i?policy(s,e.rs):first;if(i&&extract(s,r))return bank(s.haul,s.depth);const normalize=shouldNormalizeFirstMatch(mode,i,s,r);s=step(s,r,e.breakU,e.collapseU,firstMatchOverride(mode,i,s,r));if(normalize&&s.chain===r.signal&&s.chainLen===2)s.chainLen=1;if(!s.alive)return s.collapsed?0:bank(s.haul,s.depth)}return bank(s.haul,s.depth)}
const buckets=()=>({2:{sw:0,res:0,tie:0,d:0},3:{sw:0,res:0,tie:0,d:0}});
function sample(seed,mode){const o={samples:0,h:buckets()};for(let k=0;k<RUNS;k++){const R=rng(mix(seed,k));let s={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true,collapsed:false},visit=0;while(s.alive){const rs=routes(R),res=rs.find(x=>x.tone==='res');if(s.chain&&s.chainLen===1&&res.signal===s.chain){o.samples++;visit++;const non=rs.filter(x=>x.tone!=='res').sort((a,b)=>oneEV(s,b)-oneEV(s,a))[0];for(const h of H){const t=tape(mix(seed,k,visit*17+h),h),rv=branch(s,res,t,h,mode),nv=branch(s,non,t,h,mode),d=nv-rv,b=o.h[h];if(d>0)b.sw++;else if(d<0)b.res++;else b.tie++;b.d+=d}}if(extract(s,res))break;s=step(s,res,R(),R(),null)}}return o}
function merge(rows){const o={samples:0,h:buckets()};for(const r of rows){o.samples+=r.samples;for(const h of H)for(const k of ['sw','res','tie','d'])o.h[h][k]+=r.h[h][k]}return o}
const pct=(a,b)=>b?100*a/b:0;
function report(mode){const s=merge(SEEDS.map(x=>sample(x,mode)));return{mode,samples:s.samples,h:Object.fromEntries(H.map(h=>[h,{switchWinsPct:pct(s.h[h].sw,s.samples),resonanceWinsPct:pct(s.h[h].res,s.samples),tiePct:pct(s.h[h].tie,s.samples),meanSwitchMinusResBank:s.h[h].d/s.samples}]))}}
function delta(a,b){return Object.fromEntries(H.map(h=>[h,{switchWinsPct:a.h[h].switchWinsPct-b.h[h].switchWinsPct,resonanceWinsPct:a.h[h].resonanceWinsPct-b.h[h].resonanceWinsPct,meanSwitchMinusResBank:a.h[h].meanSwitchMinusResBank-b.h[h].meanSwitchMinusResBank}]))}
const production=report('production'),firstMatchBonus3=report('firstMatchBonus3'),noFirstMatchBonus=report('noFirstMatchBonus'),noFirstMatchBonusNormalized=report('noFirstMatchBonusNormalized');
console.log({production,firstMatchBonus3,noFirstMatchBonus,noFirstMatchBonusNormalized,deltaBonus3VsProduction:delta(firstMatchBonus3,production),deltaNoFirstMatchBonusVsProduction:delta(noFirstMatchBonus,production),deltaNormalizedVsZeroBonus:delta(noFirstMatchBonusNormalized,noFirstMatchBonus),deltaNormalizedVsProduction:delta(noFirstMatchBonusNormalized,production)});
