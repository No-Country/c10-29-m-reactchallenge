import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="nosotros-img">
        <img src="../src/assets/logo.png" alt="Logo" />
        <img src="../src/assets/images/1.webp" alt="Grupo de rock" />
      </div>

      <div className="contenido-nosotros">
        <p>
          Somos una plataforma dedicada a la comercialización de tickets para todo
          tipo de eventos. ¡Nuestro equipo está conformado por profesionales de
          alto nivel! ¡Tan apasionados como tú por la música, los deportes y el
          arte!
        </p>
      </div>

      <div className="nosotros-img">
        <img src="../src/assets/images/2.webp" alt="Niño corriendo" />
        <div>
          <p>¿Y cuál es nuestra misión?</p>
          <p>¿Cuáles son los objetivos?</p>
        </div>
      </div>

      <div className="contenido-nosotrosText">
        <p>
          Nuestra misión es hacer la compra y venta de e-tickets más sencillo y accesible para todos. 
          Ya sea que estés buscando entradas para un concierto, un partido, un show en el teatro, puedes contar con Bypass para ayudarte a conectarte con los productores más confiables, y lograr que tu experiencia de compra o venta sea la mejor posible. Siempre desde tu comodidad y al alcance de tu celular o tu computadora.

          Nuestro objetivo principal es que te sientas más cómodo y ahorres tu tiempo, que logres confiar en nosotros con la seguridad de que tu dinero está a salvo y llegará a buen destino.  
        </p>
      </div>

      <div className="nosotros-img">
        <div>
          <p>Confianza</p>
          <p>Pasión</p>
          <p>Empatía</p>
          <p className="textP">Nuestros principales valores</p>
        </div>
        <img src="../src/assets/images/3.webp" alt="Imagen butacas" />
      </div>

      <div className="nosotros-text">
        <p>Con Bypass, puedes estar seguro de que estás obteniendo entradas auténticas y legítimas, nuestro sistema de pagos es seguro y encriptado, te brindamos tranquilidad al momento de realizar la transacción online.</p>
        <p>Estamos y queremos ser parte de tu pasión, acercarte más aún a tus artistas o actividades favoritas.
            ¡Cuenta siempre con Bypass para llegar a donde más te gusta!</p>
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

