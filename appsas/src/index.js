import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Page() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
