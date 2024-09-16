import "./AuthInput.css";

export const AuthInput = ({ type, onChange, value }) => {
  return (
    <input className={'auth-input'}
      type={type}
      onChange={onChange}
      value={value}
    />
  )
}