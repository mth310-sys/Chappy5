// Narrow parity guard for first-match continuation diagnostics and structural benchmark.
// Production paths must mirror current decision-driving rules; candidate branches may vary only
// the declared first-match reward/state boundary.
import fs from 'node:fs';
const game=fs.readFileSync(new URL('../game.js',import.meta.url),'utf8');
const probe=fs.readFileSync(new URL('./first-match-continuation-probe.mjs',import.meta.url),'utf8');
const structural=fs.readFileSync(new URL('./first-match-structural-benchmark.mjs',import.meta.url),'utf8');
const need=(src,re,label)=>{if(!re.test(src))throw new Error(`first-match parity mismatch: ${label}`)};
for(const [re,label] of [
 [/tone:'calm',cost:\[1,2\],gain:\[1,3\],risk:-3/,'production calm template'],
 [/tone:'deep',cost:\[2,3\],gain:\[3,6\],risk:3/,'production deep template'],
 [/tone:'res',cost:\[1,3\],gain:\[2,4\],risk:0/,'production resonance template'],
 [/Math\.random\(\)<0\.18/,'production anomaly probability'],
 [/gain\+=1\+run\.chainLen\*2/,'production resonance reward'],
 [/else if\(Math\.random\(\)<\.5\)/,'production chain-break path']
])need(game,re,label);
for(const [re,label] of [
 [/const tpl=\{calm:\{cost:\[1,2\],gain:\[1,3\],risk:-3\},deep:\{cost:\[2,3\],gain:\[3,6\],risk:3\},res:\{cost:\[1,3\],gain:\[2,4\],risk:0\}\}/,'probe route templates'],
 [/anomaly:R\(\)<\.18/,'probe anomaly probability'],
 [/const anomalyBonus=d=>2\+Math\.floor\(d\/2\)\+Math\.max\(0,d-2\)\*2/,'probe anomaly curve'],
 [/r\.tone==='calm'&&s\.threat>=25\?-8:0/,'probe calm recovery'],
 [/Math\.min\(n\.energy,r\.cost\)/,'probe partial energy payment'],
 [/1\+Math\.min\(\.6,depth\*\.04\)/,'probe extraction multiplier'],
 [/const resBonus=n=>n<2\?0:1\+n\*2/,'probe production resonance reward'],
 [/else if\(n\.chain&&breakU<\.5\)/,'probe production chain break'],
 [/mode==='firstMatchBonus3'\)return 3/,'single coarse +3 candidate'],
 [/mode==='noFirstMatchBonus'\|\|mode==='noFirstMatchBonusNormalized'\)return 0/,'zero-bonus diagnostic bound'],
 [/mode==='noFirstMatchBonusNormalized'&&i===0&&s\.chainLen===1&&r\.tone==='res'&&s\.chain===r\.signal/,'maturity normalization limited to first matching continuation']
])need(probe,re,label);
for(const [re,label] of [
 [/const modes=\['production','pairCashout'\]/,'single structural candidate only'],
 [/anomaly:R\(\)<\.18/,'structural anomaly probability'],
 [/const resBonus=n=>n<2\?0:1\+n\*2/,'structural production reward'],
 [/Math\.min\(n\.energy,r\.cost\)/,'structural partial energy payment'],
 [/1\+Math\.min\(\.6,depth\*\.04\)/,'structural extraction multiplier'],
 [/else if\(n\.chain&&R\(\)<\.5\)/,'structural production chain-break path'],
 [/mode==='pairCashout'&&n\.chainLen===2/,'candidate isolated to first matched pair completion'],
 [/n\.chain=null;n\.chainLen=0/,'candidate closes chain after preserving +5 beat']
])need(structural,re,label);
const cohortMatch=structural.match(/const BASE_SEEDS=\[([^\]]+)\], HELDOUT_SEEDS=\[([^\]]+)\], RUNS=(\d+);/);
if(!cohortMatch)throw new Error('first-match parity mismatch: structural base/held-out cohort declaration');
const parseSeeds=s=>s.split(',').map(v=>Number(v.trim()));
const baseSeeds=parseSeeds(cohortMatch[1]),heldoutSeeds=parseSeeds(cohortMatch[2]);
if(!baseSeeds.length||!heldoutSeeds.length)throw new Error('first-match parity mismatch: robustness cohorts must be non-empty');
if(baseSeeds.length!==heldoutSeeds.length)throw new Error('first-match parity mismatch: robustness cohorts must remain equally sized');
if(baseSeeds.some(seed=>heldoutSeeds.includes(seed)))throw new Error('first-match parity mismatch: held-out seeds overlap base cohort');
console.log('first-match continuation and structural benchmark parity match declared production rules');
