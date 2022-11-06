import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import Main from "./main/main";
import Base from "./base/base";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Base />} />
    </Routes>
  );
}

export default App;
