import {NavButtonsBox} from "/src/ui/components/molecules/NavButtonsBox/NavButtonsBox.jsx";
import {NavInputBox} from "/src/ui/components/molecules/NavInputBox/NavInputBox.jsx";
import {NavProfileButton} from "/src/ui/components/atoms/Buttons/NavButtons/NavProfileButton/NavProfileButton.jsx";
import {navImgList} from "/src/helpers/navImgList.js";

import "./Nav.css";

export const Nav = () => {
  return (
    <aside className={'nav'}>
      <h1>Overview</h1>
      <NavInputBox img={navImgList.magnifyingGlass}/>
      <NavButtonsBox img={[navImgList.settings, navImgList.notifications]}/>
      <NavProfileButton img={navImgList.profile}/>
    </aside>
  )
}