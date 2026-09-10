(()=>{const f=document.getElementById('machine-frame');if(!f)return;f.addEventListener('load',()=>{try{const d=f.contentDocument;if(!d||f.contentWindow.location.href==='about:blank'||d.getElementById('zelvolt-notice-style'))return;const s=d.createElement('style');s.id='zelvolt-notice-style';s.textContent=`
/* ZELVOLT notification: no dedicated lamp. Reel bezel + side light guides + logo react. */
.center-panel,.reels,.top-panel,.led-side{transition:box-shadow .12s,filter .12s,border-color .12s,background .12s!important}
body.zelvolt-hit .center-panel,body.zelvolt-big .center-panel{border-color:#ffe86a!important;box-shadow:inset 0 0 0 2px #fff6ad,inset 0 0 18px #d9a900,0 0 8px #fff5a0,0 0 24px #ffd400!important}
body.zelvolt-hit .reels,body.zelvolt-big .reels{border-color:#fff2a0!important;box-shadow:inset 0 0 7px #fff7b7,0 0 7px #fff,0 0 18px #ffd900,0 0 30px #b98500!important}
body.zelvolt-hit .led-side,body.zelvolt-big .led-side{opacity:1!important;filter:brightness(1.7)!important;background:linear-gradient(#fffbd0,#ffe63c 18%,#fff8a0 38%,#e7bf12 58%,#fffbd0 80%,#d6a800)!important;box-shadow:0 0 8px #fff4a0,0 0 18px #ffd900!important}
body.zelvolt-hit .top-panel,body.zelvolt-big .top-panel{border-color:#ffe768!important;box-shadow:0 0 0 2px #fff3a0,0 0 13px #ffe000,0 0 26px #b78300!important;filter:brightness(1.18)!important}
body.zelvolt-hit .zv-side,body.zelvolt-big .zv-side{filter:brightness(1.22)!important;box-shadow:inset 0 0 0 2px #444b52,0 0 8px #ffe55c!important}
body.zelvolt-reg .center-panel{border-color:#ffb35c!important;box-shadow:inset 0 0 0 2px #ffd49a,inset 0 0 15px #b85d00,0 0 18px #ff8a16!important}
body.zelvolt-reg .reels{border-color:#ffc074!important;box-shadow:inset 0 0 7px #ffe0ad,0 0 15px #ff8a19!important}
body.zelvolt-reg .led-side{opacity:1!important;filter:brightness(1.45)!important;background:linear-gradient(#ffe0a5,#ff9b31,#ffe8ba,#e46d10)!important;box-shadow:0 0 9px #ffb34d,0 0 17px #e56b00!important}
body.zelvolt-reg .top-panel{box-shadow:0 0 0 2px #ffc46e,0 0 18px #ff8618!important;filter:brightness(1.1)!important}
body.zelvolt-charge .center-panel{box-shadow:inset 0 0 0 2px #5d520d,0 0 9px #c6a700!important}
@keyframes zvFrameHit{0%{filter:brightness(.8)}18%{filter:brightness(2)}42%{filter:brightness(1)}68%{filter:brightness(1.75)}100%{filter:brightness(1.15)}}
body.zelvolt-hit .center-panel{animation:zvFrameHit .7s ease-out!important}
/* Dedicated/overlay notification graphics are deliberately suppressed. */
#zelvoltHitFlash,#zelvoltBolt,.lamp{display:none!important}
`;d.head.appendChild(s)}catch(e){console.warn('ZELVOLT notice',e)}})})();