import "./NavbarSettingsButton.css";

export const NavbarSettingsButton = ({onClick, img}) => {
  return (
    <button className={'navbar-settings-button'} onClick={onClick}>
      <img src={img}/>
    </button>  )
}