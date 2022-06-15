import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onIdHandler = (event) => {
    setId(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // postLoginData();
    console.log({
      id,
      password,
    });
  };

  // async function postLoginData() {
  //   try {
  //     //응답 성공
  //     const response = await axios.post("http://localhost:5001/", {
  //       id: id,
  //       password: password,
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  axios
    .post("http://localhost:5001/", {
      id: id,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((response) => {
      console.log("Error!");
    });

  return (
    <body>
      <div className="sign-in">Sign in</div>
      <form name="userLogin" onSubmit={onSubmit}>
        <div className="input-box">
          <input
            id="userId"
            name="userId"
            type="text"
            placeholder="ID"
            value={id}
            onChange={onIdHandler}
            autofocus
            required
          />
        </div>

        <div className="input-box">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="PW"
            value={password}
            onChange={onPasswordHandler}
            autofocus
            required
          />
        </div>
        <input
          className="bnt"
          type="submit"
          value="LOG IN"
          onSubmit={onSubmit}
        />
      </form>
      <Link to="/join">
        <input className="bnt" type="button" value="CREATE ACCOUNT" />
      </Link>
    </body>
  );
}
export default login;
