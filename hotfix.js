// Gen 2.5 evaluation-safety hotfix.
// A new expedition must never inherit temporary run power, HP, cooldowns,
// or other player state from the previous expedition.
const beginExpeditionBase = beginExpedition;
function beginFreshExpedition(){
  player = null;
  enemies = [];
  projectiles = [];
  particles = [];
  texts = [];
  drops = [];
  shockwaves = [];
  boss = null;
  pointer.active = false;
  beginExpeditionBase();
}
$('startBtn').onclick = beginFreshExpedition;
$('againBtn').onclick = beginFreshExpedition;
