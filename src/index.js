import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // 👈 Capital A — must match the filename exactly
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>
);