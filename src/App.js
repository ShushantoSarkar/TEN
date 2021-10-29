import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./css/App.css";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import Hiring from "./Hiring";
import Certification from "./Certification";
import Footer from "./Footer";
import Blog from "./Blog";
import Blog2 from "./Blog2";
import SocialMedia from "./SocialMedia";
import OnlineCourses from "./OnlineCourses";
import AlumniTeam from "./AlumniTeam";
import ContactUs from "./ContactUs";
import Forum from "./Forum";
import Hackathon from "./Hackathon";
import TestimonialsMainPage from "./TestimonialsMainPage";
import Campusambassador from "./CampusAmb";
import MembershipReg from "./MembershipReg";
import Mentorship from "./Mentorship";
import Complaints from "./complaints";
import About from "./About";

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
          <Route path="/alumniteam">
            <AlumniTeam />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/hackathon">
            <Hackathon />
          </Route>
          <Route path="/membershipresgistration">
            <MembershipReg />
          </Route>
          <Route path="/testimonial">
            <TestimonialsMainPage />
          </Route>
          <Route path="/campusambassador">
            <Campusambassador />
          </Route>
          <Route path="/mentorship">
            <Mentorship />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/complaints">
            <Complaints />
          </Route>
          <Route path="/about">
            <About />
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
