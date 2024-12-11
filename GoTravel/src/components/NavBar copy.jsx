import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function NavBar ({}) {
  const navigate = useNavigate()
  return (
    <section className='bg-slate-200/50 dark:bg-gray-900  p-4 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='navbar max-w-7xl mx-auto'>
        <Link to="/"><img src="logo3.png" alt="logo"  width={'400px'}/></Link>
        <nav>
            <ul className='hidden md:flex space-x-6 text-gray-700 items-center'>
               <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/about">Nosotros</NavLink></li>
                <li><NavLink to="/contact">Contacto</NavLink></li>
                <li className='button-primary'><NavLink to="/login">Iniciar sesion</NavLink></li>
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