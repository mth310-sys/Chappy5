// ZELVOLT bootstrap v0.1
// Loads the cabinet redesign without altering the preserved bonus/reel core.
(()=>{
  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='/Chappy5/src/game/slot-pachiro/machines/pekachu/zelvolt_cabinet.css?v=1';
  document.head.appendChild(css);

  const core=document.createElement('script');
  core.src='/Chappy5/src/game/slot-pachiro/machines/pekachu/zelvolt_bonus_core.js?v=1';
  core.async=false;
  document.body.appendChild(core);
})();
