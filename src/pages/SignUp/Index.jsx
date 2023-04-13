import SignUp from "../../components/SignUp";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

import "./Index.css";

function Index() {
  return (
    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
      <div className="signup-page">
        <h1 className="signup-page-title">bypass</h1>
        <SignUp />
        <p className="info-register">
          ¿Ya tienes cuenta en bypass? 
          </p>
          <br />
          <div className="botones-sign">
            <Link to="/sign-in" className="home-button">
              Iniciar Sesion
            </Link>
          
            <Link to="/" className="home-button">
              Ir al Inicio
            </Link>
        </div>
      </div>
    </Animated>
  );
}

export default Index;
