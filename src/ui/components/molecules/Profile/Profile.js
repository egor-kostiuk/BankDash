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

  // Function for updating user data
  useEffect(() => {
    fetchUserData();
  }, []);

  // Function for updating lastName
  const updateLastName = async (lastName) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        await updateDoc(docRef, {
          lastName: lastName,
        });
        console.log("LastName successfully updated!");
        await fetchUserData();
      }
    } catch (error) {
      console.error("Error saving lastName:", error.message);
    }
  };

  // Function to Log out from the account
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