// Narrow CI guard for the duplicated production model used by strategy-benchmark.mjs.
// This intentionally avoids refactoring the frozen browser playable. If a benchmark-critical
// production rule changes, CI must fail until the benchmark and this parity declaration are
// reviewed together. Passing this test proves declared rule parity, not gameplay correctness.

import fs from 'node:fs';

const game=fs.readFileSync(new URL('../game.js',import.meta.url),'utf8');
const bench=fs.readFileSync(new URL('./strategy-benchmark.mjs',import.meta.url),'utf8');

function requireMatch(source,re,label){
 if(!re.test(source))throw new Error(`strategy parity mismatch: ${label}`);
}

const productionChecks=[
 [/tone:'calm',cost:\[1,2\],gain:\[1,3\],risk:-3/,'calm template'],
 [/tone:'deep',cost:\[2,3\],gain:\[3,6\],risk:3/,'deep template'],
 [/tone:'res',cost:\[1,3\],gain:\[2,4\],risk:0/,'resonance template'],
 [/Math\.random\(\)<0\.18/,'anomaly probability 0.18'],
 [/return 2\+Math\.floor\(nextDepth\/2\)\+Math\.max\(0,nextDepth-2\)\*2/,'anomaly reward curve'],
 [/r\.tone==='calm'&&run\.threat>=25\?-8:0/,'calm recovery threshold/effect'],
 [/clamp\(run\.threat\+r\.risk\+nextDepth\*1\.4\+\(r\.anomaly\?7:0\)\+calmRecoveryFor\(r\),0,92\)/,'threat formula/cap'],
 [/Math\.min\(run\.energy,r\.cost\)/,'partial energy payment'],
 [/1\+Math\.min\(\.6,run\.depth\*\.04\)/,'extraction multiplier'],
 [/gain\+=1\+run\.chainLen\*2/,'production resonance slope'],
 [/else if\(Math\.random\(\)<\.5\)/,'non-resonance chain break'],
];

const benchmarkChecks=[
 [/calm:\{cost:\[1,2\],gain:\[1,3\],risk:-3\}/,'benchmark calm template'],
 [/deep:\{cost:\[2,3\],gain:\[3,6\],risk:3\}/,'benchmark deep template'],
 [/res:\{cost:\[1,3\],gain:\[2,4\],risk:0\}/,'benchmark resonance template'],
 [/anomaly:R\(\)<\.18/,'benchmark anomaly probability 0.18'],
 [/return 2\+Math\.floor\(d\/2\)\+Math\.max\(0,d-2\)\*2/,'benchmark anomaly reward curve'],
 [/s\.threat>=25\?-8:0/,'benchmark calm recovery threshold/effect'],
 [/s\.threat\+r\.risk\+\(s\.depth\+1\)\*1\.4\+\(r\.anomaly\?7:0\)\+calm,0,92/,'benchmark threat formula/cap'],
 [/Math\.min\(n\.energy,r\.cost\)/,'benchmark partial energy payment'],
 [/1\+Math\.min\(\.6,depth\*\.04\)/,'benchmark extraction multiplier'],
 [/const resonanceSlopes=\[[^\]]*\b2\b[^\]]*\]/,'benchmark includes production slope 2'],
 [/else if\(R\(\)<\.5\)/,'benchmark non-resonance chain break'],
];

for(const [re,label] of productionChecks)requireMatch(game,re,label);
for(const [re,label] of benchmarkChecks)requireMatch(bench,re,label);

console.log('strategy parity declarations match current production and benchmark rules');
