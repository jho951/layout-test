import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import WidthUnit from "./page/widthUnit/WidthUnit";
import Position from "./page/position/Position";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/widthunit' element={<WidthUnit />} />
        <Route path='/position' element={<Position />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// 앱 성능 측정
reportWebVitals();
