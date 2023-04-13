import { db } from "../utils/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

const eventsRef = collection(db, "events");

const getAllEvents = async () => {
  const querySnapshot = await getDocs(eventsRef);
  const eventsArray = [];
  querySnapshot.forEach((doc) => {
    eventsArray.push(JSON.parse(JSON.stringify(doc.data())));
  });
  // const events = eventsArray.filter((e) => e.user_id === userUid)
  return eventsArray;
};

// Create a query against the collection.
const getEventById = async (id) => {
  const q = query(eventsRef, where("uid", "==", id));
  const querySnapshot = await getDocs(q);

  let data = null;

  querySnapshot.forEach((doc) => {
    data = doc.data();
  });

  return data;
};

const updateEventByAbility = async (event, id) => {
  const { ability, ...rest } = event; // Extraer la propiedad 'ability' del objeto 'event'
  const eventUpdated = {
    ...rest, // Usar el resto de las propiedades del objeto 'event'
    uid: id,
    ability: ability > 0 ? ability - 1 : 0, // Actualizar el valor de 'ability'
  };
  const events = doc(db, "events", id);

  await updateDoc(events, eventUpdated);
};

export default {
  getAllEvents,
  getEventById,
  updateEventByAbility,
};
