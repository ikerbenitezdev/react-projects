// src/components/Header.jsx
// import { Link } from 'react-router-dom';
function Header() {
    return (
      <header className="fixed top-0 z-10 w-full bg-opacity-50 backdrop-blur-sm dark:bg-white-900 dark:border-white-700">
            <nav className="border-white-200 dark:bg-white-900 md: mx-20">
            <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 text-white sm: justify-center">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse sm: space-x-0">
                    <img src="/logo.png" className="h-10" alt="Iker Benitez Developer" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IkerDev</span>
                </a>
                {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button> */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white-100 rounded-lg text-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
                    <li>
                    <a href="#timeline" className="block py-2 px-3 text-white-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Experiencia
                    </a>
                    </li>
                    <li>
                    <a href="#projects" className="block py-2 px-3 text-white-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Proyectos
                    </a>
                    </li>
                    <li>
                    <a href="#about" className="block py-2 px-3 text-white-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Sobre mí
                    </a>
                    </li>
                    <li>
                    <a href="#contact" className="block py-2 px-3 text-white-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Contacto
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

      </header>
    );
  }
  
  export default Header;
  
