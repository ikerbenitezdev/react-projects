import ReactDOM from "react-dom/client";
import { Routes, Route, useLocation } from "react-router-dom";
import  NavBar  from "./components/NavBar"
import  Home  from "./pages/Home"
import  About  from './pages/About'
import  Contact  from './pages/Contact'
import { motion, useScroll } from "framer-motion";
// import { Search } from "./components/Search";
import HomeHeader from "./components/HomeHeader";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Trips from "./pages/Trips";

export default function App(){
  const { scrollYProgress } = useScroll();
  const location = useLocation(); // const changePath = ()=>{
   
    return (
      <main>
          <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
          />
          {
            location.pathname === "/" ? <HomeHeader/>  : <NavBar/>
          }
           
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trips" element={<Trips />} />
          </Routes>
          <Footer/>
          
        </main>
    )
}
