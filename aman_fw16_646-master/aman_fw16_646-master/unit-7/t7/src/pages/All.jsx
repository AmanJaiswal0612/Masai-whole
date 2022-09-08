import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import Repo from "../components/Repo";

const All = () => {
  const [allRepo, setAllRepo] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.github.com/search/repositories?q=stars:%3E1+language:all"
      )
      .then(({ data }) => {
        let repos= data.items;
        repos.sort(function(a,b){return a-b});
        setAllRepo(repos);
      });
  }, []);
  return (
    <div>
      {allRepo.length > 0 ? (
        <>
          <Pagination
            data={allRepo}
            RenderComponent={Repo}
            title="Top Repos(All Languages)"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
        <h1>...loading</h1>
      )}
    </div>
  );
};

export default All;
