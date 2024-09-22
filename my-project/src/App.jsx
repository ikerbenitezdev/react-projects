import { useState } from 'react'
// import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import 'flowbite';

function App() {

  return (
    <>
     {/* <Header /> */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<h1>404</h1>} />
     </Routes>
    </>
  )
}

export default App
