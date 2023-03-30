import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { loginSuccess } from "../redux/features/auth/authenticationSlice";
import "./Log.css";

const Log = () => {
  const formC = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // integrate useeffect with firebase and redux toolkit
  // useEffect(() => {
  //   const auth = getAuth();
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch(loginSuccess({
  //         id: user.uid,
  //         email: user.email,
  //         role: "buyer",
  //         status: "succeeded",
  //       }));
  //       navigate("/");
  //     } else{
  //       console.log("No hay usuario logueado");
  //     }
  //   });
  // }, []);

  return (
    <div className="login-container">
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
          return errors;
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
              console.log(user);
              // const auth = getAuth();
              // auth.onAuthStateChanged((user) => {
              if (user) {
                dispatch(
                  loginSuccess({
                    id: user.uid,
                    email: user.email,
                    role: "buyer",
                  })
                );
                navigate("/");
              } else {
                console.log("No hay usuario logueado");
              }
              // });
            });
          } catch (error) {
            console.log(error.code);
            console.log(error.message);
            alert(error.message);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form ref={formC} className="login-form">
            <div className="form-group">
              {/* <label htmlFor="user_email" className="form-label">
                Email:{" "}
              </label> */}
              <Field
                type="email"
                name="user_email"
                placeholder="Ingrese su correo electronico"
                className="form-input"
              />
              <ErrorMessage
                className="error-message"
                name="user_email"
                component="div"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="user_password" className="form-label">
                Contraseña:{" "}
              </label> */}
              <Field
                type="password"
                name="user_password"
                placeholder="Ingrese su contraseña"
                className="form-input"
              />
              <ErrorMessage
                className="error-message"
                name="user_password"
                component="div"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="form-button"
            >
              Ingresar
            </button>
          </Form>
        )}
      </Formik>
      <p className="password-forgotten">¿Olvidaste la contraseña?</p>
    </div>
  );
};
export default Log;
