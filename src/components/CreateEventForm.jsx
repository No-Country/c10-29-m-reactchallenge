import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom';
import './CreateEventForm.css'

function validate(input) {
  let error = {};

  if (!input.name) {
    error.name = "Ingrese el nombre";
  } else if (input.name[0] === input.name[0].toLowerCase()) {
    error.name = "La primera letra debe estar en mayúsculas ";
  } else if (input.name.length <= 3 || input.name.length >= 30) {
    error.name = "El nombre debe contener de 3 a 30 caracteres";
  } 

  return error;
}


const CreateEventForm = () => {
  const [event, setEvent] = useState({
    id: nanoid(),
    name: '',
    location: '',
    dateTime: '',
    capacity: '',
    price: '',
    img: '',
    description: '',
  })

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addEvent(event))
  }

  const handleChange = e => {
    setEvent({ ...event, [e.target.name]: e.target.value })
    setError(
      validate({
        ...input, [e.target.name]: e.target.value, }) );

      console.log(input);
  
  }

  return (
    <div className="contenedorF">
        <div className="contenedor2">
        <div className="detail">
        <Link to="/home"><button className="butt" id="volver">Volver</button></Link>
        <h1 className="tittleForm">Crea un Evento!!!</h1>
    <form className="form"   onSubmit={handleSubmit}>
    <p className="sub">* : Requerido</p>
      <div>
      <label className="labels"> *Nombre del evento:</label>
      <input  className='inputs' type="text" name="name" value={event.name} onChange={handleChange} placeholder="Nombre del evento" />
      
      </div>
      <div>
      <label className="labels"> *Lugar del evento:</label>
      <input className='inputs'   type="text" name="location" value={event.location} onChange={handleChange} placeholder="Lugar del evento" />
      </div>
      <div>
      <label className="labels"> *Fecha y hora del evento:</label>
      <input className='inputs'   type="datetime-local" name="dateTime" value={event.dateTime} onChange={handleChange} placeholder="Fecha/horario del evento" />
      </div>
      <div>
      <label className="labels"> *Capacidad del evento:</label>
      <input className='inputs'   type="number" name="capacity" value={event.capacity} onChange={handleChange} placeholder="Capacidad del evento" />
      </div>
      <div>
      <label className="labels"> *Precio del evento:</label>
      <input className='inputs'   type="number" name="price" value={event.price} onChange={handleChange} placeholder="Precio del evento" />
      </div>
      <div>
      <label className="labels"> *Imagen del evento:</label>
      <input className='inputs'   type="text" name="img" value={event.img} onChange={handleChange} placeholder="Imagen de evento"/>
      </div>
      <div>
      <label className="labels"> *Descripcion del evento:</label>
      <textarea className='inputs'   type="text" name="description" value={event.description} onChange={handleChange} placeholder="Descripcion del evento"/>
      </div>
      
            <div>
              <input type="submit"  className="butt" disabled name="Send" />
            </div>
        
      </form>
      </div>
      </div>
      </div>

  )
}

export default CreateEventForm
