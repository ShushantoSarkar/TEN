import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";
import ImageSlider from './ImageSlider';
import { SliderData } from "./testimonialsSec";

function Home() {
  return (
    <div className="home-main">
      <section className="Home-sec">
        <img src="https://static.wixstatic.com/media/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.jpg/v1/fill/w_1260,h_784,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.webp" />
        <h1>A World of Knowledge at Your Fingertips</h1>
      </section>

      <section className="about-sec">
        <h2 className="about-head">ABOUT US</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-div">
              Learning Together From the Comfort of Your Home
            </p>
            <br />
            <div className="about-btn">
              <Link to="/about">
                <button className="btn">Learn More</button>
              </Link>
            </div>
          </div>
          <img
            className="about-img"
            src={
              "https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_551,h_370,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp"
            }
            alt="about-image"
          />
        </div>
      </section>

      <section className="discord-sec">
        <div className="discord-div">
          <div className="discord-head">
            <br />
            <p>
              Welcome to <br />
              <span className="discord-head-p">THE NEXT BIG THING</span>
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            className="discord-a"
            href="https://discord.gg/A8zBusy"
            target="_blank"
          >
            <button className="discord-btn">Join TEN Virtual Campus</button>
          </a>
        </div>
      </section>

      <section className="courseEntrepreneurship-sec">
        <div className="course-1">
          <div className="course-img-1">
            <img src="images/course-img-1.png" />
          </div>
          <div className="course-text-1">
            <p>Entrepreneurship made fun</p>
            <div className="course-btn-1">Explore Here</div>
          </div>
        </div>

        <div className="course-2">
          <img src="https://static.wixstatic.com/media/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.jpg/v1/fill/w_490,h_450,al_c,q_80,usm_0.66_1.00_0.01/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.webp" />
          <div className="course-2-img">
            <div className="course-2-text">
              <p>Digital Marketing</p>
              <button>Explore Here</button>
            </div>
            <img src="https://static.wixstatic.com/media/11062b_557462ab123440368447ab18a66043e5~mv2.jpg/v1/fill/w_245,h_450,al_c,q_80,usm_0.66_1.00_0.01/11062b_557462ab123440368447ab18a66043e5~mv2.webp" />
          </div>
        </div>

        <div className="course-3">
          <div className="course-3-text">
            <p>Product Management like a pro</p>
            <button>Explore Here</button>
          </div>
          <img src="https://static.wixstatic.com/media/a3ac449c86364dd8999922949876d09e.jpg/v1/fill/w_490,h_444,al_c,q_80,usm_0.66_1.00_0.01/a3ac449c86364dd8999922949876d09e.webp" />
        </div>
      </section>

      <section className="benefits">
        <div className="benefits-hdiv">
          <h1 className="benefits-h1">Our Course Benefits</h1>
        </div>
        <div className="benefits-div">
          <div className="div-benifits">
            <img
              id="img-benifits"
              src={require("./images/img1.png").default}
              alt="expert Teachers"
            />
            <p className="p-benifits">
              Our instructors are more adept at monitoring student problems and
              assessing their level of understanding and progress, and they
              provide much more relevant, useful feedback.We are experts in
              developing and testing hypotheses about learning difficulties or
              instructional strategies.
            </p>
          </div>
          <div className="div-benifits">
            <img
              id="img-benifits"
              src={require("./images/img2.png").default}
              alt="online community"
            />
            <p className="p-benifits">
              Feel like home, with a "family of invisible friends".
            </p>
          </div>
          <div className="div-benifits">
            <img
              id="img-benifits"
              src={require("./images/img3.png").default}
              alt="flexible curriculum"
            />
            <p className="p-benifits">
              Our expert teachers design and curate the curriculum using best
              practices and careful consideration of how people learn and retain
              information with the ongoing tech trends in the professional
              domain. We've debated every facet of our methodology, from the
              order in which to teach concepts, the analogies used to clarify
              them and how exercises should be structured to deliver the maximum
              educational punch.
            </p>
          </div>
        </div>
      </section>

      <section className="imageslider-sec">
        <br />
        <h1 className="about-head">
          <u>Testimonials</u>
        </h1>
        <ImageSlider slides={SliderData}/>
      </section>

      <section className="consulting-sec">
        <div className="consulting-div">
          <video id="consulting-vid" autoPlay loop muted>
            <source
              src="https://video.wixstatic.com/video/11062b_79271b7012564ed497d2774a895ab7fd/1080p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
          <div className="consulting-link">
            <p>
              <i>Power of </i>
              <span> &nbsp; TEN &nbsp;</span>
              <i>Consulting</i>
            </p>
            <a
              href="https://www.consulting.entrepreneurshipnetwork.net/"
              target="_blank"
            >
              <button className="consulting-btn">Explore Here &gt;</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
