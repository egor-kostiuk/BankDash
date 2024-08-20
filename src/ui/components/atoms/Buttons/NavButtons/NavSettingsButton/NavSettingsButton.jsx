import {useState} from "react";

import "./NavSettingsButton.css";

export const NavSettingsButton = ({img}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={'notifications-dropdown'}>
      <button className={'nav-settings-button'} onClick={toggleDropdown}>
        <img src={img} alt={''}/>
      </button>
      <nav className={`notifications-dropdown-content ${isOpen ? 'open' : ''}`}>
        <div className={'all-notifications-box'}>
          <div>
            <h6 className={'all-notifications'}>All Notifications</h6>
            <p className={'unread-messages'}>You have 3 unread messages</p>
          </div>
        </div>

        <hr className={'top-notification-hr'}/>

        <div>
          <div>Transaction Successful</div>
          <div>Low Balance Alert</div>
        </div>

        <div>
          <button>View all</button>
        </div>
      </nav>
      {isOpen && <div className="dropdown-overlay" onClick={closeDropdown}></div>}
    </div>
  )
}