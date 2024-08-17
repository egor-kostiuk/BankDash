import {SettingsLabel} from "/src/ui/components/atoms/SettingsLabel/SettingsLabel.jsx";
import {SettingsInput} from "/src/ui/components/atoms/SettingsInput/SettingsInput.jsx";

import "./SettingsInputBox.css";

export const SettingsInputBox = ({title, type, placeholder}) => {
  return (
    <div className={'settings-input-box'}>
      <SettingsLabel title={title}/>
      <SettingsInput title={title} type={type} placeholder={placeholder}/>
    </div>
  )
}