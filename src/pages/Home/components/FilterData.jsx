import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FilterData({ searchTerm, setSearchTerm }) {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const handleDateChange = (e) => {
    setSelectedDate(e);
    setSearchTerm(e);
    console.log(e);
  };

  return (
    <div>
      <DatePicker
        value={searchTerm}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}

export default FilterData;
