import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function NavBar ({}) {
  const navigate = useNavigate()
  return (
    <nav className="bg-slate-200/50 dark:bg-gray-900  p-4 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <Link to="/" className='space-x-3 rtl:space-x-reverse'><img src="logo3.png" alt="logo"  width={'250px'}/></Link>
    {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="button-primary"
      >
        Iniciar sesion
      </button> */}
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    {/* </div> */}
    <div
      className="items-center justify-between hidden w-full bg-transparent md:flex md:w-auto md:order-1 md:bg-transparent" 
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-center rounded-l md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        <li>
        <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
        <NavLink to="/about">Nosotros</NavLink>
        </li>
        <li>
        <NavLink to="/contact">Contacto</NavLink>
        </li>
        <li>
        {/* <NavLink to="/login">Iniciar sesion</NavLink> */}
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}