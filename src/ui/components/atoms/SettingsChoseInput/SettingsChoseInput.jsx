import "./SettingsChoseInput.css";

export const SettingsChoseInput = ({ type, placeholder, readOnly }) => {
  return (
    <input
      className={'settings-chose-input'}
      type={type}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  )
}