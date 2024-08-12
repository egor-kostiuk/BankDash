import {useNavigate} from "react-router-dom";

import {SidebarButton} from "/src/ui/components/atoms/Buttons/SidebarButton/SidebarButton.jsx";

import "./SidebarButtonBox.css";

export const SidebarButtonBox = ({img, label, path}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className={'sidebar-button-wrapper'}>
      <SidebarButton
        onClick={handleClick}
        img={img}
        label={label}
      />
    </div>
  )
}