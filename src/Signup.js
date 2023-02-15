import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retpassword, setretPassword] = useState("");
  const navigate = useNavigate();
  let signup = () => {
    let data = {
      email: email,
      password: password,
      name: name,
      retpassword: retpassword,
    };
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //   .then((res) => res.json())
    //   .then((response) => {
    //     setThought(response);
    //   });
    navigate("/Signin");
  };

  return (
    <>
      <Header></Header>
      <div className="flex1">
        <div className="head1">
          <h2>Signup</h2>
        </div>
        <div className="all">
          <div>
            {" "}
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            {" "}
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              placeholder="Retype Password"
              value={retpassword}
              onChange={(e) => setretPassword(e.target.value)}
            ></input>
          </div>

          <div>
            <button className="go" onClick={signup}>
              Done!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
