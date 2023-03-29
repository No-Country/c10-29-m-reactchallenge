import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  closeSession,
} from "../../redux/features/auth/authenticationSlice";
import "./Index.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const user = useSelector((store) => store.auth?.user);
  const dispatch = useDispatch();

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-container">
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
                {user.status !== "succeeded" && (
                  <>
                    <li className="hvr-underline-from-center">
                      <Link to="/sign-in/">Iniciar Sesion</Link>
                    </li>
                    <li className="hvr-underline-from-center">
                      <Link to="/sign-up/">Registrarse</Link>
                    </li>
                  </>
                )}
                {user?.role === "seller" && (
                  <li className="hvr-underline-from-center">
                    <Link to="/sell/">Vender</Link>
                  </li>
                )}
                {user?.role === "buyer" && (
                  <li className="hvr-underline-from-center">
                    <Link to="/buy/">Comprar</Link>
                  </li>
                )}
                {user?.role !== "guest" && (
                  <li
                    className="hvr-underline-from-center"
                    onClick={() => {
                      dispatch(closeSession());
                    }}
                  >
                    <Link to="/">Cerrar Sesion</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
