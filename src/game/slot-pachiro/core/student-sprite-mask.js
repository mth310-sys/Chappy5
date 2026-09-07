export const STUDENT_MASK_VERSION='student-mask-v2';
const W=48,H=48,cache=new Map();
const P={outline:'#211915',hairDeep:'#3a281f',hair:'#66452f',hairLight:'#9a6a45',skinShadow:'#d58d69',skin:'#f1bc91',skinLight:'#ffd6ac',hoodDeep:'#173c68',hood:'#2f67a5',hoodLight:'#5489c2',shirt:'#f3eee5',pantsDeep:'#202b38',pants:'#34495c',pantsLight:'#52697d',shoe:'#1a1b1d',sole:'#77716b',feature:'#211915',cheek:'#df8f78'};
const mask=()=>Array.from({length:H},()=>new Uint8Array(W));
function fill(m,x0,y0,x1,y1){for(let y=Math.max(0,y0);y<=Math.min(H-1,y1);y++)for(let x=Math.max(0,x0);x<=Math.min(W-1,x1);x++)m[y][x]=1}
function px(m,pts){for(const [x,y] of pts)if(x>=0&&x<W&&y>=0&&y<H)m[y][x]=1}
function layers(dir='SE',frame=0,seated=false){const sw=dir==='SW',p=((frame%4)+4)%4,o=mask(),hairD=mask(),hair=mask(),hairL=mask(),skinS=mask(),skin=mask(),skinL=mask(),hoodD=mask(),hood=mask(),hoodL=mask(),shirt=mask(),pantsD=mask(),pants=mask(),pantsL=mask(),shoe=mask(),sole=mask(),feat=mask(),cheek=mask();
// ~2.4 head character based on the supplied design sheet: compact head, hoodie, chunky shoes
fill(o,18,3,29,3);fill(o,15,5,32,10);fill(o,16,4,30,13);fill(o,18,14,29,15);fill(skin,18,7,29,13);fill(skinS,17,9,18,12);fill(skinS,29,9,30,12);
// asymmetrical fluffy brown hair
fill(hairD,17,4,30,8);fill(hairD,15,6,18,10);fill(hairD,29,5,32,10);fill(hair,18,4,28,7);fill(hair,16,7,20,10);fill(hair,27,6,30,9);px(hair,[[19,3],[20,3],[23,2],[24,2],[27,3],[30,4],[16,5],[31,7],[18,11],[29,10]]);px(hairL,sw?[[18,5],[19,5],[20,4],[21,4],[18,7],[19,7]]:[[26,4],[27,4],[28,5],[29,5],[28,7],[29,7]]);
// quarter-view face, large readable eyes and tiny mouth
const near=sw?20:27,far=sw?27:20;fill(feat,near,9,near,10);fill(feat,far,9,far,10);px(skinL,[[near,9],[far,9]]);px(feat,sw?[[23,12],[24,12],[25,11]]:[[22,11],[23,12],[24,12]]);px(cheek,sw?[[18,12],[28,12]]:[[19,12],[29,12]]);
// neck + hoodie silhouette
fill(skinS,22,14,25,16);fill(o,17,16,30,30);fill(o,15,18,18,28);fill(o,30,18,33,28);fill(hoodD,18,17,29,29);fill(hood,19,17,28,28);fill(hood,16,19,18,26);fill(hood,29,19,31,26);fill(hoodL,sw?25:19,18,sw?28:21,26);fill(shirt,22,17,25,25);px(hoodD,[[21,17],[26,17],[20,18],[27,18],[21,27],[26,27]]);px(shirt,[[22,26],[25,26]]);fill(skin,16,27,18,29);fill(skin,30,27,32,29);
// legs and walk frames; seated pose folds legs forward like reference sheet
if(seated){fill(o,18,29,29,35);fill(pantsD,19,30,28,33);fill(pants,20,30,27,32);fill(o,27,33,34,37);fill(shoe,28,34,33,36);fill(sole,29,37,34,37)}else{const l=p===1?2:p===3?-1:0,r=p===1?-1:p===3?2:0;fill(o,19,29,23,41);fill(o,25,29,29,41);fill(pantsD,20,30,22,39);fill(pants,26,30,28,39);fill(pantsL,20,30,20,37);fill(o,18+l,39,23+l,43);fill(o,25+r,39,30+r,43);fill(shoe,19+l,40,23+l,42);fill(shoe,26+r,40,30+r,42);fill(sole,18+l,43,23+l,43);fill(sole,25+r,43,30+r,43)}
return [[o,P.outline],[hairD,P.hairDeep],[hair,P.hair],[hairL,P.hairLight],[skinS,P.skinShadow],[skin,P.skin],[skinL,P.skinLight],[hoodD,P.hoodDeep],[hood,P.hood],[hoodL,P.hoodLight],[shirt,P.shirt],[pantsD,P.pantsDeep],[pants,P.pants],[pantsL,P.pantsLight],[shoe,P.shoe],[sole,P.sole],[cheek,P.cheek],[feat,P.feature]]}
function render(dir,frame,seated){const c=document.createElement('canvas');c.width=192;c.height=192;const x=c.getContext('2d');x.imageSmoothingEnabled=false;for(const [m,color] of layers(dir,frame,seated)){x.fillStyle=color;for(let y=0;y<H;y++)for(let xx=0;xx<W;xx++)if(m[y][xx])x.fillRect(xx*4,y*4,4,4)}return c.toDataURL('image/png')}
export function studentSpriteMaskDataURL(dir='SE',frame=0,seated=false){const d=dir==='SW'?'SW':'SE',f=seated?0:((Number(frame)||0)%4+4)%4,k=`${STUDENT_MASK_VERSION}:${d}:${f}:${!!seated}`;if(!cache.has(k))cache.set(k,render(d,f,seated));return cache.get(k)}