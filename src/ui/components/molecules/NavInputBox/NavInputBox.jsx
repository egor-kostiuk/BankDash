import {NavInput} from "/src/ui/components/atoms/NavInput/NavInput.jsx";
import {NavInputButton} from "/src/ui/components/atoms/Buttons/NavButtons/NavInputButton/NavInputButton.jsx"

import "./NavInputBox.css";

export const NavInputBox = ({type, onChange, img}) => {
  return (
    <div className={'nav-input-box'}>
      <NavInputButton img={img}/>
      <NavInput type={type} onChange={onChange} placeholder={"Search for something"}/>
    </div>
  )
}