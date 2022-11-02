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
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
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
