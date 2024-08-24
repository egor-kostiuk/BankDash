import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgty4m1--Rus0HGkg-jPMVZuq94badEP4",
  authDomain: "bankdash-f1454.firebaseapp.com",
  projectId: "bankdash-f1454",
  storageBucket: "bankdash-f1454.appspot.com",
  messagingSenderId: "1059876621429",
  appId: "1:1059876621429:web:2c5b5554f5742642f03c3c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db= getFirestore(app);
export default app;