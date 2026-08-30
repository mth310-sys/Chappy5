(()=>{
  const rootFrame=document.getElementById('shell');
  const getGameDoc=()=>{try{const a=rootFrame?.contentDocument,b=a?.getElementById('shell'),c=b?.contentDocument,g=c?.getElementById('game');return g?.contentDocument||null}catch(_){return null}};
  const pulse=(el,cls,ms)=>{if(!el)return;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls);setTimeout(()=>el.classList.remove(cls),ms)};
  function install(){
    const d=getGameDoc();
    if(!d||d.documentElement.dataset.visualProductRun3==='1')return false;
    const machine=d.querySelector('.machine'),screen=d.querySelector('.screen'),reelDeck=d.querySelector('.reelDeck'),controls=d.querySelector('.controls');
    if(!machine||!screen||!reelDeck||!controls)return false;
    d.documentElement.dataset.visualProductRun3='1';
    const style=d.createElement('style');style.id='na-visual-product-run3';style.textContent=`
      .machine{overflow:visible!important;background:linear-gradient(100deg,#02080c 0,#18313a 3%,#91bac1 5%,#122a32 8%,#030a0e 14%,#07131a 50%,#030a0e 86%,#122a32 92%,#91bac1 95%,#18313a 97%,#02080c 100%)!important;box-shadow:0 28px 78px #000,0 0 32px #19bce82c,inset 0 0 0 2px #011018,inset 0 0 34px #76efff0b!important}
      .tankFrame{border-radius:20px 20px 12px 12px!important;border:1px solid #bdeff75c!important;box-shadow:0 9px 19px #000,inset 0 0 0 1px #d6fcff42,0 0 13px #39d7f122!important}
      .na-v3-side{position:absolute;z-index:4;top:62px;bottom:119px;width:34px;border:1px solid #baf8ff59;border-radius:21px 14px 20px 14px;pointer-events:none;overflow:hidden;background:linear-gradient(90deg,#e8ffff1c 0,#6feaff24 21%,#0d56683d 51%,#03141db8 78%,#8ff5ff13);box-shadow:inset 0 0 0 2px #072733,inset 6px 0 13px #efffff12,inset -8px 0 15px #0008,0 0 12px #4be9ff24;transition:box-shadow .2s,background .2s}
      .na-v3-side.left{left:-8px}.na-v3-side.right{right:-8px;transform:scaleX(-1)}
      .na-v3-side:before{content:"";position:absolute;left:8px;top:9px;bottom:9px;width:10px;border-left:1px solid #d9ffff60;border-right:1px solid #54d7e66a;border-radius:50%;background:linear-gradient(#dfffff1f,#35d8ef25 45%,#051d2780)}
      .na-v3-side:after{content:"";position:absolute;inset:12px 5px;background:radial-gradient(circle at 45% 14%,#eaffffb5 0 1px,transparent 2px),radial-gradient(circle at 68% 37%,#a9f8ff9c 0 1px,transparent 2px),radial-gradient(circle at 38% 66%,#dfffffa0 0 1px,transparent 2px),radial-gradient(circle at 61% 87%,#7fefff80 0 1px,transparent 2px);opacity:.45;transition:opacity .2s}
      .machine[data-v3-energy="1"] .na-v3-side{box-shadow:inset 0 0 0 2px #0a3440,inset 0 0 19px #78efff38,0 0 15px #43e9ff45}.machine[data-v3-energy="2"] .na-v3-side{box-shadow:inset 0 0 0 2px #0b4050,inset 0 0 25px #b7ffff62,0 0 23px #55efff68}.machine[data-v3-energy="3"] .na-v3-side{box-shadow:inset 0 0 0 2px #196675,inset 0 0 32px #e5ffff8c,0 0 30px #93f8ff91}.machine[data-v3-energy="3"] .na-v3-side:after{opacity:.9}
      .na-v3-city-depth{position:absolute;z-index:4;left:-4%;right:-4%;bottom:-1px;height:55%;pointer-events:none;opacity:.42;background:linear-gradient(90deg,#011017 0 7%,transparent 7% 12%,#02141d 12% 18%,transparent 18% 26%,#01121a 26% 32%,transparent 32% 41%,#031823 41% 48%,transparent 48% 57%,#01131d 57% 64%,transparent 64% 72%,#021721 72% 80%,transparent 80% 88%,#011018 88% 100%);clip-path:polygon(0 100%,0 51%,6% 51%,6% 38%,12% 38%,12% 62%,18% 62%,18% 30%,24% 30%,24% 57%,31% 57%,31% 18%,38% 18%,38% 64%,45% 64%,45% 39%,52% 39%,52% 58%,60% 58%,60% 25%,67% 25%,67% 61%,74% 61%,74% 34%,81% 34%,81% 55%,89% 55%,89% 42%,96% 42%,96% 63%,100% 63%,100% 100%);transition:opacity .26s,transform .4s;transform-origin:50% 100%}
      .na-v3-city-depth:after{content:"";position:absolute;inset:15% 8% 8%;background:radial-gradient(circle at 12% 52%,#8ff6ff 0 1px,transparent 2px),radial-gradient(circle at 31% 34%,#67eaff 0 1px,transparent 2px),radial-gradient(circle at 54% 62%,#d8ffff 0 1px,transparent 2px),radial-gradient(circle at 75% 27%,#7ef1ff 0 1px,transparent 2px),radial-gradient(circle at 92% 55%,#c8ffff 0 1px,transparent 2px);opacity:.58}
      .machine[data-v3-energy="0"] .na-v3-city-depth{opacity:.26;transform:scale(.985)}.machine[data-v3-energy="2"] .na-v3-city-depth{opacity:.53;transform:scale(1.02)}.machine[data-v3-energy="3"] .na-v3-city-depth{opacity:.66;transform:scale(1.045)}
      .reelDeck{border:1px solid #477986!important;background:linear-gradient(#071219,#10232a 49%,#02090d)!important;box-shadow:0 11px 24px #000,inset 0 1px #c9faff24,inset 0 0 28px #000!important}
      .na-v3-reel-glass{position:absolute;z-index:8;left:8px;right:8px;top:8px;height:116px;border-radius:11px;pointer-events:none;border:1px solid #bfeef24b;box-shadow:inset 7px 0 12px #ffffff10,inset -8px 0 13px #0006,inset 0 0 0 2px #031016,0 0 12px #65edff18;background:linear-gradient(112deg,#ffffff0d 0 10%,transparent 17% 66%,#c7ffff09 72%,transparent 78%)}
      .na-v3-reel-glass:after{content:"";position:absolute;left:2%;right:2%;top:34%;height:32%;border-top:1px solid #bffaff29;border-bottom:1px solid #8fefff1f;box-shadow:inset 0 8px 10px #ffffff09,inset 0 -9px 12px #0003}
      .controls{position:relative;margin-top:4px;padding:8px 5px 5px!important;border-radius:18px 18px 12px 12px;background:linear-gradient(180deg,#19313a,#071116 38%,#020608 68%,#12242a);border-top:1px solid #7ba0a84f;box-shadow:inset 0 1px #eaffff18,0 -4px 12px #0008}
      .controls:before{content:"";position:absolute;left:8%;right:8%;top:3px;height:1px;background:linear-gradient(90deg,transparent,#a9f4ff4d,transparent);pointer-events:none}
      .na-v3-clock{position:relative;z-index:2;width:92px;height:78px;margin:7px auto -7px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,#041018 0 18%,#1b3b45 19% 21%,#02090d 22% 33%,#68dce23a 34% 35%,#07171d 36% 52%,#b9f8ff36 53% 54%,#02070a 55% 100%);border:1px solid #78aeb65a;box-shadow:0 7px 17px #000,inset 0 0 15px #000,0 0 9px #4fe7ff1f;transition:box-shadow .22s,transform .28s}
      .na-v3-clock .ring{position:absolute;inset:8px;border:1px solid #7eeef44f;border-radius:50%;transition:transform .42s cubic-bezier(.2,.75,.2,1)}.na-v3-clock .ring:before,.na-v3-clock .ring:after{content:"";position:absolute;left:50%;top:-3px;width:1px;height:7px;background:#c9ffff88;transform-origin:0 34px}.na-v3-clock .ring:after{transform:rotate(120deg)}
      .na-v3-clock .hand{position:absolute;left:50%;top:50%;width:2px;height:27px;margin:-27px 0 0 -1px;transform-origin:50% 100%;background:linear-gradient(#d9ffff,#37cadd);box-shadow:0 0 5px #7ef1ff;transition:transform .36s cubic-bezier(.2,.8,.2,1)}
      .na-v3-clock .core{position:absolute;inset:31px;border-radius:50%;background:#cfffff;box-shadow:0 0 8px #8ef5ff;opacity:.36;transition:opacity .18s,box-shadow .18s}
      .machine[data-v3-energy="2"] .na-v3-clock{box-shadow:0 7px 17px #000,inset 0 0 14px #54eaff35,0 0 14px #55eaff48}.machine[data-v3-energy="3"] .na-v3-clock{box-shadow:0 7px 17px #000,inset 0 0 18px #baffff66,0 0 22px #8bf5ff78;transform:translateY(-1px)}.machine[data-v3-energy="3"] .na-v3-clock .core{opacity:.9;box-shadow:0 0 14px #dfffff}
      .na-v3-result{position:absolute;z-index:24;left:50%;top:61%;transform:translate(-50%,7px) scale(.95);opacity:0;white-space:nowrap;pointer-events:none;font:900 18px/1 ui-monospace,monospace;letter-spacing:.08em;color:#edffff;text-shadow:0 2px 7px #000,0 0 10px #62efff;transition:opacity .1s,transform .16s}.na-v3-result.show{opacity:1;transform:translate(-50%,0) scale(1)}.na-v3-result.gold{color:#fff2b8;text-shadow:0 2px 8px #000,0 0 10px #ffe88b,0 0 20px #dfb33f}
      .na-v3-impact{position:absolute;z-index:23;inset:0;pointer-events:none;opacity:0;background:radial-gradient(circle at 50% 61%,#efffff 0 2%,#80f3ff89 7%,#3bd8f128 20%,transparent 45%)}.na-v3-impact.fire{animation:naV3Impact .3s ease-out}@keyframes naV3Impact{0%{opacity:0}16%{opacity:.86}100%{opacity:0}}
      @media(max-width:390px){.na-v3-side{width:28px;top:58px;bottom:111px}.na-v3-side.left{left:-7px}.na-v3-side.right{right:-7px}.na-v3-reel-glass{height:110px}.na-v3-clock{width:84px;height:70px}.na-v3-clock .ring:before{transform-origin:0 30px}.na-v3-result{font-size:16px}}
    `;d.head.appendChild(style);
    const left=d.createElement('div'),right=d.createElement('div');left.className='na-v3-side left';right.className='na-v3-side right';machine.append(left,right);
    const city=d.createElement('div');city.className='na-v3-city-depth';screen.append(city);
    const glass=d.createElement('div');glass.className='na-v3-reel-glass';reelDeck.append(glass);
    const clock=d.createElement('div');clock.className='na-v3-clock';clock.innerHTML='<i class="ring"></i><i class="hand"></i><i class="core"></i>';reelDeck.insertAdjacentElement('afterend',clock);
    const result=d.createElement('div'),impact=d.createElement('div');result.className='na-v3-result';impact.className='na-v3-impact';screen.append(impact,result);
    const ring=clock.querySelector('.ring'),hand=clock.querySelector('.hand');let angle=0,resultTimer=0,energyTimer=0;
    const setEnergy=(n,ms=0)=>{machine.dataset.v3Energy=String(n);clearTimeout(energyTimer);if(ms)energyTimer=setTimeout(()=>{if(machine.dataset.gameMode==='normal')machine.dataset.v3Energy='0'},ms)};
    const stepClock=(amount=28)=>{angle=(angle+amount)%360;ring.style.transform=`rotate(${angle}deg)`;hand.style.transform=`rotate(${Math.round(angle*.63)}deg)`};
    const showResult=(text,gold=false,ms=720)=>{clearTimeout(resultTimer);result.textContent=text;result.className='na-v3-result'+(gold?' gold':'');void result.offsetWidth;result.classList.add('show');resultTimer=setTimeout(()=>result.classList.remove('show'),ms)};
    const fire=()=>pulse(impact,'fire',320);
    machine.dataset.v3Energy='0';
    d.addEventListener('nocturne:game-event',ev=>{const x=ev.detail||{},type=x.type,e=x.evidence||{};
      if(type==='bet'&&x.mode==='normal'){setEnergy(0);stepClock(7)}
      else if(type==='lever'&&x.mode==='normal'){const t=x.tier||'base';setEnergy(t==='omen'?2:t==='rise'?1:t==='whisper'?1:0,t==='base'?0:900);stepClock(t==='omen'?34:t==='rise'?21:11)}
      else if(type==='stop'){stepClock((x.ordinal||1)*8);if((x.ordinal||1)===1)setEnergy(Math.max(Number(machine.dataset.v3Energy||0),1),300)}
      else if(type==='chance-up'){setEnergy(Math.min(3,(x.level||1)+1),620);fire();stepClock(31)}
      else if(type==='develop'){setEnergy(2,980);stepClock(46)}
      else if(type==='resolve'){setEnergy(Math.max(1,Math.min(3,e.score||0)),540);fire();stepClock(62)}
      else if(type==='core-result'){
        const payout=Number(x.payout||e.payout||0);if(payout>0){showResult(`GET ${payout}枚`,payout>=6,760);fire();setEnergy(payout>=6?3:2,760);stepClock(payout>=6?72:44)}
      }
      else if(type==='miss'){setTimeout(()=>setEnergy(0),170)}
      else if(type==='bonus-hit'){setEnergy(3);fire();stepClock(96)}
      else if(type==='bonus-open'||(type==='mode-change'&&x.next==='bonus')){setEnergy(3);stepClock(54)}
      else if(type==='bonus-result'){const payout=Number(x.payout||e.payout||0);if(payout>0)showResult(`GET ${payout}枚`,payout>=6,600);setEnergy(2,520);stepClock(28)}
      else if(type==='at-open'||(type==='mode-change'&&x.next==='at')){setEnergy(3);fire();stepClock(110)}
      else if(type==='at-continue'){setEnergy(3,700);showResult(x.addedGames?`+${x.addedGames}G`:'CONTINUE',true,650);fire();stepClock(78)}
      else if(type==='at-result'){const payout=Number(x.payout||e.payout||0);if(payout>0)showResult(`GET ${payout}枚`,payout>=6,560);setEnergy(2,460);stepClock(26)}
      else if(type==='bonus-end'||type==='at-end'){setEnergy(1,450);stepClock(18)}
      else if(type==='normal-return'){setEnergy(0);stepClock(9)}
    });
    return true;
  }
  function probe(){if(!install())setTimeout(probe,120)}
  rootFrame?.addEventListener('load',()=>setTimeout(probe,100));probe();
})();