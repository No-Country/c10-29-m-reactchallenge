import React, { useEffect, useRef  } from "react";
import { Formik, Form, Field, ErrorMessage,  } from "formik";
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

const SignUp = () => {
  const db = getFirestore(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formC = useRef();
  
  return (
    <div>
      <h1 className="titulo-cuenta">Creamos tu cuenta</h1>
      <Formik
        initialValues={{
          user_password: "",
          user_email: "",
          user_name: "",
          user_birthdate: "",
          user_phoneNumber: "",
          user_dni: "",
          role: "",
        }}
        validate={signupValidation}
        onSubmit={async (formvalue) => {
          try {
            const loggedUser = await signUpUser(formvalue);  
            dispatch(loginSuccess(loggedUser));
            navigate("/");
          } catch (err) {
            console.error(err);
            alert(err.message);
          }
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form ref={formC}>
            <div className="container1">
              <div className="fields">
                <label htmlFor="user_name">Nombre y Apellido</label>
                <Field className="boxs"
                  type="text"
                  name="user_name"
                  placeholder="Ingrese su nombre completo"
                />
                <ErrorMessage
                  className="error"
                  name="user_name"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="user_email">Email</label>
                <Field className="boxs"
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
            </div>

            <div className="container1">
              <div className="fields">
                <label htmlFor="user_password">Contraseña</label>
                <Field className="boxs"
                  type="password"
                  name="user_password"
                  placeholder="Minimo 8 caracteres"
                />
                <ErrorMessage
                  className="error"
                  name="user_password"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="user_birthdate">Fecha de nacimiento</label>
                <Field className="boxs"
                  type="date"
                  name="user_birthdate"
                  placeholder="Fecha de nacimiento"
                />
                <ErrorMessage
                  className="error"
                  name="user_birthdate"
                  component="div"
                />
              </div>
            </div>

          <div className="container1">
              <div className="fields">
                <label htmlFor="user_phoneNumber">Telefono</label>
                <Field className="boxs"
                  type="number"
                  name="user_phoneNumber"
                  placeholder="Numero de telefono"
                />
                <ErrorMessage
                  className="error"
                  name="user_phoneNumber"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="user_dni">DNI</label>
                <Field className="boxs"
                  type="number"
                  name="user_dni"
                  placeholder="Numero de DNI"
                />
                <ErrorMessage className="error" name="user_dni" component="div" />
              </div>
            </div>

              <div
                className="radio-buttons"
                role="group"
                aria-labelledby="my-radio-group"
              >
                <label>
                  <Field type="radio" name="role" value="buyer" />
                  Comprador
                </label>
                <label>
                  <Field type="radio" name="role" value="seller" />
                  Vendedor
                </label>
              </div>

              <div className="registro">
                <button type="submit" disabled={isSubmitting}>
                  Registrarse
                </button>
                <Link className="volver" to="/" >
                  <button type="submit">
                    Volver
                  </button>
                </Link>
              </div>
              <p className="google-register-info">Para registrarse con Google debe elegir entre comprador o vendedor</p>
              <SignWithGoogle />
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
