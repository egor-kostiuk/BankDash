import { Label } from "/src/ui/components/atoms/Label/Label.jsx";
import { Input } from "/src/ui/components/atoms/Input/Input.jsx";

import "./InputBox.css";

export const InputBox = ({ type, onChange }) => {
  return (
    <div className={'input-box'}>
      <Label type={type}/>
      <Input type={type} onChange={onChange}/>
    </div>
  )
}