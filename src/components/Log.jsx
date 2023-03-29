import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./CreateAccount.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Log = () => {
  const formC = useRef();

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ user_password: "", user_email: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.user_email) {
            errors.user_email = "Por favor ingrese su correo electrónico";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
          ) {
            errors.user_email =
              "Por favor ingresar un correo electrónico válido";
          }
          if (!values.user_password) {
            errors.user_password = "Por favor ingrese su clave";
          }
          // else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/) {
          //   errors.user_password =
          //     'Por favor ingresar contraseña Minimo 8 caracteres Maximo 15 Al menos una letra mayúscula Al menos una letra minucula Al menos un dígito No espacios en blanco Al menos 1 caracter especial ';
          // }
          //return errors;
        }}
        onSubmit={async (formvalue) => {
          try {
            const auth = getAuth();
            await signInWithEmailAndPassword(
              auth,
              formvalue.user_email,
              formvalue.user_password
            ).then((userCredential) => {
              const user = userCredential.user;
              console.log(userCredential.user);
            });
          } catch (error) {
            console.log(error.code);
            console.log(error.message);
            alert(error.message);
          }
          console.log(formvalue + formvalue.user_email);
        }}
      >
        {({ isSubmitting }) => (
          <Form ref={formC}>
            <div>
              <label htmlFor="user_email">Email: </label>
              <Field
                type="email"
                name="user_email"
                placeholder="Ingrese su correo electronico"
              />
              <ErrorMessage
                className="error"
                name="user_email"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="user_password">Contraseña: </label>
              <Field
                type="password"
                name="user_password"
                placeholder="Ingrese su contraseña"
              />
              <ErrorMessage
                className="error"
                name="user_password"
                component="div"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Ingresar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Log;
