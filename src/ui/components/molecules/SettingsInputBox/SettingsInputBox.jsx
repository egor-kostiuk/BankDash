import { SettingsLabel } from '/src/ui/components/atoms/SettingsLabel/SettingsLabel.jsx';
import { SettingsInput } from '/src/ui/components/atoms/SettingsInput/SettingsInput.jsx';

import './SettingsInputBox.css';

export const SettingsInputBox = ({ style, title, type, placeholder, onChange, readOnly, maxLength }) => {
  return (
    <div className={'settings-input-box'} style={style}>
      <SettingsLabel title={title}/>
      <SettingsInput
        style={style}
        title={title}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        maxLength={maxLength}
      />
    </div>
  )
}