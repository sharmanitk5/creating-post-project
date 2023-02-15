import React, { useEffect, useState } from "react";
import Header from "./Header";

import Thought from "./Thought";

export default function Home() {
  const [category, setCategory] = useState([]);
  const [thought, setThought] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/thoughts")
      .then((res) => res.json())
      .then((response) => {
        setThought(response);

        console.log(response);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategory(response);

        console.log(response);
      });
  }, []);
  let allpost = () => {
    fetch("http://localhost:3001/thoughts")
      .then((res) => res.json())
      .then((response) => {
        setThought(response);

        console.log(response);
      });
  };

  let post = (x) => {
    fetch(`http://localhost:3001/categories/${x}`)
      .then((res) => res.json())
      .then((response) => {
        setThought(response);
      });
  };
  let auth = (x) => {
    fetch(`http://localhost:3001/author/${x}`)
      .then((res) => res.json())
      .then((response) => {
        setThought(response);
      });
  };
  return (
    <>
      <Header></Header>
      <div className="flex1">
        <div className="line">
          {category.map((x) => (
            <button className="f" onClick={() => post(x.label)}>
              {x.label}
            </button>
          ))}
          <button className="f fs" onClick={allpost}>
            All posts
          </button>

          {/* <span><button className='f'>  {second}</button></span>
          <div>
          <span><button className='f'>{third}</button></span>
          <span><button className='f'>{fourth}</button></span>
          </div>
          <div>
          <span><button className='f'>{fifth}</button></span>
          <span><button className='f'>{sixth}</button></span>
          </div>
          <div><button className='f fs'>{all}</button></div> */}
        </div>
        <div>
          {thought.map((x) => (
            <div>
              <Thought
                heading={x.heading}
                language={x.language}
                author={x.author}
                date={x.date}
                content={x.content}
                auth={() => auth(x.author)}
              ></Thought>
            </div>
          ))}

          {/* <div>
          <Thought
            heading={"This was funny"}
            language={"Node.js"}
            author={"Homer Simpson"}
            date={"Posted on Thursday,November 28th 2019,4:36:09 pm"}
            content={
              "so,I saw this video on Youtube and this guy was teaching something"
            }
          ></Thought>
        </div> */}
          {/* <div>
          <Thought
            heading={"Java,eh?"}
            language={"Java"}
            author={"Homer Simpson"}
            date={"Posted on Thursday,November 28th 2019,4:36:09 pm"}
            content={"Doh!"}
          ></Thought>
        </div>
        <div>
          <Thought
            heading={"Why React??"}
            language={"React"}
            author={"Homer Simpson"}
            date={"Posted on Thursday,November 28th 2019,4:36:09 pm"}
            content={
              "Why do you have to react to everything?I mean all i said was the reactor"
            }
          ></Thought>
        </div>
        <div>
          <Thought
            heading={"Thoughts on Javascript"}
            language={"Javascript"}
            author={"Homer Simpson"}
            date={"Posted on Thursday,November 28th 2019,4:36:09 pm"}
            content={"I love a hot cuppa Java with my donuts."}
          ></Thought>
        </div> */}
        </div>
      </div>
    </>
  );
}
