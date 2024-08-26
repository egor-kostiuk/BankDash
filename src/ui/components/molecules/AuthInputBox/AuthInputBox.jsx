import { AuthLabel } from "/src/ui/components/atoms/AuthLabel/AuthLabel.jsx";
import { AuthInput } from "/src/ui/components/atoms/AuthInput/AuthInput.jsx";

import "./AuthInputBox.css";

export const AuthInputBox = ({type, onChange}) => {
  return (
    <div className={'input-box'}>
      <AuthLabel type={type}/>
      <AuthInput type={type} onChange={onChange}/>
    </div>
  )
}