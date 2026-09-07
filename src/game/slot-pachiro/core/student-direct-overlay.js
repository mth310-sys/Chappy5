import { studentDirectDataURL } from './student-pixelartconverter-direct.js?v=student-direct-v1';

const cache=new Map();
function getImage(url){
  if(cache.has(url))return cache.get(url);
  const img=new Image();
  img.src=url;
  cache.set(url,img);
  return img;
}
function repaint(canvas){
  if(!(canvas instanceof HTMLCanvasElement)||!canvas.classList.contains('pixelCustomer'))return;
  const dir=canvas.dataset.spriteDir||canvas.dataset.dir||'SE';
  const frame=Number(canvas.dataset.spriteFrame||canvas.dataset.walkFrame||0);
  const seated=(canvas.dataset.spriteSeated==='true')||(canvas.dataset.customerState==='seated');
  const expression=canvas.dataset.expression||null;
  const url=studentDirectDataURL(dir,frame,seated,expression);
  const img=getImage(url);
  const draw=()=>{const ctx=canvas.getContext('2d');canvas.width=48;canvas.height=48;ctx.imageSmoothingEnabled=false;ctx.clearRect(0,0,48,48);ctx.drawImage(img,0,0,48,48)};
  if(img.complete)draw(); else img.onload=draw;
}
function repaintAll(){document.querySelectorAll('canvas.pixelCustomer').forEach(repaint)}
new MutationObserver(mutations=>{for(const m of mutations){if(m.target instanceof HTMLCanvasElement&&m.target.classList.contains('pixelCustomer'))repaint(m.target)}}).observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['data-sprite-dir','data-sprite-frame','data-sprite-seated','data-expression','data-customer-state']});
new MutationObserver(repaintAll).observe(document.documentElement,{subtree:true,childList:true});
setInterval(repaintAll,40);
