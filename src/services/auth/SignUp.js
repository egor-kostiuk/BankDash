import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '/src/services/api/firebase.js';
import { setDoc, doc } from 'firebase/firestore';

export const SignUp = () => {
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
      navigate('/bankdash');
    } catch (error) {

      // Toast errors
      switch (error.code) {
        case 'auth/invalid-email':
          toast.error('Incorrect email. Please try again.')
          break;

        case 'auth/missing-password':
          toast.error('Missing password.')
          break;

        case 'auth/weak-password':
          toast.error('Password should be at least 6 characters.')
          break;
      }
      console.error(error.message);
    }
  };

  return { email, setEmail, password, setPassword, firstName, setFirstName, handleRegister};
};
