import "./Input.css";

export const Input = ({ type, onChange }) => {
  return (
    <input className={'auth-input'}
      type={type}
      onChange={onChange}
    />
  )
}