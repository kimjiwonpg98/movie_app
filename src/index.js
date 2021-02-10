import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Potato from "./potato";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Potato />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
