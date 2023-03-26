import { useState } from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <h1>ByPass</h1>
          </Link>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? "✖" : "☰"}
          </div>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li className="hvr-underline-from-center">
              <Link to="/about/">Sobre Nosotros</Link>
            </li>
            <li className="hvr-underline-from-center">
              <Link to="/contact-us/">Contacto</Link>
            </li>
            <li className="hvr-underline-from-center">
              <Link to="sign-in">Iniciar Sesion</Link>
            </li>
            <li className="hvr-underline-from-center">
              <Link to="/sign-up/">Registrarse</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
