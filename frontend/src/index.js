import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Routes/Router";
import { MovieDataProvider } from "./contexts/MovieContext";

ReactDOM.render(
  <React.StrictMode>
    <MovieDataProvider>
      <Router />
    </MovieDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
