import { useState, useEffect } from "react";
import { auth, upload } from "/src/services/api/firebase.js";

export const useEditProfileImg = () => {
  const [profileImg, setProfileImg] = useState("/src/assets/img/default-profile-img.jpg");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user && user.photoURL) {
      setProfileImg(user.photoURL);
    }
  }, []);

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);

      const user = auth.currentUser;
      if (user) {
        const newPhotoURL = await upload(file, user, setLoading);
        if (newPhotoURL) {
          setProfileImg(newPhotoURL);
        }
      }
    }
  };

  return {
    profileImg,
    handleButtonClick,
    handleImageChange,
    loading,
  };
};
