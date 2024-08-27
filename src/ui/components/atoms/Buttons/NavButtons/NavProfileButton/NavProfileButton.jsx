import { useState } from "react";
import { NavProfileDropdown } from "../../../NavProfileDropdown/NavProfileDropdown.jsx";

import "./NavProfileButon.css";

export const NavProfileButton = ({ img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div style={{position: 'relative'}}>
      <button
        className={'nav-profile-button'}
        onClick={toggleDropdown}
      >
        <img src={img} alt="" />
      </button>
      <div className={`nav-profile-dropdown ${isOpen ? 'open' : ''}`}>
        <NavProfileDropdown img={img} closeDropdown={() => setIsOpen(false)} />
      </div>
    </div>
  );
};