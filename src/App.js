import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/SIdebar/Sidebar";
import Home from "./components/Home/Home";
import NavBoard from "./Dashboard/NavBoard/NavBoard";
const App = () => {
  return (
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
      <Home/>
      <div className="brd-bottom">
        <Footer />
      </div>
      <NavBoard/>

    </div>
  );
};

export default App;
