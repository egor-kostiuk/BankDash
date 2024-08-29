import {useState} from "react";

import "./NavSettingsButton.css";
import {NavSettingsDropdown} from "../../../NavSettingsDropdown/NavSettingsDropdown.jsx";

export const NavSettingsButton = ({img}) => {
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
    <div className={'notifications-dropdown'}>
      <button
        className={`nav-settings-button ${isFilling ? 'filling' : ''}`}
        onClick={toggleDropdown}
      >
        <img src={img} alt={''}/>
        {isFilling && <div className="fill-overlay"></div>}
      </button>
      <div className={`notifications-dropdown-content ${isOpen ? 'open' : ''}`}>

        <NavSettingsDropdown/>

        <div className={'notifications-view-all-button'}>
          <button>View All</button>
        </div>
      </div>
      {isOpen && <div className="dropdown-overlay" onClick={closeDropdown}></div>}
    </div>
  )
}