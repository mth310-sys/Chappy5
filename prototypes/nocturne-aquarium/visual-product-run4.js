(()=>{
  const rootFrame=document.getElementById('shell');
  const getGameDoc=()=>{try{const a=rootFrame?.contentDocument,b=a?.getElementById('shell'),c=b?.contentDocument,g=c?.getElementById('game');return g?.contentDocument||null}catch(_){return null}};
  const pulse=(el,cls,ms)=>{if(!el)return;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls);setTimeout(()=>el.classList.remove(cls),ms)};
  function install(){
    const d=getGameDoc();
    if(!d||d.documentElement.dataset.visualProductRun4==='1')return false;
    const machine=d.querySelector('.machine'),screen=d.querySelector('.screen'),reelDeck=d.querySelector('.reelDeck'),controls=d.querySelector('.controls');
    if(!machine||!screen||!reelDeck||!controls)return false;
    d.documentElement.dataset.visualProductRun4='1';
    const style=d.createElement('style');style.id='na-visual-product-run4';style.textContent=`
      .lab,.sub,.lens,.msg,.hud,.zones,.gr-observe,.vm-worldports,.vm-optics,.na-stage{display:none!important}
      .na-v4-lcd{position:absolute;z-index:16;inset:0;overflow:hidden;border-radius:inherit;pointer-events:none}
      .na-v4-horizon{position:absolute;left:5%;right:5%;bottom:7%;height:52%;opacity:.16;transform:translateY(5px) scale(.97);transform-origin:50% 100%;transition:opacity .3s,transform .45s;background:linear-gradient(180deg,transparent 0 31%,#70e6ef12 32% 33%,transparent 34%),repeating-linear-gradient(90deg,transparent 0 8%,#8beef31c 8% 9%,transparent 9% 18%);clip-path:polygon(0 100%,0 72%,7% 72%,7% 54%,14% 54%,14% 78%,22% 78%,22% 43%,29% 43%,29% 69%,38% 69%,38% 24%,45% 24%,45% 76%,55% 76%,55% 48%,63% 48%,63% 65%,72% 65%,72% 32%,79% 32%,79% 72%,88% 72%,88% 52%,95% 52%,95% 78%,100% 78%,100% 100%)}
      .na-v4-waterline{position:absolute;left:9%;right:9%;top:18%;height:1px;opacity:.18;background:linear-gradient(90deg,transparent,#d9ffffaa,transparent);box-shadow:0 24px #5fe8f32c,0 54px #5fe8f31c;transition:opacity .2s,transform .36s}
      .na-v4-orbit{position:absolute;left:50%;top:49%;width:138px;height:138px;margin:-69px;border:1px solid #9cf7ff28;border-radius:50%;opacity:0;transform:scale(1.18) rotate(0);transition:opacity .16s,transform .48s cubic-bezier(.18,.75,.2,1);box-shadow:inset 0 0 18px #73efff13}
      .na-v4-orbit:before,.na-v4-orbit:after{content:"";position:absolute;border-radius:50%;border:1px solid #b9fbff25}.na-v4-orbit:before{inset:15px}.na-v4-orbit:after{inset:31px}
      .na-v4-silhouette{position:absolute;left:50%;top:48%;width:172px;height:72px;margin:-36px -86px;border-radius:50%;opacity:0;transform:scale(.58);transition:opacity .16s,transform .52s cubic-bezier(.18,.78,.18,1);background:radial-gradient(ellipse,#000b11 0 28%,#063746b0 48%,transparent 72%)}
      .na-v4-shutter{position:absolute;inset:0;opacity:0;background:linear-gradient(180deg,#000d14 0 47%,transparent 47% 53%,#000d14 53%);transform:scaleY(.35);transition:opacity .12s,transform .2s}
      .na-v4-banner{position:absolute;z-index:5;left:50%;top:34%;transform:translate(-50%,8px) scale(.95);opacity:0;white-space:nowrap;text-align:center;font:900 25px/1 serif;letter-spacing:.16em;color:#f1ffff;text-shadow:0 2px 9px #000,0 0 12px #71efff;transition:opacity .1s,transform .17s}
      .na-v4-banner.show{opacity:1;transform:translate(-50%,0) scale(1)}.na-v4-banner.gold{color:#fff4c4;text-shadow:0 2px 10px #000,0 0 10px #ffeaa0,0 0 25px #dcae3b}.na-v4-banner.small{font-size:17px;letter-spacing:.1em;top:28%}
      .na-v4-meter{position:absolute;z-index:5;left:50%;bottom:8px;transform:translateX(-50%);display:flex;gap:12px;align-items:center;opacity:0;transition:opacity .15s;font:800 12px/1 ui-monospace,monospace;letter-spacing:.04em;color:#dfffff;text-shadow:0 1px 5px #000,0 0 7px #5eeaff}.na-v4-meter.on{opacity:.9}.na-v4-meter b{font-size:15px;color:#fff4c6}
      .machine[data-v4-beat="nudge"] .na-v4-waterline{opacity:.42;transform:translateY(-2px)}
      .machine[data-v4-beat="carry"] .na-v4-horizon{opacity:.28;transform:translateY(2px) scale(1)}
      .machine[data-v4-beat="omen"] .na-v4-horizon{opacity:.38;transform:scale(1.025)}.machine[data-v4-beat="omen"] .na-v4-orbit{opacity:.38;transform:scale(1.04) rotate(18deg)}
      .machine[data-v4-beat="chance"] .na-v4-orbit{opacity:.68;transform:scale(.94) rotate(42deg)}.machine[data-v4-beat="chance"] .na-v4-waterline{opacity:.72}
      .machine[data-v4-beat="develop"] .na-v4-silhouette{opacity:.78;transform:scale(1)}.machine[data-v4-beat="develop"] .na-v4-orbit{opacity:.55;transform:scale(.86) rotate(74deg)}
      .machine[data-v4-beat="judge"] .na-v4-silhouette{opacity:.94;transform:scale(1.16)}.machine[data-v4-beat="judge"] .na-v4-shutter{opacity:.66;transform:scaleY(1)}
      .machine[data-v4-beat="win"] .na-v4-horizon{opacity:.72;transform:scale(1.06)}.machine[data-v4-beat="win"] .na-v4-orbit{opacity:.92;transform:scale(.72) rotate(130deg)}
      .machine[data-v4-beat="bonus"] .na-v4-horizon,.machine[data-v4-beat="at"] .na-v4-horizon{opacity:.56;transform:scale(1.04)}.machine[data-v4-beat="bonus"] .na-v4-orbit,.machine[data-v4-beat="at"] .na-v4-orbit{opacity:.42;transform:scale(.92) rotate(160deg)}
      .machine.v4-reel-nudge .na-v3-reel-glass{box-shadow:inset 7px 0 12px #ffffff14,inset -8px 0 13px #0006,inset 0 0 0 2px #031016,0 0 18px #7ef3ff55!important}
      .machine.v4-judgment .reelDeck{transform:translateY(-1px);box-shadow:0 13px 27px #000,inset 0 0 28px #000,0 0 24px #b7fbff70!important}
      .machine.v4-hit .na-v3-side{box-shadow:inset 0 0 0 2px #287181,inset 0 0 34px #e9ffff9a,0 0 34px #a8fbff9e!important}
      .machine.v4-hit .na-v3-clock{transform:translateY(-2px) scale(1.035)!important}
      @media(max-width:390px){.na-v4-orbit{width:118px;height:118px;margin:-59px}.na-v4-silhouette{width:146px;margin-left:-73px}.na-v4-banner{font-size:22px}.na-v4-banner.small{font-size:15px}.na-v4-meter{bottom:6px;gap:9px;font-size:11px}}
    `;d.head.appendChild(style);
    const layer=d.createElement('div');layer.className='na-v4-lcd';layer.innerHTML='<div class="na-v4-horizon"></div><div class="na-v4-waterline"></div><div class="na-v4-orbit"></div><div class="na-v4-silhouette"></div><div class="na-v4-shutter"></div><div class="na-v4-banner"></div><div class="na-v4-meter"><span class="remain"></span><b class="total"></b></div>';screen.append(layer);
    const banner=layer.querySelector('.na-v4-banner'),meter=layer.querySelector('.na-v4-meter'),remain=meter.querySelector('.remain'),total=meter.querySelector('.total');
    let bannerTimer=0,beatTimer=0;
    const setBeat=(beat,ms=0)=>{machine.dataset.v4Beat=beat;clearTimeout(beatTimer);if(ms)beatTimer=setTimeout(()=>{const m=machine.dataset.gameMode;machine.dataset.v4Beat=m==='bonus'?'bonus':m==='at'?'at':'quiet'},ms)};
    const show=(text,kind='',ms=650)=>{clearTimeout(bannerTimer);banner.textContent=text;banner.className='na-v4-banner '+kind;void banner.offsetWidth;banner.classList.add('show');bannerTimer=setTimeout(()=>banner.classList.remove('show'),ms)};
    const showMeter=(scope,r,t)=>{remain.textContent=`残り ${Math.max(0,Number(r||0))}G`;total.textContent=`TOTAL ${Math.max(0,Number(t||0))}枚`;meter.dataset.scope=scope;meter.classList.add('on')};
    const hideMeter=()=>meter.classList.remove('on');
    const reelPulse=()=>pulse(machine,'v4-reel-nudge',300),judgePulse=()=>pulse(machine,'v4-judgment',520),hitPulse=()=>pulse(machine,'v4-hit',900);
    machine.dataset.v4Beat='quiet';
    d.addEventListener('nocturne:game-event',ev=>{const x=ev.detail||{},type=x.type;
      if(type==='bet'&&x.mode==='normal'){setBeat('quiet');hideMeter()}
      else if(type==='lever'&&x.mode==='normal'){const t=x.tier||'base';setBeat(t==='omen'?'omen':t==='rise'?'carry':t==='whisper'?'nudge':'quiet',t==='base'?0:820)}
      else if(type==='reel-nudge'){setBeat('nudge',520);reelPulse()}
      else if(type==='anticipation-carry'&&Number(x.carry||0)>0){setBeat('carry',700)}
      else if(type==='strong-omen'){setBeat('omen',1000)}
      else if(type==='chance-up'){setBeat('chance',760);reelPulse();if(Number(x.level||0)>=2)show('CHANCE','',470)}
      else if(type==='develop'){setBeat('develop',980)}
      else if(type==='judgment'){setBeat('judge',620);judgePulse()}
      else if(type==='resolve'){judgePulse()}
      else if(type==='miss'){setTimeout(()=>setBeat('quiet'),190)}
      else if(type==='win'){setBeat('win',1100);hitPulse();show('WIN','gold',780)}
      else if(type==='bonus-hit'){setBeat('win',1000);hitPulse()}
      else if(type==='bonus-open'||(type==='mode-change'&&x.next==='bonus')){setBeat('bonus');show('BONUS','gold',900)}
      else if(type==='bonus-count'){setBeat('bonus');showMeter('bonus',x.remaining,x.total)}
      else if(type==='bonus-result'){setBeat('bonus');if(Number(x.payout||0)>0)show(`GET ${Number(x.payout)}枚`,'small',480)}
      else if(type==='bonus-end'){setBeat('judge',520);hideMeter()}
      else if(type==='at-open'||(type==='mode-change'&&x.next==='at')){setBeat('at');hitPulse();show('OCEAN RECORD','gold',980);showMeter('at',x.awardGames||x.remaining,x.total)}
      else if(type==='at-count'){setBeat('at');showMeter('at',x.remaining,x.total)}
      else if(type==='at-continue'){setBeat('at');hitPulse();show(`+${Number(x.addedGames||1)}G`,'gold',600)}
      else if(type==='at-result'){setBeat('at');if(Number(x.payout||0)>0)show(`GET ${Number(x.payout)}枚`,'small',430)}
      else if(type==='at-end'){setBeat('judge',480);hideMeter();show(`TOTAL ${Number(x.total||0)}枚`,'gold',900)}
      else if(type==='normal-return'){setBeat('quiet');hideMeter()}
    });
    return true;
  }
  function probe(){if(!install())setTimeout(probe,120)}
  rootFrame?.addEventListener('load',()=>setTimeout(probe,100));probe();
})();

