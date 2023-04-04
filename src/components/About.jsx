import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css";

const AboutUs = () => {
  return (
    <div class="about-us">
  <h2>Sobre Nosotros</h2>
  <p>En Bypass, nuestro objetivo es hacer que la compra y venta de entradas digitales para eventos sea más fácil y accesible para todos. Ya sea que estés buscando entradas para un concierto, un partido de deportes, un festival de música o cualquier otro evento, estamos aquí para ayudarte a conectarte con vendedores confiables y hacer que la experiencia de comprar y vender entradas sea lo más simple posible.</p>

  <p>Nuestro equipo está compuesto por profesionales altamente capacitados y apasionados por los eventos en vivo y la tecnología, lo que nos permite ofrecer una plataforma fácil de usar, segura y confiable para comprar y vender entradas digitales.</p>

  <p>Con Bypass, puedes estar seguro de que estás obteniendo entradas auténticas y legítimas para el evento que deseas asistir. Además, nuestro sistema de pagos seguro y encriptado te brinda tranquilidad al momento de realizar transacciones en líne</p>
  
  <div>
        <Link to={'/'}>
        <button type="submit">Submit</button>
        </Link>
    </div>
</div>


  );
};

export default AboutUs;