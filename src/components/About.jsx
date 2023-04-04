import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css";

const AboutUs = () => {
  return (
    <div class="about-us">
  <h2>Sobre Nosotros</h2>
  <p>Somos una empresa dedicada a brindar la mejor experiencia en la venta de tickets de eventos. Nos esforzamos por ofrecer un servicio rápido, eficiente y seguro para todos nuestros clientes. Contamos con un equipo de profesionales altamente capacitados que están dispuestos a ayudarte en todo lo que necesites.</p>
  <p>En nuestro equipo, contamos con expertos en tecnología, marketing y atención al cliente trabajando juntos para brindar la mejor experiencia posible a nuestros clientes..</p>
  
  <div>
        <Link to={'/'}>
        <button type="submit">Submit</button>
        </Link>
    </div>
</div>


  );
};

export default AboutUs;