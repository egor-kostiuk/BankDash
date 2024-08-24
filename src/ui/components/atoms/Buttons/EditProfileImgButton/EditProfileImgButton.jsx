import { useEditProfileImg } from "./EditProfileImgButton.js";
import { ReactSVG } from "react-svg";

import editProfileImgButtonIcon from '/src/assets/img/edit-profile-img-button.svg';

export const EditProfileImgButton = () => {
  const { profileImg, handleButtonClick, handleImageChange } = useEditProfileImg();

  return (
    <>
      <img src={profileImg} alt="Profile Avatar" />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="fileInput"
      />
      <button onClick={handleButtonClick}>
        <ReactSVG src={editProfileImgButtonIcon} />
      </button>
    </>
  );
};
