import React, { useRef } from "react";

import {} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { app } from "../utils/firebaseConfig";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";

const SignWhitGoogle = () => {
  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const db = getFirestore(app);
    const googleProvider = new GoogleAuthProvider();

    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);

      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  return (
    <div>
      <button type="submit" onClick={signInWithGoogle}>
        Ingresa con Google
      </button>
    </div>
  );
};

export default SignWhitGoogle;
