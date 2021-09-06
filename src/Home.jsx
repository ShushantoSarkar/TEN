import React from "react";
import "./css/Home.css";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="content1">
          <img className=" img hImg1" src="./images/homeImg1.webp" />
          <div className="imgText text1">
            A World of Knowledge at Your Fingertips
          </div>
        </div>
        <div className="content2">
          <div className="imgHeading">About Us</div>
          <img className=" img hImg2" src="./images/homeImg2.webp" />
          <div className="imgText text2">
            Learning Together From the Comfort of Your Home
          </div>
        </div>
        <div className="content3">
          <div className="imgHeading">Welcome to</div>
          <img className=" img hImg3" src="./images/homeImg3.webp" />
          <div className="imgText text3">THE NEXT BIG THING</div>
        </div>
        <div className="content4">
          <div className="row4_1">
            <div className="col4_1">
              <img className=" img hImg4" src="./images/homeImg4.webp" />
              <p className="imgText text4">
                Your New Journey Begins Here, Today
              </p>
              <img className=" img hImg5" src="./images/homeImg5.webp" />
            </div>
            <div className="col4_2">
              <a href="">Entrepreneurship made fun</a>
              <button>Explore Here</button>
              <div className="col4_2_1">
                <p>Digital Marketing</p>
                <button>Explore Here</button>
              </div>
              <div className="col4_2_2">
                <img className=" img hImg6" src="./images/homeImg6.webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="content5">
          <div className="text5">
            <p>Product Management like a pro</p>
            <button>Elxplore Here</button>
          </div>
          <img className=" img hImg7" src="./images/homeImg7.webp" />
        </div>
        <div className="content6">
          <h3>Our Course Benefits</h3>
          <div className="row6_1">
            <div className="">
              <h5>Expert Teachers</h5>
              <p>
                Our instructors are more adept at monitoring student problems
                and assessing their level of understanding and progress, and
                they provide much more relevant, useful feedback. We are experts
                in developing and testing hypotheses about learning difficulties
                or instructional strategies.
              </p>
            </div>
            <div className="">
              <h5>Online Community</h5>
              <p>Feel like home, with a "family of invisible friends".</p>
            </div>
            <div className="">
              <h5>Flexible Curriculum</h5>
              <p>
                Our expert teachers design and curate the curriculum using best
                practices and careful consideration of how people learn and
                retain information with the ongoing tech trends in the
                professional domain. We've debated every facet of our
                methodology, from the order in which to teach concepts, the
                analogies used to clarify them and how exercises should be
                structured to deliver the maximum educational punch.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="content7">
          <h4>Testimonials</h4>
          <p>
            TEN was my first ever experience into internship. Even though I
            didn't have much of an idea about my responsibilities, my mentors at
            TEN and fellow colleagues helped me a lot in making me understand my
            roles and were very cooperative throughout. ​ ​
            
             -Anjali Srivastava,Content Intern
          </p>
        </div> */}
        <div className="content8">
          <video src="https://video.wixstatic.com/video/11062b_79271b7012564ed497d2774a895ab7fd/720p/mp4/file.mp4"></video>
          <p className="imgText text8">Power of TEN Consulting</p>
          <button>Explore Here</button>
        </div>
      </div>
    </>
  );
}

export default Home;
