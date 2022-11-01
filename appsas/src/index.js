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
        <Card
          img="/publicImages/ruta.jpg" /* https://www.youtube.com/watch?v=taMJct5oeoI&ab_channel=EsterlingAccime */
          rating="5.0"
          reviewCount={6}
          country="LTU"
          title="Life lessons with Rūta Meilutyte."
          price={136}
        />
        <Card
          img="/publicImages/swimmer1.jpg"
          rating="4.0"
          reviewCount={10}
          country="BRA"
          title="Life lessons with Oplia Cekauske."
          price={504}
        />
        <Card
          img="/publicImages/swimmer3.jpg"
          rating="4.0"
          reviewCount={50}
          country="KOR"
          title="Life lessons with Istempta Mergaite."
          price={234}
        />
        <Card
          img="/publicImages/swimmer2.jpg"
          rating="4.9"
          reviewCount={1}
          country="AUS"
          title="Life lessons with Tikra plaukike."
          price={333}
        />
      </cards>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
