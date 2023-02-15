import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";

export default function Post() {
  const [username, setUsername] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Homer Simpson");
  const [date, setDate] = useState(
    "Posted on Thursday,November 28th 2019,4:36:09 pm"
  );
  const [language, setLanguage] = useState("");
  useEffect(() => {
    setUsername(localStorage.getItem("usernamefromlocalstorage"));
  }, []);

  let test = (args) => {
    console.log(args);
  };

  let newPost = () => {
    let data = {
      heading: heading,
      language: language,
      author: author,
      date: date,
      content: content,
    };
    fetch("http://localhost:3001/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <Header></Header>
      <div className="flex1">
        <div className="head1">
          <h2>New Post</h2>
        </div>
        <div className="all">
          <div>
            {" "}
            <input
              placeholder="Title"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            ></input>
            {username !== "" ? <span>Delete</span> : ""}
          </div>
          <div>
            <textarea
              rows={7}
              placeholder="Type in your thoughts in 200 words or less"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          {/* <div>
          {" "}
          <input placeholder="Password"></input>
        </div>
        <div>
          <input placeholder="Retype Password"></input>
        </div> */}
          <div className="select">
            <div className="newselect">
              Select a Category
              <div>
                <select
                  placeholder="Select a category"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="">Select Language</option>
                  <option value="React">React</option>
                  <option value="Java">Java</option>
                  <option value="Javascript">Javascript</option>
                  <option value="Python">Python</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <button className="go" onClick={newPost}>
              +Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
