import {useState} from "react";

import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "/src/services/api/firebase.js";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/bankdash";
    } catch (error) {
      console.error(error.message);
    }
  };

  return {email, setEmail, password, setPassword, handleSubmit};
}