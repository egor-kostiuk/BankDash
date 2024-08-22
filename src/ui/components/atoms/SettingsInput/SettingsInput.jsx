import "./SettingsInput.css";

export const SettingsInput = ({title, type, placeholder, onChange}) => {
  return (
    <input className={'settings-input'}
      title={title}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}