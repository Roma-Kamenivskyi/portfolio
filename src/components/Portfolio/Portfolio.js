import React, { Fragment, Component } from "react";
import PortfolioItem from "../PortfolioItem";
import "./Portfolio.css";

class Portfolio extends Component {
  state = {
    works: []
  };

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/Kamenivskyi/portfolio/master/src/db/works.json"
    )
      .then(res => res.json())
      .then(res => {
        this.setState(() => {
          return {
            works: res.works
          };
        });
      })
      .catch(err => console.log("Error: ", err));
  }

  render() {
    return (
      <Fragment>
        <h2 className="section-title">Portfolio</h2>
        <ul className="portfolio-list">
          {this.state.works.map(work => {
            return <PortfolioItem data={work} key={work.id} />;
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Portfolio;
