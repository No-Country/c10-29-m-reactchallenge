import React, { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { useNavigate, useParams} from "react-router-dom";

const Login = () => {
  const formC = useRef();
  const { idLogin } = useParams();
  const navegate = useNavigate()

  //Leer datos
  useEffect (() => {
    const fetchFirestore = async () => {
      const querySnapshot = await getDocs(collection(db, "login"));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }
    fetchFirestore()
  }, [idLogin])
  

  return (
    <Formik
      initialValues={{}}
      validate={(values) => {
        const errors = {};

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

        return errors;
      }}
      onSubmit={async (values, { resetForm }) => {
        try {
          // Agregar nuevo documento a la colección "login" con los datos del usuario
          await addDoc(collection(db, "login"), {
            email: values.user_email,
            password: values.user_password,
          });

          // Redireccionar a la página de inicio de sesión exitosa
          navegate("/")
        } catch (error) {
          console.error("Error al agregar documento a Firestore: ", error);
        }

        resetForm();
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
          <button type="submit">Ingresar</button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;