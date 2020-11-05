import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import './App.css'
import Register from './Components/Register/Register';

const App = () => {
  return(
    <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
    </Fragment>
  )
}



export default App;
