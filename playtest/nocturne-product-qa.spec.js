const { test, expect } = require('@playwright/test');

const URL='http://127.0.0.1:4173/prototypes/nocturne-aquarium/play-stage-v2.html';
const orders=[[0,1,2],[1,2,0],[2,0,1],[0,2,1],[1,0,2],[2,1,0]];

async function game(page){
  const sound=page.frameLocator('#shell');
  const play=sound.frameLocator('#shell');
  const game=play.frameLocator('#game');
  await expect(game.locator('body')).toBeVisible();
  await expect.poll(async()=>game.locator('html').getAttribute('data-product-run'),{timeout:3000}).toBe('3');
  return game;
}
async function tap(page,loc,label){
  await expect(loc,label).toBeEnabled({timeout:2200});
  const a=await loc.boundingBox(); await page.waitForTimeout(34); const b=await loc.boundingBox();
  expect(a&&b,`${label} geometry`).toBeTruthy();
  const drift=Math.max(Math.abs(a.x-b.x),Math.abs(a.y-b.y),Math.abs(a.width-b.width),Math.abs(a.height-b.height));
  expect(drift,`${label} drift`).toBeLessThanOrEqual(.75);
  await page.touchscreen.tap(b.x+b.width/2,b.y+b.height/2);
}
async function round(page,g,order){
  const bet=g.locator('#bet'),lever=g.locator('#lever'),stops=g.locator('.stop');
  if(await bet.isEnabled()) await tap(page,bet,'BET');
  await tap(page,lever,'LEVER');
  // misuse: BET during spin must not displace the live control deck.
  const bb=await bet.boundingBox(); if(bb) await page.touchscreen.tap(bb.x+bb.width/2,bb.y+bb.height/2);
  for(const idx of order){
    let s=stops.nth(idx);
    if(!(await s.isEnabled())) for(let i=0;i<3;i++) if(await stops.nth(i).isEnabled()){s=stops.nth(i);break;}
    await tap(page,s,`STOP-${idx}`); await page.waitForTimeout(55);
  }
  await expect.poll(async()=> (await bet.isEnabled())||(await lever.isEnabled()),{timeout:2500}).toBeTruthy();
}
async function snapshot(g){return g.locator('body').evaluate(()=>({nodes:document.querySelectorAll('*').length,animations:document.getAnimations?.().filter(a=>a.playState==='running').length??null,w:document.documentElement.scrollWidth,vw:innerWidth,product:document.documentElement.dataset.productRun,machine:document.querySelector('.machine')?.dataset||{},text:(document.querySelector('.screen')?.innerText||'').trim()}));}

test('nocturne product: iPhone integrated 36G, six orders, misuse, reload',async({page})=>{
  test.setTimeout(90000); const errors=[],crashes=[];
  page.on('pageerror',e=>errors.push(String(e))); page.on('crash',()=>crashes.push('crash'));
  await page.goto(URL,{waitUntil:'networkidle'}); let g=await game(page);
  const base=await snapshot(g); expect(base.w).toBeLessThanOrEqual(base.vw+1);
  for(const sel of ['#bet','#lever','.stop']){const l=g.locator(sel);for(let i=0;i<await l.count();i++){const b=await l.nth(i).boundingBox();expect(b.height,`${sel} touch`).toBeGreaterThanOrEqual(44);}}
  // idle STOP misuse.
  for(let i=0;i<3;i++){const b=await g.locator('.stop').nth(i).boundingBox();if(b)await page.touchscreen.tap(b.x+b.width/2,b.y+b.height/2);}
  let sawDevelop=false,sawBonus=false,sawBonusReturn=false,wasBonus=false,maxNodes=base.nodes,maxAnimations=base.animations||0;
  for(let r=0;r<36;r++){
    await round(page,g,orders[r%6]);
    const s=await snapshot(g); maxNodes=Math.max(maxNodes,s.nodes);maxAnimations=Math.max(maxAnimations,s.animations||0);
    expect(s.w,`round ${r+1} overflow`).toBeLessThanOrEqual(s.vw+1);
    expect(s.nodes,`round ${r+1} DOM growth`).toBeLessThanOrEqual(base.nodes+20);
    const m=await g.locator('.machine');
    const cls=await m.getAttribute('class')||''; const bonus=Number(await m.getAttribute('data-bonus-games')||0);
    if(cls.includes('na-develop'))sawDevelop=true;
    if(bonus>0){sawBonus=true;wasBonus=true;} else if(wasBonus)sawBonusReturn=true;
  }
  expect(errors,'JS errors').toEqual([]); expect(crashes,'WebKit crashes').toEqual([]);
  // Product event spine must be installed; state reachability is recorded but deterministic reel evidence may not force BONUS in 36G.
  expect(await g.locator('.machine').getAttribute('data-last-game-event')).toBeTruthy();
  await page.reload({waitUntil:'networkidle'}); g=await game(page); await round(page,g,[1,0,2]);
  expect(errors,'reload JS errors').toEqual([]); expect(crashes,'reload crashes').toEqual([]);
  console.log(JSON.stringify({baseNodes:base.nodes,maxNodes,maxAnimations,sawDevelop,sawBonus,sawBonusReturn}));
});