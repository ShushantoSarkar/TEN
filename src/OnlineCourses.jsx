import React from "react";
import "./css/OnlineCourses.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
} from "reactstrap";


const OnlineCoursesContainer = () => {
  const courseInfo = [
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales1.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/hr.webp",
      title:
        "Resuouce: Internship+training+Career counselling+Resume & LinkedIn Profile",
      price: "₹200",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
    {
      image: "./images/sales.webp",
      title:
        "Sales:Internship+ Tranining + Career + Counselling + Resume & LinkeIn Profile",
      price: "₹400",
      link: "https://www.entrepreneurshipnetwork.net/post/focus-on-your-goal",
    },
  ];

  const onlineCard = (oCard) => {
    return (
      <div className="courses">
        <div>
          <Card>
            <CardImg className="onlineImage" src={oCard.image} />
            <CardBody>
              <CardSubtitle
                className="onlineTitle"
                tag="h6"
                className="mb-2 text-muted"
              >
                {oCard.title}
              </CardSubtitle>
              <CardText className="onlinePrice">{oCard.price}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="onlineCourses">
      <div className="filterContainer">
        <div className="filter">
          <h5>Filter By </h5>
          <hr />
          <p className="price">Price</p>
          <input type="range" min="1" max="100" class="slider" id="myRange" />
          <hr />
        </div>
      </div>
      <div className="courseBody">
        <div className="sortBy">
          <Dropdown className="Dropdown">
            <Dropdown.Toggle id="dropdown-basic">Sort by</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Price (low to high)
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Pricee (high to low)
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">Name A-Z</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Name Z-A</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="coursesCard">
          <div className="cardItems">{courseInfo.map(onlineCard)}</div>
        </div>
        <div className="onlineBtn">
          <button className="onlineLMBtn">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default OnlineCoursesContainer;
