import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginSuccess } from "../authreducer/action";

export const Login = () => {
  const [fdata, setFdata] = useState({});
  let login = useSelector((state) => state.auth.isAuth);

  let dispatch = useDispatch();
  const handleChange = (e) => {
    let field = e.target;
    setFdata({ ...fdata, [field.name]: field.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(fdata)
    });
    let d = await res.json();
    if (d.token) {
      let payload = {
        isAuth: true,
        token: d.token
      };
      dispatch(loginSuccess(payload));
    }
  };
  return login ? (
    <Navigate to="/" />
  ) : (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" onChange={handleChange} />
        <br />
        <input name="password" type="password" onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
