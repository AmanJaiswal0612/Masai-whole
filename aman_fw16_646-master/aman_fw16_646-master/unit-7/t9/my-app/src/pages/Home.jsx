import axios from "axios";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Posts from "../components/Posts";
import { borderRadius } from "@mui/system";

const Home = () => {
  const [gif, setGif] = useState([]);
  const [text, setText] = useState("");
  const [selectGif, setSelectGif] = useState("");
  const [posts, setPosts] = useState([]);
  const [sgif,setSgif]= useState("")
  const [gbox,setgbox] =useState(false);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    axios
      .get(`https://mock-json-aman.herokuapp.com/api/posts`)
      .then(({ data }) => setPosts(data));
  };

 
   
  const handleClick = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=RG6lZ4F5ccNv8Rb6HzpAcwMaSd5r05H9&q=${sgif}&limit=25&offset=0&rating=g&lang=en`
      )
      .then(({ data }) => setGif(data.data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      text,
      gif: selectGif,
    };
    try {
      await axios.post("https://mock-json-aman.herokuapp.com/api/posts", obj);
      setGif([]);
      getPost();
      setSelectGif("");
      setText("");
      setSgif("");
      setgbox(false);
    } catch (e) {
      console.log(e);
    }
  };

  const inputStyle = {
    width: "100%",
    height: "45px",
    fontSize: "23px",
    borderRadius: "5px",
  };

  const textAraetyle = {
    width: "100%",
    height: "80px",
    fontSize: "23px",
    borderRadius: "5px",
  };

  return (
    <div>
       <h1>Write Your Post</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", justifyContent: "center" }}
      >
        <textarea
          style={textAraetyle}
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="post"
          required
        />
        <br />
        <input
          style={inputStyle}
          type="url"
          name="gif"
          value={selectGif}
          placeholder="Click On get gif "
          onChange={() => {}}
          required
        />
        <h3 onClick={()=>setgbox(true)}>Get Gif</h3>
        <br />
        <input type="submit" style={{height:"45px"}} value="Post" />
      </form>
      {gbox?(<div style={{margin:"80px"}}>
        <h3>Search Your gif</h3>
      <input type="text" placeholder="searchGif" value={sgif} onChange={(e)=>{setSgif(e.target.value)}} />
      <button onClick={handleClick}>Search GIF</button>
        <div style={{margin:"60px"}}>
          {gif.map((el, index) => {
            return (
              <img
                key={index}
                src={el.images.fixed_height.url}
                onClick={() => setSelectGif(el.images.fixed_height.url)}
              />
            );
          })}
        </div>
      </div>):null}
        <h2>Recent Posts</h2>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "30px",
          }}
        >
          {posts.map((el) => {
            return <Posts {...el} key={nanoid()} />;
          })}
        </div>
      
    </div>
  );
};

export default Home;

//api key-->   RG6lZ4F5ccNv8Rb6HzpAcwMaSd5r05H9
