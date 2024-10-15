// src/components/Header.jsx
// import { Link } from 'react-router-dom';
function Footer() {
    return (
      

<footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://ikerbenitez.es/" className="hover:underline">Iker Benitez</a>. Casi todos los derechos reservados
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#timeline" className="hover:underline me-4 md:me-6">Experiencia</a>
        </li>
        <li>
            <a href="#projects" className="hover:underline me-4 md:me-6">Proyectos</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Sobre mí</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contacto</a>
        </li>
    </ul>
    </div>
</footer>

    );
  }
  
  export default Footer;
  
