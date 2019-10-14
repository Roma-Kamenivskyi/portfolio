import React from "react";
import PropTypes from "prop-types";
import "./PortfolioItem.css";

const PortfolioItem = props => {
  const { title, image, skills, link, id, repository } = props.data;

  return (
    <li className="portfolio-item" key={id}>
      <img src={image} alt={title} />
      <div className="portfolio-descr">
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
    </li>
  );
};

PortfolioItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default PortfolioItem;
