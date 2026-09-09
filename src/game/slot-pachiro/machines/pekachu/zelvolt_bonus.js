// ZELVOLT bonus engine v0.1
// Extends the current Pekachu baseline without replacing its cabinet UI.

const BONUS_SPEC=Object.freeze({
  BIG:{games:55,net:600,totalPayout:765,payouts:[...Array(50).fill(14),...Array(5).fill(13)]},
  REG:{games:14,net:120,totalPayout:162,payouts:[...Array(8).fill(12),...Array(6).fill(11)]}
});

let bigCount=0,regCount=0,bonusGame=0,bonusGamesTotal=0,bonusPayoutPlan=[],bonusNetStartCredit=0;

function shuffleCopy(values){
  const out=[...values];
  for(let i=out.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [out[i],out[j]]=[out[j],out[i]];
  }
  return out;
}

const baseBridge=bridge;
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
  update();
  setTimeout(()=>{
    if(currentState!==GAME_STATE.BONUS_START)return;
    setGameState(currentBonusType==='BIG'?GAME_STATE.BIG_PLAY:GAME_STATE.REG_PLAY,{bonusType:currentBonusType});
    msg(`${currentBonusType} ${bonusGame+1}/${bonusGamesTotal}G - START`,currentBonusType==='BIG'?'super':'big');
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
  msg(`${currentBonusType} ${bonusGame+1}/${bonusGamesTotal}G`,currentBonusType==='BIG'?'super':'big');
  for(let i=0;i<3;i++){
    spinning[i]=true;
    timers[i]=setInterval(()=>{reels[i]=rand();drawReel(i)},60);
  }
  bridge('bonus-spin-start',{bonusType:currentBonusType,bonusGame:bonusGame+1});
  update();
}

function stopBonusReel(i){
  if(![GAME_STATE.BIG_PLAY,GAME_STATE.REG_PLAY].includes(currentState)||!spinning[i])return;
  clearInterval(timers[i]);
  spinning[i]=false;
  reels[i]=rand();
  drawReel(i);
  stopped++;
  if(stopped===3)completeBonusGame();
  update();
}

function completeBonusGame(){
  const payoutValue=bonusPayoutPlan[bonusGame]??0;
  pay=payoutValue;
  // 3-medal input and payout are settled together so CREDIT never flashes negative.
  credit+=payoutValue-3;
  bonusGame++;
  totalGames++;
  showPayEffect(pay);
  bridge('bonus-game-complete',{
    bonusType:currentBonusType,bonusGame,bonusGamesTotal,payout:pay,netThisGame:pay-3
  });

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
    update();
  },900);
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
  baseResetGame();
};

update();
