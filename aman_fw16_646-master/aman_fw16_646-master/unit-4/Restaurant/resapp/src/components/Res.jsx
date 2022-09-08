import Form from "./Form"
import { useEffect, useState } from "react"
import { Display } from "./Display"
import styles from "./Res.module.css"


const Res= ()=>{
    
        
    const[todo,setTodo]= useState([]);
    const[pageNumber,setPageNumber]= useState(1);    

    useEffect(()=>{
     getData()
    },[pageNumber])
    let data;
    let getData= async ()=>{
        let res= await fetch(`http://localhost:3000/res?_page=${pageNumber}`);
        data= await res.json();
        setTodo(data)
    }



    
    let style={
        display:"grid",
        gridTemplateColumns:"auto auto auto",
        gap:"20px"
    }
    
    
     const handleClick = async()=>{
        let res= await fetch("http://localhost:3000/res");
        data= await res.json();
        let newdata=data.sort(function(a,b){
            return b.rating-a.rating;
        }).filter((el)=>{
           return el.rating<=4;
         })
         setTodo(newdata)
     }
     const handleFilter= async ()=>{
        let res= await fetch("http://localhost:3000/res");
        data= await res.json();
         let newData=data.sort((a,b)=>{
            return b.rating>a.rating;
         }).filter((el)=>{
             return el.rating>=4.2;
         })
         setTodo(newData)
     }
    const cashOnly = async()=>{
        let res= await fetch("http://localhost:3000/res");
        data= await res.json();
        let newData= data.filter((el)=>{
            return el.cash==true&&el.card==false;
        })
        setTodo(newData)
    }
    const cardOnly = async()=>{
        let res= await fetch("http://localhost:3000/res");
        data= await res.json();
        let newData= data.filter((el)=>{
            return el.card==true&&el.cash==false;
        })
        setTodo(newData)
    }
    const highTolow = async()=>{
        let res= await fetch("http://localhost:3000/res");
        data= await res.json();
        let newData= data.sort((a,b)=>{
            return b.cost-a.cost;
        })
        
        setTodo([...newData])
    }
    const lowTohigh = async()=>{
        let res= await fetch("http://localhost:3000/res");
        data= await res.json();
        let newData= data.sort((a,b)=>{
            return a.cost-b.cost;
        })
        
        setTodo([...newData])
    }
    const all= async()=>{
        let res= await fetch("http://localhost:3000/res");
        data= await res.json();
        setTodo(data);
    }
    
    const addData= (formData)=>{
     setTodo([...todo,formData]);
     
    }
    
  
        return (
            <>
            <h1 className={styles.title}>GET FOOD.COM </h1>
            <div className={styles.form}>
             <h2>Restaurant Registation Form</h2>
             <p>If anyone want to register his/her Restaurant then he just need to fill the form and click on submit button</p>
            <Form addData={addData}/>
            </div>
            <div className={styles.allbtn}>
            <h4>Filters</h4>
            <button onClick={()=>handleClick()}>Filter</button>
            <button onClick={()=>handleFilter()}>MORe THAN 4.2</button>
            <button onClick={()=>cashOnly()}>Cash Only</button>
            <button onClick={()=>cardOnly()}>Card Only</button>
            <button onClick={()=>all()}>All</button>
            <button onClick={()=>highTolow()}>High To Low</button>
            <button onClick={()=>lowTohigh()}>Low To High</button>  
            </div>
               
            <div style={style}>
             <Display data={todo}/>
            </div>
            <div className={styles.page}>
            <button  disabled={pageNumber===1}onClick={()=>{setPageNumber(pageNumber-1)}}>PREV</button>
             <button onClick={()=>setPageNumber(pageNumber+1)}>NEXT</button>
            </div>
         
            
            </>
                
        )
    }
    
    export default Res