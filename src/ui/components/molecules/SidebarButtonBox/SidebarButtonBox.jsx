import {useNavigate} from "react-router-dom";

import {SidebarButton} from "/src/ui/components/atoms/Buttons/SidebarButton/SidebarButton.jsx";

import "./SidebarButtonBox.css";

export const SidebarButtonBox = ({imgActive, img, label, path, isActive}) => {
  const navigate = useNavigate();
  const activeClass = isActive ? "sidebar-button-active" : "sidebar-button";

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className={`sidebar-button-wrapper ${isActive ? 'active' : ''}`}>
      <SidebarButton
        onClick={handleClick}
        img={isActive ? imgActive : img}
        label={label}
        activeClass={activeClass}
      />
    </div>
  )
}