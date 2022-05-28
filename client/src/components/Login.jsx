import React from "react";

function Login() {
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
      <input className="bnt" type="button" value="CREATE ACCOUNT" />
    </body>
  );
}
export default Login;
