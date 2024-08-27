import "./SidebarButton.css";

export const SidebarButton = ({ onClick, img, label, activeClass }) => {
  return (
    <button className={`sidebar-button ${activeClass}`} onClick={onClick}>
      <img src={img} alt={label}/>
      <span>{label}</span>
    </button>
  )
}