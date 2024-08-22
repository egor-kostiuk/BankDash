import {useState} from "react";

import defaultProfileImg from "/src/assets/img/default-profile-img.jpg"

export const useEditProfileImg = () => {
  const [profileImg, setProfileImg] = useState(defaultProfileImg);

  const handleButtonClick = () => {
    // console.log("Button clicked");
    document.getElementById('fileInput').click();
  };

  const handleImageChange = (e) => {
    // console.log("File input changed");
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
        // console.log("Image loaded");
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    profileImg,
    handleButtonClick,
    handleImageChange,
  };
};
