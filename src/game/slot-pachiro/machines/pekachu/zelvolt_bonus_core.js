// ZELVOLT bonus / reel presentation engine v0.4
// Extends the current Pekachu baseline without replacing its cabinet UI.

const BONUS_SPEC=Object.freeze({
  BIG:{games:55,net:600,totalPayout:765,payouts:[...Array(50).fill(14),...Array(5).fill(13)]},
  REG:{games:14,net:120,totalPayout:162,payouts:[...Array(8).fill(12),...Array(6).fill(11)]}
});

const BONUS_REEL_PATTERNS=Object.freeze({
  BIG:[['7R','BELL','7R'],['BELL','7R','BELL'],['7W','BELL','7W'],['STAR','7R','STAR'],['GRAPE','BELL','GRAPE']],
  REG:[['BAR','BELL','BAR'],['BELL','BAR','BELL'],['GRAPE','BAR','GRAPE'],['CHERRY','BAR','CHERRY']]
});

const NORMAL_REEL_PATTERNS=Object.freeze({
  REPLAY:[['BELL','GRAPE','BELL'],['GRAPE','STAR','GRAPE'],['BAR','BELL','STAR']],
  MISS:[['BELL','GRAPE','STAR'],['GRAPE','BAR','BELL'],['STAR','CHERRY','GRAPE'],['7R','BELL','BAR'],['BAR','GRAPE','7W']]
});

const NOTICE_PROFILE=Object.freeze({
  DIRECT:'DIRECT',
  STEP:'STEP',
  SILENT:'SILENT'
});

let bigCount=0,regCount=0,bonusGame=0,bonusGamesTotal=0,bonusPayoutPlan=[],bonusNetStartCredit=0;
let bonusVisualPattern=['BELL','GRAPE','STAR'];
let normalVisualPattern=['BELL','GRAPE','STAR'];
let hitFlashTimer=null,boltTimer=null;
let noticeProfile=NOTICE_PROFILE.STEP;

function shuffleCopy(values){
  const out=[...values];
  for(let i=out.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [out[i],out[j]]=[out[j],out[i]];
  }
  return out;
}

function chooseFrom(list){
  return [...list[Math.floor(Math.random()*list.length)]];
}

function chooseNoticeProfile(){
  const r=Math.random();
  if(r<.35)return NOTICE_PROFILE.DIRECT;
  if(r<.80)return NOTICE_PROFILE.STEP;
  return NOTICE_PROFILE.SILENT;
}

