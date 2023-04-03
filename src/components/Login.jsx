import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { loginSuccess } from "../redux/features/auth/authenticationSlice";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import usersService from "../services/users";
import "./Login.css";

const Login = () => {
  const [inputType, setInputType] = useState("password");
  const formC = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorLoggin = () => toast.error("Usuario o contraseña incorrectos");

  const toggleInput = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

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
            ).then(async (userCredential) => {
              const user = userCredential.user;
              const loggedUser = await usersService.getUserById(user.uid);

              if (loggedUser) {
                console.log("loggedUser", loggedUser);
                dispatch(loginSuccess(loggedUser));
                navigate("/");
              } else {
                errorLoggin();
              }
            });
          } catch (error) {
            errorLoggin();
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
            <div className="form-group custom-search ">
              {/* <label htmlFor="user_password" className="form-label">
                Contraseña:{" "}
              </label> */}
              <Field
                type={inputType}
                name="user_password"
                placeholder="Ingrese su contraseña"
                className="form-input custom-search-input"
              />
              <button type="button" className="custom-search-botton" onClick={toggleInput}>
                {inputType === "password" ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
              </button>
              <ErrorMessage
                className="error-message"
                name="user_password"
                component="div"
              />

              <p className="password-forgotten">¿Olvidaste la contraseña?</p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="form-button"
            >
              Ingresar
            </button>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;
