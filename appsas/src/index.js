import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Header from "./components/Header";

function Page() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
