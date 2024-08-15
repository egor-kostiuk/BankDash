import {NavSettingsButton} from "/src/ui/components/atoms/Buttons/NavButtons/NavSettingsButton/NavSettingsButton.jsx";

import "./NavButtonBox.css";

export const NavButtonsBox = ({onClick, img}) => {
  return (
    <div className={'nav-button-wrapper'}>
      <NavSettingsButton
        onClick={onClick}
        img={img[0]}
      />
      <NavSettingsButton
        onClick={onClick}
        img={img[1]}
      />
    </div>
  )
}