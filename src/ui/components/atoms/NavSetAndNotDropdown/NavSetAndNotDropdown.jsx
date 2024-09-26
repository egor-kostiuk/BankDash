import './NavSetAndNotDropdown.css';

export const NavSetAndNotDropdown = ({ children, title, subtitle, buttonTitle }) => { // TODO: rename component
  return (
    <>
      <div className={"nav-sn-dropdown-title"}>
        <h6>{title}</h6>
        {subtitle ? (
          <p>{subtitle}</p>
        ) : <></>}
      </div>
      <hr className={"sn-dropdown-hr"}/>
      <ul className={"nav-sn-dropdown-notifications-list"}>
        {children}
      </ul>
      {buttonTitle ? (
        <>
          <hr className={"sn-dropdown-hr"}/>
          <div className={"nav-sn-dropdown-button-box"}>
            <button>{buttonTitle}</button>
          </div>
        </>
        ) : <></>}
    </>
  )
}