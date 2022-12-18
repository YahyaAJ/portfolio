import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Pages/Footer";
import Skills from "./Pages/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
