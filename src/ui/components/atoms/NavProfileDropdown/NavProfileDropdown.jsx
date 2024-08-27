import { useNavigate } from "react-router-dom";
import { NavProfileDropdownInfo } from "../NavProfileDropdownInfo/NavProfileDropdownInfo.jsx";
import { NavProfileDropdownSettings } from "../NavProfileDropdownSettings/NavProfileDropdownSettings.jsx";
import { NavLogoutButton } from "../Buttons/NavButtons/NavLogoutButton/NavLogoutButton.jsx";

import "./NavProfileDropdown.css";

export const NavProfileDropdown = ({ img, closeDropdown }) => {
  const navigate = useNavigate();

  const navigateToProfileSettingPage = () => {
    navigate("/test");
    closeDropdown();
  };

  return (
    <>
      <h6 className={'user-profile-title'}>User profile</h6>
      <ul>
        <NavProfileDropdownInfo img={img} title={'Charlene Reed'} subtitle={'Designer'} email={'info@dashbank.com'}/>
        <hr className={'profile-hr'}/>
        <NavProfileDropdownSettings onClick={navigateToProfileSettingPage}/>
        <div className={'logout-button-box'}>
          <NavLogoutButton label={'Logout'}/>
        </div>
      </ul>
    </>
  );
};
