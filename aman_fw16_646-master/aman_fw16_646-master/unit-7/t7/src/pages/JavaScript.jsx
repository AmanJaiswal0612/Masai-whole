import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination';
import Repo from '../components/Repo';

const JavaScript = () => {
  const [javascriptRepo,setjavascriptRepo]= useState([]);
  useEffect(()=>{
    axios.get("https://api.github.com/search/repositories?q=stars:%3E1+language:javascript")
    .then(({ data }) => {
      let repos= data.items;
      repos.sort(function(a,b){return a-b});
      setjavascriptRepo(repos);
    });
  },[])
  console.log(javascriptRepo)
  return (
    <div>
    {javascriptRepo.length > 0 ? (
      <>
        <Pagination
          data={javascriptRepo}
          RenderComponent={Repo}
          title="Top JavaScript Repos"
          pageLimit={5}
          dataLimit={10}
        />
      </>
    ) : (
      <h1>...loading</h1>
    )}
  </div>
  )
}

export default JavaScript