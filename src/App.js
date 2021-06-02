import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default () => {

  return (
    <Router>
      <div className='container'>
        <div className={'header'}>
          <Header />
        </div>
        <div className='mainStyle'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}