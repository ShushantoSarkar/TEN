import React from "react";
import { SocialIcon } from "react-social-icons";
import "./css/Fotter.css";

function Fotter() {
  return (
    <>
      <div className="fotter">
        <div className="row1">
          <SocialIcon
            className="socialIcon facebook"
            url="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"
          />
          <SocialIcon
            className="socialIcon twitter"
            url="https://twitter.com/We_Are_TEN?s=08"
          />
          <SocialIcon
            className="socialIcon insta"
            url="https://www.instagram.com/theentrepreneurshipnetwork/"
          />
        </div>
        <div className="row2">
          <p>Subscribe to out newsletter</p>
          <form action="">
            <div className="col1">
              <input type="text" name="name" placeholde="Name" />
              <input type="text" name="collage" id="collage" />
            </div>
            <div className="col2">
              <input type="number" name="mobile" id="mobile" />
              <input type="mail" name="mail" id="mail" />
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <option value="Discord">Join TEN's Discord Cmmunity</option>
            </div>
            <input className='submitBtn' type="submit" name="" />
          </form>
        </div>
        <div className="row3">
          <p>About us</p>
          <p>FAQ's</p>
          <p>Contact Us</p>
        </div>
      </div>
      <p className="copyright">
        © 2020 Limitless Technologies - The Entrepreneurship Network
      </p>
    </>
  );
}

export default Fotter;
