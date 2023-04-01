import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../utils/firebaseConfig"
import { getDocs, collection } from "firebase/firestore"
import { loginSuccess } from "../redux/features/auth/authenticationSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Log.css";

const Log = () => {
  const formC = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorLoggin = () => toast.error("Usuario o contraseña incorrectos");

  const getUser = async (uid) => {
    const querySnapshot = await getDocs(collection(db, "users"))
    const usersArray = []
    querySnapshot.forEach((doc) => {
      usersArray.push(JSON.parse(JSON.stringify(doc.data()))
      )
    })
    const user = usersArray.find((u) => u.uid === uid)
    return user
  }

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
              formvalue.user_password,

            ).then(async (userCredential) => {
              const user = userCredential.user;
              console.log(user)
              const loggedUser = await getUser(user.uid)
              console.log(loggedUser)

              if (loggedUser) {
                // console.log(user);
                dispatch(
                  loginSuccess(loggedUser)
                );
                navigate("/");
              } else {
                errorLoggin();
              }
              // });
            });
          } catch (error) {
            // console.log(error.code);
            // console.log(error.message);
            // alert(error.message);
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
export default Log;
