import React, { Component, Fragment } from "react";
import ProgressBar from "../ProgressBar";
import "./Skills.css";

class Skills extends Component {
  state = {
    skills: []
  };
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/Roma-Kamenivskyi/portfolio/master/src/db/skills.json"
    )
      .then(res => res.json())
      .then(res =>
        this.setState(() => {
          return {
            skills: res.data
          };
        })
      )
      .catch(err => console.log("error: ", err));
  }

  render() {
    return (
      <Fragment>
        <h2 className="section-title">Skills</h2>
        <ul>
          {this.state.skills.map(skill => {
            return (
              <li key={skill.id}>
                <ProgressBar data={skill} />
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Skills;
