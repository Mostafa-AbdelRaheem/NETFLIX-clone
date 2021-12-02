import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Browse from './pages/Browse';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/" component={Browse}/>
      </Switch>
    </div>
  );
}

export default App;
