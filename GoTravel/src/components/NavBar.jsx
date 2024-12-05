import { Link } from 'react-router-dom'

export default function NavBar ({}) {
  return (
    <section className='bg-slate-200/50 w-full'>
      <div className='navbar max-w-7xl mx-auto'>
        <img src="logo3.png" alt="logo"  width={'400px'}/>
        <nav>
            <ul className='hidden md:flex space-x-6 text-gray-700 items-center'>
               <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Nosotros</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li><button className='button-primary'>Iniciar sesión</button></li>
            </ul>
            <div className="md:hidden text-white">
          <button>
            {/* Icono de menú hamburguesa */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        </nav>
      </div>
      </section>
  )
}