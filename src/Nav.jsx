import React from "react";
import { Link } from "react-router-dom";
import "./css/Nav.css";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function Nav() {
  return (
    <nav>
      <div className="topBar">
        <div className="cName">
          <span className="black">T</span>he <br />
          <span className="black">E</span>
          ntrepreneurship <br />
          <span className="black">N</span>etwork
        </div>
        <div className="cLogo">
          <img src="images/cLogo.png" alt="Company Logo" />
        </div>
        <div className="topItems">
          <button className="cart">
            <FiShoppingCart />
          </button>

          <button className="loginBtn">
            <CgProfile /> <span className="loginText"> Log In </span>
          </button>

          <div class="search-container">
            <form action="#" class="hovering">
              <input
                class="searchBar"
                type="text"
                placeholder="Search here..."
                name="search"
              />
              <i class="fas fa-search image1"></i>
            </form>
          </div>
        </div>
      </div>
      
      <div className="navBar">
        <div className="navItems">
          <ul>
            <Link to="/">
              <li className="btn ">Home</li>
            </Link>
            <span className="grey">|</span>
            <Link to="/onlinecourses">
              <li className="btn">Online Courses</li>
            </Link>
            <span className="grey">|</span>
            <Link to="/hiring">
              <li className="btn">We're Hiring</li>
            </Link>
            <span className="grey">|</span>
            <div className="moreItems">
              <li className="more btn">More</li>
              <div className="moreContent">
                <ul>
                  <Link to="/blog">
                    <li className="btn">Blog</li>
                  </Link>
                  <Link to="/certification">
                    <li className="btn">Certification</li>
                  </Link>
                  <Link to="/alumniteam">
                    <li className="btn">Alumni Team</li>
                  </Link>
                  <Link to="/forum">
                    <li className="btn">Forum</li>
                  </Link>
                  <Link to="/hackathon">
                    <li className="btn">Hackathon</li>
                  </Link>
                  <Link to="/membershipresgistration">
                    <li className="btn"> Membership Resgistration</li>
                  </Link>
                  <Link to="/campusambassador">
                    <li className="btn">Campus Ambassador Program</li>
                  </Link>
                  <Link to="/mentorship">
                    <li className="btn">Mentorship</li>
                  </Link>
                  <Link to="/socialmedia">
                    <li className="btn">Social Media</li>
                  </Link>
                  <Link to="/testimonial">
                    <li className="btn">Testimonials</li>
                  </Link>
                  <Link to="/contact">
                    <li className="btn">Contact Us</li>
                  </Link>
                  <Link to="/complaints">
                    <li className="btn">Complaints</li>
                  </Link>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
