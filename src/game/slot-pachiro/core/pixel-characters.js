const SIZE=48, OUT='#241a18', EYE='#201817', SHADOW='#6e5b4a55';
const BASE={regular:{skin:'#f4c8a2',skinHi:'#ffe2c2',skinSh:'#d99873',pants:'#38526e',pantsSh:'#283d53',shoe:'#24252a'},quick:{skin:'#efbf97',skinHi:'#ffd9b4',skinSh:'#d48d69',pants:'#414c59',pantsSh:'#2c353f',shoe:'#22252a'},high:{skin:'#f2c39c',skinHi:'#ffddb9',skinSh:'#d99170',pants:'#3a4058',pantsSh:'#282d43',shoe:'#24242a'}};
const LOOKS=[
{hair:'#4a3327',hairHi:'#79533c',top:'#2865a8',topHi:'#5593d7',topSh:'#174776',accent:'#eef2f7',hairMode:'soft',style:'hoodie',face:'smile'},
{hair:'#28292d',hairHi:'#505158',top:'#303a48',topHi:'#59697d',topSh:'#202833',accent:'#d84940',hairMode:'short',style:'jacket',face:'calm'},
{hair:'#d39a2d',hairHi:'#f1c958',top:'#d45439',topHi:'#ef7b5e',topSh:'#a83a29',accent:'#f3d986',hairMode:'spike',style:'flashy',face:'cool'},
{hair:'#6b3e2f',hairHi:'#995f48',top:'#d95b8a',topHi:'#ef86ae',topSh:'#a83e69',accent:'#fff0f5',hairMode:'long',style:'cardigan',face:'smile'},
{hair:'#23262d',hairHi:'#49505e',top:'#202a3b',topHi:'#495a73',topSh:'#161d2a',accent:'#f0f2f5',hairMode:'bob',style:'suit',face:'calm'},
{hair:'#b8b8b5',hairHi:'#e1e1db',top:'#6a568d',topHi:'#8f79b4',topSh:'#4b3d68',accent:'#eee8f8',hairMode:'senior',style:'cardigan',face:'gentle'},
{hair:'#51382a',hairHi:'#805943',top:'#4d873d',topHi:'#75ae62',topSh:'#345f2b',accent:'#e7f2df',hairMode:'cap',style:'casual',face:'smile'},
{hair:'#352b28',hairHi:'#5f493f',top:'#456f9e',topHi:'#7099c4',topSh:'#2e4d70',accent:'#ead6b6',hairMode:'hat',style:'casual',face:'calm'},
{hair:'#7e553c',hairHi:'#a97755',top:'#f06b8f',topHi:'#ff95b0',topSh:'#bc4869',accent:'#fff7fb',hairMode:'ribbon',style:'cardigan',face:'smile'},
{hair:'#1e2530',hairHi:'#3b485a',top:'#304b77',topHi:'#536f9f',topSh:'#203351',accent:'#dfe8f5',hairMode:'glasses',style:'suit',face:'calm'},
{hair:'#6a4a35',hairHi:'#936c50',top:'#bd5a45',topHi:'#dc7c64',topSh:'#8d4032',accent:'#f4e5cf',hairMode:'wave',style:'casual',face:'smile'},
{hair:'#d6d2c8',hairHi:'#f3eee5',top:'#7b6b63',topHi:'#9d8d85',topSh:'#5c4f49',accent:'#f4eee7',hairMode:'elder',style:'jacket',face:'gentle'}
];
const cache=new Map();
function r(c,x,y,w,h,k){c.fillStyle=k;c.fillRect(x,y,w,h)}function p(c,x,y,k){r(c,x,y,1,1,k)}function q(c,a,k){c.fillStyle=k;c.beginPath();c.moveTo(...a[0]);for(let i=1;i<a.length;i++)c.lineTo(...a[i]);c.closePath();c.fill()}
function shadow(c){q(c,[[13,42],[19,40],[30,40],[36,42],[31,45],[19,45]],SHADOW)}
function hair(c,s,y){const m=s.hairMode;
 if(m==='long'||m==='ribbon'){q(c,[[9,7+y],[13,3+y],[27,3+y],[33,7+y],[34,20+y],[30,26+y],[24,23+y],[13,24+y],[9,19+y]],OUT);q(c,[[11,8+y],[14,4+y],[26,4+y],[31,8+y],[31,19+y],[28,23+y],[24,20+y],[14,21+y],[11,17+y]],s.hair);r(c,15,5+y,10,2,s.hairHi);if(m==='ribbon'){r(c,27,2+y,4,3,'#f45a9a');r(c,31,1+y,3,4,'#f45a9a');r(c,28,4+y,4,1,'#ad376f')}return}
 if(m==='bob'){q(c,[[9,7+y],[13,3+y],[27,3+y],[33,8+y],[33,20+y],[29,24+y],[14,24+y],[9,19+y]],OUT);q(c,[[11,8+y],[14,4+y],[26,4+y],[31,8+y],[31,18+y],[28,21+y],[14,21+y],[11,17+y]],s.hair);r(c,15,5+y,9,2,s.hairHi);return}
 if(m==='senior'||m==='elder'){q(c,[[10,8+y],[13,4+y],[27,4+y],[32,8+y],[32,18+y],[29,23+y],[14,23+y],[10,18+y]],OUT);q(c,[[12,9+y],[14,5+y],[26,5+y],[30,9+y],[30,15+y],[27,13+y],[24,9+y],[20,11+y],[15,9+y]],s.hair);r(c,15,5+y,8,1,s.hairHi);return}
 if(m==='spike'){q(c,[[10,9+y],[12,4+y],[15,5+y],[18,1+y],[21,5+y],[25,2+y],[27,6+y],[32,5+y],[31,10+y],[34,12+y],[32,20+y],[27,24+y],[14,24+y],[9,19+y]],OUT);q(c,[[12,10+y],[14,5+y],[16,6+y],[18,3+y],[21,6+y],[24,4+y],[26,7+y],[30,7+y],[29,11+y],[32,12+y],[29,18+y],[26,15+y],[24,10+y],[20,12+y],[16,10+y]],s.hair);r(c,16,5+y,8,2,s.hairHi);return}
 q(c,[[10,7+y],[13,3+y],[18,2+y],[27,3+y],[32,7+y],[33,15+y],[31,21+y],[27,24+y],[15,24+y],[10,20+y],[8,14+y]],OUT);q(c,[[11,9+y],[14,4+y],[19,3+y],[27,4+y],[30,8+y],[30,15+y],[27,13+y],[26,9+y],[23,11+y],[20,8+y],[16,11+y],[12,10+y]],s.hair);r(c,15,5+y,9,2,s.hairHi);
 if(m==='cap'){r(c,10,4+y,20,4,'#2f72b3');r(c,14,2+y,12,3,'#4a92cf');r(c,28,8+y,7,2,'#245985')}
 if(m==='hat'){r(c,9,3+y,21,3,'#8b6338');r(c,13,1+y,14,3,'#a77b49');r(c,7,6+y,26,2,'#6d4d2e')}
}
function face(c,s,y){q(c,[[13,12+y],[17,10+y],[25,10+y],[30,13+y],[29,19+y],[25,23+y],[17,22+y],[12,18+y]],s.skin);r(c,14,12+y,4,2,s.skinHi);q(c,[[13,18+y],[18,22+y],[25,23+y],[28,19+y]],s.skinSh);q(c,[[12,9+y],[16,7+y],[19,8+y],[18,13+y],[16,11+y],[15,15+y],[12,14+y]],s.hair);r(c,30,15+y,2,4,s.skinSh);p(c,31,16+y,s.skinHi);p(c,19,15+y,EYE);r(c,25,15+y,2,2,EYE);p(c,26,14+y,'#5b443c');
 if(s.face==='smile'){r(c,22,20+y,3,1,'#a95f59');p(c,23,21+y,'#f2b0aa')}else if(s.face==='gentle'){r(c,22,20+y,2,1,'#a95f59')}else if(s.face==='cool'){r(c,18,14+y,5,2,'#1f2024');r(c,24,14+y,5,2,'#1f2024');p(c,23,15+y,'#1f2024')}
 if(s.hairMode==='glasses'||s.hairMode==='senior'){r(c,17,14+y,5,3,'#39434d');r(c,24,14+y,5,3,'#39434d');p(c,23,15+y,'#39434d');r(c,18,15+y,3,1,'#c6d9e5');r(c,25,15+y,3,1,'#c6d9e5')}
}
function torso(c,s,y,frame){q(c,[[12,24+y],[16,22+y],[26,22+y],[31,25+y],[30,34+y],[26,36+y],[15,35+y],[10,32+y]],OUT);q(c,[[13,25+y],[17,23+y],[25,23+y],[29,25+y],[28,33+y],[25,34+y],[16,33+y],[12,31+y]],s.top);r(c,14,24+y,7,2,s.topHi);q(c,[[23,24+y],[29,25+y],[28,33+y],[24,34+y]],s.topSh);
 if(s.style==='hoodie'){r(c,18,23+y,5,2,s.accent);p(c,19,27+y,s.accent);p(c,23,27+y,s.accent)}if(s.style==='jacket'||s.style==='suit'){r(c,21,24+y,1,8,s.accent);r(c,17,24+y,4,2,'#edf0f2')}if(s.style==='flashy'){r(c,14,27+y,3,2,s.accent);r(c,26,26+y,2,3,s.accent);r(c,17,23+y,7,1,'#f0cf75')}if(s.style==='cardigan'){r(c,21,24+y,1,8,s.accent);p(c,20,27+y,s.accent);p(c,23,27+y,s.accent)}
 const swing=frame===1?1:frame===3?-1:0;q(c,[[10,25+y],[13,26+y],[11+swing,34+y],[8,34+y],[8,29+y]],OUT);q(c,[[10,26+y],[12,27+y],[10+swing,33+y],[9,33+y],[9,29+y]],s.top);p(c,9+swing,35+y,s.skin);q(c,[[29,25+y],[32,26+y],[33-swing,33+y],[31,35+y],[28,33+y]],OUT);q(c,[[30,26+y],[31,27+y],[32-swing,33+y],[31,34+y],[29,32+y]],s.topSh);p(c,31-swing,35+y,s.skinSh)}
