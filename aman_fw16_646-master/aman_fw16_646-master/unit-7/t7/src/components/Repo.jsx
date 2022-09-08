import React from 'react'
import styles from "./style.module.css"
import { BsFillStarFill} from 'react-icons/bs';
import { BiGitRepoForked} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
const Repo = (props) => {
    const { id, name, language,stargazers_count,forks_count,owner,svn_url } = props.data;
    console.log(props.avatar_url)
  return (
    <a style={{textDecoration:"none", color:"black"}} href={svn_url} target="_blank">
          <div className={styles.repobox} >
        <div><img src={owner.avatar_url} alt={"image"} /></div>
        <div style={{textAlign:"center"}}>
            <h3>{name}</h3>
            <h3>{language}</h3>
        </div>
        <div>
            <div>
            <BsFillStarFill/>
            <p>{stargazers_count}</p>
            </div>
            <div>
              <BiGitRepoForked/>
               <p>{forks_count}</p>
            </div>

        </div>
    </div>
    </a>
 
  )
}

export default Repo