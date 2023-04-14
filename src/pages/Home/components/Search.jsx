import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import eventAPI from "../../../services/events";
import "./Search.css"

const Search = ({ searchTerm, setSearchTerm }) => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [filteredEvents, setFilteredEvents] = useState([]);


  const handleInputChange = (event) => {
    const searchQuery = event.target.value;
    setSearchTerm(searchQuery);
    // handleSearch(searchQuery);
  };

  return (
    <div className="buscador">
      <div className="search-container-cards">
      <input 
        type="text" 
        onChange={handleInputChange} 
        value={searchTerm} 
        placeholder="Buscar evento"  
      />
      <BiSearchAlt2 className="search-icon" />
      </div>
      {/* <ul>
        {filteredEvents.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Search;
