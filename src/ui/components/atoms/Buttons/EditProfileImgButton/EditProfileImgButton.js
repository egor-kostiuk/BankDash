import {useState} from "react";

export const useEditProfileImg = () => { // TODO: move to hooks
  const [profileImg, setProfileImg] = useState("/src/assets/img/default-profile-img.jpg");

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
