import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Signout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("usernamefromlocalstorage", "");
    localStorage.setItem("token", "");
    navigate("/Signin");
  });

  return (
    <>
      <Header></Header>
      <div>
        <h1>Logout Successfully</h1>
      </div>
    </>
  );
}
