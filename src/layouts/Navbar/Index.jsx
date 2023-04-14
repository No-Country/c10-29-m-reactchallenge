import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeSession } from "../../redux/features/auth/authenticationSlice";
import { emptyCart } from "../../redux/features/cart/cartSlice";
import { Animated } from "react-animated-css";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { ImTicket, } from "react-icons/im";
import { IoMdQrScanner } from "react-icons/io";
import {MdOutlineSell} from "react-icons/md";
import logo from "../../assets/logo.png";
import "./Index.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const user = useSelector((store) => store.auth?.user);
  const isLogged = useSelector((store) => store.auth?.isLogged);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="container-sm">
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
                <Link to="/about/">¿Quienes somos?</Link>
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
                <>
                  <li className="hvr-underline-from-center">
                    <Link to="/events/">
                      <ImTicket /> &nbsp; Mis Eventos
                    </Link>
                  </li>
                  <li className="hvr-underline-from-center">
                    <Link to="/sell/"><MdOutlineSell />&nbsp; Vender</Link>
                  </li>
                  <li className="hvr-underline-from-center">
                    <Link to="/scan-qr/"><IoMdQrScanner />&nbsp; Escanear QR</Link>
                  </li>
                </>
              )}
              {user?.role === "buyer" && isLogged && (
                <>
                  <li className="hvr-underline-from-center">
                    <Link to="/purchases/">
                      <BiPurchaseTagAlt />
                      &nbsp; Mis Tickets
                    </Link>
                  </li>
                  <li className="cart">
                    <Link to="/cart/">
                      <AiOutlineShoppingCart />{" "}
                      <span className="cart-items">{cart.items.length}</span>{" "}
                      &nbsp; Mi Carrito
                    </Link>
                  </li>
                </>
              )}

              {user?.role !== "guest" && (
                <>
                  <li className="hvr-underline-from-center">
                    <Link to="/profile/">
                      <AiOutlineUser />
                      &nbsp; Mi Perfil
                    </Link>
                  </li>
                  <li
                    className="hvr-underline-from-center"
                    onClick={() => {
                      dispatch(closeSession());
                      dispatch(emptyCart());
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
