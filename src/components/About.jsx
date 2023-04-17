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
        <img src="../src\assets\images\2.png" alt="" />
        <div>
          <p>Y ¿Cuál es nuestra mision?</p>
          <p>¿Cuales sonlos objetivos?</p>
        </div>
        
      </div>

      <div className="contenido-nosotrosText">
        <p>
          Nuestra mision es es hacer la compra y venta de e-tickets mas sencillo y accesible para todos. 
          Ya sea que estes buscando entradas para un concierto, un partido, un show en el teatro, podes contar con Bypass para ayudarte a conectarte con los productores mas confiables, y lograr que tu experiencia de compra o venta sea la mejor posible. Siempre desde tu comodidad y al alcance de tu celular o tu computadora,

          Nuestro objetivo principal es que te sientas mas comodo y ahorres tu tiempo, que logres confiar en nosotros con la seguridad de que tu dinero esta a salvo y llegara a buen destino  
        </p>
      </div>

      <div className="nosotros-img">
        <div>
        <p>Confianza
            Pasion
            Empatia
          </p>
          <p  className="textP">Nuestros principales valores </p>
          </div>
        <img src="../src\assets\images\3.png" alt="" />
      </div>

      <div className="nosotros-text">
        <p>Con Bypass, puedes estar seguro de que estas obteniendo entradas autenticas y legitimas, nuestro sistema de pagos es seguro y encriptado, te brindamos tranquilidad al momento de realizar la transaccion online.</p>

        <p>Estamos y queremos ser parte de tu pasion, acercarte mas aun a tus artistas o actividades favoritas.
            ¡Conta siempre con Bypass para llegar a donde mas te gusta !</p>
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
