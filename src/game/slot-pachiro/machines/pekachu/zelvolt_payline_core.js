// ZELVOLT 5-line actual stop judge v0.1
// Judges only the symbols physically resolved by the reel engine.
(()=>{
  function sameLine(line,code){
    return line.symbols.every(symbol=>symbol===code)
  }

  function findLine(outcome,code){
    return outcome.lines.find(line=>sameLine(line,code))||null
  }

  function findCherryLine(outcome){
    return outcome.lines.find(line=>line.symbols[0]===ROLE_SPEC.CHERRY.symbols[0])||null
  }

  judge=function(){
    const outcome=window.ZELVOLT_REELS?.getOutcome?.();
    let result='MISS';
    let winningLine=null;

    if(outcome?.complete){
      if(resultType==='BIG'){
        winningLine=findLine(outcome,targetSymbol);
        if(winningLine)result='BIG';
      }else if(resultType==='REG'){
        winningLine=findLine(outcome,ROLE_SPEC.REG.symbols[0]);
        if(winningLine)result='REG';
      }else if(resultType==='BELL'){
        winningLine=findLine(outcome,ROLE_SPEC.BELL.symbols[0]);
        if(winningLine){payout(ROLE_SPEC.BELL.payout);result='BELL'}
      }else if(resultType==='GRAPE'){
        winningLine=findLine(outcome,ROLE_SPEC.GRAPE.symbols[0]);
        if(winningLine){payout(ROLE_SPEC.GRAPE.payout);result='GRAPE'}
      }else if(resultType==='CHERRY'){
        winningLine=findCherryLine(outcome);
        if(winningLine){payout(ROLE_SPEC.CHERRY.payout);result='CHERRY'}
      }else if(resultType==='REPLAY'){
        winningLine=findLine(outcome,ROLE_SPEC.REPLAY.symbols[0]);
        if(winningLine){pay=ROLE_SPEC.REPLAY.payout;result='REPLAY'}
      }
    }

    if(result==='MISS')pay=ROLE_SPEC.MISS.payout;

    window.ZELVOLT_LAST_JUDGE={
      result,
      resultType,
      winningLine:winningLine?{name:winningLine.name,rows:[...winningLine.rows],symbols:[...winningLine.symbols]}:null,
      outcome:outcome?{
        complete:outcome.complete,
        rows:outcome.rows.map(row=>[...row]),
        lines:outcome.lines.map(line=>({name:line.name,rows:[...line.rows],symbols:[...line.symbols]}))
      }:null
    };

    bridge('payline-judge',{
      result,
      resultType,
      winningLine:winningLine?.name||null,
      stoppedRows:outcome?.rows||null
    });
    completeSpin(result)
  };

  window.ZELVOLT_PAYLINE={
    version:'0.1',
    getLast:()=>window.ZELVOLT_LAST_JUDGE?structuredClone(window.ZELVOLT_LAST_JUDGE):null
  };
})();
