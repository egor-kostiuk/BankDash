import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDgty4m1--Rus0HGkg-jPMVZuq94badEP4",
  authDomain: "bankdash-f1454.firebaseapp.com",
  projectId: "bankdash-f1454",
  storageBucket: "bankdash-f1454.appspot.com",
  messagingSenderId: "1059876621429",
  appId: "1:1059876621429:web:2c5b5554f5742642f03c3c"
};

// Firebase initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

// Function to upload photo to Firebase Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, `${currentUser.uid}.png`);

  setLoading(true);

  try {
    await uploadBytes(fileRef, file);

    const photoURL = await getDownloadURL(fileRef);

    await updateProfile(currentUser, { photoURL });

    setLoading(false);

    return photoURL;
  } catch (error) {
    console.error("Error loading photo: ", error);
    setLoading(false);
    alert("Failed to upload photo. Try again.");
    return null;
  }
}

export default app;