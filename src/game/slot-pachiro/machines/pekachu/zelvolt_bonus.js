// ZELVOLT bootstrap v0.3
// Native machine bootstrap. Cabinet, bonus core and reel engine all live in the cloned child machine.
(()=>{
  const BUILD='20260911-native-reel-2';

  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href=`/Chappy5/src/game/slot-pachiro/machines/pekachu/zelvolt_cabinet.css?v=${BUILD}`;
  document.head.appendChild(css);

  const loadReels=()=>{
    if(window.ZELVOLT_REELS||document.getElementById('zelvolt-native-reel-script'))return;
    const reels=document.createElement('script');
    reels.id='zelvolt-native-reel-script';
    reels.src=`/Chappy5/src/game/slot-pachiro/machines/pekachu/zelvolt_reel_core.js?v=${BUILD}`;
    reels.async=false;
    document.body.appendChild(reels);
  };

  const core=document.createElement('script');
  core.id='zelvolt-bonus-core-script';
  core.src=`/Chappy5/src/game/slot-pachiro/machines/pekachu/zelvolt_bonus_core.js?v=${BUILD}`;
  core.async=false;
  core.addEventListener('load',loadReels,{once:true});
  document.body.appendChild(core);

  // Defensive child-local retry: never depend on parent injection or iframe timing.
  let tries=0;
  const retry=setInterval(()=>{
    tries++;
    if(window.ZELVOLT_REELS){clearInterval(retry);return}
    const coreReady=typeof window.start==='function'&&typeof window.stop==='function'&&Array.isArray(window.reels);
    if(coreReady)loadReels();
    if(tries>=20)clearInterval(retry);
  },100);
})();
