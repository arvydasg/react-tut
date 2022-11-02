import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--left">
        <img className="card--image" src={props.item.img}></img>
      </div>
      <div className="card--right">
        <div className="card--topInfo">
          <i class="fa-solid fa-location-dot"></i>
          <p className="card--location">{props.item.location}</p>
          <a className="card--gmaps" href={props.item.gmaps}>
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <p className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  );
}
