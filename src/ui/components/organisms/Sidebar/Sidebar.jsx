import { useLocation } from "react-router-dom";
import { SidebarButtonBox } from "/src/ui/components/molecules/SidebarButtonBox/SidebarButtonBox.jsx";
import { sidebarItemsList } from "/src/helpers/sidebarItemsList.js";

import "./Sidebar.css";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className='sidebar'>
      <ul className='sidebar-list'>
        {sidebarItemsList.map((item, index) => (
          <SidebarButtonBox
            key={index}
            className='sidebar-list-item'
            img={item.img}
            imgActive={item.imgActive}
            label={item.label}
            path={item.path}
            isActive={location.pathname === item.path}
          />
        ))}
      </ul>
    </aside>
  )
}