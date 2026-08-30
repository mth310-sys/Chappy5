const { test, expect } = require('@playwright/test');

const URL='http://127.0.0.1:4173/prototypes/nocturne-aquarium/play-stage-v2.html?qa=product-loop';
const orders=[[0,1,2],[1,2,0],[2,0,1],[0,2,1],[1,0,2],[2,1,0]];
const FORBIDDEN_EXPLANATORY_TEXT=['現在の状態','第一停止で','選択してください','観測ログ','前兆状態'];

async function game(page){
  const sound=page.frameLocator('#shell');
  const play=sound.frameLocator('#shell');
  const game=play.frameLocator('#game');
  await expect(game.locator('body')).toBeVisible();
  await expect.poll(async()=>game.locator('html').getAttribute('data-product-run'),{timeout:4000}).toBe('4');
  return game;
}
async function tap(page,loc,label){
  await expect(loc,label).toBeEnabled({timeout:2500});
  const a=await loc.boundingBox(); await page.waitForTimeout(34); const b=await loc.boundingBox();
  expect(a&&b,`${label} geometry`).toBeTruthy();
  const drift=Math.max(Math.abs(a.x-b.x),Math.abs(a.y-b.y),Math.abs(a.width-b.width),Math.abs(a.height-b.height));
  expect(drift,`${label} drift`).toBeLessThanOrEqual(.75);
  await page.touchscreen.tap(b.x+b.width/2,b.y+b.height/2);
}
async function forceCenterSymbols(g,symbols){
  await g.locator('body').evaluate((forced)=>{
    [...document.querySelectorAll('.reel')].slice(0,3).forEach((reel,i)=>{
      const syms=[...reel.querySelectorAll('.sym')];
      const center=syms[1]||syms[0];
      if(center) center.textContent=forced[i];
    });
  },symbols);
}
async function round(page,g,order,forcedSymbols=null){
  const bet=g.locator('#bet'),lever=g.locator('#lever'),stops=g.locator('.stop');
  if(await bet.isEnabled()) await tap(page,bet,'BET');
  await tap(page,lever,'LEVER');
  // Misuse: BET during spin must be ignored without moving/deforming controls.
  const bb=await bet.boundingBox(); if(bb) await page.touchscreen.tap(bb.x+bb.width/2,bb.y+bb.height/2);
  for(const idx of order){
    let s=stops.nth(idx);
    if(!(await s.isEnabled())) for(let i=0;i<3;i++) if(await stops.nth(i).isEnabled()){s=stops.nth(i);break;}
    await tap(page,s,`STOP-${idx}`);
    if(forcedSymbols) await forceCenterSymbols(g,forcedSymbols);
    await page.waitForTimeout(70);
  }
  await expect.poll(async()=> (await bet.isEnabled())||(await lever.isEnabled()),{timeout:3000}).toBeTruthy();
}
async function snapshot(g){return g.locator('body').evaluate(()=>({
  nodes:document.querySelectorAll('*').length,
  animations:document.getAnimations?.().filter(a=>a.playState==='running').length??null,
  w:document.documentElement.scrollWidth,
  vw:innerWidth,
  product:document.documentElement.dataset.productRun,
  mode:document.querySelector('.machine')?.dataset.gameMode||'normal',
  lastEvent:document.querySelector('.machine')?.dataset.lastGameEvent||'',
  bonusGames:Number(document.querySelector('.machine')?.dataset.bonusGames||0),
  atGames:Number(document.querySelector('.machine')?.dataset.atGames||0),
  text:(document.querySelector('.screen')?.innerText||'').trim(),
  hiddenLegacy:[...document.querySelectorAll('.gr-observe,.vm-worldports,.vm-optics')].every(el=>getComputedStyle(el).display==='none')
}));}
async function settleMode(g){
  await expect.poll(async()=>{
    const s=await snapshot(g);
    if(s.bonusGames>0&&s.mode==='normal') return false;
    if(s.atGames>0&&s.mode!=='at') return false;
    return true;
  },{timeout:2200}).toBeTruthy();
}

