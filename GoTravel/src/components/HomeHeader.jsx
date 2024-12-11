import Prueba from "./NavBar"
import Search from "./Search"
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Buscador from './Buscador';


export default function HomeHeader(){
    const navigate = useNavigate();

    const handleBuscar = (ciudad) => {
      // Redirige a la página de resultados con la ciudad como parámetro
      navigate(`/trips?ciudad=${encodeURIComponent(ciudad)}`);
    };
    return(
    <header className="relative w-full h-screen bg-cover bg-center bg-header-background">
    <Prueba />


{/* Hero Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30 px-6">
    <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 2 }}}  className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a GoTravel App</motion.h1>
    <p className="text-lg md:text-xl max-w-2xl">Descubre cada destino con el máximo detalle posible</p>
    <Search onBuscar={handleBuscar}/>
  </div>
</header>
    )
}