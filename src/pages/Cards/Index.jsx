import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGetAllEvents } from "../../redux/features/events/eventsSlice";
import "./Index.css";

const Cards = ({ searchTerm = "" }) => {
  
  const eventsState = useSelector((state) => state.events.events)  
  const dispatch = useDispatch();

  const filteredEvents = eventsState.filter((event) => {
    return event.title && event.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  useEffect(() => {
    dispatch(fetchGetAllEvents())
  }, []);

  return (
    <div>
      <div className="cards-container">
        {filteredEvents && filteredEvents.map((card) => (
          <Link to={`/cards/${card.uid}`} key={card.uid}>
            <div className="card-ticket">
              <img src={card.image}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
