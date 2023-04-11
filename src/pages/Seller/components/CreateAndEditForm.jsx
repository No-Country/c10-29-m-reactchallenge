import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { uploadFile } from "../../../utils/firebaseConfig";
// import Upload from "./Upload";
import * as Yup from "yup";
import salesService from "../../../services/sales";
import "./CreateAndEditForm.css";

function CreateAndEditForm({ match }) {
  const id = match;
  const isAddMode = !id;
  const [file, setFile] = useState(null);
  const user = useSelector((store) => store.auth?.user);
  const notify = () => toast.success("Evento creado con éxito!");
  //error evento
  const errorEvent = () => toast.error("Error al crear el evento");

  const initialValues = {
    place: "",
    provincia: "",
    time: "",
    ability: "",
    price: "",
    image: null,
    title: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Por favor ingrese una descripcion"),
    // lastName: Yup.string().required("Last Name is required"),
    // email: Yup.string().email("Email is invalid").required("Email is required"),
    // role: Yup.string().required("Role is required"),
    // password: Yup.string()
    //   .concat(isAddMode ? Yup.string().required("Password is required") : null)
    //   .min(6, "Password must be at least 6 characters"),
    // confirmPassword: Yup.string()
    //   .when("password", (password, schema) => {
    //     if (password || isAddMode)
    //       return schema.required("Confirm Password is required");
    //   })
    //   .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus();
    if (isAddMode) {
      createUser(fields, setSubmitting);
    } else {
      updateUser(id, fields, setSubmitting);
    }
  }

  async function createUser(fields, setSubmitting) {
    // userService.create(fields)
    //     .then(() => {
    //         alertService.success('User added', { keepAfterRouteChange: true });
    //         history.push('.');
    //     })
    //     .catch(() => {
    //         setSubmitting(false);
    //         alertService.error(error);
    //     });
    try {
      console.log("fields", fields);
      // alertService.success('User added', { keepAfterRouteChange: true });
      const url = await uploadFile(file);
      salesService.createSale(fields, user.uid, url);
      notify();
      // history.push('.');
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  }

  async function updateUser(id, fields, setSubmitting) {
    try {
      const url = await uploadFile(file);
      salesService.updateSale(fields, user.uid, url, id);
    } catch (error) {
      setSubmitting(false);
    }

    // const events = doc(db, "events", id);
    // console.log("id", id);
    // await updateDoc(events, fields);

    // userService.update(id, fields)
    //     .then(() => {
    //         alertService.success('User updated', { keepAfterRouteChange: true });

    //     })
    //     .catch(error => {
    //         setSubmitting(false);
    //         alertService.error(error);
    //     });
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => {
        const [event, setEvent] = useState({});
        const [showPassword, setShowPassword] = useState(false);

        useEffect(() => {
          if (!isAddMode) {
            // get event and set form fields
            salesService.getEventById(id).then((event) => {
              const fields = [
                "place",
                "provincia",
                "time",
                "ability",
                "price",
                // "image",
                "title",
                "description",
              ];
              fields.forEach((field) =>
                setFieldValue(field, event[field], false)
              );
              setEvent(event);
            });
          }
        }, []);

        return (
          <Form>
            <h1>{isAddMode ? "Crear Evento" : "Modificar evento"}</h1>
            <div>
              <label htmlFor="title">Nombre</label>
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="Nombre del evento"
              />

              <ErrorMessage name="title" />
            </div>

            <div>
              <label htmlFor="place">Lugar</label>
              <Field
                type="text"
                id="place"
                name="place"
                placeholder="Lugar del evento"
              />
              <ErrorMessage name="place" />
            </div>
            <div>
              <label htmlFor="provincia">Provincia</label>
              <Field as="select" name="provincia" id="provincia">
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="CABA">CABA</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Ríos">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquén">Neuquén</option>
                <option value="Río Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
              </Field>
            </div>
            <div>
              <label htmlFor="time">Fecha/horario</label>
              <Field
                type="datetime-local"
                id="time"
                name="time"
                placeholder="Fecha/horario del evento"
              />
              <ErrorMessage name="time" />
            </div>

            <div>
              <label htmlFor="ability">Capacidad</label>
              <Field
                type="number"
                id="ability"
                name="ability"
                placeholder="Capacidad del evento"
              />
              <ErrorMessage name="ability" />
            </div>

            <div>
              <label htmlFor="price">Precio</label>
              <Field
                type="number"
                id="price"
                name="price"
                placeholder="Precio del evento"
              />
              <ErrorMessage name="price" />
            </div>

            <div>
              <label htmlFor="image">Imagen</label>
              <Field
                type="file"
                id="image"
                name="image"
                placeholder="Imagen de evento"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <ErrorMessage name="image" />
              {/* <Upload /> */}
            </div>

            <div>
              <label htmlFor="description">Descripcion</label>
              <Field
                as="textarea"
                type="text"
                id="description"
                name="description"
                placeholder="Descripcion del evento"
              />
              <ErrorMessage name="description" />
            </div>
            <div className="form-groupp">
              <button type="submit" disabled={isSubmitting} className="save">
                {isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                Guardar
              </button>

              <Link className="back" to="/">
                <button type="submit">Volver</button>
              </Link>

              {/* <Link to={isAddMode ? "." : ".."} className="btn btn-link">
                Cancelar
              </Link> */}
              <ToastContainer />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CreateAndEditForm;
