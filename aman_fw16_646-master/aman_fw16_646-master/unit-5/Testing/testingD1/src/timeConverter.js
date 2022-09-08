

function timeConverter(ms){


  if(ms%3600000==0){
    let hour= Math.floor(ms/3600000);
    return hour+" "+"hours"
  }
  
  if(ms>3600000){
      let hour=Math.floor(ms/3600000);
      let min=Math.floor((ms%3600000)/60000);
      let second=((ms%3600000)%60000)/1000;
      second=Math.floor(second)

      return `${hour} hours ${min} minutes ${second} seconds`
  }
  
   
  if(ms%60000==0){
    let ans= ms/60000+"minutes"
    return ans; 
  }
  if(ms>60000){
    let min= Math.floor(ms/60000);
    let sec=Math.floor((ms%60000)/1000);
    let ans= min+" "+"minutes"+" "+sec+" "+"seconds"
    return ans;
  }


  if(ms>=1000&&ms<60000){
      let ans= Math.floor(ms/1000)+"seconds"
      return ans;
  }
  

  if(ms<1000){
    return "0seconds"
  }

}




module.exports=timeConverter;