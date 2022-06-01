import React from "react";

function join() {
  return (
    <body>
      <div className="sign-in">Join</div>
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
        <div className="input-box">
          <input
            id="nickname"
            type="text"
            name="nickname"
            placeholder="nickname"
            required
          />
        </div>
        <div className="input-box">
          <input
            id="email"
            type="text"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <input className="bnt" type="submit" value="CREATE ACCOUNT" />
      </form>
    </body>
  );
}
export default join;
