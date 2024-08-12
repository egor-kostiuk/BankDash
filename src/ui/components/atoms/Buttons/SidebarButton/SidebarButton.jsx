import "./SidebarButton.css";

export const SidebarButton = ({onClick, img, label}) => {
  return (
    <button className={'sidebar-button'} onClick={onClick}>
      <img src={img} alt={label}/>
      <span>{label}</span>
    </button>
  )
}