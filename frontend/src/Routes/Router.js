import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