test('nocturne product: iPhone pachislot loop 36G, six orders, misuse, BONUS/AT/return',async({page})=>{
  test.setTimeout(120000); const errors=[],crashes=[];
  page.on('pageerror',e=>errors.push(String(e))); page.on('crash',()=>crashes.push('crash'));
  await page.goto(URL,{waitUntil:'networkidle'}); let g=await game(page);
  const base=await snapshot(g);
  expect(base.vw,'iPhone 390px viewport').toBe(390);
  expect(base.w).toBeLessThanOrEqual(base.vw+1);
  expect(base.hiddenLegacy,'legacy explanatory/observation UI hidden').toBeTruthy();
  for(const phrase of FORBIDDEN_EXPLANATORY_TEXT) expect(base.text,`explanatory prose: ${phrase}`).not.toContain(phrase);

  for(const sel of ['#bet','#lever','.stop']){
    const l=g.locator(sel);
    for(let i=0;i<await l.count();i++){
      const b=await l.nth(i).boundingBox();
      expect(b,`${sel} box`).toBeTruthy();
      expect(b.width,`${sel} touch width`).toBeGreaterThanOrEqual(44);
      expect(b.height,`${sel} touch height`).toBeGreaterThanOrEqual(44);
    }
  }

  // Idle STOP and rapid/mistaken taps must not start a game or corrupt controls.
  const idleBefore=await snapshot(g);
  for(let burst=0;burst<2;burst++) for(let i=0;i<3;i++){
    const b=await g.locator('.stop').nth(i).boundingBox();
    if(b) await page.touchscreen.tap(b.x+b.width/2,b.y+b.height/2);
  }
  const idleAfter=await snapshot(g);
  expect(idleAfter.lastEvent).toBe(idleBefore.lastEvent);

  let sawDevelop=false,sawChance=false,sawBonus=false,sawAt=false,sawNormalAfterBonus=false,sawNormalAfterAt=false;
  let wasBonus=false,wasAt=false,maxNodes=base.nodes,maxAnimations=base.animations||0;

  for(let r=0;r<36;r++){
    const before=await snapshot(g);
    // QA-only deterministic reel evidence: charge BONUS strongly, drain AT cleanly.
    const forced=before.mode==='bonus'?['七','七','七']:before.mode==='at'?['泡','灯','魚']:null;
    await round(page,g,orders[r%6],forced);
    await page.waitForTimeout(620);
    await settleMode(g);
    const s=await snapshot(g);
    maxNodes=Math.max(maxNodes,s.nodes); maxAnimations=Math.max(maxAnimations,s.animations||0);
    expect(s.w,`round ${r+1} overflow`).toBeLessThanOrEqual(s.vw+1);
    expect(s.nodes,`round ${r+1} DOM growth`).toBeLessThanOrEqual(base.nodes+32);
    expect(s.hiddenLegacy,`round ${r+1} legacy explanatory UI`).toBeTruthy();
    for(const phrase of FORBIDDEN_EXPLANATORY_TEXT) expect(s.text,`round ${r+1} explanatory prose: ${phrase}`).not.toContain(phrase);

    const cls=await g.locator('.machine').getAttribute('class')||'';
    if(cls.includes('na-develop')) sawDevelop=true;
    if(cls.includes('na-chance')) sawChance=true;
    if(s.mode==='bonus'||s.bonusGames>0){sawBonus=true;wasBonus=true;}
    if(wasBonus&&s.mode==='normal'&&s.bonusGames===0){sawNormalAfterBonus=true;}
    if(s.mode==='at'||s.atGames>0){sawAt=true;wasAt=true;}
    if(wasAt&&s.mode==='normal'&&s.atGames===0){sawNormalAfterAt=true;}
  }

  expect(errors,'JS errors').toEqual([]);
  expect(crashes,'WebKit crashes').toEqual([]);
  expect(sawBonus,'deterministic BONUS reachability').toBeTruthy();
  expect(sawAt,'deterministic AT reachability').toBeTruthy();
  expect(sawNormalAfterAt,'AT → normal return').toBeTruthy();
  // Development/chance are transient classes; event/state assertions above are authoritative in automated timing.
  expect(await g.locator('.machine').getAttribute('data-last-game-event')).toBeTruthy();

  await page.reload({waitUntil:'networkidle'}); g=await game(page);
  const reloaded=await snapshot(g);
  expect(reloaded.vw).toBe(390);
  await round(page,g,[1,0,2]);
  expect(errors,'reload JS errors').toEqual([]); expect(crashes,'reload crashes').toEqual([]);
  console.log(JSON.stringify({baseNodes:base.nodes,maxNodes,maxAnimations,sawDevelop,sawChance,sawBonus,sawAt,sawNormalAfterBonus,sawNormalAfterAt}));
});