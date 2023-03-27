import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import * as Yup from 'yup';
import "./CreateEventForm.css";

const CreateEventForm = () => {
  const initialValues = {
    lugar: "",
    fechaHora: "",
    capacidad: "",
    precio: "",
    img: "",
    nombre: "",
    descripcion: "",
  };

  const validationSchema = Yup.object({
    lugar: Yup.string().required("Lugar es requerido"),
    fechaHora: Yup.string().required("Fecha/horario es requerido"),
    capacidad: Yup.number().required("Capacidad es requerida"),
    precio: Yup.string().required("Precio es requerido"),
    img: Yup.string().required("Imagen es requerida"),
    nombre: Yup.string().required("Nombre es requerido"),
    descripcion: Yup.string().required("Descripción es requerida"),
  });

  const handleSubmit = (values) => {
    // handle form submission logic here
    console.log(values);
  };

  return (
    <div className="contenedorF">
      <div className="contenedor2">
        <div className="detail">
          <h2 className="tittleForm">Crea un Evento!!!</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre del evento"
                  />
                  <ErrorMessage name="nombre" />
                </div>

                <div>
                  <label htmlFor="lugar">Lugar</label>
                  <Field
                    type="text"
                    id="lugar"
                    name="lugar"
                    placeholder="Lugar del evento"
                  />
                  <ErrorMessage name="lugar" />
                </div>

                <div>
                  <label htmlFor="fechaHora">Fecha/horario</label>
                  <Field
                    type="datetime-local"
                    id="fechaHora"
                    name="fechaHora"
                    placeholder="Fecha/horario del evento"
                  />
                  <ErrorMessage name="fechaHora" />
                </div>

                <div>
                  <label htmlFor="capacidad">Capacidad</label>
                  <Field
                    type="number"
                    id="capacidad"
                    name="capacidad"
                    placeholder="Capacidad del evento"
                  />
                  <ErrorMessage name="capacidad" />
                </div>

                <div>
                  <label htmlFor="precio">Precio</label>
                  <Field
                    type="number"
                    id="precio"
                    name="precio"
                    placeholder="Precio del evento"
                  />
                  <ErrorMessage name="precio" />
                </div>

                <div>
                  <label htmlFor="img">Imagen</label>
                  <Field
                    type="text"
                    id="img"
                    name="img"
                    placeholder="Imagen de evento"
                  />
                  <ErrorMessage name="img" />
                </div>

                <div>
                  <label htmlFor="description">Descripcion</label>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Descripcion del evento"
                  />
                  <ErrorMessage name="description" />
                </div>
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;
