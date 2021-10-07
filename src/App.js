import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./css/App.css";
import Nav from "./Nav.jsx";
import Home from "./Home";
import Hiring from "./Hiring";
import Certification from "./Certification";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Blog from "./Blog";
import Blog2 from "./Blog2";
import SocialMedia from "./SocialMedia";
import OnlineCourses from "./OnlineCourses";

function App() {
  return (
    <div className="app">
      <Router>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route path="/onlinecourses">
            <OnlineCourses />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blog2">
            <Blog2 />
          </Route>
          <Route path="/socialmedia">
            <SocialMedia />
          </Route>
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
