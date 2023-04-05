
import React, { useState } from "react";
import eventAPI from "../../../services/events";


const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleSearch = async (searchQuery) => {
    const allEvents = await eventAPI.getAllEvents();
    //console.log(allEvents)//
    const filtered = allEvents.filter((event) => {
        console.log(event)
      return event.title && event.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredEvents(filtered);
  };
  const handleInputChange = (event) => {
    const searchQuery = event.target.value;
    setSearchTerm(searchQuery);
    handleSearch(searchQuery);
  };


  return (
   
      <div>
      <input type="text" onChange={handleInputChange} value={searchTerm}/>
      <ul>
        {filteredEvents.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
   
  );
};

export default Search;