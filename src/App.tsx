import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import Header from "./components/Header";
import "./basic.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </>
  );
}

export default App;
