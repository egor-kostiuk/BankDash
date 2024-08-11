import "./AuthButton.css";

export const AuthButton = ({onclick, label}) => {
  return (
    <button className={'Button'} onClick={onclick}>
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