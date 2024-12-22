import React from "react";
import "./Main.css";
import image from "./images/image.png";

function Main() {
  return (
    <div className="container">
      <div className="main">
        <div className="main-text">
          <h2 className="main-heading">
            Super fast <span className="span">Food</span>
            <span className="span"> Delivery</span> Service
          </h2>
          <p>
            We provide super fast-delivery service. Let’s use our services right
            now and get discounts of up to 50%
          </p>
          <div className="explore-food">
            <button className="nav-btn">Explore Food</button>
            <p className="download-app">Download App</p>
          </div>
        </div>
        <img className="main-image" src={image} alt="kuryer" />
      </div>
    </div>
  );
}

export default Main;
