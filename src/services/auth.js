import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createUser, getUserById } from "./users";
import { app } from "../utils/firebaseConfig";
const auth = getAuth(app);

export const authWithGoogle = async (values) => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, googleProvider);
    const userExists = await getUserById(user.uid);
    if (!userExists) {
      const userToCreate = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        ...values,
      };
      await createUser(userToCreate);
    }
    return userExists;
  } catch (err) {
    console.error(err);
  }
};

export const signUpWithEmail = async (values) => {
  const { user } = await createUserWithEmailAndPassword(auth, {
    ...values,
  });
  const userToCreate = {
    ...values,
    ...user,
    authProvider: "local",
  };
  await createUser(userToCreate);
  return userToCreate;
};

export const signInWithEmail = async (values) => {
    const { user } = await signInWithEmailAndPassword(auth, 
    values.user_email,
    values.user_password,
    );
    const userExists = await getUserById(user.uid);
    return userExists;
};

export const signUpUser = async (values) => {
    if (values.authProvider === "google") {
        return authWithGoogle(values);
    }
    return signUpWithEmail(values);
};

export const signInUser = async (values) => {
    console.log(values);
    if (values.authProvider === "google") {
        return authWithGoogle(values);
    }
    return signInWithEmail(values);
}
