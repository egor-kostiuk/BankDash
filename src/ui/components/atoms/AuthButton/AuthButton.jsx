import "./AuthButton.css";

export const AuthButton = ({onClick, label}) => {
  return (
    <button className={'Button'} onClick={onClick}>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {label}
      </div>
    </button>
  )
}