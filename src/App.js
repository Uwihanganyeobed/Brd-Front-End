import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/SIdebar/Sidebar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Router } from "react-router-dom";
const App = () => {
  
  return (
    <BrowserRouter>
       <div className="brd-all">
      <div className="brd-top">
        <div className="brd__left-app">
          <Sidebar />
        </div>
        <div className="brd__right-app">
          <Navbar />
          <Header />
        </div>
      </div>
      <Home />
      <div className="brd-bottom">
        <Footer />
      </div>
    </div>
    </BrowserRouter>
 
  );
};

export default App;