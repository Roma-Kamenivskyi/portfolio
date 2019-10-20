import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Particles from "react-particles-js";
import HeaderApp from "../HeaderApp";
import Home from "../Home";
import Portfolio from "../Portfolio";
import Skills from "../Skills";
import Contacts from "../Contacts";
import options, { styles } from "./particlesOptions";
import "./App.css";

class App extends Component {
  state = {
    isLoading: false
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <Particles params={options} style={styles} />
        <Router>
          <HeaderApp />
          <div className="wrapper">
            <Route path="/" exact component={Home} />
            <Route
              path="/portfolio"
              render={props => (
                <Fragment>
                  <Portfolio isLoading={isLoading} />
                </Fragment>
              )}
            />
            <Route path="/skills" component={Skills} />
            <Route path="/contacts" component={Contacts} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
