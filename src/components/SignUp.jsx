import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./CreateAccount.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const formC = useRef();

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          user_password: "",
          user_email: "",
        }}
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

          if (!values.user_birthdate) {
            errors.user_birthdate = "Por favor ingrese una fecha";
          }
          if (!values.user_dni) {
            errors.user_dni = "Por favor ingrese su nuemero de DNI";
          }
          if (!values.user_phoneNumber) {
            errors.user_phoneNumber = "Por favor ingrese su numero de telefono";
          }
          console.log(errors);
        }}
        onSubmit={async (formvalue) => {
          try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(
              auth,
              formvalue.user_email,
              formvalue.user_password,
              formvalue.user_name
            ).then((userCredential) => {
              const user = userCredential.user;
              console.log(userCredential.user);
            });
          } catch (error) {
            console.log(error.code);
            console.log(error.message);
            alert(error.message);
          }
          console.log("formvalues" + formvalue.user_email);
        }}
      >
        {({ isSubmitting }) => (
          <Form ref={formC}>
            {/* <div>
              <label htmlFor="user_name">Nombre y Apellido: </label>
              <Field
                type="text"
                name="user_name"
                placeholder="Ingrese su nombre completo"
              />
              <ErrorMessage
                className="error"
                name="user_name"
                component="div"
              />
            </div> */}

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

            {/* <div>
            <label htmlFor="user_birthdate">Fecha de nacimiento </label>
            <Field type="number" name="user_birthdate" placeholder="Fecha de nacimiento" />
            <ErrorMessage className="error" name="user_birthdate" component="div" />
          </div>

          <div>
            <label htmlFor="user_phoneNumber">Telefono </label>
            <Field type="number" name="user_phoneNumber" placeholder="Numero de telefono" />
            <ErrorMessage className="error" name="user_phoneNumber" component="div" />
          </div>
          <div>
            <label htmlFor="user_dni">DNI </label>
            <Field type="number" name="user_dni" placeholder="Numero de DNI" />
            <ErrorMessage className="error" name="user_dni" component="div" />
          </div> */}
            <button type="submit" disabled={isSubmitting}>
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
