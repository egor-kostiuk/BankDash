import { SettingsLabel } from "/src/ui/components/atoms/SettingsLabel/SettingsLabel.jsx";
import { SettingsChoseInput } from "/src/ui/components/atoms/SettingsChoseInput/SettingsChoseInput.jsx";

import "./SettingsChoseInputBox.css";


export const SettingsChoseInputBox = ({ title, placeholder }) => {
  return (
    <div className={'settings-chose-input-box'}>
      <SettingsLabel title={title}/>
      <SettingsChoseInput placeholder={placeholder}/>
    </div>
  )
}