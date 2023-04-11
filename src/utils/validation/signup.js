// import * as Yup from "yup";

// export const validationSchema = Yup.object().shape({
//   title: Yup.string().required("Por favor ingrese un titulo"),
//   description: Yup.string().required("Por favor ingrese una descripcion"),
//   place: Yup.string().required("Por favor ingrese un lugar"),
//   time: Yup.string().required("Por favor ingrese una fecha"),
//   ability: Yup.string().required("Por favor ingrese la cantidad de personas"),
//   price: Yup.string().required("Por favor ingrese un precio"),
//   image: Yup.mixed().required("Por favor ingrese una imagen"),
// }).test("authProvider", "No se puede modificar", (values) => {
//   if (values.authProvider !== "local") {
//     return true;
//   }
//   return false;
// });

const signupValidation = (values) => {
    const errors = {};
    if (values.authProvider !== "local") {
        return;
    }
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
}

export default signupValidation;