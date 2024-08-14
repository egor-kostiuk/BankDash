import "./NavbarInput.css";

export const NavbarInput = ({type, onChange}) => {
    return (
        <input className={'navbar-input'}
          type={type}
          onChange={onChange}
          placeholder={"Search for something"}
        />
    )
}