const {randomInt} = require("crypto")
var arguments = process.argv;
console.log(arguments)
if(arguments[2]=="random"){
randomInt(10000,(err,n)=>{
    if(err) throw(err);
    console.log(n)
})
}
if(arguments[2]=='sin'){
    let sin=Math.sin(Number(arguments[3]));
    console.log(sin);
}
if(arguments[2]=='cos'){
 let cos=Math.cos(Number(arguments[3]));
 console.log(cos)
}

if(arguments[2]=='tan'){
    let tan=Math.tan(Number(arguments[3]));
    console.log(tan);
}

if(arguments[2]==='add'){
let sum= 0;    
for(let i=3;i<arguments.length;i++){
  sum=sum+Number(arguments[i]);
}
console.log(sum)
}

if(arguments[2]=='sub'){
let sub= Number(arguments[3])-Number(arguments[4]);
console.log(sub);
}

if(arguments[2]=='mult'){
    let mult=1;
    for(let i=3;i<arguments.length;i++){
        mult=mult*Number(arguments[i]);
    }
    console.log(mult);
}
if(arguments[2]=='divide'){
    let divide=Number(arguments[3])/Number(arguments[4]);
    console.log(divide);
}
