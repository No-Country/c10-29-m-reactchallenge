import { db } from "../utils/firebaseConfig";
import {
  collection,
  query,
  where,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 } from "uuid";

const purchaseRef = collection(db, "purchases");


// GET
const getAllPurchasesByUserId = async (id) => {
  const q = query(purchaseRef, where("user_id", "==", id));
  const querySnapshot = await getDocs(q);
  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

const getPurchaseById = async (id) => {
  console.log("id", id);
  const q = query(purchaseRef, where("uid", "==", id));
  const querySnapshot = await getDocs(q);
  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};



// POST
const addPurchase = async (items) => {
  items.forEach(async (item) => {
    const uid = v4();
    const newItem = {
      ...item,
      uid: uid,
      available: true,
    };
    await setDoc(doc(db, "purchases", uid), newItem);
  });
};

// UPDATE

const updatePurchaseByAvailable = async (purchase, id) => {
  const { available, ...rest } = purchase;
  
  const purchaseUpdated = {
    ...rest, 
    uid: id,
    available: false 
  };
  const purchases= doc(db, "purchases", id);

  await updateDoc(purchases, purchaseUpdated);
};

export default {
  addPurchase,
  getAllPurchasesByUserId,
  getPurchaseById,
  updatePurchaseByAvailable
};
