import {SidebarButtonBox} from "/src/ui/components/molecules/SidebarButtonBox/SidebarButtonBox.jsx";
import {sidebarImgList} from "/src/helpers/sidebarList.js";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className={'sidebar'}>
      <SidebarButtonBox img={sidebarImgList.dashboard} label={'Dashboard'}/>
      <SidebarButtonBox img={sidebarImgList.transactions} label={'Transactions'}/>
      <SidebarButtonBox img={sidebarImgList.account} label={'Account'}/>
      <SidebarButtonBox img={sidebarImgList.investments} label={'Investments'}/>
      <SidebarButtonBox img={sidebarImgList.creditCards} label={'Credit-Cards'}/>
      <SidebarButtonBox img={sidebarImgList.loans} label={'Loans'}/>
      <SidebarButtonBox img={sidebarImgList.services} label={'Services'}/>
      <SidebarButtonBox img={sidebarImgList.settings} label={'Settings'}/>
    </aside>
  )
}