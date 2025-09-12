// import Header from './components/Header';
import './App.css';

import Home from './pages/Home';
import NotFound from './pages/404';
import Header from './components/home/Header';
import Footer from './components/home/Footer';
import UPC from './components/upc/UPC';
import { Routes, Route } from 'react-router-dom';
import 'flowbite';

function Layout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default function App() {

  return (
    <>
     {/* <Header /> */}
     <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/fibupc/*" element={<UPC />} />
       
        {/* Ruta para manejar todas las demás rutas no definidas */}
        <Route path="/*" element={<NotFound />} />
     </Routes>
    </>
  )
}