function ensureBonusHud(){
  if(document.getElementById('zelvoltBonusHud'))return;
  const style=document.createElement('style');
  style.textContent=`
    #zelvoltBonusHud{display:none;position:relative;z-index:2;margin:0 0 7px;padding:8px 10px;border:2px solid #ffe600;border-radius:12px;background:linear-gradient(180deg,#151000,#030303);box-shadow:0 0 16px #ffda00,inset 0 0 14px #000;color:#fff7b0;font-family:"Courier New",monospace}
    #zelvoltBonusHud.on{display:block}
    #zelvoltBonusHud .zbh-title{font-size:18px;font-weight:900;letter-spacing:1px;color:#fff200;text-shadow:0 0 10px #ffd000}
    #zelvoltBonusHud.reg .zbh-title{color:#ffb45b;text-shadow:0 0 10px #ff7a00}
    #zelvoltBonusHud .zbh-row{display:flex;justify-content:space-between;gap:8px;margin-top:4px;font-size:12px}
    #zelvoltBonusHud .zbh-value{font-size:18px;font-weight:900;color:#fff}
    #zelvoltHitFlash{display:none;position:absolute;z-index:8;left:18px;right:18px;top:112px;padding:14px 6px;border:3px solid #fff200;border-radius:16px;background:rgba(0,0,0,.88);font-weight:1000;font-size:27px;letter-spacing:1px;color:#fff200;text-shadow:0 0 12px #fff200,0 0 24px #fff;box-shadow:0 0 30px #fff200,0 0 55px #ff9a00;pointer-events:none}
    #zelvoltHitFlash.on{display:block;animation:zelvoltHit .72s ease-out}
    #zelvoltHitFlash.white{color:#e8d7ff;border-color:#c792ff;text-shadow:0 0 12px #fff,0 0 28px #a55cff;box-shadow:0 0 32px #d9b7ff,0 0 58px #8a46ff}
    #zelvoltHitFlash.reg{color:#ffb45b;border-color:#ff8a00;text-shadow:0 0 12px #ffb45b,0 0 24px #ff4d00;box-shadow:0 0 30px #ff8a00,0 0 52px #ff4d00}
    #zelvoltBolt{display:none;position:absolute;z-index:7;inset:70px 12px auto;height:220px;align-items:center;justify-content:center;font-size:110px;color:#fff200;text-shadow:0 0 16px #fff,0 0 34px #ffe600,0 0 64px #ff8a00;pointer-events:none;mix-blend-mode:screen}
    #zelvoltBolt.on{display:flex;animation:zelvoltBoltPulse .34s ease-out}
    #zelvoltBolt.white{color:#e7dcff;text-shadow:0 0 18px #fff,0 0 40px #b370ff,0 0 70px #7940ff}
    #zelvoltBolt.reg{color:#ffb45b;text-shadow:0 0 16px #fff,0 0 34px #ff8a00,0 0 60px #ff3d00}
    body.zelvolt-hit .machine{filter:brightness(1.32)}
    body.zelvolt-charge .machine{filter:brightness(1.16)}
    body.zelvolt-star .machine{filter:brightness(1.2)}
    body.zelvolt-big .machine{box-shadow:0 0 42px #ffe600,0 0 80px #fff200,inset 0 0 34px #000}
    body.zelvolt-reg .machine{box-shadow:0 0 34px #ff9a00,0 0 58px #ff5a00,inset 0 0 34px #000}
    body.zelvolt-big .top-led{animation:topRun .38s infinite linear;filter:brightness(1.45)}
    body.zelvolt-reg .top-led{animation:topRun .72s infinite linear}
    body.zelvolt-charge .led-side{animation:zelvoltCharge .24s infinite alternate}
    body.zelvolt-star .top-led{animation:zelvoltStar .18s 3 alternate}
    .reel.zelvolt-stop{animation:zelvoltStop .16s ease-out}
    .reel.zelvolt-hit-stop{animation:zelvoltHitStop .24s ease-out}
    @keyframes zelvoltStop{0%{transform:translateY(-5px);filter:brightness(2)}100%{transform:none;filter:none}}
    @keyframes zelvoltHitStop{0%{transform:translateY(-8px) scale(1.04);filter:brightness(2.5)}100%{transform:none;filter:none}}
    @keyframes zelvoltHit{0%{transform:scale(.76);opacity:0}30%{transform:scale(1.08);opacity:1}100%{transform:scale(1);opacity:1}}
    @keyframes zelvoltBoltPulse{0%{transform:scale(.55);opacity:0}35%{transform:scale(1.18);opacity:1}100%{transform:scale(1);opacity:.15}}
    @keyframes zelvoltCharge{from{filter:brightness(.65)}to{filter:brightness(2.15)}}
    @keyframes zelvoltStar{from{filter:brightness(.7)}to{filter:brightness(2.3)}}
  `;
  document.head.appendChild(style);
  const hud=document.createElement('div');
  hud.id='zelvoltBonusHud';
  hud.innerHTML='<div class="zbh-title" id="zbhTitle">BIG BONUS</div><div class="zbh-row"><span>GAME <b class="zbh-value" id="zbhGame">0/0</b></span><span>GET <b class="zbh-value" id="zbhGet">0</b></span><span>PAY <b class="zbh-value" id="zbhPay">0</b></span></div>';
  const center=document.querySelector('.center-panel');
  if(center)center.insertAdjacentElement('afterend',hud);
  const machine=document.querySelector('.machine');
  const flash=document.createElement('div');
  flash.id='zelvoltHitFlash';
  if(machine)machine.appendChild(flash);
  const bolt=document.createElement('div');
  bolt.id='zelvoltBolt';
  bolt.textContent='⚡';
  if(machine)machine.appendChild(bolt);
}

function updateBonusHud(){
  ensureBonusHud();
  const hud=document.getElementById('zelvoltBonusHud');
  if(!hud)return;
  const active=['BIG','REG'].includes(currentBonusType)&&[GAME_STATE.BONUS_START,GAME_STATE.BIG_PLAY,GAME_STATE.REG_PLAY,GAME_STATE.BONUS_END].includes(currentState);
  hud.classList.toggle('on',active);
  hud.classList.toggle('reg',currentBonusType==='REG');
  document.body.classList.toggle('zelvolt-big',active&&currentBonusType==='BIG');
  document.body.classList.toggle('zelvolt-reg',active&&currentBonusType==='REG');
  if(!active)return;
  document.getElementById('zbhTitle').textContent=currentBonusType==='BIG'?'⚡ BIG BONUS ⚡':'REG BONUS';
  document.getElementById('zbhGame').textContent=`${Math.min(bonusGame,bonusGamesTotal)}/${bonusGamesTotal}`;
  document.getElementById('zbhGet').textContent=Math.max(0,credit-bonusNetStartCredit);
  document.getElementById('zbhPay').textContent=pay;
}

