import React from "react";
import airbnbHero from "../images/airbnb-hero.png";

export default function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <img className="hero--photo" src={airbnbHero}></img>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Hoin unique interactive activities led by one-of-a-king hosts-all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
