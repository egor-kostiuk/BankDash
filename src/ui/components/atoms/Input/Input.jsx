import "./Input.css";

export const Input = ({type, onChange}) => {
  return (
    <input
      type={type}
      onChange={onChange}
    />
  )
}