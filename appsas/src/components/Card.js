import React from "react";
import cardStar from "../images/star.jpeg";

export default function Card(props) {
  // if its sold out, but online, it will prefer the open spots badge first. If it has spots and it's online, it will render that badge.
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {props.item.openSpots === 0 && (
        <div className="card--badge">SOLD OUT</div>
      )}
      {badgeText && <div className="card--badge-right">{badgeText}</div>}
      <img src={props.item.coverImg} className="card--image"></img>
      <div className="card--stats">
        <img className="card--star" src={cardStar}></img>
        <span>{props.item.rating}</span>
        <span className="gray">({props.item.reviewCount}) • </span>
        <span className="gray">{props.item.location}.</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
