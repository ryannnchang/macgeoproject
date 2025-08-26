import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // ok if missing, but common

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