function chooseBonusReelPattern(){
  const list=BONUS_REEL_PATTERNS[currentBonusType]||BONUS_REEL_PATTERNS.BIG;
  return chooseFrom(list);
}

function chooseNormalReelPattern(){
  if(resultType==='BIG')return [targetSymbol,targetSymbol,targetSymbol];
  if(resultType==='REG')return ['BAR','BAR','BAR'];
  if(resultType==='STAR')return ['STAR','STAR','STAR'];
  if(resultType==='BELL')return ['BELL','BELL','BELL'];
  if(resultType==='GRAPE')return ['GRAPE','GRAPE','GRAPE'];
  if(resultType==='CHERRY')return ['CHERRY','BELL','GRAPE'];
  if(resultType==='REPLAY')return chooseFrom(NORMAL_REEL_PATTERNS.REPLAY);
  return chooseFrom(NORMAL_REEL_PATTERNS.MISS);
}

function animateStoppedReel(i,isHit=false){
  const el=document.getElementById('r'+(i+1));
  if(!el)return;
  el.classList.remove('zelvolt-stop','zelvolt-hit-stop');
  void el.offsetWidth;
  el.classList.add(isHit?'zelvolt-hit-stop':'zelvolt-stop');
}

function pulseBolt(kind='normal',duration=360){
  ensureBonusHud();
  const bolt=document.getElementById('zelvoltBolt');
  if(!bolt)return;
  if(boltTimer){clearTimeout(boltTimer);boltTimer=null}
  bolt.classList.remove('on','white','reg');
  if(kind==='white')bolt.classList.add('white');
  if(kind==='reg')bolt.classList.add('reg');
  void bolt.offsetWidth;
  bolt.classList.add('on');
  boltTimer=setTimeout(()=>{bolt.classList.remove('on','white','reg');boltTimer=null},duration);
}

function setCharge(active){
  document.body.classList.toggle('zelvolt-charge',active);
}

function playStarFlash(){
  document.body.classList.add('zelvolt-star');
  pulseBolt('normal',320);
  setTimeout(()=>document.body.classList.remove('zelvolt-star'),620);
  bridge('star-flash',{phase:'result'});
}

function showBonusHit(){
  ensureBonusHud();
  const flash=document.getElementById('zelvoltHitFlash');
  if(!flash)return;
  if(hitFlashTimer){clearTimeout(hitFlashTimer);hitFlashTimer=null}
  flash.classList.remove('on','white','reg');
  const white=currentBonusType==='BIG'&&targetSymbol==='7W';
  if(white)flash.classList.add('white');
  if(currentBonusType==='REG')flash.classList.add('reg');
  flash.textContent=currentBonusType==='REG'?'⚡ REG BONUS ⚡':white?'⚡ WHITE BIG ⚡':'⚡ BIG BONUS ⚡';
  document.body.classList.add('zelvolt-hit');
  setCharge(false);
  pulseBolt(currentBonusType==='REG'?'reg':white?'white':'normal',500);
  void flash.offsetWidth;
  flash.classList.add('on');
  hitFlashTimer=setTimeout(()=>{
    flash.classList.remove('on','white','reg');
    document.body.classList.remove('zelvolt-hit');
    hitFlashTimer=null;
  },820);
}

bridge=function(type,extra={}){
  if(!pachiroMode||window.parent===window)return;
  window.parent.postMessage({
    source:'pekachu',type,machineId,setting,credit,bet,pay,totalGames,bonusCount,
    bigCount,regCount,currentState,currentBonusType,bonusGame,bonusGamesTotal,...extra
  },location.origin);
};

function beginBonus(){
  if(currentState!==GAME_STATE.BONUS_HIT||!['BIG','REG'].includes(currentBonusType))return;
  const spec=BONUS_SPEC[currentBonusType];
  bonusGame=0;
  bonusGamesTotal=spec.games;
  bonusPayoutPlan=shuffleCopy(spec.payouts);
  bonusNetStartCredit=credit;
  bet=0;
  pay=0;
  setGameState(GAME_STATE.BONUS_START,{bonusType:currentBonusType});
  bridge('bonus-start',{bonusType:currentBonusType,games:spec.games,targetNet:spec.net});
  msg(currentBonusType==='BIG'?'BIG BONUS START！ 55G':'REG BONUS START！ 14G',currentBonusType==='BIG'?'super':'big');
  setLamp(currentBonusType==='BIG'?'super':'big');
  updateBonusHud();
  update();
  setTimeout(()=>{
    if(currentState!==GAME_STATE.BONUS_START)return;
    setGameState(currentBonusType==='BIG'?GAME_STATE.BIG_PLAY:GAME_STATE.REG_PLAY,{bonusType:currentBonusType});
    msg(`${currentBonusType} ${bonusGame+1}/${bonusGamesTotal}G - START`,currentBonusType==='BIG'?'super':'big');
    updateBonusHud();
    update();
  },650);
}

