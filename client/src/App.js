import React from 'react';
import './App.css';
import BSView from './components/BSView'
import BSFavorites from './components/BSFavorites'
import BSBookInfo from './components/BSBookInfo'
import BSLogin from './components/BSLogin'
import BSSignup from './components/BSSignup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

      <Switch>
      <Route exact path="/" component={BSView}></Route>
      <Route path="/favorites" component={BSFavorites}></Route>
      <Route path="/discoverbook" component={BSBookInfo}></Route>
      <Route exact path="/login" component={BSLogin}></Route>
      <Route exact path="/signup" component={BSSignup}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
