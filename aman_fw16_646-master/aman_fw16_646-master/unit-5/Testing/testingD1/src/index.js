

function add(a,b){
 if(typeof a==="string"||typeof b==="string"){
     return;
 }

  return a+b;
}


module.exports=add;