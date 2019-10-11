import React, { Fragment, Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  state = {
    works: []
  };
  async componentDidMount() {
    await fetch("../../../db/works.json")
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Fragment>
        <h2>Portfolio</h2>
        <ul className="portfolio-list">
          <li className="portfolio-item">
            <h4 className="item-title">Title</h4>
            <img
              src="https://i2.wp.com/psd.in.ua/wp-content/uploads/kreativnyiy-maket-sayta-dlya-kompanii.jpg?w=600&ssl=1"
              alt=""
            />
            <div className="portfolio-descr">lorem ipsum blabla bla</div>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Portfolio;
