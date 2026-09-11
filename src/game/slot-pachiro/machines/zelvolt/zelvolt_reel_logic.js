// ZELVOLT reel control bridge v1.0
// Machine-local only: removes the legacy symbol-swap timers so the native reel strip is the sole moving reel.
(()=>{
  const clearLegacyTimers=()=>{
    for(let i=0;i<3;i++){
      if(timers[i]!=null){clearInterval(timers[i]);timers[i]=null;}
    }
  };

  const machineStart=window.start;
  window.start=function(){
    const before=[...spinning];
    machineStart();
    // The inherited Pekachu logic may create 55/70ms rand()/drawReel() timers.
    // They are not the reel anymore; cancel them immediately and leave only logical spinning[] state.
    for(let i=0;i<3;i++){
      if(spinning[i]&&!before[i]&&timers[i]!=null){clearInterval(timers[i]);timers[i]=null;}
    }
  };

  const machineStop=window.stop;
  window.stop=function(i){
    if(i<0||i>2)return;
    // Prevent duplicate stop input while this reel is already logically stopped.
    if(!spinning[i])return;
    if(timers[i]!=null){clearInterval(timers[i]);timers[i]=null;}
    machineStop(i);
  };

  const machineReset=window.resetGame;
  window.resetGame=function(){
    clearLegacyTimers();
    machineReset();
    clearLegacyTimers();
  };

  window.ZELVOLT_REEL_LOGIC={legacyTimersDisabled:true};
})();
