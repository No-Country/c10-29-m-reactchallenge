import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialTickets } from "../../redux/features/tickets/ticketsSlice";
import ticketsService from "../../services/tickets";
import { Link } from "react-router-dom";
import "./Index.css";

const Home = () => {
  const dispatch = useDispatch();

  const ticketsState = useSelector((state) => state.tickets.tickets);

  // console.log(ticketsState)
  useEffect(() => {
    try {
      ticketsService.getAll().then((tickets) => {
        dispatch(initialTickets(tickets));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      <div className="cards-container">
        {ticketsState.map((card) => (
          <Link to={`/cards/${card.id}`}>
            <div key={card.id} className="card-ticket">
              {/* <h1>{card.title}</h1>
            <p>{card.description}</p> */}
              <img src={card.image} alt="" width="25%" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
