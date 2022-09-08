

function tax_calculator(income,saving){
    if(saving>income){
        return "Saving can't be greater than income";
    }
    
    if(income<=250000){
       tax= 0;
       return tax;
    }else if(income>250000&&income<=500000){
       tax=1/10*income;
       save= 1/2*saving;
       if(save<50000){
          tax=tax-save
       }else{
           tax=tax-50000
       }
       if(tax<0){
           tax=0;
       }
       return tax;
    }else if(income>500000&&income<=1000000){
       tax= 1/5*income;
       save= Math.floor(3/10*saving);
       if(save<50000){
           tax=tax-save
       }else{
            tax=tax-50000
       }
       if(tax<0){
           tax=0;
       }
       return tax;
    }else if(income>1000000){
       tax=Math.round(3/10*income);
       save= Math.floor(1/10*saving);
       if(save<50000){
           tax=tax-save
       }else{
            tax=tax-50000
       }
       if(tax<0){
           tax=0;
       }
       return tax;
    }
}


module.exports=tax_calculator

