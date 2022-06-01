import React from "react";
import { Link } from "react-router-dom";

function login() {
  return (
    <body>
      <div className="sign-in">Sign in</div>
      <form action="" method="POST">
        <div className="input-box">
          <input
            id="username"
            type="text"
            name="username"
            placeholder="ID"
            required
          />
        </div>

        <div className="input-box">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="PW"
            required
          />
        </div>
        <input className="bnt" type="submit" value="LOG IN" />
      </form>

      <Link
        to="/join"
        // style={{
        //   textDecoration: "none",
        //   color: "black",
        //   cursor: "pointer",
        // }}
      >
        <input className="bnt" type="button" value="CREATE ACCOUNT" />
      </Link>
    </body>
  );
}
export default login;
