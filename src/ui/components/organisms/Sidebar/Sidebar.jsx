import {SidebarButtonBox} from "/src/ui/components/molecules/SidebarButtonBox/SidebarButtonBox.jsx";
import {sidebarItemsList} from "/src/helpers/sidebarItemsList.js";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul className='sidebar-list'>
        {sidebarItemsList.map((item, index) => (
          <SidebarButtonBox
            key={index}
            className='sidebar-list-item'
            img={item.img}
            label={item.label}
            path={item.path}
          />
        ))}
      </ul>
    </aside>
  )
}