import { useState } from "react";
import { NavSettingsDropdownContent } from "../NavSettingsDropdownContent/NavSettingsDropdownContent.jsx";
import { navSettingsDropdownImgList } from "/src/helpers/navSettingsDropdownImgList.js";

import "./NavSettingsDropdown.css";

export const NavSettingsDropdown = () => {
  // Initialize the notification state
  const [notifications] = useState([
    {
      img: navSettingsDropdownImgList.transactionMoney,
      title: "Transaction Successful",
      time: "Aug 29, 2024 2:51 pm",
      isUnread: true,
    },
    {
      img: navSettingsDropdownImgList.lowBalanceAlert,
      title: "Low Balance Alert",
      time: "Aug 29, 2024 12:06 pm",
      isUnread: true,
    },
    {
      img: navSettingsDropdownImgList.newLoanOffer,
      title: "New Loan Offer",
      time: "Aug 28, 2024 1:51 pm",
      isUnread: false,
    },
  ]);

  // Counting the number of unread notifications
  const unreadCount = notifications.filter(
    (notification) => notification.isUnread
  ).length;

  return (
    <>
      <div className={"nav-dropdown-notifications-title"}>
        <h6>All Notifications</h6>
        <p>{unreadCount === 0 ? "You have no unread messages" : `You have ${unreadCount} unread message${ unreadCount > 1 ? "s" : "" }`}</p>
      </div>
      <hr className={"notifications-hr"} />
      <ul className={"nav-dropdown-notifications-list"}>
        {notifications.map((notification, index) => (
          <NavSettingsDropdownContent
            key={index}
            className={ notification.isUnread ? "notifications-unread" : "notifications-read" }
            img={notification.img}
            title={notification.title}
            time={notification.time}
          />
        ))}
      </ul>
      <hr className={"notifications-hr"} />
      <div className={"nav-notifications-dropdown-button-box"}>
        <button>View All</button>
      </div>
    </>
  );
};
