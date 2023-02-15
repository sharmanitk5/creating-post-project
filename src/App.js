import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Post from "./Post";
import Sigin from "./Sigin";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import Signout from "./Signout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/Home"} element={<Home />} />
        <Route path={"/Post"} element={<Post />} />
        <Route path={"/Signin"} element={<Sigin />} />
        <Route path={"/Signup"} element={<Signup />} />
        <Route path={"/Signout"} element={<Signout />} />
      </Routes>
    </div>
  );
}

export default App;
