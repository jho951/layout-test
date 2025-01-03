import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import WidthUnit from "./page/widthUnit/Width";
import Position from "./page/position/Position";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route index element={<Main />} /> */}
        <Route path='/widthunit' element={<WidthUnit />} />
        <Route path='/structure' element={<Position />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// 앱 성능 측정
reportWebVitals();
