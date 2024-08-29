import {navImgSvgList} from "../../../../helpers/navImgSvgList.js";

import "./NavProfileDropdownSettings.css";

export const NavProfileDropdownSettings = ({ onClick }) => {
  return (
    <div className={'profile-settings'} onClick={onClick}>
        <div className={'profile-settings-img'}>
          <img src={navImgSvgList.profileSettings} alt={'Profile Settings'}/>
        </div>
      <div className={'profile-settings-text-box'}>
          <h6>My profile</h6>
          <h6>Account Settings</h6>
        </div>
    </div>
  )
}