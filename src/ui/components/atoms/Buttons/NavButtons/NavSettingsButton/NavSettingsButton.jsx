import "./NavSettingsButton.css";

export const NavSettingsButton = ({ onClick, img }) => {
  return (
    <button className={'nav-settings-button'} onClick={onClick}>
      <img src={img} alt={''}/>
    </button>  )
}