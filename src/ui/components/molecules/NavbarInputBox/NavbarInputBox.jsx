import {NavbarInput} from "/src/ui/components/atoms/NavbarInput/NavbarInput.jsx";
import {NavbarInputButton} from "/src/ui/components/atoms/Buttons/NavButtons/NavbarInputButton/NavbarInputButton.jsx"

import "./NavbarInputBox.css";

export const NavbarInputBox = ({type, onChange, img}) => {
  return (
    <div className={'navbar-input-box'}>
      <NavbarInputButton img={img}/>
      <NavbarInput type={type} onChange={onChange}/>
    </div>
  )
}