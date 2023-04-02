import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGetAllEvents } from "../../redux/features/events/eventsSlice";
import "./Index.css";

const Cards = () => {
  
  const eventsState = useSelector((state) => state.events.events)  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchGetAllEvents())
  }, []);

  return (
    <div className="container">
      <div className="cards-container">
        {eventsState && eventsState.map((card) => (
          <Link to={`/cards/${card.uid}`} key={card.uid}>
            <div className="card-ticket">
              <img src={card.image} alt="" width="25%" />
            </div>
          </Link>
        )).reverse()}
      </div>
    </div>
  );
};

export default Cards;
