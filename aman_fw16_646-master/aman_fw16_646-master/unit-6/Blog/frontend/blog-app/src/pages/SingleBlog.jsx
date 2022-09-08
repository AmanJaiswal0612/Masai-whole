import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import  Cateogry   from '../components/ShowCateogry'
import Reply from '../components/Reply';
import styles from "./Blog.module.css"
const SingleBlog = () => {
  const {id}= useParams();
  const [single,setSingle]= useState([]);
  let cObj={Message:"",Rating:""}
  const[comment,setComment]= useState([]);
  const[rform,setrform]=useState(cObj)
  const[like,setLike]= useState([]);
  const[Ccount,setCcount]= useState(0)
  var user=JSON.parse( localStorage.getItem("user"))
 
  const[cform,setCform]=useState(cObj)
  useEffect(()=>{
     getdata()

  },[])
   
   const getdata=()=>{
    axios.get(`http://localhost:8080/blog/${id}`)
    .then(({data})=>setSingle(data));
    
    axios.get(`http://localhost:8080/comment/${id}`)
    .then(({data})=>setComment(data))

    axios.get(`http://localhost:8080/like/${id}`)
    .then(({data})=>setLike(data))
   
    
   }

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setCform({...cform,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    let payload={...cform,Userid:user._id}
    axios.post(`http://localhost:8080/comment/${id}`,payload)
    .then(()=>{getdata()
    setCform(cObj)
    })
  }

  const handleReplyC=(e)=>{
    const{name,value}=e.target;
    setrform({...rform,[name]:value});
  }

  return (
    <div className={styles.singlebox} >
      {single.length?<Cateogry category={single[0].Category_ids}  />:null}
      {single.map((el,index)=>{
        return(
          <div key={index} >
             <h1>{el.Title}</h1>
             <p>{el.Body}</p>
          </div>
        )
      })}
      <hr />
      <div>
        <button onClick={()=>{
          axios.post(`http://localhost:8080/like/${id}`,{Emoji:"thumpsup",Userid:user._id})
          .then(()=>getdata())
        }} >Like</button>
       <h2>Like {like?like.length:0}</h2> 
      <h2>Comments</h2>
      <form onSubmit={handleSubmit} >
      <input type="text" onChange={handleChange} value={cform.Message} name="Message" placeholder='Add Comments' required />
      <input type="number" onChange={handleChange} value={cform.Rating} name="Rating" placeholder='Add Rating' required />
       <input type="submit" value={"Comment"} />
      </form>
 
  
      </div>
      
      <hr/>
      {comment.map((el,index)=>{
        return(
          <div  key={index}>
            <div style={{display:"flex",gap:"70px"}} >
            <p>{el.Message}</p>
            <p>Rating : {el.Rating}</p>
            <form className={styles.reply} onSubmit={(e)=>{
                  e.preventDefault();
                  const payload={...rform,Userid:user._id}
                  axios.post(`http://localhost:8080/comment/reply/${id}/${el._id}`,payload)
                  .then(()=>{setCcount(Ccount+1)
                  setrform(cObj)})
                  
                  
            }} >
            <input type="text"  name="Message"  onChange={handleReplyC} placeholder='Reply' required />
            <input type="number" name="Rating" onChange={handleReplyC}  placeholder='Add Rating' required  />
            <input type="submit" value="Reply" />
            </form>
           
            </div>
            <p style={{fontSize:"13px"}} >Replies</p>
            <div style={{marginLeft:"30px",fontSize:"12px"}}>
              <Reply Ccount={Ccount} cid={el._id} />
            </div>
           
           <hr />
          </div>

        )
      })}
    </div>
  )
}

export default SingleBlog