import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialTickets } from "../../redux/features/tickets/ticketsSlice";
import ticketsService from "../../services/tickets";
import Login from "../../components/Login";
import Navbar from "../../layouts/Navbar/Index";
import Footer from "../../layouts/Footer/Index";
import CreateAccount from "../../components/CreateAccount";

/*
useDispatch y useSelector son hooks proporcionados por la biblioteca React Redux que permiten a los componentes de React interactuar con la tienda global de Redux.

useDispatch se utiliza para obtener acceso al método dispatch de la tienda global. dispatch es el método que se utiliza para enviar acciones a la tienda. Las acciones son objetos que describen un cambio en el estado de la aplicación y contienen información necesaria para realizar ese cambio. useDispatch devuelve una función que se puede utilizar para enviar acciones a la tienda.

Por ejemplo, si tienes un botón en tu componente que debe enviar una acción para agregar un elemento a una lista en la tienda global, puedes usar useDispatch para obtener acceso al método dispatch y enviar la acción en el controlador de eventos del botón.

useSelector se utiliza para seleccionar una porción específica del estado de la tienda global y hacer que esté disponible en el componente. useSelector toma una función selector como argumento y devuelve el resultado de esa función. La función selector describe cómo se debe obtener la porción del estado de la tienda que se desea utilizar en el componente.

Por ejemplo, si tu componente necesita acceder a la lista de elementos mencionada anteriormente, puedes usar useSelector para seleccionar esa lista del estado de la tienda y hacer que esté disponible en el componente como una variable de estado. Cada vez que la lista cambie en la tienda global, el componente se actualizará automáticamente para reflejar ese cambio.
*/

const Home = () => {
  const dispatch = useDispatch();

  const ticketsState = useSelector((state) => state.tickets.tickets);

  // console.log(ticketsState)
  useEffect(() => {
    ticketsService.getAll().then((tickets) => {
      dispatch(initialTickets(tickets));
    });
  }, []);

  return (
    <div>
      <Navbar />
      <CreateAccount />

      {ticketsState.map((ticket) => (
        <div key={ticket.id}>
          <h1>{ticket.title}</h1>
          <p>{ticket.description}</p>
          <img src={ticket.image} alt="" width="25%" />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
