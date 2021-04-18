import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";

import "./index.css";

function App() {
  return <Router />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
