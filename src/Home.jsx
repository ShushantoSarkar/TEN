import React from "react";
import "./css/Home.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";


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
        </div>
      </>
    );
}

export default Home;