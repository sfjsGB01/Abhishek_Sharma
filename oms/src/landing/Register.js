import React from "react";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Username" />
      </div>

      <div>
        <input type="text" placeholder="Password" />
      </div>

      <div>
        <input type="text" placeholder="Email" />
      </div>

      <div>
        <input type="button" value="Register" />
      </div>

      <div>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default Register;
