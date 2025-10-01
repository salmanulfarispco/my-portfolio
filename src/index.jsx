import React from "react";
import ReactDOM from "react-dom/client";
import "./Portfolio.css";
import Myportfolio from "./Myportfolio"; // ✅ Import your component here

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Myportfolio />  {/* ✅ Now it's defined */}
  </React.StrictMode>
);
