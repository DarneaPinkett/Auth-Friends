import React from 'react';

import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Link to ="/login">Login</Link>
      </div>
      <Switch>
        <PrivateRoute path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
