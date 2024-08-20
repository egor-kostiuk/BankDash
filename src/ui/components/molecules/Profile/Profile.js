import {useEffect, useState} from "react";

import {auth, db} from "/src/services/api/firebase.js";
import {doc, getDoc, updateDoc} from "firebase/firestore";

export const useProfile = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    }
  };

  // Функція для оновлення user data
  useEffect(() => {
    fetchUserData();
  }, []);

  // Функція для оновлення lastName TODO: translate documentation
  const updateLastName = async (lastName) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        await updateDoc(docRef, {
          lastName: lastName,
        });
        console.log("LastName успішно оновлено!");
        await fetchUserData();
      }
    } catch (error) {
      console.error("Помилка при оновленні lastName:", error.message);
    }
  };

  // Функція для виходу з аккаунта TODO: translate documentation
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return {userDetails, updateLastName, handleLogout}
}