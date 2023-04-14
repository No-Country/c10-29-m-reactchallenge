import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../../redux/features/events/eventsSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { db } from "../../../utils/firebaseConfig";
import "./CreateEventForm.css";
import { collection, addDoc } from "firebase/firestore";
import Upload from "./Upload";
import { ToastContainer, toast } from 'react-toastify';
import {v4} from 'uuid';

const CreateEventForm = () => {
  const dispatch = useDispatch();
  const notify = () => toast.success("Evento creado con éxito!");
  //error evento 
  const errorEvent = () => toast.error("Error al crear el evento");

  const initialValues = {
    place: "",
    time: "",
    ability: "",
    price: "",
    image: "https://firebasestorage.googleapis.com/v0/b/no-country-ticket.appspot.com/o/1455da98-1051-4bc1-962d-c6fab39223ad?alt=media&token=95291e23-176a-4611-80bd-67a3547e9dac",
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    place: Yup.string().required("place es requerido"),
    time: Yup.string().required("Fecha/horario es requerido"),
    capacidad: Yup.number().required("Capacidad es requerida"),
    price: Yup.string().required("price es requerido"),
    image: Yup.string().required("Imagen es requerida"),
    title: Yup.string().required("title es requerido"),
    description: Yup.string().required("Descripción es requerida"),
  });

  const user = useSelector((store) => store.auth?.user);

  const handleSubmit = async (values) => {
    // handle form submission logic here
    //const newEvent = await ticketsService.create(values);
    // dispatch(addEvent(newEvent));
    // resetForm();
    try {
      const docRef = await addDoc(collection(db, "events"), {
        uid: v4(),
        user_id: user.uid,
        place: values.place,
        time: values.time,
        ability: values.ability,
        price: values.price,
        image: "https://firebasestorage.googleapis.com/v0/b/no-country-ticket.appspot.com/o/1455da98-1051-4bc1-962d-c6fab39223ad?alt=media&token=95291e23-176a-4611-80bd-67a3547e9dac",
        title: values.title,
        description: values.description,
      });

      notify();
    } catch (e) {
      console.error("Error adding document: ", e);
      errorEvent();
    }
  };

  return (
    <div className="contenedorF">
      <div className="contenedor2">
        <div className="detail">
          <h2 className="tittleForm">Crea un Evento!!!</h2>
          <Formik
            initialValues={initialValues}
            validateOnChange={false}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form>
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
                  {/* <label htmlFor="image">Imagen</label>
                  <Field
                    type={"file"}
                    id="image"
                    name="image"
                    placeholder="Imagen de evento"
                  />
                  <ErrorMessage name="image" /> */}
                  <Upload />
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
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                <ToastContainer />
              </Form>
            )}
          </Formik>
          
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;
