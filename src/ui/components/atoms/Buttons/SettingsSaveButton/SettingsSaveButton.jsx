import "./SettingsSaveButton.css";

export const SettingsSaveButton = ({ onClick, label }) => {
  return (
    <button className={'setting-save-button'} onClick={onClick}>
      {label}
    </button>
  )
}