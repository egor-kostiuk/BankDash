import { useState } from 'react';

import './SwitchTheme.css';

export const SwitchTheme = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className={'theme-switcher'}>
      <button
        className={`theme-button light ${theme === 'light' ? 'active' : ''}`}
        onClick={() => handleThemeChange('light')}
      >
        <span className={'top-part-l'}></span>
        <div className={'bottom-box'}>
          <span className={'part-1-l'}></span>
          <span className={'part-2-l'}></span>
        </div>
      </button>
      <button
        className={`theme-button dark ${theme === 'dark' ? 'active' : ''}`}
        onClick={() => handleThemeChange('dark')}
      >
        <span className={'top-part-d'}></span>
        <div className={'bottom-box'}>
          <span className={'part-1-d'}></span>
          <span className={'part-2-d'}></span>
        </div>
      </button>
      <button
        className={`theme-button ocean ${theme === 'ocean' ? 'active' : ''}`}
        onClick={() => handleThemeChange('ocean')}
      >
        <span className={'top-part-o'}></span>
        <div className={'bottom-box'}>
          <span className={'part-1-o'}></span>
          <span className={'part-2-o'}></span>
        </div>
      </button>
    </div>
  )
}