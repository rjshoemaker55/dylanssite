import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/main.scss';

import Landing from './screens/Landing';
import SideNav from './components/SideNav';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  return (
    <Router>
      <SideNav />
      <div id='main-container'>
        <FloatingContactButton />
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
