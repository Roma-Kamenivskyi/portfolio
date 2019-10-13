import React, { Fragment, Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  state = {
    works: []
  };
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/Roma-Kamenivskyi/portfolio/master/src/db/works.json"
    )
      .then(res => res.json())
      .then(res =>
        this.setState(() => {
          return {
            works: res.works
          };
        })
      )
      .catch(err => console.log("error: ", err));
  }
  render() {
    const { works } = this.state;
    return (
      <Fragment>
        <h2>Portfolio</h2>
        <ul className="portfolio-list">
          {works.map(work => {
            const { title, image, skills, id } = work;
            return (
              <li className="portfolio-item" key={id}>
                <img src={image} alt={title} />
                <h4> {title} </h4>
                <p> {skills} </p>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Portfolio;
