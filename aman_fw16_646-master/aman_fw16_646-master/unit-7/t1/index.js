
let search= document.getElementById("search");
let close= document.getElementById("close");
let content= document.getElementById("content");





var searchCountry= async ()=>{
let res= await fetch("./data.json")
let data= await res.json();
let svalue= search.value.toLowerCase();
let arr=[]
for(let i=0;i<data.length;i++){
    if(svalue=="") break;
    if(data[i].countryName.toLowerCase().includes(svalue)){
      arr.push(data[i].countryName)
    }
}

display(arr);
console.log(arr)
}



search.addEventListener("input", searchCountry)


close.addEventListener("click",()=>{
    search.value="";
    content.innerHTML="";
    content.style.overflowY="auto"
    content.style.boxShadow="0px 0px"
    content.style.backgroundColor="transparent"
})



function display(arr){
    content.innerHTML="";
    if(arr.length){
        content.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        content.style.background="white"
    }else{
        content.style.boxShadow="0px 0px"
        content.style.backgroundColor="transparent"
    }

    if(arr.length>=5){
        content.style.overflowY="scroll"
    }else{
        content.style.overflowY="auto"
    }
    arr.map((el)=>{
      let p = document.createElement("p");
      p.innerText=el;
      content.append(p);
    })
}