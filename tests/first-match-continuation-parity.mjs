// Narrow parity guard for first-match-continuation-probe.mjs.
// The probe intentionally varies only the first matching continuation reward on the forced
// resonance branch; its production path must otherwise mirror decision-driving game rules.
import fs from 'node:fs';
const game=fs.readFileSync(new URL('../game.js',import.meta.url),'utf8');
const probe=fs.readFileSync(new URL('./first-match-continuation-probe.mjs',import.meta.url),'utf8');
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
 [/mode==='noFirstMatchBonus'&&i===0&&s\.chainLen===1&&r\.tone==='res'&&s\.chain===r\.signal/,'diagnostic isolated to first matching continuation']
])need(probe,re,label);
console.log('first-match continuation probe parity matches declared production rules');
