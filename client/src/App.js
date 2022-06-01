import "./app.css";
import React from "react";
import Login from "./components/login";
import Join from "./components/join";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function app() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>login-practice</div>
        </header>
      </div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}
export default app;
