(()=>{
  const rootFrame=document.getElementById('shell');
  const getGameDoc=()=>{try{const a=rootFrame?.contentDocument,b=a?.getElementById('shell'),c=b?.contentDocument,g=c?.getElementById('game');return g?.contentDocument||null}catch(_){return null}};
  const pulse=(el,cls,ms)=>{if(!el)return;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls);setTimeout(()=>el.classList.remove(cls),ms)};
  function install(){
    const d=getGameDoc();
    if(!d||d.documentElement.dataset.visualProductRun2==='1')return false;
    const machine=d.querySelector('.machine'),screen=d.querySelector('.screen'),reelDeck=d.querySelector('.reelDeck'),controls=d.querySelector('.controls');
    if(!machine||!screen||!reelDeck||!controls)return false;
    d.documentElement.dataset.visualProductRun2='1';
    const style=d.createElement('style');style.id='na-visual-product-run2';style.textContent=`
      .lab,.sub,.lens,.msg,.hud,.zones,.gr-observe,.vm-worldports,.vm-optics,.na-stage{display:none!important}
      .na-v2-scene{position:absolute;z-index:13;inset:0;overflow:hidden;pointer-events:none;border-radius:inherit}
      .na-v2-depth{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 68%,transparent 0 18%,#0010181c 38%,#00080ea8 100%);opacity:.56;transition:opacity .22s}
      .na-v2-city{position:absolute;left:7%;right:7%;bottom:6%;height:34%;opacity:.22;transform:scale(.96);transform-origin:50% 100%;transition:opacity .28s,transform .35s;background:linear-gradient(90deg,transparent 0 5%,#70d7df22 5% 6%,transparent 6% 13%,#76dce733 13% 15%,transparent 15% 26%,#55b7c422 26% 27%,transparent 27% 38%,#8aeaf033 38% 41%,transparent 41% 57%,#5dc1cf28 57% 59%,transparent 59% 72%,#8beef333 72% 74%,transparent 74% 88%,#60c9d522 88% 90%,transparent 90%),linear-gradient(180deg,transparent,#0b53624a 62%,#021017 100%);clip-path:polygon(0 100%,0 72%,6% 72%,6% 53%,12% 53%,12% 66%,18% 66%,18% 38%,23% 38%,23% 60%,31% 60%,31% 28%,38% 28%,38% 66%,47% 66%,47% 43%,53% 43%,53% 62%,61% 62%,61% 22%,68% 22%,68% 59%,76% 59%,76% 35%,82% 35%,82% 68%,91% 68%,91% 49%,97% 49%,97% 76%,100% 76%,100% 100%)}
      .na-v2-jelly{position:absolute;width:24px;height:17px;border:1px solid #bafcff61;border-radius:50% 50% 42% 42%;opacity:.16;box-shadow:inset 0 0 9px #9bf8ff42,0 0 10px #57e9ff25;transition:opacity .18s,transform .35s}.na-v2-jelly:after{content:"";position:absolute;left:5px;right:5px;top:14px;height:17px;background:repeating-linear-gradient(90deg,#a8faff48 0 1px,transparent 1px 5px);clip-path:polygon(0 0,100% 0,84% 100%,68% 24%,52% 100%,36% 24%,18% 100%)}
      .na-v2-jelly.j1{left:17%;top:23%;transform:scale(.75)}.na-v2-jelly.j2{right:19%;top:35%;transform:scale(.55)}.na-v2-jelly.j3{left:47%;top:17%;transform:scale(.44)}
      .na-v2-shadow{position:absolute;left:50%;top:44%;width:145px;height:86px;margin:-43px -72px;border-radius:50%;opacity:0;transform:scale(.58);transition:opacity .18s,transform .45s;background:radial-gradient(ellipse,#00151ee8 0 27%,#0b607057 52%,transparent 72%);box-shadow:0 0 32px #46e7ff20}
      .na-v2-gate{position:absolute;left:50%;top:52%;width:112px;height:112px;margin:-56px;border:1px solid #b9fbff45;border-radius:50%;opacity:0;transform:scale(1.28);transition:opacity .16s,transform .42s;box-shadow:inset 0 0 18px #73efff35,0 0 18px #73efff24}
      .na-v2-gate:before,.na-v2-gate:after{content:"";position:absolute;inset:10px;border:1px solid #85efff38;border-radius:50%}.na-v2-gate:after{inset:23px;border-color:#d5ffff50}
      .na-v2-copy{position:absolute;z-index:18;left:50%;top:37%;transform:translate(-50%,7px) scale(.94);opacity:0;white-space:nowrap;font:900 22px/1 serif;letter-spacing:.14em;color:#f1ffff;text-shadow:0 2px 9px #000,0 0 10px #77efff,0 0 24px #22a9e5;transition:opacity .12s,transform .18s}
      .na-v2-copy.big{font-size:29px;letter-spacing:.18em}.na-v2-copy.gold{color:#fff9d8;text-shadow:0 2px 10px #000,0 0 9px #fff3a3,0 0 28px #f6c84a}
      .na-v2-copy.show{opacity:1;transform:translate(-50%,0) scale(1)}
      .na-v2-flash{position:absolute;inset:0;opacity:0;pointer-events:none;background:radial-gradient(circle at 50% 55%,#eaffffff 0 3%,#aaf7ff9a 8%,#33d8ff2b 28%,transparent 58%)}
      .na-v2-flash.fire{animation:naV2Flash .34s ease-out}@keyframes naV2Flash{0%{opacity:0}18%{opacity:.95}100%{opacity:0}}
      .machine[data-v2-state="quiet"] .na-v2-city{opacity:.18}.machine[data-v2-state="quiet"] .na-v2-depth{opacity:.72}
      .machine[data-v2-state="omen"] .na-v2-city{opacity:.34;transform:scale(1.01)}.machine[data-v2-state="omen"] .na-v2-jelly{opacity:.38;transform:scale(.9)}
      .machine[data-v2-state="chance"] .na-v2-city{opacity:.42;transform:scale(1.025)}.machine[data-v2-state="chance"] .na-v2-gate{opacity:.42;transform:scale(1.08)}
      .machine[data-v2-state="develop"] .na-v2-depth{opacity:.82}.machine[data-v2-state="develop"] .na-v2-city{opacity:.5;transform:scale(1.05)}.machine[data-v2-state="develop"] .na-v2-shadow{opacity:.72;transform:scale(1)}.machine[data-v2-state="develop"] .na-v2-gate{opacity:.7;transform:scale(.98)}
      .machine[data-v2-state="judge"] .na-v2-shadow{opacity:.92;transform:scale(1.14)}.machine[data-v2-state="judge"] .na-v2-gate{opacity:.9;transform:scale(.82)}
      .machine[data-v2-state="bonus"] .na-v2-city,.machine[data-v2-state="at"] .na-v2-city{opacity:.68;transform:scale(1.08)}.machine[data-v2-state="bonus"] .na-v2-jelly,.machine[data-v2-state="at"] .na-v2-jelly{opacity:.58}
      .machine[data-v2-state="at"] .na-v2-gate{opacity:.54;transform:scale(.92)}
      .machine.v2-stop1 .reelDeck{box-shadow:0 10px 22px #000,inset 0 0 26px #000,inset 0 1px #d9ffff19,0 0 9px #4cecff4a!important}
      .machine.v2-stop2 .reelDeck{box-shadow:0 10px 22px #000,inset 0 0 26px #000,inset 0 1px #d9ffff19,0 0 15px #69f1ff66!important}
      .machine.v2-stop3 .reelDeck{box-shadow:0 10px 22px #000,inset 0 0 26px #000,inset 0 1px #d9ffff19,0 0 22px #b9ffff83!important}
      .machine.v2-win .reelDeck{box-shadow:0 10px 22px #000,inset 0 0 25px #dfffff22,0 0 26px #dfffff9c!important}
      @media(max-width:390px){.na-v2-copy{font-size:19px}.na-v2-copy.big{font-size:25px}.na-v2-shadow{width:126px;margin-left:-63px}.na-v2-gate{width:98px;height:98px;margin:-49px}}
    `;d.head.appendChild(style);
    const scene=d.createElement('div');scene.className='na-v2-scene';scene.innerHTML='<div class="na-v2-depth"></div><div class="na-v2-city"></div><i class="na-v2-jelly j1"></i><i class="na-v2-jelly j2"></i><i class="na-v2-jelly j3"></i><div class="na-v2-shadow"></div><div class="na-v2-gate"></div><div class="na-v2-flash"></div><div class="na-v2-copy"></div>';
    screen.appendChild(scene);const copy=scene.querySelector('.na-v2-copy'),flash=scene.querySelector('.na-v2-flash');
    let copyTimer=0,stateTimer=0;
    const setState=(state,ms=0)=>{machine.dataset.v2State=state;clearTimeout(stateTimer);if(ms)stateTimer=setTimeout(()=>{if(machine.dataset.gameMode==='normal')machine.dataset.v2State='quiet'},ms)};
    const showCopy=(text,kind='',ms=650)=>{clearTimeout(copyTimer);copy.textContent=text;copy.className='na-v2-copy '+kind;void copy.offsetWidth;copy.classList.add('show');copyTimer=setTimeout(()=>copy.classList.remove('show'),ms)};
    const stopBeat=(n)=>{machine.classList.remove('v2-stop1','v2-stop2','v2-stop3');const cls='v2-stop'+n;machine.classList.add(cls);setTimeout(()=>machine.classList.remove(cls),280+n*35)};
    const fire=()=>pulse(flash,'fire',360);
    machine.dataset.v2State='quiet';
    d.addEventListener('nocturne:game-event',ev=>{const x=ev.detail||{},type=x.type;
      if(type==='bet'&&x.mode==='normal')setState('quiet');
      else if(type==='lever'&&x.mode==='normal'){const tier=x.tier||'base';if(tier==='omen')setState('omen',1050);else if(tier==='rise')setState('chance',900);else if(tier==='whisper')setState('omen',620);else setState('quiet')}
      else if(type==='stop')stopBeat(x.ordinal||1);
      else if(type==='reel-role'&&x.ordinal===1&&x.evidence?.score>=1){setState('chance',620);fire()}
      else if(type==='chance-up'){setState('chance',760);showCopy('CHANCE','',470);fire()}
      else if(type==='develop'){setState('develop',980);fire()}
      else if(type==='resolve'){setState('judge',720);fire();machine.classList.add('v2-stop3')}
      else if(type==='miss'){setTimeout(()=>setState('quiet'),220)}
      else if(type==='bonus-hit'){machine.classList.add('v2-win');setState('bonus');fire();showCopy('WIN','big gold',820);setTimeout(()=>machine.classList.remove('v2-win'),1120)}
      else if(type==='bonus-open'||(type==='mode-change'&&x.next==='bonus')){setState('bonus');showCopy('BONUS','big gold',900)}
      else if(type==='bonus-result'){setState('bonus')}
      else if(type==='bonus-end'){setState('judge',500);fire()}
      else if(type==='at-open'||(type==='mode-change'&&x.next==='at')){setState('at');fire();showCopy('OCEAN RECORD','big',1000)}
      else if(type==='at-continue'){setState('at');fire();showCopy('CONTINUE','',560)}
      else if(type==='at-result'){setState('at')}
      else if(type==='at-end'){setState('judge',450)}
      else if(type==='normal-return'){setState('quiet');}
    });
    return true;
  }
  function probe(){if(!install())setTimeout(probe,120)}
  rootFrame?.addEventListener('load',()=>setTimeout(probe,100));probe();
})();