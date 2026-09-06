const SIZE=40, OUT='#261d1a', EYE='#211b1a';
const TYPES={
 regular:{hair:'#4b3326',hairHi:'#73503a',skin:'#f4c89f',skinHi:'#ffe0bd',skinSh:'#d99670',top:'#2865a8',topHi:'#4a86c9',topSh:'#184678',pants:'#344d69',pantsSh:'#26384d',shoe:'#25252a',accent:'#e8eef5',style:'hoodie'},
 quick:{hair:'#292a2d',hairHi:'#48494d',skin:'#efbf95',skinHi:'#ffd8b0',skinSh:'#d58e69',top:'#2e3b4d',topHi:'#526176',topSh:'#1d2733',pants:'#3d4650',pantsSh:'#2a3139',shoe:'#202329',accent:'#d64b42',style:'jacket'},
 high:{hair:'#d49a28',hairHi:'#f1c34c',skin:'#f1c099',skinHi:'#ffdab6',skinSh:'#d98e6f',top:'#d95737',topHi:'#ef7858',topSh:'#a93a27',pants:'#343b55',pantsSh:'#252b41',shoe:'#24242a',accent:'#f4e3c0',style:'flashy'}
};
const cache=new Map();
function r(c,x,y,w,h,k){c.fillStyle=k;c.fillRect(x,y,w,h)}function p(c,x,y,k){r(c,x,y,1,1,k)}function q(c,a,k){c.fillStyle=k;c.beginPath();c.moveTo(...a[0]);for(let i=1;i<a.length;i++)c.lineTo(...a[i]);c.closePath();c.fill()}
function head(c,s,y){
 q(c,[[9,5+y],[12,2+y],[17,1+y],[25,2+y],[29,5+y],[30,12+y],[28,17+y],[24,20+y],[14,20+y],[9,16+y],[7,11+y]],OUT);
 q(c,[[10,7+y],[13,3+y],[18,2+y],[25,3+y],[28,6+y],[28,12+y],[25,10+y],[24,7+y],[21,9+y],[18,6+y],[15,9+y],[11,8+y]],s.hair);
 q(c,[[13,4+y],[18,2+y],[24,3+y],[26,5+y],[19,5+y]],s.hairHi);
 q(c,[[12,10+y],[16,8+y],[23,8+y],[27,11+y],[26,16+y],[22,19+y],[15,18+y],[11,15+y]],s.skin);
 r(c,13,10+y,3,2,s.skinHi);q(c,[[12,15+y],[16,18+y],[22,19+y],[25,16+y]],s.skinSh);
 // chunky fringe and sideburns give a designed silhouette rather than a round generic head
 q(c,[[11,7+y],[15,5+y],[18,6+y],[17,10+y],[15,8+y],[14,12+y],[11,11+y]],s.hair);q(c,[[23,6+y],[27,8+y],[27,12+y],[25,12+y],[24,9+y]],s.hair);
 p(c,18,12+y,EYE);r(c,23,12+y,2,2,EYE);p(c,24,11+y,'#54413a');p(c,23,16+y,'#b86f61');r(c,27,12+y,2,4,s.skinSh);p(c,28,13+y,s.skinHi);
}
function body(c,s,y,seated){
 q(c,[[11,20+y],[15,18+y],[23,18+y],[28,21+y],[27,28+y],[23,30+y],[13,29+y],[9,26+y]],OUT);
 q(c,[[12,21+y],[16,19+y],[22,19+y],[26,21+y],[25,27+y],[22,28+y],[14,27+y],[11,25+y]],s.top);
 r(c,13,20+y,6,2,s.topHi);q(c,[[21,20+y],[26,21+y],[25,27+y],[21,28+y]],s.topSh);
 if(s.style==='hoodie'){r(c,16,19+y,5,2,s.accent);p(c,17,22+y,s.accent);p(c,21,22+y,s.accent)}
 if(s.style==='jacket'){r(c,18,20+y,1,7,s.accent);r(c,15,20+y,3,2,'#e9edf0')}
 if(s.style==='flashy'){r(c,13,22+y,3,2,s.accent);r(c,23,21+y,2,3,s.accent);r(c,15,19+y,7,1,'#f1d17b')}
 q(c,[[9,21+y],[12,22+y],[10,28+y],[7,28+y],[7,24+y]],OUT);q(c,[[9,22+y],[11,23+y],[9,27+y],[8,27+y],[8,24+y]],s.top);p(c,8,28+y,s.skin);
 q(c,[[26,21+y],[29,22+y],[30,27+y],[28,29+y],[25,27+y]],OUT);q(c,[[27,22+y],[28,23+y],[29,27+y],[28,28+y],[26,26+y]],s.topSh);p(c,28,29+y,s.skinSh);
 if(seated){q(c,[[13,27+y],[24,27+y],[27,30+y],[26,33+y],[17,33+y],[13,31+y]],OUT);q(c,[[14,28+y],[23,28+y],[25,30+y],[24,31+y],[17,31+y]],s.pants);r(c,23,32+y,5,2,OUT);r(c,24,32+y,4,1,s.shoe)}
}
function legs(c,s,y,f){if(f===1){q(c,[[12,27+y],[17,27+y],[16,34+y],[11,36+y],[9,34+y]],OUT);r(c,13,28+y,3,6,s.pants);r(c,10,34+y,5,2,s.shoe);q(c,[[20,27+y],[25,27+y],[28,33+y],[26,37+y],[21,37+y]],OUT);q(c,[[21,28+y],[24,28+y],[26,33+y],[24,35+y],[22,35+y]],s.pantsSh);r(c,23,36+y,5,1,s.shoe)}else if(f===3){q(c,[[12,27+y],[17,27+y],[19,33+y],[16,37+y],[11,37+y]],OUT);q(c,[[13,28+y],[16,28+y],[17,33+y],[15,35+y],[13,35+y]],s.pants);r(c,11,36+y,5,1,s.shoe);q(c,[[20,27+y],[25,27+y],[24,34+y],[19,36+y],[17,34+y]],OUT);r(c,21,28+y,3,6,s.pantsSh);r(c,18,34+y,5,2,s.shoe)}else{q(c,[[12,27+y],[17,27+y],[17,34+y],[15,37+y],[10,37+y]],OUT);r(c,13,28+y,3,7,s.pants);r(c,10,36+y,5,1,s.shoe);q(c,[[20,27+y],[25,27+y],[25,34+y],[23,37+y],[18,37+y]],OUT);r(c,21,28+y,3,7,s.pantsSh);r(c,19,36+y,5,1,s.shoe)}}
function accessory(c,s,y){if(s.style==='flashy'){r(c,16,11+y,5,2,'#1f2024');r(c,22,11+y,5,2,'#1f2024');p(c,21,12+y,'#1f2024')}}
function draw(c,type,dir,frame,seated){const s=TYPES[type]||TYPES.regular,flip=dir==='SW';c.clearRect(0,0,SIZE,SIZE);c.save();if(flip){c.translate(SIZE,0);c.scale(-1,1)}const y=seated?1:(frame===1||frame===3?-1:0);head(c,s,y);accessory(c,s,y);body(c,s,y,seated);if(!seated)legs(c,s,y,frame%4);c.restore()}
export function pixelCharacterDataURL(type='regular',dir='SE',frame=0,seated=false){const key=`adopted-v1:${type}:${dir}:${frame}:${seated}`;if(cache.has(key))return cache.get(key);const cv=document.createElement('canvas');cv.width=SIZE;cv.height=SIZE;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;draw(c,type,dir,frame,seated);const u=cv.toDataURL('image/png');cache.set(key,u);return u}
export function directionFromDelta(dx,dy,fallback='SE'){if(dx===0&&dy===0)return fallback;return dx-dy>=0?'SE':'SW'}