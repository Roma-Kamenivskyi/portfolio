import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Particles from "react-particles-js";
import HeaderApp from "../HeaderApp";
import Home from "../Home";
import Portfolio from "../Portfolio";
import Skills from "../Skills";
// import About from "../Home";
import Contacts from "../Contacts";
import { styles } from "./particlesOptions";
import options from "./particlesOptions";
import "./App.css";

class App extends Component {
  state = {
    loading: false
  };
  render() {
    return (
      <div className="App">
        <Particles params={options} style={styles} />
        <Router>
          <HeaderApp />
          <div className="wrapper">
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/skills" component={Skills} />
            <Route path="/contacts" component={Contacts} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
