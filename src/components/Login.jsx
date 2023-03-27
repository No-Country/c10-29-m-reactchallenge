// // import { useHistory } from 'react-router-dom'
// import { useState } from "react";
// import "./Login.css";

// // import {
// //   getAuth,
// //   createUserWithEmailAndPassword,
// //   GoogleAuthProvider,
// //   signInWithPopup,
// // } from "firebase/auth";
// //import auth from "./utils/firebaseconfig";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [birthdate, setBirthdate] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [dni, setDni] = useState("");

//   //--------------------registro con Gooogle----------------------------
//   async function handleOnClick() {}

//   async function signWithGoogle(googleProvider) {
//     try {
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   //-------------------------------Registro con email y contraseña---------------------
//   const registration = (e) => {
//     e.preventDefault();
//     if (
//       !fullName ||
//       !dni ||
//       !birthdate ||
//       !email ||
//       !phoneNumber ||
//       !password
//     ) {
//       alert("Por favor, complete todos los campos obligatorios.");
//     }
//   };
//   const handleRegistration = (e) => {
//     e.preventDefault();

//     console.log(email, password);
//   };
//   return (
//     <div>
//       <p>
//         EN ESTA PRIMER ESTAPA DE CONE SOLO EMAIL Y CONTRASEÑA SON
//         REQUERIDOS Y NO ESTA CONTROLADO EN FRONT EL TIPO DE DATO QUE SE INGRESA
//       </p>
//       <p>
//         BORRO LA CONE A UN FIREBASE Q YO HABIA CREADO PARA Q MIGUE HAGA LAS
//         CONECCIONES Y AUTENTICACION CON EL Q EL CREO
//       </p>

//       <form onSubmit={handleRegistration}>
//         <label>
//           Email:
//           <input
//             placeholder="email es requerido"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Contraseña:
//           <input
//             placeholder="contraseña es requerida"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <label>
//           Nombre completo:
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </label>
//         <label>
//           DNI:
//           <input
//             type="number"
//             value={dni}
//             onChange={(e) => setDni(e.target.value)}
//           />
//         </label>
//         <label>
//           Fecha de nacimiento:
//           <input
//             type="date"
//             value={birthdate}
//             onChange={(e) => setBirthdate(e.target.value)}
//           />
//         </label>
//         <label>
//           Número de teléfono:
//           <input
//             type="number"
//             pattern="[0-9]{10}"
//             maxLength="9"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </label>
//         <div>
//           <button type="submit">Registrarme</button>
//         </div>
//       </form>
//       {/* Registro con google */}
//       <div>
//         <button onClick={handleOnClick}>Loguin with google</button>
//       </div>
//     </div>
//   );
// }

// function Login() {
//   const [dni, setDni] = useState('')
//   const [password, setPassword] = useState('')
//   const [showRegistration, setShowRegistration] = useState(false)
//   const [fullName, setFullName] = useState('')
//   const [birthdate, setBirthdate] = useState('')
//   const [email, setEmail] = useState('')
//   const [phoneNumber, setPhoneNumber] = useState('')

//   const registration = (e) => {
//     e.preventDefault()
//     if (!fullName || !dni || !birthdate || !email || !phoneNumber || !password) {
//       alert('Por favor, complete todos los campos obligatorios.')
//       return
//     }
//     const user = {
//       fullName,
//       dni,
//       birthdate,
//       email,
//       phoneNumber,
//       password
//     }

//     fetch('usuarios.json', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//     .then(response => {
//       if (response.ok) {
//         alert('Registro exitoso')
//         setShowRegistration(false)
//       } else {
//         throw new Error('Error en el registro')
//       }
//     })
//     .catch(error => {
//         alert('Error en el registro')
//     })
//   }

//   const handleLogin = (e) => {
//     e.preventDefault()

//     // Obtener los datos del usuario desde el archivo JSON
//     fetch('usuarios.json')
//       .then(response => response.json())
//       .then(data => {
//         // Verificar si el DNI y la contraseña ingresados por el usuario coinciden con los datos almacenados en el archivo JSON
//         const user = data.find(user => user.dni === dni && user.password === password)
//         if (user) {
//           // Si la verificación es exitosa, redirigir al usuario a la página de inicio
//           alert('Inicio de sesión exitoso')
//           history.push('/inicio')
//         } else {
//           // Si la verificación falla, mostrar un mensaje de error
//           alert('DNI o contraseña incorrectos')
//         }
//       })
//       .catch(error => {
//         // Si ocurre un error al obtener los datos del usuario, mostrar un mensaje de error
//         alert('Ocurrió un error al iniciar sesión')
//       })
//   }

//   const handleRegistration = (e) => {
//     e.preventDefault()
//     // aquí iría la lógica para enviar los datos del registro al servidor
//   }

//   return (
//     <div>
//       {showRegistration ? (
//         <form className='forms' onSubmit={handleRegistration}>
//           <label>
//             Nombre completo:
//             <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
//           </label>
//           <label>
//             DNI:
//             <input type="number" value={dni} onChange={(e) => setDni(e.target.value)} />
//           </label>
//           <label>
//             Contraseña:
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </label>
//           <label>
//             Fecha de nacimiento:
//             <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
//           </label>
//           <label>
//             Email:
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </label>
//           <label>
//             Número de teléfono:
//             <input type="number" pattern="[0-9]{10}" maxLength="9" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//           </label>
//           <div className='botones'>
//             <button type="submit" onClick={registration}>Registrarme</button>
//             <button onClick={() => setShowRegistration(false)}>Volver al inicio de sesión</button>
//           </div>
//         </form>
//       ) : (
//         <form className='forms' onSubmit={handleLogin}>
//           <label>
//             DNI:
//             <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} />
//           </label>
//           <label>
//             Contraseña:
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </label>
//           <div className='botones'>
//             <button type="submit">Iniciar sesión</button>
//             <button onClick={() => setShowRegistration(true)}>Registrarse</button>
//           </div>
//         </form>
//       )}
//     </div>
//   )

// }

//export default Login;
import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./CreateAccount.css";

const Login = () => {
  const formC = useRef();

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
        // else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/) {
        //   errors.user_password =
        //     'Por favor ingresar contraseña Minimo 8 caracteres Maximo 15 Al menos una letra mayúscula Al menos una letra minucula Al menos un dígito No espacios en blanco Al menos 1 caracter especial ';
        // }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        alert("Logueando usuario");
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
