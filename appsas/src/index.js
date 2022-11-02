import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function Page() {
  return (
    <div className="container">
      <Header />
      <section>
        <Card />
      </section>
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
