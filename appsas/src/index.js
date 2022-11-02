import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function Page() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id} /* Just to remove the warning, giving smth unique*/
        item={item}
        /* or use spread syntax {...item}, then won't have to type .item 4:35h*/
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <cards className="cards">{cards}</cards>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
