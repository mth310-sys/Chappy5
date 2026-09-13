// ZELVOLT bonus physical-reel bridge v0.1
// Makes BIG/REG spins use the same physical reel engine as normal play and pays only after all three reels have physically settled.
(()=>{
  let settling=false;
  let settleGeneration=0;
  let requestedStops=0;
  let lastPhysicalOutcome=null;

  function clone(value){
    if(value==null)return value;
    try{return structuredClone(value)}catch(_){return JSON.parse(JSON.stringify(value))}
  }

  function bonusPlayable(){
    return [GAME_STATE.BIG_PLAY,GAME_STATE.REG_PLAY].includes(currentState)
  }

  function syncLogicalReelsFromPhysical(){
    const state=window.ZELVOLT_REELS?.getState?.();
    if(!Array.isArray(state)||state.length!==3)return null;
    for(let i=0;i<3;i++){
      const middle=state[i]?.rows?.[1];
      if(middle)reels[i]=middle;
    }
    lastPhysicalOutcome={
      state:clone(state),
      outcome:clone(window.ZELVOLT_REELS?.getOutcome?.()),
      stopOrder:clone(window.ZELVOLT_REELS?.getOutcome?.()?.stopOrder)||[]
    };
    return lastPhysicalOutcome
  }

  function physicalSettled(){
    const state=window.ZELVOLT_REELS?.getState?.();
    return Array.isArray(state)&&state.length===3&&state.every(v=>
      !v.spinning&&!v.stopping&&Number.isInteger(v.stopIndex)
    )
  }

  function waitForPhysicalSettlement(){
    const generation=++settleGeneration;
    settling=true;
    const started=performance.now();
    const poll=()=>{
      if(generation!==settleGeneration)return;
      if(!bonusPlayable()){
        settling=false;
        return
      }
      if(physicalSettled()){
        syncLogicalReelsFromPhysical();
        settling=false;
        requestedStops=0;
        bridge('bonus-physical-settled',{
          bonusType:currentBonusType,
          bonusGame:bonusGame+1,
          outcome:lastPhysicalOutcome
        });
        completeBonusGame();
        update();
        return
      }
      if(performance.now()-started>4000){
        syncLogicalReelsFromPhysical();
        settling=false;
        requestedStops=0;
        bridge('bonus-physical-timeout',{
          bonusType:currentBonusType,
          bonusGame:bonusGame+1,
          outcome:lastPhysicalOutcome
        });
        completeBonusGame();
        update();
        return
      }
      requestAnimationFrame(poll)
    };
    requestAnimationFrame(poll)
  }

  startBonusSpin=function(){
    if(!bonusPlayable()||spinning.includes(true)||settling)return;
    hidePayEffect();
    settleGeneration++;
    settling=false;
    requestedStops=0;
    lastPhysicalOutcome=null;
    stopped=0;
    pay=0;
    bet=0;
    resultType='BONUS_PAY';
    targetSymbol=null;
    bonusVisualPattern=chooseBonusReelPattern();
    msg(`${currentBonusType} ${bonusGame+1}/${bonusGamesTotal}G`,currentBonusType==='BIG'?'super':'big');
    for(let i=0;i<3;i++){
      spinning[i]=true;
      if(timers[i]!=null){clearInterval(timers[i]);timers[i]=null}
    }
    bridge('bonus-spin-start',{
      bonusType:currentBonusType,
      bonusGame:bonusGame+1,
      physical:true
    });
    updateBonusHud();
    update()
  };

  stopBonusReel=function(i){
    if(!bonusPlayable()||!spinning[i]||settling)return;
    if(timers[i]!=null){clearInterval(timers[i]);timers[i]=null}
    spinning[i]=false;
    drawReel(i);
    animateStoppedReel(i);
    stopped++;
    requestedStops++;
    bridge('bonus-physical-stop-request',{
      bonusType:currentBonusType,
      bonusGame:bonusGame+1,
      reel:i,
      stopNumber:requestedStops
    });
    if(stopped===3)waitForPhysicalSettlement();
    update()
  };

  const baseUpdate=update;
  update=function(){
    baseUpdate();
    if(settling){
      const startBtn=document.getElementById('startBtn');
      if(startBtn)startBtn.disabled=true
    }
  };

  const baseResetGame=resetGame;
  resetGame=function(){
    settleGeneration++;
    settling=false;
    requestedStops=0;
    lastPhysicalOutcome=null;
    baseResetGame()
  };

  window.ZELVOLT_BONUS_PHYSICAL={
    version:'0.1',
    isSettling:()=>settling,
    getLastOutcome:()=>clone(lastPhysicalOutcome),
    getState:()=>({
      settling,
      requestedStops,
      physicalReady:!!window.ZELVOLT_REELS,
      lastOutcome:clone(lastPhysicalOutcome)
    })
  };
})();
