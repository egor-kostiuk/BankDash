import "./Settings.css";

export const SettingsContent = () => {
  return (
    <div className="settings-container">
      <div className="settings-buttons-box">
        <button onClick={() => console.log('profile')}>Edit profile</button>
        <button onClick={() => console.log('security')}>Preferences</button>
        <button onClick={() => console.log('notifications')}>Security</button>
      </div>
      <div className="content">
        {''}
      </div>
    </div>
  )
}