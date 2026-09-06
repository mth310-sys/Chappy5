import { STUDENT_FRAMES, STUDENT_PALETTE, STUDENT_SIZE } from './student-sprite-data.js?v=student-pixel-v1';

export const STUDENT_SPRITE_RENDERER_VERSION='student-pixel-v1';
const cache=new Map();

function rowsFor(dir='SE',frame=0,seated=false){
  const safeDir=dir==='SW'?'SW':'SE';
  if(seated)return STUDENT_FRAMES[safeDir].seated;
  const f=((Number(frame)||0)%4+4)%4;
  return STUDENT_FRAMES[safeDir].walk[f]||STUDENT_FRAMES[safeDir].idle;
}

export function studentSpriteDataURL(dir='SE',frame=0,seated=false){
  const safeDir=dir==='SW'?'SW':'SE';
  const f=seated?0:((Number(frame)||0)%4+4)%4;
  const key=`${STUDENT_SPRITE_RENDERER_VERSION}:${safeDir}:${f}:${!!seated}`;
  if(cache.has(key))return cache.get(key);
  const canvas=document.createElement('canvas');
  canvas.width=STUDENT_SIZE;
  canvas.height=STUDENT_SIZE;
  const ctx=canvas.getContext('2d');
  ctx.imageSmoothingEnabled=false;
  const rows=rowsFor(safeDir,f,seated);
  for(let y=0;y<STUDENT_SIZE;y++){
    const row=rows[y]||'';
    for(let x=0;x<STUDENT_SIZE;x++){
      const token=row[x]||'.';
      const color=STUDENT_PALETTE[token];
      if(!color)continue;
      ctx.fillStyle=color;
      ctx.fillRect(x,y,1,1);
    }
  }
  const url=canvas.toDataURL('image/png');
  cache.set(key,url);
  return url;
}

export function directionFromDelta(dx,dy,fallback='SE'){
  if(dx===0&&dy===0)return fallback==='SW'?'SW':'SE';
  if(dx<0)return 'SW';
  if(dx>0)return 'SE';
  return dy<0?'SW':'SE';
}
