import { useState } from "react";

import "./NavSettingsButton.css";

export const NavSettingsButton = ({ img, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilling, setIsFilling] = useState(false);

  const toggleDropdown = () => {
    setIsFilling(true);

    setIsOpen(prev => !prev);

    setTimeout(() => {
      setIsFilling(false);
    }, 500);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div style={{position: 'relative'}}>
      <button
        className={`nav-settings-button ${isFilling ? 'filling' : ''}`}
        onClick={toggleDropdown}
      >
        <img src={img} alt={''}/>
        {isFilling && <div className="fill-overlay"></div>}
      </button>
      <div className={`nav-notifications-dropdown ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
      {isOpen && <div className="dropdown-overlay" onClick={closeDropdown}></div>}
    </div>
  )
}