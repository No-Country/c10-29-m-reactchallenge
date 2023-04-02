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

export default {
  getAllEvents,
  getEventById,
};
