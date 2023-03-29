import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { db } from "../utils/firebaseConfig";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import "./CreateAccount.css";

const CreateAccount = () => {
  const formC = useRef();

  const reference = collection(db, "login");
  
  const navigate = useNavigate();
  
  const addNewUser = async (values) => {
    const email = values.user_email;
    const q = query(reference, where("user_email", "==", email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      // Usuario ya registrado
      alert("Este correo electrónico ya está registrado.");
    } else {
      await addDoc(reference, values);
      alert("Usuario creado");
    }
  };

  return (
    <Formik
      initialValues={{
        user_name: "",
        user_email: "",
        user_password: "",
        user_birthdate: "",
        user_dni: "",
        user_phoneNumber: "",
        status: "idle",
        role: "guest"
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
          errors.user_email = "Por favor ingresar un correo electrónico válido";
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
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        addNewUser(values);
        navigate("/sign-in");
        // resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form ref={formC}>
          <div>
            <label htmlFor="user_name">Nombre y Apellido: </label>
            <Field
              type="text"
              name="user_name"
              placeholder="Ingrese su nombre completo"
            />
            <ErrorMessage className="error" name="user_name" component="div" />
          </div>

          <div>
            <label htmlFor="user_email">Email: </label>
            <Field
              type="email"
              name="user_email"
              placeholder="Ingrese su correo electronico"
            />
            <ErrorMessage className="error" name="user_email" component="div" />
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

          <div>
            <label htmlFor="user_birthdate">Fecha de nacimiento </label>
            <Field
              type="number"
              name="user_birthdate"
              placeholder="Fecha de nacimiento"
            />
            <ErrorMessage
              className="error"
              name="user_birthdate"
              component="div"
            />
          </div>

          <div>
            <label htmlFor="user_phoneNumber">Telefono </label>
            <Field
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
            <label htmlFor="user_dni">DNI </label>
            <Field type="number" name="user_dni" placeholder="Numero de DNI" />
            <ErrorMessage className="error" name="user_dni" component="div" />
          </div>

          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="role" value="buyer" />
              Comprador
            </label>
            <label>
              <Field type="radio" name="role" value="seller" />
              Vendedor
            </label>
            
          </div>

          <button type="submit">Registrarse</button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateAccount;
