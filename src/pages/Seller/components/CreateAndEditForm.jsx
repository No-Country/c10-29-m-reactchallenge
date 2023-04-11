import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { uploadFile } from "../../../utils/firebaseConfig";
import salesService from "../../../services/sales";
import "./CreateAndEditForm.css";
import { validationSchema } from "../../../utils/validation/createAndEditForm";

function CreateAndEditForm({ match }) {
  const id = match;
  const isAddMode = !id;
  const [file, setFile] = useState(null);
  const user = useSelector((store) => store.auth?.user);
  const notify = () => toast.success("Evento creado con éxito!");
  const notifyUpdate = () => toast.success("Evento actualizado con éxito!");
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

  function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus();
    if (isAddMode) {
      createEvent(fields, setSubmitting);
    } else {
      updateEvent(id, fields, setSubmitting);
    }
  }

  async function createEvent(fields, setSubmitting) {
    try {
      console.log("fields", fields);
      // alertService.success('User added', { keepAfterRouteChange: true });
      const url = await uploadFile(file);
      salesService.createSale(fields, user.uid, url);
      notify();
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  }

  async function updateEvent(id, fields, setSubmitting) {
    try {
      const url = await uploadFile(file);
      salesService.updateSale(fields, user.uid, id);
      notifyUpdate();
    } catch (error) {
      setSubmitting(false);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => {
        const [event, setEvent] = useState({});

        useEffect(() => {
          if (!isAddMode) {
            // get event and set form fields
            salesService.getEventById(id).then((event) => {
              setEvent(event);
              const fields = [
                "place",
                "provincia",
                "time",
                "ability",
                "price",
                "image",
                "title",
                "description",
              ];
              fields.forEach((field) => {
                if (field === "image") {
                  setFieldValue("image", "", false);
                } else {
                  setFieldValue(field, event[field], false);
                }
              });
              // setEvent
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

              <div className="error-message">
                <ErrorMessage className="error-message" name="title" />
              </div>
            </div>

            <div>
              <label htmlFor="place">Lugar</label>
              <Field
                type="text"
                id="place"
                name="place"
                placeholder="Lugar del evento"
              />
              <div className="error-message">
                <ErrorMessage className="error-message" name="place" />
              </div>
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
              <div className="error-message">
                <ErrorMessage className="error-message" name="time" />
              </div>
            </div>

            <div>
              <label htmlFor="ability">Capacidad</label>
              <Field
                type="number"
                id="ability"
                name="ability"
                placeholder="Capacidad del evento"
              />

              <div className="error-message">
                <ErrorMessage className="error-message" name="ability" />
              </div>
            </div>

            <div>
              <label htmlFor="price">Precio</label>
              <Field
                type="number"
                id="price"
                name="price"
                placeholder="Precio del evento"
              />
              <div className="error-message">
                <ErrorMessage className="error-message" name="price" />
              </div>
            </div>

            <div>
              <label htmlFor="image">Imagen</label>
              <Field
                type="file"
                id="image"
                name="image"
                placeholder="Imagen de evento"
                onChange={(e) => setFile(e.target.files[0])}
                disabled={!isAddMode}
              />
              <div className="error-message">
                <ErrorMessage className="error-message" name="image" />
              </div>{" "}
              {/* <Upload /> */}
              {!isAddMode ? (
                <p>
                  Por razones de seguridad no se puedo cambiar la imagen del
                  evento.
                </p>
              ) : (
                ""
              )}
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
              <div className="error-message">
                <ErrorMessage className="error-message" name="description" />
              </div>
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
            <ToastContainer />
          </Form>
        );
      }}
    </Formik>
  );
}

export default CreateAndEditForm;
