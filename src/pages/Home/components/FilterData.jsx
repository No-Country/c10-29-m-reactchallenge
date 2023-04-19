import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FilterData.css";

function FilterData({ searchTerm, setSearchTerm }) {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const handleDateChange = (e) => {
    setSelectedDate(e);
    setSearchTerm(e);
    console.log(e);
  };

  return (
    <div className="filter-data-container">
      <DatePicker
        value={searchTerm}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Fecha"
    className="date-search-cards"
      />
    </div>
  );
}

export default FilterData;
