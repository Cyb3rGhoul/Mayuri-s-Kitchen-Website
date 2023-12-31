import React from "react";
import Header from "./Header";
import Features from "./Features";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Preloader from "./Preloader";
import Special from "./Special";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <Preloader/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Header/>} />
        <Route exact path="/features" element={<Features/>} />
        <Route exact path="/special" element={<Special/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      
    
    </>
  );
};

export default App;