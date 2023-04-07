import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import { fetchGetEventById } from "../../../redux/features/events/eventsSlice";
import Template from "../../../layouts/Template/Index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Index.css";

function Index() {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.items);
  const currentEventById = useSelector((state) => state.events.currentEventById);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  const purchaseMessage = () => toast.success("La entrada se agrego al carrito :)");
  const infoMessage = () => toast.error("La entrada ya se encuentra en el carrito");
  
  // console.log("current", currentEventById);
  
  useEffect(() => {
    setLoading(true);
    dispatch(fetchGetEventById(id));
    setLoading(false);
  }, [id]);

  
  
  // const addNewItem = () => {
  //   console.log(card);
  // };
  console.log("currentEventByID", currentEventById);
  console.log("user id", user.uid);
  const checkeUser = () => {
    if (cart && user.role === "buyer") {
      // addNewItem();
      if (!cart.find(item => item.uid === currentEventById.uid)){
        purchaseMessage();
        const newEvent = {...currentEventById, user_id: user.uid};
        dispatch(addToCart(newEvent));
        console.log("newEvent", newEvent);
      }else{
        infoMessage();
      }
    } else {
      toast.error(
        "Debes iniciar sesion como comprador para comprar una entrada"
      );
    }
  };

  // console.log("current", currentEventById);

  return (
    <Template>
      {loading && <h1>Loading...</h1>}
      {currentEventById ? (
        <div className="ticket-card">
          <img className="ticket-card__image" src={currentEventById.image}/>
          <div className="ticket-card__text">
            <h1>{currentEventById.title}</h1>
            <p className="horario">
              {new Date(currentEventById.time).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric"
              })}hs
            </p>
            <p className="descripcion">{currentEventById.description}</p>
            <div className="valor">
            <p className="ban">GENERAL</p>
              <p className="precio">${currentEventById.price}</p>
              </div>
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
      ) : (
        <p>Loading...</p>
      )}
      <ToastContainer />
    </Template>
  );
}

export default Index;
