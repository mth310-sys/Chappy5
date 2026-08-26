// Narrow CI guard for duplicated production rules used by non-production strategy probes.
// This intentionally avoids refactoring the frozen browser playable. If a benchmark-critical
// production rule changes, CI must fail until every decision-driving probe and this parity
// declaration are reviewed together. Passing this test proves declared rule parity, not gameplay correctness.

import fs from 'node:fs';

const game=fs.readFileSync(new URL('../game.js',import.meta.url),'utf8');
const bench=fs.readFileSync(new URL('./strategy-benchmark.mjs',import.meta.url),'utf8');
const switchProbe=fs.readFileSync(new URL('./active-chain-switch-probe.mjs',import.meta.url),'utf8');
const branchProbe=fs.readFileSync(new URL('./active-chain-branch-probe.mjs',import.meta.url),'utf8');
const highChainProbe=fs.readFileSync(new URL('./high-chain-probe.mjs',import.meta.url),'utf8');
const chainExitProbe=fs.readFileSync(new URL('./chain-exit-rule-probe.mjs',import.meta.url),'utf8');
const renewalProbe=fs.readFileSync(new URL('./resonance-renewal-probe.mjs',import.meta.url),'utf8');

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
 [/const roll=R\(\)/,'benchmark consumes common chain-exit RNG draw'],
 [/return roll<\.5/,'benchmark production non-resonance chain break path'],
 [/exitMode==='signal'/,'benchmark structural candidate isolated from production path'],
];

const sharedProbeChecks=[
 [/calm:\{cost:\[1,2\],gain:\[1,3\],risk:-3\}/,'calm template'],
 [/deep:\{cost:\[2,3\],gain:\[3,6\],risk:3\}/,'deep template'],
 [/res:\{cost:\[1,3\],gain:\[2,4\],risk:0\}/,'resonance template'],
 [/anomaly:R\(\)<\.18/,'anomaly probability 0.18'],
 [/return 2\+Math\.floor\(d\/2\)\+Math\.max\(0,d-2\)\*2/,'anomaly reward curve'],
 [/s\.threat>=25\?-8:0/,'calm recovery threshold/effect'],
 [/s\.threat\+r\.risk\+\(s\.depth\+1\)\*1\.4\+\(r\.anomaly\?7:0\)\+calm,0,92/,'threat formula/cap'],
 [/Math\.min\(n\.energy,r\.cost\)/,'partial energy payment'],
 [/1\+Math\.min\(\.6,depth\*\.04\)/,'extraction multiplier'],
 [/return chainLen<2\?0:1\+chainLen\*2/,'production resonance reward'],
];

const chainExitChecks=[
 [/calm:\{cost:\[1,2\],gain:\[1,3\],risk:-3\}/,'calm template'],
 [/deep:\{cost:\[2,3\],gain:\[3,6\],risk:3\}/,'deep template'],
 [/res:\{cost:\[1,3\],gain:\[2,4\],risk:0\}/,'resonance template'],
 [/anomaly:R\(\)<\.18/,'anomaly probability 0.18'],
 [/const anomalyBonus=d=>2\+Math\.floor\(d\/2\)\+Math\.max\(0,d-2\)\*2/,'anomaly reward curve'],
 [/r\.tone==='calm'&&s\.threat>=25\?-8:0/,'calm recovery threshold/effect'],
 [/s\.threat\+r\.risk\+\(s\.depth\+1\)\*1\.4\+\(r\.anomaly\?7:0\)\+\(r\.tone==='calm'&&s\.threat>=25\?-8:0\),0,92/,'threat formula/cap'],
 [/Math\.min\(n\.energy,r\.cost\)/,'partial energy payment'],
 [/1\+Math\.min\(\.6,depth\*\.04\)/,'extraction multiplier'],
 [/const resBonus=n=>n<2\?0:1\+n\*2/,'production resonance reward'],
 [/mode==='hidden50'\)shouldBreak=breakU<\.5/,'production hidden chain-break path'],
 [/mode==='preserve'\)shouldBreak=false/,'diagnostic no-loss candidate isolated from production path'],
];

const renewalChecks=[
 [/const tpl=\{calm:\{cost:\[1,2\],gain:\[1,3\],risk:-3\},deep:\{cost:\[2,3\],gain:\[3,6\],risk:3\},res:\{cost:\[1,3\],gain:\[2,4\],risk:0\}\}/,'route templates'],
 [/anomaly:R\(\)<\.18/,'anomaly probability 0.18'],
 [/const anomalyBonus=d=>2\+Math\.floor\(d\/2\)\+Math\.max\(0,d-2\)\*2/,'anomaly reward curve'],
 [/r\.tone==='calm'&&s\.threat>=25\?-8:0/,'calm recovery threshold/effect'],
 [/s\.threat\+r\.risk\+\(s\.depth\+1\)\*1\.4\+\(r\.anomaly\?7:0\)\+\(r\.tone==='calm'&&s\.threat>=25\?-8:0\),0,92/,'threat formula/cap'],
 [/Math\.min\(n\.energy,r\.cost\)/,'partial energy payment'],
 [/1\+Math\.min\(\.6,depth\*\.04\)/,'extraction multiplier'],
 [/const resBonus=n=>n<2\?0:1\+n\*2/,'production resonance reward'],
 [/else if\(n\.chain&&breakU<\.5\)/,'production non-resonance chain break'],
 [/else if\(mode==='production'\)\{n\.chain=r\.signal;n\.chainLen=1\}/,'production mismatch renewal'],
 [/else if\(mode==='noRenew'\)\{/,'diagnostic mismatch no-renew isolated'],
];

for(const [re,label] of productionChecks)requireMatch(game,re,label);
for(const [re,label] of benchmarkChecks)requireMatch(bench,re,label);
for(const [name,source] of [['active-chain-switch',switchProbe],['active-chain-branch',branchProbe]]){
 for(const [re,label] of sharedProbeChecks)requireMatch(source,re,`${name} ${label}`);
}

// high-chain-probe intentionally contains non-production reward/exit candidates, but its
// production mode must still retain the same core economy and explicit production slope.
for(const [re,label] of sharedProbeChecks.slice(0,9))requireMatch(highChainProbe,re,`high-chain ${label}`);
requireMatch(highChainProbe,/if\(mode==='production'\)return 1\+chainLen\*2/, 'high-chain production resonance reward');

// chain-exit-rule-probe intentionally varies only non-resonance chain exit semantics.
// Its production mode must preserve the same economy/reward/break path as game.js.
for(const [re,label] of chainExitChecks)requireMatch(chainExitProbe,re,`chain-exit ${label}`);

// resonance-renewal-probe intentionally varies only mismatch renewal semantics.
// Its production mode must preserve the same economy, break path and mismatch restart as game.js.
for(const [re,label] of renewalChecks)requireMatch(renewalProbe,re,`renewal ${label}`);

console.log('strategy parity declarations match current production and decision-driving probes');
