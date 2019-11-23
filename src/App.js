import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Landing from './screens/Landing';
import SideNav from './components/SideNav';

function App() {
  return (
    <Router>
      <SideNav />
      <div id='main-container'>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
