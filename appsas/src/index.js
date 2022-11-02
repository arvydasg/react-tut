import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function Page() {
  return (
    <div className="container">
      <Header />
      <Meme />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
