/*
En Redux Toolkit, "store" se refiere al objeto que contiene todo el estado de la aplicación y maneja las acciones que modifican ese estado. Es donde van a estar almacenados los datos de la aplicación, y es donde se van a ejecutar las funciones que modifican esos datos.
*/
import { configureStore } from "@reduxjs/toolkit"; // devuelve un objeto que contiene el estado de la aplicación
// import authReducer from './features/auth/authenticationSlice'; // importamos el reducer de la autenticación
import ticketsReducer from "../features/tickets/ticketsSlice"; // importamos el reducer de los tickets
import authReducer from "../features/auth/authenticationSlice"; // importamos el reducer de los tickets

export const store = configureStore({
  // reducer: // reducer es una función que toma el estado actual y una acción, y devuelve un nuevo estado. Es la forma en la cual vamos a poder manipular el estado de la aplicación. Es parecido al setState
  // auth: authReducer,
  reducer: {
    tickets: ticketsReducer,
    auth: authReducer,
  },
}); // se puede dividir el estado en multiples archivos,
