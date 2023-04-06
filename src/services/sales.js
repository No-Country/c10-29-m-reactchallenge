import { db } from "../utils/firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import {v4} from 'uuid';

const salesRef = collection(db, "events");

// GET
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


const getEventById = async (id) => {
  const q = query(salesRef, where("uid", "==", id));
  const querySnapshot = await getDocs(q);
  let data = null;    

  querySnapshot.forEach((doc) => {
    data = doc.data();
  });

  return data;
};


// POST
const createSale = async (sale, user_id, url) => {
  const newSale = {...sale, user_id, uid: v4(), image: url};
  const docRef = await addDoc(collection(db, "events"), newSale);
  return docRef;
}

export default {
  getAllSalesByUserId,
  getEventById,
  createSale,
};
