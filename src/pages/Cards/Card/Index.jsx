import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import { getEventById } from "../../../redux/features/events/eventsSlice";
import Template from "../../../layouts/Template/Index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Index.css";

function Index() {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.items);
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const purchaseMessage = () =>
    toast.success("La entrada se agrego al carrito :)");

  useEffect(() => {
    if (events.length === 0) {
      dispatch(getEventById(id));
      setCard(events.find((event) => event.uid === id));
    } else {
      const card = events.find((event) => event._id === id);
      setCard(events.find((event) => event.uid === id));

    }
  }, [events, id, dispatch]);
  

  const addNewItem = () => {
    console.log(card);
    dispatch(addToCart(card));
  };

  const checkeUser = () => {
    if (cart && user.role === "buyer") {
      addNewItem();
      purchaseMessage();
    } else {
      toast.error(
        "Debes iniciar sesion como comprador para comprar una entrada"
      );
    }
  };

  // const event = events.find((event) => event._id === id);
  console.log(events)
  console.log(card)

  return (
    <Template>
      {card && (
        <div className="ticket-card">
          <img className="ticket-card__image" src={card.image} alt="" />
          <div className="ticket-card__text">
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <p>$ {card.price}</p>
            <button
              className="ticket-card__button"
              onClick={() => {
                checkeUser();
              }}
            >
              Comprar
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </Template>
  );
}

export default Index;
