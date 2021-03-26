import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/places/new' exact>
            <NewPlace />
          </Route>
          <Route exact path='/'>
            <Users />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
