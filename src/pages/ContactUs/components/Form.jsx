import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {initialValues, validate} from './Form.data'
// import emailjs from "@emailjs/browser";
import "./Form.css";

const ContactUs = () => {
  const form = useRef();

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.user_name) {
          errors.user_name = "Por favor ingrese su nombre completo";
        }
    
        if (!values.user_email) {
          errors.user_email = "Por favor ingrese su correo electrónico";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
        ) {
          errors.user_email = "Por favor ingresar un correo electrónico válido";
        }
        if (!values.message) {
          errors.message = "Por favor ingrese su mensaje";
        }
        return errors;
      }}
      onSubmit={(values, {resetForm}) => {
          alert("Mensaje enviado")
          resetForm()
      }}
    >
      {({ isSubmitting }) => (
        <Form ref={form} className="formularios">
          
          <div className="contacto">
            <div>
              <h1 className="titulo-nosotros">ByPass</h1>
              <h2 className="feedback">Envianos tu feedback</h2>
              <label className="label-contacto" htmlFor="user_name">Nombre y Apellido: </label>
              <Field
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Ingrese su nombre completo"
              />
              <ErrorMessage  className="error" name="user_name" component="div" />
            </div>
          
          <div>
          <label className="label-contacto" htmlFor="user_email">Email: </label>
            <Field
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Ingrese su correo electronico"
            />
            <ErrorMessage className="error" name="user_email" component="div" />
          </div>

          <div>
            <label className="label-contacto" htmlFor="user_name">Mensaje: </label>
            <Field
              as="textarea"
              type="text"
              name="message"
              id="message"
              placeholder="Ingrese su mensaje"
            />
            <ErrorMessage className="error"  name="message" component="div" />
          </div>

          <button className="enviar" type="submit">
            Enviar !
          </button>
        </div>
      
          <div className="preguntas">
            <h2>Preguntas Frecuentes</h2>
            <p>• No puedo ingresar a mi cuenta</p>
            <p>• No puedo descargar mis entradas</p>
            <p>• ¿Cómo debo ingresar al evento?</p>
            <p>• Ingreso de menores</p>
            <p>• Certificado de Discapacidad</p>
            <p>• ¿Cómo devolver una entrada?</p>
            <p>• ¿Dónde debo mostrar el Código QR?</p>
          </div>          
        </Form>
      )}
    </Formik>
  );
  
};

export default ContactUs;
