import React from "react";
import "./section2.css"
import telephone from "./img/telephone.png";
import playmarket from "./img/playMarket.png";
import apple from "./img/Apple.png";

function section2() {
  return (
    <div className="mobile-app">
      <div>
        <h2 className="our-popular heading2">
        Download Our <span>Mobile App</span>
        </h2>
        <p>
          It's all at your fingertips -- the restaurants you love. Find the
          right food to suit your mood, and make the first bite last. Go ahead,
          download app and get 50% discount
        </p>
        <pre>
          <img src={apple} /> <img src={playmarket} />
        </pre>
      </div>
      <img src={telephone} alt="" />
    </div>
  );
}

export default section2;
