import { db } from "../utils/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
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

const updateEvent = async (id, newData) => {
  const eventRef = doc(eventsRef, id);
  try {
    await updateDoc(eventRef, newData);
    console.log("Evento actualizado correctamente");
  } catch (error) {
    console.error("Error actualizando evento:", error);
  }
};

export default {
  getAllEvents,
  getEventById,
  updateEvent,
};   



