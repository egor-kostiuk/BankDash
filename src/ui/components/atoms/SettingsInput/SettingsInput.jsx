import "./SettingsInput.css";

export const SettingsInput = ({title, type, placeholder}) => {
  return (
    <input className={'settings-input'}
      title={title}
      type={type}
      placeholder={placeholder}
    />
  )
}