import { db } from "../utils/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { v4 } from "uuid";

const salesRef = collection(db, "events");

const getAllSalesByUserId = async (id) => {
  console.log("id", id);
  const q = query(salesRef, where("user_id", "==", id));
  const querySnapshot = await getDocs(q);
  const data = [];
  console.log("querySnapshot", querySnapshot);
  querySnapshot.forEach((doc) => {
    data.push(JSON.parse(JSON.stringify(doc.data())));
  });
  return data;
};

const createSale = async (sale, user_id, url) => {
  const uid = "Event" + v4();
  const newSale = {
    ...sale,
    user_id,
    uid: uid,
    image: url,
  };
  const docRef = await setDoc(doc(db, "events", uid), newSale);
  return docRef;
};

const updateSale = async (sale, user_id, url, id) => {
  const newSale = {
    ...sale,
    user_id,
    uid: id,
    image: url,
  };
  const events = doc(db, "events", id);
  await updateDoc(events, newSale);
};

export default {
  getAllSalesByUserId,
  createSale,
  updateSale,
};
