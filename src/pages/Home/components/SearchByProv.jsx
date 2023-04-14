import React, { useState } from "react";
import eventAPI from "../../../services/events";
import "./SearchByProv.css"

const SearchByProv = ({ searchTerm, setSearchTerm }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);

  function handleSelectProv(e) {
    const prov = e.target.value;
    setSearchTerm(prov);
  }

  return (
    <div className="buscador-prov">
      <select value={searchTerm} onChange={handleSelectProv}>
        <option value="">Todas las provincias</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option>CABA</option>
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
      </select>
      <ul>
        {filteredEvents.map((event) => (
          <li key={event.prov}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchByProv;
