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
        <span className="c-white work-position">Front End Developer</span>!
      </p>
      <ul className="social-list">
        <li className="social-item">
          <a
            href="https://github.com/Roma-Kamenivskyi"
            className="fab fa-github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to github"
          ></a>
        </li>
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/roman-kamenivskyi-524425194/"
            className="fab fa-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to linkedin"
          ></a>
        </li>
        <li className="social-item">
          <a
            href="#"
            className="fab fa-telegram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to telegram"
          ></a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
