import { db } from "../utils/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const salesRef = collection(db, "events");

const getAllSalesByUserId = async (id) => {
    console.log("id", id);
    const q = query(salesRef, where("user_id", "==", id));
  const querySnapshot = await getDocs(q);
  const data = [];
console.log("querySnapshot", querySnapshot);
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

export default {
  getAllSalesByUserId,
};
