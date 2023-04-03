import { db } from "../utils/firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore";

const usersRef = collection(db, "users");

const getUserById = async (id) => {
    const q = query(usersRef, where("uid", "==", id));
    const querySnapshot = await getDocs(q);
    let data = null;    
  
    querySnapshot.forEach((doc) => {
      data = doc.data();
    });

    return data;
  };
  
export default {
  getUserById,
};
