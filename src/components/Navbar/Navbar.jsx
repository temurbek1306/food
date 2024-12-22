import React from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <img src={require("./images/logo.svg").default} alt="logo" />
        <div className="sign">
        <ul className="list">
          <li>
            <a href="#" className="link active">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Top cities
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Contract
            </a>
          </li>
        </ul>
        
          <i className="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <button className="nav-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
