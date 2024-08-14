import "./NavInput.css";

export const NavInput = ({type, onChange}) => {
    return (
        <input className={'nav-input'}
          type={type}
          onChange={onChange}
          placeholder={"Search for something"}
        />
    )
}