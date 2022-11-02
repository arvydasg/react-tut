import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <p>Miestas: {props.item.miestas}</p>
      <p>Kaina: {props.item.kaina}</p>
    </div>
  );
}
