import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ticketsService from "../../../services/tickets";
import Navbar from "../../../layouts/Navbar/Index";
import Footer from "../../../layouts/Footer/Index";
import "./Index.css";

function Index() {
  const [card, setCard] = useState({});
  const { id } = useParams();

  useEffect(() => {
    ticketsService.getOne(id).then((card) => {
      setCard(card);
    });
  }, [id]);
  console.log("card", card);
  return (
    <>
      <Navbar />
      {card && (
        <div className="ticket-card">
          <img className="ticket-card__image" src={card.image} alt="" />
          <div className="ticket-card__text">
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <p>$ {card.price}</p>
            <button className="ticket-card__button">Comprar</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Index;
