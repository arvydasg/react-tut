import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Main from "./components/Main";

function Page() {
  return (
    <div className="container">
      <Main />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
