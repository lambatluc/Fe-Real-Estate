import React from "react";
import Login from "./features/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./features/Home/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
