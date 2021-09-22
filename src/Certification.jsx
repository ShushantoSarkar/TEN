import React from "react";
import "./css/Certification.css";

function Certificate(){
    return (
      <>
        <div className="certified">
          <h1>TEN Certified Expert</h1>
          <p>Dear Intern,</p>
          <p>
            We at TEN not only strive to provide the best guidance to our
            interns but also ensure their experience with us proves to be a
            career milestone.
          </p>
          <p>
            We hereby offer to certify you as an Expert in your domain for a
            paltry sum of INR 200/- (RUPEES TWO HUNDRED ONLY). This Internship
            encompasses all the major learnings you gave and received and
            establishes you as a certified professional. We are certain this
            accomplishment will go a long way in building your fledgling career
            and prove instrumental in making you the best in business.
          </p>
          <p>
            The <a href="#qrcode">QR code</a> below helps you to make the
            required payment. The certificate would be shared on your email Id
            registered with us, once the payment is successful. Also, fill up
            the form below that helps you subscribe for the required
            certificate.{" "}
          </p>
          <p>
            We look forward to certifying you and thereby enhancing your skill
            set and enriching your ever-growing profile.
          </p>
          <form action="#">
            <p>Subscribe here to get Certificates</p>
            <div className="inputTag">
              <div className="">
                <input className="place" type="text" placeholder="name" />
                <input type="text" placeholder="name" />
                <input type="text" />
              </div>
              <div className="col col2">
                <input type="text" />
                <input type="text" />
              </div>
            </div>
            <input className="submitBtn" type="Submit" value="Subscribe" />
          </form>
          <div id="qrcode">
            <img src="./images/pay.webp" alt="qrcode" />
          </div>
        </div>
      </>
    );
}

export default Certificate;