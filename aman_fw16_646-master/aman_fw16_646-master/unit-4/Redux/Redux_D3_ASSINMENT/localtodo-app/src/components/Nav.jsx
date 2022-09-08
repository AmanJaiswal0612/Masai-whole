import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Nav = () => {
  const login = useSelector((state) => state.auth.isAuth);

  return (
    <div style={{ display: "flex", gap: "100px" }}>
      <Link to="/">TodoStore</Link>
      <Link to={login ? "/logout" : "/login"}>
        {login ? "Logout" : "Login"}
      </Link>
    </div>
  );
};
