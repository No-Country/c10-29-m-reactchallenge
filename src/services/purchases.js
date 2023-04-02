import { db } from "../utils/firebaseConfig";
import {
  collection,
  writeBatch,
  query,
  where,
  doc,
  getDocs,
} from "firebase/firestore";

const purchaseRef = collection(db, "purchases");

const addPurchase = async (items) => {
  const newBatch = writeBatch(db);

  await items.forEach((item) => {
    // Creates a DocRef with random ID
    const docRef = doc(purchaseRef);

    newBatch.set(docRef, item);
  });

  await newBatch.commit();
};

const getAllPurchasesByUserId = async (id) => {
  console.log("id", id);
  const q = query(purchaseRef, where("user_id", "==", id));
  const querySnapshot = await getDocs(q);
  console.log("querySnapshot", querySnapshot);
  const data = [];

  querySnapshot.forEach((doc) => {
    console.log("doc", doc);
    data.push(doc.data());
  });
  console.log("data", data);
  return data;
};

export default {
  addPurchase,
  getAllPurchasesByUserId,
};