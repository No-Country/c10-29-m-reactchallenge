import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialTickets } from "../../redux/features/tickets/ticketsSlice";
import ticketsService from "../../services/tickets";
import { Link } from "react-router-dom";
import "./Index.css";
import { initialEvents } from "../../redux/features/events/eventsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const ticketsState = useSelector((state) => state.tickets.tickets);
  const eventsState = useSelector((state) => state.events.events)
  // console.log(ticketsState)
  useEffect(() => {
    try {
      ticketsService.getAll().then((tickets) => {
        dispatch(initialEvents(tickets));
      
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      <div className="cards-container">
        {/* {ticketsState.map((card) => (
          <Link to={`/cards/${card.id}`}>
            <div key={card.id} className="card-ticket">
            
              <img src={card.image} alt="" width="25%" />
            </div>
          </Link>
        ))} */}
        {eventsState.map((card) => (
          <Link to={`/cards/${card.id}`}>
            <div key={card.id} className="card-ticket">
              {/* <h1>{card.title}</h1>
            <p>{card.description}</p> */}
              <img src={card.image} alt="" width="25%" />
            </div>
          </Link>
        )).reverse()}
      </div>
    </div>
  );
};

export default Home;
