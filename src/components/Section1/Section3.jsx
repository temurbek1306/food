import React from "react";
import "./section3.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Client from "./img/Client.png";

function Section3() {
  return (
    <div className="client-saying">
      <h2 className="our-popular heading2">
        What Our Client <span>Are Saying</span>
      </h2>
      <div className="client">
        <img src={Client} />
        <div>
          <q>
            EFood has the most intriguing food order system in the country. UI
            in both their app and web Is very simple and easy to use, enhancing
            the UX. Their delivery men are also quite professional and knows the
            neighborhood well. Till now I never had to guide them to my address
            for delivery;
          </q>
          <div className="client1">
            <div>
            <h3>Anglina Jole</h3>
            <small>Food lover</small>
            </div>
            <div className="arrow">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
