import React from "react";
import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App
