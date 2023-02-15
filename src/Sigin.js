import React, { useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Sigin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let sign = () => {
    let data = {
      email: email,
      password: password,
    };
    // fetch("http://localhost:3001/authenticate/"+ email +"/"+password), {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // };
    fetch(`http://localhost:3001/authenticate/${email}/${password}`)
      //   .then((res) => res.json())
      //   .then((response) => {
      //     setThought(response);
      //   });
      .then((res) => res.json())
      .then((response) => {
        if (response) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("token", response);
          localStorage.setItem("usernamefromlocalstorage", email);

          navigate("/Post");
        } else {
          localStorage.setItem("isLoggedIn", "false");
          localStorage.setItem("usernamefromlocalstorage", "");
          alert("Invalid");
        }
      });
  };

  return (
    <>
      <Header></Header>
      <div className="flex1">
        <div className="head1">
          <h2>Signin</h2>
        </div>
        <div className="all">
          <div>
            {" "}
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div>
            <button className="go" onClick={sign}>
              Go!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
