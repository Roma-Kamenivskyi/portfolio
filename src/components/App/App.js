import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import HeaderApp from '../HeaderApp';
import Home from '../Home';
import Portfolio from '../Portfolio';
import Skills from '../Skills';
import Contacts from '../Contacts';
import particlesOptions, { particlesStyles } from './particlesOptions';
import './App.css';

const App = () => {
  const [works, setWorks] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async url => {
    const baseUrl =
      'https://raw.githubusercontent.com/Kamenivskyi/portfolio/master/src/db';
    const res = await fetch(`${baseUrl}${url}`);
    return res.json();
  };

  const getWorks = () => {
    setLoading(true);
    fetchData('/works.json')
      .then(({ works }) => {
        setWorks(works);
        setLoading(false);
      })
      .catch(err => console.warn('Error: ', err));
  };

  const getSkills = () => {
    setLoading(true);
    fetchData('/skills.json')
      .then(({ data }) => {
        setSkills(data);
        setLoading(false);
      })
      .catch(err => console.warn('Error: ', err));
  };

  return (
    <Router>
      <div className='App'>
        <Particles params={particlesOptions} style={particlesStyles} />
        <HeaderApp />
        <div className='wrapper'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route
              path='/portfolio'
              render={props => (
                <Portfolio
                  {...props}
                  loading={loading}
                  getWorks={getWorks}
                  works={works}
                />
              )}
            />
            <Route
              path='/skills'
              render={props => (
                <Skills
                  {...props}
                  loading={loading}
                  getSkills={getSkills}
                  skills={skills}
                />
              )}
            />
            <Route path='/contacts' component={Contacts} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
