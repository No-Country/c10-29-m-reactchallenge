import React, { useState, useEffect } from "react";

function FilterData({ selectedDate, setSelectedDate }) {
 
  
  const [filteredEvents, setFilteredEvents] = useState([]);

  
  const handleSelectDate = e => {
    setSelectedDate(e.target.value);
  };

 

  useEffect(() => {
    // Assuming events is an array of events to be filtered
    const filteredEventsByDate = filteredEvents.filter(event => event.date === selectedDate);
    setFilteredEvents(filteredEventsByDate);
  }, [selectedDate]);

  return (
    <div>
      <input type="date" value={selectedDate} onChange={handleSelectDate} />
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterData;