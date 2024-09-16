import { SettingsLabel } from '/src/ui/components/atoms/SettingsLabel/SettingsLabel.jsx';
import { SettingsSelectInput } from '/src/ui/components/atoms/SettingsSelectInput/SettingsSelectInput.jsx';

import './SettingsSelectInputBox.css';

export const SettingsSelectInputBox = ({ title, placeholder, onChange, selectedValue, list }) => {

  return (
    <div className={'settings-chose-input-box'}>
      <SettingsLabel title={title}/>
      <SettingsSelectInput
        list={list}
        placeholder={placeholder}
        onChange={onChange}
        selectedValue={selectedValue}
      />
    </div>
  )
}