export const STUDENT_MASK_VERSION='student-mask-v1';
const W=48,H=48,cache=new Map();
const P={outline:'#201915',hair:'#573a2c',hairLight:'#8a6248',skin:'#efb68e',skinLight:'#ffd3aa',coat:'#315f91',coatLight:'#527eaa',shirt:'#f4eee5',pants:'#263b50',pantsLight:'#405b73',shoe:'#17191c',feature:'#211916'};
const mask=()=>Array.from({length:H},()=>new Uint8Array(W));
function fill(m,x0,y0,x1,y1){for(let y=Math.max(0,y0);y<=Math.min(H-1,y1);y++)for(let x=Math.max(0,x0);x<=Math.min(W-1,x1);x++)m[y][x]=1}
function ell(m,cx,cy,rx,ry){for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(((x-cx)/rx)**2+((y-cy)/ry)**2<=1)m[y][x]=1}
function layers(dir='SE',frame=0,seated=false){const sw=dir==='SW',phase=((frame%4)+4)%4,o=mask(),hair=mask(),hairHi=mask(),skin=mask(),skinHi=mask(),coat=mask(),coatHi=mask(),shirt=mask(),pants=mask(),pantsHi=mask(),shoe=mask(),feature=mask();
// head and layered hair
ell(o,24,9,7,7);ell(skin,24,10,5,5);ell(hair,24,7,7,5);fill(hair,18,6,30,9);fill(hair,19,4,22,6);fill(hair,23,3,27,6);fill(hair,28,4,31,8);fill(hairHi,sw?20:25,4,sw?24:29,5);fill(hairHi,sw?19:27,6,sw?22:30,7);
// face in quarter view
const near=sw?21:27,far=sw?27:21;fill(feature,near,9,near,10);fill(feature,far,9,far,9);fill(skinHi,sw?20:25,11,sw?22:28,12);fill(feature,sw?22:24,13,sw?24:26,13);
// neck and slim hoodie body
fill(skin,23,15,25,17);fill(o,18,16,30,30);fill(coat,19,17,29,29);fill(shirt,23,17,25,27);fill(coatHi,sw?25:19,18,sw?28:22,27);
// arms
fill(o,16,18,18,29);fill(o,30,18,32,29);fill(coat,17,19,18,27);fill(coat,30,19,31,27);fill(skin,17,28,18,29);fill(skin,30,28,31,29);
if(seated){fill(o,19,29,30,36);fill(pants,20,30,29,34);fill(pantsHi,20,30,23,31);fill(shoe,27,34,33,36)}else{const a=phase===1?2:phase===3?-2:0;fill(o,20,29,24,43);fill(o,25,29,29,43);fill(pants,21,30,23,42);fill(pants,26,30,28,42);fill(pantsHi,21,30,21,39);fill(shoe,19+a,42,23+a,44);fill(shoe,26-a,42,30-a,44)}
return [[o,P.outline],[hair,P.hair],[hairHi,P.hairLight],[skin,P.skin],[skinHi,P.skinLight],[coat,P.coat],[coatHi,P.coatLight],[shirt,P.shirt],[pants,P.pants],[pantsHi,P.pantsLight],[shoe,P.shoe],[feature,P.feature]]}
function render(dir,frame,seated){const c=document.createElement('canvas');c.width=192;c.height=192;const x=c.getContext('2d');x.imageSmoothingEnabled=false;for(const [m,color] of layers(dir,frame,seated)){x.fillStyle=color;for(let y=0;y<H;y++)for(let xx=0;xx<W;xx++)if(m[y][xx])x.fillRect(xx*4,y*4,4,4)}return c.toDataURL('image/png')}
export function studentSpriteMaskDataURL(dir='SE',frame=0,seated=false){const d=dir==='SW'?'SW':'SE',f=seated?0:((Number(frame)||0)%4+4)%4,k=`${STUDENT_MASK_VERSION}:${d}:${f}:${!!seated}`;if(!cache.has(k))cache.set(k,render(d,f,seated));return cache.get(k)}