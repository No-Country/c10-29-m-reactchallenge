import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGetAllEvents } from "../../redux/features/events/eventsSlice";
import eventsService from "../../services/events";
import "./Index.css";

const Cards = ({
  searchTerm = "",
  dateFilter = false,
  search = false,
  filterProv,
  selectedDate,


}) => {
  // const eventsState = useSelector((state) => state.events.events);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [provinceFilter, setProvinceFilter] = useState("");

  useEffect(() => {
    // dispatch(fetchGetAllEvents());
    setLoading(true);
    eventsService.getAllEvents().then((res) => {
      setEvents(res);
      setLoading(false);
    });
  }, []);


  const filteredEvents = events
    .filter((event) => {
      return (
        event.title &&
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .filter((event) => {
      if (filterProv) {
        return event.provincia === filterProv;
      }
      return true;

    })
    .filter((event) => {
        if (event.date) {
          
          return event.date.getTime() === selectedDate.getTime();
        }
        return false;


  const currentDate = new Date();
  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1);
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

  const filteredEvenstByDate = events.filter((event) => {
    const dateEvent = new Date(event.time);

    const eventTime = dateEvent.getTime(); // Obtén el valor de tiempo en milisegundos

    return (
      eventTime >= firstDayOfWeek.getTime() &&
      eventTime <= lastDayOfWeek.getTime()
    );
  });

  return (
    <div>
      {loading ? (
        <div>
          {/* Mostrar mensaje de carga o spinner */}
          <p>Cargando...</p>
        </div>
      ) : (
        <div className="cards-container">
          {search && filteredEvents.length > 0 ? (
            filteredEvents.map((card) => (
              <Link to={`/cards/${card.uid}`} key={card.uid}>
                <div
                  className={`card-ticket ${
                    card.ability === 0 ? "sold-out" : ""
                  }`}
                >
                  <img src={card.image} />
                </div>
              </Link>
            ))
          ) : dateFilter && filteredEvenstByDate.length > 0 ? (
            filteredEvenstByDate.map((card) => (
              <Link to={`/cards/${card.uid}`} key={card.uid}>
                <div className="card-ticket">
                  <img src={card.image} />
                </div>
              </Link>
            ))
          ) : (
            <div>
              <p>No se encontró el evento</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cards;