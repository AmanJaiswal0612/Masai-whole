import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination';
import Repo from '../components/Repo';

const Css = () => {
  const [cssRepo,setCssRepo]= useState([]);
  useEffect(()=>{
    axios.get("https://api.github.com/search/repositories?q=stars:%3E1+language:css")
    .then(({ data }) => {
      let repos= data.items;
      repos.sort(function(a,b){return a-b});
      setCssRepo(repos);
    });
  },[])
  console.log(cssRepo)
  return (
    <div>
    {cssRepo.length > 0 ? (
      <>
        <Pagination
          data={cssRepo}
          RenderComponent={Repo}
          title="Top Css Repos"
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

export default Css