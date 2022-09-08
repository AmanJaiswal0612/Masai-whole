
const {addFive,arr,obj}=require("./another")
const os= require("os")
const {writeFileSync,readFileSync, readFile,} = require("fs");
const path = require("path");
writeFileSync("./written.txt","Hello written file",{encoding:"utf-8"});
readFileSync("./written.txt",{encoding:"utf-8"})
console.log(readFileSync("./written.txt",{encoding:"utf-8"}));
console.log(obj)
console.log(arr)
console.log(addFive(2));
readFile(path.join(".","text.txt"),{encoding:"utf-8"},(err,data)=>{
console.log(data)
})
console.log(os.cpus()[0].model);
console.log(os.version())