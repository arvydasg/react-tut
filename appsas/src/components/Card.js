import React from "react";
import cardImage from "../images/ruta.jpg";
import cardStar from "../images/star.jpeg";

export default function Card() {
  return (
    <div className="card">
      <img src={cardImage} className="card--image"></img>
      <div className="card--stats">
        <img className="card--star" src={cardStar}></img>
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">LTU</span>
      </div>
      <p>Life lessons with Rūta Meilutyte.</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
