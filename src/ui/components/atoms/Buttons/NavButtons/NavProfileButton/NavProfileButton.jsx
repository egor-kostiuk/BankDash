import "./NavProfileButton.css";

export const NavProfileButton = ({onClick, img}) => {
  return (
    <button className={'nav-profile-button'} onClick={onClick}>
      <img src={img}/>
    </button>
  )
}