function legs(c,s,y,f){if(f===1){q(c,[[14,34+y],[19,34+y],[18,40+y],[13,42+y],[11,40+y]],OUT);r(c,15,35+y,3,5,s.pants);r(c,12,40+y,5,2,s.shoe);q(c,[[22,34+y],[27,34+y],[30,39+y],[28,43+y],[23,43+y]],OUT);q(c,[[23,35+y],[26,35+y],[28,39+y],[26,41+y],[24,41+y]],s.pantsSh);r(c,25,42+y,5,1,s.shoe)}else if(f===3){q(c,[[14,34+y],[19,34+y],[21,39+y],[18,43+y],[13,43+y]],OUT);q(c,[[15,35+y],[18,35+y],[19,39+y],[17,41+y],[15,41+y]],s.pants);r(c,13,42+y,5,1,s.shoe);q(c,[[22,34+y],[27,34+y],[26,40+y],[21,42+y],[19,40+y]],OUT);r(c,23,35+y,3,5,s.pantsSh);r(c,20,40+y,5,2,s.shoe)}else{q(c,[[14,34+y],[19,34+y],[19,40+y],[17,43+y],[12,43+y]],OUT);r(c,15,35+y,3,6,s.pants);r(c,12,42+y,5,1,s.shoe);q(c,[[22,34+y],[27,34+y],[27,40+y],[25,43+y],[20,43+y]],OUT);r(c,23,35+y,3,6,s.pantsSh);r(c,21,42+y,5,1,s.shoe)}}
function pick(type,variant){return{...(BASE[type]||BASE.regular),...LOOKS[((variant%LOOKS.length)+LOOKS.length)%LOOKS.length]}}
function draw(c,type,dir,frame,variant){const s=pick(type,variant),flip=dir==='SW';c.clearRect(0,0,SIZE,SIZE);c.save();if(flip){c.translate(SIZE,0);c.scale(-1,1)}shadow(c);const bob=frame===1||frame===3?-1:0;hair(c,s,bob);face(c,s,bob);torso(c,s,bob,frame%4);legs(c,s,bob,frame%4);c.restore()}
export function pixelCharacterDataURL(type='regular',dir='SE',frame=0,seated=false,variant=0){const key=`adopted-v3:${type}:${variant}:${dir}:${frame}`;if(cache.has(key))return cache.get(key);const cv=document.createElement('canvas');cv.width=SIZE;cv.height=SIZE;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;draw(c,type,dir,frame,variant);const u=cv.toDataURL('image/png');cache.set(key,u);return u}
export function directionFromDelta(dx,dy,fallback='SE'){if(dx===0&&dy===0)return fallback;return dx-dy>=0?'SE':'SW'}