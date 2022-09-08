import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import BlogItem from "../components/BlogItem";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const [blogs, setblogs] = useState([]);
  const[loading,setLoading]= useState(false);
  const navigate= useNavigate()
  const[error,setError]=useState(false);
  const user= JSON.parse(localStorage.getItem("user"));
  const token=localStorage.getItem("token")
  
  useEffect(() => {
    if(!user){
      alert("please login first")
      navigate("/signin")
      return
    }
    setLoading(true)  
    axios.get(`http://localhost:8080/blog/myblog/${user._id}`,{headers:{"Authorization": `Bearer ${token}`}}).then(({ data }) => {
    setblogs(data)
    setLoading(false);
  })
  .catch((e)=>{
    console.log(e.response.data.message)
    if(e.response.data.message==="Token expires"){
      alert("Please Login Again");
      navigate("/signin")
    }
    setError(true);
  })
  }, []);
  
 

  if(error==true){
    return(<>
     <div className="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
    Your Network is Slow <br />Try Again!!!
  </div>
</div>
    </>)
  }
  if(loading==true){
    return(<>
      <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        <span className="visually-hidden">Loading...</span>
     </button>
    <button className="btn btn-primary" type="button" disabled>
       <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
    </button>
    </>)
  }
  return (
 
    <div>
            {blogs.map((el,index)=>{
              return(
                <BlogItem key={index} index={index} {...el} />
              )
            })}
    </div>
  );
};

export default Blog;
