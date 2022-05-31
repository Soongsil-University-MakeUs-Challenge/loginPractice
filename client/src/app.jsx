import "./app.css";
import Login from "./components/login.jsx";
import Nav from "./components/nav.jsx";
import Signup from "./components/signup.jsx";
import Home from "./components/home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
