import "./NavLogoutButton.css";

export const NavLogoutButton = ({label, onClick}) => {
  return (
    <button className={'logout-button'} onClick={onClick}>
      {label}
    </button>
  )
}