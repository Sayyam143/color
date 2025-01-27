import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import DyesColors from "./Component/DyesColors";
import Food from "./Component/Food";
import About from './Component/About';
import ContactUS from './Component/ContactUS';
import Home from './Component/Home';
import Chemicals from './Component/Chemicals';
import Packaging from './Component/Packaging';
import Special from './Component/Special';


function App() {
  return (
 <>
 <Router>
   <Header/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/DyesColors" element={<DyesColors/>} />
        <Route path="/Food" element={<Food/>} />
        <Route path="/Chemicals" element={<Chemicals/>} />
        <Route path="/Packaging" element={<Packaging/>} />
        <Route path="/Special" element={<Special/>} />
        <Route path="/ContactUS" element={<ContactUS/>} />
        </Routes>
   <Footer/>
 </Router>
 </>
  );
}

export default App;
