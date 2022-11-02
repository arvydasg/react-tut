import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import data from "./data";

function Page() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="container">
      <Header />
      {cards}
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
