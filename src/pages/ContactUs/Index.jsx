import React from "react";
import { HashLink } from "react-router-hash-link";
import Template from "../../layouts/Template/Index";
import Form from "./components/Form";
import "./Index.css";

function Index() {
  return (
    <Template>
      <h1 className="title-contact">BYPASS</h1>
      <h2 className="feedback-contact">Envianos tu feedback</h2>
      <div className="contact-container">
        <Form />
        <div className="preguntas">
          <h2>Preguntas Frecuentes</h2>
          <p>
            <HashLink to="#loggin" smooth>
              • No puedo ingresar a mi cuenta
            </HashLink>
          </p>
          <p>
            <HashLink to="#tickets" smooth>
              • No puedo descargar mis entradas
            </HashLink>
          </p>
          <p>
            <HashLink to="#entry">• ¿Cómo debo ingresar al evento?</HashLink>
          </p>
          <p>
            <HashLink to="#minors">• Ingreso de menores</HashLink>
          </p>
          <p>
            <HashLink to="#disability">• Certificado de Discapacidad</HashLink>
          </p>
          <p>
            <HashLink to="#return-ticket">• ¿Cómo devolver una entrada?</HashLink>
          </p>
          <p>
            <HashLink to="#code-qr">• ¿Dónde debo mostrar el Código QR?</HashLink>
          </p>
        </div>
      </div>

      <div className="questions-answered container-sm">
        <div id="loggin" className="question-answered">
          <h3>No puedo ingresar a mi cuenta</h3>
          <p>
            Contacte al soporte técnico para solucionar el problema de acceso a
            su cuenta.
          </p>
        </div>
        <div id="tickets" className="question-answered">
          <h3> No puedo descargar mis entradas</h3>
          <p>
            Verifique la conexión a internet y los ajustes de su dispositivo
            para poder descargar las entradas.
          </p>
        </div>
        <div id="account" className="question-answered">
          <h3>¿Cómo debo ingresar al evento?</h3>
          <p>
            Siga las instrucciones proporcionadas por el organizador del evento
            para ingresar correctamente.
          </p>
        </div>
        <div id="minors" className="question-answered">
          <h3>Ingreso de menores</h3>
          <p>
            Consulte la política del evento sobre el ingreso de menores de
            edad.
          </p>
        </div>
        <div id="disability" className="question-answered">
          <h3>Certificado de Discapacidad</h3>
          <p>
            Consulte los requisitos y procedimientos para obtener un
            certificado de discapacidad en su país o región.
          </p>
        </div>
        <div id="return-ticket" className="question-answered">
          <h3>¿Cómo devolver una entrada?</h3>
          <p>
            Contacte al vendedor o al organizador del evento para solicitar la
            devolución de la entrada.
          </p>
        </div>
        <div id="code-qr" className="question-answered">
          <h3>¿Dónde debo mostrar el Código QR?</h3>
          <p>
            Muestre su código QR en la entrada del evento para su escaneo y
            verificación.
          </p>
        </div>
      </div>
    </Template>
  );
}

export default Index;
