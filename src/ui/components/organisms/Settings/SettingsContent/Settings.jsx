import {useState} from 'react';
import "./Settings.css";
import { SettingsContentRender } from '../SettingsContentRender.jsx';  // або '../organisms/SettingsContentRender.jsx'

export const SettingsContent = () => {
  const [activeContent, setActiveContent] = useState('profile');

  return (
    <div className="settings-container">
      <div className="settings-buttons-box">
        <button onClick={() => setActiveContent('profile')}>Edit profile</button>
        <button onClick={() => setActiveContent('preferences')}>Preferences</button>
        <button onClick={() => setActiveContent('security')}>Security</button>
      </div>
      <div className="content">
        <SettingsContentRender activeContent={activeContent} />
      </div>
    </div>
  );
}