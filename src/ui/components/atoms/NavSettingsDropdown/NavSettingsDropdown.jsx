import { NavSettingsDropdownContent } from "../NavSettingsDropdownContent/NavSettingsDropdownContent.jsx";
import { navSettingsDropdownImgList } from "/src/helpers/navSettingsDropdownImgList.js";

import  "./NavSettingsDropdown.css"


export const NavSettingsDropdown = () => {
  return (
    <>
      <div className={'nav-dropdown-notifications-title'}>
        <h6>All Notifications</h6>
        <p className={'unread-messages'}>You have 2 unread messages</p>
      </div>
    <hr className={'notifications-hr'}/>
      <ul className={'nav-dropdown-notifications-list'}>
        <NavSettingsDropdownContent className={'notifications-unread'} img={navSettingsDropdownImgList.transactionMoney} title={'Transaction Successful'} time={'Aug 29, 2024 2:51 pm'}/>
        <NavSettingsDropdownContent className={'notifications-unread'} img={navSettingsDropdownImgList.lowBalanceAlert} title={'Low Balance Alert'} time={'Aug 29, 2024 12:06 pm'}/>
        <NavSettingsDropdownContent className={'notifications-read'} img={navSettingsDropdownImgList.newLoanOffer} title={'New Loan Offer'} time={'Aug 28, 2024 1:51 pm'}/>
      </ul>
    <hr className={'notifications-hr'}/>
    </>
  );
};