function startBonusSpin(){
  if(![GAME_STATE.BIG_PLAY,GAME_STATE.REG_PLAY].includes(currentState)||spinning.includes(true))return;
  hidePayEffect();
  stopped=0;
  pay=0;
  bet=0;
  resultType='BONUS_PAY';
  targetSymbol=null;
  bonusVisualPattern=chooseBonusReelPattern();
  msg(`${currentBonusType} ${bonusGame+1}/${bonusGamesTotal}G`,currentBonusType==='BIG'?'super':'big');
  for(let i=0;i<3;i++){
    spinning[i]=true;
    timers[i]=setInterval(()=>{reels[i]=rand();drawReel(i)},55);
  }
  bridge('bonus-spin-start',{bonusType:currentBonusType,bonusGame:bonusGame+1});
  updateBonusHud();
  update();
}

function stopBonusReel(i){
  if(![GAME_STATE.BIG_PLAY,GAME_STATE.REG_PLAY].includes(currentState)||!spinning[i])return;
  clearInterval(timers[i]);
  spinning[i]=false;
  reels[i]=bonusVisualPattern[i]||rand();
  drawReel(i);
  animateStoppedReel(i);
  stopped++;
  if(stopped===3)completeBonusGame();
  update();
}

function stopNormalReel(i){
  if(currentState!==GAME_STATE.NORMAL_SPIN||!spinning[i])return;
  clearInterval(timers[i]);
  spinning[i]=false;
  reels[i]=normalVisualPattern[i]||rand();
  drawReel(i);
  const isBonus=['BIG','REG'].includes(resultType);
  animateStoppedReel(i,isBonus);
  stopped++;

  if(isBonus){
    if(noticeProfile===NOTICE_PROFILE.DIRECT){
      if(stopped===1)pulseBolt(resultType==='REG'?'reg':targetSymbol==='7W'?'white':'normal',300);
      if(stopped<3)msg(stopped===1?'⚡ BONUS SIGNAL':'⚡⚡ VOLT MAX',resultType==='BIG'?'super':'big');
    }else if(noticeProfile===NOTICE_PROFILE.STEP){
      setCharge(true);
      if(stopped===1){msg('⚡ 電圧上昇…',resultType==='BIG'?'super':'big');pulseBolt(resultType==='REG'?'reg':'normal',230)}
      if(stopped===2){msg('⚡⚡ 限界電圧…',resultType==='BIG'?'super':'big');pulseBolt(resultType==='REG'?'reg':targetSymbol==='7W'?'white':'normal',330)}
    }else if(stopped<3){
      msg('リール回転中');
    }
  }

  if(stopped===3){
    setGameState(GAME_STATE.NORMAL_RESULT);
    judge();
    if(resultType==='STAR')playStarFlash();
  }
  update();
}

function completeBonusGame(){
  const payoutValue=bonusPayoutPlan[bonusGame]??0;
  pay=payoutValue;
  credit+=payoutValue-3;
  bonusGame++;
  totalGames++;
  showPayEffect(pay);
  bridge('bonus-game-complete',{
    bonusType:currentBonusType,bonusGame,bonusGamesTotal,payout:pay,netThisGame:pay-3
  });

  updateBonusHud();
  if(bonusGame>=bonusGamesTotal){
    finishBonus();
    return;
  }
  msg(`${currentBonusType} ${bonusGame}/${bonusGamesTotal}G  PAY ${pay}`,currentBonusType==='BIG'?'super':'big');
  update();
}

function finishBonus(){
  const endedType=currentBonusType;
  const spec=BONUS_SPEC[endedType];
  const actualNet=credit-bonusNetStartCredit;
  setGameState(GAME_STATE.BONUS_END,{bonusType:endedType});
  if(endedType==='BIG')bigCount++;else regCount++;
  msg(`${endedType} END  GET +${actualNet}枚`,endedType==='BIG'?'super':'big');
  bridge('bonus-end',{
    bonusType:endedType,games:spec.games,targetNet:spec.net,actualNet,
    bigCount,regCount
  });
  updateBonusHud();
  update();
  setTimeout(()=>{
    if(currentState!==GAME_STATE.BONUS_END)return;
    currentBonusType=null;
    bonusGame=0;
    bonusGamesTotal=0;
    bonusPayoutPlan=[];
    bet=0;
    pay=0;
    setLamp('off');
    setCharge(false);
    setGameState(GAME_STATE.NORMAL_READY,{bonusType:null});
    msg('BETしてください');
    bridge('bonus-return-normal',{endedType});
    updateBonusHud();
    update();
  },1100);
}

