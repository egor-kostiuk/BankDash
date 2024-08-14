import {NavbarButtonBox} from "/src/ui/components/molecules/NavbarButtonBox/NavbarButtonBox.jsx";
import {NavbarInputBox} from "/src/ui/components/molecules/NavbarInputBox/NavbarInputBox.jsx";
import {NavbarProfileButton} from "../../atoms/Buttons/NavButtons/NavbarProfileButtom/NavbarProfileButton.jsx";
import {navbarImgList} from "/src/helpers/navbarList.js";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <aside className={'navbar'}>
      <h1>Overview</h1>
      <NavbarInputBox img={navbarImgList.magnifyingGlass}/>
      <NavbarButtonBox img={[navbarImgList.settings, navbarImgList.notifications]}/>
      <NavbarProfileButton img={navbarImgList.profile}/>
    </aside>
  )
}