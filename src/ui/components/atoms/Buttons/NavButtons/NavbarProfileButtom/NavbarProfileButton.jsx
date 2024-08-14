import "./NavbarProfileButton.css";

export const NavbarProfileButton = ({onClick, img}) => {
  return (
    <button className={'navbar-profile-button'} onClick={onClick}>
      <img src={img}/>
    </button>
  )
}