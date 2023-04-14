import React, { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../utils/firebaseConfig";
import SignWithGoogle from "./SignWithGoogle";
import signupValidation from "../utils/validation/signup";
import { signUpUser } from "../services/auth";
import { loginSuccess } from "../redux/features/auth/authenticationSlice";
import { useDispatch } from "react-redux";
import "./SignUp.css";
import { toastError } from "../utils/messages/message";
import { ToastContainer } from "react-toastify";

const SignUp = () => {
  const db = getFirestore(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorAuthenticationMessage = () => toastError("Correo ya registrado")
  const formC = useRef();

  return (
    <div>
      <h1 className="title-register">Creamos tu cuenta</h1>
      <Formik
        initialValues={{
          user_password: "",
          user_email: "",
          user_name: "",
          user_birthdate: "",
          user_phoneNumber: "",
          user_dni: "",
          role: "",
          authProvider: "local"
        }}
        validate={async (values) => signupValidation(values)}
        onSubmit={async (formvalue, {resetForm}) => {
          try {
            const loggedUser = await signUpUser(formvalue);
            if (loggedUser){
              dispatch(loginSuccess(loggedUser));
              navigate("/");
            }
          } catch (err) {
            console.log({err});
            if (err.code === "auth/email-already-in-use"){
              errorAuthenticationMessage()
              return
            }

            if (err.code === "auth/popup-closed-by-user"){
              resetForm()
              return
            }

          }
        }}
      >
        {({ isSubmitting, errors, setFieldValue }) => (
          <Form ref={formC} className="signup-form">
            <div className="fields">
              <label htmlFor="user_name">Nombre y Apellido</label>
              <Field
                type="text"
                name="user_name"
                placeholder="Ingrese su nombre completo"
              />
              <div className="error-message">
              {errors.user_name ? <div>{errors.user_name}</div> : null}
                <ErrorMessage className="error" name="user_name" />
              </div>
            </div>
            <div className="fields">
              <label htmlFor="user_email">Email</label>
              <Field
                type="email"
                name="user_email"
                placeholder="Ingrese su correo electronico"
              />
              <div className="error-message">
                <ErrorMessage className="error" name="user_email" />
              </div>
            </div>

            <div className="fields">
              <label htmlFor="user_password">Contraseña</label>
              <Field
                type="password"
                name="user_password"
                placeholder="Minimo 8 caracteres"
              />
              <div className="error-message">
                <ErrorMessage className="error" name="user_password" />
              </div>
            </div>
            <div className="fields">
              <label htmlFor="user_birthdate">Fecha de nacimiento</label>
              <Field
                type="date"
                name="user_birthdate"
                placeholder="Fecha de nacimiento"
              />
              <div className="error-message">
                <ErrorMessage className="error" name="user_birthdate" />
              </div>
            </div>

            <div className="fields">
              <label htmlFor="user_phoneNumber">Telefono</label>
              <Field
                type="number"
                name="user_phoneNumber"
                placeholder="Numero de telefono"
              />
              <div className="error-message">
                <ErrorMessage className="error" name="user_phoneNumber" />
              </div>
            </div>
            <div className="fields">
              <label htmlFor="user_dni">DNI</label>
              <Field
                type="number"
                name="user_dni"
                placeholder="Numero de DNI"
              />
              <div className="error-message">
                <ErrorMessage className="error" name="user_dni" />
              </div>
            </div>

            <div
              className="radio-buttons"
              role="group"
              aria-labelledby="my-radio-group"
            >
              <div style={{ display: "flex" }}>
                <label>
                  <Field type="radio" name="role" value="buyer"/>
                  Espectador
                </label>
                <label>
                  <Field type="radio" name="role" value="seller" />
                  Productor
                </label>
              </div>
              <div className="error-message">
                <ErrorMessage className="error" name="role" />
              </div>
              <p className="google-register-info">
                Para registrarse con Google debe elegir entre espectador o
                productor
              </p>
            </div>

            <div className="register-buttons">
              <button type="submit" disabled={isSubmitting}>
                Registrarse
              </button>
              <SignWithGoogle />
            </div>
            <ToastContainer />

          </Form>
        )}
      </Formik>

      {/* <div className="log">
        ¿Ya tenes una cuenta?
        <Link to="/sign-in">Login</Link>
         now.
      </div>
      <Reset /> */}
    </div>
  );
};

export default SignUp;
