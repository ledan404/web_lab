import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Fotter from "./components/Fotter"


function App() {
  return ( 
  <Router>
    <Header />
    <main className="max-container">
    <Routes>
    <Route path="/Home" element ={<Home />} />
    <Route path="/Catalog" element ={<Catalog />}/>
    </Routes>
    </main>
    <Fotter />
  </Router>
  
  );
 }

export default App;
