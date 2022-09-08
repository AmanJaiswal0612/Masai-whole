import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination';
import Repo from '../components/Repo';

const Html = () => {
  const [htmlRepo,sethtmlRepo]= useState([]);
  useEffect(()=>{
    axios.get("https://api.github.com/search/repositories?q=stars:%3E1+language:html")
    .then(({ data }) => {
      let repos= data.items;
      repos.sort(function(a,b){return a-b});
      sethtmlRepo(repos);
    });
  },[])
  console.log(htmlRepo)
  return (
    <div>
    {htmlRepo.length > 0 ? (
      <>
        <Pagination
          data={htmlRepo}
          RenderComponent={Repo}
          title="Top Html Repos"
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

export default Html