// ZELVOLT bonus engine v0.2
// Extends the current Pekachu baseline without replacing its cabinet UI.

const BONUS_SPEC=Object.freeze({
  BIG:{games:55,net:600,totalPayout:765,payouts:[...Array(50).fill(14),...Array(5).fill(13)]},
  REG:{games:14,net:120,totalPayout:162,payouts:[...Array(8).fill(12),...Array(6).fill(11)]}
});

const BONUS_REEL_PATTERNS=Object.freeze({
  BIG:[['7R','BELL','7R'],['BELL','7R','BELL'],['7W','BELL','7W'],['STAR','7R','STAR'],['GRAPE','BELL','GRAPE']],
  REG:[['BAR','BELL','BAR'],['BELL','BAR','BELL'],['GRAPE','BAR','GRAPE'],['CHERRY','BAR','CHERRY']]
});

let bigCount=0,regCount=0,bonusGame=0,bonusGamesTotal=0,bonusPayoutPlan=[],bonusNetStartCredit=0;
let bonusVisualPattern=['BELL','GRAPE','STAR'];

function shuffleCopy(values){
  const out=[...values];
  for(let i=out.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [out[i],out[j]]=[out[j],out[i]];
  }
  return out;
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
    body.zelvolt-big .machine{box-shadow:0 0 42px #ffe600,0 0 80px #fff200,inset 0 0 34px #000}
    body.zelvolt-reg .machine{box-shadow:0 0 34px #ff9a00,0 0 58px #ff5a00,inset 0 0 34px #000}
    body.zelvolt-big .top-led{animation:topRun .38s infinite linear;filter:brightness(1.45)}
    body.zelvolt-reg .top-led{animation:topRun .72s infinite linear}
    .reel.zelvolt-stop{animation:zelvoltStop .16s ease-out}
    @keyframes zelvoltStop{0%{transform:translateY(-5px);filter:brightness(2)}100%{transform:none;filter:none}}
  `;
  document.head.appendChild(style);
  const hud=document.createElement('div');
  hud.id='zelvoltBonusHud';
  hud.innerHTML='<div class="zbh-title" id="zbhTitle">BIG BONUS</div><div class="zbh-row"><span>GAME <b class="zbh-value" id="zbhGame">0/0</b></span><span>GET <b class="zbh-value" id="zbhGet">0</b></span><span>PAY <b class="zbh-value" id="zbhPay">0</b></span></div>';
  const center=document.querySelector('.center-panel');
  if(center)center.insertAdjacentElement('afterend',hud);
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
  return [...list[Math.floor(Math.random()*list.length)]];
}

function animateStoppedReel(i){
  const el=document.getElementById('r'+(i+1));
  if(!el)return;
  el.classList.remove('zelvolt-stop');
  void el.offsetWidth;
  el.classList.add('zelvolt-stop');
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
};

const baseStop=stop;
stop=function(i){
  if([GAME_STATE.BIG_PLAY,GAME_STATE.REG_PLAY].includes(currentState)){
    stopBonusReel(i);
    return;
  }
  baseStop(i);
};

const baseCompleteSpin=completeSpin;
completeSpin=function(result){
  baseCompleteSpin(result);
  if(currentState===GAME_STATE.BONUS_HIT){
    bridge(currentBonusType==='BIG'?'big-hit':'reg-hit',{result,targetSymbol});
    setTimeout(beginBonus,500);
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
  document.body.classList.remove('zelvolt-big','zelvolt-reg');
  const hud=document.getElementById('zelvoltBonusHud');
  if(hud)hud.classList.remove('on','reg');
  baseResetGame();
};

ensureBonusHud();
updateBonusHud();
update();
