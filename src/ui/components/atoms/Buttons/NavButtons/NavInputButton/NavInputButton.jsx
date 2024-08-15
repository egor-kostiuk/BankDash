import "./NavInputButton.css";

export const NavInputButton = ({onClick, img}) => {
  return (
    <button className={'nav-input-button'} onClick={onClick}>
      <img src={img} alt={''}/>
    </button>
  )
}