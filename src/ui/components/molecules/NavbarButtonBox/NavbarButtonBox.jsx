import {NavbarSettingsButton} from "/src/ui/components/atoms/Buttons/NavButtons/NavbarSettingsButton/NavbarSettingsButton.jsx";

import "./NavbarButtonBox.css";

export const NavbarButtonBox = ({onClick, img}) => {
  return (
    <div className={'navbar-button-wrapper'}>
      <NavbarSettingsButton
        onClick={onClick}
        img={img[0]}
      />
      <NavbarSettingsButton
        onClick={onClick}
        img={img[1]}
      />
    </div>
  )
}