import React from "react";
import PropTypes from "prop-types";
import "./PortfolioItem.css";

const PortfolioItem = ({
  data: { title, image, skills, link, id, repository }
}) => {
  return (
    <li className="flip" key={id}>
      <div className="portfolio-item">
        <img className="portfolio-face" src={image} alt={title} />
        <div className="portfolio-descr portfolio-face back">
          <a
            href={link}
            className="portfolio-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
          <p className="portfolio-skills">{skills}</p>
          <a
            href={repository}
            className="portfolio-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </div>
      </div>
    </li>
  );
};

PortfolioItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default PortfolioItem;
