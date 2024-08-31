import { NavSettingsButtonsBox } from "/src/ui/components/molecules/NavSettingsButtonsBox/NavSettingsButtonsBox.jsx";
import { NavInputBox } from "/src/ui/components/molecules/NavInputBox/NavInputBox.jsx";
import { NavProfileButton } from "/src/ui/components/atoms/Buttons/NavButtons/NavProfileButton/NavProfileButton.jsx";
import { navImgList } from "/src/helpers/navImgList.js";

import "./Nav.css";

export const Nav = ({ title }) => {
  return (
    <nav className={'nav'}>
      <h1>{title}</h1>
      <div className={'nav-settings-wrapper'}>
        <NavInputBox img={navImgList.magnifyingGlass}/>
        <NavSettingsButtonsBox img={[navImgList.settings, navImgList.notifications]}/>
        <NavProfileButton img={navImgList.profile}/>
      </div>
    </nav>
  )
}