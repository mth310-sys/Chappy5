// ZELVOLT bonus成立 hold core v0.1
// Keeps BIG/REG internally成立 until the player actually aligns the bonus symbols.
(()=>{
  let pendingType=null;
  let pendingSymbol=null;
  let heldMisses=0;

  const baseChooseResult=chooseResult;
  chooseResult=function(){
    if(pendingType){
      return{type:pendingType,symbol:pendingSymbol,held:true};
    }
    const chosen=baseChooseResult();
    if(chosen&&['BIG','REG'].includes(chosen.type)){
      pendingType=chosen.type;
      pendingSymbol=chosen.symbol;
      heldMisses=0;
      bridge('bonus-internal-hit',{bonusType:pendingType,targetSymbol:pendingSymbol});
    }
    return chosen;
  };

  const baseCompleteSpin=completeSpin;
  completeSpin=function(result){
    const tryingBonus=['BIG','REG'].includes(resultType);
    const aligned=tryingBonus&&result===resultType;

    if(tryingBonus&&!aligned){
      bet=0;
      pay=0;
      totalGames++;
      heldMisses++;
      currentBonusType=null;
      setGameState(GAME_STATE.NORMAL_READY,{bonusType:null});
      if(typeof setCharge==='function')setCharge(false);
      if(typeof setLamp==='function')setLamp('off');
      update();
      bridge('bonus-held-miss',{
        bonusType:pendingType||resultType,
        targetSymbol:pendingSymbol||targetSymbol,
        heldMisses,
        pending:true
      });
      bridge('spin-complete',{
        result:'MISS',payout:0,resultType,setting,
        bonusPending:true,pendingBonusType:pendingType||resultType,
        pendingBonusSymbol:pendingSymbol||targetSymbol,heldMisses
      });
      return;
    }

    if(aligned){
      const releasedType=pendingType||resultType;
      const releasedSymbol=pendingSymbol||targetSymbol;
      pendingType=null;
      pendingSymbol=null;
      heldMisses=0;
      bridge('bonus-held-release',{bonusType:releasedType,targetSymbol:releasedSymbol});
    }

    baseCompleteSpin(result);
  };

  const baseResetGame=resetGame;
  resetGame=function(){
    pendingType=null;
    pendingSymbol=null;
    heldMisses=0;
    baseResetGame();
  };

  window.ZELVOLT_BONUS_HOLD={
    getState:()=>({pending:!!pendingType,type:pendingType,symbol:pendingSymbol,heldMisses})
  };
})();
