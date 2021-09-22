import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./css/Blog.css";

const Blog = () => {
  const cardInfo = [
    {
      image: "./images/img1.webp",
      title: "malavika r",
      date: "Nov 20, 2020 . 0 min",
      text: "*** FOCUS ON YOUR GOAL ***",
      profilePic: "./images/dp1.png",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/img1.webp",
      title: "malavika r",
      date: "Nov 20, 2020 . 0 min",
      text: "*** FOCUS ON YOUR GOAL ***",
      profilePic: "./images/dp1.png",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/img1.webp",
      title: "malavika r",
      date: "Nov 20, 2020 . 0 min",
      text: "*** FOCUS ON YOUR GOAL ***",
      profilePic: "./images/dp1.png",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/img1.webp",
      title: "malavika r",
      date: "Nov 20, 2020 . 0 min",
      text: "*** FOCUS ON YOUR GOAL ***",
      profilePic: "./images/dp1.png",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/img1.webp",
      title: "malavika r",
      date: "Nov 20, 2020 . 0 min",
      text: "*** FOCUS ON YOUR GOAL ***",
      profilePic: "./images/dp1.png",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="cardDesk">
        <Card
          className="card"
          key={index}
          onClick={() => window.open(card.link)}
        >
          <CardImg className="CardImg" src={card.image} alt="Card image cap" />
          <CardBody>
            <CardTitle className="name">
              <img
                className="profilePic"
                src={card.profilePic}
                alt="Display Picture"
              />
              <h6>
                {card.title} <p className="date"> {card.date} </p>
              </h6>
              <p className="cShareBtn">&#8942;</p>
            </CardTitle>
            <CardText className="text"> {card.text} </CardText>
            <div className="feedback">
              <div className="views_comment">
                <div class="fa fa-eye views">&nbsp; 50</div>
                <div className="far fa-comment-alt comment">&nbsp; 0</div>
              </div>
              <div className="like">
                <span>3</span> &#9825;
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  };

  return (
    <div className="blog">
      <div className="grid">{cardInfo.map(renderCard)} </div>
      <div className="slides">
        <span className="one">1</span>
        <Link to="/blog2" style= {{textDecoration:"none", color:"black"}}>
          <span className="two">2</span>
        </Link>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>
    </div>
  );
};

export default Blog;

