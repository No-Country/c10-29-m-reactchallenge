import { Link } from "react-router-dom";
import Login from "../../components/Login";
import { Animated } from "react-animated-css";
import "./Index.css";

function Index() {
  return (
    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
      <div className="login-page">
        <h1>bypass</h1>
        <h2>¡Que gusto verte devuelta!</h2>
        <h4>Inicio de Sesion</h4>
        <Login />
        <hr />
        <p>
          ¿Todavia no tenes cuenta en bypass?  <br />
          <br />
          <Link to="/sign-up" className="home-button">
            Registrate
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
