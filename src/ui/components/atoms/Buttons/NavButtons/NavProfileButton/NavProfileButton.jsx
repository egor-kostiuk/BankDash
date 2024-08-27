import { useState } from "react";
import { useEditProfileImg } from "/src/hooks/useEditProfileImg.js";

import { NavProfileDropdown } from "../../../NavProfileDropdown/NavProfileDropdown.jsx";

import "./NavProfileButon.css";

export const NavProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { profileImg } = useEditProfileImg();
  const [isFilling, setIsFilling] = useState(false);

  // Function for dropdown open and click styles
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
    setIsFilling(true);

    setTimeout(() => {
      setIsFilling(false);
    }, 500);
  };

  return (
    <div style={{position: 'relative'}}>
      <button
        className={`nav-profile-button ${isFilling ? 'filling' : ''}`}
        onClick={toggleDropdown}
      >
        <img src={profileImg} alt="" />
        {isFilling && <div className="fill-overlay"></div>}
      </button>
      <div className={`nav-profile-dropdown ${isOpen ? 'open' : ''}`}>
        <NavProfileDropdown img={profileImg} closeDropdown={() => setIsOpen(false)} />
      </div>
      {isOpen && <div className="dropdown-overlay" onClick={() => setIsOpen(false)} ></div>}
    </div>
  );
};