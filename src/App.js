import React from 'react';
import {Homepage} from './homepage/homepage';
import {About} from './homepage/about';
import {Users} from './homepage/users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Homepage} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
    );
  }
}

export default App;
