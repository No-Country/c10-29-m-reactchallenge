import React, { useState } from "react";
import eventAPI from "../../../services/events";

const Search = ({ searchTerm, setSearchTerm }) => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);


  const handleInputChange = (event) => {
    const searchQuery = event.target.value;
    setSearchTerm(searchQuery);
    // handleSearch(searchQuery);
  };

  return (
    <div>
      <input 
        type="text" 
        onChange={handleInputChange} 
        value={searchTerm} 
        placeholder="Buscar evento"  
      />
      <ul>
        {filteredEvents.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
