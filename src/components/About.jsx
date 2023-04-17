import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="nosotros-img">
        <img src="../src/assets/logo.png" alt="Logo" />
        <img src="../src\assets\images\1.png" alt="" />
      </div>

      <div className="contenido-nosotros">
        <p>
          Somo una plataforma dedicada la comercializacion de tickets para todo
          tipo de eventos. Nuestro equipo esta coformado por profecionales de
          alto nivel !Tan apacionados como vos por la musica, los deportes y el
          arte!
        </p>
      </div>

      <div className="nosotros-img">
        <div>
        <p>Y ¿Cuál es nuestra mision?</p>
          <p>¿Cuales sonlos objetivos?</p>
          </div>
        <img src="../src\assets\images\2.png" alt="" />
        
      </div>

      <div className="contenido-nosotros">
        <p>
          Nuestra mision es es hacer la compra y venta de e-tickets mas sencillo y accesible para todos. 
          Ya sea que estes buscando entradas para un concierto, un partido, un show en el teatro, podes contar con Bypass para ayudarte a conectarte con los productores mas confiables, y lograr que tu experiencia de compra o venta sea la mejor posible. Siempre desde tu comodidad y al alcance de tu celular o tu computadora,

          Nuestro objetivo principal es que te sientas mas comodo y ahorres tu tiempo, que logres confiar en nosotros con la seguridad de que tu dinero esta a salvo y llegara a buen destino  
        </p>
      </div>

      

      {/* <div>
        <Link to={'/'}>
        <button type="submit">Submit</button>
        </Link>
    </div> */}
    </div>
  );
};

export default AboutUs;
