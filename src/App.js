import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./css/App.css";
import Nav from "./Nav.jsx";
import Home from "./Home";
import Hiring from "./Hiring";
import Certification from "./Certification";
import Fotter from "./Fotter";


function App() {
  return (
    <div className="app">
      <header>
        <Nav />
      </header>
      <Router>
        <Switch>
          <Route path="/hiring">
            <Hiring />
          </Route>
          <Route path="/certification">
            <Certification />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <fotter>
        <Fotter />
      </fotter>
    </div>
  );
}

export default App;
