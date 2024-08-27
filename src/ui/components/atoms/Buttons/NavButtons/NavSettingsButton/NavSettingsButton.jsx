import {useState} from "react";
import {navImgList} from "/src/helpers/navImgList.js";

import "./NavSettingsButton.css";

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
            <div className={'notifications-img'}>
              <img src={navImgList.transactionMoney} alt="icon"/>
            </div>
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
            <div className={'notifications-img'}>
                <svg className="low-balance-alert-img"
                 focusable="false"
                 aria-hidden="true"
                 viewBox="0 0 24 24"
                 data-testid="PersonIcon">
                 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
            </div>
            <div className={'notifications-box'}>
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
            <div className={'notifications-img'}>
              <img src={navImgList.newLoanOffer} alt="icon"/>
            </div>
            <div className={'notifications-box'}>
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