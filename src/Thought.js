import React, { useEffect, useState } from "react";

export default function Thought({
  heading,
  author,
  language,
  date,
  content,
  auth,
}) {
  const [username1, setUsername1] = useState("");

  useEffect(() => {
    setUsername1(localStorage.getItem("usernamefromlocalstorage"));
  }, []);

  return (
    <div className="article">
      <div>
        {" "}
        <h1>{heading}</h1>
        {/* {username1 !== "" ? <button>Delete?</button> : ""} */}
      </div>

      <span className="spa">by</span>
      <span className="colour" onClick={auth}>
        {author}
      </span>
      <span className="colour">{language}</span>
      <span>{date}</span>
      <p>{content}</p>
    </div>
  );
}
