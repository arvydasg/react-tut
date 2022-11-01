import React from "react";
import cardStar from "../images/star.jpeg";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--image"></img>
      <div className="card--stats">
        <img className="card--star" src={cardStar}></img>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}.</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
