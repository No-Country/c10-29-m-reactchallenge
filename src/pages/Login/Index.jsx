import { Link } from "react-router-dom";
import Login from "../../components/Login";
import { Animated } from "react-animated-css";
import "./Index.css";

function Index() {
  return (
    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
      <div className="login-page">
        <h1>Bypass</h1>
        <h2>¡Qué gusto verte de vuelta!</h2>
        <h4>Inicio de Sesión</h4>
        <Login />
        <hr />
        <p>
          ¿Todavía no tenés cuenta en Bypass?  <br />
          <br />
          <Link to="/sign-up" className="home-button">
            Regístrate
          </Link>
        </p>
        <Link to="/" className="home-button">
          Ir al Inicio
        </Link>
      </div>
    </Animated>
  );
}

export default Index;
