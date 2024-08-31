import "./SettingsInput.css";

export const SettingsInput = ({ style, title, type, placeholder, onChange, readOnly }) => {
  return (
    <input className={'settings-input'}
      style={style}
      title={title}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      readOnly={readOnly}
    />
  )
}