import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterDate } from '../../../redux/features/FilteredData/dataSlice';

function FilterData() {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const events = useSelector(state => state.events.items);
  const filteredEvents = events.filter(event => {
        return (event.date.getDate() === selectedDate.getDate() &&
                event.date.getMonth() === selectedDate.getMonth() &&
                event.date.getFullYear() === selectedDate.getFullYear())
  });

  const handleDateChange = date => {
    setSelectedDate(date);
    dispatch(setFilterDate(date));
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
      <ul>
      {filteredEvents.map(event => (
        <li key={event.id}>{event.name} - {event.date.toString()}</li>
      ))}
      </ul>
    </div>
  );
}

export default FilterData;
