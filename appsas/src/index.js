import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function Page() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <cards className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </cards>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
