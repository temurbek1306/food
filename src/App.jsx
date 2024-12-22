import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/card/Card";
import Main from "./components/main/Main";
import Card2 from "./components/card/Card2";
import Section from "./components/Section1/Section";
import Card3 from "./components/card/Card3";
import Section2 from "./components/Section1/Section2";
import Section3 from "./components/Section1/Section3";
import Section4 from "./components/Section1/Section4";
import Footer from "./components/footer/Footer";

import burger from "./images/burger.png";
import pizza from "./images/pizza.png";
import sandwich from "./images/sandwich.png";
import asianFood from "./images/asia-food.png";
import setMenu from "./images/menu.png";

import burger1 from "./images/burger1.png";
import burger2 from "./images/burger2.png";
import burger3 from "./images/burger3.png";
import burger4 from "./images/burger4.png";
import burger5 from "./images/burger5.png";
import carousel from "./images/carousel.png";

import img1 from "./images/img/img1.png";
import img2 from "./images/img/img2.png";
import img3 from "./images/img/img3.png";
import img4 from "./images/img/img4.png";
import img5 from "./images/img/img5.png";
import img6 from "./images/img/img6.png";

function App() {
  return (
    <div className="background">
      <div className="container">
        <Navbar />
        <Main />
        <h2 className="our-popular">
          Our popular <span>Category</span>
        </h2>
        <div className="card-wrapper">
          <Card img={burger} name="Burger" />
          <Card img={pizza} name="Pizza" />
          <Card img={sandwich} name="Sandwich" />
          <Card img={asianFood} name="Asian Food" />
          <Card img={setMenu} name="Set Menu" />
        </div>
        <div className="card2-wrapper">
          <Card2
            img={burger1}
            name="Cheeseburger Salad"
            cost="$18.00"
            button="Add to Cart"
          />
          <Card2
            img={burger2}
            name="Beef Burger"
            cost="$15.00"
            button="Add to Cart"
          />
          <Card2
            img={burger3}
            name="Royel Cheeseburger"
            cost="$16.00"
            button="Add to Cart"
          />
          <Card2
            img={burger4}
            name="Black Gambugrer "
            cost="$14.00"
            button="Add to Cart"
          />
          <Card2
            img={burger5}
            name="Chicken Burger"
            cost="$15.00"
            button="Add to Cart"
          />
        </div>
        <img className="carousel" src={carousel} alt="" />
        <Section />
        <h2 className="our-popular">
          Top Food<span> Restaurant</span>
        </h2>
        <div className="top-food">
          <Card3
            img={img1}
            name="Blaze Pizza"
            time={<i class="fa-regular fa-clock">10.00 AM - 12.00 PM</i>}
            button={<i class="fa-solid fa-arrow-right"></i>}
          />
          <Card3
            img={img2}
            name="Pizza Ranch"
            time={<i class="fa-regular fa-clock">11.00 AM - 10.00 PM</i>}
            button={<i class="fa-solid fa-arrow-right"></i>}
          />
          <Card3
            img={img3}
            name="Dion’s Pizza Hut"
            time={<i class="fa-regular fa-clock">09.00 AM - 10.00 PM</i>}
            button={<i class="fa-solid fa-arrow-right"></i>}
          />
          <Card3
            img={img4}
            name="Royel Burger"
            time={<i class="fa-regular fa-clock">10.00 AM - 12.00 PM</i>}
            button={<i class="fa-solid fa-arrow-right"></i>}
          />
          <Card3
            img={img5}
            name="KFC Restaurant"
            time={<i class="fa-regular fa-clock">11.00 AM - 10.00 PM</i>}
            button={<i class="fa-solid fa-arrow-right"></i>}
          />
          <Card3
            img={img6}
            name="Star Food"
            time={<i class="fa-regular fa-clock">09.00 AM - 10.00 PM</i>}
            button={<i class="fa-solid fa-arrow-right"></i>}
          />
        </div>
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
