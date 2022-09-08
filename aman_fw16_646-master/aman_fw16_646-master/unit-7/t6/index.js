let word= document.getElementById("word");
let form=document.getElementById("form");
let main= document.getElementById("main");
let total= document.getElementById("total");
let timer= document.getElementById("timer");
let tiles= document.getElementById("tiles");
let start= document.getElementById("start");
let wrong= document.getElementById("wrong");
localStorage.setItem("words","")
let go=false;
let wordList=[];
let id;
timer.innerText=100;
let wordvalue="";
let totalScore=0;
total.innerText=`Total: `+totalScore;

let counts=["a","e","i","o","u","b","c","f","g","h","l","m","n","r","s","t","v","w","y","z"];
let scores=[1,1,1,1,1,3,3,4,2,4,1,3,1,1,1,1,4,4,4,10]
let obj={
   "a":1,
   "e":1,
   "i":1,
   "o":1,
   "u":1,
   "b":3,
   "c":3,
   "f":4,
   "g":2,
   "h":4,
   "l":1,
   "m":3,
   "n":1,
   "r":1,
   "s":1,
   "t":1,
   "v":4,
   "w":4,
   "y":4,
   "z":10
}
let tsum=0;
for(let i=0;i<20;i++){
   let el= document.getElementById(counts[i]);
   el.innerText="";
   let ran= Math.floor(Math.random()*(4-1)+1)
   tsum=tsum+ran;
   el.innerText=ran;
}
tiles.innerText=tsum;

let double= Math.floor(Math.random()*(19-0)+0)
document.getElementsByClassName('inner')[double].style.backgroundColor="red";
obj[counts[double]]=obj[counts[double]]*2;
let triple= Math.floor(Math.random()*(19-0)+0)
if(triple==double){
   if(triple==19){
       triple=triple-1;
   }else{
       triple=triple+1;
   }
}
document.getElementsByClassName('inner')[triple].style.backgroundColor='blue';
obj[counts[triple]]=obj[counts[triple]]*3;


//  let id= setInterval(()=>{
//    timer.innerText= Number(timer.innerText)-1;
//  },1000)


main.addEventListener("click",(e)=>{
   if(go==false){
       getstart();
       go=true;
   }
  
   // console.log(e.target.style)
  
   if(e.target.id=="main"){
       return;
   }
   if(e.target.className=="inner"){
       return;
   }
   if(e.target.innerText.charCodeAt()>=65&&e.target.innerText.charCodeAt()<=90){
       let letter= e.target.innerText.toLowerCase();
       let tag= document.getElementById(letter);
       if(Number(tag.innerText)==0){
           // let index=0;
           // for(let i=0;i<counts.length;i++){
           //     if(counts[i]==letter){
           //         index=i;
           //         break;
           //     }
           // }
           // document.getElementsByClassName("inner")[index].style.backgroundColor="black"
          
          return;
       }
      tsum=tsum-1;
      tiles.innerText=tsum;
      tag.innerText=Number(tag.innerText)-1;
      totalScore=totalScore+obj[letter];
      wordvalue=wordvalue+letter;
      word.value=wordvalue;
   }else{
       let lett= e.target.id;
      if(Number(e.target.innerText)==0){
       let index=0;
           for(let i=0;i<counts.length;i++){
               if(counts[i]==lett){
                   index=i;
                   break;
               }
           }
           document.getElementsByClassName("inner")[index].style.backgroundColor="black"
        return;
      } 
      tsum=tsum-1;
      tiles.innerText=tsum;
      totalScore=totalScore+obj[e.target.id]
      e.target.innerText=Number(e.target.innerText)-1;
      wordvalue=wordvalue+e.target.id;
      word.value=wordvalue;
   }
})


form.addEventListener("submit",async(e)=>{
   e.preventDefault();
   let wvalue= word.value;
  let ans= await check_if_word_exists(wvalue)
   if(ans){
   wordList.push(wvalue);
   word.value=""
   wordvalue="";
   total.innerText=`Total: `+totalScore;
   localStorage.setItem("words",JSON.stringify(wordList))
   wrong.innerText="Correct Word"
   setTimeout(()=>{
    wrong.innerText=""
   },2000)
   console.log(wordList)
   }else{
       let rew=wvalue.split("");
       for(let i=0;i<rew.length;i++){
           totalScore=totalScore-obj[rew[i]]
       }
       if(totalScore<0){
           totalScore=0;
       }
       wrong.innerText="Wrong Word"
       wordvalue=""
       word.value=""
       setTimeout(()=>{
        wrong.innerText=""
       },2000)
       // alert('incoorect word')
   }
   
})



   async function check_if_word_exists(word) {
   try{
       const url = "https://api.wordnik.com/v4/word.json/" + word + "/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
   let res=await fetch(url)
   let data = await res.json();
   if(data.length){
       return true;
   }else{
       return false;
   }
   }catch(e){
       console.log(e)
   }

   }
   function getstart(){
       if(timer.innerText==0){
          
       }else{
           id= setInterval(()=>{
           timer.innerText= Number(timer.innerText)-1;
           if(tiles.innerText==0){
               window.location.href='./words.html'
           }
           if(timer.innerText==0){
               window.location.href='./words.html'
           }
         },1000)
       }
   }