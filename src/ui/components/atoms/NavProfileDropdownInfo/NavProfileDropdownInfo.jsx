import {navImgSvgList} from "../../../../helpers/navImgSvgList.js";

import "./NavProfileDropdownInfo.css";

export const NavProfileDropdownInfo = ({ img, title, subtitle, email }) => (
  <div className={'user-profile'}>
    <div className={'user-profile-box'}>
      <img src={img} alt="" className={'profile-img'}/>
      <div className={'user-info-box'}>
        <h6 className={'dropdown-username'}>{title[0]} {title[1]}</h6>
        <h6 className={'dropdown-activity'}>{subtitle}</h6>
        <h6 className={'dropdown-mail'}>
          <h6 className={'dropdown-mail'}>
            <img src={navImgSvgList.infoMail} alt="Mail Icon"/>
            {email}
          </h6>
        </h6>
      </div>
    </div>
  </div>
);
