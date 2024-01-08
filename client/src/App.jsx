import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/User/Home/Home";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}
