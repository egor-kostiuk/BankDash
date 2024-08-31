import { useNavigate } from "react-router-dom";
import { useProfile } from "/src/hooks/useProfile.js";

import { NavProfileDropdownInfo } from "../NavProfileDropdownInfo/NavProfileDropdownInfo.jsx";
import { NavProfileDropdownSettings } from "../NavProfileDropdownSettings/NavProfileDropdownSettings.jsx";
import { NavLogoutButton } from "../Buttons/NavButtons/NavLogoutButton/NavLogoutButton.jsx";

import "./NavProfileDropdown.css";

export const NavProfileDropdown = ({ img, closeDropdown }) => {
  const navigate = useNavigate();
  const { userDetails, handleLogout } = useProfile();

  const navigateToProfileSettingPage = () => {
    navigate("/settings");
    closeDropdown();
  };

  return (
    <>
      <h6 className={'user-profile-title'}>User profile</h6>
      <ul>
        <NavProfileDropdownInfo
          img={img}
          title={[userDetails?.firstName, userDetails?.lastName]}
          subtitle={userDetails?.profession}
          email={userDetails?.email}
        />
        <hr className={'profile-hr'}/>
        <NavProfileDropdownSettings onClick={navigateToProfileSettingPage}/>
        <div className={'logout-button-box'}>
          <NavLogoutButton label={'Logout'} onClick={handleLogout}/>
        </div>
      </ul>
    </>
  );
};
