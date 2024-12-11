import ReactDOM from "react-dom/client";
import 'flowbite';

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
import LogIn from "./pages/LogIn";

import cities from "./mocks/data.json";

export default function App(){
  // const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
  // const navigate = useNavigate();

  // const handleBuscar = () => {
  //   if (ciudadSeleccionada) {
  //     navigate(`/trips?ciudad=${ciudadSeleccionada}`);
  //   }
  // };
  const { scrollYProgress } = useScroll();
  const location = useLocation(); // const changePath = ()=>{
   
    return (
      <main className="h-screen">
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
            <Route path="/login" element={<LogIn />} />
          </Routes>
          <Footer/>
          
        </main>
    )
}
