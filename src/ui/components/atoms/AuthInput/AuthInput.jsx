import "./AuthInput.css";

export const AuthInput = ({type, onChange}) => {
  return (
    <input className={'auth-input'}
      type={type}
      onChange={onChange}
    />
  )
}