import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/main.scss';

import Landing from './screens/Landing';
import Shop from './screens/Shop';
import Blog from './screens/Blog';
import Forum from './screens/Forum';
import SideNav from './components/SideNav';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  return (
    <Router basename='/survival-kits'>
      <SideNav />
      <div id='main-container'>
        <FloatingContactButton />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/forum' component={Forum} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