const baseUpdate=update;
update=function(){
  document.getElementById('credit').textContent=credit;
  document.getElementById('bet').textContent=bet;
  document.getElementById('pay').textContent=pay;
  const bonusReady=[GAME_STATE.BIG_PLAY,GAME_STATE.REG_PLAY].includes(currentState);
  document.getElementById('startBtn').disabled=!((currentState===GAME_STATE.NORMAL_BET&&bet===3)||bonusReady)||spinning.includes(true);
  for(let i=0;i<3;i++){
    const normalStop=currentState===GAME_STATE.NORMAL_SPIN&&spinning[i];
    const bonusStop=bonusReady&&spinning[i];
    document.getElementById('s'+(i+1)).disabled=!(normalStop||bonusStop);
  }
  updateBonusHud();
  bridge('state');
};

const baseStart=start;
start=function(){
  if([GAME_STATE.BIG_PLAY,GAME_STATE.REG_PLAY].includes(currentState)){
    startBonusSpin();
    return;
  }
  baseStart();
  if(currentState===GAME_STATE.NORMAL_SPIN){
    normalVisualPattern=chooseNormalReelPattern();
    noticeProfile=chooseNoticeProfile();
    setCharge(false);
    if(resultType==='BIG'||resultType==='REG'){
      const noticeKind=resultType==='REG'?'reg':targetSymbol==='7W'?'white':'normal';
      if(noticeProfile===NOTICE_PROFILE.DIRECT){
        setLamp(resultType==='REG'?'big':targetSymbol==='7W'?'super':'big');
        pulseBolt(noticeKind,320);
        msg(resultType==='REG'?'⚡ REG SIGNAL':'⚡ BONUS SIGNAL',resultType==='BIG'?'super':'big');
      }else if(noticeProfile===NOTICE_PROFILE.STEP){
        setCharge(true);
        msg('…微弱な電圧を検知');
      }else{
        setLamp('off');
        msg('リール回転中');
      }
      bridge('bonus-notice',{bonusType:resultType,targetSymbol,phase:'start',noticeProfile});
    }else if(resultType==='STAR'){
      msg('STARチャンス');
    }
  }
};

const baseStop=stop;
stop=function(i){
  if([GAME_STATE.BIG_PLAY,GAME_STATE.REG_PLAY].includes(currentState)){
    stopBonusReel(i);
    return;
  }
  if(currentState===GAME_STATE.NORMAL_SPIN){
    stopNormalReel(i);
    return;
  }
  baseStop(i);
};

const baseCompleteSpin=completeSpin;
completeSpin=function(result){
  baseCompleteSpin(result);
  if(currentState===GAME_STATE.BONUS_HIT){
    if(noticeProfile===NOTICE_PROFILE.SILENT){
      setLamp(currentBonusType==='REG'?'big':targetSymbol==='7W'?'super':'big');
    }
    showBonusHit();
    bridge(currentBonusType==='BIG'?'big-hit':'reg-hit',{result,targetSymbol,noticeProfile});
    setTimeout(beginBonus,900);
  }else{
    setCharge(false);
  }
};

const baseResetGame=resetGame;
resetGame=function(){
  bigCount=0;
  regCount=0;
  bonusGame=0;
  bonusGamesTotal=0;
  bonusPayoutPlan=[];
  bonusNetStartCredit=0;
  normalVisualPattern=['BELL','GRAPE','STAR'];
  noticeProfile=NOTICE_PROFILE.STEP;
  if(hitFlashTimer){clearTimeout(hitFlashTimer);hitFlashTimer=null}
  if(boltTimer){clearTimeout(boltTimer);boltTimer=null}
  document.body.classList.remove('zelvolt-big','zelvolt-reg','zelvolt-hit','zelvolt-charge','zelvolt-star');
  const hud=document.getElementById('zelvoltBonusHud');
  if(hud)hud.classList.remove('on','reg');
  const flash=document.getElementById('zelvoltHitFlash');
  if(flash)flash.classList.remove('on','white','reg');
  const bolt=document.getElementById('zelvoltBolt');
  if(bolt)bolt.classList.remove('on','white','reg');
  baseResetGame();
};

ensureBonusHud();
updateBonusHud();
update();
