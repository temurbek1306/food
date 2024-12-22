import React from "react";
import "./section.css";

import food from "./img/section1.png";
import restaurant from "./img/restaurant.png";
import watch from "./img/watch.png";
import courier from "./img/courier.png";

function Section() {
  return (
    <div className="container">
      <div className="section">
        <img src={food} alt="" />
        <div>
          <h2 className="our-popular heading">
            <span>Stay</span> At Home, We Will Provide <span>Good Food</span>
          </h2>
          <p>
            We provide tasty food and superfast delivery at your home. Let’s use
            our services right now and get discounts of up to 50%.
          </p>
          <div className="watch">
            <big>
              <img className="img-watch" src={watch} alt="" /> fasted delivery
              in 30 Minutes
            </big>
            <big>
              <img className="img-watch" src={courier} alt="" /> 300+ delivery
              men
            </big>
            <big>
              <img className="img-watch" src={restaurant} alt="" /> 100+
              restaurant & cafe shop
            </big>

          </div>
          <button className="nav-btn btn-see">See more</button>
        </div>
      </div>
    </div>
  );
}

export default Section;
