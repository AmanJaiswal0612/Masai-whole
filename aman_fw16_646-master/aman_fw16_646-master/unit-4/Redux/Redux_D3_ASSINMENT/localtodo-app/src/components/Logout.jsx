import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { loginFailure } from "../authreducer/action";
import { loadData, saveData } from "../utils/localStorage";

export const Logout = () => {
  let dispatch = useDispatch();
   useEffect(()=>{
    dispatch(loginFailure())
    saveData("login",false);
    saveData("token","");
   },[])
   
   
;
  return (
    <h1>
      <Link to="/login">Click Here to Login Again</Link>
    </h1>
  );
};
