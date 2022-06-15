import React, { useState } from "react";
import axios from "axios";

function join() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({
      id,
      password,
      nickname,
      email,
    });
    // console 확인
  };

  const onIdHandler = (event) => {
    setId(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const onNicknameHandler = (event) => {
    setNickname(event.target.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  axios
    .post("http://localhost:5001/", {
      id: id,
      password: password,
      nickname: nickname,
      email: email,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((response) => {
      console.log("Error!");
    });

  return (
    <body>
      <div className="sign-in">Join</div>
      <form onSubmit={onSubmit}>
        <div className="input-box">
          <input
            id="userId"
            type="text"
            name="userId"
            placeholder="ID"
            value={id}
            onChange={onIdHandler}
            required
          />
        </div>

        <div className="input-box">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="PW"
            value={password}
            onChange={onPasswordHandler}
            required
          />
        </div>
        <div className="input-box">
          <input
            id="nickname"
            type="text"
            name="nickname"
            placeholder="nickname"
            value={nickname}
            onChange={onNicknameHandler}
            required
          />
        </div>
        <div className="input-box">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={onEmailHandler}
            required
          />
        </div>
        <input
          className="bnt"
          type="submit"
          value="CREATE ACCOUNT"
          onSubmit={onSubmit}
        />
      </form>
    </body>
  );
}
export default join;