/* Game & Reel Product Run 5 — pachislot stop-information semantic bridge.
 * This block owns no visuals, payouts, probabilities or reel-control. It derives
 * reusable weak/medium/strong STOP information from the canonical reel Game Events
 * so Visual/Sound/QA can react to the same evidence without inventing their own logic.
 */
(()=>{
  const rootFrame=document.getElementById('shell');
  const getGameDoc=()=>{try{const a=rootFrame?.contentDocument,b=a?.getElementById('shell'),c=b?.contentDocument,g=c?.getElementById('game');return g?.contentDocument||null}catch(_){return null}};
  const scoreOf=x=>Math.max(0,Number(x?.evidence?.score??x?.score??0)||0);
  const symbolOf=x=>String(x?.symbol||'');
  const stopBand=(ordinal,x)=>{
    const score=scoreOf(x),symbol=symbolOf(x);
    if(ordinal===1){if(symbol.includes('七'))return'medium';if(/[鍵月]/.test(symbol)||score>=1)return'weak';return'quiet'}
    if(ordinal===2){if(score>=3)return'strong';if(score>=2)return'medium';if(score>=1)return'weak';return'quiet'}
    if(score>=3)return'strong';if(score>=2)return'medium';if(score>=1)return'weak';return'quiet';
  };
  const resolveBand=x=>{const payout=Math.max(0,Number(x?.payout||x?.evidence?.payout||0)||0),score=scoreOf(x);if(payout>0)return'pay';if(score>=3)return'strong';if(score>=2)return'chance';if(score>=1)return'hint';return'plain'};
  function install(){
    const d=getGameDoc();if(!d||d.documentElement.dataset.gameReelProductRun5==='1')return false;
    const machine=d.querySelector('.machine');if(!machine)return false;
    d.documentElement.dataset.gameReelProductRun5='1';
    let quietRun=0,lastOutcome='plain',lastStopBand='quiet';
    const relay=(type,detail={})=>d.dispatchEvent(new CustomEvent('nocturne:game-event',{detail:{type,semanticOnly:true,prototypeRule:true,...detail}}));
    d.addEventListener('nocturne:game-event',ev=>{
      const x=ev.detail||{},type=String(x.type||'');if(type.startsWith('pachi-'))return;
      if(type==='bet'&&x.mode==='normal'){
        quietRun=(lastOutcome==='plain'||lastOutcome==='miss')?quietRun+1:0;
        machine.dataset.pachiQuietRun=String(quietRun);machine.dataset.pachiStopBand='quiet';
        relay('pachi-normal-rhythm',{quietRun,lastOutcome,gameNo:x.gameNo,mode:x.mode});
      }else if(type==='lever'){
        const carry=Math.max(0,Number(x.carry||0)||0),tier=x.tier||'base';
        const band=tier==='omen'?'strong':tier==='rise'?'medium':tier==='whisper'?'weak':'quiet';
        machine.dataset.pachiLeverBand=band;
        relay('pachi-lever-read',{band,tier,carry,quietRun,mode:x.mode,gameNo:x.gameNo});
      }else if(type==='reel-role'){
        const ordinal=Math.max(1,Math.min(3,Number(x.ordinal||1)||1)),band=stopBand(ordinal,x);lastStopBand=band;
        machine.dataset.pachiStopBand=band;machine.dataset.pachiStopOrdinal=String(ordinal);
        relay('pachi-stop-read',{ordinal,reelIndex:x.reelIndex,band,symbol:x.symbol,evidence:x.evidence,previousBand:lastStopBand,mode:x.mode,gameNo:x.gameNo});
      }else if(type==='resolve'){
        const outcome=resolveBand(x);lastOutcome=outcome;machine.dataset.pachiOutcome=outcome;machine.dataset.pachiRole=String(x.role||x.evidence?.role||'PARTIAL');
        if(outcome!=='plain')quietRun=0;
        relay('pachi-role-resolved',{outcome,role:x.role||x.evidence?.role||'PARTIAL',payout:Number(x.payout||0),evidence:x.evidence,stopBand:lastStopBand,mode:x.mode,gameNo:x.gameNo});
      }else if(type==='miss'){
        lastOutcome='miss';machine.dataset.pachiOutcome='miss';relay('pachi-payoff-window',{phase:'miss',outcome:'miss',evidence:x.evidence,carry:x.carry,gameNo:x.gameNo});
      }else if(type==='win'){
        lastOutcome='win';quietRun=0;machine.dataset.pachiOutcome='win';relay('pachi-payoff-window',{phase:'win',outcome:'win',evidence:x.evidence,carry:x.carry,gameNo:x.gameNo});
      }else if(type==='bonus-open'){
        quietRun=0;relay('pachi-payoff-window',{phase:'bonus-open',outcome:'bonus',remaining:x.remaining,evidence:x.evidence,gameNo:x.gameNo});
      }else if(type==='at-open'){
        quietRun=0;relay('pachi-payoff-window',{phase:'at-open',outcome:'at',remaining:x.awardGames||x.remaining,total:x.total,gameNo:x.gameNo});
      }else if(type==='normal-return'){
        lastOutcome='return';quietRun=0;machine.dataset.pachiOutcome='return';relay('pachi-payoff-window',{phase:'normal-return',outcome:'return',gameNo:x.gameNo});
      }
    });
    relay('pachi-semantic-ready',{model:'stop-information-v1',probabilityAuthority:'none',reelControlAuthority:'none'});
    return true;
  }
  function probe(){if(!install())setTimeout(probe,120)}
  rootFrame?.addEventListener('load',()=>setTimeout(probe,110));probe();
})();