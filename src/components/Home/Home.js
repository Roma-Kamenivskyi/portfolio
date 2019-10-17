import React from "react";
import Social from "../Social";
import "./Home.css";

const Home = () => {
  return (
    <div className="introduction-page">
      <h1 className="name">
        <span className="name-top">Roman</span>
        <span className="name-bottom">Kamenivskyi</span>
      </h1>
      <p className="text-intro">
        Hello<span className="c-white">,</span> i am beginner{" "}
        <span className="c-white work-position">Front End Developer !</span>
      </p>
      <Social />
    </div>
  );
};

export default Home;
