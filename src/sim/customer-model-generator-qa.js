const {FIXED_MODELS,createCustomer,validateCustomer,generateRegionalPool}=require('./customer-model-generator');

function assert(x,msg){if(!x)throw new Error(msg);}

function runQa(){
  assert(FIXED_MODELS.length===269,`fixed model count=${FIXED_MODELS.length}`);
  assert(new Set(FIXED_MODELS.map(x=>x.id)).size===269,'duplicate fixed model id');

  let generated=0;
  for(const model of FIXED_MODELS){
    for(let i=1;i<=20;i++){
      const c=createCustomer(model.id,51001+i,i);
      const errors=validateCustomer(c);
      assert(errors.length===0,`${model.id}: ${errors.join(',')}`);
      generated++;
    }
  }

  const pool=generateRegionalPool(1000,9001);
  assert(pool.length===1000,'regional pool size mismatch');
  assert(pool.every(c=>validateCustomer(c).length===0),'regional pool contains invalid customer');

  return {ok:true,fixedModels:FIXED_MODELS.length,generatedQaCustomers:generated,regionalPoolQa:pool.length};
}

if(require.main===module) console.log(JSON.stringify(runQa(),null,2));
module.exports={runQa};
