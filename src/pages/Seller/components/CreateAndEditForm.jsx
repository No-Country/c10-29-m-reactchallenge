import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ToastContainer } from "react-toastify";
import { uploadFile } from "../../../utils/firebaseConfig";
import salesService from "../../../services/sales";
import "./CreateAndEditForm.css";
import { validationSchema } from "../../../utils/validation/createAndEditForm";
import { toastError, toastSuccess } from "../../../utils/messages/message";
import cloudUpload from "../../../assets/mi_cloud-upload.png";

function CreateAndEditForm({ match }) {
  const id = match;
  const isAddMode = !id;
  const [file, setFile] = useState(null);
  const user = useSelector((store) => store.auth?.user);
  const eventCreated = () => toastSuccess("Evento creado con éxito!");
  const eventUpdated = () => toastSuccess("Evento actualizado con éxito!");
  const eventError = () =>
    toastError("Ha ocurrido un error, inténtelo de nuevo más tarde");

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
      const url = await uploadFile(file);
      salesService.createSale(fields, user.uid, url);
      eventCreated();
    } catch (error) {
      console.error(error);
      setSubmitting(false);
      eventError();
    }
  }

  async function updateEvent(id, fields, setSubmitting) {
    try {
      const url = await uploadFile(file);
      salesService.updateSale(fields, user.uid, id);
      eventUpdated();
    } catch (error) {
      setSubmitting(false);
      eventError();
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
          <>
              <h3 className="title-form">{isAddMode ? "Crear Evento" : "Modificar evento"}</h3>
          <Form className="create-edit-form">
            <div className="info-left">
              <div className="formulario-eventos">
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

              <div className="formulario-eventos">
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

              <div className="formulario-eventos">
                <div>
                  <label className="form-provincias" htmlFor="provincia">
                    Provincia
                  </label>
                </div>
                <Field as="select" name="provincia" id="provincia" className="states">
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
                  <option value="Santiago del Estero">
                    Santiago del Estero
                  </option>
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
                  className="form-date"
                />
                <div className="error-message">
                  <ErrorMessage className="error-message" name="time" />
                </div>
              </div>

              <div className="formulario-eventos">
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

              <div className="formulario-eventos">
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
                <div className="formulario-eventos">
                  <label htmlFor="description">Descripcion</label>
                  <Field
                    as="textarea"
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Descripcion del evento"
                    className="description-input"
                  />
                  <div className="error-message">
                    <ErrorMessage
                      className="error-message"
                      name="description"
                    />
                  </div>
                </div>
                <div className="form-button-container">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="save"
                  >
                    Guardar
                  </button>

                  <Link className="back" to="/events/">
                    <button type="submit">Mis Eventos</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="info-right">
              <div className="formulario-eventos">
                <div class="image-upload">
                  <label for="file-input">
                    <p>Carga tu imagen principal</p>
                    <img style={{ cursor: "pointer" }} src={cloudUpload} />
                    <p>
                      *Formato vertical <br />
                      1350 x 1080 px en 4:3 <br />
                      No debe pesar mas de 1 MB
                    </p>
                  </label>

                  <Field
                    type="file"
                    id="file-input"
                    name="image"
                    placeholder="Imagen de evento"
                    onChange={(e) => setFile(e.target.files[0])}
                    disabled={!isAddMode}
                    className="input-file-image"
                  />
                  <p>{file && <p>{file.name}</p>}</p>
                </div>
                <div className="error-message">
                  <ErrorMessage className="error-message" name="image" />
                </div>

                {!isAddMode ? (
                  <p className="event-info-image">
                    Por razones de seguridad no se puede cambiar la imagen del
                    evento.
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <ToastContainer />
          </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default CreateAndEditForm;
