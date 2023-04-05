import React, { useState } from "react"; 
import eventAPI from "../../../services/events"; 

const Pagination = () => { 
  const [filteredEvents, setFilteredEvents] = useState([]); 
  const [pageNumber, updatePageNumber] = useState(1); 

  
  eventAPI.getAllEvents().then(allEvents => setFilteredEvents(allEvents));

  const pageSize = 10; 
  const startIndex = (pageNumber - 1) * pageSize; 
  const endIndex = startIndex + pageSize; 
  const currentEvents = filteredEvents.slice(startIndex, endIndex); 

  return ( 
    <div> 
      {/* Pagination buttons */} 
      <div> 
        <button disabled={pageNumber === 1} onClick={() => updatePageNumber(pageNumber - 1)}>Previous</button> 
        <button disabled={endIndex >= filteredEvents.length} onClick={() => updatePageNumber(pageNumber + 1)}>Next</button> 
      </div> 
    </div> 
  ); 
}; 

export default Pagination;
