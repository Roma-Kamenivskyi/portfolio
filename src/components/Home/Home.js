import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="name">
        <span className="name-top">Roman</span>
        <span className="name-bottom">Kamenivskyi</span>
      </h1>
      <p className="introduction">
        Hello<span className="c-white">,</span> i am beginner{" "}
        <span className="c-white">Front End Developer</span>!
      </p>
    </div>
  );
};

export default Home;
