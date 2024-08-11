import {Label} from "ui/components/atoms/Label/Label.jsx";
import {Input} from "ui/components/atoms/Input/Input.jsx";

import "./InputBox.css";

export const InputBox = ({type, onChange}) => {
  return (
    <div className={'input-box'}>
      <Label type={type}/>
      <Input type={type} onChange={onChange}/>
    </div>
  )
}