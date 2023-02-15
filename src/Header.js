import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Firstbutton from "./Firstbutton";

export default function Header() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("usernamefromlocalstorage"));
  }, []);

  return (
    <div className="flex">
      <h2 className="head">TinyThoughts</h2>
      <Link to="/home">
        <span className="first">
          <Firstbutton info={"Home"}></Firstbutton>
        </span>
      </Link>
      <Link to="/Post">
        {" "}
        <span className="second">
          <Firstbutton info={"NewPost"}></Firstbutton>
        </span>
      </Link>

      {username !== "" ? (
        <div className="fourth">
          <Link to="/Signout">
            {" "}
            <span className="fourth">
              <Firstbutton info={"Signout"}></Firstbutton>
            </span>
          </Link>
          <span className="username">{username}</span>
        </div>
      ) : (
        <div className="fourth">
          <Link to="/Signup">
            {" "}
            <span className="fourth">
              <Firstbutton info={"Signup"}></Firstbutton>
            </span>
          </Link>

          <Link to="/Signin">
            {" "}
            <span className="third">
              {" "}
              <Firstbutton info={"Signin"}></Firstbutton>
            </span>
          </Link>
        </div>
      )}

      <hr className="color"></hr>
    </div>
  );
}
