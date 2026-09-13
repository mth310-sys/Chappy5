// ZELVOLT spin consistency auditor v0.1
// Verifies lottery -> stop control -> visible payline -> payout / bonus-hold consistency.
(()=>{
  const HISTORY_LIMIT=120;
  const history=[];
  let sequence=0;

  function clone(value){
    if(value==null)return value;
    try{return structuredClone(value)}catch(_){return JSON.parse(JSON.stringify(value))}
  }

  function expectedPayout(result){
    if(result==='BELL')return ROLE_SPEC.BELL.payout;
    if(result==='GRAPE')return ROLE_SPEC.GRAPE.payout;
    if(result==='CHERRY')return ROLE_SPEC.CHERRY.payout;
    if(result==='REPLAY')return ROLE_SPEC.REPLAY.payout;
    return 0
  }

  function validateStopOrder(outcome,issues){
    const order=outcome?.stopOrder;
    if(!Array.isArray(order)||order.length!==3){
      issues.push('STOP_ORDER_INCOMPLETE');
      return
    }
    if(new Set(order).size!==3||order.some(i=>![0,1,2].includes(i)))issues.push('STOP_ORDER_INVALID')
  }

  function validateResult(internal,actual,beforeHold,afterHold,issues){
    if(internal==='MISS'){
      if(actual!=='MISS')issues.push('MISS_BECAME_WIN');
      return
    }
    if(['BIG','REG'].includes(internal)){
      if(actual===internal){
        if(afterHold?.pending)issues.push('BONUS_ALIGNED_BUT_STILL_HELD')
      }else if(actual==='MISS'){
        if(!beforeHold?.pending&&!afterHold?.pending)issues.push('BONUS_MISS_NOT_HELD')
        if(afterHold&&!afterHold.pending)issues.push('BONUS_HOLD_LOST')
      }else{
        issues.push('BONUS_RESULT_MISMATCH')
      }
      return
    }
    if(['REPLAY','BELL','GRAPE','CHERRY'].includes(internal)){
      if(actual!==internal&&actual!=='MISS')issues.push('SMALL_ROLE_RESULT_MISMATCH')
      return
    }
    issues.push('UNKNOWN_INTERNAL_RESULT')
  }

  function audit(result,beforeHold){
    const judge=clone(window.ZELVOLT_LAST_JUDGE);
    const outcome=clone(window.ZELVOLT_REELS?.getOutcome?.());
    const afterHold=clone(window.ZELVOLT_BONUS_HOLD?.getState?.());
    const actual=judge?.result||result||'MISS';
    const internal=resultType;
    const issues=[];

    if(!outcome?.complete)issues.push('STOP_GRID_INCOMPLETE');
    validateStopOrder(outcome,issues);
    if(Array.isArray(outcome?.unintendedWins)&&outcome.unintendedWins.length)issues.push('UNINTENDED_VISIBLE_WIN');
    if(judge&&judge.result!==actual)issues.push('JUDGE_RESULT_DESYNC');
    if(judge?.outcome?.complete===false)issues.push('JUDGE_USED_INCOMPLETE_GRID');
    validateResult(internal,actual,beforeHold,afterHold,issues);

    const expected=expectedPayout(actual);
    if(Number(pay)!==expected)issues.push('PAYOUT_MISMATCH');

    const record={
      id:++sequence,
      ok:issues.length===0,
      issues,
      internalResult:internal,
      targetSymbol:targetSymbol||null,
      actualResult:actual,
      payout:Number(pay)||0,
      expectedPayout:expected,
      winningLine:judge?.winningLine?.name||null,
      activeLine:window.ZELVOLT_REELS?.getActiveLine?.()?.name||null,
      stopOrder:Array.isArray(outcome?.stopOrder)?[...outcome.stopOrder]:[],
      stoppedRows:clone(outcome?.rows)||null,
      stopControl:clone(window.ZELVOLT_REELS?.stopControl?.getLast?.())||null,
      unintendedWins:clone(outcome?.unintendedWins)||[],
      bonusHoldBefore:beforeHold||null,
      bonusHoldAfter:afterHold||null,
      stateAfter:currentState,
      totalGames
    };

    history.push(record);
    if(history.length>HISTORY_LIMIT)history.shift();
    if(!record.ok){
      console.error('[ZELVOLT consistency]',record);
      bridge('consistency-error',{audit:record})
    }else{
      bridge('consistency-ok',{auditId:record.id,internalResult:internal,actualResult:actual})
    }
    return record
  }

  const wrappedCompleteSpin=completeSpin;
  completeSpin=function(result){
    const beforeHold=clone(window.ZELVOLT_BONUS_HOLD?.getState?.());
    wrappedCompleteSpin(result);
    return audit(result,beforeHold)
  };

  const wrappedResetGame=resetGame;
  resetGame=function(){
    history.length=0;
    sequence=0;
    wrappedResetGame()
  };

  window.ZELVOLT_CONSISTENCY={
    version:'0.1',
    getLast:()=>history.length?clone(history[history.length-1]):null,
    getHistory:()=>clone(history),
    getSummary:()=>({
      spins:history.length,
      ok:history.filter(x=>x.ok).length,
      errors:history.filter(x=>!x.ok).length,
      issueCounts:history.reduce((acc,x)=>{for(const issue of x.issues)acc[issue]=(acc[issue]||0)+1;return acc},{})
    }),
    clear:()=>{history.length=0;sequence=0}
  };
})();
