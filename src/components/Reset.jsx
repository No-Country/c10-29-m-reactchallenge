import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

function Reset() {
  const [email, setEmail] = useState("");

  const navi = useNavigate();

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Enlace de restablecimiento de contraseña enviado!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Reset;
