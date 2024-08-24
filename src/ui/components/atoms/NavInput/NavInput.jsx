import "./NavInput.css";

export const NavInput = ({ type, onChange, placeholder }) => {
    return (
        <input className={'nav-input'}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
        />
    )
}