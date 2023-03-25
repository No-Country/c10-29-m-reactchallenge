import { useState } from "react";
import "./Index.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>ByPass</h1>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? "✖" : "☰"}
          </div>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
              <li className="hvr-underline-from-center">
                <a href="#">Sobre Nosotros</a>
              </li>
              <li className="hvr-underline-from-center">
                <a href="#">Contactanos</a>
              </li>
              <li className="hvr-underline-from-center">
                <a href="#">Inicio Sesion</a>
              </li>
              <li className="hvr-underline-from-center">
                <a href="#">Registrarse</a>
              </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
