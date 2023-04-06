import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCDul9tAGS5YMoiz1xX4NvXbMexYoV0jpY",
  authDomain: "no-country-ticket.firebaseapp.com",
  projectId: "no-country-ticket",
  storageBucket: "no-country-ticket.appspot.com",
  messagingSenderId: "991882959829",
  appId: "1:991882959829:web:da177eeef65e19a68a7b5c",
  measurementId: "G-MKGT2LFY2R",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD6iMwKXPzS5fRW8Vs_dZdopN2WIH-JBbo",
//   authDomain: "bypass-f2780.firebaseapp.com",
//   projectId: "bypass-f2780",
//   storageBucket: "bypass-f2780.appspot.com",
//   messagingSenderId: "991770592537",
//   appId: "1:991770592537:web:caec127b074196134ff188",
// };
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export async function uploadFile(file) {
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
