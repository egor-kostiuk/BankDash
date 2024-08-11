import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "/src/services/api/firebase.js";

export const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      navigate('/bankdash');
    } catch (error) {
      console.error(error.message);
    }
  };

  return {email, setEmail, password, setPassword, handleSubmit};
}