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
      <div className="container-sm">
        <div className="footer-container">
          <div className="info">
              <p>
                Bypass no se hace responsable de la calidad o satisfacción de los
                eventos publicados. Bypass es un sistema que presta servicios de
                venta y compra de entradas en línea.
                <br />
                Al usar este sitio, usted acepta los términos y condiciones de la
                aplicación. Derechos de autor ® 2023 Bypass. Todos los derechos reservados.
              </p>
            <div className="social">
              <span>
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebookF />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com" target="_blank">
                  <FaInstagram />
                </a>
              </span>
              <span>
                <a href="https://www.twitter.com" target="_blank">
                  <FaTwitter />
                </a>
              </span>
            </div>
          </div>
          <div className="media">
            <p>
              {" "}
              <span>
                <FaWhatsapp />
              </span>{" "}
              Atencion al comprador: +54 9 11 1111 1111
            </p>
            <p>
              {" "}
              <span>
                <FaWhatsapp />
              </span>{" "}
              Atención al comprador: +54 9 11 1111 1111{" "}
            </p>
            <p>
              {" "}
              <span>
                <MdEmail />
              </span>{" "}
              info@bypass.com.ar
            </p>
            <p>
              {" "}
              <span>
                <AiOutlineClockCircle />
              </span>{" "}
              Horarios de atención: de lunes a sábado, de 09:00 a 23:00 horas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
