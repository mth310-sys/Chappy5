const { test, expect } = require('@playwright/test');

const URL='http://127.0.0.1:4173/prototypes/nocturne-aquarium/play-stage-v2.html?qa=stop-semantics';

async function game(page){
  const sound=page.frameLocator('#shell');
  const play=sound.frameLocator('#shell');
  const game=play.frameLocator('#game');
  await expect(game.locator('body')).toBeVisible();
  await expect.poll(async()=>game.locator('html').getAttribute('data-game-reel-product-run5'),{timeout:5000}).toBe('1');
  return game;
}

test('Nocturne STOP1→STOP2→STOP3 semantics retain the actual previous information band',async({page})=>{
  test.setTimeout(30000);
  const errors=[],crashes=[];
  page.on('pageerror',e=>errors.push(String(e)));
  page.on('crash',()=>crashes.push('crash'));
  await page.goto(URL,{waitUntil:'networkidle'});
  const g=await game(page);

  const reads=await g.locator('body').evaluate(()=>{
    const out=[];
    const onEvent=e=>{if(e.detail?.type==='pachi-stop-read')out.push({
      ordinal:Number(e.detail.ordinal),
      band:String(e.detail.band),
      previousBand:String(e.detail.previousBand)
    })};
    document.addEventListener('nocturne:game-event',onEvent);
    const emit=detail=>document.dispatchEvent(new CustomEvent('nocturne:game-event',{detail:{type:'reel-role',mode:'normal',gameNo:9001,qaSynthetic:true,...detail}}));
    emit({ordinal:1,reelIndex:0,symbol:'泡',evidence:{score:0}});
    emit({ordinal:2,reelIndex:1,symbol:'七',evidence:{score:3}});
    emit({ordinal:3,reelIndex:2,symbol:'鍵',evidence:{score:1}});
    document.removeEventListener('nocturne:game-event',onEvent);
    return out;
  });

  expect(reads).toEqual([
    {ordinal:1,band:'quiet',previousBand:'quiet'},
    {ordinal:2,band:'strong',previousBand:'quiet'},
    {ordinal:3,band:'weak',previousBand:'strong'}
  ]);

  const dataset=await g.locator('.machine').evaluate(el=>({band:el.dataset.pachiStopBand,ordinal:el.dataset.pachiStopOrdinal}));
  expect(dataset).toEqual({band:'weak',ordinal:'3'});
  expect(errors,'JS errors').toEqual([]);
  expect(crashes,'WebKit crashes').toEqual([]);
});
