import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/User/Home/Home";
import MapContainer from "./pages/User/Home/Home";
import "./App.css";
import Login from "./pages/Auth/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapContainer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
