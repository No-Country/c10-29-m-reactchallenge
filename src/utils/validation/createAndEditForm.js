import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Por favor ingrese un titulo"),
  description: Yup.string().required("Por favor ingrese una descripcion"),
  place: Yup.string().required("Por favor ingrese un lugar"),
  time: Yup.string().required("Por favor ingrese una fecha"),
  ability: Yup.string().required("Por favor ingrese la cantidad de personas"),
  price: Yup.string().required("Por favor ingrese un precio"),
  image: Yup.mixed().notRequired("Por favor ingrese una imagen"),
});
