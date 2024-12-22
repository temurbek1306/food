import React from "react";
import "./card3.css";

function card2(props) {
  return (
    <div className="card3">
      <img className="img3" src={props.img} alt="" />
      <div>
        <p className="card-title title">{props.name}</p>
        <span>
          {props.time}
        </span>
        <button className="nav-btn btn-left">{props.button}</button>
      </div>
    </div>
  );
}

export default card2;
