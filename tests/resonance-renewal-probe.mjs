// Deterministic non-production causal probe for resonance mismatch renewal value.
// SIMULATED only. Compare production resonance mismatch semantics (replace active chain
// with the offered new signal at chainLen=1) against a diagnostic no-renew mode that
// leaves the existing chain and chainLen unchanged on resonance mismatch.
// Initial chain creation from a null chain remains identical to production in both modes.
// State sampling always follows production resonance semantics; only the forced branch
// comparison varies, so both modes are evaluated from the exact same sampled states.
// Rewards, Threat, costs, extraction, route generation, non-resonance 50% chain-break,
// collapse rolls and common exogenous random tapes are otherwise unchanged.
// Matching-signal states are also split into chainLen=1 and chainLen>=2 so Executive can
// isolate whether first continuation or mature-chain compounding drives stickiness.
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
function step(s,r,breakU,collapseU,mode){const n={...s};n.energy-=Math.min(n.energy,r.cost);n.depth++;let g=r.gain;if(r.tone==='res'){
  if(n.chain===r.signal){n.chainLen++;g+=resBonus(n.chainLen)}
  else if(!n.chain){n.chain=r.signal;n.chainLen=1}
  else if(mode==='production'){n.chain=r.signal;n.chainLen=1}
  else if(mode==='noRenew'){/* diagnostic: keep old active chain unchanged on mismatch */}
  else throw new Error(`unknown mode ${mode}`);
}else if(n.chain&&breakU<.5){n.chain=null;n.chainLen=0}
if(r.anomaly)g+=anomalyBonus(n.depth);n.haul+=g;n.threat=threatAfter(s,r);if(collapseU<n.threat/100)return{...n,alive:false,collapsed:true,haul:0};if(n.energy<=0)return{...n,alive:false,collapsed:false};return{...n,alive:true,collapsed:false}}
function tape(base,h){const a=[];for(let i=0;i<h;i++){const rr=rng(mix(base,i,11)),or=rng(mix(base,i,29));a.push({rs:routes(rr),breakU:or(),collapseU:or()})}return a}
function branch(start,first,t,h,mode){let s={...start,alive:true,collapsed:false};for(let i=0;i<h;i++){const e=t[i],r=i?policy(s,e.rs):first;if(i&&extract(s,r))return bank(s.haul,s.depth);s=step(s,r,e.breakU,e.collapseU,mode);if(!s.alive)return s.collapsed?0:bank(s.haul,s.depth)}return bank(s.haul,s.depth)}
const buckets=()=>({2:{sw:0,res:0,tie:0,d:0},3:{sw:0,res:0,tie:0,d:0}});
function stats(){return{samples:0,mismatchSamples:0,matchSamples:0,matchLen1Samples:0,matchLen2PlusSamples:0,h:buckets(),mismatch:{h:buckets()},match:{h:buckets()},matchLen1:{h:buckets()},matchLen2Plus:{h:buckets()}}}
function add(bucket,h,d){if(d>0)bucket[h].sw++;else if(d<0)bucket[h].res++;else bucket[h].tie++;bucket[h].d+=d}
function sample(seed,mode){const o=stats();for(let k=0;k<RUNS;k++){const R=rng(mix(seed,k));let s={energy:10,depth:0,haul:0,threat:6,chain:null,chainLen:0,alive:true,collapsed:false},visit=0;while(s.alive){const rs=routes(R),res=rs.find(x=>x.tone==='res');if(s.chain){o.samples++;visit++;const non=rs.filter(x=>x.tone!=='res').sort((a,b)=>oneEV(s,b)-oneEV(s,a))[0];const mismatch=res.signal!==s.chain,match=!mismatch,matchLen1=match&&s.chainLen===1,matchLen2Plus=match&&s.chainLen>=2;if(mismatch)o.mismatchSamples++;if(match)o.matchSamples++;if(matchLen1)o.matchLen1Samples++;if(matchLen2Plus)o.matchLen2PlusSamples++;for(const h of H){const t=tape(mix(seed,k,visit*17+h),h),rv=branch(s,res,t,h,mode),nv=branch(s,non,t,h,mode),d=nv-rv;add(o.h,h,d);if(mismatch)add(o.mismatch.h,h,d);if(match)add(o.match.h,h,d);if(matchLen1)add(o.matchLen1.h,h,d);if(matchLen2Plus)add(o.matchLen2Plus.h,h,d)}}if(extract(s,res))break;s=step(s,res,R(),R(),'production')}}return o}
function merge(rows){const o=stats();for(const r of rows){for(const k of ['samples','mismatchSamples','matchSamples','matchLen1Samples','matchLen2PlusSamples'])o[k]+=r[k];for(const h of H){for(const k of ['sw','res','tie','d']){o.h[h][k]+=r.h[h][k];o.mismatch.h[h][k]+=r.mismatch.h[h][k];o.match.h[h][k]+=r.match.h[h][k];o.matchLen1.h[h][k]+=r.matchLen1.h[h][k];o.matchLen2Plus.h[h][k]+=r.matchLen2Plus.h[h][k]}}}return o}
const pct=(a,b)=>b?100*a/b:0;
function summary(hb,n){return Object.fromEntries(H.map(h=>[h,{switchWinsPct:pct(hb[h].sw,n),resonanceWinsPct:pct(hb[h].res,n),tiePct:pct(hb[h].tie,n),meanSwitchMinusResBank:n?hb[h].d/n:0}]))}
function report(mode){const s=merge(SEEDS.map(x=>sample(x,mode)));return{mode,activeChainSamples:s.samples,mismatchSamples:s.mismatchSamples,mismatchPct:pct(s.mismatchSamples,s.samples),matchSamples:s.matchSamples,matchPct:pct(s.matchSamples,s.samples),matchLen1Samples:s.matchLen1Samples,matchLen2PlusSamples:s.matchLen2PlusSamples,all:summary(s.h,s.samples),mismatch:summary(s.mismatch.h,s.mismatchSamples),match:summary(s.match.h,s.matchSamples),matchLen1:summary(s.matchLen1.h,s.matchLen1Samples),matchLen2Plus:summary(s.matchLen2Plus.h,s.matchLen2PlusSamples)}}
function delta(a,b,key){return Object.fromEntries(H.map(h=>[h,{switchWinsPct:a[key][h].switchWinsPct-b[key][h].switchWinsPct,resonanceWinsPct:a[key][h].resonanceWinsPct-b[key][h].resonanceWinsPct,meanSwitchMinusResBank:a[key][h].meanSwitchMinusResBank-b[key][h].meanSwitchMinusResBank}]))}
const production=report('production'),noRenew=report('noRenew');
console.log({production,noRenew,deltaNoRenewVsProduction:{all:delta(noRenew,production,'all'),mismatch:delta(noRenew,production,'mismatch'),match:delta(noRenew,production,'match'),matchLen1:delta(noRenew,production,'matchLen1'),matchLen2Plus:delta(noRenew,production,'matchLen2Plus')}});
