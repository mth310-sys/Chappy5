// ZELVOLT BIG / REG lifecycle and accounting guard v0.2
// Adds explicit bonus-session state without changing the accepted reel feel or payout plan.
(()=>{
  const sessions=[];
  const HISTORY_LIMIT=20;
  let sequence=0;
  let session=null;

  const clone=value=>{
    if(value==null)return value;
    try{return structuredClone(value)}catch(_){return JSON.parse(JSON.stringify(value))}
  };

  function specFor(type){
    return BONUS_SPEC?.[type]||null
  }

  function expectedTotals(type){
    const spec=specFor(type);
    if(!spec)return null;
    return{
      games:spec.games,
      totalIn:spec.games*3,
      totalOut:spec.totalPayout,
      net:spec.net
    }
  }

  function openSession(){
    const type=currentBonusType;
    const spec=specFor(type);
    if(!spec)return null;
    const expected=expectedTotals(type);
    session={
      id:++sequence,
      type,
      phase:'START',
      startedAt:Date.now(),
      startCredit:bonusNetStartCredit,
      expected,
      completedGames:0,
      totalIn:0,
      totalOut:0,
      net:0,
      spinInFlight:false,
      currentSpin:null,
      spins:[],
      issues:[]
    };
    bridge('bonus-flow-open',{sessionId:session.id,bonusType:type,expected});
    return session
  }

  function ensureSession(){
    if(session&&session.type===currentBonusType)return session;
    return openSession()
  }

  function beginSpinRecord(){
    const s=ensureSession();
    if(!s)return null;
    if(s.spinInFlight){
      s.issues.push('BONUS_SPIN_OVERLAP');
      return s.currentSpin
    }
    const gameIndex=bonusGame;
    const plannedPayout=bonusPayoutPlan[gameIndex]??0;
    const spin={
      game:gameIndex+1,
      startedAt:Date.now(),
      plannedPayout,
      creditBefore:credit,
      completed:false
    };
    s.phase='PLAY';
    s.spinInFlight=true;
    s.currentSpin=spin;
    s.totalIn+=3;
    s.net=s.totalOut-s.totalIn;
    return spin
  }

  function completeSpinRecord(creditBeforeComplete){
    const s=session;
    if(!s)return null;
    const spin=s.currentSpin;
    if(!s.spinInFlight||!spin){
      s.issues.push('BONUS_COMPLETE_WITHOUT_SPIN');
      return null
    }
    const actualPayout=Number(pay)||0;
    spin.completed=true;
    spin.completedAt=Date.now();
    spin.actualPayout=actualPayout;
    spin.creditBeforeComplete=creditBeforeComplete;
    spin.creditAfter=credit;
    spin.creditDelta=credit-creditBeforeComplete;
    spin.expectedCreditDelta=actualPayout-3;
    if(actualPayout!==spin.plannedPayout)spin.issue='BONUS_PAYOUT_PLAN_MISMATCH';
    if(spin.creditDelta!==spin.expectedCreditDelta){
      spin.issue=spin.issue||'BONUS_CREDIT_DELTA_MISMATCH';
      s.issues.push('BONUS_CREDIT_DELTA_MISMATCH')
    }
    if(spin.issue==='BONUS_PAYOUT_PLAN_MISMATCH')s.issues.push(spin.issue);
    s.spins.push(spin);
    s.completedGames++;
    s.totalOut+=actualPayout;
    s.net=s.totalOut-s.totalIn;
    s.spinInFlight=false;
    s.currentSpin=null;
    bridge('bonus-flow-spin',{
      sessionId:s.id,bonusType:s.type,game:spin.game,
      payout:actualPayout,totalIn:s.totalIn,totalOut:s.totalOut,net:s.net,
      issue:spin.issue||null
    });
    return spin
  }

  function closeSession(){
    const s=session;
    if(!s)return null;
    const expected=s.expected;
    s.phase='END';
    s.endedAt=Date.now();
    s.endCredit=credit;
    s.creditNet=s.endCredit-s.startCredit;
    if(s.spinInFlight)s.issues.push('BONUS_ENDED_DURING_SPIN');
    if(s.completedGames!==expected.games)s.issues.push('BONUS_GAME_COUNT_MISMATCH');
    if(s.totalIn!==expected.totalIn)s.issues.push('BONUS_INPUT_TOTAL_MISMATCH');
    if(s.totalOut!==expected.totalOut)s.issues.push('BONUS_OUTPUT_TOTAL_MISMATCH');
    if(s.net!==expected.net)s.issues.push('BONUS_NET_TOTAL_MISMATCH');
    if(s.creditNet!==expected.net)s.issues.push('BONUS_CREDIT_NET_MISMATCH');
    s.issues=[...new Set(s.issues)];
    s.ok=s.issues.length===0;
    sessions.push(clone(s));
    if(sessions.length>HISTORY_LIMIT)sessions.shift();
    bridge(s.ok?'bonus-flow-ok':'bonus-flow-error',{
      sessionId:s.id,bonusType:s.type,issues:[...s.issues],
      completedGames:s.completedGames,totalIn:s.totalIn,totalOut:s.totalOut,
      net:s.net,creditNet:s.creditNet,expected:clone(expected)
    });
    return s
  }

  const baseBeginBonus=beginBonus;
  beginBonus=function(){
    const beforeState=currentState;
    baseBeginBonus();
    if(beforeState===GAME_STATE.BONUS_HIT&&currentState===GAME_STATE.BONUS_START)openSession()
  };

  const baseStartBonusSpin=startBonusSpin;
  startBonusSpin=function(){
    const playable=[GAME_STATE.BIG_PLAY,GAME_STATE.REG_PLAY].includes(currentState)&&!spinning.includes(true);
    if(playable)beginSpinRecord();
    baseStartBonusSpin()
  };

  const baseCompleteBonusGame=completeBonusGame;
  completeBonusGame=function(){
    const creditBeforeComplete=credit;
    baseCompleteBonusGame();
    completeSpinRecord(creditBeforeComplete)
  };

  const baseFinishBonus=finishBonus;
  finishBonus=function(){
    baseFinishBonus();
    queueMicrotask(()=>{
      const closing=closeSession();
      if(closing)session=null
    })
  };

  const baseResetGame=resetGame;
  resetGame=function(){
    session=null;
    sessions.length=0;
    sequence=0;
    baseResetGame()
  };

  window.ZELVOLT_BONUS_FLOW={
    version:'0.2',
    getCurrent:()=>clone(session),
    getHistory:()=>clone(sessions),
    getSummary:()=>({
      active:!!session,
      current:clone(session),
      sessions:sessions.length,
      ok:sessions.filter(x=>x.ok).length,
      errors:sessions.filter(x=>!x.ok).length
    })
  };
})();
