import React, { useEffect, useRef, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { addDoc, getDocs, collection } from "firebase/firestore"
import { useDispatch } from "react-redux"
import { db } from "../utils/firebaseConfig"
import { useNavigate} from "react-router-dom"
import {loginSuccess} from '../redux/features/auth/authenticationSlice'

const Login = () => {
  const formC = useRef()
  const navegate = useNavigate()
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  const fetchFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "login"))
    const usersArray = []
    querySnapshot.forEach((doc) => {
      // console.log(JSON.stringify(doc.data()))
      usersArray.push(JSON.parse(JSON.stringify(doc.data()))
      )
    })
    setUsers(usersArray)
  }
  
  //Leer datos
  useEffect (() => {
    fetchFirestore()
  }, [])

  return (
    <Formik
      initialValues={{  
        user_password: "",
        user_email: "",}}
      validate={(values) => {
        const errors = {}

        if (!values.user_email) {
          errors.user_email = "Por favor ingrese su correo electrónico"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
        ) {
          errors.user_email = "Por favor ingresar un correo electrónico válido"
        }

        if (!values.user_password) {
          errors.user_password = "Por favor ingrese su clave"
        }

        return errors
      }}

      onSubmit={async (values, { resetForm }) => {
        console.log(users)
        // console.log(values)
        try {
          const matchedUser = users.find((u) => {
            // console.log(u)
            // console.log(u.user_email !== values.user_email)
            // console.log(u.user_password !== values.user_password)

            return u.user_email === values.user_email && u.user_password === values.user_password
          })
          if (matchedUser) {
            // Redirect to successful login page
            // console.log(matchedUser)
            dispatch(loginSuccess(matchedUser))
            navegate("/")
          } else {
            // Display error message
            alert("Invalid email or password")
          }
        } catch (error) {
          console.error("Error al buscar usuario en Firestore: ", error)
        }
      
        resetForm()
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
  )
}

export default Login
