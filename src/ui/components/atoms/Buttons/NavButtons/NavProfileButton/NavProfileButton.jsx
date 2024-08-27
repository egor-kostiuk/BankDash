import { useState } from "react";
import { useEditProfileImg } from "/src/hooks/useEditProfileImg.js";

import { NavProfileDropdown } from "../../../NavProfileDropdown/NavProfileDropdown.jsx";

import "./NavProfileButon.css";

export const NavProfileButton = ({ img }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { profileImg } = useEditProfileImg();

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div style={{position: 'relative'}}>
      <button
        className={'nav-profile-button'}
        onClick={toggleDropdown}
      >
        <img src={profileImg} alt="" />
      </button>
      <div className={`nav-profile-dropdown ${isOpen ? 'open' : ''}`}>
        <NavProfileDropdown img={profileImg} closeDropdown={() => setIsOpen(false)} />
      </div>
      {isOpen && <div className="dropdown-overlay" onClick={() => setIsOpen(false)} ></div>}
    </div>
  );
};