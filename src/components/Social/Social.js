import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <ul className="social-list">
      <li className="social-item">
        <a
          href="https://github.com/kamenivskyi"
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
          href="https://t.me/Kamenivskyi"
          className="fab fa-telegram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to telegram"
        ></a>
      </li>
    </ul>
  );
};

export default Social;
