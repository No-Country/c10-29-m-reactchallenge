import React, { useRef, useState, useEffect } from "react";
import {} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { app } from "../utils/firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
import "./SignWithGoogle.css";
import useSignUpWithGoogle from "../hooks/useSignUpWithGoogle";
import { connect } from "formik";

const SignWithGoogle = ({formik, isLoggin}) => {

  const {values, setFieldValue} = formik;

  const {isDisabled} = useSignUpWithGoogle({values})
  
  const signInWithGoogle = async () => {
    setFieldValue("authProvider", "google");
  };
  return (
    <div className="google">
      <button className="botonGoogle" type="submit" onClick={signInWithGoogle} disabled={!isLoggin && isDisabled}>
        Ingresa con Google
      </button>
    </div>
  );
};

export default connect(SignWithGoogle);
