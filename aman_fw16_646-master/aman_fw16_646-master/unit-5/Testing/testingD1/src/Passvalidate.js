


const validate = (pass)=>{
 let flag= true;
 const lowercase="abcdefghijklmnopqrstuvwxyz".split("");
 const uppercse=  lowercase.map((e)=>e.toUpperCase());
 const digits= "1234567890".split("")

 if(pass.length<8){
     return{
         status:false,
         message:"min 8 chars require"
     }
 }

 if(!pass.split("").find((c)=>lowercase.includes(c))){
     return {
         status:false,
         message:"at least 1 lowercase require"
     }
 }

 if(!pass.split("").find((c)=>uppercse.includes(c))){
     return{
         status:false,
         message:"at least 1 uppercase require"
     }
 }

if(!pass.split("").find((c)=>digits.includes(c))){
    return{
        status:false,
        message:"at least 1 number require"
    }
}
  
 return {
     status:true,
     message:"Password is correct"
 }

}


module.exports= validate
