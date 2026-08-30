(()=>{
  const rootFrame=document.getElementById('shell');
  const getGameDoc=()=>{try{const a=rootFrame?.contentDocument,b=a?.getElementById('shell'),c=b?.contentDocument,g=c?.getElementById('game');return g?.contentDocument||null}catch(_){return null}};
  const pulse=(el,cls,ms)=>{if(!el)return;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls);setTimeout(()=>el.classList.remove(cls),ms)};
  function install(){
    const d=getGameDoc();if(!d||d.documentElement.dataset.visualProductRun5==='1')return false;
    const machine=d.querySelector('.machine'),screen=d.querySelector('.screen'),reelDeck=d.querySelector('.reelDeck'),controls=d.querySelector('.controls');
    if(!machine||!screen||!reelDeck||!controls)return false;
    d.documentElement.dataset.visualProductRun5='1';
    const style=d.createElement('style');style.id='na-visual-product-run5';style.textContent=`
      .na-v5-depth{position:absolute;z-index:17;inset:0;overflow:hidden;border-radius:inherit;pointer-events:none}
      .na-v5-city{position:absolute;left:7%;right:7%;bottom:4%;height:47%;opacity:.12;transform:translateY(7px) scale(.97);transform-origin:50% 100%;transition:opacity .22s,transform .38s cubic-bezier(.18,.72,.2,1);background:repeating-linear-gradient(90deg,transparent 0 7%,#9df9ff18 7% 8%,transparent 8% 15%);clip-path:polygon(0 100%,0 72%,6% 72%,6% 45%,12% 45%,12% 76%,18% 76%,18% 58%,24% 58%,24% 84%,31% 84%,31% 28%,37% 28%,37% 72%,44% 72%,44% 48%,51% 48%,51% 82%,58% 82%,58% 20%,64% 20%,64% 70%,71% 70%,71% 40%,78% 40%,78% 80%,85% 80%,85% 54%,92% 54%,92% 73%,100% 73%,100% 100%)}
      .na-v5-beam{position:absolute;left:50%;top:12%;width:2px;height:62%;margin-left:-1px;opacity:0;transform:scaleY(.18);transform-origin:50% 0;background:linear-gradient(#e9ffffdd,#78efff66,transparent);box-shadow:0 0 10px #7cf4ff88;transition:opacity .1s,transform .32s cubic-bezier(.15,.78,.22,1)}
      .na-v5-gate{position:absolute;left:50%;top:50%;width:116px;height:76px;margin:-38px -58px;border:1px solid #a9f9ff30;border-radius:50%;opacity:0;transform:scale(1.35);transition:opacity .12s,transform .4s cubic-bezier(.16,.78,.18,1);box-shadow:inset 0 0 22px #70efff18,0 0 18px #67efff10}
      .na-v5-gate:before,.na-v5-gate:after{content:"";position:absolute;inset:12px;border:1px solid #c7ffff2b;border-radius:50%}.na-v5-gate:after{inset:25px}
      .na-v5-blackout{position:absolute;inset:0;opacity:0;background:#000d14;transition:opacity .12s}
      .machine[data-v5-band="weak"] .na-v5-city{opacity:.19;transform:translateY(4px) scale(.985)}
      .machine[data-v5-band="medium"] .na-v5-city{opacity:.3;transform:translateY(1px) scale(1)}.machine[data-v5-band="medium"] .na-v5-gate{opacity:.38;transform:scale(1.05)}
      .machine[data-v5-band="strong"] .na-v5-city{opacity:.44;transform:scale(1.025)}.machine[data-v5-band="strong"] .na-v5-gate{opacity:.7;transform:scale(.88)}.machine[data-v5-band="strong"] .na-v5-beam{opacity:.72;transform:scaleY(1)}
      .machine[data-v5-band="pay"] .na-v5-city{opacity:.68;transform:scale(1.05)}.machine[data-v5-band="pay"] .na-v5-gate{opacity:.92;transform:scale(.72)}.machine[data-v5-band="pay"] .na-v5-beam{opacity:1;transform:scaleY(1)}
      .machine.v5-stop1 .na-v3-side{box-shadow:inset 0 0 0 2px #287181,inset 0 0 18px #9ff9ff55,0 0 15px #5feaff48!important}
      .machine.v5-stop2 .na-v3-reel-glass{box-shadow:inset 7px 0 12px #ffffff16,inset -8px 0 13px #0007,inset 0 0 0 2px #031016,0 0 22px #83f5ff70!important}
      .machine.v5-stop3 .reelDeck{box-shadow:0 13px 27px #000,inset 0 0 30px #000,0 0 28px #c7ffff78!important}
      .machine.v5-strong .na-v3-side{box-shadow:inset 0 0 0 2px #4c9dac,inset 0 0 32px #e6ffff78,0 0 30px #7cf3ff7a!important}.machine.v5-strong .na-v3-clock{transform:translateY(-2px) scale(1.028)!important}
      .machine.v5-pay .na-v3-clock{transform:translateY(-3px) scale(1.055)!important}.machine.v5-pay .na-v3-side{box-shadow:inset 0 0 0 2px #7fc5ce,inset 0 0 42px #f3ffffaa,0 0 38px #a5fbffa8!important}
      .machine.v5-miss .na-v5-blackout{opacity:.24}.machine.v5-return .na-v5-city{opacity:.1!important;transform:translateY(8px) scale(.97)!important}
      @media(max-width:390px){.na-v5-gate{width:102px;height:68px;margin:-34px -51px}.na-v5-city{left:5%;right:5%}}
    `;d.head.appendChild(style);
    const layer=d.createElement('div');layer.className='na-v5-depth';layer.innerHTML='<div class="na-v5-city"></div><div class="na-v5-beam"></div><div class="na-v5-gate"></div><div class="na-v5-blackout"></div>';screen.append(layer);
    let resetTimer=0;
    const band=(name,ms=0)=>{machine.dataset.v5Band=name||'quiet';clearTimeout(resetTimer);if(ms)resetTimer=setTimeout(()=>{const mode=machine.dataset.gameMode;machine.dataset.v5Band=mode==='bonus'||mode==='at'?'medium':'quiet'},ms)};
    const stopPulse=(ordinal,level)=>{pulse(machine,'v5-stop'+ordinal,ordinal===3?420:300);if(level==='strong')pulse(machine,'v5-strong',700)};
    machine.dataset.v5Band='quiet';
    d.addEventListener('nocturne:game-event',ev=>{const x=ev.detail||{},type=x.type;
      if(type==='pachi-normal-rhythm'){if(Number(x.quietRun||0)>=3)band('quiet')}
      else if(type==='pachi-lever-read'){const b=x.band||x.expectation||'quiet';band(b,b==='quiet'?0:760);if(b==='strong')pulse(machine,'v5-strong',780)}
      else if(type==='pachi-stop-read'){const b=x.band||'quiet',o=Math.max(1,Math.min(3,Number(x.ordinal||1)));band(b,b==='quiet'?260:b==='weak'?430:b==='medium'?560:720);stopPulse(o,b)}
      else if(type==='pachi-role-resolved'){const b=x.band||x.outcome||'plain';if(b==='pay'){band('pay',980);pulse(machine,'v5-pay',980)}else if(b==='strong'){band('strong',780);pulse(machine,'v5-strong',780)}else if(b==='chance')band('medium',650);else if(b==='hint')band('weak',460);else band('quiet',260)}
      else if(type==='pachi-payoff-window'){
        const phase=x.phase||x.window||x.payoff||x.outcome||'';
        if(phase==='miss'){pulse(machine,'v5-miss',360);setTimeout(()=>band('quiet'),180)}
        else if(phase==='win'||phase==='bonus-open'||phase==='at-open'){band('pay',1100);pulse(machine,'v5-pay',1100)}
        else if(phase==='normal-return'){pulse(machine,'v5-return',520);band('quiet')}
      }
    });
    return true;
  }
  function probe(){if(!install())setTimeout(probe,120)}
  rootFrame?.addEventListener('load',()=>setTimeout(probe,100));probe();
})();
