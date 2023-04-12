import { db } from "../utils/firebaseConfig";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

const usersRef = collection(db, "users");

export const getUserById = async (id) => {
  const q = query(usersRef, where("uid", "==", id));
  const querySnapshot = await getDocs(q);
  let data = null;

  querySnapshot.forEach((doc) => {
    data = doc.data();
  });

  return data;
};

export const createUser = async (user) => {
  await addDoc(collection(db, "users"), user);
};
