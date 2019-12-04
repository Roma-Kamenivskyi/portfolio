import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Header from '../layout/header';
import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import Skills from '../pages/skills';
import Contacts from '../pages/contacts';
import particlesOptions, { particlesStyles } from './particles-options';
import './app.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Particles params={particlesOptions} style={particlesStyles} />
        <Header />
        <div className='wrapper'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/skills' component={Skills} />
            <Route path='/contacts' component={Contacts} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
