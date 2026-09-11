// ZELVOLT bootstrap v0.2
// Loads ZELVOLT cabinet/core and then the native reel engine inside the cloned machine.
(()=>{
  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='/Chappy5/src/game/slot-pachiro/machines/pekachu/zelvolt_cabinet.css?v=2';
  document.head.appendChild(css);

  const core=document.createElement('script');
  core.src='/Chappy5/src/game/slot-pachiro/machines/pekachu/zelvolt_bonus_core.js?v=2';
  core.async=false;
  core.addEventListener('load',()=>{
    const reels=document.createElement('script');
    reels.src='/Chappy5/src/game/slot-pachiro/machines/pekachu/zelvolt_reel_core.js?v=1';
    reels.async=false;
    document.body.appendChild(reels);
  },{once:true});
  document.body.appendChild(core);
})();
