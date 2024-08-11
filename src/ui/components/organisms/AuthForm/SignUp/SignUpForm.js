import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "/src/services/api/firebase.js";
import {setDoc, doc} from "firebase/firestore";

export const useSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: firstName,
        });
      }
      navigate('/profile');
    } catch (error) {
      console.error(error.message);
    }
  };

  return {setEmail, setPassword, setFirstName, handleRegister};
};
