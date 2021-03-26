import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/places/new' exact>
          <NewPlace />
        </Route>
        <Route exact path='/'>
          <Users />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
