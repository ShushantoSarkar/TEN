import React from "react";
import "./css/Hiring.css";

function Hiring() {
    return (
      <>
        <div className="hiring">
          <h4>We Are Hiring Interns</h4>
          <p>
            The Student Intern program is a structured and guided work-based
            learning program for students currently enrolled in India. There is
            a small registration fee, INR 400 /- (RUPEES Four HUNDRED ONLY)
            applicable to all incoming interns as part of this One-of-a-Kind
            Point based Program. This is required not just to ensure a seamless
            on-boarding and exit process but also to supply the interns with
            relevant study material and make them aware of how a corporate setup
            works.
          </p>
          <div className="flex">
            <p>
              Scan the QR code to complete your payment and submit the below
              application form to start with your registration process. Please
              keep the payment transaction ID handy for submitting the form.
              Note: This internship does not offer an opportunity to earn money,
              rather helps an individual grow by working on the job and earn a
              certificate upon successful completion. Check out few of our open
              internship positions below Refer the application form for more
              open positions Digital Marketing Interns General Management
              Interns Technical/Software Experts Product Management Interns
              Content Interns and more...
            </p>
            <img src="./images/pay.webp" alt="QR code" />
          </div>
        </div>

        <div className="applicationForm">
          <h2>Application From</h2>
          <p>Registration Fee Rs. 100/-</p>

          <form action="#">
            <label>Choose relevant internship opening</label>
            <br />
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <br />
            <label>Choose relevant internship opening</label>
            <br />
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <br />
            <label>Choose relevant internship opening</label>
            <br />
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <br />
            <label>Payment Transaction ID</label>
            <br />
            <input className="payment" type="text" />
            <input className="hSubmitBtn" type="submit" value="Next"/>
          </form>
        </div>
      </>
    );
}


export default Hiring;