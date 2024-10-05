import { useState } from 'react';
import { SettingsContentRender } from '/src/ui/components/helpers/SettingsContentRender.jsx';

import './Settings.css';

export const SettingsContent = () => {
  const [activeContent, setActiveContent] = useState('profile');

  return (
    <div className={'settings-container'}>
      <div className={'settings-buttons-box'}>
        <button
          className={activeContent === 'profile' ? 'settings-button-active' : ''}
          onClick={() => setActiveContent('profile')}
        >
          Edit profile
        </button>
        <button
          className={activeContent === 'preferences' ? 'settings-button-active' : ''}
          onClick={() => setActiveContent('preferences')}
        >
          Preferences
        </button>
        <button
          className={activeContent === 'security' ? 'settings-button-active' : ''}
          onClick={() => setActiveContent('security')}
        >
          Security
        </button>
      </div>
      <div className={'content'}>
        <SettingsContentRender activeContent={activeContent}/>
      </div>
    </div>
  )
}