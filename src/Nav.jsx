import React from "react";
import { Link } from "react-router-dom";
import "./css/Nav.css";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";



function Nav() {
  return (
    <>
      <div className="topBar">
        <div className="cName">
          <span className="black">T</span>he <br />
          <span className="black">E</span>
          ntrepreneurship <br />
          <span className="black">N</span>etwork
        </div>
        <div className="topItems">
          <div className="row1">
            <div className="cart">
              <button>
                <FiShoppingCart />
              </button>
            </div>
            <div className="loginBtn">
              <button>
                <CgProfile /> <span className="loginText"> Log In </span>
              </button>
            </div>
          </div>
          <div className="searchBar">
            <input type="text" placeholder="Search here..." />
          </div>
        </div>
      </div>
      <div className="navBar">
        <div className="navItems">
          <ul>
            <Link to="/">
              <li className="btn ">Home</li>
            </Link>
            <span className="gray">|</span>
            <Link to="/onlinecourses">
              <li className="btn">Online Courses</li>
            </Link>
            <span className="gray">|</span>
            <Link to="/hiring">
              <li className="btn">We're Hiring</li>
            </Link>
            <span className="gray">|</span>
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
                  <li className="btn">Alumni Team</li>
                  <li className="btn">Forum</li>
                  <li className="btn">Hackathon</li>
                  <li className="btn"> Membership Resgistration</li>
                  <li className="btn">Campus Ambassador Program</li>
                  <li className="btn">Mentorship</li>
                  <Link to="/socialmedia">
                    <li className="btn">Social Media</li>
                  </Link>
                  <li className="btn">Testimonials</li>
                  <Link to="/contactus">
                    <li className="btn">Contact Us</li>
                  </Link>
                  <li className="btn">Complaints</li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}



export default Nav;
