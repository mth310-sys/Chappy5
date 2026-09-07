import { STUDENT_PIXEL_CONVERTER_SHEET } from './student-pixelartconverter-sprite.js?v=student-pac-v2';

export const STUDENT_PIXEL_CANVAS_VERSION='student-pac-v3-canvas';
export const STUDENT_EXPRESSIONS=Object.freeze(['normal','smile','surprise','angry','troubled','wink']);
const CELL=48,COLS=5;
const CELL_INDEX=Object.freeze({
  SE_IDLE:0,SE_WALK1:1,SE_WALK2:2,SE_WALK3:3,SE_WALK4:4,
  SE_SEATED:5,SW_IDLE:6,SW_WALK1:7,SW_WALK2:8,SW_WALK3:9,
  SW_WALK4:10,SW_SEATED:11,NE_IDLE:12,NW_IDLE:13,
  EXP_normal:14,EXP_smile:15,EXP_surprise:16,EXP_angry:17,EXP_troubled:18,EXP_wink:19
});
const sheet=new Image();
let ready=false;
const waiters=new Set();
sheet.onload=()=>{ready=true;for(const canvas of waiters)drawRequested(canvas);waiters.clear()};
sheet.src=STUDENT_PIXEL_CONVERTER_SHEET;

function indexFor(dir='SE',frame=0,seated=false,expression=null){
  if(expression&&STUDENT_EXPRESSIONS.includes(expression))return CELL_INDEX[`EXP_${expression}`];
  if(seated)return dir==='SW'?CELL_INDEX.SW_SEATED:CELL_INDEX.SE_SEATED;
  if(dir==='NE')return CELL_INDEX.NE_IDLE;
  if(dir==='NW')return CELL_INDEX.NW_IDLE;
  const f=((Number(frame)||0)%5+5)%5;
  if(dir==='SW')return [CELL_INDEX.SW_IDLE,CELL_INDEX.SW_WALK1,CELL_INDEX.SW_WALK2,CELL_INDEX.SW_WALK3,CELL_INDEX.SW_WALK4][f];
  return [CELL_INDEX.SE_IDLE,CELL_INDEX.SE_WALK1,CELL_INDEX.SE_WALK2,CELL_INDEX.SE_WALK3,CELL_INDEX.SE_WALK4][f];
}
function drawRequested(canvas){
  if(!canvas||!ready)return;
  const idx=Number(canvas.dataset.spriteCell||0),sx=(idx%COLS)*CELL,sy=Math.floor(idx/COLS)*CELL;
  const ctx=canvas.getContext('2d');
  ctx.imageSmoothingEnabled=false;
  ctx.clearRect(0,0,CELL,CELL);
  ctx.drawImage(sheet,sx,sy,CELL,CELL,0,0,CELL,CELL);
}
export function applyStudentPixelCanvas(canvas,dir='SE',frame=0,seated=false,expression=null){
  const idx=indexFor(dir,frame,seated,expression);
  canvas.width=CELL;canvas.height=CELL;
  canvas.dataset.spriteCell=String(idx);
  canvas.dataset.spriteDir=dir;
  canvas.dataset.spriteFrame=String(frame);
  canvas.dataset.spriteSeated=String(!!seated);
  if(expression)canvas.dataset.expression=expression;else delete canvas.dataset.expression;
  if(ready)drawRequested(canvas);else waiters.add(canvas);
  return canvas;
}
