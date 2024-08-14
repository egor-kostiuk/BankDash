import "./NavbarInputButton.css";

export const NavbarInputButton = ({onClick, img}) => {
  return (
    <button className={'navbar-input-button'} onClick={onClick}>
      <img src={img}/>
    </button>
  )
}