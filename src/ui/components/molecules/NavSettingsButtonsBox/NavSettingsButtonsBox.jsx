import { NavSettingsButton } from '/src/ui/components/atoms/Buttons/NavButtons/NavSettingsButton/NavSettingsButton.jsx';
import { NavSetAndNotDropdown } from '/src/ui/components/atoms/NavSetAndNotDropdown/NavSetAndNotDropdown.jsx';
import { SwitchTheme } from '/src/ui/components/atoms/SwitchTheme/SwitchTheme.jsx';
import { NavNotificationDropdownCard } from '/src/ui/components/atoms/NavNotificationDropdownCard/NavNotificationDropdownCard.jsx';
import { notificationList } from '/src/helpers/notificationList.js';

import './NavSettingsButtonsBox.css';

export const NavSettingsButtonsBox = ({ onClick, img }) => {
  return (
    <div className={'nav-button-wrapper'}>
      {/* Settings button */}
      <NavSettingsButton
        onClick={onClick}
        img={img[0]}>
        <NavSetAndNotDropdown
          title={'Settings'}>
          <SwitchTheme/>
        </NavSetAndNotDropdown>
      </NavSettingsButton>

      {/* Notification button */}
      <NavSettingsButton
        onClick={onClick}
        img={img[1]}>
        <NavSetAndNotDropdown
          title={'All Notifications'}
          subtitle={`You have ${2} unread messages`}
          buttonTitle={'View all'}>

          {/* Creat notification cards */}
          {notificationList.map((notification, index) => (
            <NavNotificationDropdownCard
              key={index}
              className={notification.isUnread ? "notifications-unread" : "notifications-read"}
              img={notification.img}
              title={notification.title}
              time={notification.time}
            />
          ))}
        </NavSetAndNotDropdown>
      </NavSettingsButton>
    </div>
  )
}