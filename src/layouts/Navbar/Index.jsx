import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeSession } from "../../redux/features/auth/authenticationSlice";
import { Animated } from "react-animated-css";
import logo from "../../assets/logo.png";
import "./Index.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const user = useSelector((store) => store.auth?.user);
  const isLogged = useSelector((store) => store.auth?.isLogged);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <div className="bypass-logo">
            <Link to="/">
              <Animated
                animationIn="pulse"
                animationOut="fadeOut"
                animationInDuration={1000}
                isVisible={true}
              >
                <img src={logo} alt="" />
              </Animated>
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
              {user?.role === "seller" && isLogged && (
                <li className="hvr-underline-from-center">
                  <Link to="/sell/">Vender</Link>
                </li>
              )}
              {user?.role === "buyer" && isLogged && (
                <li className="hvr-underline-from-center">
                  <Link to="/buy/">Comprar</Link>
                </li>
              )}

              {user?.role !== "guest" && (
                <>
                  <li className="hvr-underline-from-center">
                    <Link to="/profile/">Perfil - {user.email}</Link>
                  </li>
                  <li
                    className="hvr-underline-from-center"
                    onClick={() => {
                      dispatch(closeSession());
                    }}
                  >
                    <Link to="/">Cerrar Sesion</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
