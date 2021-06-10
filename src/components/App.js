import React from 'react';
import './../App.css';
import Home from './Home';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
        <div>
          <Header />
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;