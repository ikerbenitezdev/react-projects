import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

export default function Prueba() {
  return (
      // <div className="max-w-6xl">
    <Navbar fluid className='bg-slate-200/50 dark:bg-gray-900 p-0 navbar fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <Navbar.Brand as={Link} to="/">
        <img src="/logo.png" className="mr-3 h-9" alt="Go Travel" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="bg-white rounded-sm mt-4 md:bg-transparent md:mt-0">
        {/* Navbar.Link con React Router */}
        <Navbar.Link as={Link} to="/" active={window.location.pathname === "/"} className={location.pathname === "/" ? "fondo" : "text-gray-200"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" active={window.location.pathname === "/about"}>
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact" active={window.location.pathname === "/contact"}>
          Contact
        </Navbar.Link>
        <Link as={Link} to="/login" className="button-primary">
          Iniciar sesion
        </Link>
      </Navbar.Collapse>
    </Navbar>
      // </div>
  );
}
