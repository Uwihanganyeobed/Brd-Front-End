import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/SIdebar/Sidebar";
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";
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

/*
// src/App.js
import config from './AIRobot/Bot/config.js';
import MessageParser from './AIRobot/Bot/MessageParser.jsx';
import ActionProvider from './AIRobot/Bot/ActionProvider.jsx';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

export const App = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
export default App;
*/