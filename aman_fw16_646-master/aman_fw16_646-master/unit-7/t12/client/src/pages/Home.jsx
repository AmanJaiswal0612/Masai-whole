import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const obj={longUrl:"",customUrl:"",expiry:""}
  const [uform, setuform] = useState(obj);
  const [loading, setLoading] = useState(false);
  const [shortUrl, setshortUrl] = useState("");
  const [color,setColor]= useState("#9c27b0")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuform({ ...uform, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setColor("#9c27b0")
    setLoading(true)
    axios.post("https://u-s-a.herokuapp.com/shorten/", uform).then(({ data }) => {
      console.log(data);
      setshortUrl(data.shortUrl)
    }).then(()=>{
        setLoading(false)
        setuform(obj)
    }).catch((e)=>alert('api error'))
  };

  const handleCopy=()=>{
    setColor("black")
    navigator.clipboard.writeText(shortUrl);
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35%" },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          type="url"
          name="longUrl"
          placeholder="URL"
          value={uform.longUrl}
          onChange={handleChange}
          required
          label="Long URL"
          color="secondary"
          focused
        />
        <br />
        <TextField
          type="number"
          name="expiry"
          value={uform.expiry}
          placeholder="Expiry (in minutes)"
          onChange={handleChange}
          label="Expiry (in minutes)"
          color="secondary"
          focused
          required
        />
        <br />
        <TextField
          type="text"
          name="customUrl"
          value={uform.customUrl}
          placeholder="Make Custom URl"
          onChange={handleChange}
          label="Custom name"
          color="secondary"
          focused
        />
        <br />
        <TextField
          type="submit"
          value="Shorten"
          color="secondary"
          style={{
            backgroundColor: "#9c27b0",
            borderRadius: "10px",
            color: "white",
            fontWeight: 600,
          }}
          focused
        />
        <br />
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <CircularProgress />
          </Box>
        ) : null}
      </Box>
      {shortUrl?<div style={{display:"flex",alignItems:"center",gap:"20px",color: "#9c27b0",width:"35%" ,margin:"auto" ,boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
        <h3>
        {shortUrl ? "Short URL-  " : ""} {shortUrl}
        </h3>
        <button style={{background:color,border:"none", color:"white",padding:"10px",borderRadius:"13px"}} onClick={handleCopy}>copy</button>
      </div>:null}
    </div>
  );
};

export default Home;


