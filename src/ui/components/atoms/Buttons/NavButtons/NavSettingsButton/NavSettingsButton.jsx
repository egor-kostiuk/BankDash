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
        <div className={'all-notifications'}>
          <div className={'all-notifications-box'}>
            <h6 className={'h6-notifications'}>All Notifications</h6>
            <p className={'unread-messages'}>You have 2 unread messages</p>
          </div>
        </div>

        <hr className={'notifications-hr'}/>

        <div className={'notifications'}>
          <div className={'notifications-unread'}>
            <div className={'notifications-img'}>img</div>
            <div className={'notifications-box'}>
              <span className={'notification-title'}>Transaction Successful</span>
              <span className={'notification-info'}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     aria-hidden="true"
                     role="img"
                     className="notification-info-img"
                     viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="#00ACC1"></circle><circle cx="24" cy="24" r="16" fill="#eee"></circle>
                  <path d="M23 11h2v13h-2z"></path><path d="M31.285 29.654L29.66 31.28l-6.504-6.504l1.626-1.627z"></path>
                  <circle cx="24" cy="24" r="2"></circle><circle cx="24" cy="24" r="1" fill="#00ACC1"></circle>
                </svg>
                Aug 20, 2024 3:16 PM
              </span>
            </div>
          </div>
          <div className={'notifications-unread'}>
            <div className={'notifications-img'}>img</div>
            <div>
              <span className={'notification-title'}>Low Balance Alert</span>
              <span className={'notification-info'}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     aria-hidden="true"
                     role="img"
                     className="notification-info-img"
                     viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="#00ACC1"></circle><circle cx="24" cy="24" r="16" fill="#eee"></circle>
                  <path d="M23 11h2v13h-2z"></path><path d="M31.285 29.654L29.66 31.28l-6.504-6.504l1.626-1.627z"></path>
                  <circle cx="24" cy="24" r="2"></circle><circle cx="24" cy="24" r="1" fill="#00ACC1"></circle>
                </svg>
                Aug 20, 2024 12:31 PM
              </span>
            </div>
          </div>
          <div className={'notifications-read'}>
            <div className={'notifications-img'}>img</div>
            <div>
              <span className={'notification-title'}>New Loan Offer</span>
              <span className={'notification-info'}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     aria-hidden="true"
                     role="img"
                     className="notification-info-img"
                     viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="#00ACC1"></circle><circle cx="24" cy="24" r="16" fill="#eee"></circle>
                  <path d="M23 11h2v13h-2z"></path><path
                  d="M31.285 29.654L29.66 31.28l-6.504-6.504l1.626-1.627z"></path>
                  <circle cx="24" cy="24" r="2"></circle><circle cx="24" cy="24" r="1" fill="#00ACC1"></circle>
                </svg>
                Aug 19, 2024 2:16 PM
              </span>
            </div>
          </div>
        </div>

        <hr className={'notifications-hr'}/>

        <div className={'notifications-view-all-button'}>
          <button>View All</button>
        </div>
      </nav>
      {isOpen && <div className="dropdown-overlay" onClick={closeDropdown}></div>}
    </div>
  )
}