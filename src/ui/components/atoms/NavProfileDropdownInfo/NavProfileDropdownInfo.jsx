import "./NavProfileDropdownInfo.css";

export const NavProfileDropdownInfo = ({ img, title, subtitle, email }) => (
  <div className={'user-profile'}>
    <div className={'user-profile-box'}>
      <img src={img} alt="" />
      <div className={'user-info-box'}>
        <h6 className={'dropdown-username'}>{title}</h6>
        <h6 className={'dropdown-activity'}>{subtitle}</h6>
        <h6 className={'dropdown-mail'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" d="m7 9l3.75 3a2 2 0 0 0 2.5 0L17 9m4 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2" />
          </svg>
          {email}
        </h6>
      </div>
    </div>
  </div>
);
