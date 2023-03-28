import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

import "./Index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="info">
            <p>
              Bypass no se hace responsable de la calidad o satisfaccion de los
              eventos publicados, Bypass es un sistema que presta servicios de
              venta y compra de entradas online.
              <br />
              Al usar este sitio usted acepta los terminos y condiciones de la
              aplicacion. Copyright ® 2023 Bypass.
            </p>
            <div className="social">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaTwitter />
              </span>
            </div>
          </div>
          <div className="media">
            <p> <span><FaWhatsapp /></span> Atencion al comprador: +54 9 11 1111 1111</p>
            <p> <span><FaWhatsapp /></span> Atencion al comprador: +54 9 11 1111 1111 </p>
            <p> <span><MdEmail /></span> info@bypass.com.ar</p>
            <p> <span><AiOutlineClockCircle /></span> Horarios de atencion de Lunes a Sábado de 09:00 a 23:00 hs</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
