// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import reviewComponent from './reviewComponent';
 

class App extends Component {
  render() {
    return (
    <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">React Express App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
               
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/' component={HomeComponent} />
              <Route exact path='/review' component={reviewComponent} />
           
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;