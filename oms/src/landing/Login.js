import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/home");
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Username" />
      </div>

      <div>
        <input type="text" placeholder="Password" />
      </div>

      <div>
        <input type="button" value="Login" onClick={login} />
      </div>

      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
