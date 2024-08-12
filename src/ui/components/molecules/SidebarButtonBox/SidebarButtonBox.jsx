import {SidebarButton} from "/src/ui/components/atoms/Buttons/SidebarButton/SidebarButton.jsx";

import "./SidebarButtonBox.css";

export const SidebarButtonBox = ({onClick, img, label}) => {
  return (
    <div className={'sidebar-button-wrapper'}>
      <SidebarButton
        onClick={onClick}
        img={img}
        label={label}
      />
    </div>
  )
}